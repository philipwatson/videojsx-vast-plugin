/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dailymotion/vast-client/dist/vast-client.min.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,(function(e){"use strict";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=u(e);if(t){var n=u(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adId:e.adId||null,sequence:e.sequence||null,apiFramework:e.apiFramework||null,universalAdIds:[],creativeExtensions:[]}}var m=["ADCATEGORIES","ADCOUNT","ADPLAYHEAD","ADSERVINGID","ADTYPE","APIFRAMEWORKS","APPBUNDLE","ASSETURI","BLOCKEDADCATEGORIES","BREAKMAXADLENGTH","BREAKMAXADS","BREAKMAXDURATION","BREAKMINADLENGTH","BREAKMINDURATION","BREAKPOSITION","CLICKPOS","CLICKTYPE","CLIENTUA","CONTENTID","CONTENTPLAYHEAD","CONTENTURI","DEVICEIP","DEVICEUA","DOMAIN","EXTENSIONS","GDPRCONSENT","IFA","IFATYPE","INVENTORYSTATE","LATLONG","LIMITADTRACKING","MEDIAMIME","MEDIAPLAYHEAD","OMIDPARTNER","PAGEURL","PLACEMENTTYPE","PLAYERCAPABILITIES","PLAYERSIZE","PLAYERSTATE","PODSEQUENCE","REGULATIONS","SERVERSIDE","SERVERUA","TRANSACTIONID","UNIVERSALADID","VASTVERSIONS","VERIFICATIONVENDORS"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[],n=A(e);for(var a in!t.ERRORCODE||r.isCustomCode||/^[0-9]{3}$/.test(t.ERRORCODE)||(t.ERRORCODE=900),t.CACHEBUSTING=E(Math.round(1e8*Math.random()).toString()),t.TIMESTAMP=(new Date).toISOString(),t.RANDOM=t.random=t.CACHEBUSTING,t)t[a]=b(t[a]);for(var o in n){var s=n[o];"string"==typeof s&&i.push(T(s,t))}return i}function T(e,t){var r=(e=y(e,t)).match(/[^[\]]+(?=])/g);if(!r)return e;var i=r.filter((function(e){return m.indexOf(e)>-1}));return 0===i.length?e:y(e,i=i.reduce((function(e,t){return e[t]=-1,e}),{}))}function y(e,t){var r=e;for(var i in t){var n=t[i];r=r.replace(new RegExp("(?:\\[|%%)(".concat(i,")(?:\\]|%%)"),"g"),n)}return r}function A(e){return Array.isArray(e)?e.map((function(e){return e&&e.hasOwnProperty("url")?e.url:e})):e}function k(e,t){for(var r=0;r<t.length;r++)if(R(t[r],e))return!0;return!1}function R(e,t){if(e&&t){var r=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return r.length===i.length&&(e.id===t.id&&e.url===t.url)}return!1}function b(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=String(e);return r.length<t?N(0,t-r.length,!1).map((function(){return"0"})).join("")+r:r}function N(e,t,r){for(var i=[],n=e<t,a=r?n?t+1:t-1:t,o=e;n?o<a:o>a;n?o++:o--)i.push(o);return i}var L={track:function(e,t,r){g(e,t,r).forEach((function(e){"undefined"!=typeof window&&null!==window&&((new Image).src=e)}))},resolveURLTemplates:g,extractURLsFromTemplates:A,containsTemplateObject:k,isTemplateObjectEqual:R,encodeURIComponentRFC3986:b,replaceUrlMacros:T,leftpad:E,range:N,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},flatten:function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?e(r):r)}),[])},joinArrayOfUniqueTemplateObjs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Array.isArray(e)?e:[],i=Array.isArray(t)?t:[],n=r.concat(i);return n.reduce((function(e,t){return k(t,e)||e.push(t),e}),[])}};function w(e){return-1!==["true","TRUE","True","1"].indexOf(e)}var U={childByName:function(e,t){var r=e.childNodes;for(var i in r){var n=r[i];if(n.nodeName===t)return n}},childrenByName:function(e,t){var r=[],i=e.childNodes;for(var n in i){var a=i[n];a.nodeName===t&&r.push(a)}return r},resolveVastAdTagURI:function(e,t){if(!t)return e;if(0===e.indexOf("//")){var r=location.protocol;return"".concat(r).concat(e)}if(-1===e.indexOf("://")){var i=t.slice(0,t.lastIndexOf("/"));return"".concat(i,"/").concat(e)}return e},parseBoolean:w,parseNodeText:function(e){return e&&(e.textContent||e.text||"").trim()},copyNodeAttribute:function(e,t,r){var i=t.getAttribute(e);i&&r.setAttribute(e,i)},parseAttributes:function(e){for(var t=e.attributes,r={},i=0;i<t.length;i++)r[t[i].nodeName]=t[i].nodeValue;return r},parseDuration:function(e){if(null==e)return-1;if(L.isNumeric(e))return parseInt(e);var t=e.split(":");if(3!==t.length)return-1;var r=t[2].split("."),i=parseInt(r[0]);2===r.length&&(i+=parseFloat("0.".concat(r[1])));var n=parseInt(60*t[1]),a=parseInt(60*t[0]*60);return isNaN(a)||isNaN(n)||isNaN(i)||n>3600||i>60?-1:a+n+i},splitVAST:function(e){var t=[],r=null;return e.forEach((function(i,n){if(i.sequence&&(i.sequence=parseInt(i.sequence,10)),i.sequence>1){var a=e[n-1];if(a&&a.sequence===i.sequence-1)return void(r&&r.push(i));delete i.sequence}r=[i],t.push(r)})),t},assignAttributes:function(e,t){if(e)for(var r in e){var i=e[r];if(i.nodeName&&i.nodeValue&&t.hasOwnProperty(i.nodeName)){var n=i.nodeValue;"boolean"==typeof t[i.nodeName]&&(n=w(n)),t[i.nodeName]=n}}},mergeWrapperAdData:function(e,t){e.errorURLTemplates=t.errorURLTemplates.concat(e.errorURLTemplates),e.impressionURLTemplates=t.impressionURLTemplates.concat(e.impressionURLTemplates),e.extensions=t.extensions.concat(e.extensions),t.viewableImpression.length>0&&(e.viewableImpression=[].concat(h(e.viewableImpression),h(t.viewableImpression))),e.followAdditionalWrappers=t.followAdditionalWrappers,e.allowMultipleAds=t.allowMultipleAds,e.fallbackOnNoAd=t.fallbackOnNoAd;var r=(t.creatives||[]).filter((function(e){return e&&"companion"===e.type})),i=r.reduce((function(e,t){return(t.variations||[]).forEach((function(t){(t.companionClickTrackingURLTemplates||[]).forEach((function(t){L.containsTemplateObject(t,e)||e.push(t)}))})),e}),[]);e.creatives=r.concat(e.creatives);var n=t.videoClickTrackingURLTemplates&&t.videoClickTrackingURLTemplates.length,a=t.videoCustomClickURLTemplates&&t.videoCustomClickURLTemplates.length;e.creatives.forEach((function(e){if(t.trackingEvents&&t.trackingEvents[e.type])for(var r in t.trackingEvents[e.type]){var o=t.trackingEvents[e.type][r];Array.isArray(e.trackingEvents[r])||(e.trackingEvents[r]=[]),e.trackingEvents[r]=e.trackingEvents[r].concat(o)}"linear"===e.type&&(n&&(e.videoClickTrackingURLTemplates=e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)),a&&(e.videoCustomClickURLTemplates=e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)),!t.videoClickThroughURLTemplate||null!==e.videoClickThroughURLTemplate&&void 0!==e.videoClickThroughURLTemplate||(e.videoClickThroughURLTemplate=t.videoClickThroughURLTemplate)),"companion"===e.type&&i.length&&(e.variations||[]).forEach((function(e){e.companionClickTrackingURLTemplates=L.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates,i)}))})),t.adVerifications&&(e.adVerifications=e.adVerifications.concat(t.adVerifications)),t.blockedAdCategories&&(e.blockedAdCategories=e.blockedAdCategories.concat(t.blockedAdCategories))}};function C(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"companion",required:null,variations:[]}}(t);return r.required=e.getAttribute("required")||null,r.variations=U.childrenByName(e,"Companion").map((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adType:"companionAd",width:e.width||0,height:e.height||0,assetWidth:e.assetWidth||null,assetHeight:e.assetHeight||null,expandedWidth:e.expandedWidth||null,expandedHeight:e.expandedHeight||null,apiFramework:e.apiFramework||null,adSlotID:e.adSlotID||null,pxratio:e.pxratio||"1",renderingMode:e.renderingMode||"default",staticResources:[],htmlResources:[],iframeResources:[],adParameters:null,xmlEncoded:null,altText:null,companionClickThroughURLTemplate:null,companionClickTrackingURLTemplates:[],trackingEvents:{}}}(U.parseAttributes(e));t.htmlResources=U.childrenByName(e,"HTMLResource").reduce((function(e,t){var r=U.parseNodeText(t);return r?e.concat(r):e}),[]),t.iframeResources=U.childrenByName(e,"IFrameResource").reduce((function(e,t){var r=U.parseNodeText(t);return r?e.concat(r):e}),[]),t.staticResources=U.childrenByName(e,"StaticResource").reduce((function(e,t){var r=U.parseNodeText(t);return r?e.concat({url:r,creativeType:t.getAttribute("creativeType")||null}):e}),[]),t.altText=U.parseNodeText(U.childByName(e,"AltText"))||null;var r=U.childByName(e,"TrackingEvents");r&&U.childrenByName(r,"Tracking").forEach((function(e){var r=e.getAttribute("event"),i=U.parseNodeText(e);r&&i&&(Array.isArray(t.trackingEvents[r])||(t.trackingEvents[r]=[]),t.trackingEvents[r].push(i))})),t.companionClickTrackingURLTemplates=U.childrenByName(e,"CompanionClickTracking").map((function(e){return{id:e.getAttribute("id")||null,url:U.parseNodeText(e)}})),t.companionClickThroughURLTemplate=U.parseNodeText(U.childByName(e,"CompanionClickThrough"))||null;var i=U.childByName(e,"AdParameters");return i&&(t.adParameters=U.parseNodeText(i),t.xmlEncoded=i.getAttribute("xmlEncoded")||null),t})),r}function I(e){return"linear"===e.type}function x(e,t){var r,i=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"linear",duration:0,skipDelay:null,mediaFiles:[],mezzanine:null,interactiveCreativeFile:null,closedCaptionFiles:[],videoClickThroughURLTemplate:null,videoClickTrackingURLTemplates:[],videoCustomClickURLTemplates:[],adParameters:null,icons:[],trackingEvents:{}}}(t);i.duration=U.parseDuration(U.parseNodeText(U.childByName(e,"Duration")));var n=e.getAttribute("skipoffset");if(null==n)i.skipDelay=null;else if("%"===n.charAt(n.length-1)&&-1!==i.duration){var a=parseInt(n,10);i.skipDelay=i.duration*(a/100)}else i.skipDelay=U.parseDuration(n);var o=U.childByName(e,"VideoClicks");if(o){var s=U.childByName(o,"ClickThrough");i.videoClickThroughURLTemplate=s?{id:s.getAttribute("id")||null,url:U.parseNodeText(s)}:null,U.childrenByName(o,"ClickTracking").forEach((function(e){i.videoClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:U.parseNodeText(e)})})),U.childrenByName(o,"CustomClick").forEach((function(e){i.videoCustomClickURLTemplates.push({id:e.getAttribute("id")||null,url:U.parseNodeText(e)})}))}var l=U.childByName(e,"AdParameters");l&&(i.adParameters=U.parseNodeText(l)),U.childrenByName(e,"TrackingEvents").forEach((function(e){U.childrenByName(e,"Tracking").forEach((function(e){var t=e.getAttribute("event"),n=U.parseNodeText(e);if(t&&n){if("progress"===t){if(!(r=e.getAttribute("offset")))return;t="%"===r.charAt(r.length-1)?"progress-".concat(r):"progress-".concat(Math.round(U.parseDuration(r)))}Array.isArray(i.trackingEvents[t])||(i.trackingEvents[t]=[]),i.trackingEvents[t].push(n)}}))})),U.childrenByName(e,"MediaFiles").forEach((function(e){U.childrenByName(e,"MediaFile").forEach((function(e){i.mediaFiles.push(function(e){var t={id:null,fileURL:null,fileSize:0,deliveryType:"progressive",mimeType:null,mediaType:null,codec:null,bitrate:0,minBitrate:0,maxBitrate:0,width:0,height:0,apiFramework:null,scalable:null,maintainAspectRatio:null};t.id=e.getAttribute("id"),t.fileURL=U.parseNodeText(e),t.deliveryType=e.getAttribute("delivery"),t.codec=e.getAttribute("codec"),t.mimeType=e.getAttribute("type"),t.mediaType=e.getAttribute("mediaType")||"2D",t.apiFramework=e.getAttribute("apiFramework"),t.fileSize=parseInt(e.getAttribute("fileSize")||0),t.bitrate=parseInt(e.getAttribute("bitrate")||0),t.minBitrate=parseInt(e.getAttribute("minBitrate")||0),t.maxBitrate=parseInt(e.getAttribute("maxBitrate")||0),t.width=parseInt(e.getAttribute("width")||0),t.height=parseInt(e.getAttribute("height")||0);var r=e.getAttribute("scalable");r&&"string"==typeof r&&(t.scalable=U.parseBoolean(r));var i=e.getAttribute("maintainAspectRatio");i&&"string"==typeof i&&(t.maintainAspectRatio=U.parseBoolean(i));return t}(e))}));var t=U.childByName(e,"InteractiveCreativeFile");t&&(i.interactiveCreativeFile=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,apiFramework:e.apiFramework||null,variableDuration:U.parseBoolean(e.variableDuration),fileURL:null}}(U.parseAttributes(e));return t.fileURL=U.parseNodeText(e),t}(t));var r=U.childByName(e,"ClosedCaptionFiles");r&&U.childrenByName(r,"ClosedCaptionFile").forEach((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,language:e.language||null,fileURL:null}}(U.parseAttributes(e));t.fileURL=U.parseNodeText(e),i.closedCaptionFiles.push(t)}));var n,a,o,s=U.childByName(e,"Mezzanine"),l=(n=s,a={},o=!1,["delivery","type","width","height"].forEach((function(e){n&&n.getAttribute(e)?a[e]=n.getAttribute(e):o=!0})),o?null:a);if(l){var u={id:null,fileURL:null,delivery:null,codec:null,type:null,width:0,height:0,fileSize:0,mediaType:"2D"};u.id=s.getAttribute("id"),u.fileURL=U.parseNodeText(s),u.delivery=l.delivery,u.codec=s.getAttribute("codec"),u.type=l.type,u.width=parseInt(l.width,10),u.height=parseInt(l.height,10),u.fileSize=parseInt(s.getAttribute("fileSize"),10),u.mediaType=s.getAttribute("mediaType")||"2D",i.mezzanine=u}}));var u=U.childByName(e,"Icons");return u&&U.childrenByName(u,"Icon").forEach((function(e){i.icons.push(function(e){var t={program:null,height:0,width:0,xPosition:0,yPosition:0,apiFramework:null,offset:null,duration:0,type:null,staticResource:null,htmlResource:null,iframeResource:null,pxratio:"1",iconClickThroughURLTemplate:null,iconClickTrackingURLTemplates:[],iconViewTrackingURLTemplate:null};t.program=e.getAttribute("program"),t.height=parseInt(e.getAttribute("height")||0),t.width=parseInt(e.getAttribute("width")||0),t.xPosition=function(e){if(-1!==["left","right"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("xPosition")),t.yPosition=function(e){if(-1!==["top","bottom"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("yPosition")),t.apiFramework=e.getAttribute("apiFramework"),t.pxratio=e.getAttribute("pxratio")||"1",t.offset=U.parseDuration(e.getAttribute("offset")),t.duration=U.parseDuration(e.getAttribute("duration")),U.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=U.parseNodeText(e)})),U.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=U.parseNodeText(e)})),U.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=U.parseNodeText(e)}));var r=U.childByName(e,"IconClicks");r&&(t.iconClickThroughURLTemplate=U.parseNodeText(U.childByName(r,"IconClickThrough")),U.childrenByName(r,"IconClickTracking").forEach((function(e){t.iconClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:U.parseNodeText(e)})})));return t.iconViewTrackingURLTemplate=U.parseNodeText(U.childByName(e,"IconViewTracking")),t}(e))})),i}function S(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"nonlinear",variations:[],trackingEvents:{}}}(t);return U.childrenByName(e,"TrackingEvents").forEach((function(e){var t,i;U.childrenByName(e,"Tracking").forEach((function(e){t=e.getAttribute("event"),i=U.parseNodeText(e),t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))}))})),U.childrenByName(e,"NonLinear").forEach((function(e){var t={id:null,width:0,height:0,expandedWidth:0,expandedHeight:0,scalable:!0,maintainAspectRatio:!0,minSuggestedDuration:0,apiFramework:"static",adType:"nonLinearAd",type:null,staticResource:null,htmlResource:null,iframeResource:null,nonlinearClickThroughURLTemplate:null,nonlinearClickTrackingURLTemplates:[],adParameters:null};t.id=e.getAttribute("id")||null,t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.expandedWidth=e.getAttribute("expandedWidth"),t.expandedHeight=e.getAttribute("expandedHeight"),t.scalable=U.parseBoolean(e.getAttribute("scalable")),t.maintainAspectRatio=U.parseBoolean(e.getAttribute("maintainAspectRatio")),t.minSuggestedDuration=U.parseDuration(e.getAttribute("minSuggestedDuration")),t.apiFramework=e.getAttribute("apiFramework"),U.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=U.parseNodeText(e)})),U.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=U.parseNodeText(e)})),U.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=U.parseNodeText(e)}));var i=U.childByName(e,"AdParameters");i&&(t.adParameters=U.parseNodeText(i)),t.nonlinearClickThroughURLTemplate=U.parseNodeText(U.childByName(e,"NonLinearClickThrough")),U.childrenByName(e,"NonLinearClickTracking").forEach((function(e){t.nonlinearClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:U.parseNodeText(e)})})),r.variations.push(t)})),r}function O(e){var t=[];return e.forEach((function(e){var r=D(e);r&&t.push(r)})),t}function D(e){if("#comment"===e.nodeName)return null;var t,r={name:null,value:null,attributes:{},children:[]},i=e.attributes,n=e.childNodes;if(r.name=e.nodeName,e.attributes)for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];o.nodeName&&o.nodeValue&&(r.attributes[o.nodeName]=o.nodeValue)}for(var s in n)if(n.hasOwnProperty(s)){var l=D(n[s]);l&&r.children.push(l)}if(0===r.children.length||1===r.children.length&&["#cdata-section","#text"].indexOf(r.children[0].name)>=0){var u=U.parseNodeText(e);""!==u&&(r.value=u),r.children=[]}return null===(t=r).value&&0===Object.keys(t.attributes).length&&0===t.children.length?null:r}function V(e){var t=[];return e.forEach((function(e){var r,i={id:e.getAttribute("id")||null,adId:P(e),sequence:e.getAttribute("sequence")||null,apiFramework:e.getAttribute("apiFramework")||null},n=[];U.childrenByName(e,"UniversalAdId").forEach((function(e){var t={idRegistry:e.getAttribute("idRegistry")||"unknown",value:U.parseNodeText(e)};n.push(t)}));var a=U.childByName(e,"CreativeExtensions");for(var o in a&&(r=O(U.childrenByName(a,"CreativeExtension"))),e.childNodes){var s=e.childNodes[o],l=void 0;switch(s.nodeName){case"Linear":l=x(s,i);break;case"NonLinearAds":l=S(s,i);break;case"CompanionAds":l=C(s,i)}l&&(n&&(l.universalAdIds=n),r&&(l.creativeExtensions=r),t.push(l))}})),t}function P(e){return e.getAttribute("AdID")||e.getAttribute("adID")||e.getAttribute("adId")||null}var B={Wrapper:{subElements:["VASTAdTagURI","Impression"]},BlockedAdCategories:{attributes:["authority"]},InLine:{subElements:["AdSystem","AdTitle","Impression","AdServingId","Creatives"]},Category:{attributes:["authority"]},Pricing:{attributes:["model","currency"]},Verification:{oneOfinLineResources:["JavaScriptResource","ExecutableResource"],attributes:["vendor"]},UniversalAdId:{attributes:["idRegistry"]},JavaScriptResource:{attributes:["apiFramework","browserOptional"]},ExecutableResource:{attributes:["apiFramework","type"]},Tracking:{attributes:["event"]},Creatives:{subElements:["Creative"]},Creative:{subElements:["UniversalAdId"]},Linear:{subElements:["MediaFiles","Duration"]},MediaFiles:{subElements:["MediaFile"]},MediaFile:{attributes:["delivery","type","width","height"]},Mezzanine:{attributes:["delivery","type","width","height"]},NonLinear:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},Companion:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},StaticResource:{attributes:["creativeType"]},Icons:{subElements:["Icon"]},Icon:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"]}};function F(e,t){if(B[e.nodeName]&&B[e.nodeName].attributes){var r=B[e.nodeName].attributes.filter((function(t){return!e.getAttribute(t)}));r.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,attributes:r},t)}}function M(e,t,r){var i=B[e.nodeName],n=!r&&"Wrapper"!==e.nodeName;if(i&&!n){if(i.subElements){var a=i.subElements.filter((function(t){return!U.childByName(e,t)}));a.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,subElements:a},t)}if(r&&i.oneOfinLineResources)i.oneOfinLineResources.some((function(t){return U.childByName(e,t)}))||j({name:e.nodeName,parentName:e.parentNode.nodeName,oneOfResources:i.oneOfinLineResources},t)}}function W(e){return e.children&&0!==e.children.length}function j(e,t){var r=e.name,i=e.parentName,n=e.attributes,a=e.subElements,o=e.oneOfResources,s="Element '".concat(r,"'");t("VAST-warning",{message:s+=n?" missing required attribute(s) '".concat(n.join(", "),"' "):a?" missing required sub element(s) '".concat(a.join(", "),"' "):o?" must provide one of the following '".concat(o.join(", "),"' "):" is empty",parentElement:i,specVersion:4.1})}var q={verifyRequiredValues:function e(t,r,i){if(t&&t.nodeName)if("InLine"===t.nodeName&&(i=!0),F(t,r),W(t)){M(t,r,i);for(var n=0;n<t.children.length;n++)e(t.children[n],r,i)}else 0===U.parseNodeText(t).length&&j({name:t.nodeName,parentName:t.parentNode.nodeName},r)},hasSubElements:W,emitMissingValueWarning:j,verifyRequiredAttributes:F,verifyRequiredSubElements:M};function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds,n=r.followAdditionalWrappers,a=e.childNodes;for(var o in a){var s=a[o];if(-1!==["Wrapper","InLine"].indexOf(s.nodeName)&&("Wrapper"!==s.nodeName||!1!==n)){if(U.copyNodeAttribute("id",e,s),U.copyNodeAttribute("sequence",e,s),U.copyNodeAttribute("adType",e,s),"Wrapper"===s.nodeName)return{ad:z(s,t),type:"WRAPPER"};if("InLine"===s.nodeName)return{ad:_(s,t,{allowMultipleAds:i}),type:"INLINE"}}}}function _(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds;return!1===i&&e.getAttribute("sequence")?null:G(e,t)}function G(e,t){var r=[];t&&q.verifyRequiredValues(e,t);var i=e.childNodes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,sequence:e.sequence||null,adType:e.adType||null,adServingId:null,categories:[],expires:null,viewableImpression:[],system:null,title:null,description:null,advertiser:null,pricing:null,survey:null,errorURLTemplates:[],impressionURLTemplates:[],creatives:[],extensions:[],adVerifications:[],blockedAdCategories:[],followAdditionalWrappers:!0,allowMultipleAds:!1,fallbackOnNoAd:null}}(U.parseAttributes(e));for(var a in i){var o=i[a];switch(o.nodeName){case"Error":n.errorURLTemplates.push(U.parseNodeText(o));break;case"Impression":n.impressionURLTemplates.push({id:o.getAttribute("id")||null,url:U.parseNodeText(o)});break;case"Creatives":n.creatives=V(U.childrenByName(o,"Creative"));break;case"Extensions":var s=U.childrenByName(o,"Extension");n.extensions=O(s),n.adVerifications.length||(r=X(s));break;case"AdVerifications":n.adVerifications=Y(U.childrenByName(o,"Verification"));break;case"AdSystem":n.system={value:U.parseNodeText(o),version:o.getAttribute("version")||null};break;case"AdTitle":n.title=U.parseNodeText(o);break;case"AdServingId":n.adServingId=U.parseNodeText(o);break;case"Category":n.categories.push({authority:o.getAttribute("authority")||null,value:U.parseNodeText(o)});break;case"Expires":n.expires=parseInt(U.parseNodeText(o),10);break;case"ViewableImpression":n.viewableImpression.push(K(o));break;case"Description":n.description=U.parseNodeText(o);break;case"Advertiser":n.advertiser={id:o.getAttribute("id")||null,value:U.parseNodeText(o)};break;case"Pricing":n.pricing={value:U.parseNodeText(o),model:o.getAttribute("model")||null,currency:o.getAttribute("currency")||null};break;case"Survey":n.survey=U.parseNodeText(o);break;case"BlockedAdCategories":n.blockedAdCategories.push({authority:o.getAttribute("authority")||null,value:U.parseNodeText(o)})}}return r.length&&(n.adVerifications=n.adVerifications.concat(r)),n}function z(e,t){var r=G(e,t),i=e.getAttribute("followAdditionalWrappers"),n=e.getAttribute("allowMultipleAds"),a=e.getAttribute("fallbackOnNoAd");r.followAdditionalWrappers=!i||U.parseBoolean(i),r.allowMultipleAds=!!n&&U.parseBoolean(n),r.fallbackOnNoAd=a?U.parseBoolean(a):null;var o=U.childByName(e,"VASTAdTagURI");if(o?r.nextWrapperURL=U.parseNodeText(o):(o=U.childByName(e,"VASTAdTagURL"))&&(r.nextWrapperURL=U.parseNodeText(U.childByName(o,"URL"))),r.creatives.forEach((function(e){if(-1!==["linear","nonlinear"].indexOf(e.type)){if(e.trackingEvents){r.trackingEvents||(r.trackingEvents={}),r.trackingEvents[e.type]||(r.trackingEvents[e.type]={});var t=function(t){var i=e.trackingEvents[t];Array.isArray(r.trackingEvents[e.type][t])||(r.trackingEvents[e.type][t]=[]),i.forEach((function(i){r.trackingEvents[e.type][t].push(i)}))};for(var i in e.trackingEvents)t(i)}e.videoClickTrackingURLTemplates&&(Array.isArray(r.videoClickTrackingURLTemplates)||(r.videoClickTrackingURLTemplates=[]),e.videoClickTrackingURLTemplates.forEach((function(e){r.videoClickTrackingURLTemplates.push(e)}))),e.videoClickThroughURLTemplate&&(r.videoClickThroughURLTemplate=e.videoClickThroughURLTemplate),e.videoCustomClickURLTemplates&&(Array.isArray(r.videoCustomClickURLTemplates)||(r.videoCustomClickURLTemplates=[]),e.videoCustomClickURLTemplates.forEach((function(e){r.videoCustomClickURLTemplates.push(e)})))}})),r.nextWrapperURL)return r}function Y(e){var t=[];return e.forEach((function(e){var r={resource:null,vendor:null,browserOptional:!1,apiFramework:null,type:null,parameters:null,trackingEvents:{}},i=e.childNodes;for(var n in U.assignAttributes(e.attributes,r),i){var a=i[n];switch(a.nodeName){case"JavaScriptResource":case"ExecutableResource":r.resource=U.parseNodeText(a),U.assignAttributes(a.attributes,r);break;case"VerificationParameters":r.parameters=U.parseNodeText(a)}}var o=U.childByName(e,"TrackingEvents");o&&U.childrenByName(o,"Tracking").forEach((function(e){var t=e.getAttribute("event"),i=U.parseNodeText(e);t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))})),t.push(r)})),t}function X(e){var t=null,r=[];return e.some((function(e){return t=U.childByName(e,"AdVerifications")})),t&&(r=Y(U.childrenByName(t,"Verification"))),r}function K(e){var t={};t.id=e.getAttribute("id")||null;var r=e.childNodes;for(var i in r){var n=r[i],a=n.nodeName,o=U.parseNodeText(n);if(("Viewable"===a||"NotViewable"===a||"ViewUndetermined"===a)&&o){var s=a.toLowerCase();Array.isArray(t[s])||(t[s]=[]),t[s].push(o)}}return t}var Q=function(){function e(){n(this,e),this._handlers=[]}return o(e,[{key:"on",value:function(e,t){if("function"!=typeof t)throw new TypeError("The handler argument must be of type Function. Received type ".concat(i(t)));if(!e)throw new TypeError("The event argument must be of type String. Received type ".concat(i(e)));return this._handlers.push({event:e,handler:t}),this}},{key:"once",value:function(e,t){return this.on(e,function(e,t,r){var i={fired:!1,wrapFn:void 0};function n(){i.fired||(e.off(t,i.wrapFn),i.fired=!0,r.bind(e).apply(void 0,arguments))}return i.wrapFn=n,n}(this,e,t))}},{key:"off",value:function(e,t){return this._handlers=this._handlers.filter((function(r){return r.event!==e||r.handler!==t})),this}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var n=!1;return this._handlers.forEach((function(t){"*"===t.event&&(n=!0,t.handler.apply(t,[e].concat(r))),t.event===e&&(n=!0,t.handler.apply(t,r))})),n}},{key:"removeAllListeners",value:function(e){return e?(this._handlers=this._handlers.filter((function(t){return t.event!==e})),this):(this._handlers=[],this)}},{key:"listenerCount",value:function(e){return this._handlers.filter((function(t){return t.event===e})).length}},{key:"listeners",value:function(e){return this._handlers.reduce((function(t,r){return r.event===e&&t.push(r.handler),t}),[])}},{key:"eventNames",value:function(){return this._handlers.map((function(e){return e.event}))}}]),e}();var J={get:function(e,t,r){r(new Error("Please bundle the library for node to use the node urlHandler"))}},$=12e4;function Z(){try{var e=new window.XMLHttpRequest;return"withCredentials"in e?e:null}catch(e){return null}}function ee(e,t,r){var i=r?408:e.status,n=r?"XHRURLHandler: Request timed out after ".concat(e.timeout," ms (").concat(i,")"):"XHRURLHandler: ".concat(e.statusText," (").concat(i,")");t(new Error(n),null,{statusCode:i})}var te={get:function(e,t,r){if("https:"===window.location.protocol&&0===e.indexOf("http://"))return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));try{var i=Z();i.open("GET",e),i.timeout=t.timeout||$,i.withCredentials=t.withCredentials||!1,i.overrideMimeType&&i.overrideMimeType("text/xml"),i.onload=function(){return function(e,t){200===e.status?t(null,e.responseXML,{byteLength:e.response.length,statusCode:e.status}):ee(e,t,!1)}(i,r)},i.onerror=function(){return ee(i,r,!1)},i.onabort=function(){return ee(i,r,!1)},i.ontimeout=function(){return ee(i,r,!0)},i.send()}catch(e){r(new Error("XHRURLHandler: Unexpected error"))}},supported:function(){return!!Z()}};var re={get:function(e,t,r){return r||("function"==typeof t&&(r=t),t={}),"undefined"==typeof window||null===window?J.get(e,t,r):te.supported()?te.get(e,t,r):r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))}};var ie=0,ne=0,ae=function(e,t){!e||!t||e<=0||t<=0||(ne=(ne*ie+8*e/t)/++ie)},oe={ERRORCODE:900,extensions:[]},se=function(e){l(r,e);var t=p(r);function r(){var e;return n(this,r),(e=t.call(this)).remainingAds=[],e.parentURLs=[],e.errorURLTemplates=[],e.rootErrorURLTemplates=[],e.maxWrapperDepth=null,e.URLTemplateFilters=[],e.fetchingOptions={},e.parsingOptions={},e}return o(r,[{key:"addURLTemplateFilter",value:function(e){"function"==typeof e&&this.URLTemplateFilters.push(e)}},{key:"removeURLTemplateFilter",value:function(){this.URLTemplateFilters.pop()}},{key:"countURLTemplateFilters",value:function(){return this.URLTemplateFilters.length}},{key:"clearURLTemplateFilters",value:function(){this.URLTemplateFilters=[]}},{key:"trackVastError",value:function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];this.emit("VAST-error",Object.assign.apply(Object,[{},oe,t].concat(i))),L.track(e,t)}},{key:"getErrorURLTemplates",value:function(){return this.rootErrorURLTemplates.concat(this.errorURLTemplates)}},{key:"getEstimatedBitrate",value:function(){return ne}},{key:"fetchVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){t.URLTemplateFilters.forEach((function(t){e=t(e)})),t.parentURLs.push(e);var s=Date.now();t.emit("VAST-resolving",{url:e,previousUrl:i,wrapperDepth:r,maxWrapperDepth:t.maxWrapperDepth,timeout:t.fetchingOptions.timeout,wrapperAd:n}),t.urlHandler.get(e,t.fetchingOptions,(function(n,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=Math.round(Date.now()-s),d=Object.assign({url:e,previousUrl:i,wrapperDepth:r,error:n,duration:c},u);t.emit("VAST-resolved",d),ae(u.byteLength,c),n?o(n):a(l)}))}))}},{key:"initParsingStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errorURLTemplates=[],this.fetchingOptions={timeout:e.timeout||$,withCredentials:e.withCredentials},this.maxWrapperDepth=e.wrapperLimit||10,this.parentURLs=[],this.parsingOptions={allowMultipleAds:e.allowMultipleAds},this.remainingAds=[],this.rootErrorURLTemplates=[],this.rootURL="",this.urlHandler=e.urlHandler||e.urlhandler||re,this.vastVersion=null,ae(e.byteLength,e.requestDuration)}},{key:"getRemainingAds",value:function(e){var t=this;if(0===this.remainingAds.length)return Promise.reject(new Error("No more ads are available for the given VAST"));var r=e?L.flatten(this.remainingAds):this.remainingAds.shift();return this.errorURLTemplates=[],this.parentURLs=[],this.resolveAds(r,{wrapperDepth:0,url:this.rootURL}).then((function(e){return t.buildVASTResponse(e)}))}},{key:"getAndParseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),this.URLTemplateFilters.forEach((function(t){e=t(e)})),this.rootURL=e,this.fetchVAST(e).then((function(i){return r.previousUrl=e,r.isRootVAST=!0,r.url=e,t.parse(i,r).then((function(e){return t.buildVASTResponse(e)}))}))}},{key:"parseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),r.isRootVAST=!0,this.parse(e,r).then((function(e){return t.buildVASTResponse(e)}))}},{key:"buildVASTResponse",value:function(e){var t,r={ads:(t={ads:e,errorURLTemplates:this.getErrorURLTemplates(),version:this.vastVersion}).ads||[],errorURLTemplates:t.errorURLTemplates||[],version:t.version||null};return this.completeWrapperResolving(r),r}},{key:"parseVastXml",value:function(e,t){var r=t.isRootVAST,i=void 0!==r&&r,n=t.url,a=void 0===n?null:n,o=t.wrapperDepth,s=void 0===o?0:o,l=t.allowMultipleAds,u=t.followAdditionalWrappers;if(!e||!e.documentElement||"VAST"!==e.documentElement.nodeName)throw this.emit("VAST-ad-parsed",{type:"ERROR",url:a,wrapperDepth:s}),new Error("Invalid VAST XMLDocument");var c=[],d=e.documentElement.childNodes,p=e.documentElement.getAttribute("version");for(var h in i&&p&&(this.vastVersion=p),d){var v=d[h];if("Error"===v.nodeName){var f=U.parseNodeText(v);i?this.rootErrorURLTemplates.push(f):this.errorURLTemplates.push(f)}else if("Ad"===v.nodeName){if(this.vastVersion&&parseFloat(this.vastVersion)<3)l=!0;else if(!1===l&&c.length>1)break;var m=H(v,this.emit.bind(this),{allowMultipleAds:l,followAdditionalWrappers:u});m.ad?(c.push(m.ad),this.emit("VAST-ad-parsed",{type:m.type,url:a,wrapperDepth:s,adIndex:c.length-1,vastVersion:p})):this.trackVastError(this.getErrorURLTemplates(),{ERRORCODE:101})}}return c}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,i=void 0===r?null:r,n=t.resolveAll,a=void 0===n||n,o=t.wrapperSequence,s=void 0===o?null:o,l=t.previousUrl,u=void 0===l?null:l,c=t.wrapperDepth,d=void 0===c?0:c,p=t.isRootVAST,h=void 0!==p&&p,v=t.followAdditionalWrappers,f=t.allowMultipleAds,m=[];this.vastVersion&&parseFloat(this.vastVersion)<3&&h&&(f=!0);try{m=this.parseVastXml(e,{isRootVAST:h,url:i,wrapperDepth:d,allowMultipleAds:f,followAdditionalWrappers:v})}catch(e){return Promise.reject(e)}return 1===m.length&&null!=s&&(m[0].sequence=s),!1===a&&(this.remainingAds=U.splitVAST(m),m=this.remainingAds.shift()),this.resolveAds(m,{wrapperDepth:d,previousUrl:u,url:i})}},{key:"resolveAds",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,i=r.wrapperDepth,n=r.previousUrl,a=r.url,o=[];return n=a,t.forEach((function(t){var r=e.resolveWrappers(t,i,n);o.push(r)})),Promise.all(o).then((function(t){var r=L.flatten(t);if(!r&&e.remainingAds.length>0){var o=e.remainingAds.shift();return e.resolveAds(o,{wrapperDepth:i,previousUrl:n,url:a})}return r}))}},{key:"resolveWrappers",value:function(e,t,r){var i=this;return new Promise((function(n){var a;if(t++,!e.nextWrapperURL)return delete e.nextWrapperURL,n(e);if(t>=i.maxWrapperDepth||-1!==i.parentURLs.indexOf(e.nextWrapperURL))return e.errorCode=302,delete e.nextWrapperURL,n(e);e.nextWrapperURL=U.resolveVastAdTagURI(e.nextWrapperURL,r),i.URLTemplateFilters.forEach((function(t){e.nextWrapperURL=t(e.nextWrapperURL)}));var o=null!==(a=i.parsingOptions.allowMultipleAds)&&void 0!==a?a:e.allowMultipleAds,s=e.sequence;i.fetchVAST(e.nextWrapperURL,t,r,e).then((function(a){return i.parse(a,{url:e.nextWrapperURL,previousUrl:r,wrapperSequence:s,wrapperDepth:t,followAdditionalWrappers:e.followAdditionalWrappers,allowMultipleAds:o}).then((function(t){if(delete e.nextWrapperURL,0===t.length)return e.creatives=[],n(e);t.forEach((function(t){t&&U.mergeWrapperAdData(t,e)})),n(t)}))})).catch((function(t){e.errorCode=301,e.errorMessage=t.message,n(e)}))}))}},{key:"completeWrapperResolving",value:function(e){if(0===e.ads.length)this.trackVastError(e.errorURLTemplates,{ERRORCODE:303});else for(var t=e.ads.length-1;t>=0;t--){var r=e.ads[t];(r.errorCode||0===r.creatives.length)&&(this.trackVastError(r.errorURLTemplates.concat(e.errorURLTemplates),{ERRORCODE:r.errorCode||303},{ERRORMESSAGE:r.errorMessage||""},{extensions:r.extensions},{system:r.system}),e.ads.splice(t,1))}}}]),r}(Q),le=null,ue={data:{},length:0,getItem:function(e){return this.data[e]},setItem:function(e,t){this.data[e]=t,this.length=Object.keys(this.data).length},removeItem:function(e){delete this.data[e],this.length=Object.keys(this.data).length},clear:function(){this.data={},this.length=0}},ce=function(){function e(){n(this,e),this.storage=this.initStorage()}return o(e,[{key:"initStorage",value:function(){if(le)return le;try{le="undefined"!=typeof window&&null!==window?window.localStorage||window.sessionStorage:null}catch(e){le=null}return le&&!this.isStorageDisabled(le)||(le=ue).clear(),le}},{key:"isStorageDisabled",value:function(e){var t="__VASTStorage__";try{if(e.setItem(t,t),e.getItem(t)!==t)return e.removeItem(t),!0}catch(e){return!0}return e.removeItem(t),!1}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"setItem",value:function(e,t){return this.storage.setItem(e,t)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}},{key:"clear",value:function(){return this.storage.clear()}}]),e}(),de=function(){function e(t,r,i){n(this,e),this.cappingFreeLunch=t||0,this.cappingMinimumTimeInterval=r||0,this.defaultOptions={withCredentials:!1,timeout:0},this.vastParser=new se,this.storage=i||new ce,void 0===this.lastSuccessfulAd&&(this.lastSuccessfulAd=0),void 0===this.totalCalls&&(this.totalCalls=0),void 0===this.totalCallsTimeout&&(this.totalCallsTimeout=0)}return o(e,[{key:"getParser",value:function(){return this.vastParser}},{key:"lastSuccessfulAd",get:function(){return this.storage.getItem("vast-client-last-successful-ad")},set:function(e){this.storage.setItem("vast-client-last-successful-ad",e)}},{key:"totalCalls",get:function(){return this.storage.getItem("vast-client-total-calls")},set:function(e){this.storage.setItem("vast-client-total-calls",e)}},{key:"totalCallsTimeout",get:function(){return this.storage.getItem("vast-client-total-calls-timeout")},set:function(e){this.storage.setItem("vast-client-total-calls-timeout",e)}},{key:"hasRemainingAds",value:function(){return this.vastParser.remainingAds.length>0}},{key:"getNextAds",value:function(e){return this.vastParser.getRemainingAds(e)}},{key:"get",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Date.now();return(r=Object.assign({},this.defaultOptions,r)).hasOwnProperty("resolveAll")||(r.resolveAll=!1),this.totalCallsTimeout<i?(this.totalCalls=1,this.totalCallsTimeout=i+36e5):this.totalCalls++,new Promise((function(n,a){if(t.cappingFreeLunch>=t.totalCalls)return a(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls,"/").concat(t.cappingFreeLunch)));var o=i-t.lastSuccessfulAd;if(o<0)t.lastSuccessfulAd=0;else if(o<t.cappingMinimumTimeInterval)return a(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval,")ms minimum interval reached")));t.vastParser.getAndParseVAST(e,r).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}(),pe=function(e){l(i,e);var t=p(i);function i(e,r,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(var l in n(this,i),(o=t.call(this)).ad=r,o.creative=a,o.variation=s,o.muted=!1,o.impressed=!1,o.skippable=!1,o.trackingEvents={},o.lastPercentage=0,o._alreadyTriggeredQuartiles={},o.emitAlwaysEvents=["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","resume","pause","rewind","skip","closeLinear","close"],o.creative.trackingEvents){var u=o.creative.trackingEvents[l];o.trackingEvents[l]=u.slice(0)}return I(o.creative)?o._initLinearTracking():o._initVariationTracking(),e&&o.on("start",(function(){e.lastSuccessfulAd=Date.now()})),o}return o(i,[{key:"_initLinearTracking",value:function(){this.linear=!0,this.skipDelay=this.creative.skipDelay,this.setDuration(this.creative.duration),this.clickThroughURLTemplate=this.creative.videoClickThroughURLTemplate,this.clickTrackingURLTemplates=this.creative.videoClickTrackingURLTemplates}},{key:"_initVariationTracking",value:function(){if(this.linear=!1,this.skipDelay=-1,this.variation){for(var e in this.variation.trackingEvents){var t=this.variation.trackingEvents[e];this.trackingEvents[e]?this.trackingEvents[e]=this.trackingEvents[e].concat(t.slice(0)):this.trackingEvents[e]=t.slice(0)}"nonLinearAd"===this.variation.adType?(this.clickThroughURLTemplate=this.variation.nonlinearClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.nonlinearClickTrackingURLTemplates,this.setDuration(this.variation.minSuggestedDuration)):function(e){return"companionAd"===e.adType}(this.variation)&&(this.clickThroughURLTemplate=this.variation.companionClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.companionClickTrackingURLTemplates)}}},{key:"setDuration",value:function(e){this.assetDuration=e,this.quartiles={firstQuartile:Math.round(25*this.assetDuration)/100,midpoint:Math.round(50*this.assetDuration)/100,thirdQuartile:Math.round(75*this.assetDuration)/100}}},{key:"setProgress",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.skipDelay||-1;if(-1===i||this.skippable||(i>e?this.emit("skip-countdown",i-e):(this.skippable=!0,this.emit("skip-countdown",0))),this.assetDuration>0){var n=Math.round(e/this.assetDuration*100),a=[];if(e>0){a.push("start");for(var o=this.lastPercentage;o<n;o++)a.push("progress-".concat(o+1,"%"));for(var s in a.push("progress-".concat(Math.round(e))),this.quartiles)this.isQuartileReached(s,this.quartiles[s],e)&&(a.push(s),this._alreadyTriggeredQuartiles[s]=!0);this.lastPercentage=n}a.forEach((function(e){t.track(e,{macros:r,once:!0})})),e<this.progress&&this.track("rewind",{macros:r})}this.progress=e}},{key:"isQuartileReached",value:function(e,t,r){var i=!1;return t<=r&&!this._alreadyTriggeredQuartiles[e]&&(i=!0),i}},{key:"setMuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.muted!==e&&this.track(e?"mute":"unmute",{macros:t}),this.muted=e}},{key:"setPaused",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.paused!==e&&this.track(e?"pause":"resume",{macros:t}),this.paused=e}},{key:"setFullscreen",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.fullscreen!==e&&this.track(e?"fullscreen":"exitFullscreen",{macros:t}),this.fullscreen=e}},{key:"setExpand",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.expanded!==e&&(this.track(e?"expand":"collapse",{macros:t}),this.track(e?"playerExpand":"playerCollapse",{macros:t})),this.expanded=e}},{key:"setSkipDelay",value:function(e){"number"==typeof e&&(this.skipDelay=e)}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.impressed||(this.impressed=!0,this.trackURLs(this.ad.impressionURLTemplates,e),this.track("creativeView",{macros:e}))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.trackURLs(this.ad.errorURLTemplates,e,{isCustomCode:t})}},{key:"errorWithCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.error({ERRORCODE:e},t),console.log("The method errorWithCode is deprecated, please use vast tracker error method instead")}},{key:"complete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("complete",{macros:e})}},{key:"notUsed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("notUsed",{macros:e}),this.trackingEvents=[]}},{key:"otherAdInteraction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("otherAdInteraction",{macros:e})}},{key:"acceptInvitation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("acceptInvitation",{macros:e})}},{key:"adExpand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("adExpand",{macros:e})}},{key:"adCollapse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("adCollapse",{macros:e})}},{key:"minimize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("minimize",{macros:e})}},{key:"verificationNotExecuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.ad||!this.ad.adVerifications||!this.ad.adVerifications.length)throw new Error("No adVerifications provided");if(!e)throw new Error("No vendor provided, unable to find associated verificationNotExecuted");var r=this.ad.adVerifications.find((function(t){return t.vendor===e}));if(!r)throw new Error("No associated verification element found for vendor: ".concat(e));var i=r.trackingEvents;if(i&&i.verificationNotExecuted){var n=i.verificationNotExecuted;this.trackURLs(n,t),this.emit("verificationNotExecuted",{trackingURLTemplates:n})}}},{key:"overlayViewDuration",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.ADPLAYHEAD=e,this.track("overlayViewDuration",{macros:t})}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track(this.linear?"closeLinear":"close",{macros:e})}},{key:"skip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("skip",{macros:e})}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.track("loaded",{macros:e})}},{key:"click",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.clickTrackingURLTemplates&&this.clickTrackingURLTemplates.length&&this.trackURLs(this.clickTrackingURLTemplates,t);var i=this.clickThroughURLTemplate||e,n=r({},t);if(i){this.progress&&(n.ADPLAYHEAD=this.progressFormatted());var a=L.resolveURLTemplates([i],n)[0];this.emit("clickthrough",a)}}},{key:"track",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.macros,i=void 0===r?{}:r,n=t.once,a=void 0!==n&&n;"closeLinear"===e&&!this.trackingEvents[e]&&this.trackingEvents.close&&(e="close");var o=this.trackingEvents[e],s=this.emitAlwaysEvents.indexOf(e)>-1;o?(this.emit(e,{trackingURLTemplates:o}),this.trackURLs(o,i)):s&&this.emit(e,null),a&&(delete this.trackingEvents[e],s&&this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e),1))}},{key:"trackURLs",value:function(e){var t,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({},n);this.linear&&(this.creative&&this.creative.mediaFiles&&this.creative.mediaFiles[0]&&this.creative.mediaFiles[0].fileURL&&(o.ASSETURI=this.creative.mediaFiles[0].fileURL),this.progress&&(o.ADPLAYHEAD=this.progressFormatted())),null!==(t=this.creative)&&void 0!==t&&null!==(i=t.universalAdIds)&&void 0!==i&&i.length&&(o.UNIVERSALADID=this.creative.universalAdIds.map((function(e){return e.idRegistry.concat(" ",e.value)})).join(",")),this.ad&&(this.ad.sequence&&(o.PODSEQUENCE=this.ad.sequence),this.ad.adType&&(o.ADTYPE=this.ad.adType),this.ad.adServingId&&(o.ADSERVINGID=this.ad.adServingId),this.ad.categories&&this.ad.categories.length&&(o.ADCATEGORIES=this.ad.categories.map((function(e){return e.value})).join(",")),this.ad.blockedAdCategories&&this.ad.blockedAdCategories.length&&(o.BLOCKEDADCATEGORIES=this.ad.blockedAdCategories)),L.track(e,o,a)}},{key:"convertToTimecode",value:function(e){var t=1e3*e,r=Math.floor(t/36e5),i=Math.floor(t/6e4%60),n=Math.floor(t/1e3%60),a=Math.floor(t%1e3);return"".concat(L.leftpad(r,2),":").concat(L.leftpad(i,2),":").concat(L.leftpad(n,2),".").concat(L.leftpad(a,3))}},{key:"progressFormatted",value:function(){return this.convertToTimecode(this.progress)}}]),i}(Q);e.VASTClient=de,e.VASTParser=se,e.VASTTracker=pe,Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),

/***/ "./src/vpaid-handler.js":
/*!******************************!*\
  !*** ./src/vpaid-handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleVPAID)
/* harmony export */ });
/* harmony import */ var vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vpaid-html5-client */ "./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js");
/* harmony import */ var vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! global/document */ "./node_modules/global/document.js");
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(global_document__WEBPACK_IMPORTED_MODULE_2__);



/**
 *
 * @param player
 * @param {VASTTracker} tracker
 * @param {Object} options
 */

function handleVPAID(player, tracker, options) {
  const creative = tracker.creative;
  const validTypes = ['application/x-javascript', 'text/javascript', 'application/javascript'];

  const validMime = mediaFile => validTypes.indexOf(mediaFile.mimeType.trim()) > -1;

  const vpaidMediaFile = creative.mediaFiles.find(mediaFile => mediaFile.apiFramework === 'VPAID' && validMime(mediaFile));

  if (!vpaidMediaFile) {
    this.player.warn('Only JavaScript VPAID is supported by this player');
    this.player.trigger('adscanceled');
    return;
  }

  const techScreen = player.el().querySelector('.vjs-tech');
  const vpaidContainerElement = global_document__WEBPACK_IMPORTED_MODULE_2___default().createElement('div');
  vpaidContainerElement.className = options.vpaid.containerClass;
  vpaidContainerElement.id = options.vpaid.containerId;
  player.el().insertBefore(vpaidContainerElement, player.controlBar.el());
  const vpaidClient = new (vpaid_html5_client__WEBPACK_IMPORTED_MODULE_0___default())(vpaidContainerElement, techScreen, {});
  player.ads.startLinearAdMode();
  player.pause();
  player.controlBar.hide();
  vpaidClient.loadAdUnit(vpaidMediaFile.fileURL, onLoad);

  function onLoad(err, adUnit) {
    if (err) {
      player.error(err);
      player.controlBar.show();
      player.trigger('aderror');
      return;
    }

    adUnit.handshakeVersion('2.0', onHandShake);
    adUnit.subscribe('AdLoaded', onAdLoaded);
    adUnit.subscribe('AdStarted', onAdStarted);
    adUnit.subscribe('AdStopped', onAdStopped); // TODO: handle VAST tracking

    let videoElement; // args: error, result

    function onHandShake() {
      const initialDimensions = getPlayerDimensions(player);
      const creativeData = {
        AdParameters: creative.adParameters
      };
      const videoInstance = options.vpaid.videoInstance;

      if (videoInstance === 'same') {
        videoElement = player.tech({
          kindaKnowWhatImDoing: true
        }).el();
      } else if (videoInstance === 'new') {
        videoElement = global_document__WEBPACK_IMPORTED_MODULE_2___default().createElement('video');
        videoElement.style.cssText = 'position:absolute; top:0; left:0; z-index:2 !important;';
        vpaidContainerElement.appendChild(videoElement);
      } else {
        if (videoInstance !== 'none') {
          player.warn(videoInstance + ' is an invalid videoInstance value. Defaulting to \'none\'.');
        }

        videoElement = null;
      }

      const environmentVars = {
        slot: vpaidContainerElement,
        videoSlot: videoElement
      };
      adUnit.initAd(initialDimensions.width, initialDimensions.height, 'normal', -1, creativeData, environmentVars);
    }

    function onAdLoaded() {
      adUnit.startAd();
    }

    function onAdStarted() {
      player.trigger('ads-ad-started');
      player.on('resize', resizeAd);
      global_window__WEBPACK_IMPORTED_MODULE_1___default().addEventListener('resize', resizeAd);
      tracker.trackImpression();
    }

    function onAdStopped() {
      vpaidClient.destroy();
      player.controlBar.show();
      player.off('resize', resizeAd);
      global_window__WEBPACK_IMPORTED_MODULE_1___default().removeEventListener('resize', resizeAd);
      player.trigger('adended');
      player.ads.endLinearAdMode();

      if (options.vpaid.videoInstance === 'new' && videoElement.parentElement) {
        videoElement.parentElement.removeChild(videoElement);
      }
    }

    function resizeAd() {
      const newDimensions = getPlayerDimensions(player);
      adUnit.resizeAd(newDimensions.width, newDimensions.height, player.isFullscreen() ? 'fullscreen' : 'normal');
    }
  }
}

function getPlayerDimensions(player) {
  let width = player.width();
  let height = player.height();

  if (player.isFullscreen()) {
    width = (global_window__WEBPACK_IMPORTED_MODULE_1___default().innerWidth);
    height = (global_window__WEBPACK_IMPORTED_MODULE_1___default().innerHeight);
  }

  return {
    width,
    height
  };
}

/***/ }),

/***/ "./node_modules/global/document.js":
/*!*****************************************!*\
  !*** ./node_modules/global/document.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var topLevel = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(/*! min-document */ "?34aa");

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js":
/*!************************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js":
/*!***********************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IVPAIDAdUnit = __webpack_require__(/*! ./IVPAIDAdUnit */ "./node_modules/vpaid-html5-client/js/IVPAIDAdUnit.js");
var Subscriber = __webpack_require__(/*! ./subscriber */ "./node_modules/vpaid-html5-client/js/subscriber.js");
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/vpaid-html5-client/js/utils.js");
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js":
/*!****************************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/vpaid-html5-client/js/utils.js");
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = __webpack_require__(/*! ./VPAIDAdUnit */ "./node_modules/vpaid-html5-client/js/VPAIDAdUnit.js");

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el) {
        el.remove();
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        utils.clearCallbackTimeout(this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/subscriber.js":
/*!**********************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/subscriber.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;



/***/ }),

/***/ "./node_modules/vpaid-html5-client/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/vpaid-html5-client/js/utils.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        delete timeout[callback];
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(callback);
        }
    };

    timeouts[callback] = timeout;

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    element.style.position = 'absolute';
    element.style.left = '0';
    element.style.top = '0';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.border = 'none';
    element.style.width = '100%';
    element.style.height = '100%';
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    clearCallbackTimeout: clearCallbackTimeout,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};



/***/ }),

/***/ "video.js":
/*!**************************!*\
  !*** external "videojs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = videojs;

/***/ }),

/***/ "?34aa":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/vast-plugin.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "video.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dailymotion/vast-client */ "./node_modules/@dailymotion/vast-client/dist/vast-client.min.js");
/* harmony import */ var _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vpaid_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vpaid-handler */ "./src/vpaid-handler.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! global/document */ "./node_modules/global/document.js");
/* harmony import */ var global_document__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(global_document__WEBPACK_IMPORTED_MODULE_4__);





const Plugin = video_js__WEBPACK_IMPORTED_MODULE_0___default().getPlugin('plugin');
/**
 * Create Source Objects
 *
 * @param {Array<MediaFile>} mediaFiles  Array of media files
 * @return {Array} Array of source objects
 */

function createSourceObjects(mediaFiles) {
  return mediaFiles.map(mediaFile => ({
    type: mediaFile.mimeType,
    src: mediaFile.fileURL
  }));
}
/**
 * Determine if the VAST creative has a VPAID media file
 *
 * @param {Object} creative
 * @returns {boolean}
 */


function hasVPAID(creative) {
  const mediaFiles = creative.mediaFiles;

  for (let i = 0; i < mediaFiles.length; i++) {
    if (mediaFiles[i].apiFramework && mediaFiles[i].apiFramework === 'VPAID') {
      return true;
    }
  }

  return false;
}
/**
 *
 * @param {Object} ad
 * @returns {boolean}
 */


function doAllLinearCreativesRequireApiFramework(ad) {
  return ad.creatives.every(creative => doesCreativeRequireApiFramework(creative));
}
/**
 *
 * @param {Object} creative
 * @returns {boolean}
 */


function doesCreativeRequireApiFramework(creative) {
  return creative.mediaFiles.every(mediaFile => mediaFile && mediaFile.apiFramework);
}
/**
 *
 * @param {HTMLElement} skipButtonElement
 */


const isSkipEnabled = skipButtonElement => (' ' + skipButtonElement.className + ' ').indexOf(' enabled ') > -1;
/**
 *
 * @param {HTMLElement} skipButtonElement
 */


const enableSkip = skipButtonElement => {
  if (!isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className += ' enabled ';
  }
};
/**
 *
 * @param {HTMLElement} skipButtonElement
 */


const disableSkip = skipButtonElement => {
  if (isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className = skipButtonElement.className.replace(' enabled ', '');
  }
};

const linearFn = creative => creative.type === 'linear' && creative.mediaFiles.length;

const companionFn = creative => creative.type === 'companion';
/**
 * Holds related trackers together.
 * And from a tracker, we can access the ad, creative and variation.
 */


class GroupedTrackers {
  /**
   *
   * @param {VASTTracker} linearAdTracker
   * @param {VASTTracker} companionTracker
   */
  constructor(linearAdTracker, companionTracker) {
    this.linearAdTracker = linearAdTracker;
    this.companionTracker = companionTracker;
  }

}

const defaultOptions = {
  seekEnabled: false,
  controlsEnabled: false,
  wrapperLimit: 10,
  withCredentials: true,
  skip: 0,
  vpaid: {
    containerId: undefined,
    containerClass: 'vjs-vpaid-container',
    videoInstance: 'none'
  },
  companion: {
    elementId: null,
    maxWidth: 0,
    maxHeight: 0
  }
};
/**
 * VastPlugin
 */

class VastPlugin extends Plugin {
  /**
   * Constructor
   *
   * @param {Object} player The videojs object
   * @param {Object} options Plugin config
   */
  constructor(player, options) {
    super(player); // Could be initialized already by user

    if (typeof player.ads === 'function') {
      player.ads({
        debug: false
      });
    }
    /** @type {Object} */


    this.options = video_js__WEBPACK_IMPORTED_MODULE_0___default().mergeOptions(defaultOptions, options || {});
    /** @type {VASTClient} */

    this.vastClient = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTClient();
    /** @type {Object} */

    this.originalPlayerState = {};
    /** @type {Object.<string, function>} */

    this.eventListeners = {};
    /** @type {Object.<string, HTMLElement>} */

    this.domElements = {};
    /** @type {GroupedTrackers[]} */

    this.trackers = [];
    /** @type {GroupedTrackers|null} */

    this.tracker = null;
    player.on('readyforpreroll', () => {
      const trackers = this.trackers;

      if (trackers.length === 1) {
        const linearAdTracker = trackers[0].linearAdTracker;
        const creative = linearAdTracker.creative;

        if (creative.type === 'linear') {
          if (doesCreativeRequireApiFramework(creative)) {
            if (hasVPAID(creative)) {
              (0,vpaid_handler__WEBPACK_IMPORTED_MODULE_2__["default"])(player, linearAdTracker, video_js__WEBPACK_IMPORTED_MODULE_0___default().mergeOptions(defaultOptions, options || {}));
              return;
            }

            this.player.trigger('adscanceled');
            return;
          }
        } else {
          this.player.trigger('adscanceled');
          return;
        }
      }

      this._startPreroll();
    });

    this._getVastContent().then(res => this._handleVast(res)).catch(err => {
      this.player.trigger('adscanceled'); // eslint-disable-next-line no-console

      this.player.log(`Ad cancelled: ${err.message}`);
    });
  }
  /**
   *
   * @param {Object} vastResponse
   * @private
   */


  _handleVast(vastResponse) {
    if (!vastResponse.ads || vastResponse.ads.length === 0) {
      this.player.trigger('adscanceled');
      return;
    }

    const adsWithLinear = vastResponse.ads.filter(ad => ad.creatives.some(linearFn));

    if (!adsWithLinear.length) {
      this.player.trigger('adscanceled');
      return;
    }

    const adPod = adsWithLinear.filter(ad => ad.sequence) // TODO: support VPAID in ad pods?
    .filter(ad => !doAllLinearCreativesRequireApiFramework(ad)).sort((ad1, ad2) => ad1.sequence - ad2.sequence);
    const standaloneAds = adsWithLinear.filter(ad => !adPod.includes(ad));

    if (adPod.length) {
      this.trackers = adPod.map(ad => this._createGroupedTrackers(ad));
    } else {
      const [ad] = standaloneAds;
      this.trackers = [this._createGroupedTrackers(ad)];
    }

    this.player.trigger('adsready');
  }
  /**
   *
   * @param {Object} ad
   * @returns {GroupedTrackers}
   * @private
   */


  _createGroupedTrackers(ad) {
    const onClickThrough = url => {
      global_window__WEBPACK_IMPORTED_MODULE_3___default().open(url, '_blank');
    };

    const linearAdTracker = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTTracker(this.vastClient, ad, ad.creatives.find(linearFn), ad.creatives.find(companionFn));
    linearAdTracker.on('clickthrough', onClickThrough);
    let companionAdTracker = null;
    const companionCreative = ad.creatives.find(companionFn);

    if (companionCreative) {
      // Just pick the first suitable companion ad for now
      const options = this.options;
      const variation = companionCreative.variations.filter(v => v.staticResource).filter(v => v.type.indexOf('image') === 0).find(v => parseInt(v.width, 10) <= options.companion.maxWidth && parseInt(v.height, 10) <= options.companion.maxHeight);

      if (variation) {
        companionAdTracker = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTTracker(this.vastClient, ad, companionCreative, variation);
        companionAdTracker.on('clickthrough', onClickThrough);
      }
    }

    return new GroupedTrackers(linearAdTracker, companionAdTracker);
  }
  /**
   *
   * @private
   */


  _showCompanion() {
    const companionTracker = this.tracker.companionTracker;
    const dest = global_document__WEBPACK_IMPORTED_MODULE_4___default().getElementById(this.options.companion.elementId);

    if (companionTracker && companionTracker.variation && dest) {
      const variation = companionTracker.variation;

      const onClick = () => {
        companionTracker.click();
      };

      const hyperLink = global_document__WEBPACK_IMPORTED_MODULE_4___default().createElement('a');
      hyperLink.src = '#';
      hyperLink.addEventListener('click', onClick);
      const image = global_document__WEBPACK_IMPORTED_MODULE_4___default().createElement('img');
      image.src = variation.staticResource;
      hyperLink.appendChild(image);
      dest.innerHTML = '';
      dest.appendChild(hyperLink);
    } else if (dest) {
      // TODO: option to remove last companion ad when content plays?
      dest.innerHTML = '';
    }
  }
  /**
   * Get Vast Content
   *
   * @returns {Promise<Object>}
   * @private
   */


  _getVastContent() {
    const {
      url,
      xml
    } = this.options;

    if (url) {
      return this.vastClient.get(url, {
        withCredentials: this.options.withCredentials,
        wrapperLimit: this.options.wrapperLimit
      });
    } else if (xml) {
      const vastParser = new _dailymotion_vast_client__WEBPACK_IMPORTED_MODULE_1__.VASTParser();
      let xmlDocument;

      if (xml.constructor === (global_window__WEBPACK_IMPORTED_MODULE_3___default().XMLDocument)) {
        xmlDocument = xml;
      } else if (xml.constructor === String) {
        xmlDocument = new (global_window__WEBPACK_IMPORTED_MODULE_3___default().DOMParser)().parseFromString(xml, 'text/xml');
      } else {
        throw new Error('xml config option must be a String or XMLDocument');
      }

      return vastParser.parseVAST(xmlDocument);
    }

    return Promise.reject(new Error('url or xml option not set'));
  }
  /**
   * Do Pre-roll
   *
   * @private
   */


  _startPreroll() {
    const player = this.player;
    const options = this.options;
    player.ads.startLinearAdMode();
    this.originalPlayerState.controlsEnabled = player.controls();
    player.controls(options.controlsEnabled);
    this.originalPlayerState.seekEnabled = player.controlBar.progressControl.enabled();

    if (options.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    const blocker = global_window__WEBPACK_IMPORTED_MODULE_3___default().document.createElement('div');
    blocker.className = 'vast-blocker';

    blocker.onclick = () => {
      if (player.paused()) {
        player.play();
        return false;
      }

      this.tracker.linearAdTracker.click();
    };

    this.domElements.blocker = blocker;
    player.el().insertBefore(blocker, player.controlBar.el());
    const skipButton = global_window__WEBPACK_IMPORTED_MODULE_3___default().document.createElement('div');
    skipButton.className = 'vast-skip-button';
    skipButton.style.display = 'none';
    this.domElements.skipButton = skipButton;
    player.el().appendChild(skipButton);

    this.eventListeners.adtimeupdate = () => this._timeUpdate();

    player.one('adplay', () => {
      if (this.options.skip > 0 && player.duration() >= this.options.skip) {
        skipButton.style.display = 'block';
        player.on('adtimeupdate', this.eventListeners.adtimeupdate);
      }

      this.player.loadingSpinner.el().style.display = 'none';
    });

    this.eventListeners.teardown = () => this._endPreroll();

    skipButton.onclick = e => {
      if ((' ' + skipButton.className + ' ').indexOf(' enabled ') >= 0) {
        this.tracker.linearAdTracker.skip();

        this._playNextTrackedAd();
      }

      if ((global_window__WEBPACK_IMPORTED_MODULE_3___default().Event.prototype.stopPropagation) !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    this._setupEvents();

    this._playNextTrackedAd();
  }
  /**
   *
   * @private
   */


  _playNextTrackedAd() {
    const nextTracker = this.trackers.shift();

    if (nextTracker) {
      this.tracker = nextTracker;
      this.player.src(createSourceObjects(this.tracker.linearAdTracker.creative.mediaFiles));

      this._showCompanion();
    } else {
      this.eventListeners.teardown();
    }
  }
  /**
   * Time Update
   *
   * @private
   */


  _timeUpdate() {
    const player = this.player;
    player.loadingSpinner.el().style.display = 'none';
    const timeLeft = Math.ceil(this.options.skip - player.currentTime());
    const skipButtonElement = this.domElements.skipButton;

    if (timeLeft > 0) {
      disableSkip(skipButtonElement);
      this.domElements.skipButton.innerHTML = 'Skip in ' + timeLeft + '...';
    } else {
      enableSkip(skipButtonElement);
      this.domElements.skipButton.innerHTML = 'Skip';
    }
  }
  /**
   * Tear Down
   *
   * @private
   */


  _endPreroll() {
    Object.values(this.domElements).filter(el => el.parentNode).forEach(el => el.parentNode.removeChild(el));
    const player = this.player;
    player.off('adtimeupdate', this.eventListeners.adtimeupdate);
    player.ads.endLinearAdMode();
    player.controls(this.originalPlayerState.controlsEnabled);

    if (this.originalPlayerState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    player.trigger('vast-done');
  }
  /**
   * Setup Events
   *
   * @private
   */


  _setupEvents() {
    const player = this.player;
    const thisPlugin = this;

    const adPlayFn = function () {
      thisPlugin.tracker.linearAdTracker.trackImpression();
    };

    const timeupdateFn = function () {
      if (isNaN(thisPlugin.tracker.linearAdTracker.assetDuration)) {
        thisPlugin.tracker.linearAdTracker.assetDuration = player.duration();
      }

      thisPlugin.tracker.linearAdTracker.setProgress(player.currentTime());
    };

    const pauseFn = function () {
      if (player.remainingTime() > 0) {
        thisPlugin.tracker.linearAdTracker.setPaused(true);
        player.one('adplay', function () {
          thisPlugin.tracker.linearAdTracker.setPaused(false);
        });
      }
    }; // args: err


    const adErrorFn = () => {
      const MEDIAFILE_PLAYBACK_ERROR = '405';
      thisPlugin.tracker.linearAdTracker.errorWithCode(MEDIAFILE_PLAYBACK_ERROR); // Do not want to show VAST related errors to the user

      player.error(null);

      this._playNextTrackedAd();
    };

    const fullScreenFn = function () {
      // for 'fullscreen' & 'exitfullscreen'
      thisPlugin.tracker.linearAdTracker.setFullscreen(player.isFullscreen());
    };

    const muteFn = function () {
      let previousMuted = player.muted();
      let previousVolume = player.volume();
      return function () {
        const volumeNow = player.volume();
        const mutedNow = player.muted();

        if (previousMuted !== mutedNow) {
          thisPlugin.tracker.linearAdTracker.setMuted(mutedNow);
          previousMuted = mutedNow;
        } else if (previousVolume !== volumeNow) {
          if (previousVolume > 0 && volumeNow === 0) {
            thisPlugin.tracker.linearAdTracker.setMuted(true);
          } else if (previousVolume === 0 && volumeNow > 0) {
            thisPlugin.tracker.linearAdTracker.setMuted(false);
          }

          previousVolume = volumeNow;
        }
      };
    }();

    const adEndedFn = () => {
      // Ad ended, not skipped
      thisPlugin.tracker.linearAdTracker.complete();

      thisPlugin._playNextTrackedAd();
    };

    player.on('adended', adEndedFn);
    player.on('adplay', adPlayFn);
    player.on('adtimeupdate', timeupdateFn);
    player.on('adpause', pauseFn);
    player.on('aderror', adErrorFn);
    player.on('advolumechange', muteFn);
    player.on('fullscreenchange', fullScreenFn);
    player.one('vast-done', function () {
      player.off('adplay', adPlayFn);
      player.off('adtimeupdate', timeupdateFn);
      player.off('adpause', pauseFn);
      player.off('aderror', adErrorFn);
      player.off('advolumechange', muteFn);
      player.off('fullscreenchange', fullScreenFn);
      player.off('adended', adEndedFn);
    });
  }

}

video_js__WEBPACK_IMPORTED_MODULE_0___default().registerPlugin('vast', VastPlugin);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/vast-player.css ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUNuQixXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJB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UCxDQUFXLGdCQUFYLEVBQTZCMkosTUFBN0I7TUFDQWpPLE1BQU0sQ0FBQ3NFLEdBQVAsQ0FBVyxrQkFBWCxFQUErQnlKLFlBQS9CO01BQ0EvTixNQUFNLENBQUNzRSxHQUFQLENBQVcsU0FBWCxFQUFzQm1LLFNBQXRCO0lBQ0QsQ0FSRDtFQVNEOztBQTdhNkI7O0FBZ2JoQzFKLDhEQUFBLENBQXVCLE1BQXZCLEVBQStCd0MsVUFBL0IsRTs7Ozs7Ozs7OztBQ3hpQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy9AZGFpbHltb3Rpb24vdmFzdC1jbGllbnQvZGlzdC92YXN0LWNsaWVudC5taW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdnBhaWQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luLy4vbm9kZV9tb2R1bGVzL3ZwYWlkLWh0bWw1LWNsaWVudC9qcy9WUEFJREFkVW5pdC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvVlBBSURIVE1MNUNsaWVudC5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvc3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi8uL25vZGVfbW9kdWxlcy92cGFpZC1odG1sNS1jbGllbnQvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vZXh0ZXJuYWwgdmFyIFwidmlkZW9qc1wiIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luL2lnbm9yZWR8L1VzZXJzL3BoaWxpcHdhdHNvbi9kZXZlbG9wbWVudC92aWRlb2pzeC12YXN0LXBsdWdpbi9ub2RlX21vZHVsZXMvZ2xvYmFsfG1pbi1kb2N1bWVudCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92aWRlb2pzeC12YXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZpZGVvanN4LXZhc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdmFzdC1wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdmlkZW9qc3gtdmFzdC1wbHVnaW4vLi9zcmMvdmFzdC1wbGF5ZXIuY3NzP2I4ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/dChleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sdCk6dCgoZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLlZBU1Q9e30pfSh0aGlzLChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYoaT1pLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixpKX1yZXR1cm4gcn1mdW5jdGlvbiByKGUpe2Zvcih2YXIgcj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspe3ZhciBpPW51bGwhPWFyZ3VtZW50c1tyXT9hcmd1bWVudHNbcl06e307ciUyP3QoT2JqZWN0KGkpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtzKGUsdCxpW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGkpKTp0KE9iamVjdChpKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGksdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0saShlKX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBhKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBpPXRbcl07aS5lbnVtZXJhYmxlPWkuZW51bWVyYWJsZXx8ITEsaS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gaSYmKGkud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkua2V5LGkpfX1mdW5jdGlvbiBvKGUsdCxyKXtyZXR1cm4gdCYmYShlLnByb3RvdHlwZSx0KSxyJiZhKGUsciksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJwcm90b3R5cGVcIix7d3JpdGFibGU6ITF9KSxlfWZ1bmN0aW9uIHMoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIGwoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwicHJvdG90eXBlXCIse3dyaXRhYmxlOiExfSksdCYmYyhlLHQpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHU9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0sdShlKX1mdW5jdGlvbiBjKGUsdCl7cmV0dXJuIGM9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9LGMoZSx0KX1mdW5jdGlvbiBkKGUsdCl7aWYodCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSlyZXR1cm4gdDtpZih2b2lkIDAhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGV9KGUpfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbixbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcixpPXUoZSk7aWYodCl7dmFyIG49dSh0aGlzKS5jb25zdHJ1Y3RvcjtyPVJlZmxlY3QuY29uc3RydWN0KGksYXJndW1lbnRzLG4pfWVsc2Ugcj1pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gZCh0aGlzLHIpfX1mdW5jdGlvbiBoKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiB2KGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiB2KGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIHYoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gdihlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLGk9bmV3IEFycmF5KHQpO3I8dDtyKyspaVtyXT1lW3JdO3JldHVybiBpfWZ1bmN0aW9uIGYoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJue2lkOmUuaWR8fG51bGwsYWRJZDplLmFkSWR8fG51bGwsc2VxdWVuY2U6ZS5zZXF1ZW5jZXx8bnVsbCxhcGlGcmFtZXdvcms6ZS5hcGlGcmFtZXdvcmt8fG51bGwsdW5pdmVyc2FsQWRJZHM6W10sY3JlYXRpdmVFeHRlbnNpb25zOltdfX12YXIgbT1bXCJBRENBVEVHT1JJRVNcIixcIkFEQ09VTlRcIixcIkFEUExBWUhFQURcIixcIkFEU0VSVklOR0lEXCIsXCJBRFRZUEVcIixcIkFQSUZSQU1FV09SS1NcIixcIkFQUEJVTkRMRVwiLFwiQVNTRVRVUklcIixcIkJMT0NLRURBRENBVEVHT1JJRVNcIixcIkJSRUFLTUFYQURMRU5HVEhcIixcIkJSRUFLTUFYQURTXCIsXCJCUkVBS01BWERVUkFUSU9OXCIsXCJCUkVBS01JTkFETEVOR1RIXCIsXCJCUkVBS01JTkRVUkFUSU9OXCIsXCJCUkVBS1BPU0lUSU9OXCIsXCJDTElDS1BPU1wiLFwiQ0xJQ0tUWVBFXCIsXCJDTElFTlRVQVwiLFwiQ09OVEVOVElEXCIsXCJDT05URU5UUExBWUhFQURcIixcIkNPTlRFTlRVUklcIixcIkRFVklDRUlQXCIsXCJERVZJQ0VVQVwiLFwiRE9NQUlOXCIsXCJFWFRFTlNJT05TXCIsXCJHRFBSQ09OU0VOVFwiLFwiSUZBXCIsXCJJRkFUWVBFXCIsXCJJTlZFTlRPUllTVEFURVwiLFwiTEFUTE9OR1wiLFwiTElNSVRBRFRSQUNLSU5HXCIsXCJNRURJQU1JTUVcIixcIk1FRElBUExBWUhFQURcIixcIk9NSURQQVJUTkVSXCIsXCJQQUdFVVJMXCIsXCJQTEFDRU1FTlRUWVBFXCIsXCJQTEFZRVJDQVBBQklMSVRJRVNcIixcIlBMQVlFUlNJWkVcIixcIlBMQVlFUlNUQVRFXCIsXCJQT0RTRVFVRU5DRVwiLFwiUkVHVUxBVElPTlNcIixcIlNFUlZFUlNJREVcIixcIlNFUlZFUlVBXCIsXCJUUkFOU0FDVElPTklEXCIsXCJVTklWRVJTQUxBRElEXCIsXCJWQVNUVkVSU0lPTlNcIixcIlZFUklGSUNBVElPTlZFTkRPUlNcIl07ZnVuY3Rpb24gZyhlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30saT1bXSxuPUEoZSk7Zm9yKHZhciBhIGluIXQuRVJST1JDT0RFfHxyLmlzQ3VzdG9tQ29kZXx8L15bMC05XXszfSQvLnRlc3QodC5FUlJPUkNPREUpfHwodC5FUlJPUkNPREU9OTAwKSx0LkNBQ0hFQlVTVElORz1FKE1hdGgucm91bmQoMWU4Kk1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKCkpLHQuVElNRVNUQU1QPShuZXcgRGF0ZSkudG9JU09TdHJpbmcoKSx0LlJBTkRPTT10LnJhbmRvbT10LkNBQ0hFQlVTVElORyx0KXRbYV09Yih0W2FdKTtmb3IodmFyIG8gaW4gbil7dmFyIHM9bltvXTtcInN0cmluZ1wiPT10eXBlb2YgcyYmaS5wdXNoKFQocyx0KSl9cmV0dXJuIGl9ZnVuY3Rpb24gVChlLHQpe3ZhciByPShlPXkoZSx0KSkubWF0Y2goL1teW1xcXV0rKD89XSkvZyk7aWYoIXIpcmV0dXJuIGU7dmFyIGk9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBtLmluZGV4T2YoZSk+LTF9KSk7cmV0dXJuIDA9PT1pLmxlbmd0aD9lOnkoZSxpPWkucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlW3RdPS0xLGV9KSx7fSkpfWZ1bmN0aW9uIHkoZSx0KXt2YXIgcj1lO2Zvcih2YXIgaSBpbiB0KXt2YXIgbj10W2ldO3I9ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzpcXFxcW3wlJSkoXCIuY29uY2F0KGksXCIpKD86XFxcXF18JSUpXCIpLFwiZ1wiKSxuKX1yZXR1cm4gcn1mdW5jdGlvbiBBKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2UubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKT9lLnVybDplfSkpOmV9ZnVuY3Rpb24gayhlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWlmKFIodFtyXSxlKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBSKGUsdCl7aWYoZSYmdCl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSksaT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KTtyZXR1cm4gci5sZW5ndGg9PT1pLmxlbmd0aCYmKGUuaWQ9PT10LmlkJiZlLnVybD09PXQudXJsKX1yZXR1cm4hMX1mdW5jdGlvbiBiKGUpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoZSkucmVwbGFjZSgvWyEnKCkqXS9nLChmdW5jdGlvbihlKXtyZXR1cm5cIiVcIi5jb25jYXQoZS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSl9KSl9ZnVuY3Rpb24gRShlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06OCxyPVN0cmluZyhlKTtyZXR1cm4gci5sZW5ndGg8dD9OKDAsdC1yLmxlbmd0aCwhMSkubWFwKChmdW5jdGlvbigpe3JldHVyblwiMFwifSkpLmpvaW4oXCJcIikrcjpyfWZ1bmN0aW9uIE4oZSx0LHIpe2Zvcih2YXIgaT1bXSxuPWU8dCxhPXI/bj90KzE6dC0xOnQsbz1lO24/bzxhOm8+YTtuP28rKzpvLS0paS5wdXNoKG8pO3JldHVybiBpfXZhciBMPXt0cmFjazpmdW5jdGlvbihlLHQscil7ZyhlLHQscikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbnVsbCE9PXdpbmRvdyYmKChuZXcgSW1hZ2UpLnNyYz1lKX0pKX0scmVzb2x2ZVVSTFRlbXBsYXRlczpnLGV4dHJhY3RVUkxzRnJvbVRlbXBsYXRlczpBLGNvbnRhaW5zVGVtcGxhdGVPYmplY3Q6ayxpc1RlbXBsYXRlT2JqZWN0RXF1YWw6UixlbmNvZGVVUklDb21wb25lbnRSRkMzOTg2OmIscmVwbGFjZVVybE1hY3JvczpULGxlZnRwYWQ6RSxyYW5nZTpOLGlzTnVtZXJpYzpmdW5jdGlvbihlKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChlKSkmJmlzRmluaXRlKGUpfSxmbGF0dGVuOmZ1bmN0aW9uIGUodCl7cmV0dXJuIHQucmVkdWNlKChmdW5jdGlvbih0LHIpe3JldHVybiB0LmNvbmNhdChBcnJheS5pc0FycmF5KHIpP2Uocik6cil9KSxbXSl9LGpvaW5BcnJheU9mVW5pcXVlVGVtcGxhdGVPYmpzOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOltdLHI9QXJyYXkuaXNBcnJheShlKT9lOltdLGk9QXJyYXkuaXNBcnJheSh0KT90OltdLG49ci5jb25jYXQoaSk7cmV0dXJuIG4ucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBrKHQsZSl8fGUucHVzaCh0KSxlfSksW10pfX07ZnVuY3Rpb24gdyhlKXtyZXR1cm4tMSE9PVtcInRydWVcIixcIlRSVUVcIixcIlRydWVcIixcIjFcIl0uaW5kZXhPZihlKX12YXIgVT17Y2hpbGRCeU5hbWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1lLmNoaWxkTm9kZXM7Zm9yKHZhciBpIGluIHIpe3ZhciBuPXJbaV07aWYobi5ub2RlTmFtZT09PXQpcmV0dXJuIG59fSxjaGlsZHJlbkJ5TmFtZTpmdW5jdGlvbihlLHQpe3ZhciByPVtdLGk9ZS5jaGlsZE5vZGVzO2Zvcih2YXIgbiBpbiBpKXt2YXIgYT1pW25dO2Eubm9kZU5hbWU9PT10JiZyLnB1c2goYSl9cmV0dXJuIHJ9LHJlc29sdmVWYXN0QWRUYWdVUkk6ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZigwPT09ZS5pbmRleE9mKFwiLy9cIikpe3ZhciByPWxvY2F0aW9uLnByb3RvY29sO3JldHVyblwiXCIuY29uY2F0KHIpLmNvbmNhdChlKX1pZigtMT09PWUuaW5kZXhPZihcIjovL1wiKSl7dmFyIGk9dC5zbGljZSgwLHQubGFzdEluZGV4T2YoXCIvXCIpKTtyZXR1cm5cIlwiLmNvbmNhdChpLFwiL1wiKS5jb25jYXQoZSl9cmV0dXJuIGV9LHBhcnNlQm9vbGVhbjp3LHBhcnNlTm9kZVRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihlLnRleHRDb250ZW50fHxlLnRleHR8fFwiXCIpLnRyaW0oKX0sY29weU5vZGVBdHRyaWJ1dGU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXQuZ2V0QXR0cmlidXRlKGUpO2kmJnIuc2V0QXR0cmlidXRlKGUsaSl9LHBhcnNlQXR0cmlidXRlczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5hdHRyaWJ1dGVzLHI9e30saT0wO2k8dC5sZW5ndGg7aSsrKXJbdFtpXS5ub2RlTmFtZV09dFtpXS5ub2RlVmFsdWU7cmV0dXJuIHJ9LHBhcnNlRHVyYXRpb246ZnVuY3Rpb24oZSl7aWYobnVsbD09ZSlyZXR1cm4tMTtpZihMLmlzTnVtZXJpYyhlKSlyZXR1cm4gcGFyc2VJbnQoZSk7dmFyIHQ9ZS5zcGxpdChcIjpcIik7aWYoMyE9PXQubGVuZ3RoKXJldHVybi0xO3ZhciByPXRbMl0uc3BsaXQoXCIuXCIpLGk9cGFyc2VJbnQoclswXSk7Mj09PXIubGVuZ3RoJiYoaSs9cGFyc2VGbG9hdChcIjAuXCIuY29uY2F0KHJbMV0pKSk7dmFyIG49cGFyc2VJbnQoNjAqdFsxXSksYT1wYXJzZUludCg2MCp0WzBdKjYwKTtyZXR1cm4gaXNOYU4oYSl8fGlzTmFOKG4pfHxpc05hTihpKXx8bj4zNjAwfHxpPjYwPy0xOmErbitpfSxzcGxpdFZBU1Q6ZnVuY3Rpb24oZSl7dmFyIHQ9W10scj1udWxsO3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGksbil7aWYoaS5zZXF1ZW5jZSYmKGkuc2VxdWVuY2U9cGFyc2VJbnQoaS5zZXF1ZW5jZSwxMCkpLGkuc2VxdWVuY2U+MSl7dmFyIGE9ZVtuLTFdO2lmKGEmJmEuc2VxdWVuY2U9PT1pLnNlcXVlbmNlLTEpcmV0dXJuIHZvaWQociYmci5wdXNoKGkpKTtkZWxldGUgaS5zZXF1ZW5jZX1yPVtpXSx0LnB1c2gocil9KSksdH0sYXNzaWduQXR0cmlidXRlczpmdW5jdGlvbihlLHQpe2lmKGUpZm9yKHZhciByIGluIGUpe3ZhciBpPWVbcl07aWYoaS5ub2RlTmFtZSYmaS5ub2RlVmFsdWUmJnQuaGFzT3duUHJvcGVydHkoaS5ub2RlTmFtZSkpe3ZhciBuPWkubm9kZVZhbHVlO1wiYm9vbGVhblwiPT10eXBlb2YgdFtpLm5vZGVOYW1lXSYmKG49dyhuKSksdFtpLm5vZGVOYW1lXT1ufX19LG1lcmdlV3JhcHBlckFkRGF0YTpmdW5jdGlvbihlLHQpe2UuZXJyb3JVUkxUZW1wbGF0ZXM9dC5lcnJvclVSTFRlbXBsYXRlcy5jb25jYXQoZS5lcnJvclVSTFRlbXBsYXRlcyksZS5pbXByZXNzaW9uVVJMVGVtcGxhdGVzPXQuaW1wcmVzc2lvblVSTFRlbXBsYXRlcy5jb25jYXQoZS5pbXByZXNzaW9uVVJMVGVtcGxhdGVzKSxlLmV4dGVuc2lvbnM9dC5leHRlbnNpb25zLmNvbmNhdChlLmV4dGVuc2lvbnMpLHQudmlld2FibGVJbXByZXNzaW9uLmxlbmd0aD4wJiYoZS52aWV3YWJsZUltcHJlc3Npb249W10uY29uY2F0KGgoZS52aWV3YWJsZUltcHJlc3Npb24pLGgodC52aWV3YWJsZUltcHJlc3Npb24pKSksZS5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM9dC5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMsZS5hbGxvd011bHRpcGxlQWRzPXQuYWxsb3dNdWx0aXBsZUFkcyxlLmZhbGxiYWNrT25Ob0FkPXQuZmFsbGJhY2tPbk5vQWQ7dmFyIHI9KHQuY3JlYXRpdmVzfHxbXSkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJjb21wYW5pb25cIj09PWUudHlwZX0pKSxpPXIucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybih0LnZhcmlhdGlvbnN8fFtdKS5mb3JFYWNoKChmdW5jdGlvbih0KXsodC5jb21wYW5pb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7TC5jb250YWluc1RlbXBsYXRlT2JqZWN0KHQsZSl8fGUucHVzaCh0KX0pKX0pKSxlfSksW10pO2UuY3JlYXRpdmVzPXIuY29uY2F0KGUuY3JlYXRpdmVzKTt2YXIgbj10LnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcyYmdC52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMubGVuZ3RoLGE9dC52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzJiZ0LnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXMubGVuZ3RoO2UuY3JlYXRpdmVzLmZvckVhY2goKGZ1bmN0aW9uKGUpe2lmKHQudHJhY2tpbmdFdmVudHMmJnQudHJhY2tpbmdFdmVudHNbZS50eXBlXSlmb3IodmFyIHIgaW4gdC50cmFja2luZ0V2ZW50c1tlLnR5cGVdKXt2YXIgbz10LnRyYWNraW5nRXZlbnRzW2UudHlwZV1bcl07QXJyYXkuaXNBcnJheShlLnRyYWNraW5nRXZlbnRzW3JdKXx8KGUudHJhY2tpbmdFdmVudHNbcl09W10pLGUudHJhY2tpbmdFdmVudHNbcl09ZS50cmFja2luZ0V2ZW50c1tyXS5jb25jYXQobyl9XCJsaW5lYXJcIj09PWUudHlwZSYmKG4mJihlLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcz1lLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5jb25jYXQodC52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMpKSxhJiYoZS52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzPWUudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcy5jb25jYXQodC52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzKSksIXQudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZXx8bnVsbCE9PWUudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZSYmdm9pZCAwIT09ZS52aWRlb0NsaWNrVGhyb3VnaFVSTFRlbXBsYXRlfHwoZS52aWRlb0NsaWNrVGhyb3VnaFVSTFRlbXBsYXRlPXQudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZSkpLFwiY29tcGFuaW9uXCI9PT1lLnR5cGUmJmkubGVuZ3RoJiYoZS52YXJpYXRpb25zfHxbXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5jb21wYW5pb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzPUwuam9pbkFycmF5T2ZVbmlxdWVUZW1wbGF0ZU9ianMoZS5jb21wYW5pb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLGkpfSkpfSkpLHQuYWRWZXJpZmljYXRpb25zJiYoZS5hZFZlcmlmaWNhdGlvbnM9ZS5hZFZlcmlmaWNhdGlvbnMuY29uY2F0KHQuYWRWZXJpZmljYXRpb25zKSksdC5ibG9ja2VkQWRDYXRlZ29yaWVzJiYoZS5ibG9ja2VkQWRDYXRlZ29yaWVzPWUuYmxvY2tlZEFkQ2F0ZWdvcmllcy5jb25jYXQodC5ibG9ja2VkQWRDYXRlZ29yaWVzKSl9fTtmdW5jdGlvbiBDKGUsdCl7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgZT1mKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSksdD1lLmlkLHI9ZS5hZElkLGk9ZS5zZXF1ZW5jZSxuPWUuYXBpRnJhbWV3b3JrO3JldHVybntpZDp0LGFkSWQ6cixzZXF1ZW5jZTppLGFwaUZyYW1ld29yazpuLHR5cGU6XCJjb21wYW5pb25cIixyZXF1aXJlZDpudWxsLHZhcmlhdGlvbnM6W119fSh0KTtyZXR1cm4gci5yZXF1aXJlZD1lLmdldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxudWxsLHIudmFyaWF0aW9ucz1VLmNoaWxkcmVuQnlOYW1lKGUsXCJDb21wYW5pb25cIikubWFwKChmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtyZXR1cm57aWQ6ZS5pZHx8bnVsbCxhZFR5cGU6XCJjb21wYW5pb25BZFwiLHdpZHRoOmUud2lkdGh8fDAsaGVpZ2h0OmUuaGVpZ2h0fHwwLGFzc2V0V2lkdGg6ZS5hc3NldFdpZHRofHxudWxsLGFzc2V0SGVpZ2h0OmUuYXNzZXRIZWlnaHR8fG51bGwsZXhwYW5kZWRXaWR0aDplLmV4cGFuZGVkV2lkdGh8fG51bGwsZXhwYW5kZWRIZWlnaHQ6ZS5leHBhbmRlZEhlaWdodHx8bnVsbCxhcGlGcmFtZXdvcms6ZS5hcGlGcmFtZXdvcmt8fG51bGwsYWRTbG90SUQ6ZS5hZFNsb3RJRHx8bnVsbCxweHJhdGlvOmUucHhyYXRpb3x8XCIxXCIscmVuZGVyaW5nTW9kZTplLnJlbmRlcmluZ01vZGV8fFwiZGVmYXVsdFwiLHN0YXRpY1Jlc291cmNlczpbXSxodG1sUmVzb3VyY2VzOltdLGlmcmFtZVJlc291cmNlczpbXSxhZFBhcmFtZXRlcnM6bnVsbCx4bWxFbmNvZGVkOm51bGwsYWx0VGV4dDpudWxsLGNvbXBhbmlvbkNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlOm51bGwsY29tcGFuaW9uQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlczpbXSx0cmFja2luZ0V2ZW50czp7fX19KFUucGFyc2VBdHRyaWJ1dGVzKGUpKTt0Lmh0bWxSZXNvdXJjZXM9VS5jaGlsZHJlbkJ5TmFtZShlLFwiSFRNTFJlc291cmNlXCIpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcj1VLnBhcnNlTm9kZVRleHQodCk7cmV0dXJuIHI/ZS5jb25jYXQocik6ZX0pLFtdKSx0LmlmcmFtZVJlc291cmNlcz1VLmNoaWxkcmVuQnlOYW1lKGUsXCJJRnJhbWVSZXNvdXJjZVwiKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9VS5wYXJzZU5vZGVUZXh0KHQpO3JldHVybiByP2UuY29uY2F0KHIpOmV9KSxbXSksdC5zdGF0aWNSZXNvdXJjZXM9VS5jaGlsZHJlbkJ5TmFtZShlLFwiU3RhdGljUmVzb3VyY2VcIikucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciByPVUucGFyc2VOb2RlVGV4dCh0KTtyZXR1cm4gcj9lLmNvbmNhdCh7dXJsOnIsY3JlYXRpdmVUeXBlOnQuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHxudWxsfSk6ZX0pLFtdKSx0LmFsdFRleHQ9VS5wYXJzZU5vZGVUZXh0KFUuY2hpbGRCeU5hbWUoZSxcIkFsdFRleHRcIikpfHxudWxsO3ZhciByPVUuY2hpbGRCeU5hbWUoZSxcIlRyYWNraW5nRXZlbnRzXCIpO3ImJlUuY2hpbGRyZW5CeU5hbWUocixcIlRyYWNraW5nXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciByPWUuZ2V0QXR0cmlidXRlKFwiZXZlbnRcIiksaT1VLnBhcnNlTm9kZVRleHQoZSk7ciYmaSYmKEFycmF5LmlzQXJyYXkodC50cmFja2luZ0V2ZW50c1tyXSl8fCh0LnRyYWNraW5nRXZlbnRzW3JdPVtdKSx0LnRyYWNraW5nRXZlbnRzW3JdLnB1c2goaSkpfSkpLHQuY29tcGFuaW9uQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcz1VLmNoaWxkcmVuQnlOYW1lKGUsXCJDb21wYW5pb25DbGlja1RyYWNraW5nXCIpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJue2lkOmUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdXJsOlUucGFyc2VOb2RlVGV4dChlKX19KSksdC5jb21wYW5pb25DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT1VLnBhcnNlTm9kZVRleHQoVS5jaGlsZEJ5TmFtZShlLFwiQ29tcGFuaW9uQ2xpY2tUaHJvdWdoXCIpKXx8bnVsbDt2YXIgaT1VLmNoaWxkQnlOYW1lKGUsXCJBZFBhcmFtZXRlcnNcIik7cmV0dXJuIGkmJih0LmFkUGFyYW1ldGVycz1VLnBhcnNlTm9kZVRleHQoaSksdC54bWxFbmNvZGVkPWkuZ2V0QXR0cmlidXRlKFwieG1sRW5jb2RlZFwiKXx8bnVsbCksdH0pKSxyfWZ1bmN0aW9uIEkoZSl7cmV0dXJuXCJsaW5lYXJcIj09PWUudHlwZX1mdW5jdGlvbiB4KGUsdCl7dmFyIHIsaT1mdW5jdGlvbigpe3ZhciBlPWYoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9KSx0PWUuaWQscj1lLmFkSWQsaT1lLnNlcXVlbmNlLG49ZS5hcGlGcmFtZXdvcms7cmV0dXJue2lkOnQsYWRJZDpyLHNlcXVlbmNlOmksYXBpRnJhbWV3b3JrOm4sdHlwZTpcImxpbmVhclwiLGR1cmF0aW9uOjAsc2tpcERlbGF5Om51bGwsbWVkaWFGaWxlczpbXSxtZXp6YW5pbmU6bnVsbCxpbnRlcmFjdGl2ZUNyZWF0aXZlRmlsZTpudWxsLGNsb3NlZENhcHRpb25GaWxlczpbXSx2aWRlb0NsaWNrVGhyb3VnaFVSTFRlbXBsYXRlOm51bGwsdmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzOltdLHZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXM6W10sYWRQYXJhbWV0ZXJzOm51bGwsaWNvbnM6W10sdHJhY2tpbmdFdmVudHM6e319fSh0KTtpLmR1cmF0aW9uPVUucGFyc2VEdXJhdGlvbihVLnBhcnNlTm9kZVRleHQoVS5jaGlsZEJ5TmFtZShlLFwiRHVyYXRpb25cIikpKTt2YXIgbj1lLmdldEF0dHJpYnV0ZShcInNraXBvZmZzZXRcIik7aWYobnVsbD09bilpLnNraXBEZWxheT1udWxsO2Vsc2UgaWYoXCIlXCI9PT1uLmNoYXJBdChuLmxlbmd0aC0xKSYmLTEhPT1pLmR1cmF0aW9uKXt2YXIgYT1wYXJzZUludChuLDEwKTtpLnNraXBEZWxheT1pLmR1cmF0aW9uKihhLzEwMCl9ZWxzZSBpLnNraXBEZWxheT1VLnBhcnNlRHVyYXRpb24obik7dmFyIG89VS5jaGlsZEJ5TmFtZShlLFwiVmlkZW9DbGlja3NcIik7aWYobyl7dmFyIHM9VS5jaGlsZEJ5TmFtZShvLFwiQ2xpY2tUaHJvdWdoXCIpO2kudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT1zP3tpZDpzLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHVybDpVLnBhcnNlTm9kZVRleHQocyl9Om51bGwsVS5jaGlsZHJlbkJ5TmFtZShvLFwiQ2xpY2tUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXtpLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5wdXNoKHtpZDplLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHVybDpVLnBhcnNlTm9kZVRleHQoZSl9KX0pKSxVLmNoaWxkcmVuQnlOYW1lKG8sXCJDdXN0b21DbGlja1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXtpLnZpZGVvQ3VzdG9tQ2xpY2tVUkxUZW1wbGF0ZXMucHVzaCh7aWQ6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx1cmw6VS5wYXJzZU5vZGVUZXh0KGUpfSl9KSl9dmFyIGw9VS5jaGlsZEJ5TmFtZShlLFwiQWRQYXJhbWV0ZXJzXCIpO2wmJihpLmFkUGFyYW1ldGVycz1VLnBhcnNlTm9kZVRleHQobCkpLFUuY2hpbGRyZW5CeU5hbWUoZSxcIlRyYWNraW5nRXZlbnRzXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe1UuY2hpbGRyZW5CeU5hbWUoZSxcIlRyYWNraW5nXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlKFwiZXZlbnRcIiksbj1VLnBhcnNlTm9kZVRleHQoZSk7aWYodCYmbil7aWYoXCJwcm9ncmVzc1wiPT09dCl7aWYoIShyPWUuZ2V0QXR0cmlidXRlKFwib2Zmc2V0XCIpKSlyZXR1cm47dD1cIiVcIj09PXIuY2hhckF0KHIubGVuZ3RoLTEpP1wicHJvZ3Jlc3MtXCIuY29uY2F0KHIpOlwicHJvZ3Jlc3MtXCIuY29uY2F0KE1hdGgucm91bmQoVS5wYXJzZUR1cmF0aW9uKHIpKSl9QXJyYXkuaXNBcnJheShpLnRyYWNraW5nRXZlbnRzW3RdKXx8KGkudHJhY2tpbmdFdmVudHNbdF09W10pLGkudHJhY2tpbmdFdmVudHNbdF0ucHVzaChuKX19KSl9KSksVS5jaGlsZHJlbkJ5TmFtZShlLFwiTWVkaWFGaWxlc1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXtVLmNoaWxkcmVuQnlOYW1lKGUsXCJNZWRpYUZpbGVcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS5tZWRpYUZpbGVzLnB1c2goZnVuY3Rpb24oZSl7dmFyIHQ9e2lkOm51bGwsZmlsZVVSTDpudWxsLGZpbGVTaXplOjAsZGVsaXZlcnlUeXBlOlwicHJvZ3Jlc3NpdmVcIixtaW1lVHlwZTpudWxsLG1lZGlhVHlwZTpudWxsLGNvZGVjOm51bGwsYml0cmF0ZTowLG1pbkJpdHJhdGU6MCxtYXhCaXRyYXRlOjAsd2lkdGg6MCxoZWlnaHQ6MCxhcGlGcmFtZXdvcms6bnVsbCxzY2FsYWJsZTpudWxsLG1haW50YWluQXNwZWN0UmF0aW86bnVsbH07dC5pZD1lLmdldEF0dHJpYnV0ZShcImlkXCIpLHQuZmlsZVVSTD1VLnBhcnNlTm9kZVRleHQoZSksdC5kZWxpdmVyeVR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJkZWxpdmVyeVwiKSx0LmNvZGVjPWUuZ2V0QXR0cmlidXRlKFwiY29kZWNcIiksdC5taW1lVHlwZT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIiksdC5tZWRpYVR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJtZWRpYVR5cGVcIil8fFwiMkRcIix0LmFwaUZyYW1ld29yaz1lLmdldEF0dHJpYnV0ZShcImFwaUZyYW1ld29ya1wiKSx0LmZpbGVTaXplPXBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwiZmlsZVNpemVcIil8fDApLHQuYml0cmF0ZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcImJpdHJhdGVcIil8fDApLHQubWluQml0cmF0ZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcIm1pbkJpdHJhdGVcIil8fDApLHQubWF4Qml0cmF0ZT1wYXJzZUludChlLmdldEF0dHJpYnV0ZShcIm1heEJpdHJhdGVcIil8fDApLHQud2lkdGg9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKXx8MCksdC5oZWlnaHQ9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDApO3ZhciByPWUuZ2V0QXR0cmlidXRlKFwic2NhbGFibGVcIik7ciYmXCJzdHJpbmdcIj09dHlwZW9mIHImJih0LnNjYWxhYmxlPVUucGFyc2VCb29sZWFuKHIpKTt2YXIgaT1lLmdldEF0dHJpYnV0ZShcIm1haW50YWluQXNwZWN0UmF0aW9cIik7aSYmXCJzdHJpbmdcIj09dHlwZW9mIGkmJih0Lm1haW50YWluQXNwZWN0UmF0aW89VS5wYXJzZUJvb2xlYW4oaSkpO3JldHVybiB0fShlKSl9KSk7dmFyIHQ9VS5jaGlsZEJ5TmFtZShlLFwiSW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGVcIik7dCYmKGkuaW50ZXJhY3RpdmVDcmVhdGl2ZUZpbGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJue3R5cGU6ZS50eXBlfHxudWxsLGFwaUZyYW1ld29yazplLmFwaUZyYW1ld29ya3x8bnVsbCx2YXJpYWJsZUR1cmF0aW9uOlUucGFyc2VCb29sZWFuKGUudmFyaWFibGVEdXJhdGlvbiksZmlsZVVSTDpudWxsfX0oVS5wYXJzZUF0dHJpYnV0ZXMoZSkpO3JldHVybiB0LmZpbGVVUkw9VS5wYXJzZU5vZGVUZXh0KGUpLHR9KHQpKTt2YXIgcj1VLmNoaWxkQnlOYW1lKGUsXCJDbG9zZWRDYXB0aW9uRmlsZXNcIik7ciYmVS5jaGlsZHJlbkJ5TmFtZShyLFwiQ2xvc2VkQ2FwdGlvbkZpbGVcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJue3R5cGU6ZS50eXBlfHxudWxsLGxhbmd1YWdlOmUubGFuZ3VhZ2V8fG51bGwsZmlsZVVSTDpudWxsfX0oVS5wYXJzZUF0dHJpYnV0ZXMoZSkpO3QuZmlsZVVSTD1VLnBhcnNlTm9kZVRleHQoZSksaS5jbG9zZWRDYXB0aW9uRmlsZXMucHVzaCh0KX0pKTt2YXIgbixhLG8scz1VLmNoaWxkQnlOYW1lKGUsXCJNZXp6YW5pbmVcIiksbD0obj1zLGE9e30sbz0hMSxbXCJkZWxpdmVyeVwiLFwidHlwZVwiLFwid2lkdGhcIixcImhlaWdodFwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtuJiZuLmdldEF0dHJpYnV0ZShlKT9hW2VdPW4uZ2V0QXR0cmlidXRlKGUpOm89ITB9KSksbz9udWxsOmEpO2lmKGwpe3ZhciB1PXtpZDpudWxsLGZpbGVVUkw6bnVsbCxkZWxpdmVyeTpudWxsLGNvZGVjOm51bGwsdHlwZTpudWxsLHdpZHRoOjAsaGVpZ2h0OjAsZmlsZVNpemU6MCxtZWRpYVR5cGU6XCIyRFwifTt1LmlkPXMuZ2V0QXR0cmlidXRlKFwiaWRcIiksdS5maWxlVVJMPVUucGFyc2VOb2RlVGV4dChzKSx1LmRlbGl2ZXJ5PWwuZGVsaXZlcnksdS5jb2RlYz1zLmdldEF0dHJpYnV0ZShcImNvZGVjXCIpLHUudHlwZT1sLnR5cGUsdS53aWR0aD1wYXJzZUludChsLndpZHRoLDEwKSx1LmhlaWdodD1wYXJzZUludChsLmhlaWdodCwxMCksdS5maWxlU2l6ZT1wYXJzZUludChzLmdldEF0dHJpYnV0ZShcImZpbGVTaXplXCIpLDEwKSx1Lm1lZGlhVHlwZT1zLmdldEF0dHJpYnV0ZShcIm1lZGlhVHlwZVwiKXx8XCIyRFwiLGkubWV6emFuaW5lPXV9fSkpO3ZhciB1PVUuY2hpbGRCeU5hbWUoZSxcIkljb25zXCIpO3JldHVybiB1JiZVLmNoaWxkcmVuQnlOYW1lKHUsXCJJY29uXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kuaWNvbnMucHVzaChmdW5jdGlvbihlKXt2YXIgdD17cHJvZ3JhbTpudWxsLGhlaWdodDowLHdpZHRoOjAseFBvc2l0aW9uOjAseVBvc2l0aW9uOjAsYXBpRnJhbWV3b3JrOm51bGwsb2Zmc2V0Om51bGwsZHVyYXRpb246MCx0eXBlOm51bGwsc3RhdGljUmVzb3VyY2U6bnVsbCxodG1sUmVzb3VyY2U6bnVsbCxpZnJhbWVSZXNvdXJjZTpudWxsLHB4cmF0aW86XCIxXCIsaWNvbkNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlOm51bGwsaWNvbkNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM6W10saWNvblZpZXdUcmFja2luZ1VSTFRlbXBsYXRlOm51bGx9O3QucHJvZ3JhbT1lLmdldEF0dHJpYnV0ZShcInByb2dyYW1cIiksdC5oZWlnaHQ9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDApLHQud2lkdGg9cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKXx8MCksdC54UG9zaXRpb249ZnVuY3Rpb24oZSl7aWYoLTEhPT1bXCJsZWZ0XCIsXCJyaWdodFwiXS5pbmRleE9mKGUpKXJldHVybiBlO3JldHVybiBwYXJzZUludChlfHwwKX0oZS5nZXRBdHRyaWJ1dGUoXCJ4UG9zaXRpb25cIikpLHQueVBvc2l0aW9uPWZ1bmN0aW9uKGUpe2lmKC0xIT09W1widG9wXCIsXCJib3R0b21cIl0uaW5kZXhPZihlKSlyZXR1cm4gZTtyZXR1cm4gcGFyc2VJbnQoZXx8MCl9KGUuZ2V0QXR0cmlidXRlKFwieVBvc2l0aW9uXCIpKSx0LmFwaUZyYW1ld29yaz1lLmdldEF0dHJpYnV0ZShcImFwaUZyYW1ld29ya1wiKSx0LnB4cmF0aW89ZS5nZXRBdHRyaWJ1dGUoXCJweHJhdGlvXCIpfHxcIjFcIix0Lm9mZnNldD1VLnBhcnNlRHVyYXRpb24oZS5nZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIikpLHQuZHVyYXRpb249VS5wYXJzZUR1cmF0aW9uKGUuZ2V0QXR0cmlidXRlKFwiZHVyYXRpb25cIikpLFUuY2hpbGRyZW5CeU5hbWUoZSxcIkhUTUxSZXNvdXJjZVwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJjcmVhdGl2ZVR5cGVcIil8fFwidGV4dC9odG1sXCIsdC5odG1sUmVzb3VyY2U9VS5wYXJzZU5vZGVUZXh0KGUpfSkpLFUuY2hpbGRyZW5CeU5hbWUoZSxcIklGcmFtZVJlc291cmNlXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QudHlwZT1lLmdldEF0dHJpYnV0ZShcImNyZWF0aXZlVHlwZVwiKXx8MCx0LmlmcmFtZVJlc291cmNlPVUucGFyc2VOb2RlVGV4dChlKX0pKSxVLmNoaWxkcmVuQnlOYW1lKGUsXCJTdGF0aWNSZXNvdXJjZVwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJjcmVhdGl2ZVR5cGVcIil8fDAsdC5zdGF0aWNSZXNvdXJjZT1VLnBhcnNlTm9kZVRleHQoZSl9KSk7dmFyIHI9VS5jaGlsZEJ5TmFtZShlLFwiSWNvbkNsaWNrc1wiKTtyJiYodC5pY29uQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9VS5wYXJzZU5vZGVUZXh0KFUuY2hpbGRCeU5hbWUocixcIkljb25DbGlja1Rocm91Z2hcIikpLFUuY2hpbGRyZW5CeU5hbWUocixcIkljb25DbGlja1RyYWNraW5nXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QuaWNvbkNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMucHVzaCh7aWQ6ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx1cmw6VS5wYXJzZU5vZGVUZXh0KGUpfSl9KSkpO3JldHVybiB0Lmljb25WaWV3VHJhY2tpbmdVUkxUZW1wbGF0ZT1VLnBhcnNlTm9kZVRleHQoVS5jaGlsZEJ5TmFtZShlLFwiSWNvblZpZXdUcmFja2luZ1wiKSksdH0oZSkpfSkpLGl9ZnVuY3Rpb24gUyhlLHQpe3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9Zihhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30pLHQ9ZS5pZCxyPWUuYWRJZCxpPWUuc2VxdWVuY2Usbj1lLmFwaUZyYW1ld29yaztyZXR1cm57aWQ6dCxhZElkOnIsc2VxdWVuY2U6aSxhcGlGcmFtZXdvcms6bix0eXBlOlwibm9ubGluZWFyXCIsdmFyaWF0aW9uczpbXSx0cmFja2luZ0V2ZW50czp7fX19KHQpO3JldHVybiBVLmNoaWxkcmVuQnlOYW1lKGUsXCJUcmFja2luZ0V2ZW50c1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxpO1UuY2hpbGRyZW5CeU5hbWUoZSxcIlRyYWNraW5nXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3Q9ZS5nZXRBdHRyaWJ1dGUoXCJldmVudFwiKSxpPVUucGFyc2VOb2RlVGV4dChlKSx0JiZpJiYoQXJyYXkuaXNBcnJheShyLnRyYWNraW5nRXZlbnRzW3RdKXx8KHIudHJhY2tpbmdFdmVudHNbdF09W10pLHIudHJhY2tpbmdFdmVudHNbdF0ucHVzaChpKSl9KSl9KSksVS5jaGlsZHJlbkJ5TmFtZShlLFwiTm9uTGluZWFyXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PXtpZDpudWxsLHdpZHRoOjAsaGVpZ2h0OjAsZXhwYW5kZWRXaWR0aDowLGV4cGFuZGVkSGVpZ2h0OjAsc2NhbGFibGU6ITAsbWFpbnRhaW5Bc3BlY3RSYXRpbzohMCxtaW5TdWdnZXN0ZWREdXJhdGlvbjowLGFwaUZyYW1ld29yazpcInN0YXRpY1wiLGFkVHlwZTpcIm5vbkxpbmVhckFkXCIsdHlwZTpudWxsLHN0YXRpY1Jlc291cmNlOm51bGwsaHRtbFJlc291cmNlOm51bGwsaWZyYW1lUmVzb3VyY2U6bnVsbCxub25saW5lYXJDbGlja1Rocm91Z2hVUkxUZW1wbGF0ZTpudWxsLG5vbmxpbmVhckNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM6W10sYWRQYXJhbWV0ZXJzOm51bGx9O3QuaWQ9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8bnVsbCx0LndpZHRoPWUuZ2V0QXR0cmlidXRlKFwid2lkdGhcIiksdC5oZWlnaHQ9ZS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiksdC5leHBhbmRlZFdpZHRoPWUuZ2V0QXR0cmlidXRlKFwiZXhwYW5kZWRXaWR0aFwiKSx0LmV4cGFuZGVkSGVpZ2h0PWUuZ2V0QXR0cmlidXRlKFwiZXhwYW5kZWRIZWlnaHRcIiksdC5zY2FsYWJsZT1VLnBhcnNlQm9vbGVhbihlLmdldEF0dHJpYnV0ZShcInNjYWxhYmxlXCIpKSx0Lm1haW50YWluQXNwZWN0UmF0aW89VS5wYXJzZUJvb2xlYW4oZS5nZXRBdHRyaWJ1dGUoXCJtYWludGFpbkFzcGVjdFJhdGlvXCIpKSx0Lm1pblN1Z2dlc3RlZER1cmF0aW9uPVUucGFyc2VEdXJhdGlvbihlLmdldEF0dHJpYnV0ZShcIm1pblN1Z2dlc3RlZER1cmF0aW9uXCIpKSx0LmFwaUZyYW1ld29yaz1lLmdldEF0dHJpYnV0ZShcImFwaUZyYW1ld29ya1wiKSxVLmNoaWxkcmVuQnlOYW1lKGUsXCJIVE1MUmVzb3VyY2VcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50eXBlPWUuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHxcInRleHQvaHRtbFwiLHQuaHRtbFJlc291cmNlPVUucGFyc2VOb2RlVGV4dChlKX0pKSxVLmNoaWxkcmVuQnlOYW1lKGUsXCJJRnJhbWVSZXNvdXJjZVwiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnR5cGU9ZS5nZXRBdHRyaWJ1dGUoXCJjcmVhdGl2ZVR5cGVcIil8fDAsdC5pZnJhbWVSZXNvdXJjZT1VLnBhcnNlTm9kZVRleHQoZSl9KSksVS5jaGlsZHJlbkJ5TmFtZShlLFwiU3RhdGljUmVzb3VyY2VcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50eXBlPWUuZ2V0QXR0cmlidXRlKFwiY3JlYXRpdmVUeXBlXCIpfHwwLHQuc3RhdGljUmVzb3VyY2U9VS5wYXJzZU5vZGVUZXh0KGUpfSkpO3ZhciBpPVUuY2hpbGRCeU5hbWUoZSxcIkFkUGFyYW1ldGVyc1wiKTtpJiYodC5hZFBhcmFtZXRlcnM9VS5wYXJzZU5vZGVUZXh0KGkpKSx0Lm5vbmxpbmVhckNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlPVUucGFyc2VOb2RlVGV4dChVLmNoaWxkQnlOYW1lKGUsXCJOb25MaW5lYXJDbGlja1Rocm91Z2hcIikpLFUuY2hpbGRyZW5CeU5hbWUoZSxcIk5vbkxpbmVhckNsaWNrVHJhY2tpbmdcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5ub25saW5lYXJDbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLnB1c2goe2lkOmUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdXJsOlUucGFyc2VOb2RlVGV4dChlKX0pfSkpLHIudmFyaWF0aW9ucy5wdXNoKHQpfSkpLHJ9ZnVuY3Rpb24gTyhlKXt2YXIgdD1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcj1EKGUpO3ImJnQucHVzaChyKX0pKSx0fWZ1bmN0aW9uIEQoZSl7aWYoXCIjY29tbWVudFwiPT09ZS5ub2RlTmFtZSlyZXR1cm4gbnVsbDt2YXIgdCxyPXtuYW1lOm51bGwsdmFsdWU6bnVsbCxhdHRyaWJ1dGVzOnt9LGNoaWxkcmVuOltdfSxpPWUuYXR0cmlidXRlcyxuPWUuY2hpbGROb2RlcztpZihyLm5hbWU9ZS5ub2RlTmFtZSxlLmF0dHJpYnV0ZXMpZm9yKHZhciBhIGluIGkpaWYoaS5oYXNPd25Qcm9wZXJ0eShhKSl7dmFyIG89aVthXTtvLm5vZGVOYW1lJiZvLm5vZGVWYWx1ZSYmKHIuYXR0cmlidXRlc1tvLm5vZGVOYW1lXT1vLm5vZGVWYWx1ZSl9Zm9yKHZhciBzIGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eShzKSl7dmFyIGw9RChuW3NdKTtsJiZyLmNoaWxkcmVuLnB1c2gobCl9aWYoMD09PXIuY2hpbGRyZW4ubGVuZ3RofHwxPT09ci5jaGlsZHJlbi5sZW5ndGgmJltcIiNjZGF0YS1zZWN0aW9uXCIsXCIjdGV4dFwiXS5pbmRleE9mKHIuY2hpbGRyZW5bMF0ubmFtZSk+PTApe3ZhciB1PVUucGFyc2VOb2RlVGV4dChlKTtcIlwiIT09dSYmKHIudmFsdWU9dSksci5jaGlsZHJlbj1bXX1yZXR1cm4gbnVsbD09PSh0PXIpLnZhbHVlJiYwPT09T2JqZWN0LmtleXModC5hdHRyaWJ1dGVzKS5sZW5ndGgmJjA9PT10LmNoaWxkcmVuLmxlbmd0aD9udWxsOnJ9ZnVuY3Rpb24gVihlKXt2YXIgdD1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcixpPXtpZDplLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLGFkSWQ6UChlKSxzZXF1ZW5jZTplLmdldEF0dHJpYnV0ZShcInNlcXVlbmNlXCIpfHxudWxsLGFwaUZyYW1ld29yazplLmdldEF0dHJpYnV0ZShcImFwaUZyYW1ld29ya1wiKXx8bnVsbH0sbj1bXTtVLmNoaWxkcmVuQnlOYW1lKGUsXCJVbml2ZXJzYWxBZElkXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PXtpZFJlZ2lzdHJ5OmUuZ2V0QXR0cmlidXRlKFwiaWRSZWdpc3RyeVwiKXx8XCJ1bmtub3duXCIsdmFsdWU6VS5wYXJzZU5vZGVUZXh0KGUpfTtuLnB1c2godCl9KSk7dmFyIGE9VS5jaGlsZEJ5TmFtZShlLFwiQ3JlYXRpdmVFeHRlbnNpb25zXCIpO2Zvcih2YXIgbyBpbiBhJiYocj1PKFUuY2hpbGRyZW5CeU5hbWUoYSxcIkNyZWF0aXZlRXh0ZW5zaW9uXCIpKSksZS5jaGlsZE5vZGVzKXt2YXIgcz1lLmNoaWxkTm9kZXNbb10sbD12b2lkIDA7c3dpdGNoKHMubm9kZU5hbWUpe2Nhc2VcIkxpbmVhclwiOmw9eChzLGkpO2JyZWFrO2Nhc2VcIk5vbkxpbmVhckFkc1wiOmw9UyhzLGkpO2JyZWFrO2Nhc2VcIkNvbXBhbmlvbkFkc1wiOmw9QyhzLGkpfWwmJihuJiYobC51bml2ZXJzYWxBZElkcz1uKSxyJiYobC5jcmVhdGl2ZUV4dGVuc2lvbnM9ciksdC5wdXNoKGwpKX19KSksdH1mdW5jdGlvbiBQKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcIkFkSURcIil8fGUuZ2V0QXR0cmlidXRlKFwiYWRJRFwiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJhZElkXCIpfHxudWxsfXZhciBCPXtXcmFwcGVyOntzdWJFbGVtZW50czpbXCJWQVNUQWRUYWdVUklcIixcIkltcHJlc3Npb25cIl19LEJsb2NrZWRBZENhdGVnb3JpZXM6e2F0dHJpYnV0ZXM6W1wiYXV0aG9yaXR5XCJdfSxJbkxpbmU6e3N1YkVsZW1lbnRzOltcIkFkU3lzdGVtXCIsXCJBZFRpdGxlXCIsXCJJbXByZXNzaW9uXCIsXCJBZFNlcnZpbmdJZFwiLFwiQ3JlYXRpdmVzXCJdfSxDYXRlZ29yeTp7YXR0cmlidXRlczpbXCJhdXRob3JpdHlcIl19LFByaWNpbmc6e2F0dHJpYnV0ZXM6W1wibW9kZWxcIixcImN1cnJlbmN5XCJdfSxWZXJpZmljYXRpb246e29uZU9maW5MaW5lUmVzb3VyY2VzOltcIkphdmFTY3JpcHRSZXNvdXJjZVwiLFwiRXhlY3V0YWJsZVJlc291cmNlXCJdLGF0dHJpYnV0ZXM6W1widmVuZG9yXCJdfSxVbml2ZXJzYWxBZElkOnthdHRyaWJ1dGVzOltcImlkUmVnaXN0cnlcIl19LEphdmFTY3JpcHRSZXNvdXJjZTp7YXR0cmlidXRlczpbXCJhcGlGcmFtZXdvcmtcIixcImJyb3dzZXJPcHRpb25hbFwiXX0sRXhlY3V0YWJsZVJlc291cmNlOnthdHRyaWJ1dGVzOltcImFwaUZyYW1ld29ya1wiLFwidHlwZVwiXX0sVHJhY2tpbmc6e2F0dHJpYnV0ZXM6W1wiZXZlbnRcIl19LENyZWF0aXZlczp7c3ViRWxlbWVudHM6W1wiQ3JlYXRpdmVcIl19LENyZWF0aXZlOntzdWJFbGVtZW50czpbXCJVbml2ZXJzYWxBZElkXCJdfSxMaW5lYXI6e3N1YkVsZW1lbnRzOltcIk1lZGlhRmlsZXNcIixcIkR1cmF0aW9uXCJdfSxNZWRpYUZpbGVzOntzdWJFbGVtZW50czpbXCJNZWRpYUZpbGVcIl19LE1lZGlhRmlsZTp7YXR0cmlidXRlczpbXCJkZWxpdmVyeVwiLFwidHlwZVwiLFwid2lkdGhcIixcImhlaWdodFwiXX0sTWV6emFuaW5lOnthdHRyaWJ1dGVzOltcImRlbGl2ZXJ5XCIsXCJ0eXBlXCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdfSxOb25MaW5lYXI6e29uZU9maW5MaW5lUmVzb3VyY2VzOltcIlN0YXRpY1Jlc291cmNlXCIsXCJJRnJhbWVSZXNvdXJjZVwiLFwiSFRNTFJlc291cmNlXCJdLGF0dHJpYnV0ZXM6W1wid2lkdGhcIixcImhlaWdodFwiXX0sQ29tcGFuaW9uOntvbmVPZmluTGluZVJlc291cmNlczpbXCJTdGF0aWNSZXNvdXJjZVwiLFwiSUZyYW1lUmVzb3VyY2VcIixcIkhUTUxSZXNvdXJjZVwiXSxhdHRyaWJ1dGVzOltcIndpZHRoXCIsXCJoZWlnaHRcIl19LFN0YXRpY1Jlc291cmNlOnthdHRyaWJ1dGVzOltcImNyZWF0aXZlVHlwZVwiXX0sSWNvbnM6e3N1YkVsZW1lbnRzOltcIkljb25cIl19LEljb246e29uZU9maW5MaW5lUmVzb3VyY2VzOltcIlN0YXRpY1Jlc291cmNlXCIsXCJJRnJhbWVSZXNvdXJjZVwiLFwiSFRNTFJlc291cmNlXCJdfX07ZnVuY3Rpb24gRihlLHQpe2lmKEJbZS5ub2RlTmFtZV0mJkJbZS5ub2RlTmFtZV0uYXR0cmlidXRlcyl7dmFyIHI9QltlLm5vZGVOYW1lXS5hdHRyaWJ1dGVzLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIWUuZ2V0QXR0cmlidXRlKHQpfSkpO3IubGVuZ3RoPjAmJmooe25hbWU6ZS5ub2RlTmFtZSxwYXJlbnROYW1lOmUucGFyZW50Tm9kZS5ub2RlTmFtZSxhdHRyaWJ1dGVzOnJ9LHQpfX1mdW5jdGlvbiBNKGUsdCxyKXt2YXIgaT1CW2Uubm9kZU5hbWVdLG49IXImJlwiV3JhcHBlclwiIT09ZS5ub2RlTmFtZTtpZihpJiYhbil7aWYoaS5zdWJFbGVtZW50cyl7dmFyIGE9aS5zdWJFbGVtZW50cy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiFVLmNoaWxkQnlOYW1lKGUsdCl9KSk7YS5sZW5ndGg+MCYmaih7bmFtZTplLm5vZGVOYW1lLHBhcmVudE5hbWU6ZS5wYXJlbnROb2RlLm5vZGVOYW1lLHN1YkVsZW1lbnRzOmF9LHQpfWlmKHImJmkub25lT2ZpbkxpbmVSZXNvdXJjZXMpaS5vbmVPZmluTGluZVJlc291cmNlcy5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gVS5jaGlsZEJ5TmFtZShlLHQpfSkpfHxqKHtuYW1lOmUubm9kZU5hbWUscGFyZW50TmFtZTplLnBhcmVudE5vZGUubm9kZU5hbWUsb25lT2ZSZXNvdXJjZXM6aS5vbmVPZmluTGluZVJlc291cmNlc30sdCl9fWZ1bmN0aW9uIFcoZSl7cmV0dXJuIGUuY2hpbGRyZW4mJjAhPT1lLmNoaWxkcmVuLmxlbmd0aH1mdW5jdGlvbiBqKGUsdCl7dmFyIHI9ZS5uYW1lLGk9ZS5wYXJlbnROYW1lLG49ZS5hdHRyaWJ1dGVzLGE9ZS5zdWJFbGVtZW50cyxvPWUub25lT2ZSZXNvdXJjZXMscz1cIkVsZW1lbnQgJ1wiLmNvbmNhdChyLFwiJ1wiKTt0KFwiVkFTVC13YXJuaW5nXCIse21lc3NhZ2U6cys9bj9cIiBtaXNzaW5nIHJlcXVpcmVkIGF0dHJpYnV0ZShzKSAnXCIuY29uY2F0KG4uam9pbihcIiwgXCIpLFwiJyBcIik6YT9cIiBtaXNzaW5nIHJlcXVpcmVkIHN1YiBlbGVtZW50KHMpICdcIi5jb25jYXQoYS5qb2luKFwiLCBcIiksXCInIFwiKTpvP1wiIG11c3QgcHJvdmlkZSBvbmUgb2YgdGhlIGZvbGxvd2luZyAnXCIuY29uY2F0KG8uam9pbihcIiwgXCIpLFwiJyBcIik6XCIgaXMgZW1wdHlcIixwYXJlbnRFbGVtZW50Omksc3BlY1ZlcnNpb246NC4xfSl9dmFyIHE9e3ZlcmlmeVJlcXVpcmVkVmFsdWVzOmZ1bmN0aW9uIGUodCxyLGkpe2lmKHQmJnQubm9kZU5hbWUpaWYoXCJJbkxpbmVcIj09PXQubm9kZU5hbWUmJihpPSEwKSxGKHQsciksVyh0KSl7TSh0LHIsaSk7Zm9yKHZhciBuPTA7bjx0LmNoaWxkcmVuLmxlbmd0aDtuKyspZSh0LmNoaWxkcmVuW25dLHIsaSl9ZWxzZSAwPT09VS5wYXJzZU5vZGVUZXh0KHQpLmxlbmd0aCYmaih7bmFtZTp0Lm5vZGVOYW1lLHBhcmVudE5hbWU6dC5wYXJlbnROb2RlLm5vZGVOYW1lfSxyKX0saGFzU3ViRWxlbWVudHM6VyxlbWl0TWlzc2luZ1ZhbHVlV2FybmluZzpqLHZlcmlmeVJlcXVpcmVkQXR0cmlidXRlczpGLHZlcmlmeVJlcXVpcmVkU3ViRWxlbWVudHM6TX07ZnVuY3Rpb24gSChlLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fSxpPXIuYWxsb3dNdWx0aXBsZUFkcyxuPXIuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzLGE9ZS5jaGlsZE5vZGVzO2Zvcih2YXIgbyBpbiBhKXt2YXIgcz1hW29dO2lmKC0xIT09W1wiV3JhcHBlclwiLFwiSW5MaW5lXCJdLmluZGV4T2Yocy5ub2RlTmFtZSkmJihcIldyYXBwZXJcIiE9PXMubm9kZU5hbWV8fCExIT09bikpe2lmKFUuY29weU5vZGVBdHRyaWJ1dGUoXCJpZFwiLGUscyksVS5jb3B5Tm9kZUF0dHJpYnV0ZShcInNlcXVlbmNlXCIsZSxzKSxVLmNvcHlOb2RlQXR0cmlidXRlKFwiYWRUeXBlXCIsZSxzKSxcIldyYXBwZXJcIj09PXMubm9kZU5hbWUpcmV0dXJue2FkOnoocyx0KSx0eXBlOlwiV1JBUFBFUlwifTtpZihcIkluTGluZVwiPT09cy5ub2RlTmFtZSlyZXR1cm57YWQ6XyhzLHQse2FsbG93TXVsdGlwbGVBZHM6aX0pLHR5cGU6XCJJTkxJTkVcIn19fX1mdW5jdGlvbiBfKGUsdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9LGk9ci5hbGxvd011bHRpcGxlQWRzO3JldHVybiExPT09aSYmZS5nZXRBdHRyaWJ1dGUoXCJzZXF1ZW5jZVwiKT9udWxsOkcoZSx0KX1mdW5jdGlvbiBHKGUsdCl7dmFyIHI9W107dCYmcS52ZXJpZnlSZXF1aXJlZFZhbHVlcyhlLHQpO3ZhciBpPWUuY2hpbGROb2RlcyxuPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybntpZDplLmlkfHxudWxsLHNlcXVlbmNlOmUuc2VxdWVuY2V8fG51bGwsYWRUeXBlOmUuYWRUeXBlfHxudWxsLGFkU2VydmluZ0lkOm51bGwsY2F0ZWdvcmllczpbXSxleHBpcmVzOm51bGwsdmlld2FibGVJbXByZXNzaW9uOltdLHN5c3RlbTpudWxsLHRpdGxlOm51bGwsZGVzY3JpcHRpb246bnVsbCxhZHZlcnRpc2VyOm51bGwscHJpY2luZzpudWxsLHN1cnZleTpudWxsLGVycm9yVVJMVGVtcGxhdGVzOltdLGltcHJlc3Npb25VUkxUZW1wbGF0ZXM6W10sY3JlYXRpdmVzOltdLGV4dGVuc2lvbnM6W10sYWRWZXJpZmljYXRpb25zOltdLGJsb2NrZWRBZENhdGVnb3JpZXM6W10sZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzOiEwLGFsbG93TXVsdGlwbGVBZHM6ITEsZmFsbGJhY2tPbk5vQWQ6bnVsbH19KFUucGFyc2VBdHRyaWJ1dGVzKGUpKTtmb3IodmFyIGEgaW4gaSl7dmFyIG89aVthXTtzd2l0Y2goby5ub2RlTmFtZSl7Y2FzZVwiRXJyb3JcIjpuLmVycm9yVVJMVGVtcGxhdGVzLnB1c2goVS5wYXJzZU5vZGVUZXh0KG8pKTticmVhaztjYXNlXCJJbXByZXNzaW9uXCI6bi5pbXByZXNzaW9uVVJMVGVtcGxhdGVzLnB1c2goe2lkOm8uZ2V0QXR0cmlidXRlKFwiaWRcIil8fG51bGwsdXJsOlUucGFyc2VOb2RlVGV4dChvKX0pO2JyZWFrO2Nhc2VcIkNyZWF0aXZlc1wiOm4uY3JlYXRpdmVzPVYoVS5jaGlsZHJlbkJ5TmFtZShvLFwiQ3JlYXRpdmVcIikpO2JyZWFrO2Nhc2VcIkV4dGVuc2lvbnNcIjp2YXIgcz1VLmNoaWxkcmVuQnlOYW1lKG8sXCJFeHRlbnNpb25cIik7bi5leHRlbnNpb25zPU8ocyksbi5hZFZlcmlmaWNhdGlvbnMubGVuZ3RofHwocj1YKHMpKTticmVhaztjYXNlXCJBZFZlcmlmaWNhdGlvbnNcIjpuLmFkVmVyaWZpY2F0aW9ucz1ZKFUuY2hpbGRyZW5CeU5hbWUobyxcIlZlcmlmaWNhdGlvblwiKSk7YnJlYWs7Y2FzZVwiQWRTeXN0ZW1cIjpuLnN5c3RlbT17dmFsdWU6VS5wYXJzZU5vZGVUZXh0KG8pLHZlcnNpb246by5nZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIpfHxudWxsfTticmVhaztjYXNlXCJBZFRpdGxlXCI6bi50aXRsZT1VLnBhcnNlTm9kZVRleHQobyk7YnJlYWs7Y2FzZVwiQWRTZXJ2aW5nSWRcIjpuLmFkU2VydmluZ0lkPVUucGFyc2VOb2RlVGV4dChvKTticmVhaztjYXNlXCJDYXRlZ29yeVwiOm4uY2F0ZWdvcmllcy5wdXNoKHthdXRob3JpdHk6by5nZXRBdHRyaWJ1dGUoXCJhdXRob3JpdHlcIil8fG51bGwsdmFsdWU6VS5wYXJzZU5vZGVUZXh0KG8pfSk7YnJlYWs7Y2FzZVwiRXhwaXJlc1wiOm4uZXhwaXJlcz1wYXJzZUludChVLnBhcnNlTm9kZVRleHQobyksMTApO2JyZWFrO2Nhc2VcIlZpZXdhYmxlSW1wcmVzc2lvblwiOm4udmlld2FibGVJbXByZXNzaW9uLnB1c2goSyhvKSk7YnJlYWs7Y2FzZVwiRGVzY3JpcHRpb25cIjpuLmRlc2NyaXB0aW9uPVUucGFyc2VOb2RlVGV4dChvKTticmVhaztjYXNlXCJBZHZlcnRpc2VyXCI6bi5hZHZlcnRpc2VyPXtpZDpvLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsLHZhbHVlOlUucGFyc2VOb2RlVGV4dChvKX07YnJlYWs7Y2FzZVwiUHJpY2luZ1wiOm4ucHJpY2luZz17dmFsdWU6VS5wYXJzZU5vZGVUZXh0KG8pLG1vZGVsOm8uZ2V0QXR0cmlidXRlKFwibW9kZWxcIil8fG51bGwsY3VycmVuY3k6by5nZXRBdHRyaWJ1dGUoXCJjdXJyZW5jeVwiKXx8bnVsbH07YnJlYWs7Y2FzZVwiU3VydmV5XCI6bi5zdXJ2ZXk9VS5wYXJzZU5vZGVUZXh0KG8pO2JyZWFrO2Nhc2VcIkJsb2NrZWRBZENhdGVnb3JpZXNcIjpuLmJsb2NrZWRBZENhdGVnb3JpZXMucHVzaCh7YXV0aG9yaXR5Om8uZ2V0QXR0cmlidXRlKFwiYXV0aG9yaXR5XCIpfHxudWxsLHZhbHVlOlUucGFyc2VOb2RlVGV4dChvKX0pfX1yZXR1cm4gci5sZW5ndGgmJihuLmFkVmVyaWZpY2F0aW9ucz1uLmFkVmVyaWZpY2F0aW9ucy5jb25jYXQocikpLG59ZnVuY3Rpb24geihlLHQpe3ZhciByPUcoZSx0KSxpPWUuZ2V0QXR0cmlidXRlKFwiZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzXCIpLG49ZS5nZXRBdHRyaWJ1dGUoXCJhbGxvd011bHRpcGxlQWRzXCIpLGE9ZS5nZXRBdHRyaWJ1dGUoXCJmYWxsYmFja09uTm9BZFwiKTtyLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycz0haXx8VS5wYXJzZUJvb2xlYW4oaSksci5hbGxvd011bHRpcGxlQWRzPSEhbiYmVS5wYXJzZUJvb2xlYW4obiksci5mYWxsYmFja09uTm9BZD1hP1UucGFyc2VCb29sZWFuKGEpOm51bGw7dmFyIG89VS5jaGlsZEJ5TmFtZShlLFwiVkFTVEFkVGFnVVJJXCIpO2lmKG8/ci5uZXh0V3JhcHBlclVSTD1VLnBhcnNlTm9kZVRleHQobyk6KG89VS5jaGlsZEJ5TmFtZShlLFwiVkFTVEFkVGFnVVJMXCIpKSYmKHIubmV4dFdyYXBwZXJVUkw9VS5wYXJzZU5vZGVUZXh0KFUuY2hpbGRCeU5hbWUobyxcIlVSTFwiKSkpLHIuY3JlYXRpdmVzLmZvckVhY2goKGZ1bmN0aW9uKGUpe2lmKC0xIT09W1wibGluZWFyXCIsXCJub25saW5lYXJcIl0uaW5kZXhPZihlLnR5cGUpKXtpZihlLnRyYWNraW5nRXZlbnRzKXtyLnRyYWNraW5nRXZlbnRzfHwoci50cmFja2luZ0V2ZW50cz17fSksci50cmFja2luZ0V2ZW50c1tlLnR5cGVdfHwoci50cmFja2luZ0V2ZW50c1tlLnR5cGVdPXt9KTt2YXIgdD1mdW5jdGlvbih0KXt2YXIgaT1lLnRyYWNraW5nRXZlbnRzW3RdO0FycmF5LmlzQXJyYXkoci50cmFja2luZ0V2ZW50c1tlLnR5cGVdW3RdKXx8KHIudHJhY2tpbmdFdmVudHNbZS50eXBlXVt0XT1bXSksaS5mb3JFYWNoKChmdW5jdGlvbihpKXtyLnRyYWNraW5nRXZlbnRzW2UudHlwZV1bdF0ucHVzaChpKX0pKX07Zm9yKHZhciBpIGluIGUudHJhY2tpbmdFdmVudHMpdChpKX1lLnZpZGVvQ2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcyYmKEFycmF5LmlzQXJyYXkoci52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMpfHwoci52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM9W10pLGUudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3IudmlkZW9DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzLnB1c2goZSl9KSkpLGUudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZSYmKHIudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZT1lLnZpZGVvQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUpLGUudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcyYmKEFycmF5LmlzQXJyYXkoci52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzKXx8KHIudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcz1bXSksZS52aWRlb0N1c3RvbUNsaWNrVVJMVGVtcGxhdGVzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3IudmlkZW9DdXN0b21DbGlja1VSTFRlbXBsYXRlcy5wdXNoKGUpfSkpKX19KSksci5uZXh0V3JhcHBlclVSTClyZXR1cm4gcn1mdW5jdGlvbiBZKGUpe3ZhciB0PVtdO3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciByPXtyZXNvdXJjZTpudWxsLHZlbmRvcjpudWxsLGJyb3dzZXJPcHRpb25hbDohMSxhcGlGcmFtZXdvcms6bnVsbCx0eXBlOm51bGwscGFyYW1ldGVyczpudWxsLHRyYWNraW5nRXZlbnRzOnt9fSxpPWUuY2hpbGROb2Rlcztmb3IodmFyIG4gaW4gVS5hc3NpZ25BdHRyaWJ1dGVzKGUuYXR0cmlidXRlcyxyKSxpKXt2YXIgYT1pW25dO3N3aXRjaChhLm5vZGVOYW1lKXtjYXNlXCJKYXZhU2NyaXB0UmVzb3VyY2VcIjpjYXNlXCJFeGVjdXRhYmxlUmVzb3VyY2VcIjpyLnJlc291cmNlPVUucGFyc2VOb2RlVGV4dChhKSxVLmFzc2lnbkF0dHJpYnV0ZXMoYS5hdHRyaWJ1dGVzLHIpO2JyZWFrO2Nhc2VcIlZlcmlmaWNhdGlvblBhcmFtZXRlcnNcIjpyLnBhcmFtZXRlcnM9VS5wYXJzZU5vZGVUZXh0KGEpfX12YXIgbz1VLmNoaWxkQnlOYW1lKGUsXCJUcmFja2luZ0V2ZW50c1wiKTtvJiZVLmNoaWxkcmVuQnlOYW1lKG8sXCJUcmFja2luZ1wiKS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImV2ZW50XCIpLGk9VS5wYXJzZU5vZGVUZXh0KGUpO3QmJmkmJihBcnJheS5pc0FycmF5KHIudHJhY2tpbmdFdmVudHNbdF0pfHwoci50cmFja2luZ0V2ZW50c1t0XT1bXSksci50cmFja2luZ0V2ZW50c1t0XS5wdXNoKGkpKX0pKSx0LnB1c2gocil9KSksdH1mdW5jdGlvbiBYKGUpe3ZhciB0PW51bGwscj1bXTtyZXR1cm4gZS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdD1VLmNoaWxkQnlOYW1lKGUsXCJBZFZlcmlmaWNhdGlvbnNcIil9KSksdCYmKHI9WShVLmNoaWxkcmVuQnlOYW1lKHQsXCJWZXJpZmljYXRpb25cIikpKSxyfWZ1bmN0aW9uIEsoZSl7dmFyIHQ9e307dC5pZD1lLmdldEF0dHJpYnV0ZShcImlkXCIpfHxudWxsO3ZhciByPWUuY2hpbGROb2Rlcztmb3IodmFyIGkgaW4gcil7dmFyIG49cltpXSxhPW4ubm9kZU5hbWUsbz1VLnBhcnNlTm9kZVRleHQobik7aWYoKFwiVmlld2FibGVcIj09PWF8fFwiTm90Vmlld2FibGVcIj09PWF8fFwiVmlld1VuZGV0ZXJtaW5lZFwiPT09YSkmJm8pe3ZhciBzPWEudG9Mb3dlckNhc2UoKTtBcnJheS5pc0FycmF5KHRbc10pfHwodFtzXT1bXSksdFtzXS5wdXNoKG8pfX1yZXR1cm4gdH12YXIgUT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSksdGhpcy5faGFuZGxlcnM9W119cmV0dXJuIG8oZSxbe2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgaGFuZGxlciBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgXCIuY29uY2F0KGkodCkpKTtpZighZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGV2ZW50IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBTdHJpbmcuIFJlY2VpdmVkIHR5cGUgXCIuY29uY2F0KGkoZSkpKTtyZXR1cm4gdGhpcy5faGFuZGxlcnMucHVzaCh7ZXZlbnQ6ZSxoYW5kbGVyOnR9KSx0aGlzfX0se2tleTpcIm9uY2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9uKGUsZnVuY3Rpb24oZSx0LHIpe3ZhciBpPXtmaXJlZDohMSx3cmFwRm46dm9pZCAwfTtmdW5jdGlvbiBuKCl7aS5maXJlZHx8KGUub2ZmKHQsaS53cmFwRm4pLGkuZmlyZWQ9ITAsci5iaW5kKGUpLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX1yZXR1cm4gaS53cmFwRm49bixufSh0aGlzLGUsdCkpfX0se2tleTpcIm9mZlwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuX2hhbmRsZXJzPXRoaXMuX2hhbmRsZXJzLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIHIuZXZlbnQhPT1lfHxyLmhhbmRsZXIhPT10fSkpLHRoaXN9fSx7a2V5OlwiZW1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspcltpLTFdPWFyZ3VtZW50c1tpXTt2YXIgbj0hMTtyZXR1cm4gdGhpcy5faGFuZGxlcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7XCIqXCI9PT10LmV2ZW50JiYobj0hMCx0LmhhbmRsZXIuYXBwbHkodCxbZV0uY29uY2F0KHIpKSksdC5ldmVudD09PWUmJihuPSEwLHQuaGFuZGxlci5hcHBseSh0LHIpKX0pKSxufX0se2tleTpcInJlbW92ZUFsbExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlPyh0aGlzLl9oYW5kbGVycz10aGlzLl9oYW5kbGVycy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmV2ZW50IT09ZX0pKSx0aGlzKToodGhpcy5faGFuZGxlcnM9W10sdGhpcyl9fSx7a2V5OlwibGlzdGVuZXJDb3VudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9oYW5kbGVycy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmV2ZW50PT09ZX0pKS5sZW5ndGh9fSx7a2V5OlwibGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlZHVjZSgoZnVuY3Rpb24odCxyKXtyZXR1cm4gci5ldmVudD09PWUmJnQucHVzaChyLmhhbmRsZXIpLHR9KSxbXSl9fSx7a2V5OlwiZXZlbnROYW1lc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2hhbmRsZXJzLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZXZlbnR9KSl9fV0pLGV9KCk7dmFyIEo9e2dldDpmdW5jdGlvbihlLHQscil7cihuZXcgRXJyb3IoXCJQbGVhc2UgYnVuZGxlIHRoZSBsaWJyYXJ5IGZvciBub2RlIHRvIHVzZSB0aGUgbm9kZSB1cmxIYW5kbGVyXCIpKX19LCQ9MTJlNDtmdW5jdGlvbiBaKCl7dHJ5e3ZhciBlPW5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7cmV0dXJuXCJ3aXRoQ3JlZGVudGlhbHNcImluIGU/ZTpudWxsfWNhdGNoKGUpe3JldHVybiBudWxsfX1mdW5jdGlvbiBlZShlLHQscil7dmFyIGk9cj80MDg6ZS5zdGF0dXMsbj1yP1wiWEhSVVJMSGFuZGxlcjogUmVxdWVzdCB0aW1lZCBvdXQgYWZ0ZXIgXCIuY29uY2F0KGUudGltZW91dCxcIiBtcyAoXCIpLmNvbmNhdChpLFwiKVwiKTpcIlhIUlVSTEhhbmRsZXI6IFwiLmNvbmNhdChlLnN0YXR1c1RleHQsXCIgKFwiKS5jb25jYXQoaSxcIilcIik7dChuZXcgRXJyb3IobiksbnVsbCx7c3RhdHVzQ29kZTppfSl9dmFyIHRlPXtnZXQ6ZnVuY3Rpb24oZSx0LHIpe2lmKFwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2wmJjA9PT1lLmluZGV4T2YoXCJodHRwOi8vXCIpKXJldHVybiByKG5ldyBFcnJvcihcIlhIUlVSTEhhbmRsZXI6IENhbm5vdCBnbyBmcm9tIEhUVFBTIHRvIEhUVFAuXCIpKTt0cnl7dmFyIGk9WigpO2kub3BlbihcIkdFVFwiLGUpLGkudGltZW91dD10LnRpbWVvdXR8fCQsaS53aXRoQ3JlZGVudGlhbHM9dC53aXRoQ3JlZGVudGlhbHN8fCExLGkub3ZlcnJpZGVNaW1lVHlwZSYmaS5vdmVycmlkZU1pbWVUeXBlKFwidGV4dC94bWxcIiksaS5vbmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXsyMDA9PT1lLnN0YXR1cz90KG51bGwsZS5yZXNwb25zZVhNTCx7Ynl0ZUxlbmd0aDplLnJlc3BvbnNlLmxlbmd0aCxzdGF0dXNDb2RlOmUuc3RhdHVzfSk6ZWUoZSx0LCExKX0oaSxyKX0saS5vbmVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIGVlKGksciwhMSl9LGkub25hYm9ydD1mdW5jdGlvbigpe3JldHVybiBlZShpLHIsITEpfSxpLm9udGltZW91dD1mdW5jdGlvbigpe3JldHVybiBlZShpLHIsITApfSxpLnNlbmQoKX1jYXRjaChlKXtyKG5ldyBFcnJvcihcIlhIUlVSTEhhbmRsZXI6IFVuZXhwZWN0ZWQgZXJyb3JcIikpfX0sc3VwcG9ydGVkOmZ1bmN0aW9uKCl7cmV0dXJuISFaKCl9fTt2YXIgcmU9e2dldDpmdW5jdGlvbihlLHQscil7cmV0dXJuIHJ8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYocj10KSx0PXt9KSxcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHxudWxsPT09d2luZG93P0ouZ2V0KGUsdCxyKTp0ZS5zdXBwb3J0ZWQoKT90ZS5nZXQoZSx0LHIpOnIobmV3IEVycm9yKFwiQ3VycmVudCBjb250ZXh0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgYW55IG9mIHRoZSBkZWZhdWx0IFVSTEhhbmRsZXJzLiBQbGVhc2UgcHJvdmlkZSBhIGN1c3RvbSBVUkxIYW5kbGVyXCIpKX19O3ZhciBpZT0wLG5lPTAsYWU9ZnVuY3Rpb24oZSx0KXshZXx8IXR8fGU8PTB8fHQ8PTB8fChuZT0obmUqaWUrOCplL3QpLysraWUpfSxvZT17RVJST1JDT0RFOjkwMCxleHRlbnNpb25zOltdfSxzZT1mdW5jdGlvbihlKXtsKHIsZSk7dmFyIHQ9cChyKTtmdW5jdGlvbiByKCl7dmFyIGU7cmV0dXJuIG4odGhpcyxyKSwoZT10LmNhbGwodGhpcykpLnJlbWFpbmluZ0Fkcz1bXSxlLnBhcmVudFVSTHM9W10sZS5lcnJvclVSTFRlbXBsYXRlcz1bXSxlLnJvb3RFcnJvclVSTFRlbXBsYXRlcz1bXSxlLm1heFdyYXBwZXJEZXB0aD1udWxsLGUuVVJMVGVtcGxhdGVGaWx0ZXJzPVtdLGUuZmV0Y2hpbmdPcHRpb25zPXt9LGUucGFyc2luZ09wdGlvbnM9e30sZX1yZXR1cm4gbyhyLFt7a2V5OlwiYWRkVVJMVGVtcGxhdGVGaWx0ZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZ0aGlzLlVSTFRlbXBsYXRlRmlsdGVycy5wdXNoKGUpfX0se2tleTpcInJlbW92ZVVSTFRlbXBsYXRlRmlsdGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLlVSTFRlbXBsYXRlRmlsdGVycy5wb3AoKX19LHtrZXk6XCJjb3VudFVSTFRlbXBsYXRlRmlsdGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuVVJMVGVtcGxhdGVGaWx0ZXJzLmxlbmd0aH19LHtrZXk6XCJjbGVhclVSTFRlbXBsYXRlRmlsdGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5VUkxUZW1wbGF0ZUZpbHRlcnM9W119fSx7a2V5OlwidHJhY2tWYXN0RXJyb3JcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGk9bmV3IEFycmF5KHI+Mj9yLTI6MCksbj0yO248cjtuKyspaVtuLTJdPWFyZ3VtZW50c1tuXTt0aGlzLmVtaXQoXCJWQVNULWVycm9yXCIsT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsW3t9LG9lLHRdLmNvbmNhdChpKSkpLEwudHJhY2soZSx0KX19LHtrZXk6XCJnZXRFcnJvclVSTFRlbXBsYXRlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucm9vdEVycm9yVVJMVGVtcGxhdGVzLmNvbmNhdCh0aGlzLmVycm9yVVJMVGVtcGxhdGVzKX19LHtrZXk6XCJnZXRFc3RpbWF0ZWRCaXRyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gbmV9fSx7a2V5OlwiZmV0Y2hWQVNUXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGEsbyl7dC5VUkxUZW1wbGF0ZUZpbHRlcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT10KGUpfSkpLHQucGFyZW50VVJMcy5wdXNoKGUpO3ZhciBzPURhdGUubm93KCk7dC5lbWl0KFwiVkFTVC1yZXNvbHZpbmdcIix7dXJsOmUscHJldmlvdXNVcmw6aSx3cmFwcGVyRGVwdGg6cixtYXhXcmFwcGVyRGVwdGg6dC5tYXhXcmFwcGVyRGVwdGgsdGltZW91dDp0LmZldGNoaW5nT3B0aW9ucy50aW1lb3V0LHdyYXBwZXJBZDpufSksdC51cmxIYW5kbGVyLmdldChlLHQuZmV0Y2hpbmdPcHRpb25zLChmdW5jdGlvbihuLGwpe3ZhciB1PWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fSxjPU1hdGgucm91bmQoRGF0ZS5ub3coKS1zKSxkPU9iamVjdC5hc3NpZ24oe3VybDplLHByZXZpb3VzVXJsOmksd3JhcHBlckRlcHRoOnIsZXJyb3I6bixkdXJhdGlvbjpjfSx1KTt0LmVtaXQoXCJWQVNULXJlc29sdmVkXCIsZCksYWUodS5ieXRlTGVuZ3RoLGMpLG4/byhuKTphKGwpfSkpfSkpfX0se2tleTpcImluaXRQYXJzaW5nU3RhdHVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy5lcnJvclVSTFRlbXBsYXRlcz1bXSx0aGlzLmZldGNoaW5nT3B0aW9ucz17dGltZW91dDplLnRpbWVvdXR8fCQsd2l0aENyZWRlbnRpYWxzOmUud2l0aENyZWRlbnRpYWxzfSx0aGlzLm1heFdyYXBwZXJEZXB0aD1lLndyYXBwZXJMaW1pdHx8MTAsdGhpcy5wYXJlbnRVUkxzPVtdLHRoaXMucGFyc2luZ09wdGlvbnM9e2FsbG93TXVsdGlwbGVBZHM6ZS5hbGxvd011bHRpcGxlQWRzfSx0aGlzLnJlbWFpbmluZ0Fkcz1bXSx0aGlzLnJvb3RFcnJvclVSTFRlbXBsYXRlcz1bXSx0aGlzLnJvb3RVUkw9XCJcIix0aGlzLnVybEhhbmRsZXI9ZS51cmxIYW5kbGVyfHxlLnVybGhhbmRsZXJ8fHJlLHRoaXMudmFzdFZlcnNpb249bnVsbCxhZShlLmJ5dGVMZW5ndGgsZS5yZXF1ZXN0RHVyYXRpb24pfX0se2tleTpcImdldFJlbWFpbmluZ0Fkc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoMD09PXRoaXMucmVtYWluaW5nQWRzLmxlbmd0aClyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gbW9yZSBhZHMgYXJlIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIFZBU1RcIikpO3ZhciByPWU/TC5mbGF0dGVuKHRoaXMucmVtYWluaW5nQWRzKTp0aGlzLnJlbWFpbmluZ0Fkcy5zaGlmdCgpO3JldHVybiB0aGlzLmVycm9yVVJMVGVtcGxhdGVzPVtdLHRoaXMucGFyZW50VVJMcz1bXSx0aGlzLnJlc29sdmVBZHMocix7d3JhcHBlckRlcHRoOjAsdXJsOnRoaXMucm9vdFVSTH0pLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiB0LmJ1aWxkVkFTVFJlc3BvbnNlKGUpfSkpfX0se2tleTpcImdldEFuZFBhcnNlVkFTVFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuIHRoaXMuaW5pdFBhcnNpbmdTdGF0dXMociksdGhpcy5VUkxUZW1wbGF0ZUZpbHRlcnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT10KGUpfSkpLHRoaXMucm9vdFVSTD1lLHRoaXMuZmV0Y2hWQVNUKGUpLnRoZW4oKGZ1bmN0aW9uKGkpe3JldHVybiByLnByZXZpb3VzVXJsPWUsci5pc1Jvb3RWQVNUPSEwLHIudXJsPWUsdC5wYXJzZShpLHIpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiB0LmJ1aWxkVkFTVFJlc3BvbnNlKGUpfSkpfSkpfX0se2tleTpcInBhcnNlVkFTVFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuIHRoaXMuaW5pdFBhcnNpbmdTdGF0dXMociksci5pc1Jvb3RWQVNUPSEwLHRoaXMucGFyc2UoZSxyKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gdC5idWlsZFZBU1RSZXNwb25zZShlKX0pKX19LHtrZXk6XCJidWlsZFZBU1RSZXNwb25zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LHI9e2FkczoodD17YWRzOmUsZXJyb3JVUkxUZW1wbGF0ZXM6dGhpcy5nZXRFcnJvclVSTFRlbXBsYXRlcygpLHZlcnNpb246dGhpcy52YXN0VmVyc2lvbn0pLmFkc3x8W10sZXJyb3JVUkxUZW1wbGF0ZXM6dC5lcnJvclVSTFRlbXBsYXRlc3x8W10sdmVyc2lvbjp0LnZlcnNpb258fG51bGx9O3JldHVybiB0aGlzLmNvbXBsZXRlV3JhcHBlclJlc29sdmluZyhyKSxyfX0se2tleTpcInBhcnNlVmFzdFhtbFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5pc1Jvb3RWQVNULGk9dm9pZCAwIT09ciYmcixuPXQudXJsLGE9dm9pZCAwPT09bj9udWxsOm4sbz10LndyYXBwZXJEZXB0aCxzPXZvaWQgMD09PW8/MDpvLGw9dC5hbGxvd011bHRpcGxlQWRzLHU9dC5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM7aWYoIWV8fCFlLmRvY3VtZW50RWxlbWVudHx8XCJWQVNUXCIhPT1lLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSl0aHJvdyB0aGlzLmVtaXQoXCJWQVNULWFkLXBhcnNlZFwiLHt0eXBlOlwiRVJST1JcIix1cmw6YSx3cmFwcGVyRGVwdGg6c30pLG5ldyBFcnJvcihcIkludmFsaWQgVkFTVCBYTUxEb2N1bWVudFwiKTt2YXIgYz1bXSxkPWUuZG9jdW1lbnRFbGVtZW50LmNoaWxkTm9kZXMscD1lLmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIpO2Zvcih2YXIgaCBpbiBpJiZwJiYodGhpcy52YXN0VmVyc2lvbj1wKSxkKXt2YXIgdj1kW2hdO2lmKFwiRXJyb3JcIj09PXYubm9kZU5hbWUpe3ZhciBmPVUucGFyc2VOb2RlVGV4dCh2KTtpP3RoaXMucm9vdEVycm9yVVJMVGVtcGxhdGVzLnB1c2goZik6dGhpcy5lcnJvclVSTFRlbXBsYXRlcy5wdXNoKGYpfWVsc2UgaWYoXCJBZFwiPT09di5ub2RlTmFtZSl7aWYodGhpcy52YXN0VmVyc2lvbiYmcGFyc2VGbG9hdCh0aGlzLnZhc3RWZXJzaW9uKTwzKWw9ITA7ZWxzZSBpZighMT09PWwmJmMubGVuZ3RoPjEpYnJlYWs7dmFyIG09SCh2LHRoaXMuZW1pdC5iaW5kKHRoaXMpLHthbGxvd011bHRpcGxlQWRzOmwsZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzOnV9KTttLmFkPyhjLnB1c2gobS5hZCksdGhpcy5lbWl0KFwiVkFTVC1hZC1wYXJzZWRcIix7dHlwZTptLnR5cGUsdXJsOmEsd3JhcHBlckRlcHRoOnMsYWRJbmRleDpjLmxlbmd0aC0xLHZhc3RWZXJzaW9uOnB9KSk6dGhpcy50cmFja1Zhc3RFcnJvcih0aGlzLmdldEVycm9yVVJMVGVtcGxhdGVzKCkse0VSUk9SQ09ERToxMDF9KX19cmV0dXJuIGN9fSx7a2V5OlwicGFyc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj10LnVybCxpPXZvaWQgMD09PXI/bnVsbDpyLG49dC5yZXNvbHZlQWxsLGE9dm9pZCAwPT09bnx8bixvPXQud3JhcHBlclNlcXVlbmNlLHM9dm9pZCAwPT09bz9udWxsOm8sbD10LnByZXZpb3VzVXJsLHU9dm9pZCAwPT09bD9udWxsOmwsYz10LndyYXBwZXJEZXB0aCxkPXZvaWQgMD09PWM/MDpjLHA9dC5pc1Jvb3RWQVNULGg9dm9pZCAwIT09cCYmcCx2PXQuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzLGY9dC5hbGxvd011bHRpcGxlQWRzLG09W107dGhpcy52YXN0VmVyc2lvbiYmcGFyc2VGbG9hdCh0aGlzLnZhc3RWZXJzaW9uKTwzJiZoJiYoZj0hMCk7dHJ5e209dGhpcy5wYXJzZVZhc3RYbWwoZSx7aXNSb290VkFTVDpoLHVybDppLHdyYXBwZXJEZXB0aDpkLGFsbG93TXVsdGlwbGVBZHM6Zixmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM6dn0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX1yZXR1cm4gMT09PW0ubGVuZ3RoJiZudWxsIT1zJiYobVswXS5zZXF1ZW5jZT1zKSwhMT09PWEmJih0aGlzLnJlbWFpbmluZ0Fkcz1VLnNwbGl0VkFTVChtKSxtPXRoaXMucmVtYWluaW5nQWRzLnNoaWZ0KCkpLHRoaXMucmVzb2x2ZUFkcyhtLHt3cmFwcGVyRGVwdGg6ZCxwcmV2aW91c1VybDp1LHVybDppfSl9fSx7a2V5OlwicmVzb2x2ZUFkc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSxyPWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGk9ci53cmFwcGVyRGVwdGgsbj1yLnByZXZpb3VzVXJsLGE9ci51cmwsbz1bXTtyZXR1cm4gbj1hLHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIHI9ZS5yZXNvbHZlV3JhcHBlcnModCxpLG4pO28ucHVzaChyKX0pKSxQcm9taXNlLmFsbChvKS50aGVuKChmdW5jdGlvbih0KXt2YXIgcj1MLmZsYXR0ZW4odCk7aWYoIXImJmUucmVtYWluaW5nQWRzLmxlbmd0aD4wKXt2YXIgbz1lLnJlbWFpbmluZ0Fkcy5zaGlmdCgpO3JldHVybiBlLnJlc29sdmVBZHMobyx7d3JhcHBlckRlcHRoOmkscHJldmlvdXNVcmw6bix1cmw6YX0pfXJldHVybiByfSkpfX0se2tleTpcInJlc29sdmVXcmFwcGVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgaT10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obil7dmFyIGE7aWYodCsrLCFlLm5leHRXcmFwcGVyVVJMKXJldHVybiBkZWxldGUgZS5uZXh0V3JhcHBlclVSTCxuKGUpO2lmKHQ+PWkubWF4V3JhcHBlckRlcHRofHwtMSE9PWkucGFyZW50VVJMcy5pbmRleE9mKGUubmV4dFdyYXBwZXJVUkwpKXJldHVybiBlLmVycm9yQ29kZT0zMDIsZGVsZXRlIGUubmV4dFdyYXBwZXJVUkwsbihlKTtlLm5leHRXcmFwcGVyVVJMPVUucmVzb2x2ZVZhc3RBZFRhZ1VSSShlLm5leHRXcmFwcGVyVVJMLHIpLGkuVVJMVGVtcGxhdGVGaWx0ZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQpe2UubmV4dFdyYXBwZXJVUkw9dChlLm5leHRXcmFwcGVyVVJMKX0pKTt2YXIgbz1udWxsIT09KGE9aS5wYXJzaW5nT3B0aW9ucy5hbGxvd011bHRpcGxlQWRzKSYmdm9pZCAwIT09YT9hOmUuYWxsb3dNdWx0aXBsZUFkcyxzPWUuc2VxdWVuY2U7aS5mZXRjaFZBU1QoZS5uZXh0V3JhcHBlclVSTCx0LHIsZSkudGhlbigoZnVuY3Rpb24oYSl7cmV0dXJuIGkucGFyc2UoYSx7dXJsOmUubmV4dFdyYXBwZXJVUkwscHJldmlvdXNVcmw6cix3cmFwcGVyU2VxdWVuY2U6cyx3cmFwcGVyRGVwdGg6dCxmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnM6ZS5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMsYWxsb3dNdWx0aXBsZUFkczpvfSkudGhlbigoZnVuY3Rpb24odCl7aWYoZGVsZXRlIGUubmV4dFdyYXBwZXJVUkwsMD09PXQubGVuZ3RoKXJldHVybiBlLmNyZWF0aXZlcz1bXSxuKGUpO3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7dCYmVS5tZXJnZVdyYXBwZXJBZERhdGEodCxlKX0pKSxuKHQpfSkpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtlLmVycm9yQ29kZT0zMDEsZS5lcnJvck1lc3NhZ2U9dC5tZXNzYWdlLG4oZSl9KSl9KSl9fSx7a2V5OlwiY29tcGxldGVXcmFwcGVyUmVzb2x2aW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoMD09PWUuYWRzLmxlbmd0aCl0aGlzLnRyYWNrVmFzdEVycm9yKGUuZXJyb3JVUkxUZW1wbGF0ZXMse0VSUk9SQ09ERTozMDN9KTtlbHNlIGZvcih2YXIgdD1lLmFkcy5sZW5ndGgtMTt0Pj0wO3QtLSl7dmFyIHI9ZS5hZHNbdF07KHIuZXJyb3JDb2RlfHwwPT09ci5jcmVhdGl2ZXMubGVuZ3RoKSYmKHRoaXMudHJhY2tWYXN0RXJyb3Ioci5lcnJvclVSTFRlbXBsYXRlcy5jb25jYXQoZS5lcnJvclVSTFRlbXBsYXRlcykse0VSUk9SQ09ERTpyLmVycm9yQ29kZXx8MzAzfSx7RVJST1JNRVNTQUdFOnIuZXJyb3JNZXNzYWdlfHxcIlwifSx7ZXh0ZW5zaW9uczpyLmV4dGVuc2lvbnN9LHtzeXN0ZW06ci5zeXN0ZW19KSxlLmFkcy5zcGxpY2UodCwxKSl9fX1dKSxyfShRKSxsZT1udWxsLHVlPXtkYXRhOnt9LGxlbmd0aDowLGdldEl0ZW06ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZGF0YVtlXX0sc2V0SXRlbTpmdW5jdGlvbihlLHQpe3RoaXMuZGF0YVtlXT10LHRoaXMubGVuZ3RoPU9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RofSxyZW1vdmVJdGVtOmZ1bmN0aW9uKGUpe2RlbGV0ZSB0aGlzLmRhdGFbZV0sdGhpcy5sZW5ndGg9T2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGh9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5kYXRhPXt9LHRoaXMubGVuZ3RoPTB9fSxjZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSksdGhpcy5zdG9yYWdlPXRoaXMuaW5pdFN0b3JhZ2UoKX1yZXR1cm4gbyhlLFt7a2V5OlwiaW5pdFN0b3JhZ2VcIix2YWx1ZTpmdW5jdGlvbigpe2lmKGxlKXJldHVybiBsZTt0cnl7bGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmbnVsbCE9PXdpbmRvdz93aW5kb3cubG9jYWxTdG9yYWdlfHx3aW5kb3cuc2Vzc2lvblN0b3JhZ2U6bnVsbH1jYXRjaChlKXtsZT1udWxsfXJldHVybiBsZSYmIXRoaXMuaXNTdG9yYWdlRGlzYWJsZWQobGUpfHwobGU9dWUpLmNsZWFyKCksbGV9fSx7a2V5OlwiaXNTdG9yYWdlRGlzYWJsZWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1cIl9fVkFTVFN0b3JhZ2VfX1wiO3RyeXtpZihlLnNldEl0ZW0odCx0KSxlLmdldEl0ZW0odCkhPT10KXJldHVybiBlLnJlbW92ZUl0ZW0odCksITB9Y2F0Y2goZSl7cmV0dXJuITB9cmV0dXJuIGUucmVtb3ZlSXRlbSh0KSwhMX19LHtrZXk6XCJnZXRJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGUpfX0se2tleTpcInNldEl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShlLHQpfX0se2tleTpcInJlbW92ZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oZSl9fSx7a2V5OlwiY2xlYXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JhZ2UuY2xlYXIoKX19XSksZX0oKSxkZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLGkpe24odGhpcyxlKSx0aGlzLmNhcHBpbmdGcmVlTHVuY2g9dHx8MCx0aGlzLmNhcHBpbmdNaW5pbXVtVGltZUludGVydmFsPXJ8fDAsdGhpcy5kZWZhdWx0T3B0aW9ucz17d2l0aENyZWRlbnRpYWxzOiExLHRpbWVvdXQ6MH0sdGhpcy52YXN0UGFyc2VyPW5ldyBzZSx0aGlzLnN0b3JhZ2U9aXx8bmV3IGNlLHZvaWQgMD09PXRoaXMubGFzdFN1Y2Nlc3NmdWxBZCYmKHRoaXMubGFzdFN1Y2Nlc3NmdWxBZD0wKSx2b2lkIDA9PT10aGlzLnRvdGFsQ2FsbHMmJih0aGlzLnRvdGFsQ2FsbHM9MCksdm9pZCAwPT09dGhpcy50b3RhbENhbGxzVGltZW91dCYmKHRoaXMudG90YWxDYWxsc1RpbWVvdXQ9MCl9cmV0dXJuIG8oZSxbe2tleTpcImdldFBhcnNlclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFzdFBhcnNlcn19LHtrZXk6XCJsYXN0U3VjY2Vzc2Z1bEFkXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKFwidmFzdC1jbGllbnQtbGFzdC1zdWNjZXNzZnVsLWFkXCIpfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5zdG9yYWdlLnNldEl0ZW0oXCJ2YXN0LWNsaWVudC1sYXN0LXN1Y2Nlc3NmdWwtYWRcIixlKX19LHtrZXk6XCJ0b3RhbENhbGxzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKFwidmFzdC1jbGllbnQtdG90YWwtY2FsbHNcIil9LHNldDpmdW5jdGlvbihlKXt0aGlzLnN0b3JhZ2Uuc2V0SXRlbShcInZhc3QtY2xpZW50LXRvdGFsLWNhbGxzXCIsZSl9fSx7a2V5OlwidG90YWxDYWxsc1RpbWVvdXRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oXCJ2YXN0LWNsaWVudC10b3RhbC1jYWxscy10aW1lb3V0XCIpfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5zdG9yYWdlLnNldEl0ZW0oXCJ2YXN0LWNsaWVudC10b3RhbC1jYWxscy10aW1lb3V0XCIsZSl9fSx7a2V5OlwiaGFzUmVtYWluaW5nQWRzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YXN0UGFyc2VyLnJlbWFpbmluZ0Fkcy5sZW5ndGg+MH19LHtrZXk6XCJnZXROZXh0QWRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudmFzdFBhcnNlci5nZXRSZW1haW5pbmdBZHMoZSl9fSx7a2V5OlwiZ2V0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxpPURhdGUubm93KCk7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmRlZmF1bHRPcHRpb25zLHIpKS5oYXNPd25Qcm9wZXJ0eShcInJlc29sdmVBbGxcIil8fChyLnJlc29sdmVBbGw9ITEpLHRoaXMudG90YWxDYWxsc1RpbWVvdXQ8aT8odGhpcy50b3RhbENhbGxzPTEsdGhpcy50b3RhbENhbGxzVGltZW91dD1pKzM2ZTUpOnRoaXMudG90YWxDYWxscysrLG5ldyBQcm9taXNlKChmdW5jdGlvbihuLGEpe2lmKHQuY2FwcGluZ0ZyZWVMdW5jaD49dC50b3RhbENhbGxzKXJldHVybiBhKG5ldyBFcnJvcihcIlZBU1QgY2FsbCBjYW5jZWxlZCDigJMgRnJlZUx1bmNoIGNhcHBpbmcgbm90IHJlYWNoZWQgeWV0IFwiLmNvbmNhdCh0LnRvdGFsQ2FsbHMsXCIvXCIpLmNvbmNhdCh0LmNhcHBpbmdGcmVlTHVuY2gpKSk7dmFyIG89aS10Lmxhc3RTdWNjZXNzZnVsQWQ7aWYobzwwKXQubGFzdFN1Y2Nlc3NmdWxBZD0wO2Vsc2UgaWYobzx0LmNhcHBpbmdNaW5pbXVtVGltZUludGVydmFsKXJldHVybiBhKG5ldyBFcnJvcihcIlZBU1QgY2FsbCBjYW5jZWxlZCDigJMgKFwiLmNvbmNhdCh0LmNhcHBpbmdNaW5pbXVtVGltZUludGVydmFsLFwiKW1zIG1pbmltdW0gaW50ZXJ2YWwgcmVhY2hlZFwiKSkpO3QudmFzdFBhcnNlci5nZXRBbmRQYXJzZVZBU1QoZSxyKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gbihlKX0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSl9KSl9KSl9fV0pLGV9KCkscGU9ZnVuY3Rpb24oZSl7bChpLGUpO3ZhciB0PXAoaSk7ZnVuY3Rpb24gaShlLHIsYSl7dmFyIG8scz1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtmb3IodmFyIGwgaW4gbih0aGlzLGkpLChvPXQuY2FsbCh0aGlzKSkuYWQ9cixvLmNyZWF0aXZlPWEsby52YXJpYXRpb249cyxvLm11dGVkPSExLG8uaW1wcmVzc2VkPSExLG8uc2tpcHBhYmxlPSExLG8udHJhY2tpbmdFdmVudHM9e30sby5sYXN0UGVyY2VudGFnZT0wLG8uX2FscmVhZHlUcmlnZ2VyZWRRdWFydGlsZXM9e30sby5lbWl0QWx3YXlzRXZlbnRzPVtcImNyZWF0aXZlVmlld1wiLFwic3RhcnRcIixcImZpcnN0UXVhcnRpbGVcIixcIm1pZHBvaW50XCIsXCJ0aGlyZFF1YXJ0aWxlXCIsXCJjb21wbGV0ZVwiLFwicmVzdW1lXCIsXCJwYXVzZVwiLFwicmV3aW5kXCIsXCJza2lwXCIsXCJjbG9zZUxpbmVhclwiLFwiY2xvc2VcIl0sby5jcmVhdGl2ZS50cmFja2luZ0V2ZW50cyl7dmFyIHU9by5jcmVhdGl2ZS50cmFja2luZ0V2ZW50c1tsXTtvLnRyYWNraW5nRXZlbnRzW2xdPXUuc2xpY2UoMCl9cmV0dXJuIEkoby5jcmVhdGl2ZSk/by5faW5pdExpbmVhclRyYWNraW5nKCk6by5faW5pdFZhcmlhdGlvblRyYWNraW5nKCksZSYmby5vbihcInN0YXJ0XCIsKGZ1bmN0aW9uKCl7ZS5sYXN0U3VjY2Vzc2Z1bEFkPURhdGUubm93KCl9KSksb31yZXR1cm4gbyhpLFt7a2V5OlwiX2luaXRMaW5lYXJUcmFja2luZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saW5lYXI9ITAsdGhpcy5za2lwRGVsYXk9dGhpcy5jcmVhdGl2ZS5za2lwRGVsYXksdGhpcy5zZXREdXJhdGlvbih0aGlzLmNyZWF0aXZlLmR1cmF0aW9uKSx0aGlzLmNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlPXRoaXMuY3JlYXRpdmUudmlkZW9DbGlja1Rocm91Z2hVUkxUZW1wbGF0ZSx0aGlzLmNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXM9dGhpcy5jcmVhdGl2ZS52aWRlb0NsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXN9fSx7a2V5OlwiX2luaXRWYXJpYXRpb25UcmFja2luZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5saW5lYXI9ITEsdGhpcy5za2lwRGVsYXk9LTEsdGhpcy52YXJpYXRpb24pe2Zvcih2YXIgZSBpbiB0aGlzLnZhcmlhdGlvbi50cmFja2luZ0V2ZW50cyl7dmFyIHQ9dGhpcy52YXJpYXRpb24udHJhY2tpbmdFdmVudHNbZV07dGhpcy50cmFja2luZ0V2ZW50c1tlXT90aGlzLnRyYWNraW5nRXZlbnRzW2VdPXRoaXMudHJhY2tpbmdFdmVudHNbZV0uY29uY2F0KHQuc2xpY2UoMCkpOnRoaXMudHJhY2tpbmdFdmVudHNbZV09dC5zbGljZSgwKX1cIm5vbkxpbmVhckFkXCI9PT10aGlzLnZhcmlhdGlvbi5hZFR5cGU/KHRoaXMuY2xpY2tUaHJvdWdoVVJMVGVtcGxhdGU9dGhpcy52YXJpYXRpb24ubm9ubGluZWFyQ2xpY2tUaHJvdWdoVVJMVGVtcGxhdGUsdGhpcy5jbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzPXRoaXMudmFyaWF0aW9uLm5vbmxpbmVhckNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMsdGhpcy5zZXREdXJhdGlvbih0aGlzLnZhcmlhdGlvbi5taW5TdWdnZXN0ZWREdXJhdGlvbikpOmZ1bmN0aW9uKGUpe3JldHVyblwiY29tcGFuaW9uQWRcIj09PWUuYWRUeXBlfSh0aGlzLnZhcmlhdGlvbikmJih0aGlzLmNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlPXRoaXMudmFyaWF0aW9uLmNvbXBhbmlvbkNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlLHRoaXMuY2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcz10aGlzLnZhcmlhdGlvbi5jb21wYW5pb25DbGlja1RyYWNraW5nVVJMVGVtcGxhdGVzKX19fSx7a2V5Olwic2V0RHVyYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmFzc2V0RHVyYXRpb249ZSx0aGlzLnF1YXJ0aWxlcz17Zmlyc3RRdWFydGlsZTpNYXRoLnJvdW5kKDI1KnRoaXMuYXNzZXREdXJhdGlvbikvMTAwLG1pZHBvaW50Ok1hdGgucm91bmQoNTAqdGhpcy5hc3NldER1cmF0aW9uKS8xMDAsdGhpcmRRdWFydGlsZTpNYXRoLnJvdW5kKDc1KnRoaXMuYXNzZXREdXJhdGlvbikvMTAwfX19LHtrZXk6XCJzZXRQcm9ncmVzc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30saT10aGlzLnNraXBEZWxheXx8LTE7aWYoLTE9PT1pfHx0aGlzLnNraXBwYWJsZXx8KGk+ZT90aGlzLmVtaXQoXCJza2lwLWNvdW50ZG93blwiLGktZSk6KHRoaXMuc2tpcHBhYmxlPSEwLHRoaXMuZW1pdChcInNraXAtY291bnRkb3duXCIsMCkpKSx0aGlzLmFzc2V0RHVyYXRpb24+MCl7dmFyIG49TWF0aC5yb3VuZChlL3RoaXMuYXNzZXREdXJhdGlvbioxMDApLGE9W107aWYoZT4wKXthLnB1c2goXCJzdGFydFwiKTtmb3IodmFyIG89dGhpcy5sYXN0UGVyY2VudGFnZTtvPG47bysrKWEucHVzaChcInByb2dyZXNzLVwiLmNvbmNhdChvKzEsXCIlXCIpKTtmb3IodmFyIHMgaW4gYS5wdXNoKFwicHJvZ3Jlc3MtXCIuY29uY2F0KE1hdGgucm91bmQoZSkpKSx0aGlzLnF1YXJ0aWxlcyl0aGlzLmlzUXVhcnRpbGVSZWFjaGVkKHMsdGhpcy5xdWFydGlsZXNbc10sZSkmJihhLnB1c2gocyksdGhpcy5fYWxyZWFkeVRyaWdnZXJlZFF1YXJ0aWxlc1tzXT0hMCk7dGhpcy5sYXN0UGVyY2VudGFnZT1ufWEuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC50cmFjayhlLHttYWNyb3M6cixvbmNlOiEwfSl9KSksZTx0aGlzLnByb2dyZXNzJiZ0aGlzLnRyYWNrKFwicmV3aW5kXCIse21hY3JvczpyfSl9dGhpcy5wcm9ncmVzcz1lfX0se2tleTpcImlzUXVhcnRpbGVSZWFjaGVkXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBpPSExO3JldHVybiB0PD1yJiYhdGhpcy5fYWxyZWFkeVRyaWdnZXJlZFF1YXJ0aWxlc1tlXSYmKGk9ITApLGl9fSx7a2V5Olwic2V0TXV0ZWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307dGhpcy5tdXRlZCE9PWUmJnRoaXMudHJhY2soZT9cIm11dGVcIjpcInVubXV0ZVwiLHttYWNyb3M6dH0pLHRoaXMubXV0ZWQ9ZX19LHtrZXk6XCJzZXRQYXVzZWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307dGhpcy5wYXVzZWQhPT1lJiZ0aGlzLnRyYWNrKGU/XCJwYXVzZVwiOlwicmVzdW1lXCIse21hY3Jvczp0fSksdGhpcy5wYXVzZWQ9ZX19LHtrZXk6XCJzZXRGdWxsc2NyZWVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3RoaXMuZnVsbHNjcmVlbiE9PWUmJnRoaXMudHJhY2soZT9cImZ1bGxzY3JlZW5cIjpcImV4aXRGdWxsc2NyZWVuXCIse21hY3Jvczp0fSksdGhpcy5mdWxsc2NyZWVuPWV9fSx7a2V5Olwic2V0RXhwYW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3RoaXMuZXhwYW5kZWQhPT1lJiYodGhpcy50cmFjayhlP1wiZXhwYW5kXCI6XCJjb2xsYXBzZVwiLHttYWNyb3M6dH0pLHRoaXMudHJhY2soZT9cInBsYXllckV4cGFuZFwiOlwicGxheWVyQ29sbGFwc2VcIix7bWFjcm9zOnR9KSksdGhpcy5leHBhbmRlZD1lfX0se2tleTpcInNldFNraXBEZWxheVwiLHZhbHVlOmZ1bmN0aW9uKGUpe1wibnVtYmVyXCI9PXR5cGVvZiBlJiYodGhpcy5za2lwRGVsYXk9ZSl9fSx7a2V5OlwidHJhY2tJbXByZXNzaW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy5pbXByZXNzZWR8fCh0aGlzLmltcHJlc3NlZD0hMCx0aGlzLnRyYWNrVVJMcyh0aGlzLmFkLmltcHJlc3Npb25VUkxUZW1wbGF0ZXMsZSksdGhpcy50cmFjayhcImNyZWF0aXZlVmlld1wiLHttYWNyb3M6ZX0pKX19LHtrZXk6XCJlcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTt0aGlzLnRyYWNrVVJMcyh0aGlzLmFkLmVycm9yVVJMVGVtcGxhdGVzLGUse2lzQ3VzdG9tQ29kZTp0fSl9fSx7a2V5OlwiZXJyb3JXaXRoQ29kZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07dGhpcy5lcnJvcih7RVJST1JDT0RFOmV9LHQpLGNvbnNvbGUubG9nKFwiVGhlIG1ldGhvZCBlcnJvcldpdGhDb2RlIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdmFzdCB0cmFja2VyIGVycm9yIG1ldGhvZCBpbnN0ZWFkXCIpfX0se2tleTpcImNvbXBsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy50cmFjayhcImNvbXBsZXRlXCIse21hY3JvczplfSl9fSx7a2V5Olwibm90VXNlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMudHJhY2soXCJub3RVc2VkXCIse21hY3JvczplfSksdGhpcy50cmFja2luZ0V2ZW50cz1bXX19LHtrZXk6XCJvdGhlckFkSW50ZXJhY3Rpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLnRyYWNrKFwib3RoZXJBZEludGVyYWN0aW9uXCIse21hY3JvczplfSl9fSx7a2V5OlwiYWNjZXB0SW52aXRhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMudHJhY2soXCJhY2NlcHRJbnZpdGF0aW9uXCIse21hY3JvczplfSl9fSx7a2V5OlwiYWRFeHBhbmRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLnRyYWNrKFwiYWRFeHBhbmRcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJhZENvbGxhcHNlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy50cmFjayhcImFkQ29sbGFwc2VcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJtaW5pbWl6ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMudHJhY2soXCJtaW5pbWl6ZVwiLHttYWNyb3M6ZX0pfX0se2tleTpcInZlcmlmaWNhdGlvbk5vdEV4ZWN1dGVkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O2lmKCF0aGlzLmFkfHwhdGhpcy5hZC5hZFZlcmlmaWNhdGlvbnN8fCF0aGlzLmFkLmFkVmVyaWZpY2F0aW9ucy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiTm8gYWRWZXJpZmljYXRpb25zIHByb3ZpZGVkXCIpO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIHZlbmRvciBwcm92aWRlZCwgdW5hYmxlIHRvIGZpbmQgYXNzb2NpYXRlZCB2ZXJpZmljYXRpb25Ob3RFeGVjdXRlZFwiKTt2YXIgcj10aGlzLmFkLmFkVmVyaWZpY2F0aW9ucy5maW5kKChmdW5jdGlvbih0KXtyZXR1cm4gdC52ZW5kb3I9PT1lfSkpO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIk5vIGFzc29jaWF0ZWQgdmVyaWZpY2F0aW9uIGVsZW1lbnQgZm91bmQgZm9yIHZlbmRvcjogXCIuY29uY2F0KGUpKTt2YXIgaT1yLnRyYWNraW5nRXZlbnRzO2lmKGkmJmkudmVyaWZpY2F0aW9uTm90RXhlY3V0ZWQpe3ZhciBuPWkudmVyaWZpY2F0aW9uTm90RXhlY3V0ZWQ7dGhpcy50cmFja1VSTHMobix0KSx0aGlzLmVtaXQoXCJ2ZXJpZmljYXRpb25Ob3RFeGVjdXRlZFwiLHt0cmFja2luZ1VSTFRlbXBsYXRlczpufSl9fX0se2tleTpcIm92ZXJsYXlWaWV3RHVyYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307dC5BRFBMQVlIRUFEPWUsdGhpcy50cmFjayhcIm92ZXJsYXlWaWV3RHVyYXRpb25cIix7bWFjcm9zOnR9KX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMudHJhY2sodGhpcy5saW5lYXI/XCJjbG9zZUxpbmVhclwiOlwiY2xvc2VcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJza2lwXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy50cmFjayhcInNraXBcIix7bWFjcm9zOmV9KX19LHtrZXk6XCJsb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy50cmFjayhcImxvYWRlZFwiLHttYWNyb3M6ZX0pfX0se2tleTpcImNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTt0aGlzLmNsaWNrVHJhY2tpbmdVUkxUZW1wbGF0ZXMmJnRoaXMuY2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcy5sZW5ndGgmJnRoaXMudHJhY2tVUkxzKHRoaXMuY2xpY2tUcmFja2luZ1VSTFRlbXBsYXRlcyx0KTt2YXIgaT10aGlzLmNsaWNrVGhyb3VnaFVSTFRlbXBsYXRlfHxlLG49cih7fSx0KTtpZihpKXt0aGlzLnByb2dyZXNzJiYobi5BRFBMQVlIRUFEPXRoaXMucHJvZ3Jlc3NGb3JtYXR0ZWQoKSk7dmFyIGE9TC5yZXNvbHZlVVJMVGVtcGxhdGVzKFtpXSxuKVswXTt0aGlzLmVtaXQoXCJjbGlja3Rocm91Z2hcIixhKX19fSx7a2V5OlwidHJhY2tcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj10Lm1hY3JvcyxpPXZvaWQgMD09PXI/e306cixuPXQub25jZSxhPXZvaWQgMCE9PW4mJm47XCJjbG9zZUxpbmVhclwiPT09ZSYmIXRoaXMudHJhY2tpbmdFdmVudHNbZV0mJnRoaXMudHJhY2tpbmdFdmVudHMuY2xvc2UmJihlPVwiY2xvc2VcIik7dmFyIG89dGhpcy50cmFja2luZ0V2ZW50c1tlXSxzPXRoaXMuZW1pdEFsd2F5c0V2ZW50cy5pbmRleE9mKGUpPi0xO28/KHRoaXMuZW1pdChlLHt0cmFja2luZ1VSTFRlbXBsYXRlczpvfSksdGhpcy50cmFja1VSTHMobyxpKSk6cyYmdGhpcy5lbWl0KGUsbnVsbCksYSYmKGRlbGV0ZSB0aGlzLnRyYWNraW5nRXZlbnRzW2VdLHMmJnRoaXMuZW1pdEFsd2F5c0V2ZW50cy5zcGxpY2UodGhpcy5lbWl0QWx3YXlzRXZlbnRzLmluZGV4T2YoZSksMSkpfX0se2tleTpcInRyYWNrVVJMc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LGksbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sYT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e30sbz1yKHt9LG4pO3RoaXMubGluZWFyJiYodGhpcy5jcmVhdGl2ZSYmdGhpcy5jcmVhdGl2ZS5tZWRpYUZpbGVzJiZ0aGlzLmNyZWF0aXZlLm1lZGlhRmlsZXNbMF0mJnRoaXMuY3JlYXRpdmUubWVkaWFGaWxlc1swXS5maWxlVVJMJiYoby5BU1NFVFVSST10aGlzLmNyZWF0aXZlLm1lZGlhRmlsZXNbMF0uZmlsZVVSTCksdGhpcy5wcm9ncmVzcyYmKG8uQURQTEFZSEVBRD10aGlzLnByb2dyZXNzRm9ybWF0dGVkKCkpKSxudWxsIT09KHQ9dGhpcy5jcmVhdGl2ZSkmJnZvaWQgMCE9PXQmJm51bGwhPT0oaT10LnVuaXZlcnNhbEFkSWRzKSYmdm9pZCAwIT09aSYmaS5sZW5ndGgmJihvLlVOSVZFUlNBTEFESUQ9dGhpcy5jcmVhdGl2ZS51bml2ZXJzYWxBZElkcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlkUmVnaXN0cnkuY29uY2F0KFwiIFwiLGUudmFsdWUpfSkpLmpvaW4oXCIsXCIpKSx0aGlzLmFkJiYodGhpcy5hZC5zZXF1ZW5jZSYmKG8uUE9EU0VRVUVOQ0U9dGhpcy5hZC5zZXF1ZW5jZSksdGhpcy5hZC5hZFR5cGUmJihvLkFEVFlQRT10aGlzLmFkLmFkVHlwZSksdGhpcy5hZC5hZFNlcnZpbmdJZCYmKG8uQURTRVJWSU5HSUQ9dGhpcy5hZC5hZFNlcnZpbmdJZCksdGhpcy5hZC5jYXRlZ29yaWVzJiZ0aGlzLmFkLmNhdGVnb3JpZXMubGVuZ3RoJiYoby5BRENBVEVHT1JJRVM9dGhpcy5hZC5jYXRlZ29yaWVzLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFsdWV9KSkuam9pbihcIixcIikpLHRoaXMuYWQuYmxvY2tlZEFkQ2F0ZWdvcmllcyYmdGhpcy5hZC5ibG9ja2VkQWRDYXRlZ29yaWVzLmxlbmd0aCYmKG8uQkxPQ0tFREFEQ0FURUdPUklFUz10aGlzLmFkLmJsb2NrZWRBZENhdGVnb3JpZXMpKSxMLnRyYWNrKGUsbyxhKX19LHtrZXk6XCJjb252ZXJ0VG9UaW1lY29kZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PTFlMyplLHI9TWF0aC5mbG9vcih0LzM2ZTUpLGk9TWF0aC5mbG9vcih0LzZlNCU2MCksbj1NYXRoLmZsb29yKHQvMWUzJTYwKSxhPU1hdGguZmxvb3IodCUxZTMpO3JldHVyblwiXCIuY29uY2F0KEwubGVmdHBhZChyLDIpLFwiOlwiKS5jb25jYXQoTC5sZWZ0cGFkKGksMiksXCI6XCIpLmNvbmNhdChMLmxlZnRwYWQobiwyKSxcIi5cIikuY29uY2F0KEwubGVmdHBhZChhLDMpKX19LHtrZXk6XCJwcm9ncmVzc0Zvcm1hdHRlZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udmVydFRvVGltZWNvZGUodGhpcy5wcm9ncmVzcyl9fV0pLGl9KFEpO2UuVkFTVENsaWVudD1kZSxlLlZBU1RQYXJzZXI9c2UsZS5WQVNUVHJhY2tlcj1wZSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKTtcbiIsImltcG9ydCBWUEFJREhUTUw1Q2xpZW50IGZyb20gJ3ZwYWlkLWh0bWw1LWNsaWVudCc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBwbGF5ZXJcbiAqIEBwYXJhbSB7VkFTVFRyYWNrZXJ9IHRyYWNrZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVZQQUlEKHBsYXllciwgdHJhY2tlciwgb3B0aW9ucykge1xuICBjb25zdCBjcmVhdGl2ZSA9IHRyYWNrZXIuY3JlYXRpdmU7XG4gIGNvbnN0IHZhbGlkVHlwZXMgPSBbJ2FwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsICd0ZXh0L2phdmFzY3JpcHQnLCAnYXBwbGljYXRpb24vamF2YXNjcmlwdCddO1xuICBjb25zdCB2YWxpZE1pbWUgPSBtZWRpYUZpbGUgPT4gdmFsaWRUeXBlcy5pbmRleE9mKG1lZGlhRmlsZS5taW1lVHlwZS50cmltKCkpID4gLTE7XG5cbiAgY29uc3QgdnBhaWRNZWRpYUZpbGUgPSBjcmVhdGl2ZS5tZWRpYUZpbGVzLmZpbmQobWVkaWFGaWxlID0+IG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT09ICdWUEFJRCcgJiYgdmFsaWRNaW1lKG1lZGlhRmlsZSkpO1xuXG4gIGlmICghdnBhaWRNZWRpYUZpbGUpIHtcbiAgICB0aGlzLnBsYXllci53YXJuKCdPbmx5IEphdmFTY3JpcHQgVlBBSUQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyJyk7XG4gICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignYWRzY2FuY2VsZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0ZWNoU2NyZWVuID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG5cbiAgY29uc3QgdnBhaWRDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgdnBhaWRDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMudnBhaWQuY29udGFpbmVyQ2xhc3M7XG4gIHZwYWlkQ29udGFpbmVyRWxlbWVudC5pZCA9IG9wdGlvbnMudnBhaWQuY29udGFpbmVySWQ7XG5cbiAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKHZwYWlkQ29udGFpbmVyRWxlbWVudCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG5cbiAgY29uc3QgdnBhaWRDbGllbnQgPSBuZXcgVlBBSURIVE1MNUNsaWVudCh2cGFpZENvbnRhaW5lckVsZW1lbnQsIHRlY2hTY3JlZW4sIHt9KTtcblxuICBwbGF5ZXIuYWRzLnN0YXJ0TGluZWFyQWRNb2RlKCk7XG5cbiAgcGxheWVyLnBhdXNlKCk7XG4gIHBsYXllci5jb250cm9sQmFyLmhpZGUoKTtcblxuICB2cGFpZENsaWVudC5sb2FkQWRVbml0KHZwYWlkTWVkaWFGaWxlLmZpbGVVUkwsIG9uTG9hZCk7XG5cbiAgZnVuY3Rpb24gb25Mb2FkKGVyciwgYWRVbml0KSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcGxheWVyLmVycm9yKGVycik7XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5zaG93KCk7XG4gICAgICBwbGF5ZXIudHJpZ2dlcignYWRlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkVW5pdC5oYW5kc2hha2VWZXJzaW9uKCcyLjAnLCBvbkhhbmRTaGFrZSk7XG4gICAgYWRVbml0LnN1YnNjcmliZSgnQWRMb2FkZWQnLCBvbkFkTG9hZGVkKTtcbiAgICBhZFVuaXQuc3Vic2NyaWJlKCdBZFN0YXJ0ZWQnLCBvbkFkU3RhcnRlZCk7XG4gICAgYWRVbml0LnN1YnNjcmliZSgnQWRTdG9wcGVkJywgb25BZFN0b3BwZWQpO1xuXG4gICAgLy8gVE9ETzogaGFuZGxlIFZBU1QgdHJhY2tpbmdcblxuICAgIGxldCB2aWRlb0VsZW1lbnQ7XG5cbiAgICAvLyBhcmdzOiBlcnJvciwgcmVzdWx0XG4gICAgZnVuY3Rpb24gb25IYW5kU2hha2UoKSB7XG4gICAgICBjb25zdCBpbml0aWFsRGltZW5zaW9ucyA9IGdldFBsYXllckRpbWVuc2lvbnMocGxheWVyKTtcblxuICAgICAgY29uc3QgY3JlYXRpdmVEYXRhID0ge1xuICAgICAgICBBZFBhcmFtZXRlcnM6IGNyZWF0aXZlLmFkUGFyYW1ldGVyc1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdmlkZW9JbnN0YW5jZSA9IG9wdGlvbnMudnBhaWQudmlkZW9JbnN0YW5jZTtcblxuICAgICAgaWYgKHZpZGVvSW5zdGFuY2UgPT09ICdzYW1lJykge1xuICAgICAgICB2aWRlb0VsZW1lbnQgPSBwbGF5ZXIudGVjaCh7a2luZGFLbm93V2hhdEltRG9pbmc6IHRydWV9KS5lbCgpO1xuICAgICAgfSBlbHNlIGlmICh2aWRlb0luc3RhbmNlID09PSAnbmV3Jykge1xuICAgICAgICB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IGxlZnQ6MDsgei1pbmRleDoyICFpbXBvcnRhbnQ7JztcbiAgICAgICAgdnBhaWRDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHZpZGVvRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmlkZW9JbnN0YW5jZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgcGxheWVyLndhcm4odmlkZW9JbnN0YW5jZSArICcgaXMgYW4gaW52YWxpZCB2aWRlb0luc3RhbmNlIHZhbHVlLiBEZWZhdWx0aW5nIHRvIFxcJ25vbmVcXCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmlkZW9FbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW52aXJvbm1lbnRWYXJzID0ge1xuICAgICAgICBzbG90OiB2cGFpZENvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgIHZpZGVvU2xvdDogdmlkZW9FbGVtZW50XG4gICAgICB9O1xuXG4gICAgICBhZFVuaXQuaW5pdEFkKGluaXRpYWxEaW1lbnNpb25zLndpZHRoLCBpbml0aWFsRGltZW5zaW9ucy5oZWlnaHQsICdub3JtYWwnLCAtMSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQWRMb2FkZWQoKSB7XG4gICAgICBhZFVuaXQuc3RhcnRBZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQWRTdGFydGVkKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2Fkcy1hZC1zdGFydGVkJyk7XG4gICAgICBwbGF5ZXIub24oJ3Jlc2l6ZScsIHJlc2l6ZUFkKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBZCk7XG4gICAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQWRTdG9wcGVkKCkge1xuICAgICAgdnBhaWRDbGllbnQuZGVzdHJveSgpO1xuICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc2hvdygpO1xuICAgICAgcGxheWVyLm9mZigncmVzaXplJywgcmVzaXplQWQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFkKTtcbiAgICAgIHBsYXllci50cmlnZ2VyKCdhZGVuZGVkJyk7XG4gICAgICBwbGF5ZXIuYWRzLmVuZExpbmVhckFkTW9kZSgpO1xuXG4gICAgICBpZiAob3B0aW9ucy52cGFpZC52aWRlb0luc3RhbmNlID09PSAnbmV3JyAmJiB2aWRlb0VsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICB2aWRlb0VsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh2aWRlb0VsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZUFkKCkge1xuICAgICAgY29uc3QgbmV3RGltZW5zaW9ucyA9IGdldFBsYXllckRpbWVuc2lvbnMocGxheWVyKTtcblxuICAgICAgYWRVbml0LnJlc2l6ZUFkKG5ld0RpbWVuc2lvbnMud2lkdGgsIG5ld0RpbWVuc2lvbnMuaGVpZ2h0LCBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyAnZnVsbHNjcmVlbicgOiAnbm9ybWFsJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBsYXllckRpbWVuc2lvbnMocGxheWVyKSB7XG4gIGxldCB3aWR0aCA9IHBsYXllci53aWR0aCgpO1xuICBsZXQgaGVpZ2h0ID0gcGxheWVyLmhlaWdodCgpO1xuXG4gIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG59XG4iLCJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG52YXIgZG9jY3k7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jY3kgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xuIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNRVRIT0RTID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJyxcbiAgICAnaW5pdEFkJyxcbiAgICAnc3RhcnRBZCcsXG4gICAgJ3N0b3BBZCcsXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXG4gICAgJ3Jlc2l6ZUFkJyxcbiAgICAncGF1c2VBZCcsXG4gICAgJ3Jlc3VtZUFkJyxcbiAgICAnZXhwYW5kQWQnLFxuICAgICdjb2xsYXBzZUFkJyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnXG5dO1xuXG52YXIgRVZFTlRTID0gW1xuICAgICdBZExvYWRlZCcsXG4gICAgJ0FkU3RhcnRlZCcsXG4gICAgJ0FkU3RvcHBlZCcsXG4gICAgJ0FkU2tpcHBlZCcsXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICdBZEltcHJlc3Npb24nLFxuICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAnQWRDbGlja1RocnUnLFxuICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICdBZFVzZXJDbG9zZScsXG4gICAgJ0FkUGF1c2VkJyxcbiAgICAnQWRQbGF5aW5nJyxcbiAgICAnQWRMb2cnLFxuICAgICdBZEVycm9yJ1xuXTtcblxudmFyIEdFVFRFUlMgPSBbXG4gICAgJ2dldEFkTGluZWFyJyxcbiAgICAnZ2V0QWRXaWR0aCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRFeHBhbmRlZCcsXG4gICAgJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxuICAgICdnZXRBZER1cmF0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRWb2x1bWUnLFxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEljb25zJyAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuXTtcblxudmFyIFNFVFRFUlMgPSBbXG4gICAgJ3NldEFkVm9sdW1lJ1xuXTtcblxuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIElWUEFJREFkVW5pdFxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gSVZQQUlEQWRVbml0KGNyZWF0aXZlLCBlbCwgdmlkZW8pIHt9XG5cblxuLyoqXG4gKiBoYW5kc2hha2VWZXJzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFZQQUlEVmVyc2lvblxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKFZQQUlEVmVyc2lvbiwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGluaXRBZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdG9wQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBza2lwQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXNpemVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHBhdXNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzdW1lQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGV4cGFuZEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBjb2xsYXBzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY29udGV4dCkge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHt9O1xuXG5cblxuLyoqXG4gKiBnZXRBZExpbmVhclxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRMaW5lYXIgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRXaWR0aFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRXaWR0aCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEhlaWdodFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRFeHBhbmRlZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRFeHBhbmRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFNraXBwYWJsZVN0YXRlXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFNraXBwYWJsZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkUmVtYWluaW5nVGltZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRHVyYXRpb24gPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkVm9sdW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkQ29tcGFuaW9uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSWNvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSWNvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ01FVEhPRFMnLCBNRVRIT0RTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ1NFVFRFUlMnLCBTRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0VWRU5UUycsICBFVkVOVFMpO1xuXG5cbnZhciBWUEFJRDFfTUVUSE9EUyA9IE1FVEhPRFMuZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XG59KTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFZQQUlEMV9NRVRIT0RTLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNyZWF0aXZlW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElWUEFJREFkVW5pdDtcblxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcmZhY2UsIG5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKTtcbnZhciBTdWJzY3JpYmVyID0gcmVxdWlyZSgnLi9zdWJzY3JpYmVyJyk7XG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIE1FVEhPRFMgPSBJVlBBSURBZFVuaXQuTUVUSE9EUztcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcbnZhciBBRF9DTElDSyA9ICdBZENsaWNrVGhydSc7XG52YXIgRklMVEVSRURfRVZFTlRTID0gSVZQQUlEQWRVbml0LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xufSk7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogVlBBSURBZFVuaXRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxdIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMuc2xvdCBpZiBkZWZpbmVkXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IFt2aWRlb10gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy52aWRlb1Nsb3QgaWYgZGVmaW5lZFxuICovXG5mdW5jdGlvbiBWUEFJREFkVW5pdChWUEFJRENyZWF0aXZlLCBlbCwgdmlkZW8sIGlmcmFtZSkge1xuICAgIHRoaXMuX2lzVmFsaWQgPSBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQ3JlYXRpdmUpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlID0gVlBBSURDcmVhdGl2ZTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgICAgICB0aGlzLl9pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgdXRpbHMuc2V0RnVsbFNpemVTdHlsZShlbCk7XG4gICAgICAgICRhZGRFdmVudHNTdWJzY3JpYmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuVlBBSURBZFVuaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJVlBBSURBZFVuaXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBpc1ZhbGlkVlBBSURBZCB3aWxsIHJldHVybiBpZiB0aGUgVlBBSURDcmVhdGl2ZSBwYXNzZWQgaW4gY29uc3RydWN0b3IgaXMgdmFsaWQgb3Igbm90XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59O1xuXG5JVlBBSURBZFVuaXQuTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIC8vTk9URTogdGhpcyBtZXRob2RzIGFyZ3VtZW50cyBvcmRlciBhcmUgaW1wbGVtZW50ZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgc3BlY1xuICAgIHZhciBpZ25vcmVzID0gW1xuICAgICAgICAnc3Vic2NyaWJlJyxcbiAgICAgICAgJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgJ2luaXRBZCdcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IChhcmlhdHkgPT09IGFyZ3MubGVuZ3RoKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cblxuLyoqXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uLCBpZiBlbCAmIHZpZGVvIHdhcyB1c2VkIGluIGNvbnN0cnVjdG9yIHNsb3QgJiB2aWRlb1Nsb3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7XG4gICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHt9O1xuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XG4gICAgICAgIHNsb3Q6IHRoaXMuX2VsLFxuICAgICAgICB2aWRlb1Nsb3Q6IHRoaXMuX3ZpZGVvRWxcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnN1YnNjcmliZShoYW5kbGVyLCBldmVudCwgY29udGV4dCk7XG59O1xuXG5cbi8qKlxuICogdW5zdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XG59O1xuXG4vL2FsaWFzXG5WUEFJREFkVW5pdC5wcm90b3R5cGUub24gPSBWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlO1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9mZiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZTtcblxuSVZQQUlEQWRVbml0LkdFVFRFUlMuZm9yRWFjaChmdW5jdGlvbihnZXR0ZXIpIHtcbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbZ2V0dGVyXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVtnZXR0ZXJdKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zZXRBZFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmUuZ2V0QWRWb2x1bWUoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHJlc3VsdCA9PT0gdm9sdW1lLCAnZmFpbGVkIHRvIGFwcGx5IHZvbHVtZTogJyArIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQWQoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZUFsbCgpO1xufTtcblxuZnVuY3Rpb24gJGFkZEV2ZW50c1N1YnNjcmliZXJzKCkge1xuICAgIC8vIHNvbWUgYWRzIGltcGxlbWVudFxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcbiAgICAvLyB0byBoYW5kbGUgdGhpcyB3ZSBjcmVhdGUgb3VyIG9uZVxuICAgIEZJTFRFUkVEX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcbiAgICAvLyBhbmQgdG8gYmUgY29uc2lzdGVudCB3aXRoIHRoZSBmbGFzaFxuICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkY2xpY2tUaHJ1SG9vay5iaW5kKHRoaXMpLCBBRF9DTElDSyk7XG5cbiAgICAvLyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAvLyB0aGUgdXNlciBpcyBub3QgYWJsZSB0byBjbGljayBpbiB0aGUgdmlkZW9cbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5faWZyYW1lLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGNsaWNrVGhydUhvb2sodXJsLCBpZCwgcGxheWVySGFuZGxlcykge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xufVxuXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xuICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+JyArXG4gICAgJzxodG1sIGxhbmc9XCJlblwiPicgK1xuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXG4gICAgJzxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcbiAgICAnd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXCd7XCJldmVudFwiOiBcInJlYWR5XCIsIFwiaWRcIjogXCJ7e2lmcmFtZUlEfX1cIn1cXCcsIFxcJ3t7b3JpZ2lufX1cXCcpOycgK1xuICAgICc8L3NjcmlwdD4nICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxuICAgICAgICB0aGlzLl9mcmFtZUNvbnRhaW5lcixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb25maWcudGVtcGxhdGUsXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XG4gICAgICAgICAgICBpZnJhbWVVUkxfSlM6IGFkVVJMLFxuICAgICAgICAgICAgaWZyYW1lSUQ6IHRoaXMuZ2V0SUQoKSxcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG5cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxuICAgICAgICB0aGlzLl92cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgb25Mb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGdldE9yaWdpbigpKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG59XG5cbmZ1bmN0aW9uICR1bmxvYWRQcmV2aW91c0FkVW5pdCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgICRkZXN0cm95QWRVbml0LmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uICRyZW1vdmVBZEVsZW1lbnRzKCkge1xuICAgICRyZW1vdmVFbC5jYWxsKHRoaXMsICdfZnJhbWUnKTtcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xufVxuXG4vKipcbiAqICRkZXN0cm95TG9hZExpc3RlbmVyXG4gKlxuICovXG5mdW5jdGlvbiAkZGVzdHJveUxvYWRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fb25Mb2FkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcbiAgICAgICAgdXRpbHMuY2xlYXJDYWxsYmFja1RpbWVvdXQodGhpcy5fb25Mb2FkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29uTG9hZDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gJGRlc3Ryb3lBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG4gICAgfVxufVxuXG4vKipcbiAqICR0aHJvd0lmRGVzdHJveWVkXG4gKlxuICovXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1ZQQUlESFRNTDVDbGllbnQgYWxyZWFkeSBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gICAgaWYoIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNUNsaWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxudmFyIHRpbWVvdXRzID0ge307XG4vKipcbiAqIGNsZWFyQ2FsbGJhY2tUaW1lb3V0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiBjbGVhckNhbGxiYWNrVGltZW91dChmdW5jKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbGJhY2tUaW1lb3V0IGlmIHRoZSBvblN1Y2Nlc3MgaXMgbm90IGNhbGxlZCBhbmQgcmV0dXJucyB0cnVlIGluIHRoZSB0aW1lbGltaXQgdGhlbiBvblRpbWVvdXQgd2lsbCBiZSBjYWxsZWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3VjY2Vzc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0W2NhbGxiYWNrXTtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRpbWVvdXRzW2NhbGxiYWNrXSA9IHRpbWVvdXQ7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cblxuLyoqXG4gKiBjcmVhdGVFbGVtZW50SW5FbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5FbChwYXJlbnQsIHRhZ05hbWUsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGlkKSBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgc2ltcGxlIHRlbXBsYXRlIHVzaW5nIHt7dmFyfX1cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICB2YXIgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHBhcmVudCwgbnVsbCwgZGF0YS56SW5kZXgpO1xuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcbiAgICByZXR1cm4gaWZyYW1lO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWUocGFyZW50LCB1cmwsIHpJbmRleCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XG4gICAgbkVsLm1hcmdpbldpZHRoID0gJzAnO1xuICAgIG5FbC5tYXJnaW5IZWlnaHQgPSAnMCc7XG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgIG5FbC53aWR0aCA9ICcxMDAlJztcbiAgICBuRWwuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHNldEZ1bGxTaXplU3R5bGUobkVsKTtcblxuICAgIGlmKHpJbmRleCl7XG4gICAgICAgIG5FbC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgfVxuXG4gICAgbkVsLnNldEF0dHJpYnV0ZSgnU0NST0xMSU5HJywnTk8nKTtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZnVuY3Rpb24gc2V0RnVsbFNpemVTdHlsZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbn1cblxuLyoqXG4gKiBzaW1wbGVUZW1wbGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSA6IGRhdGFba2V5XTtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogc2V0SWZyYW1lQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElmcmFtZUVsZW1lbnR9IGlmcmFtZUVsXG4gKiBAcGFyYW0gY29udGVudFxuICovXG5mdW5jdGlvbiBzZXRJZnJhbWVDb250ZW50KGlmcmFtZUVsLCBjb250ZW50KSB7XG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAoIWlmcmFtZURvYykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBleHRlbmQgb2JqZWN0IHdpdGgga2V5cyBmcm9tIGFub3RoZXIgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXG4gKiBAcGFyYW0ge29iamVjdH0gZnJvbVNvdXJjZVxuICovXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tU291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB0b0V4dGVuZFtrZXldID0gZnJvbVNvdXJjZVtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiB0b0V4dGVuZDtcbn1cblxuXG4vKipcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIHZhciBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnXycgKyAoKytjb3VudCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9vcDogbm9vcCxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGUsXG4gICAgY2xlYXJDYWxsYmFja1RpbWVvdXQ6IGNsZWFyQ2FsbGJhY2tUaW1lb3V0LFxuICAgIGNhbGxiYWNrVGltZW91dDogY2FsbGJhY2tUaW1lb3V0LFxuICAgIGNyZWF0ZUVsZW1lbnRJbkVsOiBjcmVhdGVFbGVtZW50SW5FbCxcbiAgICBjcmVhdGVJZnJhbWVXaXRoQ29udGVudDogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQsXG4gICAgY3JlYXRlSWZyYW1lOiBjcmVhdGVJZnJhbWUsXG4gICAgc2V0RnVsbFNpemVTdHlsZTogc2V0RnVsbFNpemVTdHlsZSxcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXG4gICAgc2V0SWZyYW1lQ29udGVudDogc2V0SWZyYW1lQ29udGVudCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB1bmlxdWU6IHVuaXF1ZVxufTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB2aWRlb2pzOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcbmltcG9ydCB7VkFTVENsaWVudCwgVkFTVFBhcnNlciwgVkFTVFRyYWNrZXJ9IGZyb20gJ0BkYWlseW1vdGlvbi92YXN0LWNsaWVudCc7XG5pbXBvcnQgaGFuZGxlVlBBSUQgZnJvbSAndnBhaWQtaGFuZGxlcic7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5jb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbigncGx1Z2luJyk7XG5cbi8qKlxuICogQ3JlYXRlIFNvdXJjZSBPYmplY3RzXG4gKlxuICogQHBhcmFtIHtBcnJheTxNZWRpYUZpbGU+fSBtZWRpYUZpbGVzICBBcnJheSBvZiBtZWRpYSBmaWxlc1xuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHNvdXJjZSBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZU9iamVjdHMobWVkaWFGaWxlcykge1xuICByZXR1cm4gbWVkaWFGaWxlcy5tYXAobWVkaWFGaWxlID0+ICh7dHlwZTogbWVkaWFGaWxlLm1pbWVUeXBlLCBzcmM6IG1lZGlhRmlsZS5maWxlVVJMfSkpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgVkFTVCBjcmVhdGl2ZSBoYXMgYSBWUEFJRCBtZWRpYSBmaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNyZWF0aXZlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzVlBBSUQoY3JlYXRpdmUpIHtcbiAgY29uc3QgbWVkaWFGaWxlcyA9IGNyZWF0aXZlLm1lZGlhRmlsZXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYUZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1lZGlhRmlsZXNbaV0uYXBpRnJhbWV3b3JrICYmIG1lZGlhRmlsZXNbaV0uYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYWRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkb0FsbExpbmVhckNyZWF0aXZlc1JlcXVpcmVBcGlGcmFtZXdvcmsoYWQpIHtcbiAgcmV0dXJuIGFkLmNyZWF0aXZlc1xuICAgIC5ldmVyeShjcmVhdGl2ZSA9PiBkb2VzQ3JlYXRpdmVSZXF1aXJlQXBpRnJhbWV3b3JrKGNyZWF0aXZlKSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjcmVhdGl2ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRvZXNDcmVhdGl2ZVJlcXVpcmVBcGlGcmFtZXdvcmsoY3JlYXRpdmUpIHtcbiAgcmV0dXJuIGNyZWF0aXZlLm1lZGlhRmlsZXMuZXZlcnkobWVkaWFGaWxlID0+IG1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2tpcEJ1dHRvbkVsZW1lbnRcbiAqL1xuY29uc3QgaXNTa2lwRW5hYmxlZCA9IChza2lwQnV0dG9uRWxlbWVudCkgPT4gKCcgJyArIHNraXBCdXR0b25FbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIGVuYWJsZWQgJykgPiAtMTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2tpcEJ1dHRvbkVsZW1lbnRcbiAqL1xuY29uc3QgZW5hYmxlU2tpcCA9IChza2lwQnV0dG9uRWxlbWVudCkgPT4ge1xuICBpZiAoIWlzU2tpcEVuYWJsZWQoc2tpcEJ1dHRvbkVsZW1lbnQpKSB7XG4gICAgc2tpcEJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lICs9ICcgZW5hYmxlZCAnO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBza2lwQnV0dG9uRWxlbWVudFxuICovXG5jb25zdCBkaXNhYmxlU2tpcCA9IChza2lwQnV0dG9uRWxlbWVudCkgPT4ge1xuICBpZiAoaXNTa2lwRW5hYmxlZChza2lwQnV0dG9uRWxlbWVudCkpIHtcbiAgICBza2lwQnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPVxuICAgICAgc2tpcEJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoJyBlbmFibGVkICcsICcnKTtcbiAgfVxufTtcblxuY29uc3QgbGluZWFyRm4gPSBjcmVhdGl2ZSA9PiBjcmVhdGl2ZS50eXBlID09PSAnbGluZWFyJyAmJiBjcmVhdGl2ZS5tZWRpYUZpbGVzLmxlbmd0aDtcbmNvbnN0IGNvbXBhbmlvbkZuID0gY3JlYXRpdmUgPT4gY3JlYXRpdmUudHlwZSA9PT0gJ2NvbXBhbmlvbic7XG5cbi8qKlxuICogSG9sZHMgcmVsYXRlZCB0cmFja2VycyB0b2dldGhlci5cbiAqIEFuZCBmcm9tIGEgdHJhY2tlciwgd2UgY2FuIGFjY2VzcyB0aGUgYWQsIGNyZWF0aXZlIGFuZCB2YXJpYXRpb24uXG4gKi9cbmNsYXNzIEdyb3VwZWRUcmFja2VycyB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1ZBU1RUcmFja2VyfSBsaW5lYXJBZFRyYWNrZXJcbiAgICogQHBhcmFtIHtWQVNUVHJhY2tlcn0gY29tcGFuaW9uVHJhY2tlclxuICAgKi9cbiAgY29uc3RydWN0b3IobGluZWFyQWRUcmFja2VyLCBjb21wYW5pb25UcmFja2VyKSB7XG4gICAgdGhpcy5saW5lYXJBZFRyYWNrZXIgPSBsaW5lYXJBZFRyYWNrZXI7XG4gICAgdGhpcy5jb21wYW5pb25UcmFja2VyID0gY29tcGFuaW9uVHJhY2tlcjtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2Vla0VuYWJsZWQ6IGZhbHNlLFxuICBjb250cm9sc0VuYWJsZWQ6IGZhbHNlLFxuICB3cmFwcGVyTGltaXQ6IDEwLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gIHNraXA6IDAsXG4gIHZwYWlkOiB7XG4gICAgY29udGFpbmVySWQ6IHVuZGVmaW5lZCxcbiAgICBjb250YWluZXJDbGFzczogJ3Zqcy12cGFpZC1jb250YWluZXInLFxuICAgIHZpZGVvSW5zdGFuY2U6ICdub25lJ1xuICB9LFxuICBjb21wYW5pb246IHtcbiAgICBlbGVtZW50SWQ6IG51bGwsXG4gICAgbWF4V2lkdGg6IDAsXG4gICAgbWF4SGVpZ2h0OiAwXG4gIH1cbn07XG5cbi8qKlxuICogVmFzdFBsdWdpblxuICovXG5jbGFzcyBWYXN0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgUGx1Z2luIGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIocGxheWVyKTtcblxuICAgIC8vIENvdWxkIGJlIGluaXRpYWxpemVkIGFscmVhZHkgYnkgdXNlclxuICAgIGlmICh0eXBlb2YgcGxheWVyLmFkcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGxheWVyLmFkcyh7ZGVidWc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtPYmplY3R9ICovXG4gICAgdGhpcy5vcHRpb25zID0gdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuICAgIC8qKiBAdHlwZSB7VkFTVENsaWVudH0gKi9cbiAgICB0aGlzLnZhc3RDbGllbnQgPSBuZXcgVkFTVENsaWVudCgpO1xuICAgIC8qKiBAdHlwZSB7T2JqZWN0fSAqL1xuICAgIHRoaXMub3JpZ2luYWxQbGF5ZXJTdGF0ZSA9IHt9O1xuICAgIC8qKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gKi9cbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gICAgLyoqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgSFRNTEVsZW1lbnQ+fSAqL1xuICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7fTtcbiAgICAvKiogQHR5cGUge0dyb3VwZWRUcmFja2Vyc1tdfSAqL1xuICAgIHRoaXMudHJhY2tlcnMgPSBbXTtcbiAgICAvKiogQHR5cGUge0dyb3VwZWRUcmFja2Vyc3xudWxsfSAqL1xuICAgIHRoaXMudHJhY2tlciA9IG51bGw7XG5cbiAgICBwbGF5ZXIub24oJ3JlYWR5Zm9ycHJlcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrZXJzID0gdGhpcy50cmFja2VycztcblxuICAgICAgaWYgKHRyYWNrZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBsaW5lYXJBZFRyYWNrZXIgPSB0cmFja2Vyc1swXS5saW5lYXJBZFRyYWNrZXI7XG4gICAgICAgIGNvbnN0IGNyZWF0aXZlID0gbGluZWFyQWRUcmFja2VyLmNyZWF0aXZlO1xuXG4gICAgICAgIGlmIChjcmVhdGl2ZS50eXBlID09PSAnbGluZWFyJykge1xuICAgICAgICAgIGlmIChkb2VzQ3JlYXRpdmVSZXF1aXJlQXBpRnJhbWV3b3JrKGNyZWF0aXZlKSkge1xuICAgICAgICAgICAgaWYgKGhhc1ZQQUlEKGNyZWF0aXZlKSkge1xuICAgICAgICAgICAgICBoYW5kbGVWUEFJRChwbGF5ZXIsIGxpbmVhckFkVHJhY2tlciwgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignYWRzY2FuY2VsZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIudHJpZ2dlcignYWRzY2FuY2VsZWQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXJ0UHJlcm9sbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZ2V0VmFzdENvbnRlbnQoKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5faGFuZGxlVmFzdChyZXMpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMucGxheWVyLnRyaWdnZXIoJ2Fkc2NhbmNlbGVkJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIHRoaXMucGxheWVyLmxvZyhgQWQgY2FuY2VsbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHZhc3RSZXNwb25zZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZVZhc3QodmFzdFJlc3BvbnNlKSB7XG4gICAgaWYgKCF2YXN0UmVzcG9uc2UuYWRzIHx8IHZhc3RSZXNwb25zZS5hZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdhZHNjYW5jZWxlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkc1dpdGhMaW5lYXIgPSB2YXN0UmVzcG9uc2UuYWRzXG4gICAgICAuZmlsdGVyKGFkID0+IGFkLmNyZWF0aXZlcy5zb21lKGxpbmVhckZuKSk7XG5cbiAgICBpZiAoIWFkc1dpdGhMaW5lYXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdhZHNjYW5jZWxlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkUG9kID0gYWRzV2l0aExpbmVhclxuICAgICAgLmZpbHRlcihhZCA9PiBhZC5zZXF1ZW5jZSlcbiAgICAgIC8vIFRPRE86IHN1cHBvcnQgVlBBSUQgaW4gYWQgcG9kcz9cbiAgICAgIC5maWx0ZXIoYWQgPT4gIWRvQWxsTGluZWFyQ3JlYXRpdmVzUmVxdWlyZUFwaUZyYW1ld29yayhhZCkpXG4gICAgICAuc29ydCgoYWQxLCBhZDIpID0+IGFkMS5zZXF1ZW5jZSAtIGFkMi5zZXF1ZW5jZSk7XG5cbiAgICBjb25zdCBzdGFuZGFsb25lQWRzID0gYWRzV2l0aExpbmVhci5maWx0ZXIoYWQgPT4gIWFkUG9kLmluY2x1ZGVzKGFkKSk7XG5cbiAgICBpZiAoYWRQb2QubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyYWNrZXJzID0gYWRQb2QubWFwKGFkID0+IHRoaXMuX2NyZWF0ZUdyb3VwZWRUcmFja2VycyhhZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbYWRdID0gc3RhbmRhbG9uZUFkcztcblxuICAgICAgdGhpcy50cmFja2VycyA9IFt0aGlzLl9jcmVhdGVHcm91cGVkVHJhY2tlcnMoYWQpXTtcbiAgICB9XG5cbiAgICB0aGlzLnBsYXllci50cmlnZ2VyKCdhZHNyZWFkeScpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhZFxuICAgKiBAcmV0dXJucyB7R3JvdXBlZFRyYWNrZXJzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZUdyb3VwZWRUcmFja2VycyhhZCkge1xuICAgIGNvbnN0IG9uQ2xpY2tUaHJvdWdoID0gKHVybCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmVhckFkVHJhY2tlciA9XG4gICAgICBuZXcgVkFTVFRyYWNrZXIodGhpcy52YXN0Q2xpZW50LCBhZCwgYWQuY3JlYXRpdmVzLmZpbmQobGluZWFyRm4pLCBhZC5jcmVhdGl2ZXMuZmluZChjb21wYW5pb25GbikpO1xuXG4gICAgbGluZWFyQWRUcmFja2VyLm9uKCdjbGlja3Rocm91Z2gnLCBvbkNsaWNrVGhyb3VnaCk7XG5cbiAgICBsZXQgY29tcGFuaW9uQWRUcmFja2VyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbXBhbmlvbkNyZWF0aXZlID0gYWQuY3JlYXRpdmVzLmZpbmQoY29tcGFuaW9uRm4pO1xuXG4gICAgaWYgKGNvbXBhbmlvbkNyZWF0aXZlKSB7XG4gICAgICAvLyBKdXN0IHBpY2sgdGhlIGZpcnN0IHN1aXRhYmxlIGNvbXBhbmlvbiBhZCBmb3Igbm93XG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgdmFyaWF0aW9uID0gY29tcGFuaW9uQ3JlYXRpdmUudmFyaWF0aW9uc1xuICAgICAgICAuZmlsdGVyKHYgPT4gdi5zdGF0aWNSZXNvdXJjZSlcbiAgICAgICAgLmZpbHRlcih2ID0+IHYudHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKVxuICAgICAgICAuZmluZCh2ID0+IHBhcnNlSW50KHYud2lkdGgsIDEwKSA8PSBvcHRpb25zLmNvbXBhbmlvbi5tYXhXaWR0aCAmJiBwYXJzZUludCh2LmhlaWdodCwgMTApIDw9IG9wdGlvbnMuY29tcGFuaW9uLm1heEhlaWdodCk7XG5cbiAgICAgIGlmICh2YXJpYXRpb24pIHtcbiAgICAgICAgY29tcGFuaW9uQWRUcmFja2VyID0gbmV3IFZBU1RUcmFja2VyKHRoaXMudmFzdENsaWVudCwgYWQsIGNvbXBhbmlvbkNyZWF0aXZlLCB2YXJpYXRpb24pO1xuICAgICAgICBjb21wYW5pb25BZFRyYWNrZXIub24oJ2NsaWNrdGhyb3VnaCcsIG9uQ2xpY2tUaHJvdWdoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEdyb3VwZWRUcmFja2VycyhsaW5lYXJBZFRyYWNrZXIsIGNvbXBhbmlvbkFkVHJhY2tlcik7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Q29tcGFuaW9uKCkge1xuICAgIGNvbnN0IGNvbXBhbmlvblRyYWNrZXIgPSB0aGlzLnRyYWNrZXIuY29tcGFuaW9uVHJhY2tlcjtcbiAgICBjb25zdCBkZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmNvbXBhbmlvbi5lbGVtZW50SWQpO1xuXG4gICAgaWYgKGNvbXBhbmlvblRyYWNrZXIgJiYgY29tcGFuaW9uVHJhY2tlci52YXJpYXRpb24gJiYgZGVzdCkge1xuICAgICAgY29uc3QgdmFyaWF0aW9uID0gY29tcGFuaW9uVHJhY2tlci52YXJpYXRpb247XG5cbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbXBhbmlvblRyYWNrZXIuY2xpY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGh5cGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgaHlwZXJMaW5rLnNyYyA9ICcjJztcbiAgICAgIGh5cGVyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuXG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICBpbWFnZS5zcmMgPSB2YXJpYXRpb24uc3RhdGljUmVzb3VyY2U7XG5cbiAgICAgIGh5cGVyTGluay5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgIGRlc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkZXN0LmFwcGVuZENoaWxkKGh5cGVyTGluayk7XG4gICAgfSBlbHNlIGlmIChkZXN0KSB7XG4gICAgICAvLyBUT0RPOiBvcHRpb24gdG8gcmVtb3ZlIGxhc3QgY29tcGFuaW9uIGFkIHdoZW4gY29udGVudCBwbGF5cz9cbiAgICAgIGRlc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBWYXN0IENvbnRlbnRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRWYXN0Q29udGVudCgpIHtcbiAgICBjb25zdCB7dXJsLCB4bWx9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKHVybCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFzdENsaWVudC5nZXQodXJsLCB7d2l0aENyZWRlbnRpYWxzOiB0aGlzLm9wdGlvbnMud2l0aENyZWRlbnRpYWxzLCB3cmFwcGVyTGltaXQ6IHRoaXMub3B0aW9ucy53cmFwcGVyTGltaXR9KTtcbiAgICB9IGVsc2UgaWYgKHhtbCkge1xuICAgICAgY29uc3QgdmFzdFBhcnNlciA9IG5ldyBWQVNUUGFyc2VyKCk7XG5cbiAgICAgIGxldCB4bWxEb2N1bWVudDtcblxuICAgICAgaWYgKHhtbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LlhNTERvY3VtZW50KSB7XG4gICAgICAgIHhtbERvY3VtZW50ID0geG1sO1xuICAgICAgfSBlbHNlIGlmICh4bWwuY29uc3RydWN0b3IgPT09IFN0cmluZykge1xuICAgICAgICB4bWxEb2N1bWVudCA9IChuZXcgd2luZG93LkRPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoeG1sLCAndGV4dC94bWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneG1sIGNvbmZpZyBvcHRpb24gbXVzdCBiZSBhIFN0cmluZyBvciBYTUxEb2N1bWVudCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFzdFBhcnNlci5wYXJzZVZBU1QoeG1sRG9jdW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3VybCBvciB4bWwgb3B0aW9uIG5vdCBzZXQnKSk7XG4gIH1cblxuICAvKipcbiAgICogRG8gUHJlLXJvbGxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdGFydFByZXJvbGwoKSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgIHBsYXllci5hZHMuc3RhcnRMaW5lYXJBZE1vZGUoKTtcblxuICAgIHRoaXMub3JpZ2luYWxQbGF5ZXJTdGF0ZS5jb250cm9sc0VuYWJsZWQgPSBwbGF5ZXIuY29udHJvbHMoKTtcbiAgICBwbGF5ZXIuY29udHJvbHMob3B0aW9ucy5jb250cm9sc0VuYWJsZWQpO1xuXG4gICAgdGhpcy5vcmlnaW5hbFBsYXllclN0YXRlLnNlZWtFbmFibGVkID0gcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sLmVuYWJsZWQoKTtcbiAgICBpZiAob3B0aW9ucy5zZWVrRW5hYmxlZCkge1xuICAgICAgcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBibG9ja2VyLmNsYXNzTmFtZSA9ICd2YXN0LWJsb2NrZXInO1xuICAgIGJsb2NrZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFja2VyLmxpbmVhckFkVHJhY2tlci5jbGljaygpO1xuICAgIH07XG5cbiAgICB0aGlzLmRvbUVsZW1lbnRzLmJsb2NrZXIgPSBibG9ja2VyO1xuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcblxuICAgIGNvbnN0IHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBza2lwQnV0dG9uLmNsYXNzTmFtZSA9ICd2YXN0LXNraXAtYnV0dG9uJztcbiAgICBza2lwQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5kb21FbGVtZW50cy5za2lwQnV0dG9uID0gc2tpcEJ1dHRvbjtcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcblxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuYWR0aW1ldXBkYXRlID0gKCkgPT4gdGhpcy5fdGltZVVwZGF0ZSgpO1xuICAgIHBsYXllci5vbmUoJ2FkcGxheScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2tpcCA+IDAgJiYgcGxheWVyLmR1cmF0aW9uKCkgPj0gdGhpcy5vcHRpb25zLnNraXApIHtcbiAgICAgICAgc2tpcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcGxheWVyLm9uKCdhZHRpbWV1cGRhdGUnLCB0aGlzLmV2ZW50TGlzdGVuZXJzLmFkdGltZXVwZGF0ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXllci5sb2FkaW5nU3Bpbm5lci5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnRlYXJkb3duID0gKCkgPT4gdGhpcy5fZW5kUHJlcm9sbCgpO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGlmICgoJyAnICsgc2tpcEJ1dHRvbi5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyBlbmFibGVkICcpID49IDApIHtcbiAgICAgICAgdGhpcy50cmFja2VyLmxpbmVhckFkVHJhY2tlci5za2lwKCk7XG4gICAgICAgIHRoaXMuX3BsYXlOZXh0VHJhY2tlZEFkKCk7XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xuXG4gICAgdGhpcy5fcGxheU5leHRUcmFja2VkQWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3BsYXlOZXh0VHJhY2tlZEFkKCkge1xuICAgIGNvbnN0IG5leHRUcmFja2VyID0gdGhpcy50cmFja2Vycy5zaGlmdCgpO1xuXG4gICAgaWYgKG5leHRUcmFja2VyKSB7XG4gICAgICB0aGlzLnRyYWNrZXIgPSBuZXh0VHJhY2tlcjtcbiAgICAgIHRoaXMucGxheWVyLnNyYyhjcmVhdGVTb3VyY2VPYmplY3RzKHRoaXMudHJhY2tlci5saW5lYXJBZFRyYWNrZXIuY3JlYXRpdmUubWVkaWFGaWxlcykpO1xuICAgICAgdGhpcy5fc2hvd0NvbXBhbmlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnRlYXJkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRpbWUgVXBkYXRlXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdGltZVVwZGF0ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICAgIHBsYXllci5sb2FkaW5nU3Bpbm5lci5lbCgpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBjb25zdCB0aW1lTGVmdCA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuc2tpcCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcblxuICAgIGNvbnN0IHNraXBCdXR0b25FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50cy5za2lwQnV0dG9uO1xuXG4gICAgaWYgKHRpbWVMZWZ0ID4gMCkge1xuICAgICAgZGlzYWJsZVNraXAoc2tpcEJ1dHRvbkVsZW1lbnQpO1xuICAgICAgdGhpcy5kb21FbGVtZW50cy5za2lwQnV0dG9uLmlubmVySFRNTCA9ICdTa2lwIGluICcgKyB0aW1lTGVmdCArICcuLi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmFibGVTa2lwKHNraXBCdXR0b25FbGVtZW50KTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMuc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSAnU2tpcCc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlYXIgRG93blxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2VuZFByZXJvbGwoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRvbUVsZW1lbnRzKVxuICAgICAgLmZpbHRlcihlbCA9PiBlbC5wYXJlbnROb2RlKVxuICAgICAgLmZvckVhY2goZWwgPT4gZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCkpO1xuXG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgICBwbGF5ZXIub2ZmKCdhZHRpbWV1cGRhdGUnLCB0aGlzLmV2ZW50TGlzdGVuZXJzLmFkdGltZXVwZGF0ZSk7XG5cbiAgICBwbGF5ZXIuYWRzLmVuZExpbmVhckFkTW9kZSgpO1xuXG4gICAgcGxheWVyLmNvbnRyb2xzKHRoaXMub3JpZ2luYWxQbGF5ZXJTdGF0ZS5jb250cm9sc0VuYWJsZWQpO1xuXG4gICAgaWYgKHRoaXMub3JpZ2luYWxQbGF5ZXJTdGF0ZS5zZWVrRW5hYmxlZCkge1xuICAgICAgcGxheWVyLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LWRvbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBFdmVudHNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXR1cEV2ZW50cygpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICBjb25zdCB0aGlzUGx1Z2luID0gdGhpcztcblxuICAgIGNvbnN0IGFkUGxheUZuID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzUGx1Z2luLnRyYWNrZXIubGluZWFyQWRUcmFja2VyLnRyYWNrSW1wcmVzc2lvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1ldXBkYXRlRm4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChpc05hTih0aGlzUGx1Z2luLnRyYWNrZXIubGluZWFyQWRUcmFja2VyLmFzc2V0RHVyYXRpb24pKSB7XG4gICAgICAgIHRoaXNQbHVnaW4udHJhY2tlci5saW5lYXJBZFRyYWNrZXIuYXNzZXREdXJhdGlvbiA9IHBsYXllci5kdXJhdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpc1BsdWdpbi50cmFja2VyLmxpbmVhckFkVHJhY2tlci5zZXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhdXNlRm4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChwbGF5ZXIucmVtYWluaW5nVGltZSgpID4gMCkge1xuICAgICAgICB0aGlzUGx1Z2luLnRyYWNrZXIubGluZWFyQWRUcmFja2VyLnNldFBhdXNlZCh0cnVlKTtcbiAgICAgICAgcGxheWVyLm9uZSgnYWRwbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpc1BsdWdpbi50cmFja2VyLmxpbmVhckFkVHJhY2tlci5zZXRQYXVzZWQoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYXJnczogZXJyXG4gICAgY29uc3QgYWRFcnJvckZuID0gKCkgPT4ge1xuICAgICAgY29uc3QgTUVESUFGSUxFX1BMQVlCQUNLX0VSUk9SID0gJzQwNSc7XG5cbiAgICAgIHRoaXNQbHVnaW4udHJhY2tlci5saW5lYXJBZFRyYWNrZXIuZXJyb3JXaXRoQ29kZShNRURJQUZJTEVfUExBWUJBQ0tfRVJST1IpO1xuICAgICAgLy8gRG8gbm90IHdhbnQgdG8gc2hvdyBWQVNUIHJlbGF0ZWQgZXJyb3JzIHRvIHRoZSB1c2VyXG4gICAgICBwbGF5ZXIuZXJyb3IobnVsbCk7XG4gICAgICB0aGlzLl9wbGF5TmV4dFRyYWNrZWRBZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBmdWxsU2NyZWVuRm4gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGZvciAnZnVsbHNjcmVlbicgJiAnZXhpdGZ1bGxzY3JlZW4nXG4gICAgICB0aGlzUGx1Z2luLnRyYWNrZXIubGluZWFyQWRUcmFja2VyLnNldEZ1bGxzY3JlZW4ocGxheWVyLmlzRnVsbHNjcmVlbigpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbXV0ZUZuID0gKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHByZXZpb3VzTXV0ZWQgPSBwbGF5ZXIubXV0ZWQoKTtcbiAgICAgIGxldCBwcmV2aW91c1ZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB2b2x1bWVOb3cgPSBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICAgIGNvbnN0IG11dGVkTm93ID0gcGxheWVyLm11dGVkKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzTXV0ZWQgIT09IG11dGVkTm93KSB7XG4gICAgICAgICAgdGhpc1BsdWdpbi50cmFja2VyLmxpbmVhckFkVHJhY2tlci5zZXRNdXRlZChtdXRlZE5vdyk7XG4gICAgICAgICAgcHJldmlvdXNNdXRlZCA9IG11dGVkTm93O1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzVm9sdW1lICE9PSB2b2x1bWVOb3cpIHtcbiAgICAgICAgICBpZiAocHJldmlvdXNWb2x1bWUgPiAwICYmIHZvbHVtZU5vdyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpc1BsdWdpbi50cmFja2VyLmxpbmVhckFkVHJhY2tlci5zZXRNdXRlZCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzVm9sdW1lID09PSAwICYmIHZvbHVtZU5vdyA+IDApIHtcbiAgICAgICAgICAgIHRoaXNQbHVnaW4udHJhY2tlci5saW5lYXJBZFRyYWNrZXIuc2V0TXV0ZWQoZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByZXZpb3VzVm9sdW1lID0gdm9sdW1lTm93O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBhZEVuZGVkRm4gPSAoKSA9PiB7XG4gICAgICAvLyBBZCBlbmRlZCwgbm90IHNraXBwZWRcbiAgICAgIHRoaXNQbHVnaW4udHJhY2tlci5saW5lYXJBZFRyYWNrZXIuY29tcGxldGUoKTtcbiAgICAgIHRoaXNQbHVnaW4uX3BsYXlOZXh0VHJhY2tlZEFkKCk7XG4gICAgfTtcblxuICAgIHBsYXllci5vbignYWRlbmRlZCcsIGFkRW5kZWRGbik7XG4gICAgcGxheWVyLm9uKCdhZHBsYXknLCBhZFBsYXlGbik7XG4gICAgcGxheWVyLm9uKCdhZHRpbWV1cGRhdGUnLCB0aW1ldXBkYXRlRm4pO1xuICAgIHBsYXllci5vbignYWRwYXVzZScsIHBhdXNlRm4pO1xuICAgIHBsYXllci5vbignYWRlcnJvcicsIGFkRXJyb3JGbik7XG4gICAgcGxheWVyLm9uKCdhZHZvbHVtZWNoYW5nZScsIG11dGVGbik7XG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgZnVsbFNjcmVlbkZuKTtcblxuICAgIHBsYXllci5vbmUoJ3Zhc3QtZG9uZScsIGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLm9mZignYWRwbGF5JywgYWRQbGF5Rm4pO1xuICAgICAgcGxheWVyLm9mZignYWR0aW1ldXBkYXRlJywgdGltZXVwZGF0ZUZuKTtcbiAgICAgIHBsYXllci5vZmYoJ2FkcGF1c2UnLCBwYXVzZUZuKTtcbiAgICAgIHBsYXllci5vZmYoJ2FkZXJyb3InLCBhZEVycm9yRm4pO1xuICAgICAgcGxheWVyLm9mZignYWR2b2x1bWVjaGFuZ2UnLCBtdXRlRm4pO1xuICAgICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIGZ1bGxTY3JlZW5Gbik7XG4gICAgICBwbGF5ZXIub2ZmKCdhZGVuZGVkJywgYWRFbmRlZEZuKTtcbiAgICB9KTtcbiAgfVxufVxuXG52aWRlb2pzLnJlZ2lzdGVyUGx1Z2luKCd2YXN0JywgVmFzdFBsdWdpbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVlBBSURIVE1MNUNsaWVudCIsIndpbmRvdyIsImRvY3VtZW50IiwiaGFuZGxlVlBBSUQiLCJwbGF5ZXIiLCJ0cmFja2VyIiwib3B0aW9ucyIsImNyZWF0aXZlIiwidmFsaWRUeXBlcyIsInZhbGlkTWltZSIsIm1lZGlhRmlsZSIsImluZGV4T2YiLCJtaW1lVHlwZSIsInRyaW0iLCJ2cGFpZE1lZGlhRmlsZSIsIm1lZGlhRmlsZXMiLCJmaW5kIiwiYXBpRnJhbWV3b3JrIiwid2FybiIsInRyaWdnZXIiLCJ0ZWNoU2NyZWVuIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwidnBhaWRDb250YWluZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInZwYWlkIiwiY29udGFpbmVyQ2xhc3MiLCJpZCIsImNvbnRhaW5lcklkIiwiaW5zZXJ0QmVmb3JlIiwiY29udHJvbEJhciIsInZwYWlkQ2xpZW50IiwiYWRzIiwic3RhcnRMaW5lYXJBZE1vZGUiLCJwYXVzZSIsImhpZGUiLCJsb2FkQWRVbml0IiwiZmlsZVVSTCIsIm9uTG9hZCIsImVyciIsImFkVW5pdCIsImVycm9yIiwic2hvdyIsImhhbmRzaGFrZVZlcnNpb24iLCJvbkhhbmRTaGFrZSIsInN1YnNjcmliZSIsIm9uQWRMb2FkZWQiLCJvbkFkU3RhcnRlZCIsIm9uQWRTdG9wcGVkIiwidmlkZW9FbGVtZW50IiwiaW5pdGlhbERpbWVuc2lvbnMiLCJnZXRQbGF5ZXJEaW1lbnNpb25zIiwiY3JlYXRpdmVEYXRhIiwiQWRQYXJhbWV0ZXJzIiwiYWRQYXJhbWV0ZXJzIiwidmlkZW9JbnN0YW5jZSIsInRlY2giLCJraW5kYUtub3dXaGF0SW1Eb2luZyIsInN0eWxlIiwiY3NzVGV4dCIsImFwcGVuZENoaWxkIiwiZW52aXJvbm1lbnRWYXJzIiwic2xvdCIsInZpZGVvU2xvdCIsImluaXRBZCIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnRBZCIsIm9uIiwicmVzaXplQWQiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhY2tJbXByZXNzaW9uIiwiZGVzdHJveSIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmRMaW5lYXJBZE1vZGUiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJuZXdEaW1lbnNpb25zIiwiaXNGdWxsc2NyZWVuIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidmlkZW9qcyIsIlZBU1RDbGllbnQiLCJWQVNUUGFyc2VyIiwiVkFTVFRyYWNrZXIiLCJQbHVnaW4iLCJnZXRQbHVnaW4iLCJjcmVhdGVTb3VyY2VPYmplY3RzIiwibWFwIiwidHlwZSIsInNyYyIsImhhc1ZQQUlEIiwiaSIsImxlbmd0aCIsImRvQWxsTGluZWFyQ3JlYXRpdmVzUmVxdWlyZUFwaUZyYW1ld29yayIsImFkIiwiY3JlYXRpdmVzIiwiZXZlcnkiLCJkb2VzQ3JlYXRpdmVSZXF1aXJlQXBpRnJhbWV3b3JrIiwiaXNTa2lwRW5hYmxlZCIsInNraXBCdXR0b25FbGVtZW50IiwiZW5hYmxlU2tpcCIsImRpc2FibGVTa2lwIiwicmVwbGFjZSIsImxpbmVhckZuIiwiY29tcGFuaW9uRm4iLCJHcm91cGVkVHJhY2tlcnMiLCJjb25zdHJ1Y3RvciIsImxpbmVhckFkVHJhY2tlciIsImNvbXBhbmlvblRyYWNrZXIiLCJkZWZhdWx0T3B0aW9ucyIsInNlZWtFbmFibGVkIiwiY29udHJvbHNFbmFibGVkIiwid3JhcHBlckxpbWl0Iiwid2l0aENyZWRlbnRpYWxzIiwic2tpcCIsInVuZGVmaW5lZCIsImNvbXBhbmlvbiIsImVsZW1lbnRJZCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiVmFzdFBsdWdpbiIsImRlYnVnIiwibWVyZ2VPcHRpb25zIiwidmFzdENsaWVudCIsIm9yaWdpbmFsUGxheWVyU3RhdGUiLCJldmVudExpc3RlbmVycyIsImRvbUVsZW1lbnRzIiwidHJhY2tlcnMiLCJfc3RhcnRQcmVyb2xsIiwiX2dldFZhc3RDb250ZW50IiwidGhlbiIsInJlcyIsIl9oYW5kbGVWYXN0IiwiY2F0Y2giLCJsb2ciLCJtZXNzYWdlIiwidmFzdFJlc3BvbnNlIiwiYWRzV2l0aExpbmVhciIsImZpbHRlciIsInNvbWUiLCJhZFBvZCIsInNlcXVlbmNlIiwic29ydCIsImFkMSIsImFkMiIsInN0YW5kYWxvbmVBZHMiLCJpbmNsdWRlcyIsIl9jcmVhdGVHcm91cGVkVHJhY2tlcnMiLCJvbkNsaWNrVGhyb3VnaCIsInVybCIsIm9wZW4iLCJjb21wYW5pb25BZFRyYWNrZXIiLCJjb21wYW5pb25DcmVhdGl2ZSIsInZhcmlhdGlvbiIsInZhcmlhdGlvbnMiLCJ2Iiwic3RhdGljUmVzb3VyY2UiLCJwYXJzZUludCIsIl9zaG93Q29tcGFuaW9uIiwiZGVzdCIsImdldEVsZW1lbnRCeUlkIiwib25DbGljayIsImNsaWNrIiwiaHlwZXJMaW5rIiwiaW1hZ2UiLCJpbm5lckhUTUwiLCJ4bWwiLCJnZXQiLCJ2YXN0UGFyc2VyIiwieG1sRG9jdW1lbnQiLCJYTUxEb2N1bWVudCIsIlN0cmluZyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIkVycm9yIiwicGFyc2VWQVNUIiwiUHJvbWlzZSIsInJlamVjdCIsImNvbnRyb2xzIiwicHJvZ3Jlc3NDb250cm9sIiwiZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJibG9ja2VyIiwib25jbGljayIsInBhdXNlZCIsInBsYXkiLCJza2lwQnV0dG9uIiwiZGlzcGxheSIsImFkdGltZXVwZGF0ZSIsIl90aW1lVXBkYXRlIiwib25lIiwiZHVyYXRpb24iLCJsb2FkaW5nU3Bpbm5lciIsInRlYXJkb3duIiwiX2VuZFByZXJvbGwiLCJlIiwiX3BsYXlOZXh0VHJhY2tlZEFkIiwiRXZlbnQiLCJwcm90b3R5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJfc2V0dXBFdmVudHMiLCJuZXh0VHJhY2tlciIsInNoaWZ0IiwidGltZUxlZnQiLCJNYXRoIiwiY2VpbCIsImN1cnJlbnRUaW1lIiwiT2JqZWN0IiwidmFsdWVzIiwicGFyZW50Tm9kZSIsImZvckVhY2giLCJ0aGlzUGx1Z2luIiwiYWRQbGF5Rm4iLCJ0aW1ldXBkYXRlRm4iLCJpc05hTiIsImFzc2V0RHVyYXRpb24iLCJzZXRQcm9ncmVzcyIsInBhdXNlRm4iLCJyZW1haW5pbmdUaW1lIiwic2V0UGF1c2VkIiwiYWRFcnJvckZuIiwiTUVESUFGSUxFX1BMQVlCQUNLX0VSUk9SIiwiZXJyb3JXaXRoQ29kZSIsImZ1bGxTY3JlZW5GbiIsInNldEZ1bGxzY3JlZW4iLCJtdXRlRm4iLCJwcmV2aW91c011dGVkIiwibXV0ZWQiLCJwcmV2aW91c1ZvbHVtZSIsInZvbHVtZSIsInZvbHVtZU5vdyIsIm11dGVkTm93Iiwic2V0TXV0ZWQiLCJhZEVuZGVkRm4iLCJjb21wbGV0ZSIsInJlZ2lzdGVyUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==