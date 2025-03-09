var VpaidHtmlPlayer = function() {
  this.slot_ = null;
  this.iframe_ = null;
  this.skipBtn_ = null;
  this.skipTimer_ = null;
  this.skipDelay_ = 8;
  this.progressBar_ = null;
  this.progressBarContainer_ = null;
  this.eventsCallbacks_ = {};
  this.attributes_ = {
    'companions': '',
    'desiredBitrate': 256,
    'duration': 30,
    'expanded': false,
    'height': 0,
    'icons': '',
    'linear': true,
    'remainingTime': 30,
    'skippableState': false,
    'skipTime': 0,
    'clickUrl': null,
    'viewMode': 'normal',
    'width': 0,
    'volume': 1.0
  };

  this.quartileEvents_ = [
    {event: 'AdImpression', value: 0},
    {event: 'AdStarted', value: 0},
    {event: 'AdVideoFirstQuartile', value: 25},
    {event: 'AdVideoMidpoint', value: 50},
    {event: 'AdVideoThirdQuartile', value: 75},
    {event: 'AdVideoComplete', value: 100}
  ];

  this.nextQuartileIndex_ = 0;
  this.parameters_ = {};
};

VpaidHtmlPlayer.prototype.handshakeVersion = function(version) {
  return '2.0';
};

VpaidHtmlPlayer.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.attributes_['desiredBitrate'] = desiredBitrate;

  this.slot_ = environmentVars.slot;

  try {
    this.parameters_ = JSON.parse(creativeData['AdParameters']);

    if (this.parameters_.duration) {
      this.attributes_['duration'] = this.parseDuration(this.parameters_.duration);
      this.callEvent_('AdDurationChange');
    }
    if (this.parameters_.skipTime) {
      this.attributes_['skipTime'] = parseInt(this.parameters_.skipTime);
    }
    if (this.parameters_.clickUrl) {
      this.attributes_['clickUrl'] = this.parameters_.clickUrl;
    }
  } catch (e) {
    console.error('Error parsing AdParameters:', e);
  }

  this.createIframe_();

  this.callEvent_('AdLoaded');
};

VpaidHtmlPlayer.prototype.parseDuration = function(durationString) {
  const parts = durationString.split(':').map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
};

VpaidHtmlPlayer.prototype.createIframe_ = function() {
  this.iframe_ = document.createElement('iframe');
  this.iframe_.id = 'vpaid-iframe';
  this.iframe_.style.border = 'none';
  this.iframe_.style.width = '100%';
  this.iframe_.style.height = '100%';
  this.iframe_.style.position = 'absolute';
  this.iframe_.src = this.parameters_.iframeUrl || 'about:blank';
  this.slot_.appendChild(this.iframe_);

  this.skipBtn_ = document.createElement('button');
  this.skipBtn_.id = 'vpaid-skip-btn';
  this.skipBtn_.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  this.skipBtn_.style.color = 'white';
  this.skipBtn_.style.fontSize = '13px';
  this.skipBtn_.style.padding = '5px 10px';
  this.skipBtn_.style.position = 'absolute';
  this.skipBtn_.style.top = '10px';
  this.skipBtn_.style.right = '10px';
  this.skipBtn_.style.zIndex = '9999';
  this.skipBtn_.style.display = 'none';
  this.skipBtn_.addEventListener('click', this.skipAd.bind(this));
  this.slot_.appendChild(this.skipBtn_);

  this.progressBarContainer_ = document.createElement('div');
  this.progressBarContainer_.style.position = 'absolute';
  this.progressBarContainer_.style.bottom = '0';
  this.progressBarContainer_.style.left = '0';
  this.progressBarContainer_.style.width = '100%';
  this.progressBarContainer_.style.height = '5px';
  this.progressBarContainer_.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  this.progressBarContainer_.style.zIndex = '9998';

  this.progressBar_ = document.createElement('div');
  this.progressBar_.style.width = '0%';
  this.progressBar_.style.height = '100%';
  this.progressBar_.style.backgroundColor = 'rgba(229, 204, 19, 0.8)';
  this.progressBar_.style.transition = 'width 1.0s linear';

  this.progressBarContainer_.appendChild(this.progressBar_);
  this.slot_.appendChild(this.progressBarContainer_);

  window.addEventListener('message', this.onMessageReceived_.bind(this), false);
};

VpaidHtmlPlayer.prototype.onMessageReceived_ = function(event) {
  if (event.source === this.iframe_.contentWindow) {
    var message = event.data;
    if (message.type === 'vpaid' && message.event) {
      //this.callEvent_(message.event);
      if (message.event === 'AdClickThru') {
        this.AdClickThru();
      } else {
        this.callEvent_(message.event);
      }
    }
  }
};

VpaidHtmlPlayer.prototype.startAd = function() {
  //this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'start'}, '*');
  this.callEvent_('AdStarted');

  this.startSkipTimer_();
};

VpaidHtmlPlayer.prototype.AdClickThru = function() {
  if ('AdClickThru' in this.eventsCallbacks_) {
    this.eventsCallbacks_['AdClickThru'](this.attributes_['clickUrl'], '0', true);
  }
};

VpaidHtmlPlayer.prototype.startSkipTimer_ = function() {
  let secondsElapsed = 0;
  const totalDuration = this.attributes_['duration'];
  const skipTime = this.attributes_['skipTime'];

  this.skipTimer_ = setInterval(() => {
    secondsElapsed++;
    const percentComplete = (secondsElapsed / totalDuration) * 100;

    this.progressBar_.style.width = `${percentComplete}%`;

    if (secondsElapsed < skipTime) {
      this.skipBtn_.innerHTML = `Skip in ${skipTime - secondsElapsed}`;
      this.skipBtn_.style.display = 'block';
      this.skipBtn_.disabled = true;
    } else {
      this.skipBtn_.innerHTML = 'Skip Ad';
      this.skipBtn_.disabled = false;
      if (this.attributes_['skippableState'] === false) {
        this.attributes_['skippableState'] = true;
        this.callEvent_('AdSkippableStateChange');
      }
    }

    this.attributes_['remainingTime'] = Math.max(0, totalDuration - secondsElapsed);

    if (secondsElapsed >= totalDuration) {
      clearInterval(this.skipTimer_);
      this.stopAd();
    }

    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) {
      return;
    }

    if (percentComplete >= this.quartileEvents_[this.nextQuartileIndex_].value) {
      var lastQuartileEvent = this.quartileEvents_[this.nextQuartileIndex_].event;
      console.log('[JS] Calling event lastQuartileEvent', lastQuartileEvent);
      this.eventsCallbacks_[lastQuartileEvent]();
      this.nextQuartileIndex_ += 1;
    }

  }, 1000);
};

VpaidHtmlPlayer.prototype.stopAd = function() {
  this.log('Stopping ad');
  clearInterval(this.skipTimer_);
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'stop'}, '*');
  this.skipBtn_.style.display = 'none';
  this.progressBarContainer_.style.display = 'none';
  setTimeout(this.callEvent_.bind(this), 1200, ['AdStopped']);
};

VpaidHtmlPlayer.prototype.resizeAd = function(width, height, viewMode) {
  this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.iframe_.style.width = width + 'px';
  this.iframe_.style.height = height + 'px';
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'resize', width: width, height: height}, '*');
  this.callEvent_('AdSizeChange');
};

VpaidHtmlPlayer.prototype.pauseAd = function() {
  this.log('pauseAd');
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'pause'}, '*');
  this.callEvent_('AdPaused');
};

VpaidHtmlPlayer.prototype.resumeAd = function() {
  this.log('resumeAd');
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'resume'}, '*');
  this.callEvent_('AdPlaying');
};

VpaidHtmlPlayer.prototype.expandAd = function() {
  this.log('expandAd');
  this.attributes_['expanded'] = true;
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'expand'}, '*');
  this.callEvent_('AdExpanded');
};

VpaidHtmlPlayer.prototype.collapseAd = function() {
  this.log('collapseAd');
  this.attributes_['expanded'] = false;
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'collapse'}, '*');
  this.callEvent_('AdCollapsed');
};

VpaidHtmlPlayer.prototype.skipAd = function() {
  this.log('skipAd');
  if (this.attributes_['skippableState']) {
    clearInterval(this.skipTimer_);
    this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'skip'}, '*');
    this.skipBtn_.style.display = 'none';
    this.progressBarContainer_.style.display = 'none';
    this.callEvent_('AdSkipped');
    this.stopAd();
  }
};

VpaidHtmlPlayer.prototype.subscribe = function(aCallback, eventName, aContext) {
  // this.log('Subscribe ' + eventName);
  var callBack = aCallback.bind(aContext);
  this.eventsCallbacks_[eventName] = callBack;
};

VpaidHtmlPlayer.prototype.unsubscribe = function(eventName) {
  this.log('unsubscribe ' + eventName);
  this.eventsCallbacks_[eventName] = null;
};

VpaidHtmlPlayer.prototype.getAdLinear = function() {
  return this.attributes_['linear'];
};

VpaidHtmlPlayer.prototype.getAdWidth = function() {
  return this.attributes_['width'];
};

VpaidHtmlPlayer.prototype.getAdHeight = function() {
  return this.attributes_['height'];
};

VpaidHtmlPlayer.prototype.getAdExpanded = function() {
  return this.attributes_['expanded'];
};

VpaidHtmlPlayer.prototype.getAdSkippableState = function() {
  return this.attributes_['skippableState'];
};

VpaidHtmlPlayer.prototype.getAdRemainingTime = function() {
  return this.attributes_['remainingTime'];
};

VpaidHtmlPlayer.prototype.getAdDuration = function() {
  return this.attributes_['duration'];
};

VpaidHtmlPlayer.prototype.getAdVolume = function() {
  return this.attributes_['volume'];
};

VpaidHtmlPlayer.prototype.getAdCompanions = function() {
  return this.attributes_['companions'];
};

VpaidHtmlPlayer.prototype.getAdIcons = function() {
  return this.attributes_['icons'];
};


VpaidHtmlPlayer.prototype.setAdVolume = function(value) {
  this.attributes_['volume'] = value;
  this.log('setAdVolume ' + value);
  this.iframe_.contentWindow.postMessage({type: 'vpaid', action: 'setVolume', value: value}, '*');
  this.callEvent_('AdVolumeChange');
};

VpaidHtmlPlayer.prototype.log = function(message) {
  console.log(message);
};

VpaidHtmlPlayer.prototype.callEvent_ = function(eventType, data) {
  if (eventType in this.eventsCallbacks_) {
  this.eventsCallbacks_[eventType]({data});
  }
};

var getVPAIDAd = function() {
  return new VpaidHtmlPlayer();
};
