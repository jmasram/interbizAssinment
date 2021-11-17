!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=7)}([function(e,n){var t={};n.set=function(e){t=e},n.get=function(){return t},n.getVersion=function(){return"staging-12"}},function(e,n,t){var r=t(0),i=t(3),o={error:1,warn:2,info:3,debug:4};function a(e){return r.get().logLevel>=e}function s(e,n,t,i){window.console[e]&&a(n)&&console[e].apply(console,function(e,n,t){return e=[].slice.call(e),r.get().logFormat?(n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cArgus")):e.unshift("Argus"),e}(t,e.toUpperCase()+":",i))}n.level=o,n.enabled=a,n.errorNoPost=function(){s("error",o.error,arguments,"#ff0000")},n.error=function(){s("error",o.error,arguments,"#ff0000"),i.queue("argus",{log:arguments,stack:(new Error).stack})},n.warn=function(){s("warn",o.warn,arguments,"#ffe600")},n.info=function(){s("info",o.info,arguments,"#3b88a3")},n.debug=function(){s("debug",o.debug,arguments,"#808080")}},function(e,n,t){function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(4),a=t(8),s=t(1),u={version:t(0).getVersion(),domain:window.location.host,href:window.location.href,id:"10000000-1000-4000-8000-100000000000".replace(/1|0/g,(function(){return(0|16*Math.random()).toString(16)})),init:o.startTime(),tzOffset:o.getTimezoneOffset(),tz:o.getTimezoneString(),device:{}};window._snigelConfig&&window._snigelConfig.site?u.domain=window._snigelConfig.site:window.snigelPubConf&&window.snigelPubConf.argus&&(u.domain=window.snigelPubConf.argus.domain);try{u.device=a.autoDetect(!0)}catch(e){s.error("Failed to detect device",e)}n.get=function(){return u},n.createEvent=function(e){return e.session=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},u),e.session.now=o.now(),e}},function(e,n,t){function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(u)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o=t(0),a=t(1),s=t(2),u=t(5),d={},c=[];function f(){var e,n=r(c);try{for(n.s();!(e=n.n()).done;){var t=e.value;l(t.eventSource,t.event)}}catch(e){n.e(e)}finally{n.f()}}n.flush=f,n.queue=function(e,n){var t=o.get();if(t.reportError){var r=e+JSON.stringify(n);d[r]||(d[r]=!0,a.debug("Queuing error event",n),c.push({eventSource:e,event:s.createEvent({error:n})}),1==c.length&&setTimeout(f,t.errorQueueDelay))}else a.debug("Skipping error event",n)};var g=!1;function l(e,n){var t=o.get();if(g)a.errorNoPost("Recursive error reporting canceled");else{g=!0;try{n.session||(n=s.createEvent({error:n}));for(var r=0;r<t.target.length;r++){var i=t.target[r];u.post(i.domain+i.errorPath+"/"+e,n,!0)}}catch(e){a.errorNoPost("Error reporting failed",e)}g=!1}}n.post=l},function(e,n){var t=window.performance,r=Math.floor(Date.now()-(t&&t.now?t.now():0));n.startTime=function(){return r},n.getTimezoneOffset=function(){return(new Date).getTimezoneOffset()},n.getTimezoneString=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone||(new Date).toTimeString().slice(9)},n.now=t&&t.now?function(){return Math.floor(t.now())}:function(){return Date.now()-r}},function(e,n,t){var r=t(1);n.post=function(e,n,t){var i=new XMLHttpRequest;i.open("POST",e,!0),i.setRequestHeader("Content-Type","text/plain"),i.onload=function(){r.info("Sent to "+e,n)},i.onerror=function(){r[t?"errorNoPost":"error"]("Failed sending to "+e,n)},i.send(JSON.stringify(n))}},function(e,n,t){function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u=t(0),d=t(1),c=t(2),f=t(5),g=[];function l(){var e,n=a(g);try{for(n.s();!(e=n.n()).done;){var t=e.value;p(t.eventSource,t.event)}}catch(e){n.e(e)}finally{n.f()}}function p(e,n){var t=u.get();n.session||(n=c.createEvent(i({},n)));for(var r=0;r<t.target.length;r++){var o=t.target[r],a=o.eventSource[e]?o.eventSource[e]:o.eventSource.default+"/"+e;f.post(o.domain+a,n)}}n.flush=l,n.queue=function(e,n){var t=u.get();d.debug("Queuing analytics event",n),g.push({eventSource:e,event:c.createEvent(i({},n))}),1==g.length&&setTimeout(l,t.eventQueueDelay)},n.post=p},function(e,n,t){var r=t(0),i=t(1),o=t(9),a=t(10),s=t(11),u=t(12),d=t(14),c=t(15),f=t(6),g=t(3),l=t(16),p={version:r.getVersion(),logLevel:2,logFormat:!0,target:[{domain:"//staging-argus-fra1.snigelweb.com",eventSource:{default:"/ingress/event",auction:"/ingress/auction"},errorPath:"/ingress/error"}],eventQueueDelay:3e3,auctionEventDelay:500,auctionBidWonEventDelay:200,reportError:Math.random()<=0.1,errorQueueDelay:5e3,tags:{adengineName:o.getAdEngineObjectName(),pbjsName:o.getPbjsObjectName(),gptName:o.getGptObjectName(),aptName:o.getApstagObjectName()}};if(r.set(p),window.argus=window.argus||{cmd:[]},window.argus.getConfig)i.error("Ignoring duplicate loading of Argus");else{window.argus.getConfig=r.get,window.argus.setConfig=r.set,window.argus.queueEvent=f.queue,window.argus.queueError=g.queue,a.init(),s.init(),u.init(),d.init(),c.init();for(var b=0;b<p.target.length;b++){var v=document.createElement("argprec"+b);v.rel="preconnect",v.href=p.target[b].domain,document.head.appendChild(v)}l.init()}},function(e,n){function t(e,n,t,i,o,a){var s,u,d,c=i||screen.width,f=o||screen.height,g=t,l=""+parseFloat(n),p=parseInt(n,10);-1!=(u=e.indexOf("Opera"))&&(g="Opera",l=e.substring(u+6),-1!=(u=e.indexOf("Version"))&&(l=e.substring(u+8))),-1!=(u=e.indexOf("OPR"))?(g="Opera",l=e.substring(u+4)):-1!=(u=e.indexOf("Edge"))?(g="Microsoft Legacy Edge",l=e.substring(u+5)):-1!=(u=e.indexOf("Edg"))?(g="Microsoft Edge",l=e.substring(u+4)):-1!=(u=e.indexOf("MSIE"))?(g="Microsoft Internet Explorer",l=e.substring(u+5)):"Netscape"==g&&-1!=e.indexOf("Trident/")?(g="Microsoft Internet Explorer",l=e.substring(u+5),-1!=(u=e.indexOf("rv:"))&&(l=e.substring(u+3))):-1!=(u=e.indexOf("Chrome"))?(g="Chrome",l=e.substring(u+7)):-1!=(u=e.indexOf("Safari"))?(g="Safari",l=e.substring(u+7),-1!=(u=e.indexOf("Version"))&&(l=e.substring(u+8)),-1!=e.indexOf("CriOS")&&(g="Chrome")):-1!=(u=e.indexOf("Firefox"))?(g="Firefox",l=e.substring(u+8)):(s=e.lastIndexOf(" ")+1)<(u=e.lastIndexOf("/"))&&(g=e.substring(s,u),l=e.substring(u+1),g.toLowerCase()==g.toUpperCase()&&(g=t)),-1!=(d=l.indexOf(";"))&&(l=l.substring(0,d)),-1!=(d=l.indexOf(" "))&&(l=l.substring(0,d)),-1!=(d=l.indexOf(")"))&&(l=l.substring(0,d)),p=parseInt(""+l,10),isNaN(p)&&(l=""+parseFloat(n));var b="Unknown",v=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Chrome OS",r:/CrOS/},{s:"Linux",r:/(Linux|X11(?!.*CrOS))/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|Bingbot|BingPreview)/}];for(var w in v){var m=v[w];if(m.r.test(e)){b=m.s;break}}var h="Unknown";function O(e,n){var t=e.exec(n);return t&&t.length>1?t[1].replace(new RegExp("[ _]+","g"),"."):"Unknown"}switch(/Windows/.test(b)&&(h=O(/Windows (.*)/,b),b="Windows"),b){case"Mac OS":case"Mac OS X":case"Android":h=O(/(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/,e);break;case"iOS":h=O(/OS ([._\d]+)/,n)}return{userAgent:e,appVersion:n,appName:t,platform:r(e),browser:g,browserVersion:l,os:b,osVersion:h,cookies:a,w:c,h:f}}function r(e){var n=new RegExp("(?:ipad|playbook|tablet|(?:android(?!.*(nexus|sm-(?:g9|n9|a10)))|bbd+|meego|silk)(?! .+? mobile))","i"),t=new RegExp("Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune","i");return n.test(e)?"tablet":t.test(e)?"mobile":"desktop"}n.autoDetect=function(e){var n=screen.width,r=screen.height,i=function(e){void 0===(e=!!e)&&(document.cookie="testcookie",e=-1!=document.cookie.indexOf("testcookie"));return e}(navigator.cookieEnabled);return e?{cookies:i,w:n,h:r}:t(navigator.userAgent,navigator.appVersion,navigator.appName,n,r,i)},n.detect=t,n.detectPlatform=r},function(e,n){function t(e,n){return window._snigelConfig&&window._snigelConfig.settings&&window._snigelConfig.settings[e]?window._snigelConfig.settings[e].objName:n}n.getAdEngineObjectName=function(){return t("adngin","adngin")},n.getApstagObjectName=function(){return t("apstag","apstag")},n.getGptObjectName=function(){return t("gpt","googletag")},n.getPbjsObjectName=function(){return t("pbjs","pbjs")}},function(e,n,t){var r=t(0),i=t(2);n.init=function(){var e=r.get(),n=i.get();if(window[e.tags.adengineName]){var t=window[e.tags.adengineName];t.queue.push((function(){e.tags.adengineObj=t,n.country=t.config.country,n.region=t.config.region,n.adengine={build:t.config.build,configVersion:t.config.id,tagId:t.config.cfwUuid}}))}}},function(e,n,t){var r=t(2),i=t(1);function o(e,n,t){var o=r.get();o.consentRegion=e,o.consent=n,t||(t="Consent region ["+e+"], consent: "+n),i.debug(t)}n.init=function(){window.__tcfapi?__tcfapi("addEventListener",2,(function(e,n){if(!n||"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus)n&&e.gdprApplies&&"cmpuishown"===e.eventStatus&&o("gdpr",void 0,"Consent unknown, waiting for user input");else{var t="none",r=!0;if(e.gdprApplies){var a=Object.keys(e.vendor.consents),s=Object.keys(e.purpose.consents);for(var u in t="gdpr",r=a.length>0&&s.length>0,a)if(!e.vendor.consents[a[u]]){i.debug("[gdpr] no vendor consent"),r=!1;break}for(var d in s)if(!e.purpose.consents[s[d]]){i.debug("[gdpr] no purpose consent"),r=!1;break}}else{if(window.__uspapi)return void __uspapi("getUSPData",1,(function(e,n){n&&"1---"!=e.uspString&&(t="ccpa","Y"==e.uspString.toUpperCase().charAt(2)&&(i.debug("[ccpa] no consent"),r=!1)),o(t,r)}));i.debug("__uspapi not found")}o(t,r)}})):i.debug("__tcfapi not found")}},function(e,n,t){var r=t(0),i=t(2),o=t(4),a=t(1),s=t(6),u=t(3),d=t(13),c=void 0;n.init=function(){var e=r.get(),n=i.get();window[e.tags.pbjsName]=window[e.tags.pbjsName]||{que:[]},(c=window[e.tags.pbjsName]).que.push((function(){e.tags.pbjs=c,n.pbjs={version:c.version};var t={auctionInit:y,auctionEnd:S,bidRequested:E,bidResponse:N,noBid:j,bidTimeout:C,bidWon:I,auctionDebug:T,adRenderFailed:U,tcf2Enforcement:P};for(var r in t)c.onEvent(r,t[r]);c.getEvents().forEach((function(e){var n=t[e.eventType];n&&n(e.args,e.elapsedTime)}))}))};var f=0;var g=0;var l={};var p={};var b={};function v(e,n){var t=b[e.auctionId];return t||(t={initEvent:e,start:n||o.now(),event:{counter:f++,timeout:e.timeout,start:e.timestamp,w:window.innerWidth,h:window.innerHeight,adUnits:[]},adUnitsMap:{}},e.adUnits.forEach((function(e){var n,r={code:e.code,name:e.name,path:e.adUnitPath||e.path,sizes:e.sizes,refresh:(n=e.code,void 0===l[n]?l[n]=0:l[n]++,l[n]),bids:[]};e.pubstack&&(!r.name&&e.pubstack.adUnitName&&(r.name=e.pubstack.adUnitName),!r.path&&e.pubstack.adUnitPath&&(r.path=e.pubstack.adUnitPath)),t.event.adUnits.push(r),t.adUnitsMap[r.code]={adUnitObj:r,addedToEvent:!0,bidsMap:{}}})),b[e.auctionId]=t),t}function w(e,n,t){function r(t){return"Cannot find "+t+"for auctionId: "+e+", adUnitCode: "+n}var i=e.event?e:b[e];if(!i){if(t)return;throw new Error(r("auction"))}var o=i.adUnitsMap[n];if(!o){if(t)return;throw new Error(r("ad-unit"))}return{auction:i,adUnit:o.adUnitObj,adUnitsMapEntry:o}}function m(e,n,t,r){var i=w(e,n);if(i){if(i.bid=i.adUnitsMapEntry.bidsMap[t],!i.bid){if(r)return;throw new Error("Cannot find bid for auctionId: "+e+", adUnitCode: "+n+", bidId: "+t)}return i}}function h(e,n,t,r){var i=w(e,n);return i.adUnitsMapEntry.addedToEvent||(i.adUnitsMapEntry.addedToEvent=!0,i.auction.event.adUnits.push(i.adUnit)),i.adUnit.bids.push(r),i.adUnitsMapEntry.bidsMap[t]=r,i.bid=r,i}function O(e,n){return!e.postEventTimerId&&(e.postEventTimerId=setTimeout((function(){try{!function(e){e.event.adUnits.forEach((function(e){for(var n=0;n<e.bids.length;n++){var t=e.bids[n];if("bidWon"!=t.state)for(var r=n+1;r<e.bids.length;r++)if("bidWon"!=e.bids[r].state&&e.bids[r].bidder==t.bidder){if(!t.cpm||e.bids[r].cpm>=t.cpm){e.bids[r].requestCount+=t.requestCount,e.bids.splice(n,1),n--;break}t.requestCount+=e.bids[r].requestCount,e.bids.splice(r,1),r--}}}))}(e),function(e){e.event.adUnits.forEach((function(e){for(var n=-1,t=0,r=0;r<e.bids.length;r++){var i=e.bids[r];"bidResponse"==i.state&&i.cpm>=t&&(n=r,t=i.cpm)}n>=0&&(e.bids[n].state="bidAuctionWon")}))}(e),s.post("auction",{auction:e.event}),function(e){var n={adUnits:[]};for(var t in e.event)void 0===n[t]&&(n[t]=e.event[t]);for(var r in e.adUnitsMap)e.adUnitsMap[r].addedToEvent=!1,e.adUnitsMap[r].adUnitObj.bids=[];e.event=n}(e),delete e.postEventTimerId}catch(e){a.error("postAuctionEvent",e)}}),n),!0)}function y(e,n){a.enabled(a.level.info)&&a.info("onAuctionInit: ",JSON.parse(JSON.stringify(e)));try{v(e,n)}catch(n){a.error("onAuctionInit",e,n)}}function S(e,n){a.enabled(a.level.info)&&a.info("onAuctionEnd: ",JSON.parse(JSON.stringify(e)));try{var t=b[e.auctionId];t||(t=v(e,n),e.bidderRequests.forEach((function(e){E(e)})),e.bidsReceived.forEach((function(e){N(e)})),e.noBids.forEach((function(e){j(e,t.start)})),e.winningBids.forEach((function(e){I(e)}))),t.endEvent=e,t.event.time=e.auctionEnd-e.timestamp,t.event.userId=function(e){var n={state:"notAvailable",modules:[],resolved:0,configured:0},t=c.getConfig();if(t.userSync&&t.userSync.userIds&&(n.configured=t.userSync.userIds.length),0==e.length)return n;function r(e,n){var t=!0;if(n){var r=0;for(var i in n)r++,-1==e.indexOf(i)&&(e.push(i),t=!1);e.length!=r&&(t=!1)}else e.length>0&&(t=!1);return t}var i=!0,o=!0;return e.forEach((function(e){e.bids.forEach((function(e){o?(o=!1,e.userId?n.modules=Object.keys(e.userId||{}):e.crumbs&&(n.modules=Object.keys(e.crumbs||{}))):e.userId?i=i&&r(n.modules,e.userId):e.crumbs&&(i=i&&r(n.modules,e.crumbs))}))})),i=i&&r(n.modules,c.getUserIds()),n.resolved=n.modules.length,n.modules.length>0&&i?n.state="available":n.modules.length>0&&!i&&(n.state="notConsistent",a.debug("pbjs inconsistent userIds")),n}(e.bidderRequests),e.bidderRequests.forEach((function(e){e.bids.forEach((function(n){var r=m(t,n.adUnitCode,n.bidId);void 0===r.bid.state&&(r.bid.state="bidTimeout"),"s2s"==n.src&&(r.bid.serverResponseTime=e.serverResponseTimeMs,r.bid.serverTimeout=e.timeout)}))})),a.info("auction event: ",t),O(t,r.get().auctionEventDelay)}catch(n){a.error("onAuctionEnd",e,n)}}function E(e){a.enabled(a.level.info)&&a.info("onBidRequested: ",JSON.parse(JSON.stringify(e)));try{e.bids.forEach((function(n){var t,r,i,o={counter:g++,bidder:n.bidder,id:(t=n.bidId,r=n.params,i=p[t],!i&&r&&(i=p[t]=d.hexCode(JSON.stringify(r))),i),src:n.src,requestCount:1};h(e.auctionId,n.adUnitCode,n.bidId,o)}))}catch(n){a.error("onBidRequested",e,n)}}function N(e){a.enabled(a.level.info)&&a.info("onBidResponse: ",JSON.parse(JSON.stringify(e)));try{var n=m(e.auctionId,e.adUnitCode,e.requestId).bid;if(n.cpm>e.cpm)return;n.state="bidTimeout"==n.state?"bidResponseTimeout":"bidResponse","bidRejected"==e.status&&(n.state="bidRejected"),n.cpm=e.cpm,n.currency=e.currency,n.origCpm=e.originalCpm,n.origCurrency=e.originalCurrency,n.size=e.size,n.responseTime=e.timeToRespond}catch(n){a.error("onBidResponse",e,n)}}function j(e,n){a.enabled(a.level.info)&&a.info("onNoBid: ",JSON.parse(JSON.stringify(e)));try{var t=m(e.auctionId,e.adUnitCode,e.bidId),r=t.bid;void 0===r.state&&(r.state="noBid",r.responseTime=Math.floor((n||o.now())-t.auction.start))}catch(n){a.error("onNoBid",e,n)}}function C(e){a.enabled(a.level.info)&&a.info("onBidTimeout: ",JSON.parse(JSON.stringify(e)));try{e.forEach((function(e){var n=m(e.auctionId,e.adUnitCode,e.bidId).bid;void 0===n.state&&(n.state="bidTimeout")}))}catch(n){a.error("onBidTimeout",e,n)}}function I(e){a.enabled(a.level.info)&&a.info("onBidWon: ",JSON.parse(JSON.stringify(e)));try{var n=function(e){var n=m(e.auctionId,e.adUnitCode,e.requestId,!0);if(!n)for(var t in b)if(t!=e.auctionId&&(n=m(t,e.adUnitCode,e.requestId,!0)))break;return n}(e);if(!n)throw new Error("Cannot find initial bidResponse for bidWon for "+e.requestId+" for ad-unit "+e.adUnitCode+" for auction "+e.auctionId);var t=JSON.parse(JSON.stringify(n.bid));t.state="bidWon",O((n=h(e.auctionId,e.adUnitCode,e.requestId+"_bidWon",t)).auction,r.get().auctionBidWonEventDelay)}catch(n){a.error("onBidWon",e,n)}}function T(e){try{"WARNING"!=e.type&&u.queue("prebid",e)}catch(n){a.error("onAuctionDebug",e,n)}}function U(e){try{u.queue("prebid",e)}catch(n){a.error("onAdRenderFailed",e,n)}}function P(e){try{u.queue("prebid",e)}catch(n){a.error("onTcf2Enforcement",e,n)}}},function(e,n){function t(e){var n,t=0;if(0===e.length)return t;for(n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}n.code=t,n.hexCode=function(e){for(var n=(t(e)>>>0).toString(16);n.length<8;)n="0"+n;return n}},function(e,n,t){var r=t(0),i=t(2);n.init=function(){var e=r.get(),n=i.get();window[e.tags.gptName]=window[e.tags.gptName]||{cmd:[]};var t=window[e.tags.gptName];t.cmd.push((function(){e.tags.gpt=t,n.gpt={version:t.getVersion()}}))}},function(e,n,t){var r=t(0),i=t(2);n.init=function(){var e=r.get(),n=i.get(),t=window[e.tags.aptName];t&&(e.tags.apt=t,n.apt={version:0})}},function(e,n,t){var r=t(1);function i(e){try{"function"==typeof e?e():r.warn("Cannot execute command, because not a function",e)}catch(e){r.error("execute command failed",e)}}n.init=function(){window.argus.cmd&&window.argus.cmd.length>0&&function(e){for(;e.length>0;)i(e[0]),e.splice(0,1)}(window.argus.cmd),window.argus.cmd={push:i}}}]);