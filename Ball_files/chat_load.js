(function(){var k,aa=aa||{},m=this;function ba(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function n(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function p(){}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==ca(a)}function r(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function s(a){return"string"==typeof a}function t(a){return"number"==typeof a}function v(a){return"function"==ca(a)}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return x.apply(null,arguments)}
function ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ja=Date.now||function(){return+new Date};
function ka(a){if(m.execScript)m.execScript(a,"JavaScript");else if(m.eval)if(null==la&&(m.eval("var _et_ = 1;"),"undefined"!=typeof m._et_?(delete m._et_,la=!0):la=!1),la)m.eval(a);else{var b=m.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}else throw Error("goog.globalEval not available");}var la=null;
function y(a,b){function c(){}c.prototype=b.prototype;a.s=b.prototype;a.prototype=new c;a.ga=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}}function ma(a){a.call(m)};function z(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}y(z,Error);z.prototype.name="CustomError";var na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function oa(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(va,"&#0;"));return a}var qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,ua=/'/g,va=/\x00/g,pa=/[\x00&<>"']/;
function xa(a,b){return a<b?-1:a>b?1:0}Math.random();var A=Array.prototype,ya=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},za=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=s(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Aa=A.some?function(a,b,c){return A.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=s(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function Ba(a){var b;t:{b=Ca;for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break t}b=-1}return 0>b?null:s(a)?a.charAt(b):a[b]}function Da(a,b){var c=ya(a,b),d;(d=0<=c)&&A.splice.call(a,c,1);return d}function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Fa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ga(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ha(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ja(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ia.length;f++)c=Ia[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B;t:{var Ka=m.navigator;if(Ka){var La=Ka.userAgent;if(La){B=La;break t}}B=""}function D(a){return-1!=B.indexOf(a)};var Ma=D("Opera")||D("OPR"),E=D("Trident")||D("MSIE"),F=D("Gecko")&&-1==B.toLowerCase().indexOf("webkit")&&!(D("Trident")||D("MSIE")),G=-1!=B.toLowerCase().indexOf("webkit");function Na(){var a=m.document;return a?a.documentMode:void 0}var Oa=function(){var a="",b;if(Ma&&m.opera)return a=m.opera.version,v(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(B))?a[1]:"");return E&&(b=Na(),b>parseFloat(a))?String(b):a}(),Pa={};
function H(a){var b;if(!(b=Pa[a])){b=0;for(var c=na(String(Oa)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),C=RegExp("(\\d*)(\\D*)","g");do{var w=l.exec(g)||["","",""],u=C.exec(h)||["","",""];if(0==w[0].length&&0==u[0].length)break;b=xa(0==w[1].length?0:parseInt(w[1],10),0==u[1].length?0:parseInt(u[1],10))||xa(0==w[2].length,0==u[2].length)||xa(w[2],u[2])}while(0==b)}b=Pa[a]=0<=b}return b}
var Qa=m.document,Ra=Qa&&E?Na()||("CSS1Compat"==Qa.compatMode?parseInt(Oa,10):5):void 0;var Sa=!E||E&&9<=Ra;!F&&!E||E&&E&&9<=Ra||F&&H("1.9.1");E&&H("9");function Ta(a,b){Fa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Ua?a.setAttribute(Ua[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Ua={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Va(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Sa&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',oa(g.name),'"');if(g.type){f.push(' type="',oa(g.type),'"');var h={};Ja(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(s(g)?f.className=g:q(g)?f.className=g.join(" "):Ta(f,g));2<d.length&&Wa(e,f,d);return f}
function Wa(a,b,c){function d(c){c&&b.appendChild(s(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];if(!r(f)||da(f)&&0<f.nodeType)d(f);else{var g;t:{if(f&&"number"==typeof f.length){if(da(f)){g="function"==typeof f.item||"string"==typeof f.item;break t}if(v(f)){g="function"==typeof f.item;break t}}g=!1}za(g?Ea(f):f,d)}}};function Xa(){var a=document.body,b;t:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break t}b=""}return"rtl"==(b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction)};function Ya(){this.a=ja()}new Ya;Ya.prototype.get=function(){return this.a};var I="StopIteration"in m?m.StopIteration:Error("StopIteration");function J(){}J.prototype.next=function(){throw I;};J.prototype.t=function(){return this};function Za(a){if(a instanceof J)return a;if("function"==typeof a.t)return a.t(!1);if(r(a)){var b=0,c=new J;c.next=function(){for(;;){if(b>=a.length)throw I;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function $a(a,b){if(r(a))try{za(a,b,void 0)}catch(c){if(c!==I)throw c;}else{a=Za(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(d){if(d!==I)throw d;}}}function ab(a){if(r(a))return Ea(a);a=Za(a);var b=[];$a(a,function(a){b.push(a)});return b};function bb(a,b){this.b={};this.a=[];this.d=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)cb(this,arguments[d],arguments[d+1])}else if(a){a instanceof bb?(c=a.r(),d=a.w()):(c=Ha(a),d=Ga(a));for(var e=0;e<c.length;e++)cb(this,c[e],d[e])}}k=bb.prototype;k.w=function(){db(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.r=function(){db(this);return this.a.concat()};
k.clear=function(){this.b={};this.d=this.c=this.a.length=0};function db(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};
function cb(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.c++,a.a.push(b),a.d++);a.b[b]=c}k.forEach=function(a,b){for(var c=this.r(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new bb(this)};k.t=function(a){db(this);var b=0,c=this.a,d=this.b,e=this.d,f=this,g=new J;g.next=function(){for(;;){if(e!=f.d)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw I;var g=c[b++];return a?g:d[g]}};return g};function eb(a){if("function"==typeof a.w)return a.w();if(s(a))return a.split("");if(r(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ga(a)}function fb(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(r(a)||s(a))za(a,b,void 0);else{var c;if("function"==typeof a.r)c=a.r();else if("function"!=typeof a.w)if(r(a)||s(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ha(a);else c=void 0;for(var d=eb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function gb(a){var b=m.onerror,c=!1;G&&!H("535.3")&&(c=!c);m.onerror=function(d,e,f,g,h){b&&b(d,e,f,g,h);a({message:d,fileName:e,$:f,ha:g,error:h});return c}};function hb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ib(){}
function jb(a,b,c){switch(typeof b){case "string":kb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(q(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),jb(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],"function"!=typeof f&&(c.push(d),kb(e,c),c.push(":"),jb(a,f,c),d=","));c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var lb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function kb(a,b){b.push('"',a.replace(mb,function(a){if(a in lb)return lb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return lb[a]=e+b.toString(16)}),'"')};function nb(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};function ob(){}ob.prototype.a=null;function pb(a){var b;(b=a.a)||(b={},qb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var rb;function sb(){}y(sb,ob);function tb(a){return(a=qb(a))?new ActiveXObject(a):new XMLHttpRequest}function qb(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}rb=new sb;var ub=[],vb=[],wb=!1;function xb(a){ub[ub.length]=a;if(wb)for(var b=0;b<vb.length;b++)a(x(vb[b].a,vb[b]))};function yb(a){m.setTimeout(function(){throw a;},0)}var zb;
function Ab(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=x(function(a){if(a.origin==d||a.data==c)this.port1.onmessage()},
this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){c=c.next;var a=c.W;c.W=null;a()};return function(a){d.next={W:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=
null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}function Bb(a){return a}xb(function(a){Bb=a});function Cb(a,b){Db||Eb();Fb||(Db(),Fb=!0);Gb.push(new Hb(a,b))}var Db;function Eb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve();Db=function(){a.then(Ib)}}else Db=function(){var a=Ib,a=Bb(a);!v(m.setImmediate)||m.Window&&m.Window.prototype.setImmediate==m.setImmediate?(zb||(zb=Ab()),zb(a)):m.setImmediate(a)}}var Fb=!1,Gb=[];function Ib(){for(;Gb.length;){var a=Gb;Gb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.a.call(c.b)}catch(d){yb(d)}}}Fb=!1}
function Hb(a,b){this.a=a;this.b=b};function Jb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function Kb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function K(a,b){this.b=0;this.f=void 0;this.a=this.e=null;this.c=this.d=!1;try{var c=this;a.call(b,function(a){L(c,2,a)},function(a){L(c,3,a)})}catch(d){L(this,3,d)}}function Lb(a){return new K(function(b){b(a)})}function Mb(){var a=Error("Real-time Support is not available from this hostname");return new K(function(b,c){c(a)})}K.prototype.then=function(a,b,c){return Nb(this,v(a)?a:null,v(b)?b:null,c)};Jb(K);function M(a,b){Nb(a,null,b,void 0)}
function Ob(a,b){a.a&&a.a.length||2!=a.b&&3!=a.b||Pb(a);a.a||(a.a=[]);a.a.push(b)}function Nb(a,b,c,d){var e={K:null,N:null,O:null};e.K=new K(function(a,g){e.N=b?function(c){try{var e=b.call(d,c);a(e)}catch(C){g(C)}}:a;e.O=c?function(b){try{var e=c.call(d,b);a(e)}catch(C){g(C)}}:g});e.K.e=a;Ob(a,e);return e.K}K.prototype.h=function(a){this.b=0;L(this,2,a)};K.prototype.g=function(a){this.b=0;L(this,3,a)};
function L(a,b,c){if(0==a.b){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(Kb(c)){a.b=1;c.then(a.h,a.g,a);return}if(da(c))try{var d=c.then;if(v(d)){Qb(a,c,d);return}}catch(e){b=3,c=e}}a.f=c;a.b=b;Pb(a);3!=b||Rb(a,c)}}function Qb(a,b,c){function d(b){f||(f=!0,a.g(b))}function e(b){f||(f=!0,a.h(b))}a.b=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}function Pb(a){a.d||(a.d=!0,Cb(a.i,a))}
K.prototype.i=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;b++){var c=a[b],d=this.f;if(2==this.b)c.N(d);else{for(var e=void 0,e=this;e&&e.c;e=e.e)e.c=!1;c.O(d)}}}this.d=!1};function Rb(a,b){a.c=!0;Cb(function(){a.c&&Sb.call(null,b)})}var Sb=yb;var Tb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,Ub=G;function Vb(a,b){if(Ub){Ub=!1;var c=m.location;if(c){var d=c.href;if(d&&(d=(d=Vb(3,d))?decodeURI(d):d)&&d!=c.hostname)throw Ub=!0,Error();}}return b.match(Tb)[a]||null}function Wb(a){a=Vb(1,a);!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1));return a?a.toLowerCase():""}
function Xb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}function Yb(a,b,c){if(q(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}function Zb(a,b,c){Math.max(b.length-(c||0),0);for(c=c||0;c<b.length;c+=2)Yb(b[c],b[c+1],a);return a}function $b(a,b){for(var c in b)Yb(c,b[c],a);return a}
function ac(a,b){return Xb(2==arguments.length?Zb([a],arguments[1],0):Zb([a],arguments,1))};function bc(a){var b={U:7E3,headers:void 0,withCredentials:void 0,T:void 0,V:void 0};return cc(a,b).then(function(a){var d=a.responseText;b&&b.V&&(a=b.V,0==d.lastIndexOf(a,0)&&(d=d.substring(a.length)));return hb(d)})}
function cc(a,b){return new K(function(c,d){var e=b||{},f,g=tb(rb);try{g.open("GET",a,!0)}catch(h){d(new N("Error opening XHR: "+h.message,a))}g.onreadystatechange=function(){if(4==g.readyState){m.clearTimeout(f);var b;!(b=nb(g.status))&&(b=0===g.status)&&(b=Wb(a),b=!("http"==b||"https"==b||""==b));b?c(g):d(new dc(g.status,a))}};g.onerror=function(){d(new N("Network error",a))};if(e.headers)for(var l in e.headers){var C=e.headers[l];null!=C&&g.setRequestHeader(l,C)}e.withCredentials&&(g.withCredentials=
e.withCredentials);e.T&&g.overrideMimeType(e.T);0<e.U&&(f=m.setTimeout(function(){g.onreadystatechange=p;g.abort();d(new ec(a))},e.U));try{g.send(null)}catch(w){g.onreadystatechange=p,m.clearTimeout(f),d(new N("Error sending XHR: "+w.message,a))}})}function N(a,b){z.call(this,a+", url="+b)}y(N,z);N.prototype.name="XhrError";function dc(a,b){N.call(this,"Request Failed, status="+a,b);this.a=a}y(dc,N);dc.prototype.name="XhrHttpError";function ec(a){N.call(this,"Request timed out",a)}y(ec,N);
ec.prototype.name="XhrTimeoutError";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function O(a,b){this.d=[];this.q=b||null;this.a=this.b=!1;this.c=void 0;this.i=this.l=this.f=!1;this.e=0;this.h=null;this.o=0}O.prototype.g=function(a,b){this.f=!1;fc(this,a,b)};function fc(a,b,c){a.b=!0;a.c=c;a.a=!b;gc(a)}function hc(a){if(a.b){if(!a.i)throw new ic;a.i=!1}}function jc(a,b,c){a.d.push([b,c,void 0]);a.b&&gc(a)}O.prototype.then=function(a,b,c){var d,e,f=new K(function(a,b){d=a;e=b});jc(this,d,function(a){e(a)});return f.then(a,b,c)};Jb(O);
function kc(a){return Aa(a.d,function(a){return v(a[1])})}
function gc(a){if(a.e&&a.b&&kc(a)){var b=a.e,c=lc[b];c&&(m.clearTimeout(c.u),delete lc[b]);a.e=0}a.h&&(a.h.o--,delete a.h);for(var b=a.c,d=c=!1;a.d.length&&!a.f;){var e=a.d.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.q,b);void 0!==h&&(a.a=a.a&&(h==b||h instanceof Error),a.c=b=h);Kb(b)&&(d=!0,a.f=!0)}catch(l){b=l,a.a=!0,kc(a)||(c=!0)}}a.c=b;d&&(h=x(a.g,a,!0),d=x(a.g,a,!1),b instanceof O?(jc(b,h,d),b.l=!0):b.then(h,d));c&&(b=new mc(b),lc[b.u]=b,a.e=b.u)}
function ic(){z.call(this)}y(ic,z);ic.prototype.message="Deferred has already fired";ic.prototype.name="AlreadyCalledError";function mc(a){this.u=m.setTimeout(x(this.b,this),0);this.a=a}mc.prototype.b=function(){delete lc[this.u];throw this.a;};var lc={};function nc(a,b){var c=b||{},d=c.document||document,e=document.createElement("SCRIPT"),f={a:e,v:void 0},g=new O(0,f),h=null,l=null!=c.timeout?c.timeout:5E3;0<l&&(h=window.setTimeout(function(){oc(e,!0);var b=new pc(1,"Timeout reached for loading script "+a);hc(g);fc(g,!1,b)},l),f.v=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(oc(e,c.Z||!1,h),hc(g),fc(g,!0,null))};e.onerror=function(){oc(e,!0,h);var b=new pc(0,"Error while loading script "+
a);hc(g);fc(g,!1,b)};Ta(e,{type:"text/javascript",charset:"UTF-8",src:a});qc(d).appendChild(e);return g}function qc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function oc(a,b,c){null!=c&&m.clearTimeout(c);a.onload=p;a.onerror=p;a.onreadystatechange=p;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}function pc(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);z.call(this,c)}y(pc,z);function rc(a){a=a||{};this.operatorDeferredUrl=a.operatorDeferredUrl;this.alphaTestMode=a.alphaTestMode||!1;this.stagingMode=a.stagingMode||!1;this.rosterId=a.rosterId||"talk_roster";this.feedbackId=a.feedbackId||74772;this.isRtl=a.isRtl||void 0;this.helpCenterName=a.helpCenterName||null;this.localeName=a.localeName||null;this.document=a.document||document};function sc(a){this.a=a instanceof rc?a:new rc(a);vc.test(this.a.document.location.hostname)&&M(wc(this),ia(xc,"Error retrieving OperatorDeferred"))}var yc=["googleapis.com","www.googleapis.com"],vc=/(adwords|support|.+\.corp)\.google\./i,zc=null;
function wc(a){var b=Ac();if(b)return b;if(b=Bc())return a=Lb(b),Cc(a),a;a=Dc(a).then(function(a){var b={timeout:void 0,Z:void 0,document:this.a.document};this.a.operatorDeferredUrl=a;return nc(a,b).then(function(){return m.cs.OperatorDeferred.getInstance(this.a)},null,this)},null,a);Cc(a);return a}
function Dc(a){return a.a.operatorDeferredUrl?Lb(a.a.operatorDeferredUrl):0<=ya(yc,document.domain)?Mb():bc(Ec(a.a)+"/realtimesupport/v1/customers/operatorUrl?key=AIzaSyB5V4SIBGmrqREm7kf2fBJgPcBMCdUrLzE").then(function(a){return a[1]},function(a){if(!(a instanceof dc&&0===a.a))throw a;zc=a;return"https://ssl.gstatic.com/support/realtime/operator/20140728_1406593703/operatordeferred_bin_base.js"})}
function Ec(a){return a.alphaTestMode?"https://content-googleapis-test.sandbox.google.com":a.stagingMode?"https://content-googleapis-staging.sandbox.google.com":"https://www.googleapis.com"}function Bc(){return m.cs&&m.cs.operatorDeferredInstance?m.cs.operatorDeferredInstance:null}function Ac(){var a=m.cs.Operator.operatorPromise;return a instanceof K?a:null!=a?Lb(a):null}function Cc(a){m.cs.Operator.operatorPromise=a}
function Fc(a,b){return wc(a).then(ia(function(a,b){b.registerAvailabilityCallbacks(a);if(zc)throw zc;},b))}function Gc(a){return wc(a).then(function(a){a.getAvailabilities()})}function Hc(a,b,c){b=ia(function(a,b,c,g,h){return h.requestSupport(a,b,c,g)},b,c,void 0,!0);return(c=Bc())?(a=b(c),Lb(a)):wc(a).then(b)}function xc(){}ba("cs.Operator",sc);function P(){this.d=this.d;this.h=this.h}P.prototype.d=!1;P.prototype.isDisposed=function(){return this.d};P.prototype.D=function(){this.d||(this.d=!0,this.j())};P.prototype.j=function(){if(this.h)for(;this.h.length;)this.h.shift()()};function Q(a,b){this.type=a;this.a=this.b=b;this.P=!0}Q.prototype.D=function(){};Q.prototype.c=function(){this.P=!1};function Ic(a){Ic[" "](a);return a}Ic[" "]=p;var Jc=!E||E&&9<=Ra,Kc=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||Ma&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");function R(a,b){Q.call(this,a?a.type:"");this.a=this.b=null;this.clientY=this.clientX=0;this.d=null;if(a){this.type=a.type;this.b=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&F)try{Ic(c.nodeName)}catch(d){}this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.d=a;a.defaultPrevented&&this.c()}}y(R,Q);
R.prototype.c=function(){R.s.c.call(this);var a=this.d;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Kc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Lc="closure_listenable_"+(1E6*Math.random()|0),Mc=0;function Nc(a,b,c,d,e){this.n=a;this.a=null;this.src=b;this.type=c;this.A=!!d;this.C=e;this.key=++Mc;this.p=this.B=!1}function Oc(a){a.p=!0;a.n=null;a.a=null;a.src=null;a.C=null};function Pc(a){this.src=a;this.a={};this.b=0}function Qc(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Rc(b,c,e,f);-1<h?(a=b[h],d||(a.B=!1)):(a=new Nc(c,a.src,g,!!e,f),a.B=d,b.push(a));return a}function Sc(a,b){var c=b.type;c in a.a&&Da(a.a[c],b)&&(Oc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Rc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.p&&f.n==b&&f.A==!!c&&f.C==d)return e}return-1};var Tc="closure_lm_"+(1E6*Math.random()|0),Uc={},Vc=0;function Wc(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Wc(a,b[f],c,d,e);else if(c=Xc(c),a&&a[Lc])Qc(a.m,String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=Yc(a);g||(a[Tc]=g=new Pc(a));c=Qc(g,b,c,!1,d,e);c.a||(d=Zc(),c.a=d,d.src=a,d.n=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent($c(b.toString()),d),Vc++)}}
function Zc(){var a=ad,b=Jc?function(c){return a.call(b.src,b.n,c)}:function(c){c=a.call(b.src,b.n,c);if(!c)return c};return b}function bd(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)bd(a,b[f],c,d,e);else(c=Xc(c),a&&a[Lc])?(a=a.m,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Rc(f,c,d,e),-1<c&&(Oc(f[c]),A.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Yc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Rc(b,c,!!d,e)),(c=-1<a?b[a]:null)&&cd(c))}
function cd(a){if(!t(a)&&a&&!a.p){var b=a.src;if(b&&b[Lc])Sc(b.m,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.A):b.detachEvent&&b.detachEvent($c(c),d);Vc--;(c=Yc(b))?(Sc(c,a),0==c.b&&(c.src=null,b[Tc]=null)):Oc(a)}}}function $c(a){return a in Uc?Uc[a]:Uc[a]="on"+a}function dd(a,b,c,d){var e=1;if(a=Yc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.A==c&&!f.p&&(e&=!1!==ed(f,d))}return Boolean(e)}
function ed(a,b){var c=a.n,d=a.C||a.src;a.B&&cd(a);return c.call(d,b)}
function ad(a,b){if(a.p)return!0;if(!Jc){var c=b||n("window.event"),d=new R(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){t:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break t}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--)d.a=c[h],e&=dd(c[h],f,!0,d);for(h=0;h<c.length;h++)d.a=c[h],e&=dd(c[h],f,!1,d)}return e}return ed(a,new R(b,this))}function Yc(a){a=a[Tc];return a instanceof Pc?a:null}
var fd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xc(a){if(v(a))return a;a[fd]||(a[fd]=function(b){return a.handleEvent(b)});return a[fd]}xb(function(a){ad=a(ad)});function S(){P.call(this);this.m=new Pc(this);this.Y=this;this.I=null}y(S,P);S.prototype[Lc]=!0;S.prototype.addEventListener=function(a,b,c,d){Wc(this,a,b,c,d)};S.prototype.removeEventListener=function(a,b,c,d){bd(this,a,b,c,d)};
function T(a,b){var c,d=a.I;if(d){c=[];for(var e=1;d;d=d.I)c.push(d),++e}var d=a.Y,e=b,f=e.type||e;if(s(e))e=new Q(e,d);else if(e instanceof Q)e.b=e.b||d;else{var g=e,e=new Q(f,d);Ja(e,g)}var g=!0,h;if(c)for(var l=c.length-1;0<=l;l--)h=e.a=c[l],g=gd(h,f,!0,e)&&g;h=e.a=d;g=gd(h,f,!0,e)&&g;g=gd(h,f,!1,e)&&g;if(c)for(l=0;l<c.length;l++)h=e.a=c[l],g=gd(h,f,!1,e)&&g}
S.prototype.j=function(){S.s.j.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Oc(d[e]);delete a.a[c];a.b--}}this.I=null};function gd(a,b,c,d){b=a.m.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.p&&g.A==c){var h=g.n,l=g.C||g.src;g.B&&Sc(a.m,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.P};function hd(a,b,c){if(v(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function U(a){S.call(this);this.headers=new bb;this.o=a||null;this.b=!1;this.l=this.a=null;this.f=this.G="";this.c=this.F=this.e=this.q=!1;this.i=0;this.g=null;this.L="";this.H=this.X=!1}y(U,S);var id=/^https?$/i,jd=["POST","PUT"],kd=[];k=U.prototype;k.ba=function(){this.D();Da(kd,this)};
k.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.G+"; newUri="+a);b=b?b.toUpperCase():"GET";this.G=a;this.f="";this.q=!1;this.b=!0;this.a=this.o?tb(this.o):tb(rb);this.l=this.o?pb(this.o):pb(rb);this.a.onreadystatechange=x(this.M,this);try{this.F=!0,this.a.open(b,String(a),!0),this.F=!1}catch(e){ld(this,e);return}a=c||"";var f=this.headers.clone();d&&fb(d,function(a,b){cb(f,b,a)});d=Ba(f.r());c=m.FormData&&a instanceof m.FormData;!(0<=ya(jd,
b))||d||c||cb(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.L&&(this.a.responseType=this.L);"withCredentials"in this.a&&(this.a.withCredentials=this.X);try{md(this),0<this.i&&((this.H=nd(this.a))?(this.a.timeout=this.i,this.a.ontimeout=x(this.v,this)):this.g=hd(this.v,this.i,this)),this.e=!0,this.a.send(a),this.e=!1}catch(g){ld(this,g)}};function nd(a){return E&&H(9)&&t(a.timeout)&&void 0!==a.ontimeout}
function Ca(a){return"content-type"==a.toLowerCase()}k.v=function(){"undefined"!=typeof aa&&this.a&&(this.f="Timed out after "+this.i+"ms, aborting",T(this,"timeout"),this.a&&this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1,T(this,"complete"),T(this,"abort"),od(this)))};function ld(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.f=b;pd(a);od(a)}function pd(a){a.q||(a.q=!0,T(a,"complete"),T(a,"error"))}
k.j=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),od(this,!0));U.s.j.call(this)};k.M=function(){this.isDisposed()||(this.F||this.e||this.c?qd(this):this.J())};k.J=function(){qd(this)};
function qd(a){if(a.b&&"undefined"!=typeof aa&&(!a.l[1]||4!=V(a)||2!=rd(a)))if(a.e&&4==V(a))hd(a.M,0,a);else if(T(a,"readystatechange"),4==V(a)){a.b=!1;try{var b=rd(a),c;if(!(c=nb(b))){var d;if(d=0===b){var e=Wb(String(a.G));d=!id.test(e)}c=d}if(c)T(a,"complete"),T(a,"success");else{var f;try{f=2<V(a)?a.a.statusText:""}catch(g){f=""}a.f=f+" ["+rd(a)+"]";pd(a)}}finally{od(a)}}}
function od(a,b){if(a.a){md(a);var c=a.a,d=a.l[0]?p:null;a.a=null;a.l=null;b||T(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function md(a){a.a&&a.H&&(a.a.ontimeout=null);t(a.g)&&(m.clearTimeout(a.g),a.g=null)}function V(a){return a.a?a.a.readyState:0}function rd(a){try{return 2<V(a)?a.a.status:-1}catch(b){return-1}}xb(function(a){U.prototype.J=a(U.prototype.J)});function W(a){P.call(this);this.b=a}y(W,P);W.prototype.a=function(a){return sd(this,a)};function X(a,b){return(b?"__wrapper_":"__protected_")+(a[ea]||(a[ea]=++fa))+"__"}function sd(a,b){var c=X(a,!0);b[c]||((b[c]=td(a,b))[X(a,!1)]=b);return b[c]}function td(a,b){function c(){if(a.isDisposed())return b.apply(this,arguments);try{return b.apply(this,arguments)}catch(c){throw a.b(c),new ud(c);}finally{}}c[X(a,!1)]=b;return c}
function vd(a,b){var c=n("window"),d=c[b];c[b]=function(b,c){s(b)&&(b=ia(ka,b));b=sd(a,b);return d.call?d.call(this,b,c):d(b,c)};c[b][X(a,!1)]=d}W.prototype.j=function(){var a=n("window"),b;b=a.setTimeout;b=b[X(this,!1)]||b;a.setTimeout=b;b=a.setInterval;b=b[X(this,!1)]||b;a.setInterval=b;W.s.j.call(this)};function ud(a){z.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)));(a=a&&a.stack)&&s(a)&&(this.stack=a)}y(ud,z);function Y(a,b,c){S.call(this);this.e=b||null;this.c={};this.g=wd;this.f=a;if(!c)if(this.a=null,E&&!H("10"))gb(x(this.b,this));else{this.a=new W(x(this.b,this));vd(this.a,"setTimeout");vd(this.a,"setInterval");a=this.a;b=n("window");c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"];for(var d=0;d<c.length;d++){var e=c[d];c[d]in b&&vd(a,e)}a=this.a;wb=!0;b=x(a.a,a);for(c=0;c<ub.length;c++)ub[c](b);vb.push(a)}}y(Y,S);
function xd(a){Q.call(this,"a");this.error=a}y(xd,Q);function wd(a,b,c,d){var e=new U;kd.push(e);Qc(e.m,"ready",e.ba,!0,void 0,void 0);e.send(a,b,c,d)}
Y.prototype.b=function(a,b){var c;c=n("window.location.href");if(s(a))c={message:a,name:"Unknown error",lineNumber:"Not available",fileName:c,stack:"Not available"};else{var d,e,f=!1;try{d=a.lineNumber||a.$||"Not available"}catch(g){d="Not available",f=!0}try{e=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||c}catch(h){e="Not available",f=!0}c=!f&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}}var l;if(b){d={};for(l in b)d[l]=b[l];l=d}else l={};if(this.e)try{this.e(c,l)}catch(C){}d=c.stack;try{var w=ac(this.f,"script",c.fileName,"error",c.message.substring(0,2E3),"line",c.lineNumber),u;t:{var Dd=this.c,Ed;for(Ed in Dd){u=!1;break t}u=!0}u||(w=Xb($b([w],this.c)));u={};u.trace=d;if(l)for(var tc in l)u["context."+tc]=l[tc];var wa,uc=$b([],u);uc[0]="";wa=uc.join("");t(null)&&(wa=wa.substring(0,null));this.g(w,"POST",wa,this.i)}catch(Jd){}try{T(this,new xd(c))}catch(Kd){}};
Y.prototype.j=function(){var a=this.a;a&&"function"==typeof a.D&&a.D();Y.s.j.call(this)};ba("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();if(b&&JSON&&JSON.stringify){var d=JSON.stringify(b);200>=d.length&&(a.psdJson=d)}d=c||m;d.GOOGLE_FEEDBACK_START_ARGUMENTS=arguments;var e=a.serverUri||"//www.google.com/tools/feedback",f=d.GOOGLE_FEEDBACK_START;if(f)f.apply(d,arguments);else{var e=e+"/load.js?",g;for(g in a)f=a[g],null!=f&&!da(f)&&(e+=encodeURIComponent(g)+"="+encodeURIComponent(f)+"&");g=d.document;d=g.createElement("script");d.src=e;g.body.appendChild(d)}});function Z(a,b,c,d,e){e=new Y(e||"//www.google.com/tools/feedback/jserror",void 0,!0);this.c=x(e.b,e);this.h=a;this.i=c||"en";this.g=b||!1;this.l=!!d;this.b=this.a=null}
function yd(a,b,c,d){var e=window;if(null==e||null==e.top||null==e.top.document||window.top.GOOGLE_HELP_CHAT_SUPPORT)return null;a=new Z(a,b,c,d);window.top.GOOGLE_HELP_CHAT_SUPPORT=a;b={helpCenterName:a.h,localeName:a.i,rosterId:"roster-for-Google-Help",isRtl:a.g,alphaTestMode:!1,stagingMode:a.l,timeoutMs:2E4};c=Va("div",{id:"roster-for-Google-Help",style:"display: none"});window.top.document.body.appendChild(c);try{a.d=new sc(b)}catch(f){a.c(f)}return a}
function zd(a,b,c){if(null!=b&&null!=c){var d={};d[b]=c;M(Fc(a.d,d),a.c)}}k=Z.prototype;k.Q=function(a){this.a=a;zd(this,this.a,this.e)};k.R=function(a){this.b=a;zd(this,this.b,this.f)};k.ea=function(a){this.e=a;zd(this,this.a,this.e)};k.fa=function(a){this.f=a;zd(this,this.b,this.f)};k.ca=function(a){null!=this.a&&M(Hc(this.d,this.a,a),this.c)};k.da=function(a){null!=this.b&&M(Hc(this.d,this.b,a),this.c)};k.S=function(){null==this.a&&null==this.b||M(Gc(this.d),this.c)};Z.prototype.setChatPool=Z.prototype.Q;
Z.prototype.setHangoutPool=Z.prototype.R;Z.prototype.setChatCallback=Z.prototype.ea;Z.prototype.setHangoutCallback=Z.prototype.fa;Z.prototype.requestChatSupport=Z.prototype.ca;Z.prototype.requestHangoutSupport=Z.prototype.da;Z.prototype.getAvailabilities=Z.prototype.S;function Ad(){};function Bd(){}y(Bd,Ad);Bd.prototype.clear=function(){var a=ab(this.t(!0)),b=this;za(a,function(a){b.k.removeItem(a)})};function $(a){this.k=a}y($,Bd);$.prototype.get=function(a){a=this.k.getItem(a);if(!s(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};$.prototype.t=function(a){var b=0,c=this.k,d=new J;d.next=function(){if(b>=c.length)throw I;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!s(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};$.prototype.clear=function(){this.k.clear()};$.prototype.key=function(a){return this.k.key(a)};function Cd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.k=a}y(Cd,$);function Fd(){this.a=new Cd}y(Fd,P);Fd.prototype.clear=function(){this.a.k.removeItem("GOOGLE_HELP_SESSION_STATE")};function Gd(a){var b=a.a.get("GOOGLE_HELP_SESSION_STATE");if(!b)return null;var b=window.JSON?window.JSON.parse(b):hb(b),c=(new Date).getTime(),d=b.sessionTimestamp;return!d||!t(d)||c>d+6E4?(a.clear(),null):b}
function Hd(a,b){if(b){b.sessionTimestamp=(new Date).getTime();var c=a.a,d;window.JSON?d=window.JSON.stringify(b):(d=[],jb(new ib,b,d),d=d.join(""));try{c.k.setItem("GOOGLE_HELP_SESSION_STATE",d)}catch(e){if(0==c.k.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}}};function Id(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";m.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/session_load.js";d.body.appendChild(e)}ba("userfeedback.api.help.resumeOpenHelpSession",Id);(function(a,b){var c=a.helpCenterPath,d=a.locale,e=a.escalationJSONString,f=!!a.useStagingServer,g=Xa(),h=yd(c,g,d,f),c=new Fd;e&&(c.clear(),Hd(c,{aa:JSON.parse(e).aa}));var l=(Gd(c)||{}).escalationOptions;h&&l&&ma(function(){var a=l.hangout||{},b=(l.chat||{}).chat_pool_id;b&&h.Q(b);(a=a.hangout_pool_id)&&h.R(a);h.S()});Id(a,b)}).apply(m,m.GOOGLE_HELP_CHAT_ARGUMENTS);})();
