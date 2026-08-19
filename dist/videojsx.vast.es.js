import { default as __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__ } from "video.js";
/******/ var __webpack_modules__ = ({

/***/ 976
(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,(function(e){"use strict";function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=u(e);if(t){var n=u(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}function h(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adId:e.adId||null,sequence:e.sequence||null,apiFramework:e.apiFramework||null,universalAdIds:[],creativeExtensions:[]}}var m=["ADCATEGORIES","ADCOUNT","ADPLAYHEAD","ADSERVINGID","ADTYPE","APIFRAMEWORKS","APPBUNDLE","ASSETURI","BLOCKEDADCATEGORIES","BREAKMAXADLENGTH","BREAKMAXADS","BREAKMAXDURATION","BREAKMINADLENGTH","BREAKMINDURATION","BREAKPOSITION","CLICKPOS","CLICKTYPE","CLIENTUA","CONTENTID","CONTENTPLAYHEAD","CONTENTURI","DEVICEIP","DEVICEUA","DOMAIN","EXTENSIONS","GDPRCONSENT","IFA","IFATYPE","INVENTORYSTATE","LATLONG","LIMITADTRACKING","MEDIAMIME","MEDIAPLAYHEAD","OMIDPARTNER","PAGEURL","PLACEMENTTYPE","PLAYERCAPABILITIES","PLAYERSIZE","PLAYERSTATE","PODSEQUENCE","REGULATIONS","SERVERSIDE","SERVERUA","TRANSACTIONID","UNIVERSALADID","VASTVERSIONS","VERIFICATIONVENDORS"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[],n=A(e);for(var a in!t.ERRORCODE||r.isCustomCode||/^[0-9]{3}$/.test(t.ERRORCODE)||(t.ERRORCODE=900),t.CACHEBUSTING=E(Math.round(1e8*Math.random())),t.TIMESTAMP=(new Date).toISOString(),t.RANDOM=t.random=t.CACHEBUSTING,t)t[a]=b(t[a]);for(var o in n){var s=n[o];"string"==typeof s&&i.push(y(s,t))}return i}function y(e,t){var r=(e=T(e,t)).match(/[^[\]]+(?=])/g);if(!r)return e;var i=r.filter((function(e){return m.indexOf(e)>-1}));return 0===i.length?e:T(e,i=i.reduce((function(e,t){return e[t]=-1,e}),{}))}function T(e,t){var r=e;for(var i in t){var n=t[i];r=r.replace(new RegExp("(?:\\[|%%)(".concat(i,")(?:\\]|%%)"),"g"),n)}return r}function A(e){return Array.isArray(e)?e.map((function(e){return e&&e.hasOwnProperty("url")?e.url:e})):e}function k(e,t){for(var r=0;r<t.length;r++)if(R(t[r],e))return!0;return!1}function R(e,t){if(e&&t){var r=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);return r.length===i.length&&(e.id===t.id&&e.url===t.url)}return!1}function b(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16))}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.toString().padStart(t,"0")}var N={track:function(e,t,r){g(e,t,r).forEach((function(e){"undefined"!=typeof window&&null!==window&&((new Image).src=e)}))},resolveURLTemplates:g,extractURLsFromTemplates:A,containsTemplateObject:k,isTemplateObjectEqual:R,encodeURIComponentRFC3986:b,replaceUrlMacros:y,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},flatten:function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?e(r):r)}),[])},joinArrayOfUniqueTemplateObjs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Array.isArray(e)?e:[],i=Array.isArray(t)?t:[],n=r.concat(i);return n.reduce((function(e,t){return k(t,e)||e.push(t),e}),[])},isValidTimeValue:function(e){return Number.isFinite(e)&&e>=-2},addLeadingZeros:E};function L(e){return-1!==["true","TRUE","True","1"].indexOf(e)}var w={childByName:function(e,t){var r=e.childNodes;for(var i in r){var n=r[i];if(n.nodeName===t)return n}},childrenByName:function(e,t){var r=[],i=e.childNodes;for(var n in i){var a=i[n];a.nodeName===t&&r.push(a)}return r},resolveVastAdTagURI:function(e,t){if(!t)return e;if(0===e.indexOf("//")){var r=location.protocol;return"".concat(r).concat(e)}if(-1===e.indexOf("://")){var i=t.slice(0,t.lastIndexOf("/"));return"".concat(i,"/").concat(e)}return e},parseBoolean:L,parseNodeText:function(e){return e&&(e.textContent||e.text||"").trim()},copyNodeAttribute:function(e,t,r){var i=t.getAttribute(e);i&&r.setAttribute(e,i)},parseAttributes:function(e){for(var t=e.attributes,r={},i=0;i<t.length;i++)r[t[i].nodeName]=t[i].nodeValue;return r},parseDuration:function(e){if(null==e)return-1;if(N.isNumeric(e))return parseInt(e);var t=e.split(":");if(3!==t.length)return-1;var r=t[2].split("."),i=parseInt(r[0]);2===r.length&&(i+=parseFloat("0.".concat(r[1])));var n=parseInt(60*t[1]),a=parseInt(60*t[0]*60);return isNaN(a)||isNaN(n)||isNaN(i)||n>3600||i>60?-1:a+n+i},splitVAST:function(e){var t=[],r=null;return e.forEach((function(i,n){if(i.sequence&&(i.sequence=parseInt(i.sequence,10)),i.sequence>1){var a=e[n-1];if(a&&a.sequence===i.sequence-1)return void(r&&r.push(i));delete i.sequence}r=[i],t.push(r)})),t},assignAttributes:function(e,t){if(e)for(var r in e){var i=e[r];if(i.nodeName&&i.nodeValue&&t.hasOwnProperty(i.nodeName)){var n=i.nodeValue;"boolean"==typeof t[i.nodeName]&&(n=L(n)),t[i.nodeName]=n}}},mergeWrapperAdData:function(e,t){e.errorURLTemplates=t.errorURLTemplates.concat(e.errorURLTemplates),e.impressionURLTemplates=t.impressionURLTemplates.concat(e.impressionURLTemplates),e.extensions=t.extensions.concat(e.extensions),t.viewableImpression.length>0&&(e.viewableImpression=[].concat(h(e.viewableImpression),h(t.viewableImpression))),e.followAdditionalWrappers=t.followAdditionalWrappers,e.allowMultipleAds=t.allowMultipleAds,e.fallbackOnNoAd=t.fallbackOnNoAd;var r=(t.creatives||[]).filter((function(e){return e&&"companion"===e.type})),i=r.reduce((function(e,t){return(t.variations||[]).forEach((function(t){(t.companionClickTrackingURLTemplates||[]).forEach((function(t){N.containsTemplateObject(t,e)||e.push(t)}))})),e}),[]);e.creatives=r.concat(e.creatives);var n=t.videoClickTrackingURLTemplates&&t.videoClickTrackingURLTemplates.length,a=t.videoCustomClickURLTemplates&&t.videoCustomClickURLTemplates.length;e.creatives.forEach((function(e){if(t.trackingEvents&&t.trackingEvents[e.type])for(var r in t.trackingEvents[e.type]){var o=t.trackingEvents[e.type][r];Array.isArray(e.trackingEvents[r])||(e.trackingEvents[r]=[]),e.trackingEvents[r]=e.trackingEvents[r].concat(o)}"linear"===e.type&&(n&&(e.videoClickTrackingURLTemplates=e.videoClickTrackingURLTemplates.concat(t.videoClickTrackingURLTemplates)),a&&(e.videoCustomClickURLTemplates=e.videoCustomClickURLTemplates.concat(t.videoCustomClickURLTemplates)),!t.videoClickThroughURLTemplate||null!==e.videoClickThroughURLTemplate&&void 0!==e.videoClickThroughURLTemplate||(e.videoClickThroughURLTemplate=t.videoClickThroughURLTemplate)),"companion"===e.type&&i.length&&(e.variations||[]).forEach((function(e){e.companionClickTrackingURLTemplates=N.joinArrayOfUniqueTemplateObjs(e.companionClickTrackingURLTemplates,i)}))})),t.adVerifications&&(e.adVerifications=e.adVerifications.concat(t.adVerifications)),t.blockedAdCategories&&(e.blockedAdCategories=e.blockedAdCategories.concat(t.blockedAdCategories))}};function U(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"companion",required:null,variations:[]}}(t);return r.required=e.getAttribute("required")||null,r.variations=w.childrenByName(e,"Companion").map((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,adType:"companionAd",width:e.width||0,height:e.height||0,assetWidth:e.assetWidth||null,assetHeight:e.assetHeight||null,expandedWidth:e.expandedWidth||null,expandedHeight:e.expandedHeight||null,apiFramework:e.apiFramework||null,adSlotID:e.adSlotID||null,pxratio:e.pxratio||"1",renderingMode:e.renderingMode||"default",staticResources:[],htmlResources:[],iframeResources:[],adParameters:null,xmlEncoded:null,altText:null,companionClickThroughURLTemplate:null,companionClickTrackingURLTemplates:[],trackingEvents:{}}}(w.parseAttributes(e));t.htmlResources=w.childrenByName(e,"HTMLResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.iframeResources=w.childrenByName(e,"IFrameResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat(r):e}),[]),t.staticResources=w.childrenByName(e,"StaticResource").reduce((function(e,t){var r=w.parseNodeText(t);return r?e.concat({url:r,creativeType:t.getAttribute("creativeType")||null}):e}),[]),t.altText=w.parseNodeText(w.childByName(e,"AltText"))||null;var r=w.childByName(e,"TrackingEvents");r&&w.childrenByName(r,"Tracking").forEach((function(e){var r=e.getAttribute("event"),i=w.parseNodeText(e);r&&i&&(Array.isArray(t.trackingEvents[r])||(t.trackingEvents[r]=[]),t.trackingEvents[r].push(i))})),t.companionClickTrackingURLTemplates=w.childrenByName(e,"CompanionClickTracking").map((function(e){return{id:e.getAttribute("id")||null,url:w.parseNodeText(e)}})),t.companionClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"CompanionClickThrough"))||null;var i=w.childByName(e,"AdParameters");return i&&(t.adParameters=w.parseNodeText(i),t.xmlEncoded=i.getAttribute("xmlEncoded")||null),t})),r}function C(e){return"linear"===e.type}function I(e,t){var r,i=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"linear",duration:0,skipDelay:null,mediaFiles:[],mezzanine:null,interactiveCreativeFile:null,closedCaptionFiles:[],videoClickThroughURLTemplate:null,videoClickTrackingURLTemplates:[],videoCustomClickURLTemplates:[],adParameters:null,icons:[],trackingEvents:{}}}(t);i.duration=w.parseDuration(w.parseNodeText(w.childByName(e,"Duration")));var n=e.getAttribute("skipoffset");if(null==n)i.skipDelay=null;else if("%"===n.charAt(n.length-1)&&-1!==i.duration){var a=parseInt(n,10);i.skipDelay=i.duration*(a/100)}else i.skipDelay=w.parseDuration(n);var o=w.childByName(e,"VideoClicks");if(o){var s=w.childByName(o,"ClickThrough");i.videoClickThroughURLTemplate=s?{id:s.getAttribute("id")||null,url:w.parseNodeText(s)}:null,w.childrenByName(o,"ClickTracking").forEach((function(e){i.videoClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),w.childrenByName(o,"CustomClick").forEach((function(e){i.videoCustomClickURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})}))}var l=w.childByName(e,"AdParameters");l&&(i.adParameters=w.parseNodeText(l)),w.childrenByName(e,"TrackingEvents").forEach((function(e){w.childrenByName(e,"Tracking").forEach((function(e){var t=e.getAttribute("event"),n=w.parseNodeText(e);if(t&&n){if("progress"===t){if(!(r=e.getAttribute("offset")))return;t="%"===r.charAt(r.length-1)?"progress-".concat(r):"progress-".concat(Math.round(w.parseDuration(r)))}Array.isArray(i.trackingEvents[t])||(i.trackingEvents[t]=[]),i.trackingEvents[t].push(n)}}))})),w.childrenByName(e,"MediaFiles").forEach((function(e){w.childrenByName(e,"MediaFile").forEach((function(e){i.mediaFiles.push(function(e){var t={id:null,fileURL:null,fileSize:0,deliveryType:"progressive",mimeType:null,mediaType:null,codec:null,bitrate:0,minBitrate:0,maxBitrate:0,width:0,height:0,apiFramework:null,scalable:null,maintainAspectRatio:null};t.id=e.getAttribute("id"),t.fileURL=w.parseNodeText(e),t.deliveryType=e.getAttribute("delivery"),t.codec=e.getAttribute("codec"),t.mimeType=e.getAttribute("type"),t.mediaType=e.getAttribute("mediaType")||"2D",t.apiFramework=e.getAttribute("apiFramework"),t.fileSize=parseInt(e.getAttribute("fileSize")||0),t.bitrate=parseInt(e.getAttribute("bitrate")||0),t.minBitrate=parseInt(e.getAttribute("minBitrate")||0),t.maxBitrate=parseInt(e.getAttribute("maxBitrate")||0),t.width=parseInt(e.getAttribute("width")||0),t.height=parseInt(e.getAttribute("height")||0);var r=e.getAttribute("scalable");r&&"string"==typeof r&&(t.scalable=w.parseBoolean(r));var i=e.getAttribute("maintainAspectRatio");i&&"string"==typeof i&&(t.maintainAspectRatio=w.parseBoolean(i));return t}(e))}));var t=w.childByName(e,"InteractiveCreativeFile");t&&(i.interactiveCreativeFile=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,apiFramework:e.apiFramework||null,variableDuration:w.parseBoolean(e.variableDuration),fileURL:null}}(w.parseAttributes(e));return t.fileURL=w.parseNodeText(e),t}(t));var r=w.childByName(e,"ClosedCaptionFiles");r&&w.childrenByName(r,"ClosedCaptionFile").forEach((function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e.type||null,language:e.language||null,fileURL:null}}(w.parseAttributes(e));t.fileURL=w.parseNodeText(e),i.closedCaptionFiles.push(t)}));var n,a,o,s=w.childByName(e,"Mezzanine"),l=(n=s,a={},o=!1,["delivery","type","width","height"].forEach((function(e){n&&n.getAttribute(e)?a[e]=n.getAttribute(e):o=!0})),o?null:a);if(l){var u={id:null,fileURL:null,delivery:null,codec:null,type:null,width:0,height:0,fileSize:0,mediaType:"2D"};u.id=s.getAttribute("id"),u.fileURL=w.parseNodeText(s),u.delivery=l.delivery,u.codec=s.getAttribute("codec"),u.type=l.type,u.width=parseInt(l.width,10),u.height=parseInt(l.height,10),u.fileSize=parseInt(s.getAttribute("fileSize"),10),u.mediaType=s.getAttribute("mediaType")||"2D",i.mezzanine=u}}));var u=w.childByName(e,"Icons");return u&&w.childrenByName(u,"Icon").forEach((function(e){i.icons.push(function(e){var t={program:null,height:0,width:0,xPosition:0,yPosition:0,apiFramework:null,offset:null,duration:0,type:null,staticResource:null,htmlResource:null,iframeResource:null,pxratio:"1",iconClickThroughURLTemplate:null,iconClickTrackingURLTemplates:[],iconViewTrackingURLTemplate:null};t.program=e.getAttribute("program"),t.height=parseInt(e.getAttribute("height")||0),t.width=parseInt(e.getAttribute("width")||0),t.xPosition=function(e){if(-1!==["left","right"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("xPosition")),t.yPosition=function(e){if(-1!==["top","bottom"].indexOf(e))return e;return parseInt(e||0)}(e.getAttribute("yPosition")),t.apiFramework=e.getAttribute("apiFramework"),t.pxratio=e.getAttribute("pxratio")||"1",t.offset=w.parseDuration(e.getAttribute("offset")),t.duration=w.parseDuration(e.getAttribute("duration")),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var r=w.childByName(e,"IconClicks");r&&(t.iconClickThroughURLTemplate=w.parseNodeText(w.childByName(r,"IconClickThrough")),w.childrenByName(r,"IconClickTracking").forEach((function(e){t.iconClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})));return t.iconViewTrackingURLTemplate=w.parseNodeText(w.childByName(e,"IconViewTracking")),t}(e))})),i}function x(e,t){var r=function(){var e=f(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=e.id,r=e.adId,i=e.sequence,n=e.apiFramework;return{id:t,adId:r,sequence:i,apiFramework:n,type:"nonlinear",variations:[],trackingEvents:{}}}(t);return w.childrenByName(e,"TrackingEvents").forEach((function(e){var t,i;w.childrenByName(e,"Tracking").forEach((function(e){t=e.getAttribute("event"),i=w.parseNodeText(e),t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))}))})),w.childrenByName(e,"NonLinear").forEach((function(e){var t={id:null,width:0,height:0,expandedWidth:0,expandedHeight:0,scalable:!0,maintainAspectRatio:!0,minSuggestedDuration:0,apiFramework:"static",adType:"nonLinearAd",type:null,staticResource:null,htmlResource:null,iframeResource:null,nonlinearClickThroughURLTemplate:null,nonlinearClickTrackingURLTemplates:[],adParameters:null};t.id=e.getAttribute("id")||null,t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.expandedWidth=e.getAttribute("expandedWidth"),t.expandedHeight=e.getAttribute("expandedHeight"),t.scalable=w.parseBoolean(e.getAttribute("scalable")),t.maintainAspectRatio=w.parseBoolean(e.getAttribute("maintainAspectRatio")),t.minSuggestedDuration=w.parseDuration(e.getAttribute("minSuggestedDuration")),t.apiFramework=e.getAttribute("apiFramework"),w.childrenByName(e,"HTMLResource").forEach((function(e){t.type=e.getAttribute("creativeType")||"text/html",t.htmlResource=w.parseNodeText(e)})),w.childrenByName(e,"IFrameResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.iframeResource=w.parseNodeText(e)})),w.childrenByName(e,"StaticResource").forEach((function(e){t.type=e.getAttribute("creativeType")||0,t.staticResource=w.parseNodeText(e)}));var i=w.childByName(e,"AdParameters");i&&(t.adParameters=w.parseNodeText(i)),t.nonlinearClickThroughURLTemplate=w.parseNodeText(w.childByName(e,"NonLinearClickThrough")),w.childrenByName(e,"NonLinearClickTracking").forEach((function(e){t.nonlinearClickTrackingURLTemplates.push({id:e.getAttribute("id")||null,url:w.parseNodeText(e)})})),r.variations.push(t)})),r}function S(e){var t=[];return e.forEach((function(e){var r=O(e);r&&t.push(r)})),t}function O(e){if("#comment"===e.nodeName)return null;var t,r={name:null,value:null,attributes:{},children:[]},i=e.attributes,n=e.childNodes;if(r.name=e.nodeName,e.attributes)for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];o.nodeName&&o.nodeValue&&(r.attributes[o.nodeName]=o.nodeValue)}for(var s in n)if(n.hasOwnProperty(s)){var l=O(n[s]);l&&r.children.push(l)}if(0===r.children.length||1===r.children.length&&["#cdata-section","#text"].indexOf(r.children[0].name)>=0){var u=w.parseNodeText(e);""!==u&&(r.value=u),r.children=[]}return null===(t=r).value&&0===Object.keys(t.attributes).length&&0===t.children.length?null:r}function D(e){var t=[];return e.forEach((function(e){var r,i={id:e.getAttribute("id")||null,adId:V(e),sequence:e.getAttribute("sequence")||null,apiFramework:e.getAttribute("apiFramework")||null},n=[];w.childrenByName(e,"UniversalAdId").forEach((function(e){var t={idRegistry:e.getAttribute("idRegistry")||"unknown",value:w.parseNodeText(e)};n.push(t)}));var a=w.childByName(e,"CreativeExtensions");for(var o in a&&(r=S(w.childrenByName(a,"CreativeExtension"))),e.childNodes){var s=e.childNodes[o],l=void 0;switch(s.nodeName){case"Linear":l=I(s,i);break;case"NonLinearAds":l=x(s,i);break;case"CompanionAds":l=U(s,i)}l&&(n&&(l.universalAdIds=n),r&&(l.creativeExtensions=r),t.push(l))}})),t}function V(e){return e.getAttribute("AdID")||e.getAttribute("adID")||e.getAttribute("adId")||null}var P={Wrapper:{subElements:["VASTAdTagURI","Impression"]},BlockedAdCategories:{attributes:["authority"]},InLine:{subElements:["AdSystem","AdTitle","Impression","AdServingId","Creatives"]},Category:{attributes:["authority"]},Pricing:{attributes:["model","currency"]},Verification:{oneOfinLineResources:["JavaScriptResource","ExecutableResource"],attributes:["vendor"]},UniversalAdId:{attributes:["idRegistry"]},JavaScriptResource:{attributes:["apiFramework","browserOptional"]},ExecutableResource:{attributes:["apiFramework","type"]},Tracking:{attributes:["event"]},Creatives:{subElements:["Creative"]},Creative:{subElements:["UniversalAdId"]},Linear:{subElements:["MediaFiles","Duration"]},MediaFiles:{subElements:["MediaFile"]},MediaFile:{attributes:["delivery","type","width","height"]},Mezzanine:{attributes:["delivery","type","width","height"]},NonLinear:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},Companion:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"],attributes:["width","height"]},StaticResource:{attributes:["creativeType"]},Icons:{subElements:["Icon"]},Icon:{oneOfinLineResources:["StaticResource","IFrameResource","HTMLResource"]}};function B(e,t){if(P[e.nodeName]&&P[e.nodeName].attributes){var r=P[e.nodeName].attributes.filter((function(t){return!e.getAttribute(t)}));r.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,attributes:r},t)}}function F(e,t,r){var i=P[e.nodeName],n=!r&&"Wrapper"!==e.nodeName;if(i&&!n){if(i.subElements){var a=i.subElements.filter((function(t){return!w.childByName(e,t)}));a.length>0&&j({name:e.nodeName,parentName:e.parentNode.nodeName,subElements:a},t)}if(r&&i.oneOfinLineResources)i.oneOfinLineResources.some((function(t){return w.childByName(e,t)}))||j({name:e.nodeName,parentName:e.parentNode.nodeName,oneOfResources:i.oneOfinLineResources},t)}}function M(e){return e.children&&0!==e.children.length}function j(e,t){var r=e.name,i=e.parentName,n=e.attributes,a=e.subElements,o=e.oneOfResources,s="Element '".concat(r,"'");t("VAST-warning",{message:s+=n?" missing required attribute(s) '".concat(n.join(", "),"' "):a?" missing required sub element(s) '".concat(a.join(", "),"' "):o?" must provide one of the following '".concat(o.join(", "),"' "):" is empty",parentElement:i,specVersion:4.1})}var W={verifyRequiredValues:function e(t,r,i){if(t&&t.nodeName)if("InLine"===t.nodeName&&(i=!0),B(t,r),M(t)){F(t,r,i);for(var n=0;n<t.children.length;n++)e(t.children[n],r,i)}else 0===w.parseNodeText(t).length&&j({name:t.nodeName,parentName:t.parentNode.nodeName},r)},hasSubElements:M,emitMissingValueWarning:j,verifyRequiredAttributes:B,verifyRequiredSubElements:F};function q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds,n=r.followAdditionalWrappers,a=e.childNodes;for(var o in a){var s=a[o];if(-1!==["Wrapper","InLine"].indexOf(s.nodeName)&&("Wrapper"!==s.nodeName||!1!==n)){if(w.copyNodeAttribute("id",e,s),w.copyNodeAttribute("sequence",e,s),w.copyNodeAttribute("adType",e,s),"Wrapper"===s.nodeName)return{ad:G(s,t),type:"WRAPPER"};if("InLine"===s.nodeName)return{ad:H(s,t,{allowMultipleAds:i}),type:"INLINE"}}}}function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allowMultipleAds;return!1===i&&e.getAttribute("sequence")?null:_(e,t)}function _(e,t){var r=[];t&&W.verifyRequiredValues(e,t);var i=e.childNodes,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{id:e.id||null,sequence:e.sequence||null,adType:e.adType||null,adServingId:null,categories:[],expires:null,viewableImpression:[],system:null,title:null,description:null,advertiser:null,pricing:null,survey:null,errorURLTemplates:[],impressionURLTemplates:[],creatives:[],extensions:[],adVerifications:[],blockedAdCategories:[],followAdditionalWrappers:!0,allowMultipleAds:!1,fallbackOnNoAd:null}}(w.parseAttributes(e));for(var a in i){var o=i[a];switch(o.nodeName){case"Error":n.errorURLTemplates.push(w.parseNodeText(o));break;case"Impression":n.impressionURLTemplates.push({id:o.getAttribute("id")||null,url:w.parseNodeText(o)});break;case"Creatives":n.creatives=D(w.childrenByName(o,"Creative"));break;case"Extensions":var s=w.childrenByName(o,"Extension");n.extensions=S(s),n.adVerifications.length||(r=Y(s));break;case"AdVerifications":n.adVerifications=z(w.childrenByName(o,"Verification"));break;case"AdSystem":n.system={value:w.parseNodeText(o),version:o.getAttribute("version")||null};break;case"AdTitle":n.title=w.parseNodeText(o);break;case"AdServingId":n.adServingId=w.parseNodeText(o);break;case"Category":n.categories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)});break;case"Expires":n.expires=parseInt(w.parseNodeText(o),10);break;case"ViewableImpression":n.viewableImpression.push(X(o));break;case"Description":n.description=w.parseNodeText(o);break;case"Advertiser":n.advertiser={id:o.getAttribute("id")||null,value:w.parseNodeText(o)};break;case"Pricing":n.pricing={value:w.parseNodeText(o),model:o.getAttribute("model")||null,currency:o.getAttribute("currency")||null};break;case"Survey":n.survey=w.parseNodeText(o);break;case"BlockedAdCategories":n.blockedAdCategories.push({authority:o.getAttribute("authority")||null,value:w.parseNodeText(o)})}}return r.length&&(n.adVerifications=n.adVerifications.concat(r)),n}function G(e,t){var r=_(e,t),i=e.getAttribute("followAdditionalWrappers"),n=e.getAttribute("allowMultipleAds"),a=e.getAttribute("fallbackOnNoAd");r.followAdditionalWrappers=!i||w.parseBoolean(i),r.allowMultipleAds=!!n&&w.parseBoolean(n),r.fallbackOnNoAd=a?w.parseBoolean(a):null;var o=w.childByName(e,"VASTAdTagURI");if(o?r.nextWrapperURL=w.parseNodeText(o):(o=w.childByName(e,"VASTAdTagURL"))&&(r.nextWrapperURL=w.parseNodeText(w.childByName(o,"URL"))),r.creatives.forEach((function(e){if(-1!==["linear","nonlinear"].indexOf(e.type)){if(e.trackingEvents){r.trackingEvents||(r.trackingEvents={}),r.trackingEvents[e.type]||(r.trackingEvents[e.type]={});var t=function(t){var i=e.trackingEvents[t];Array.isArray(r.trackingEvents[e.type][t])||(r.trackingEvents[e.type][t]=[]),i.forEach((function(i){r.trackingEvents[e.type][t].push(i)}))};for(var i in e.trackingEvents)t(i)}e.videoClickTrackingURLTemplates&&(Array.isArray(r.videoClickTrackingURLTemplates)||(r.videoClickTrackingURLTemplates=[]),e.videoClickTrackingURLTemplates.forEach((function(e){r.videoClickTrackingURLTemplates.push(e)}))),e.videoClickThroughURLTemplate&&(r.videoClickThroughURLTemplate=e.videoClickThroughURLTemplate),e.videoCustomClickURLTemplates&&(Array.isArray(r.videoCustomClickURLTemplates)||(r.videoCustomClickURLTemplates=[]),e.videoCustomClickURLTemplates.forEach((function(e){r.videoCustomClickURLTemplates.push(e)})))}})),r.nextWrapperURL)return r}function z(e){var t=[];return e.forEach((function(e){var r={resource:null,vendor:null,browserOptional:!1,apiFramework:null,type:null,parameters:null,trackingEvents:{}},i=e.childNodes;for(var n in w.assignAttributes(e.attributes,r),i){var a=i[n];switch(a.nodeName){case"JavaScriptResource":case"ExecutableResource":r.resource=w.parseNodeText(a),w.assignAttributes(a.attributes,r);break;case"VerificationParameters":r.parameters=w.parseNodeText(a)}}var o=w.childByName(e,"TrackingEvents");o&&w.childrenByName(o,"Tracking").forEach((function(e){var t=e.getAttribute("event"),i=w.parseNodeText(e);t&&i&&(Array.isArray(r.trackingEvents[t])||(r.trackingEvents[t]=[]),r.trackingEvents[t].push(i))})),t.push(r)})),t}function Y(e){var t=null,r=[];return e.some((function(e){return t=w.childByName(e,"AdVerifications")})),t&&(r=z(w.childrenByName(t,"Verification"))),r}function X(e){var t={};t.id=e.getAttribute("id")||null;var r=e.childNodes;for(var i in r){var n=r[i],a=n.nodeName,o=w.parseNodeText(n);if(("Viewable"===a||"NotViewable"===a||"ViewUndetermined"===a)&&o){var s=a.toLowerCase();Array.isArray(t[s])||(t[s]=[]),t[s].push(o)}}return t}var K=function(){function e(){n(this,e),this._handlers=[]}return o(e,[{key:"on",value:function(e,t){if("function"!=typeof t)throw new TypeError("The handler argument must be of type Function. Received type ".concat(i(t)));if(!e)throw new TypeError("The event argument must be of type String. Received type ".concat(i(e)));return this._handlers.push({event:e,handler:t}),this}},{key:"once",value:function(e,t){return this.on(e,function(e,t,r){var i={fired:!1,wrapFn:void 0};function n(){i.fired||(e.off(t,i.wrapFn),i.fired=!0,r.bind(e).apply(void 0,arguments))}return i.wrapFn=n,n}(this,e,t))}},{key:"off",value:function(e,t){return this._handlers=this._handlers.filter((function(r){return r.event!==e||r.handler!==t})),this}},{key:"emit",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var n=!1;return this._handlers.forEach((function(t){"*"===t.event&&(n=!0,t.handler.apply(t,[e].concat(r))),t.event===e&&(n=!0,t.handler.apply(t,r))})),n}},{key:"removeAllListeners",value:function(e){return e?(this._handlers=this._handlers.filter((function(t){return t.event!==e})),this):(this._handlers=[],this)}},{key:"listenerCount",value:function(e){return this._handlers.filter((function(t){return t.event===e})).length}},{key:"listeners",value:function(e){return this._handlers.reduce((function(t,r){return r.event===e&&t.push(r.handler),t}),[])}},{key:"eventNames",value:function(){return this._handlers.map((function(e){return e.event}))}}]),e}();var Q={get:function(e,t,r){r(new Error("Please bundle the library for node to use the node urlHandler"))}},Z=12e4;function J(){try{var e=new window.XMLHttpRequest;return"withCredentials"in e?e:null}catch(e){return null}}function $(e,t,r){var i=r?408:e.status,n=r?"XHRURLHandler: Request timed out after ".concat(e.timeout," ms (").concat(i,")"):"XHRURLHandler: ".concat(e.statusText," (").concat(i,")");t(new Error(n),null,{statusCode:i})}var ee={get:function(e,t,r){if("https:"===window.location.protocol&&0===e.indexOf("http://"))return r(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));try{var i=J();i.open("GET",e),i.timeout=t.timeout||Z,i.withCredentials=t.withCredentials||!1,i.overrideMimeType&&i.overrideMimeType("text/xml"),i.onload=function(){return function(e,t){200===e.status?t(null,e.responseXML,{byteLength:e.response.length,statusCode:e.status}):$(e,t,!1)}(i,r)},i.onerror=function(){return $(i,r,!1)},i.onabort=function(){return $(i,r,!1)},i.ontimeout=function(){return $(i,r,!0)},i.send()}catch(e){r(new Error("XHRURLHandler: Unexpected error"))}},supported:function(){return!!J()}};var te={get:function(e,t,r){return r||("function"==typeof t&&(r=t),t={}),"undefined"==typeof window||null===window?Q.get(e,t,r):ee.supported()?ee.get(e,t,r):r(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"))}};var re=0,ie=0,ne=function(e,t){!e||!t||e<=0||t<=0||(ie=(ie*re+8*e/t)/++re)},ae={ERRORCODE:900,extensions:[]},oe=function(e){l(r,e);var t=p(r);function r(){var e;return n(this,r),(e=t.call(this)).remainingAds=[],e.parentURLs=[],e.errorURLTemplates=[],e.rootErrorURLTemplates=[],e.maxWrapperDepth=null,e.URLTemplateFilters=[],e.fetchingOptions={},e.parsingOptions={},e}return o(r,[{key:"addURLTemplateFilter",value:function(e){"function"==typeof e&&this.URLTemplateFilters.push(e)}},{key:"removeURLTemplateFilter",value:function(){this.URLTemplateFilters.pop()}},{key:"countURLTemplateFilters",value:function(){return this.URLTemplateFilters.length}},{key:"clearURLTemplateFilters",value:function(){this.URLTemplateFilters=[]}},{key:"trackVastError",value:function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];this.emit("VAST-error",Object.assign.apply(Object,[{},ae,t].concat(i))),N.track(e,t)}},{key:"getErrorURLTemplates",value:function(){return this.rootErrorURLTemplates.concat(this.errorURLTemplates)}},{key:"getEstimatedBitrate",value:function(){return ie}},{key:"fetchVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(a,o){t.URLTemplateFilters.forEach((function(t){e=t(e)})),t.parentURLs.push(e);var s=Date.now();t.emit("VAST-resolving",{url:e,previousUrl:i,wrapperDepth:r,maxWrapperDepth:t.maxWrapperDepth,timeout:t.fetchingOptions.timeout,wrapperAd:n}),t.urlHandler.get(e,t.fetchingOptions,(function(n,l){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=Math.round(Date.now()-s),d=Object.assign({url:e,previousUrl:i,wrapperDepth:r,error:n,duration:c},u);t.emit("VAST-resolved",d),ne(u.byteLength,c),n?o(n):a(l)}))}))}},{key:"initParsingStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errorURLTemplates=[],this.fetchingOptions={timeout:e.timeout||Z,withCredentials:e.withCredentials},this.maxWrapperDepth=e.wrapperLimit||10,this.parentURLs=[],this.parsingOptions={allowMultipleAds:e.allowMultipleAds},this.remainingAds=[],this.rootErrorURLTemplates=[],this.rootURL="",this.urlHandler=e.urlHandler||e.urlhandler||te,this.vastVersion=null,ne(e.byteLength,e.requestDuration)}},{key:"getRemainingAds",value:function(e){var t=this;if(0===this.remainingAds.length)return Promise.reject(new Error("No more ads are available for the given VAST"));var r=e?N.flatten(this.remainingAds):this.remainingAds.shift();return this.errorURLTemplates=[],this.parentURLs=[],this.resolveAds(r,{wrapperDepth:0,url:this.rootURL}).then((function(e){return t.buildVASTResponse(e)}))}},{key:"getAndParseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),this.URLTemplateFilters.forEach((function(t){e=t(e)})),this.rootURL=e,this.fetchVAST(e).then((function(i){return r.previousUrl=e,r.isRootVAST=!0,r.url=e,t.parse(i,r).then((function(e){return t.buildVASTResponse(e)}))}))}},{key:"parseVAST",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.initParsingStatus(r),r.isRootVAST=!0,this.parse(e,r).then((function(e){return t.buildVASTResponse(e)}))}},{key:"buildVASTResponse",value:function(e){var t,r={ads:(t={ads:e,errorURLTemplates:this.getErrorURLTemplates(),version:this.vastVersion}).ads||[],errorURLTemplates:t.errorURLTemplates||[],version:t.version||null};return this.completeWrapperResolving(r),r}},{key:"parseVastXml",value:function(e,t){var r=t.isRootVAST,i=void 0!==r&&r,n=t.url,a=void 0===n?null:n,o=t.wrapperDepth,s=void 0===o?0:o,l=t.allowMultipleAds,u=t.followAdditionalWrappers;if(!e||!e.documentElement||"VAST"!==e.documentElement.nodeName)throw this.emit("VAST-ad-parsed",{type:"ERROR",url:a,wrapperDepth:s}),new Error("Invalid VAST XMLDocument");var c=[],d=e.documentElement.childNodes,p=e.documentElement.getAttribute("version");for(var h in i&&p&&(this.vastVersion=p),d){var v=d[h];if("Error"===v.nodeName){var f=w.parseNodeText(v);i?this.rootErrorURLTemplates.push(f):this.errorURLTemplates.push(f)}else if("Ad"===v.nodeName){if(this.vastVersion&&parseFloat(this.vastVersion)<3)l=!0;else if(!1===l&&c.length>1)break;var m=q(v,this.emit.bind(this),{allowMultipleAds:l,followAdditionalWrappers:u});m.ad?(c.push(m.ad),this.emit("VAST-ad-parsed",{type:m.type,url:a,wrapperDepth:s,adIndex:c.length-1,vastVersion:p})):this.trackVastError(this.getErrorURLTemplates(),{ERRORCODE:101})}}return c}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,i=void 0===r?null:r,n=t.resolveAll,a=void 0===n||n,o=t.wrapperSequence,s=void 0===o?null:o,l=t.previousUrl,u=void 0===l?null:l,c=t.wrapperDepth,d=void 0===c?0:c,p=t.isRootVAST,h=void 0!==p&&p,v=t.followAdditionalWrappers,f=t.allowMultipleAds,m=[];this.vastVersion&&parseFloat(this.vastVersion)<3&&h&&(f=!0);try{m=this.parseVastXml(e,{isRootVAST:h,url:i,wrapperDepth:d,allowMultipleAds:f,followAdditionalWrappers:v})}catch(e){return Promise.reject(e)}return 1===m.length&&null!=s&&(m[0].sequence=s),!1===a&&(this.remainingAds=w.splitVAST(m),m=this.remainingAds.shift()),this.resolveAds(m,{wrapperDepth:d,previousUrl:u,url:i})}},{key:"resolveAds",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,i=r.wrapperDepth,n=r.previousUrl,a=r.url,o=[];return n=a,t.forEach((function(t){var r=e.resolveWrappers(t,i,n);o.push(r)})),Promise.all(o).then((function(t){var r=N.flatten(t);if(!r&&e.remainingAds.length>0){var o=e.remainingAds.shift();return e.resolveAds(o,{wrapperDepth:i,previousUrl:n,url:a})}return r}))}},{key:"resolveWrappers",value:function(e,t,r){var i=this;return new Promise((function(n){var a;if(t++,!e.nextWrapperURL)return delete e.nextWrapperURL,n(e);if(t>=i.maxWrapperDepth||-1!==i.parentURLs.indexOf(e.nextWrapperURL))return e.errorCode=302,delete e.nextWrapperURL,n(e);e.nextWrapperURL=w.resolveVastAdTagURI(e.nextWrapperURL,r),i.URLTemplateFilters.forEach((function(t){e.nextWrapperURL=t(e.nextWrapperURL)}));var o=null!==(a=i.parsingOptions.allowMultipleAds)&&void 0!==a?a:e.allowMultipleAds,s=e.sequence;i.fetchVAST(e.nextWrapperURL,t,r,e).then((function(a){return i.parse(a,{url:e.nextWrapperURL,previousUrl:r,wrapperSequence:s,wrapperDepth:t,followAdditionalWrappers:e.followAdditionalWrappers,allowMultipleAds:o}).then((function(t){if(delete e.nextWrapperURL,0===t.length)return e.creatives=[],n(e);t.forEach((function(t){t&&w.mergeWrapperAdData(t,e)})),n(t)}))})).catch((function(t){e.errorCode=301,e.errorMessage=t.message,n(e)}))}))}},{key:"completeWrapperResolving",value:function(e){if(0===e.ads.length)this.trackVastError(e.errorURLTemplates,{ERRORCODE:303});else for(var t=e.ads.length-1;t>=0;t--){var r=e.ads[t];(r.errorCode||0===r.creatives.length)&&(this.trackVastError(r.errorURLTemplates.concat(e.errorURLTemplates),{ERRORCODE:r.errorCode||303},{ERRORMESSAGE:r.errorMessage||""},{extensions:r.extensions},{system:r.system}),e.ads.splice(t,1))}}}]),r}(K),se=null,le={data:{},length:0,getItem:function(e){return this.data[e]},setItem:function(e,t){this.data[e]=t,this.length=Object.keys(this.data).length},removeItem:function(e){delete this.data[e],this.length=Object.keys(this.data).length},clear:function(){this.data={},this.length=0}},ue=function(){function e(){n(this,e),this.storage=this.initStorage()}return o(e,[{key:"initStorage",value:function(){if(se)return se;try{se="undefined"!=typeof window&&null!==window?window.localStorage||window.sessionStorage:null}catch(e){se=null}return se&&!this.isStorageDisabled(se)||(se=le).clear(),se}},{key:"isStorageDisabled",value:function(e){var t="__VASTStorage__";try{if(e.setItem(t,t),e.getItem(t)!==t)return e.removeItem(t),!0}catch(e){return!0}return e.removeItem(t),!1}},{key:"getItem",value:function(e){return this.storage.getItem(e)}},{key:"setItem",value:function(e,t){return this.storage.setItem(e,t)}},{key:"removeItem",value:function(e){return this.storage.removeItem(e)}},{key:"clear",value:function(){return this.storage.clear()}}]),e}(),ce=function(){function e(t,r,i){n(this,e),this.cappingFreeLunch=t||0,this.cappingMinimumTimeInterval=r||0,this.defaultOptions={withCredentials:!1,timeout:0},this.vastParser=new oe,this.storage=i||new ue,void 0===this.lastSuccessfulAd&&(this.lastSuccessfulAd=0),void 0===this.totalCalls&&(this.totalCalls=0),void 0===this.totalCallsTimeout&&(this.totalCallsTimeout=0)}return o(e,[{key:"getParser",value:function(){return this.vastParser}},{key:"lastSuccessfulAd",get:function(){return this.storage.getItem("vast-client-last-successful-ad")},set:function(e){this.storage.setItem("vast-client-last-successful-ad",e)}},{key:"totalCalls",get:function(){return this.storage.getItem("vast-client-total-calls")},set:function(e){this.storage.setItem("vast-client-total-calls",e)}},{key:"totalCallsTimeout",get:function(){return this.storage.getItem("vast-client-total-calls-timeout")},set:function(e){this.storage.setItem("vast-client-total-calls-timeout",e)}},{key:"hasRemainingAds",value:function(){return this.vastParser.remainingAds.length>0}},{key:"getNextAds",value:function(e){return this.vastParser.getRemainingAds(e)}},{key:"get",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Date.now();return(r=Object.assign({},this.defaultOptions,r)).hasOwnProperty("resolveAll")||(r.resolveAll=!1),this.totalCallsTimeout<i?(this.totalCalls=1,this.totalCallsTimeout=i+36e5):this.totalCalls++,new Promise((function(n,a){if(t.cappingFreeLunch>=t.totalCalls)return a(new Error("VAST call canceled – FreeLunch capping not reached yet ".concat(t.totalCalls,"/").concat(t.cappingFreeLunch)));var o=i-t.lastSuccessfulAd;if(o<0)t.lastSuccessfulAd=0;else if(o<t.cappingMinimumTimeInterval)return a(new Error("VAST call canceled – (".concat(t.cappingMinimumTimeInterval,")ms minimum interval reached")));t.vastParser.getAndParseVAST(e,r).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))}}]),e}(),de=function(e){l(a,e);var t=p(a);function a(e,r,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(var l in n(this,a),(o=t.call(this)).ad=r,o.creative=i,o.variation=s,o.muted=!1,o.impressed=!1,o.skippable=!1,o.trackingEvents={},o.lastPercentage=0,o._alreadyTriggeredQuartiles={},o.emitAlwaysEvents=["creativeView","start","firstQuartile","midpoint","thirdQuartile","complete","resume","pause","rewind","skip","closeLinear","close"],o.creative.trackingEvents){var u=o.creative.trackingEvents[l];o.trackingEvents[l]=u.slice(0)}return C(o.creative)?o._initLinearTracking():o._initVariationTracking(),e&&o.on("start",(function(){e.lastSuccessfulAd=Date.now()})),o}return o(a,[{key:"_initLinearTracking",value:function(){this.linear=!0,this.skipDelay=this.creative.skipDelay,this.setDuration(this.creative.duration),this.clickThroughURLTemplate=this.creative.videoClickThroughURLTemplate,this.clickTrackingURLTemplates=this.creative.videoClickTrackingURLTemplates}},{key:"_initVariationTracking",value:function(){if(this.linear=!1,this.skipDelay=-1,this.variation){for(var e in this.variation.trackingEvents){var t=this.variation.trackingEvents[e];this.trackingEvents[e]?this.trackingEvents[e]=this.trackingEvents[e].concat(t.slice(0)):this.trackingEvents[e]=t.slice(0)}"nonLinearAd"===this.variation.adType?(this.clickThroughURLTemplate=this.variation.nonlinearClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.nonlinearClickTrackingURLTemplates,this.setDuration(this.variation.minSuggestedDuration)):function(e){return"companionAd"===e.adType}(this.variation)&&(this.clickThroughURLTemplate=this.variation.companionClickThroughURLTemplate,this.clickTrackingURLTemplates=this.variation.companionClickTrackingURLTemplates)}}},{key:"setDuration",value:function(e){N.isValidTimeValue(e)&&(this.assetDuration=e,this.quartiles={firstQuartile:Math.round(25*this.assetDuration)/100,midpoint:Math.round(50*this.assetDuration)/100,thirdQuartile:Math.round(75*this.assetDuration)/100})}},{key:"setProgress",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(N.isValidTimeValue(e)&&"object"===i(r)){var n=this.skipDelay||-1;if(-1===n||this.skippable||(n>e?this.emit("skip-countdown",n-e):(this.skippable=!0,this.emit("skip-countdown",0))),this.assetDuration>0){var a=Math.round(e/this.assetDuration*100),o=[];if(e>0){o.push("start");for(var s=this.lastPercentage;s<a;s++)o.push("progress-".concat(s+1,"%"));for(var l in o.push("progress-".concat(Math.round(e))),this.quartiles)this.isQuartileReached(l,this.quartiles[l],e)&&(o.push(l),this._alreadyTriggeredQuartiles[l]=!0);this.lastPercentage=a}o.forEach((function(e){t.track(e,{macros:r,once:!0})})),e<this.progress&&this.track("rewind",{macros:r})}this.progress=e}}},{key:"isQuartileReached",value:function(e,t,r){var i=!1;return t<=r&&!this._alreadyTriggeredQuartiles[e]&&(i=!0),i}},{key:"setMuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.muted!==e&&this.track(e?"mute":"unmute",{macros:t}),this.muted=e)}},{key:"setPaused",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.paused!==e&&this.track(e?"pause":"resume",{macros:t}),this.paused=e)}},{key:"setFullscreen",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.fullscreen!==e&&this.track(e?"fullscreen":"exitFullscreen",{macros:t}),this.fullscreen=e)}},{key:"setExpand",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"boolean"==typeof e&&"object"===i(t)&&(this.expanded!==e&&(this.track(e?"expand":"collapse",{macros:t}),this.track(e?"playerExpand":"playerCollapse",{macros:t})),this.expanded=e)}},{key:"setSkipDelay",value:function(e){N.isValidTimeValue(e)&&(this.skipDelay=e)}},{key:"trackImpression",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.impressed||(this.impressed=!0,this.trackURLs(this.ad.impressionURLTemplates,e),this.track("creativeView",{macros:e})))}},{key:"error",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"object"===i(e)&&"boolean"==typeof t&&this.trackURLs(this.ad.errorURLTemplates,e,{isCustomCode:t})}},{key:"errorWithCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"string"==typeof e&&"boolean"==typeof t&&(this.error({ERRORCODE:e},t),console.log("The method errorWithCode is deprecated, please use vast tracker error method instead"))}},{key:"complete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("complete",{macros:e})}},{key:"notUsed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&(this.track("notUsed",{macros:e}),this.trackingEvents=[])}},{key:"otherAdInteraction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("otherAdInteraction",{macros:e})}},{key:"acceptInvitation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("acceptInvitation",{macros:e})}},{key:"adExpand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adExpand",{macros:e})}},{key:"adCollapse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("adCollapse",{macros:e})}},{key:"minimize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("minimize",{macros:e})}},{key:"verificationNotExecuted",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e&&"object"===i(t)){if(!this.ad||!this.ad.adVerifications||!this.ad.adVerifications.length)throw new Error("No adVerifications provided");if(!e)throw new Error("No vendor provided, unable to find associated verificationNotExecuted");var r=this.ad.adVerifications.find((function(t){return t.vendor===e}));if(!r)throw new Error("No associated verification element found for vendor: ".concat(e));var n=r.trackingEvents;if(n&&n.verificationNotExecuted){var a=n.verificationNotExecuted;this.trackURLs(a,t),this.emit("verificationNotExecuted",{trackingURLTemplates:a})}}}},{key:"overlayViewDuration",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&"object"===i(t)&&(t.ADPLAYHEAD=e,this.track("overlayViewDuration",{macros:t}))}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track(this.linear?"closeLinear":"close",{macros:e})}},{key:"skip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("skip",{macros:e})}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"object"===i(e)&&this.track("loaded",{macros:e})}},{key:"click",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((null===e||"string"==typeof e)&&"object"===i(t)){this.clickTrackingURLTemplates&&this.clickTrackingURLTemplates.length&&this.trackURLs(this.clickTrackingURLTemplates,t);var n=this.clickThroughURLTemplate||e,a=r({},t);if(n){this.progress&&(a.ADPLAYHEAD=this.progressFormatted());var o=N.resolveURLTemplates([n],a)[0];this.emit("clickthrough",o)}}}},{key:"track",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.macros,n=void 0===r?{}:r,a=t.once,o=void 0!==a&&a;if("object"===i(n)){"closeLinear"===e&&!this.trackingEvents[e]&&this.trackingEvents.close&&(e="close");var s=this.trackingEvents[e],l=this.emitAlwaysEvents.indexOf(e)>-1;s?(this.emit(e,{trackingURLTemplates:s}),this.trackURLs(s,n)):l&&this.emit(e,null),o&&(delete this.trackingEvents[e],l&&this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e),1))}}},{key:"trackURLs",value:function(e){var t,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r({},n);this.linear&&(this.creative&&this.creative.mediaFiles&&this.creative.mediaFiles[0]&&this.creative.mediaFiles[0].fileURL&&(o.ASSETURI=this.creative.mediaFiles[0].fileURL),this.progress&&(o.ADPLAYHEAD=this.progressFormatted())),null!==(t=this.creative)&&void 0!==t&&null!==(i=t.universalAdIds)&&void 0!==i&&i.length&&(o.UNIVERSALADID=this.creative.universalAdIds.map((function(e){return e.idRegistry.concat(" ",e.value)})).join(",")),this.ad&&(this.ad.sequence&&(o.PODSEQUENCE=this.ad.sequence),this.ad.adType&&(o.ADTYPE=this.ad.adType),this.ad.adServingId&&(o.ADSERVINGID=this.ad.adServingId),this.ad.categories&&this.ad.categories.length&&(o.ADCATEGORIES=this.ad.categories.map((function(e){return e.value})).join(",")),this.ad.blockedAdCategories&&this.ad.blockedAdCategories.length&&(o.BLOCKEDADCATEGORIES=this.ad.blockedAdCategories)),N.track(e,o,a)}},{key:"convertToTimecode",value:function(e){if(!N.isValidTimeValue(e))return"";var t=1e3*e,r=Math.floor(t/36e5),i=Math.floor(t/6e4%60),n=Math.floor(t/1e3%60),a=Math.floor(t%1e3);return"".concat(N.addLeadingZeros(r,2),":").concat(N.addLeadingZeros(i,2),":").concat(N.addLeadingZeros(n,2),".").concat(N.addLeadingZeros(a,3))}},{key:"progressFormatted",value:function(){return this.convertToTimecode(this.progress)}}]),a}(K);e.VASTClient=ce,e.VASTParser=oe,e.VASTTracker=de,Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ },

/***/ 697
(module, __unused_webpack_exports, __webpack_require__) {

var topLevel = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(542);

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


/***/ },

/***/ 840
(module, __unused_webpack_exports, __webpack_require__) {

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


/***/ },

/***/ 940
(module) {



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



/***/ },

/***/ 251
(module, __unused_webpack_exports, __webpack_require__) {



var IVPAIDAdUnit = __webpack_require__(940);
var Subscriber = __webpack_require__(932);
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = __webpack_require__(981);
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
    this._subscribers.trigger.apply(this._subscribers, Array.prototype.slice.call(arguments));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;



/***/ },

/***/ 289
(module, __unused_webpack_exports, __webpack_require__) {



var utils = __webpack_require__(981);
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = __webpack_require__(251);

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
    if(this._onLoad){ return }

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
        var result;

        try {
            result = JSON.parse(e.data);
        }
        catch (exception) {
            throw exception;
        }

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
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
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
window.VPAIDHTML5Client = VPAIDHTML5Client;


/***/ },

/***/ 932
(module) {



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



/***/ },

/***/ 981
(module) {



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
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        if (onSuccess.apply(this, args)) {
            clearTimeout(timeout);
        }
    };

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
    if(element) {
        element.style.position = 'absolute';
        element.style.left = '0';
        element.style.top = '0';
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
    }
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



/***/ },

/***/ 542
() {

/* (ignored) */

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__webpack_require__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/

;// external "video.js"

// EXTERNAL MODULE: ./node_modules/@dailymotion/vast-client/dist/vast-client.min.js
var vast_client_min = __webpack_require__(976);
// EXTERNAL MODULE: ./node_modules/global/document.js
var global_document = __webpack_require__(697);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(840);
;// ./src/ui.mjs



class UI extends __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.EventTarget {
  constructor(player, options) {
    super();
    this.player = player;
    this.options = options;
    // duration in seconds. useful for streaming ads where `player.duration()` will always give 0.
    this.duration = 0;
    this.skipDelay = 0;

    /** @type {Object} */
    this.originalState = {
      controlsEnabled: player.controls(),
      seekEnabled: player.controlBar.progressControl.enabled()
    };
  }

  setUp() {
    const player = this.player;
    const options = this.options;

    const setupProgressControl = () => {
      player.controls(options.controlsEnabled);
      if (options.seekEnabled) {
        player.controlBar.progressControl.enable();
      } else {
        player.controlBar.progressControl.disable();
      }
    }

    const setupBlocker = () => {
      const blocker = this.blocker = global_window.document.createElement('div');
      blocker.className = 'vast-blocker';
      blocker.onclick = () => {
        if (player.paused()) {
          player.play();
          return false;
        }
        this.trigger('click');
      };
      player.el().insertBefore(blocker, player.controlBar.el());
    }

    const setupSkipButton = () => {
      const skipButtonElement = this.skipButtonElement = global_window.document.createElement('div');
      skipButtonElement.className = 'vast-skip-button';
      skipButtonElement.style.display = 'none';
      player.el().appendChild(skipButtonElement);

      player.one('adplay', this.#onAdPlay);

      skipButtonElement.onclick = (e) => {
        if ((' ' + skipButtonElement.className + ' ').indexOf(' enabled ') >= 0) {
          this.trigger('skip');
        }
        if (global_window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        } else {
          return false;
        }
      };
    }

    const setupRemainingTime = () => {
      if (!options.displayRemainingTime) return;

      const remainingTimeElement = this.remainingTimeElement = global_window.document.createElement('div');
      remainingTimeElement.className = 'vast-remaining-time';
      remainingTimeElement.style.display = 'none';

      player.el().appendChild(remainingTimeElement);
    }

    const setupRemainingTimeIcon = (type) => {
      if (!options.displayRemainingTimeIcons) return;

      const config = {
        play: {
          className: 'vjs-icon-play vast-remaining-time-icon-play',
          action: (player) => player.paused() ? player.play() : player.pause(),
          toggleClasses: ['vjs-icon-pause', 'vjs-icon-play'],
          events: ['adplay', 'adpause'],
          initialState: (player) => player.paused() ? 'vjs-icon-play' : 'vjs-icon-pause'
        },
        mute: {
          className: 'vast-remaining-time-icon-mute',
          action: (player) => player.muted(!player.muted()),
          toggleClasses: ['vjs-icon-volume-high', 'vjs-icon-volume-mute'],
          events: ['advolumechange'],
          initialState: (player) => player.muted() ? 'vjs-icon-volume-mute' : 'vjs-icon-volume-high'
        }
      };

      const { className, action, toggleClasses, events, initialState } = config[type];

      const button = player.addChild('button', {
        className: `vjs-hidden vjs-visible-text vjs-button vast-remaining-time-icon ${className}`,
        clickHandler: function() {
          action(this.player);
        }.bind(this),
      });

      button.removeClass('vjs-control');
      button.addClass(initialState(player));

      const toggleIcon = () => {
        toggleClasses.forEach(cls => button.toggleClass(cls));
      };

      this[`remainingTime${type.charAt(0).toUpperCase() + type.slice(1)}Element`] = button.el();

      events.forEach(event => player.on(event, toggleIcon));
    };

    setupProgressControl();
    setupBlocker();
    setupSkipButton();
    setupRemainingTime();
    setupRemainingTimeIcon('play');
    setupRemainingTimeIcon('mute');
  }

  tearDown() {
    const player = this.player;
    const originalState = this.originalState;

    this.duration = 0;
    this.skipDelay = 0;

    player.controls(originalState.controlsEnabled);

    if (originalState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    this.blocker.parentElement.removeChild(this.blocker);
    this.skipButtonElement.parentElement.removeChild(this.skipButtonElement);

    if (this.options.displayRemainingTime) {
      this.remainingTimeElement.parentElement.removeChild(this.remainingTimeElement);
    }

    if (this.options.displayRemainingTimeIcons) {
      this.remainingTimePlayElement.parentElement.removeChild(this.remainingTimePlayElement);
      this.remainingTimeMuteElement.parentElement.removeChild(this.remainingTimeMuteElement);
    }

    player.off('adtimeupdate', this.#onTimeUpdate);
    player.off('adplay', this.#onAdPlay);
  }

  #onAdPlay = () => {
    const skipDelay = this.skipDelay;
    const player = this.player;
    if (skipDelay > 0 && (player.duration() || this.duration) >= skipDelay) {
      this.skipButtonElement.style.display = 'block';

      if (this.options.displayRemainingTime) {
        this.remainingTimeElement.style.display = 'block';
      }

      if (this.options.displayRemainingTimeIcons) {
        this.remainingTimePlayElement.classList.remove('vjs-hidden');
        this.remainingTimeMuteElement.classList.remove('vjs-hidden');
      }

      player.on('adtimeupdate', this.#onTimeUpdate);
    }
    player.loadingSpinner.el().style.display = 'none';
  }

  #onTimeUpdate = () => {
    this.player.loadingSpinner.el().style.display = 'none';

    const timeLeft = Math.ceil(this.skipDelay - this.player.currentTime());

    if (this.options.displayRemainingTime) {
      const remainingTimeLeft = Math.ceil(this.player.remainingTime());
      this.remainingTimeElement.innerHTML = this.options.messages.remainingTime.replace('{seconds}', remainingTimeLeft);
    }

    if (timeLeft > 0) {
      disableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = this.options.messages.skipCountdown.replace('{seconds}', timeLeft);
    } else {
      enableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = this.options.messages.skip;
    }
  }
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function isSkipEnabled(skipButtonElement) {
  return (' ' + skipButtonElement.className + ' ').indexOf(' enabled ') > -1;
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function disableSkip(skipButtonElement) {
  if (isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className =
      skipButtonElement.className.replace(' enabled ', '');
  }
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function enableSkip(skipButtonElement) {
  if (!isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className += ' enabled ';
  }
}

;// ./src/utils.mjs
/**
 *
 * @param {function} fn
 * @param {object|null} context
 * @return {function(): *}
 */
function once(fn, context = null) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}

function linearFn(creative) {
  return creative.type === 'linear' && creative.mediaFiles.length;
}

function companionFn(creative) {
  return creative.type === 'companion';
}

function cloneJson(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function convertOffsetToSeconds (offsetCode, duration = null) {
  let result = null;
  if (typeof offsetCode === 'string') {
    if (offsetCode.includes('%')) {
      if (duration != null) {
        const percent = offsetCode.replace('%', '');
        result = percent / 100 * duration;
      }
    } else if (offsetCode.includes(':')) {
      const [hours, minutes, seconds] = offsetCode.split(':').slice(-3);
      result = parseInt(hours || 0, 10) * 3600 + parseInt(minutes || 0, 10) * 60 + parseInt(seconds || 0, 10);
    } else {
      result = parseInt(offsetCode, 10);
    }
  }

  if (result == null) {
    result = Number(offsetCode);
  }

  return isNaN(result) ? null : result;
}

function isString(str) {
  return typeof str === 'string';
}

function isNullishOrBlankString(str) {
  return str == null || (isString(str) && str.trim().length === 0);
}

;// ./src/tracked-ad.mjs


class TrackedAd {
  #linearAdTracker
  #companionTracker
  #skipAfterDuration
  /**
   *
   * @param {VASTTracker} linearAdTracker
   * @param {VASTTracker} companionTracker
   */
  constructor(linearAdTracker, companionTracker) {
    this.#linearAdTracker = linearAdTracker;
    this.#companionTracker = companionTracker;
    this.#skipAfterDuration = false;
  }

  get linearCreative() {
    return this.#linearAdTracker.creative;
  }

  get linearAdTracker() {
    return this.#linearAdTracker;
  }

  get companionTracker() {
    return this.#companionTracker;
  }

  /**
   *
   * @return {boolean}
   */
  get skipAfterDuration() {
    return this.#skipAfterDuration;
  }

  /**
   * @param {boolean} value
   */
  set skipAfterDuration(value) {
    this.#skipAfterDuration = value;
  }

  /**
   *
   * @return {boolean}
   */
  hasVideoMedia() {
    return this.linearCreative.mediaFiles.some(mediaFile => mediaFile && mediaFile.apiFramework == null);
  }
}

;// ./src/ad-loader.mjs






class AdLoader {
  #vastClient
  #vastParser
  #options
  #adSelector;

  /**
   *
   * @param {VASTClient} vastClient
   * @param {VASTParser} vastParser
   * @param {AdSelector} adSelector
   * @param {object} options
   */
  constructor(vastClient, vastParser, adSelector, options) {
    this.#vastClient = vastClient;
    this.#vastParser = vastParser;
    this.#adSelector = adSelector;
    this.#options = options;
  }

  loadAds(params = {}) {
    return new Promise((accept, reject) => {
      const {url : urlConfig, xml} = params;

      const urls = (Array.isArray(urlConfig) ? urlConfig : [urlConfig])
        .filter(url => url != null);

      let promise;
      if (urls.length) {
        promise = Promise.resolve([]);
        urls.forEach(url => {
          promise = promise.then(ads => {
            if (ads == null || ads.length === 0) {
              return this.loadAdsWithUrl(url);
            } else {
              return ads;
            }
          }).catch(() => {
            return [];
          });
        });
      } else if (xml != null) {
        promise = this.loadAdsWithXml(xml);
      } else {
        throw new Error('xml or url must be set');
      }

      promise.then(accept).catch(reject);
    });
  }

  /**
   *
   * @param {XMLDocument|string} xml
   * @return Promise<Array[TrackedAd]>
   */
  loadAdsWithXml(xml) {
    return new Promise((accept, reject) => {
      let xmlDocument;

      if (xml.constructor === global_window.XMLDocument) {
        xmlDocument = xml;
      } else if (xml.constructor === String) {
        xmlDocument = (new global_window.DOMParser()).parseFromString(xml, 'application/xml');
      } else {
        throw new Error('xml config option must be a String or XMLDocument');
      }

      this.#vastParser
        .parseVAST(xmlDocument)
        .then(this.#adSelector.selectAds)
        .then(this.#createTrackedAds)
        .then(accept)
        .catch(reject);
    })
  }

  loadAdsWithUrl(url) {
    return new Promise((accept, reject) => {
      this.#vastClient
        .get(url, {
          withCredentials: this.#options.withCredentials,
          wrapperLimit: this.#options.wrapperLimit,
        })
        .then(this.#adSelector.selectAds)
        .then(this.#createTrackedAds)
        .then(accept)
        .catch(reject);
    })
  }

  /*** private methods ***/

  #createTrackedAds = ads => {
    const createTrackedAd = ad => {
      const linearAdTracker =
        new vast_client_min.VASTTracker(this.#vastClient, ad, ad.creatives.find(linearFn), ad.creatives.find(companionFn));

      linearAdTracker.on('clickthrough', onClickThrough);

      let companionAdTracker = null;

      const companionCreative = ad.creatives.find(companionFn);

      if (companionCreative) {
        // Just pick the first suitable companion ad for now
        const options = this.#options;
        const variation = companionCreative.variations
          .filter(v => v.staticResources)
          .find(v => parseInt(v.width, 10) <= options.companion.maxWidth && parseInt(v.height, 10) <= options.companion.maxHeight);

        if (variation) {
          companionAdTracker = new vast_client_min.VASTTracker(this.#vastClient, ad, companionCreative, variation);
          companionAdTracker.on('clickthrough', onClickThrough);
        }
      }

      return new TrackedAd(linearAdTracker, companionAdTracker);
    }

    return ads.map(createTrackedAd);
  }
}

function onClickThrough(url) {
  global_window.open(url, '_blank');
}

;// ./src/ad-selector.mjs


class AdSelector {
  /**
   *
   * @param {object} vastResponse
   * @return {object[]}
   */
  selectAds(vastResponse) {
    if (!vastResponse.ads || vastResponse.ads.length === 0) {
      throw new Error('no ads found in VAST');
    }

    const adsWithLinear = vastResponse.ads
      .filter(ad => ad.creatives.some(linearFn));

    if (!adsWithLinear.length) {
      throw new Error('no linear ads found in VAST');
    }

    const adPod = adsWithLinear.filter(ad => ad.sequence);

    if (adPod.length) {
      return adPod.sort((ad1, ad2) => ad1.sequence - ad2.sequence);
    }
    else {
      const standaloneAds = adsWithLinear.filter(ad => !adPod.includes(ad));
      return standaloneAds.slice(0, 1);
    }
  }
}

// EXTERNAL MODULE: ./node_modules/vpaid-html5-client/js/VPAIDHTML5Client.js
var VPAIDHTML5Client = __webpack_require__(289);
;// ./src/event.mjs


/**
 *
 * @param {VASTTracker} vastTracker
 * @return {object|undefined}
 */
function createVASTContext(vastTracker) {
  if (vastTracker) {
    const ad = vastTracker.ad;
    const creative = vastTracker.creative;
    return {
      mediaFiles: creative.mediaFiles.map(mediaFile => Object.assign({}, mediaFile)),
      adSequenceId: ad.sequence,
      adId: ad.id,
      creativeAdId: creative.id
    };
  }
}

;// ./src/vpaid-handler.mjs







const VALID_TYPES = ['application/x-javascript', 'text/javascript', 'application/javascript'];

class VPAIDHandler {
  #forceStopDone
  #cancelled
  #started
  #player
  #options
  #eventTarget
  #volume
  #muted
  #controlBar

  constructor(player, options) {
    this.#player = player;
    this.#options = options;
    this.#eventTarget = new __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.EventTarget();
  }

  handle(tracker) {
    this.#cancelled = false;
    this.#started = false
    this.#forceStopDone = false;

    this.setVolume(this.#player.volume());

    return new Promise((resolve, reject) => {
      const options = this.#options;
      const player = this.#player;
      /**
       *
       * @type {HTMLElement|null}
       */
      let container = null;

      /**
       * "timeout" | Error
       * @param {string|Error} err
       * @param adUnit
       */
      const adUnitLoad = (err, adUnit) => {
        if (err) {
          reject(err);
          return;
        }

        const onAdComplete = () => {
          cleanUp();
          resolve();
          player.trigger('vpaid.AdStopped');
          player.trigger({
            type: 'vast.adEnd',
            vast: createVASTContext(tracker)
          })
        };

        adUnit.subscribe('AdStopped', onAdComplete);

        const forceStopAd = err => {
          if (adUnit && !this.#forceStopDone) {
            adUnit.unsubscribe('AdStopped', onAdComplete);
            const onAdCancel = () => {
              this.#forceStopDone = true;
              cleanUp();
              reject(err);
              player.trigger('vpaid.AdStopped');
            };
            subscribeWithTimeout(adUnit, 'AdStopped', onAdCancel, onAdCancel);
            adUnit.stopAd();
          }
          else {
            this.#forceStopDone = true;
            reject(err);
          }
        }

        this.#eventTarget.on('forceStopAd', forceStopAd);

        if (this.#cancelled) {
          forceStopAd('Received cancel signal from player');
          return;
        }

        const cleanUp = () => {
          this.removeMuteControl();
          player.controlBar.show();

          player.off('playerresize', resizeAd);

          vpaidClient.destroy();

          if (container) {
            container.parentElement.removeChild(container);
            container = null;
          }
        }

        const onHandShake = (error/*, version*/) => {
          if (error) {
            console.log(error);
            forceStopAd('Error on VPAID handshake');
            return;
          }

          const creativeData = {
            AdParameters: creative.adParameters || ''
          };

          /*
            NOTE: 'slot' and 'videoSlot' are handled by the VPAIDHTML5Client.
            We can provide 'videoSlot' via the VPAIDHTML5Client constructor. But not the 'slot'.
            The 'slot' will be created by the VPAIDHTML5Client (<div class="ad-element"></div>).
            This 'slot' is not the same as the VPAID container. The VPAID container sits within
            video.js elements (at time of writing, before the control bar) and will house the VPAID
            friendly iframe (with a parent div). So if the VPAID container is:
            <div class="vjs-vpaid-container"></div>
            then it'll look like:
            <div class="vjs-vpaid-container"><div><iframe src="about:blank"><div class="ad-element"><!-- VPAID script runs here --></div></iframe></div></div>
           */
          const environmentVars = {
            // WARNING: do not add the 'slot' or 'videoSlot' here! Read comment above.
            // videoSlotCanAutoPlay: true
          };

          subscribeWithTimeout(adUnit, 'AdLoaded', onAdLoaded, forceStopAd);

          const viewMode = player.isFullscreen() ? 'fullscreen' : 'normal';

          adUnit.subscribe('AdError', message => {
            // General VPAID Error = 901 (in VAST 3 spec)
            tracker.error({ERRORCODE: 901});
            this.#forceStopDone = true;
            cleanUp();
            reject(`Fatal VPAID Error: ${typeof message === 'object' ? JSON.stringify(message) : message}`);
            player.trigger({type: 'vpaid.AdError', error: message});
          });

          adUnit.initAd(player.currentWidth(), player.currentHeight(), viewMode, -1, creativeData, environmentVars);
        }

        const onAdLoaded = () => {
          if (this.#cancelled) {
            forceStopAd('Received cancel signal');
            return;
          }

          adUnit.subscribe('AdSkipped', () => {
            tracker.skip();
            player.trigger('vpaid.AdSkipped');
            player.trigger({
              type: 'vast.adSkip',
              vast: createVASTContext(tracker)
            })
          });

          adUnit.subscribe('AdVolumeChange', () => {
            adUnit.getAdVolume((error, currentVolume) => {
              if (error) return;
              const lastVolume = this.#volume

              if (currentVolume === 0 && lastVolume > 0) {
                tracker.setMuted(true);
              } else if (currentVolume > 0 && lastVolume === 0) {
                tracker.setMuted(false);
              }

              this.setVolume(currentVolume);

              // keep our player in sync
              player.volume(currentVolume);

              player.trigger('vpaid.AdVolumeChange');
            });
          });

          adUnit.subscribe('AdImpression', () => {
            // will also trigger createView
            tracker.trackImpression();
            player.trigger('vpaid.AdImpression');
          });


          adUnit.subscribe('AdClickThru',
            /**
             *
             * @param {string} url
             * @param {string} id
             * @param {boolean} playerHandles
             */
            // eslint-disable-next-line no-unused-vars
            ({url, id, playerHandles}) => {
              // We don't want our default for VPAID; there are rules (VPAID 2, section 2.5.4).
              tracker.removeAllListeners('clickthrough');

              const haveUrl = !isNullishOrBlankString(url);

              if (playerHandles && !haveUrl) {
                tracker.once('clickthrough', resolvedUrl => {
                  global_window.open(resolvedUrl, '_blank');
                });
              }

              // Trigger click events. Then run the registered the 'clickthrough' listeners
              // if the URL is resolved from the VAST.
              tracker.click();

              // Best to open after triggering click events.
              if (playerHandles && haveUrl) {
                global_window.open(url, '_blank');
              }

              player.trigger('vpaid.AdClickThru');
            }
          );

          adUnit.subscribe('AdVideoFirstQuartile', () => {
            tracker.track('firstQuartile');
            player.trigger('vpaid.AdVideoFirstQuartile');
          });

          adUnit.subscribe('AdVideoMidpoint', () => {
            tracker.track('midpoint');
            player.trigger('vpaid.AdVideoMidpoint');
          });

          adUnit.subscribe('AdVideoThirdQuartile', () => {
            tracker.track('thirdQuartile');
            player.trigger('vpaid.AdVideoThirdQuartile');
          });

          adUnit.subscribe('AdVideoComplete', () => {
            tracker.track('complete');
            player.trigger('vpaid.AdVideoComplete');
          });

          adUnit.subscribe('AdUserAcceptInvitation', () => {
            tracker.acceptInvitation();
            player.trigger('vpaid.AdUserAcceptInvitation');
          });

          adUnit.subscribe('AdUserMinimize', () => {
            tracker.minimize();
            player.trigger('vpaid.AdUserMinimize');
          });

          adUnit.subscribe('AdUserClose', () => {
            tracker.close();
            player.trigger('vpaid.AdUserClose');
          });

          adUnit.subscribe('AdPaused', () => {
            tracker.setPaused(true);
            player.trigger('vpaid.AdPaused');
          });

          adUnit.subscribe('AdPlaying', () => {
            tracker.setPaused(false);
            player.trigger('vpaid.AdPlaying');
          });

          adUnit.getAdLinear(withTimeout((err, isLinear) => {
              if (this.#cancelled) {
                forceStopAd('Received cancel signal');
                return;
              }

              if (err) {
                forceStopAd(err);
              } else if (!isLinear) {
                // TODO: support overlay banner
                forceStopAd('Non-linear not supported')
              } else {
                startLinearAd();
              }
            },
            () => {
              forceStopAd('Unable to get mode of operation: linear or non-linear');
            }));

          const startLinearAd = () => {
            player.controlBar.hide();

            if (options.vpaid.enableToggleMute) {
              this.addMuteControl(adUnit);
            }

            // A VPAID adunit may (incorrectly?) call AdStarted again for the first quartile event
            const onAdStartedOnce = once(onAdStarted);
            subscribeWithTimeout(adUnit, 'AdStarted', onAdStartedOnce, forceStopAd);
            adUnit.startAd();
          }
        }

        const onAdStarted = () => {
          if (!this.#cancelled) {
            this.#started = true
            tracker.track('start');
            player.on('playerresize', resizeAd);
            player.trigger('ads-ad-started'); // notify videojs-contrib-ads
            player.trigger({
              type: 'vast.adStart',
              vast: createVASTContext(tracker)
            });
          } else {
            forceStopAd('Received cancel signal');
          }
        }

        const resizeAd = () => {
          adUnit.resizeAd(player.currentWidth(), player.currentHeight(), player.isFullscreen() ? 'fullscreen' : 'normal');
        }

        // not async so no timeout is required
        adUnit.handshakeVersion('2.0', onHandShake);
      }

      const creative = tracker.creative;

      const vpaidMediaFile = creative.mediaFiles.find(mediaFile => mediaFile.apiFramework === 'VPAID' && validMime(mediaFile));

      if (!vpaidMediaFile) {
        throw new Error('Invalid VPAID media file: only JavaScript is supported');
      }

      container = createVPAIDContainer(options);

      player.el().insertBefore(container, player.controlBar.el());

      const videoElement = determineVideoElement(player, options);

      const vpaidClient = new VPAIDHTML5Client(container, videoElement, {});

      vpaidClient.loadAdUnit(vpaidMediaFile.fileURL, adUnitLoad);
    });
  }

  removeMuteControl() {
    this.#controlBar?.remove();
    this.#controlBar = null;
  }

  addMuteControl(adUnit) {
    const controlBarDiv = global_document.createElement('div');
    controlBarDiv.className = 'vpaid-control-bar';

    this.#controlBar = controlBarDiv;

    const toggleMuteButton = global_document.createElement('button');
    toggleMuteButton.type = 'button';
    toggleMuteButton.className = 'vpaid-toggle-mute-button';

    const toggleMuteSpan = global_document.createElement('span');
    toggleMuteSpan.className = 'vpaid-icon-placeholder';

    toggleMuteButton.addEventListener('click', () => {
      this.#muted = !this.#muted;

      const newVolume = this.#muted ? 0 : (this.#volume || 1);

      adUnit.setAdVolume(newVolume, (/*error, callback*/)=>{});

      // NOTE: the mute icon button will be updated via the AdVolumeChange event (triggered by the adUnit).
    });

    toggleMuteButton.appendChild(toggleMuteSpan);
    controlBarDiv.appendChild(toggleMuteButton);

    const player = this.#player;

    player.el().insertBefore(controlBarDiv, player.controlBar.el());

    adUnit.getAdVolume((error, currentVolume) => {
      if (error) return;
      this.setVolume(currentVolume);
    });
  }

// TODO: review. may not need.
  cancel() {
    this.#cancelled = true;
    if (this.#started) {
      this.#eventTarget.trigger('forceStopAd');
    }
  }

  setVolume(v) {
    this.#volume = v;
    this.#muted = v === 0;
    this.updateControlBar();
  }

  updateControlBar() {
    if (this.#controlBar != null) {
      let className = this.#controlBar.className;
      className = className.replaceAll('mute', '').trim();
      className += this.#muted ? ' mute' : '';
      this.#controlBar.className = className;
    }
  }
}

function determineVideoElement(player, options) {
  const videoInstance = options.vpaid.videoInstance;

  let videoElement;

  if (videoInstance === 'none') {
    videoElement = null;
  } else {
    if (videoInstance !== 'same') {
      console.log(`${videoInstance} is an invalid videoInstance value. Defaulting to 'same'.`);
    }
    // Same as: player.el().querySelector('.vjs-tech');
    videoElement = player.tech({kindaKnowWhatImDoing: true}).el();
    if (videoElement == null) {
      console.log(`Unable to find the video element for VPAID.`);
    }
  }
  return videoElement;
}

function validMime(mediaFile) {
    return VALID_TYPES.indexOf(mediaFile.mimeType.trim()) > -1;
}

function createVPAIDContainer(options) {
    const containerClass = options.vpaid.containerClass;

    const vpaidContainerElement = global_document.createElement('div');

    if (containerClass) {
      vpaidContainerElement.classList.add(containerClass);
    }

    return vpaidContainerElement;
}

/**
 *
 * @param {function} handler
 * @param {function()|null} timeoutFn
 * @return {function(): void}
 */

function withTimeout(handler, timeoutFn = null) {
  // TODO: configurable timeout
  const id = setTimeout(() => {
    handler = () => {
    };
    if (timeoutFn) {
      timeoutFn();
    }
  }, 10000);

  return function () {
    clearTimeout(id);
    handler.apply(null, arguments);
  };
}

/**
 * @param {object} adUnit
 * @param {string} evtName
 * @param {function} handler
 * @param {function(Error)} timeoutFn
 */
function subscribeWithTimeout(adUnit, evtName, handler, timeoutFn) {
  const fn = withTimeout(handler, () => {
    if (timeoutFn) {
      timeoutFn(new Error(`Timeout while waiting for ${evtName} event.`));
    }
  });

  adUnit.subscribe(evtName, fn);
}

;// ./src/vast-plugin.mjs











const Plugin = __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.getPlugin('plugin');

const DEFAULT_OPTIONS = Object.freeze({
  seekEnabled: false,
  controlsEnabled: false,
  wrapperLimit: 10,
  withCredentials: true,
  skip: 0,
  displayRemainingTime: false,
  displayRemainingTimeIcons: false,
  messages: {
    skip: 'Skip',
    skipCountdown: 'Skip in {seconds}...',
    remainingTime: 'This ad will end in {seconds}',
  },
  vpaid: {
    containerClass: 'vjs-vpaid-container',
    videoInstance: 'none'
  },
  companion: {
    elementId: null,
    maxWidth: 0,
    maxHeight: 0
  },
  honorSkipOffset: false,
});

/**
 * VastPlugin
 */
class VastPlugin extends Plugin {

  /**
   * Constructor
   *
   * @param {Object} player The Video.js player object
   * @param {Object} options Plugin config
   */
  constructor(player, options) {
    super(player);
    // Could be initialized already by user
    if (typeof player.ads === 'function') {
      player.ads({debug: false, liveCuePoints: false});
    }

    player.on('play', function() {
      console.log('play event triggered');
    });

    console.log(`videojsx-vast-plugin running`);

    const mergeOptionsFunction = parseInt(__WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.VERSION, 10) >= 8 ? __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.obj.merge : __WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.mergeOptions;
    options = mergeOptionsFunction(DEFAULT_OPTIONS, options || {});

    /** @type {VASTClient} */
    const vastClient = new vast_client_min.VASTClient();
    /** @type {TrackedAd[]} */
    const ads = [];
    /** @type {TrackedAd|null} */
    let currentAd = null;
    /** @type {Number} */
    let adCount = 0;
    /** @type {Number} */
    let adTotal = 0;
    /** @type {VPAIDHandler} */
    const vpaidHandler = new VPAIDHandler(player, options);
    /** @type {boolean} */
    let timedOut = false;

    let schedule = options.schedule;
    if (schedule == null || schedule.length === 0) {
      schedule = [
        {
          offset: 0,
          url: options.url || null,
          xml: options.xml || null
        }
      ]
    } else {
      schedule = cloneJson(schedule);
      schedule.forEach(item => delete item.offsetInSeconds);
    }

    const preRollScheduleItem = findFirstPreroll(schedule);
    const postRollScheduleItem = findFirstPostroll(schedule);
    const midRollScheduleItems = findAllMidrolls(schedule).sort((a, b) => a.offset - b.offset);

    const autoplay = player.autoplay();

    player.on('adtimeout', () => {
      // failed to show an ad on time when in the "play" state
      timedOut = true;
    });

    const ui = new UI(player, options);

    function skip () {
      if (currentAd?.hasVideoMedia()) {
        currentAd.linearAdTracker.skip();
        player.trigger({
          type: 'vast.skipAd',
          vast: createVASTContext(currentAd.linearAdTracker)
        });
        playNextAd();
      }
    }

    ui.on('skip', skip);
    ui.on('click', () => {
      currentAd.linearAdTracker.click();
    });

    const onTimeUpdate = (() => {
      let lock = false;
      return () => {
        if (lock) return;

        let offsetInSeconds = null;
        while (midRollScheduleItems.length > 0) {
          offsetInSeconds = midRollScheduleItems[0].offsetInSeconds;
          if (offsetInSeconds != null) {
            break;
          }
          const {offset} = midRollScheduleItems[0];
          offsetInSeconds = convertOffsetToSeconds(offset, player.duration());
          if (offsetInSeconds == null) {
            midRollScheduleItems.shift();
          } else {
            midRollScheduleItems[0].offsetInSeconds = offsetInSeconds;
          }
        }

        if (offsetInSeconds != null) {
          if (this.player.currentTime() > offsetInSeconds) {
            lock = true;
            const scheduleItem = midRollScheduleItems.shift();
            adLoader.loadAds(scheduleItem)
              .then(trackedAds => {
                if (trackedAds.length > 0) {
                  ads.push(...trackedAds);
                  currentAd = null;
                  startAdBreak();
                }
              })
              .catch(err => {
                console.log(`An error occurred when loading ads for the midroll ad break: : ${err?.message}`);
              })
              .finally(() => {
                lock = false;
              });
          }
        }
      }
    })();

    if (midRollScheduleItems.length > 0) {
      player.on('timeupdate', onTimeUpdate);
    }

    player.on('readyforpostroll', () => {
      timedOut = false;
      adLoader.loadAds(postRollScheduleItem)
        .then(trackedAds => {
          if (timedOut) {
            trackedAds.forEach(ad => {
              ad.linearAdTracker.error({
                ERRORCODE: 301 // VAST redirect timeout reached
              });
            })
          }
          else if (trackedAds.length > 0) {
            ads.push(...trackedAds);
            currentAd = null;
            startAdBreak();
          }
          else {
            player.trigger('nopostroll');
          }
        })
        .catch(err => {
          console.log(`An error occurred when loading ads for the postroll ad break: : ${err.message}`);
          player.trigger('nopostroll');
        })
    });

    player.on('readyforpreroll', () => {
      startAdBreak();
    });

    const signalAdsReady = once(() => {
      // Can only signal 'adsready' in Preroll and BeforePreroll states (in videojs-contrib-ads).
      // So we need to signal even when we have no pre-rolls - because we may get mid or post rolls later.
      player.trigger('adsready');
    })

    // TODO: calculate reasonable timeout based on contrib-ads settings
    setTimeout(signalAdsReady, 3000);

    const adLoader = new AdLoader(vastClient, new vast_client_min.VASTParser(), new AdSelector(), options);
    adLoader.loadAds(preRollScheduleItem)
      .then(trackedAds => {
        if (timedOut) {
          trackedAds.forEach(ad => {
            ad.linearAdTracker.error({
              ERRORCODE: 301 // VAST redirect timeout reached
            });
          })
        }
        else if (trackedAds.length > 0) {
          ads.push(...trackedAds);
          currentAd = null;
          // do not start ad break here
        }
        else {
          player.trigger('nopreroll');
        }
      })
      .catch(err => {
        console.log(`An error occurred when loading ads for the preroll ad break: ${err.message}`);
        player.trigger('nopreroll');
      })
      .finally(() => {
        signalAdsReady();
        if (autoplay) {
          player.play();
        }
      });

    /**
     * Create Source Objects
     *
     * @param {Array<MediaFile>} mediaFiles  Array of media files
     * @return {Array} Array of source objects
     */
    const createSourceObjects = (mediaFiles) => {
      return mediaFiles
        .filter(mediaFile => mediaFile.apiFramework == null)
        .map(mediaFile => ({type: mediaFile.mimeType, src: mediaFile.fileURL}));
    }

    const playNextAd = () => {
      const nextAd = ads.shift();

      // do not change ui for vpaid
      if (nextAd?.hasVideoMedia()) {
        if (!currentAd?.hasVideoMedia()) {
          ui.setUp();
        }
      } else {
        if (currentAd?.hasVideoMedia()) {
          ui.tearDown();
        }
      }

      if (nextAd) {
        currentAd = nextAd;
        adCount++;
        console.log(`Playing ad ${adCount}/${adTotal}`);

        if (currentAd.hasVideoMedia()) {
          const allMediaFiles = currentAd.linearCreative.mediaFiles;

          const streamingMediaFiles = allMediaFiles
            .filter(mediaFile => mediaFile.deliveryType === 'streaming')

          const nonStreamingMediaFiles = allMediaFiles
            .filter(mediaFile => mediaFile.deliveryType !== 'streaming');

          if (nonStreamingMediaFiles.length > 0) {
            player.src(createSourceObjects(nonStreamingMediaFiles));
          }
          else if (streamingMediaFiles.length > 0) {
            let assetDuration = currentAd.linearAdTracker.assetDuration;
            if (assetDuration == null || assetDuration < 1) {
              console.log('Streaming ads must have a duration');
              playNextAd();
              return;
            }
            player.src(createSourceObjects(streamingMediaFiles));
            currentAd.skipAfterDuration = true;
          }
          ui.duration = currentAd.linearAdTracker.assetDuration || 0;
          const skipDelay = currentAd.linearAdTracker.skipDelay;
          ui.skipDelay = skipDelay != null && options.honorSkipOffset ? skipDelay : options.skip;
        } else {
          vpaidHandler.handle(currentAd.linearAdTracker)
            .then(() => {
              playNextAd();
            })
            .catch(err => {
              console.log(err);
              playNextAd();
            });
        }
        showCompanionAd();
      } else {
        currentAd = null;
        adCount = 0;
        endAdBreak();
      }
    }

    const {setUpEvents, tearDownEvents} = (() => {
      const adPlayFn = () => {
        if (currentAd.skipAfterDuration) {
          const ad = currentAd;
          setTimeout(() => {
            if (currentAd === ad) {
              skip();
            }
          }, ad.linearAdTracker.assetDuration * 1000);
        }

        if (!currentAd.linearAdTracker.impressed && currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.trackImpression();
          player.trigger({
            type: 'vast.adStart',
            vast: createVASTContext(currentAd.linearAdTracker)
          });
        }
      };

      const timeupdateFn = () => {
        if (currentAd) {
          if (isNaN(currentAd.linearAdTracker.assetDuration)) {
            currentAd.linearAdTracker.assetDuration = player.duration();
          }
          currentAd.linearAdTracker.setProgress(player.currentTime());
        }
      };

      const pauseFn = () => {
        if (player.remainingTime() > 0) {
          currentAd.linearAdTracker.setPaused(true);
          player.one('adplay', () => {
            currentAd.linearAdTracker.setPaused(false);
          });
        }
      };

      // args: err
      const adErrorFn = () => {
        const MEDIAFILE_PLAYBACK_ERROR = 405;
        currentAd.linearAdTracker.error({ERRORCODE: MEDIAFILE_PLAYBACK_ERROR});
        // Do not want to show VAST related errors to the user
        player.error(null);
        playNextAd();
      };

      const fullScreenFn = () => {
        // for 'fullscreen' & 'exitfullscreen'
        currentAd.linearAdTracker.setFullscreen(player.isFullscreen());
      };

      const muteFn = (() => {
        let previousMuted = player.muted();
        let previousVolume = player.volume();

        return () => {
          const volumeNow = player.volume();
          const mutedNow = player.muted();

          if (previousMuted !== mutedNow) {
            currentAd.linearAdTracker.setMuted(mutedNow);
            previousMuted = mutedNow;
          } else if (previousVolume !== volumeNow) {
            if (previousVolume > 0 && volumeNow === 0) {
              currentAd.linearAdTracker.setMuted(true);
            } else if (previousVolume === 0 && volumeNow > 0) {
              currentAd.linearAdTracker.setMuted(false);
            }

            previousVolume = volumeNow;
          }
        };
      })();

      const adEndedFn = () => {
        // Ad ended, not skipped
        if (currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.complete();
          player.trigger({
            type: 'vast.adEnd',
            vast: createVASTContext(currentAd.linearAdTracker)
          });
          playNextAd();
        }
      };

      return {
        setUpEvents: () => {
          player.on('adended', adEndedFn);
          player.on('adplay', adPlayFn);
          player.on('adtimeupdate', timeupdateFn);
          player.on('adpause', pauseFn);
          player.on('aderror', adErrorFn);
          player.on('advolumechange', muteFn);
          player.on('fullscreenchange', fullScreenFn);
        },
        tearDownEvents: () => {
          player.off('adended', adEndedFn);
          player.off('adplay', adPlayFn);
          player.off('adtimeupdate', timeupdateFn);
          player.off('adpause', pauseFn);
          player.off('aderror', adErrorFn);
          player.off('advolumechange', muteFn);
          player.off('fullscreenchange', fullScreenFn);
        }
      }
    })();

    const showCompanionAd = () => {
      const companionTracker = currentAd.companionTracker;
      const dest = global_document.getElementById(options.companion.elementId);

      if (companionTracker && companionTracker.variation && dest) {
        const variation = companionTracker.variation;

        const onClick = () => {
          companionTracker.click();
        };

        const hyperLink = global_document.createElement('a');

        hyperLink.src = '#';
        hyperLink.addEventListener('click', onClick);

        const image = global_document.createElement('img');

        image.src = variation.staticResources[0].url;

        hyperLink.appendChild(image);

        dest.innerHTML = '';
        dest.appendChild(hyperLink);
      } else if (dest) {
        // TODO: option to remove last companion ad when content plays?
        dest.innerHTML = '';
      }
    }

    const startAdBreak = () => {
      adTotal = ads.length;
      console.log(`Playing ${adTotal} ads`);
      player.ads.startLinearAdMode();
      setUpEvents();
      playNextAd();
    }

    function isPreroll(scheduleItem) {
      return scheduleItem.offset === 0 || scheduleItem.offset == null || scheduleItem.offset === 'pre'
    }

    function isPostroll(scheduleItem) {
      return scheduleItem.offset === 'post';
    }

    function findFirstPreroll(schedule) {
      return schedule.find(isPreroll);
    }

    function findFirstPostroll(schedule) {
      return schedule.find(isPostroll);
    }

    function findAllMidrolls(schedule) {
      return schedule.filter(item => !isPreroll(item) && !isPostroll(item));
    }

    const endAdBreak = () => {
      player.ads.endLinearAdMode();
      tearDownEvents();
      console.log('Playing content');
    }
  }
}

// eslint-disable-next-line no-undef
VastPlugin.VERSION = "1.0.0";

__WEBPACK_EXTERNAL_MODULE_video_js_03348944_default__.registerPlugin('vast', VastPlugin);



export { VastPlugin };

//# sourceMappingURL=videojsx.vast.es.js.map