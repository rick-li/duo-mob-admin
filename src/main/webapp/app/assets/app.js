/*
 AngularJS v1.2.1
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,O,s){'use strict';function F(b){return function(){for(var a=arguments[0],c=1,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.1/"+(b?b+"/":"")+a;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ob(b){if(null==b||za(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function p(b,a,c){var d;if(b)if(E(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==p)b.forEach(a,c);else if(ob(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Mc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Xa(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function A(b){var a=b.$$hashKey;p(arguments,function(a){a!==b&&p(a,function(a,c){b[c]=a})});Qb(b,a);return b}function R(b){return parseInt(b,
10)}function Rb(b,a){return A(new (A(function(){},{prototype:b})),a)}function w(){}function Aa(b){return b}function ca(b){return function(){return b}}function y(b){return"undefined"==typeof b}function C(b){return"undefined"!=typeof b}function U(b){return null!=b&&"object"==typeof b}function D(b){return"string"==typeof b}function pb(b){return"number"==typeof b}function Ja(b){return"[object Date]"==Ya.apply(b)}function K(b){return"[object Array]"==Ya.apply(b)}function E(b){return"function"==typeof b}
function Za(b){return"[object RegExp]"==Ya.apply(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Nc(b){return b&&(b.nodeName||b.on&&b.find)}function Oc(b,a,c){var d=[];p(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function $a(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ka(b,a){var c=$a(b,a);0<=c&&b.splice(c,1);return a}function fa(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw La("cpws");if(a){if(b===
a)throw La("cpi");if(K(b))for(var c=a.length=0;c<b.length;c++)a.push(fa(b[c]));else{c=a.$$hashKey;p(a,function(b,c){delete a[c]});for(var d in b)a[d]=fa(b[d]);Qb(a,c)}}else(a=b)&&(K(b)?a=fa(b,[]):Ja(b)?a=new Date(b.getTime()):Za(b)?a=RegExp(b.source):U(b)&&(a=fa(b,{})));return a}function Pc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(Ja(b))return Ja(a)&&b.getTime()==a.getTime();if(Za(b)&&Za(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function Sb(){return O.securityPolicy&&
O.securityPolicy.isActive||O.querySelector&&!(!O.querySelector("[ng-csp]")&&!O.querySelector("[data-ng-csp]"))}function qb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Qc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:za(a)?c="$WINDOW":a&&O===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Qc,a?"  ":null)}function Tb(b){return D(b)?JSON.parse(b):b}function Ma(b){b&&0!==b.length?(b=u(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=x(b).clone();try{b.html("")}catch(a){}var c=x("<div>").append(b).html();try{return 3===b[0].nodeType?u(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+u(b)})}catch(d){return u(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;p((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),C(d)&&(b=C(c[1])?Ub(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];p(b,function(b,d){K(b)?p(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function rb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Rc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;p(g,function(a){g[a]=!0;c(O.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(p(b.querySelectorAll("."+a),c),p(b.querySelectorAll("."+a+"\\:"),c),p(b.querySelectorAll("["+a+"]"),c))});p(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=
(b[2]||"").replace(/\s+/g,",")):p(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Xb(b,a){var c=function(){b=x(b);if(b.injector()){var c=b[0]===O?"document":ga(b);throw La("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");ab.resumeBootstrap=function(b){p(b,function(b){a.push(b)});c()}}function bb(b,a){a=a||"_";return b.replace(Sc,function(b,d){return(d?a:"")+b.toLowerCase()})}function sb(b,a,c){if(!b)throw La("areq",a||"?",c||"required");return b}function Na(b,a,c){c&&K(b)&&(b=b[b.length-1]);sb(E(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw La("badname",
a);}function tb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?qb(e,b):b}function ub(b){if(b.startNode===b.endNode)return x(b.startNode);var a=b.startNode,c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b.endNode);return x(c)}function Tc(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=F("$injector"),d=F("ng");return a(a(b,"angular",Object),"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname",
"module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e){return function(){b[e||"push"]([c,d,arguments]);return r}}if(!g)throw c("nomod",f);var b=[],d=[],e=a("$injector","invoke"),r={_invokeQueue:b,_runBlocks:d,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),
controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:e,run:function(a){d.push(a);return this}};h&&e(h);return r})}})}function Oa(b){return b.replace(Uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Vc,"Moz$1")}function vb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,r,q,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(r=x(k[l]),m?r.triggerHandler("$destroy"):m=!m,q=0,r=(z=r.children()).length;q<
r;q++)e.push(Ca(z[q]));return f.apply(this,arguments)}var f=Ca.fn[b],f=f.$original||f;e.$original=f;Ca.fn[b]=e}function L(b){if(b instanceof L)return b;if(!(this instanceof L)){if(D(b)&&"<"!=b.charAt(0))throw wb("nosel");return new L(b)}if(D(b)){var a=O.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);xb(this,a.childNodes);x(O.createDocumentFragment()).append(this)}else xb(this,b)}function yb(b){return b.cloneNode(!0)}function Pa(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Pa(b[a])}function $b(b,a,c,d){if(C(d))throw wb("offargs");var e=la(b,"events");la(b,"handle")&&(y(a)?p(e,function(a,c){zb(b,c,a);delete e[c]}):p(a.split(" "),function(a){y(c)?(zb(b,a,e[a]),delete e[a]):Ka(e[a]||[],c)}))}function Zb(b,a){var c=b[cb],d=Qa[c];d&&(a?delete Qa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Qa[c],b[cb]=s))}function la(b,a,c){var d=b[cb],d=Qa[d||-1];if(C(c))d||(b[cb]=d=++Wc,d=Qa[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=la(b,"data"),e=C(c),f=!e&&C(a),g=f&&!U(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];A(d,a)}else return d}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&p(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function xb(b,a){if(a){a=a.nodeName||!C(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return db(b,"$"+(a||"ngController")+"Controller")}function db(b,a,c){b=x(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}
function cc(b,a){var c=eb[a.toLowerCase()];return c&&dc[b.nodeName]&&c}function Xc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||O);if(y(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};p(a[e||c.type],
function(a){a.call(b,c)});8>=N?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Da(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=Xa()):c=b;return a+":"+c}function Ra(b){p(b,this.put,this)}function ec(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Yc,""),c=c.match(Zc),
p(c[1].split($c),function(b){b.replace(ad,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Na(b[c],"fn"),a=b.slice(0,c)):Na(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(U(b))p(b,Pb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(E(b)||K(b))b=n.instantiate(b);if(!b.$get)throw Sa("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;p(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ta(a),b=b.concat(e(c.requires)).concat(c._runBlocks),
d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else E(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Na(a,"module")}catch(l){throw K(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Sa("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Sa("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}finally{m.shift()}}
function d(a,b,e){var f=[],h=ec(a),g,k,l;k=0;for(g=h.length;k<g;k++){l=h[k];if("string"!==typeof l)throw Sa("itkn",l);f.push(e&&e.hasOwnProperty(l)?e[l]:c(l))}a.$inject||(a=a[g]);switch(b?-1:f.length){case 0:return a();case 1:return a(f[0]);case 2:return a(f[0],f[1]);case 3:return a(f[0],f[1],f[2]);case 4:return a(f[0],f[1],f[2],f[3]);case 5:return a(f[0],f[1],f[2],f[3],f[4]);case 6:return a(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6]);case 8:return a(f[0],f[1],
f[2],f[3],f[4],f[5],f[6],f[7]);case 9:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8]);case 10:return a(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9]);default:return a.apply(b,f)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||E(e)?e:c},get:c,annotate:ec,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Ra,l={$provide:{provider:a(c),factory:a(d),
service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ca(b))}),constant:a(function(a,b){va(a,"constant");l[a]=b;r[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Sa("unpr",m.join(" <- "));}),r={},q=r.$injector=f(r,function(a){a=n.get(a+h);return q.invoke(a.$get,a)});p(e(b),function(a){q.invoke(a||w)});return q}
function bd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;p(a,function(a){b||"a"!==u(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function cd(b,a,c,d){function e(a){try{a.apply(null,
ta.call(arguments,1))}finally{if(z--,0===z)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ia(){p(Q,function(a){a()});v=b(ia,a)})()}function g(){t=null;B!=h.url()&&(B=h.url(),p(ha,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,r=b.clearTimeout,q={};h.isMock=!1;var z=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){p(Q,function(a){a()});0===z?a():J.push(a)};
var Q=[],v;h.addPollFn=function(a){y(v)&&f(100,n);Q.push(a);return a};var B=k.href,G=a.find("base"),t=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(B!=a)return B=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),G.attr("href",G.attr("href"))):(t=a,c?k.replace(a):k.href=a),h}else return t||k.href.replace(/%27/g,"'")};var ha=[],Z=!1;h.onUrlChange=function(a){if(!Z){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else h.addPollFn(g);Z=!0}ha.push(a);
return a};h.baseHref=function(){var a=G.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var Y={},X="",ba=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+ba+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ba).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==X)for(X=m.cookie,d=X.split("; "),Y={},f=0;f<d.length;f++)e=
d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Y[a]===s&&(Y[a]=unescape(e.substring(h+1))));return Y}};h.defer=function(a,b){var c;z++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],r(a),e(w),!0):!1}}function dd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new cd(b,d,a,c)}]}function ed(){this.$get=function(){function b(b,d){function e(a){a!=n&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}
function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var g=0,h=A({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,r=null;return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!y(b))return a in m||g++,m[a]=b,g>k&&this.remove(r.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==r&&(r=b.n),f(b.n,b.p),delete l[a],delete m[a],g--)},removeAll:function(){m={};g=0;l={};n=r=null},destroy:function(){l=
h=m=null;delete a[b]},info:function(){return A({},h,{size:g})}}}var a={};b.info=function(){var b={};p(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function fd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b){var a={},c="Directive",d=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,e=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^\s*(https?|ftp|mailto|tel|file):/,g=/^\s*(https?|ftp|file):|data:image\//,h=/^(on[a-z]+|formaction)$/;this.directive=function k(d,
e){va(d,"directive");D(d)?(sb(e,"directiveFactory"),a.hasOwnProperty(d)||(a[d]=[],b.factory(d+c,["$injector","$exceptionHandler",function(b,c){var e=[];p(a[d],function(a,f){try{var h=b.invoke(a);E(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||d;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){c(g)}});return e}])),a[d].push(e)):p(d,Pb(k));return this};this.aHrefSanitizationWhitelist=function(a){return C(a)?
(f=a,this):f};this.imgSrcSanitizationWhitelist=function(a){return C(a)?(g=a,this):g};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate",function(b,l,n,r,q,z,J,Q,v,B,G){function t(a,b,c,d,e){a instanceof x||(a=x(a));p(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=x(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);return function(b,c,d){sb(b,"scope");var e=c?Ea.clone.call(a):
a;p(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d];1!=g.nodeType&&9!=g.nodeType||e.eq(d).data("$scope",b)}ha(e,"ng-scope");c&&c(e,b);f&&f(b,e,e);return e}}function ha(a,b){try{a.addClass(b)}catch(c){}}function Z(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,q,r,z,da=[];q=0;for(r=c.length;q<r;q++)da.push(c[q]);z=q=0;for(r=g.length;q<r;z++)k=da[z],c=g[q++],f=g[q++],l=x(k),c?(c.scope?(n=a.$new(),l.data("$scope",n),ha(l,"ng-scope")):n=a,(l=c.transclude)||!e&&
b?c(f,n,k,d,Y(a,l||b)):c(f,n,k,s,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,q=0;q<a.length;q++)l=new Db,k=X(a[q],[],l,0===q?d:s,e),k=(f=k.length?wa(k,a[q],l,b,c,null,[],[],f):null)&&f.terminal||!a[q].childNodes||!a[q].childNodes.length?null:Z(a[q].childNodes,f?f.transclude:b),g.push(f),g.push(k),n=n||f||k,f=null;return n?h:null}function Y(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",qb(c,c.$destroy));return d}}function X(a,b,c,f,h){var g=
c.$attr,k;switch(a.nodeType){case 1:ia(b,ma(Fa(a).toLowerCase()),"E",f,h);var l,n,q;k=a.attributes;for(var r=0,z=k&&k.length;r<z;r++){var t=!1,J=!1;l=k[r];if(!N||8<=N||l.specified){n=l.name;q=ma(n);Eb.test(q)&&(n=bb(q.substr(6),"-"));var B=q.replace(/(Start|End)$/,"");q===B+"Start"&&(t=n,J=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));q=ma(n.toLowerCase());g[q]=n;c[q]=l=aa(N&&"href"==n?decodeURIComponent(a.getAttribute(n,2)):l.value);cc(a,q)&&(c[q]=!0);L(a,b,l,q);ia(b,q,"A",f,h,t,J)}}a=a.className;
if(D(a)&&""!==a)for(;k=e.exec(a);)q=ma(k[2]),ia(b,q,"C",f,h)&&(c[q]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=d.exec(a.nodeValue))q=ma(k[1]),ia(b,q,"M",f,h)&&(c[q]=aa(k[2]))}catch(p){}}b.sort(w);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function P(a,
b,c){return function(d,e,f,h,g){e=ba(e[0],b,c);return a(d,e,f,h,g)}}function wa(a,b,c,d,e,f,h,g,k){function q(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=H.require;if(v===H||H.$$isolateScope)a=T(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=P(b,c,d));b.require=H.require;if(v===H||H.$$isolateScope)b=T(b,{isolateScope:!0});g.push(b)}}function r(a,b,c){var d,e="data",f=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+
a+"Controller");if(!d&&!f)throw ja("ctreq",a,w);}else K(a)&&(d=[],p(a,function(a){d.push(r(a,b,c))}));return d}function B(a,d,e,f,k){function q(a,b){var c;2>arguments.length&&(b=a,a=s);ia&&(c=P);return k(a,b,c)}var t,da,Q,G,ba,I,P={},X;t=b===e?c:Pc(c,new Db(x(e),c.$attr));da=t.$$element;if(v){var S=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=x(e);I=d.$new(!0);Y&&Y===v.$$originalDirective?f.data("$isolateScope",I):f.data("$isolateScopeNoTemplate",I);ha(f,"ng-isolate-scope");p(v.scope,function(a,b){var c=a.match(S)||
[],e=c[3]||b,f="?"==c[2],c=c[1],h,k,g;I.$$isolateBindings[b]=c+e;switch(c){case "@":t.$observe(e,function(a){I[b]=a});t.$$observers[e].$$scope=d;t[e]&&(I[b]=l(t[e])(d));break;case "=":if(f&&!t[e])break;k=z(t[e]);g=k.assign||function(){h=I[b]=k(d);throw ja("nonassign",t[e],v.name);};h=I[b]=k(d);I.$watch(function(){var a=k(d);a!==I[b]&&(a!==h?h=I[b]=a:g(d,a=h=I[b]));return a});break;case "&":k=z(t[e]);I[b]=function(a){return k(d,a)};break;default:throw ja("iscp",v.name,b,a);}})}X=k&&q;Z&&p(Z,function(a){var b=
{$scope:a===v||a.$$isolateScope?I:d,$element:da,$attrs:t,$transclude:X},c;ba=a.controller;"@"==ba&&(ba=t[a.name]);c=J(ba,b);P[a.name]=c;ia||da.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(Q=h.length;f<Q;f++)try{G=h[f],G(G.isolateScope?I:d,da,t,G.require&&r(G.require,da,P),X)}catch(M){n(M,ga(da))}f=d;v&&(v.template||null===v.templateUrl)&&(f=I);a&&a(f,e.childNodes,s,k);for(f=g.length-1;0<=f;f--)try{G=g[f],G(G.isolateScope?I:d,da,t,G.require&&r(G.require,da,
P),X)}catch(wa){n(wa,ga(da))}}k=k||{};var Q=-Number.MAX_VALUE,G,Z=k.controllerDirectives,v=k.newIsolateScopeDirective,Y=k.templateDirective;k=k.nonTlbTranscludeDirective;for(var wa=!1,ia=!1,V=c.$$element=x(b),H,w,M,u=d,A,F=0,L=a.length;F<L;F++){H=a[F];var N=H.$$start,fb=H.$$end;N&&(V=ba(b,N,fb));M=s;if(Q>H.priority)break;if(M=H.scope)G=G||H,H.templateUrl||(y("new/isolated scope",v,H,V),U(M)&&(v=H));w=H.name;!H.templateUrl&&H.controller&&(M=H.controller,Z=Z||{},y("'"+w+"' controller",Z[w],H,V),Z[w]=
H);if(M=H.transclude)wa=!0,H.$$tlb||(y("transclusion",k,H,V),k=H),"element"==M?(ia=!0,Q=H.priority,M=ba(b,N,fb),V=c.$$element=x(O.createComment(" "+w+": "+c[w]+" ")),b=V[0],R(e,x(ta.call(M,0)),b),u=t(M,d,Q,f&&f.name,{nonTlbTranscludeDirective:k})):(M=x(yb(b)).contents(),V.html(""),u=t(M,d));if(H.template)if(y("template",Y,H,V),Y=H,M=E(H.template)?H.template(V,c):H.template,M=hc(M),H.replace){f=H;M=x("<div>"+aa(M)+"</div>").contents();b=M[0];if(1!=M.length||1!==b.nodeType)throw ja("tplrt",w,"");R(e,
V,b);L={$attr:{}};M=X(b,[],L);var Eb=a.splice(F+1,a.length-(F+1));v&&S(M);a=a.concat(M).concat(Eb);fc(c,L);L=a.length}else V.html(M);if(H.templateUrl)y("template",Y,H,V),Y=H,H.replace&&(f=H),B=C(a.splice(F,a.length-F),V,c,e,u,h,g,{controllerDirectives:Z,newIsolateScopeDirective:v,templateDirective:Y,nonTlbTranscludeDirective:k}),L=a.length;else if(H.compile)try{A=H.compile(V,c,u),E(A)?q(null,A,N,fb):A&&q(A.pre,A.post,N,fb)}catch(W){n(W,ga(V))}H.terminal&&(B.terminal=!0,Q=Math.max(Q,H.priority))}B.scope=
G&&!0===G.scope;B.transclude=wa&&u;return B}function S(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function ia(d,e,f,h,g,l,q){if(e===g)return null;g=null;if(a.hasOwnProperty(e)){var r;e=b.get(e+c);for(var z=0,t=e.length;z<t;z++)try{r=e[z],(h===s||h>r.priority)&&-1!=r.restrict.indexOf(f)&&(l&&(r=Rb(r,{$$start:l,$$end:q})),d.push(r),g=r)}catch(J){n(J)}}return g}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;p(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?
";":" ")+b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,f){"class"==f?(ha(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function C(a,b,c,d,e,f,h,k){var g=[],l,n,z=b[0],t=a.shift(),J=A({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),Q=E(t.templateUrl)?t.templateUrl(b,c):t.templateUrl;b.html("");r.get(B.getTrustedResourceUrl(Q),
{cache:q}).success(function(q){var r,B;q=hc(q);if(t.replace){q=x("<div>"+aa(q)+"</div>").contents();r=q[0];if(1!=q.length||1!==r.nodeType)throw ja("tplrt",t.name,Q);q={$attr:{}};R(d,b,r);var G=X(r,[],q);U(t.scope)&&S(G);a=G.concat(a);fc(c,q)}else r=z,b.html(q);a.unshift(J);l=wa(a,r,c,e,b,t,f,h,k);p(d,function(a,c){a==r&&(d[c]=b[0])});for(n=Z(b[0].childNodes,e);g.length;){q=g.shift();B=g.shift();var ha=g.shift(),v=g.shift(),G=b[0];B!==z&&(G=yb(r),R(ha,x(B),G));B=l.transclude?Y(q,l.transclude):v;l(n,
q,G,d,B)}g=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){g?(g.push(b),g.push(c),g.push(d),g.push(e)):l(n,b,c,d,e)}}function w(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function y(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ga(d));}function u(a,b){var c=l(b,!0);c&&a.push({priority:0,compile:ca(function(a,b){var d=b.parent(),e=d.data("$binding")||[];e.push(c);ha(d.data("$binding",e),"ng-binding");
a.$watch(c,function(a){b[0].nodeValue=a})})})}function F(a,b){if("xlinkHref"==b||"IMG"!=Fa(a)&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function L(a,b,c,d){var e=l(c,!0);if(e){if("multiple"===d&&"SELECT"===Fa(a))throw ja("selmulti",ga(a));b.push({priority:100,compile:function(){return{pre:function(b,c,f){c=f.$$observers||(f.$$observers={});if(h.test(d))throw ja("nodomevents");if(e=l(f[d],!0,F(a,d)))f[d]=e(b),(c[d]||(c[d]=[])).$$inter=!0,(f.$$observers&&f.$$observers[d].$$scope||b).$watch(e,function(a){f.$set(d,
a)})}}}})}}function R(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=O.createDocumentFragment();a.appendChild(d);c[x.expando]=d[x.expando];d=1;for(e=b.length;d<e;d++)f=b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function T(a,b){return A(function(){return a.apply(null,arguments)},a,b)}var Db=function(a,b){this.$$element=
a;this.$attr=b||{}};Db.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$set:function(a,b,c,d){function e(a,b){var c=[],d=a.split(/\s+/),f=b.split(/\s+/),h=0;a:for(;h<d.length;h++){for(var g=d[h],k=0;k<f.length;k++)if(g==f[k])continue a;c.push(g)}return c}if("class"==a)b=b||"",c=this.$$element.attr("class")||"",this.$removeClass(e(c,b).join(" ")),this.$addClass(e(b,c).join(" "));else{var h=
cc(this.$$element[0],a);h&&(this.$$element.prop(a,b),d=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=bb(a,"-"));h=Fa(this.$$element);if("A"===h&&"href"===a||"IMG"===h&&"src"===a)if(!N||8<=N)h=xa(b).href,""!==h&&("href"===a&&!h.match(f)||"src"===a&&!h.match(g))&&(this[a]=b="unsafe:"+h);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b))}(c=this.$$observers)&&p(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||
(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);Q.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var M=l.startSymbol(),V=l.endSymbol(),hc="{{"==M||"}}"==V?Aa:function(a){return a.replace(/\{\{/g,M).replace(/}}/g,V)},Eb=/^ngAttr[A-Z]/;return t}]}function ma(b){return Oa(b.replace(gd,""))}function hd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");U(a)?A(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;D(e)&&(g=e.match(a),
h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:tb(f.$scope,h,!0)||tb(d,h,!0),Na(e,h,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!=typeof f.$scope)throw F("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function id(){this.$get=["$window",function(b){return x(b.document)}]}function jd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function ic(b){var a={},c,d,e;if(!b)return a;p(b.split("\n"),function(b){e=b.indexOf(":");c=u(aa(b.substr(0,e)));d=aa(b.substr(e+
1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function jc(b){var a=U(b)?b:s;return function(c){a||(a=ic(b));return c?a[u(c)]||null:a}}function kc(b,a,c){if(E(c))return c(b,a);p(c,function(c){b=c(b,a)});return b}function kd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==
Ya.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,r){function q(a){function c(a){var b=A({},a,{data:kc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,
transformResponse:e.transformResponse},f=function(a){function b(a){var c;p(a,function(b,d){E(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=A({},a.headers),f,h,c=A({},c.common,c[u(a.method)]);b(c);b(d);a:for(f in c){a=u(f);for(h in d)if(u(h)===a)continue a;d[f]=c[f]}return d}(a);A(d,a);d.headers=f;d.method=Ga(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=kc(a.data,jc(f),a.transformRequest);
y(a.data)&&p(f,function(a,b){"content-type"===u(b)&&delete f[b]});y(a.withCredentials)&&!y(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,f).then(c,c)},s],g=n.when(d);for(p(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,
function(b){a(b.data,b.status,b.headers,d)});return g};return g}function z(b,c,f){function g(a,b,c){p&&(200<=a&&300>a?p.put(s,[a,b,ic(c)]):p.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?r.resolve:r.reject)({data:a,status:c,headers:jc(d),config:b})}function m(){var a=$a(q.pendingRequests,b);-1!==a&&q.pendingRequests.splice(a,1)}var r=n.defer(),z=r.promise,p,v,s=J(b.url,b.params);q.pendingRequests.push(b);z.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==
b.method)&&(p=U(b.cache)?b.cache:U(e.cache)?e.cache:Q);if(p)if(v=p.get(s),C(v)){if(v.then)return v.then(m,m),v;K(v)?k(v[1],v[0],fa(v[2])):k(v,200,{})}else p.put(s,z);y(v)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return z}function J(a,b){if(!b)return a;var c=[];Mc(b,function(a,b){null===a||y(a)||(K(a)||(a=[a]),p(a,function(a){U(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var Q=c("$http"),v=[];p(f,function(a){v.unshift(D(a)?r.get(a):
r.invoke(a))});p(g,function(a,b){var c=D(a)?r.get(a):r.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){p(arguments,function(a){q[a]=function(b,c){return q(A(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){q[a]=function(b,c,d){return q(A(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function ld(){this.$get=["$browser",
"$window","$document",function(b,a,c){return md(b,nd,b.defer,a.angular.callbacks,c[0],a.location.protocol.replace(":",""))}]}function md(b,a,c,d,e,f){function g(a,b){var c=e.createElement("script"),d=function(){e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;N?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=d;e.body.appendChild(c);return d}return function(e,m,k,l,n,r,q,z){function J(){v=-1;G&&G();t&&t.abort()}function Q(a,d,e,h){var g=f||
xa(m).protocol;s&&c.cancel(s);G=t=null;d="file"==g?e?200:404:d;a(1223==d?204:d,e,h);b.$$completeOutstandingRequest(w)}var v;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==u(e)){var B="_"+(d.counter++).toString(36);d[B]=function(a){d[B].data=a};var G=g(m.replace("JSON_CALLBACK","angular.callbacks."+B),function(){d[B].data?Q(l,200,d[B].data):Q(l,v||-2);delete d[B]})}else{var t=new a;t.open(e,m,!0);p(n,function(a,b){C(a)&&t.setRequestHeader(b,a)});t.onreadystatechange=function(){if(4==t.readyState){var a=
t.getAllResponseHeaders();Q(l,v||t.status,t.responseType?t.response:t.responseText,a)}};q&&(t.withCredentials=!0);z&&(t.responseType=z);t.send(k||null)}if(0<r)var s=c(J,r);else r&&r.then&&r.then(J)}}function od(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,r,q=0,z=[],J=f.length,p=!1,v=[];q<J;)-1!=(n=f.indexOf(b,q))&&-1!=(r=f.indexOf(a,
n+g))?(q!=n&&z.push(f.substring(q,n)),z.push(q=c(p=f.substring(n+g,r))),q.exp=p,q=r+h,p=!0):(q!=J&&z.push(f.substring(q)),q=J);(J=z.length)||(z.push(""),J=1);if(l&&1<z.length)throw lc("noconcat",f);if(!k||p)return v.length=J,q=function(a){try{for(var b=0,c=J,h;b<c;b++)"function"==typeof(h=z[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||y(h)?h="":"string"!=typeof h&&(h=oa(h))),v[b]=h;return v.join("")}catch(g){a=lc("interr",f,g.toString()),d(a)}},q.exp=f,q.parts=z,q}var g=b.length,h=a.length;
f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function pd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),r=n.promise,q=0,z=C(m)&&!m;h=C(h)?h:0;r.then(null,null,d);r.$$intervalId=k(function(){n.notify(q++);0<h&&q>=h&&(n.resolve(q),l(r.$$intervalId),delete e[r.$$intervalId]);z||b.$apply()},g);e[r.$$intervalId]=n;return r}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),
clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function mc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
rb(b[a]);return b.join("/")}function nc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||rd[b.protocol]||null}function oc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ua(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Ua(b).lastIndexOf("/")+1)}function pc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);nc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!D(e))throw Hb("ipthprfx",a,c);oc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=mc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=na(b,d))!==s)return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);nc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!D(e))throw Hb("ihshprfx",d,a);oc(e,this,b);this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=mc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=
function(a){if(Ua(b)==Ua(a))return a}}function qc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Ua(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function gb(b){return function(){return this[b]}}function rc(b,a){return function(c){if(y(c))return this[b];this[b]=a(c);this.$$compose();return this}}function sd(){var b="",a=!1;this.hashPrefix=function(a){return C(a)?(b=a,this):b};this.html5Mode=function(b){return C(b)?(a=b,this):a};this.$get=
["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?pc:qc):(m=Ua(k),e=Ib);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);"a"!==u(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=h.$$rewrite(e);e&&(!b.attr("target")&&
g&&!a.isDefaultPrevented())&&(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);g(b)}),c.$$phase||c.$digest()))});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function td(){var b=!0,a=this;this.debugEnabled=function(a){return C(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;return e.apply?function(){var a=
[];p(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,a){if("constructor"===b)throw ya("isecfld",a);return b}function Va(b,a){if(b&&b.constructor===b)throw ya("isecfn",a);if(b&&b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b&&(b.nodeName||b.on&&b.find))throw ya("isecdom",
a);return b}function hb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=pa(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=pa(a.shift(),d);return b[f]=c}function sc(b,a,c,d,e,f,g){pa(b,f);pa(a,f);pa(c,f);pa(d,f);pa(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null===k||k===s)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=
s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a||null===k||k===s)return k;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c||null===k||k===s)return k;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d||null===k||k===s)return k;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e||null===k||k===s)return k;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null===k||k===s)return k;k=k[b];if(!a||null===k||k===s)return k;k=k[a];if(!c||null===k||k===s)return k;k=k[c];if(!d||null===k||k===s)return k;k=k[d];return e&&null!==k&&k!==s?k=k[e]:k}}function tc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?sc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=sc(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};
else{var g="var l, fn, p;\n";p(d,function(b,d){pa(b,c);g+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/\"/g,'\\"')+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=function(){return g};f=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=
f);return f}function ud(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return C(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return C(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!uc.hasOwnProperty(b)&&(uc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Kb(a);e=(new Wa(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function vd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return wd(function(a){b.$evalAsync(a)},a)}]}function wd(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var h=[],m,k;return k={resolve:function(a){if(h){var c=h;h=s;m=f(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(g(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var k=e(),z=function(d){try{k.resolve((E(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},J=function(b){try{k.resolve((E(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},p=function(b){try{k.notify((E(g)?g:c)(b))}catch(d){a(d)}};h?h.push([z,J,p]):m.then(z,J,p);return k.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var h=null;try{h=(a||c)()}catch(g){return b(g,!1)}return h&&E(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&E(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(c){return{then:function(f,g){var l=e();b(function(){try{l.resolve((E(g)?
g:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:g,when:function(h,m,k,l){var n=e(),r,q=function(b){try{return(E(m)?m:c)(b)}catch(d){return a(d),g(d)}},z=function(b){try{return(E(k)?k:d)(b)}catch(c){return a(c),g(c)}},p=function(b){try{return(E(l)?l:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){r||(r=!0,n.resolve(f(a).then(q,z,p)))},function(a){r||(r=!0,n.resolve(z(a)))},function(a){r||n.notify(p(a))})});return n.promise},all:function(a){var b=e(),c=0,d=K(a)?
[]:{};p(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function xd(){var b=10,a=F("$rootScope");this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(c,d,e,f){function g(){this.$id=Xa();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings={}}function h(b){if(l.$$phase)throw a("inprog",l.$$phase);l.$$phase=b}function m(a,b){var c=e(a);Na(c,b);return c}function k(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Xa());a["this"]=a;a.$$listeners=
{};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,c){var d=m(a,"watch"),e=this.$$watchers,f={fn:b,last:k,get:d,exp:a,eq:!!c};if(!E(b)){var h=m(b||w,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&d.constant){var g=f.fn;f.fn=function(a,b,c){g.call(this,a,b,c);Ka(e,f)}}e||(e=this.$$watchers=[]);
e.unshift(f);return function(){Ka(e,f)}},$watchCollection:function(a,b){var c=this,d,f,h=0,g=e(a),k=[],l={},m=0;return this.$watch(function(){f=g(c);var a,b;if(U(f))if(ob(f))for(d!==k&&(d=k,m=d.length=0,h++),a=f.length,m!==a&&(h++,d.length=m=a),b=0;b<a;b++)d[b]!==f[b]&&(h++,d[b]=f[b]);else{d!==l&&(d=l={},m=0,h++);a=0;for(b in f)f.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==f[b]&&(h++,d[b]=f[b]):(m++,d[b]=f[b],h++));if(m>a)for(b in h++,d)d.hasOwnProperty(b)&&!f.hasOwnProperty(b)&&(m--,delete d[b])}else d!==
f&&(d=f,h++);return h},function(){b(f,d,c)})},$digest:function(){var c,e,f,g,m=this.$$asyncQueue,p=this.$$postDigestQueue,s,B,G=b,t,x=[],w,C,X;h("$digest");do{B=!1;for(t=this;m.length;)try{X=m.shift(),X.scope.$eval(X.expression)}catch(ba){d(ba)}do{if(g=t.$$watchers)for(s=g.length;s--;)try{(c=g[s])&&((e=c.get(t))!==(f=c.last)&&!(c.eq?Ba(e,f):"number"==typeof e&&"number"==typeof f&&isNaN(e)&&isNaN(f)))&&(B=!0,c.last=c.eq?fa(e):e,c.fn(e,f===k?e:f,t),5>G&&(w=4-G,x[w]||(x[w]=[]),C=E(c.exp)?"fn: "+(c.exp.name||
c.exp.toString()):c.exp,C+="; newVal: "+oa(e)+"; oldVal: "+oa(f),x[w].push(C)))}catch(P){d(P)}if(!(g=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(g=t.$$nextSibling);)t=t.$parent}while(t=g);if(B&&!G--)throw l.$$phase=null,a("infdig",b,oa(x));}while(B||m.length);for(l.$$phase=null;p.length;)try{p.shift()()}catch(y){d(y)}},$destroy:function(){if(l!=this&&!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);
a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null}},$eval:function(a,b){return e(a)(this,b)},$evalAsync:function(a){l.$$phase||l.$$asyncQueue.length||f.defer(function(){l.$$asyncQueue.length&&l.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},
$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return h("$apply"),this.$eval(a)}catch(b){d(b)}finally{l.$$phase=null;try{l.$digest()}catch(c){throw d(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[$a(c,b)]=null}},$emit:function(a,b){var c=[],e,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(ta.call(arguments,
1)),l,m;do{e=f.$$listeners[a]||c;g.currentScope=f;l=0;for(m=e.length;l<m;l++)if(e[l])try{e[l].apply(null,k)}catch(p){d(p)}else e.splice(l,1),l--,m--;if(h)break;f=f.$parent}while(f);return g},$broadcast:function(a,b){var c=this,e=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(ta.call(arguments,1)),g,k;do{c=e;f.currentScope=c;e=c.$$listeners[a]||[];g=0;for(k=e.length;g<k;g++)if(e[g])try{e[g].apply(null,h)}catch(l){d(l)}else e.splice(g,
1),g--,k--;if(!(e=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(e=c.$$nextSibling);)c=c.$parent}while(c=e);return f}};var l=new g;return l}]}function yd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(Za(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function vc(b){var a=[];C(b)&&p(b,function(b){a.push(yd(b))});
return a}function zd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=vc(b));return a};this.$get=["$log","$document","$injector",function(c,d,e){function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var g=function(a){throw ra("unsafe");};e.has("$sanitize")&&(g=e.get("$sanitize"));var h=f(),m={};m[ea.HTML]=f(h);m[ea.CSS]=f(h);m[ea.URL]=f(h);m[ea.JS]=f(h);m[ea.RESOURCE_URL]=f(m[ea.URL]);return{trustAs:function(a,b){var c=m.hasOwnProperty(a)?m[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var e=m.hasOwnProperty(c)?m[c]:null;if(e&&d instanceof
e)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var e=xa(d.toString()),f,h,p=!1;f=0;for(h=b.length;f<h;f++)if("self"===b[f]?Fb(e):b[f].exec(e.href)){p=!0;break}if(p)for(f=0,h=a.length;f<h;f++)if("self"===a[f]?Fb(e):a[f].exec(e.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===ea.HTML)return g(d);throw ra("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function Ad(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};
this.$get=["$parse","$document","$sceDelegate",function(a,c,d){if(b&&N&&(c=c[0].documentMode,c!==s&&8>c))throw ra("iequirks");var e=fa(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;p(ea,function(a,b){var c=u(b);e[Oa("parse_as_"+
c)]=function(b){return f(a,b)};e[Oa("get_trusted_"+c)]=function(b){return g(a,b)};e[Oa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Bd(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(u((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,k=!1,l=!1;if(m){for(var n in m)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g=
"WebkitOpacity"in m&&"webkit");k=!!("transition"in m||g+"Transition"in m);l=!!("animation"in m||g+"Animation"in m);!d||k&&l||(k=D(f.body.style.webkitTransition),l=D(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f.documentMode||7<f.documentMode),hasEvent:function(a){if("input"==a&&9==N)return!1;if(y(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:g,transitions:k,animations:l,msie:N}}]}
function Cd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=C(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;N&&($.setAttribute("href",
c),c=$.href);$.setAttribute("href",c);var c=$.pathname,d=b;0===d.indexOf(a)&&(d=d.replace(a,""));wc.exec(d)||(c=(d=wc.exec(c))?d[1]:c);c="/"===c.charAt(0)?c:"/"+c;return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:c}}function Fb(b){b=D(b)?xa(b):b;return b.protocol===xc.protocol&&b.host===xc.host}function Dd(){this.$get=ca(W)}function yc(b){function a(d,
e){if(U(d)){var f={};p(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",zc);a("date",Ac);a("filter",Ed);a("json",Fd);a("limitTo",Gd);a("lowercase",Hd);a("number",Bc);a("orderBy",Cc);a("uppercase",Id)}function Ed(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&
(c="boolean"===d&&c?function(a,b){return ab.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};
switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)"$"==g?function(){if(a[g]){var b=g;e.push(function(c){return f(c,a[b])})}}():function(){if("undefined"!=typeof a[g]){var b=g;e.push(function(c){return f(tb(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=0;h<b.length;h++){var m=b[h];e.check(m)&&d.push(m)}return d}}function zc(b){var a=b.NUMBER_FORMATS;return function(b,d){y(d)&&(d=a.CURRENCY_SYM);return Dc(b,a.PATTERNS[1],
a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Ec)[1]||"").length;y(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));
g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Ec);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,r=a.gSize;if(g.length>=n+r)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%r&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-
a));return d+b}function T(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function ib(b,a){return function(c,d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);return d[f][e]}}function Ac(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=R(b[9]+b[10]),g=R(b[9]+b[11]));h.call(a,R(b[1]),R(b[2])-1,R(b[3]));f=R(b[4]||0)-f;g=R(b[5]||0)-g;h=R(b[6]||0);b=Math.round(1E3*
parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Jd.test(c)?R(c):a(c));pb(c)&&(c=new Date(c));if(!Ja(c))return c;for(;e;)(m=Kd.exec(e))?(g=g.concat(ta.call(m,1)),e=g.pop()):(g.push(e),e=null);p(g,function(a){h=Ld[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}
function Fd(){return function(b){return oa(b,!0)}}function Gd(){return function(b,a){if(!K(b)&&!D(b))return b;a=R(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Cc(b){return function(a,c,d){function e(a,b){return Ma(b)?function(b,c){return a(c,b)}:a}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Oc(c,function(a){var c=!1,d=a||Aa;if(D(a)){if("+"==a.charAt(0)||
"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var f=[],g=0;g<a.length;g++)f.push(a[g]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Fc(b,a){function c(a,c){c=c?"-"+bb(c,
"-"):"";b.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)}var d=this,e=b.parent().controller("form")||lb,f=0,g=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ha);c(!0);d.$addControl=function(a){va(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];p(g,function(b,c){d.$setValidity(c,!0,a)});Ka(h,a)};d.$setValidity=function(a,b,h){var n=g[a];if(b)n&&(Ka(n,
h),n.length||(f--,f||(c(b),d.$valid=!0,d.$invalid=!1),g[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{f||c(b);if(n){if(-1!=$a(n,h))return}else g[a]=n=[],f++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ha).addClass(mb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(mb).addClass(Ha);d.$dirty=!1;d.$pristine=!0;p(h,function(a){a.$setPristine()})}}function nb(b,a,c,d,e,f){var g=function(){var e=a.val();Ma(c.ngTrim||
"T")&&(e=aa(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})};if(e.hasEvent("input"))a.on("input",g);else{var h,m=function(){h||(h=f.defer(function(){g();h=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});a.on("change",g);if(e.hasEvent("paste"))a.on("paste cut",m)}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var k=c.ngPattern,l=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",
!1);return s};k&&((e=k.match(/^\/(.*)\/([gim]*)$/))?(k=RegExp(e[1],e[2]),e=function(a){return l(k,a)}):e=function(c){var d=b.$eval(k);if(!d||!d.test)throw F("ngPattern")("noregexp",k,d,ga(a));return l(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=R(c.ngMinlength);e=function(a){if(!d.$isEmpty(a)&&a.length<n)return d.$setValidity("minlength",!1),s;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=R(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&
a.length>r)return d.$setValidity("maxlength",!1),s;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a)h&&!Ba(b,h)&&e.$removeClass(g(h)),e.$addClass(g(b));h=fa(b)}function g(a){if(K(a))return a.join(" ");if(U(a)){var b=[];p(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});
"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;h!==f&1&&(h===a?(h=c.$eval(e[b]),e.$addClass(g(h))):(h=c.$eval(e[b]),e.$removeClass(g(h))))})}}}}var u=function(b){return D(b)?b.toLowerCase():b},Ga=function(b){return D(b)?b.toUpperCase():b},N,x,Ca,ta=[].slice,Md=[].push,Ya=Object.prototype.toString,La=F("ng"),ab=W.angular||(W.angular={}),Ta,Fa,ka=["0","0","0"];N=R((/msie (\d+)/.exec(u(navigator.userAgent))||[])[1]);isNaN(N)&&(N=R((/trident\/.*; rv:(\d+)/.exec(u(navigator.userAgent))||[])[1]));
w.$inject=[];Aa.$inject=[];var aa=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s*/,"").replace(/\s*$/,""):b}}();Fa=9>N?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Sc=/[A-Z]/g,Nd={full:"1.2.1",major:1,minor:2,dot:1,codeName:"underscore-empathy"},Qa=L.cache={},cb=L.expando="ng-"+(new Date).getTime(),Wc=
1,Gc=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},zb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Uc=/([\:\-\_]+(.))/g,Vc=/^moz([A-Z])/,wb=F("jqLite"),Ea=L.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===O.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),L(W).on("load",a))},toString:function(){var b=[];p(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},length:0,push:Md,sort:[].sort,splice:[].splice},eb={};p("multiple selected checked disabled readOnly required open".split(" "),function(b){eb[u(b)]=b});var dc={};p("input select option textarea button form details".split(" "),function(b){dc[Ga(b)]=!0});p({data:ac,inheritedData:db,scope:function(b){return x(b).data("$scope")||db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x(b).data("$isolateScope")||
x(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=Oa(a);if(C(c))b.style[a]=c;else{var d;8>=N&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=N&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=u(a);if(eb[d])if(C(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?
d:s;else if(C(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(C(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(y(d))return e?b[e]:"";b[e]=d}var a=[];9>N?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(y(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];p(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=
a},html:function(b,a){if(y(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Pa(d[c]);b.innerHTML=a}},function(b,a){L.prototype[a]=function(a,d){var e,f;if((2==b.length&&b!==Ab&&b!==bc?a:d)===s){if(U(a)){for(e=0;e<this.length;e++)if(b===ac)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});p({removeData:Zb,dealoc:Pa,
on:function a(c,d,e,f){if(C(f))throw wb("onargs");var g=la(c,"events"),h=la(c,"handle");g||la(c,"events",g={});h||la(c,"handle",h=Xc(c,g));p(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=O.body.contains||O.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===
a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Gc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:$b,replaceWith:function(a,c){var d,e=a.parentNode;Pa(a);p(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];p(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){p(new L(c),
function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;p(new L(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Pa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;p(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){y(d)&&(d=!Ab(a,
c));(d?Cb:Bb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName(c)},clone:yb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];p(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){L.prototype[c]=function(c,e,f){for(var g,h=0;h<
this.length;h++)y(g)?(g=a(this[h],c,e,f),C(g)&&(g=x(g))):xb(g,a(this[h],c,e,f));return C(g)?g:this};L.prototype.bind=L.prototype.on;L.prototype.unbind=L.prototype.off});Ra.prototype={put:function(a,c){this[Da(a)]=c},get:function(a){return this[Da(a)]},remove:function(a){var c=this[a=Da(a)];delete this[a];return c}};var Zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,$c=/,/,ad=/^\s*(_?)(\S+?)\1\s*$/,Yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Sa=F("$injector"),Od=F("$animate"),Pd=["$provide",function(a){this.$$selectors=
{};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Od("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,e,f,g){f=f&&f[f.length-1];var h=e&&e[0]||f&&f.parentNode,m=f&&f.nextSibling||null;p(d,function(a){h.insertBefore(a,m)});g&&a(g,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,f,g){this.enter(a,c,f,g)},addClass:function(d,e,f){e=D(e)?e:K(e)?e.join(" "):"";p(d,function(a){Cb(a,
e)});f&&a(f,0,!1)},removeClass:function(d,e,f){e=D(e)?e:K(e)?e.join(" "):"";p(d,function(a){Bb(a,e)});f&&a(f,0,!1)},enabled:w}}]}],ja=F("$compile");gc.$inject=["$provide"];var gd=/^(x[\:\-_]|data[\:\-_])/i,nd=W.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw F("$httpBackend")("noxhr");},lc=F("$interpolate"),Qd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
rd={http:80,https:443,ftp:21},Hb=F("$location");qc.prototype=Ib.prototype=pc.prototype={$$html5:!1,$$replace:!1,absUrl:gb("$$absUrl"),url:function(a,c){if(y(a))return this.$$url;var d=Qd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:gb("$$protocol"),host:gb("$$host"),port:gb("$$port"),path:rc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(D(a))this.$$search=Vb(a);else if(U(a))this.$$search=a;else throw Hb("isrcharg");break;default:y(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:rc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=F("$parse"),uc={},qa,Ia={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return C(d)?C(e)?d+e:d:C(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(C(d)?d:0)-(C(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Rd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;
for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&
a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Ia[this.ch],g=Ia[d],h=Ia[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=C(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=u(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;
else break}d={index:d,text:c};if(Ia.hasOwnProperty(c))d.fn=Ia[c],d.json=Ia[c];else{var m=tc(c,this.options,this.text);d.fn=A(function(a,c){return m(a,c)},{assign:function(d,e){return hb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+
1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Rd[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Wa=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Wa.ZERO=function(){return 0};Wa.prototype={constructor:Wa,parse:function(a,
c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=
this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return A(function(d,e){return a(d,
e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return A(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return A(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=
this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+
this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=
this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Wa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=tc(d,this.options,this.text);return A(function(c,d,h){return e(h||a(c,d),d)},{assign:function(e,g,h){return hb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return A(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=Va(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Va(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):
f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||w;Va(m,e.text);Va(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Va(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return A(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=
this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return A(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=F("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},$=O.createElement("a"),wc=/^\/?.*?:(\/.*)/,xc=xa(W.location.href,!0);yc.$inject=["$provide"];zc.$inject=["$locale"];Bc.$inject=
["$locale"];var Ec=".",Ld={yyyy:T("FullYear",4),yy:T("FullYear",2,0,!0),y:T("FullYear",1),MMMM:ib("Month"),MMM:ib("Month",!0),MM:T("Month",2,1),M:T("Month",1,1),dd:T("Date",2),d:T("Date",1),HH:T("Hours",2),H:T("Hours",1),hh:T("Hours",2,-12),h:T("Hours",1,-12),mm:T("Minutes",2),m:T("Minutes",1),ss:T("Seconds",2),s:T("Seconds",1),sss:T("Milliseconds",3),EEEE:ib("Day"),EEE:ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=
a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Kd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Jd=/^\-?\d+$/;Ac.$inject=["$locale"];var Hd=ca(u),Id=ca(Ga);Cc.$inject=["$parse"];var Sd=ca({restrict:"E",compile:function(a,c){8>=N&&(c.href||c.name||c.$set("href",""),a.append(O.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),Nb={};p(eb,function(a,c){if("multiple"!=a){var d=ma("ng-"+
c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}}});p(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,f){f.$observe(c,function(c){c&&(f.$set(a,c),N&&e.prop(a,f[a]))})}}}});var lb={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Fc.$inject=["$element","$attrs","$scope"];var Hc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Fc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Gc(e[0],"submit",h);e.on("$destroy",function(){c(function(){zb(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&hb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&hb(a,k,s,k);A(g,lb)})}}}}}]},Td=Hc(),Ud=Hc(!0),Vd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Wd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Xd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ic={text:nb,number:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),s;e.$setValidity("min",
!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),s;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||pb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return s})},url:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);a=function(a){if(e.$isEmpty(a)||Vd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",
!1);return s};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){nb(a,c,d,e,f,g);a=function(a){if(e.$isEmpty(a)||Wd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return s};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){y(d.name)&&c.attr("name",Xa());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;D(f)||(f=!0);D(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:w,button:w,submit:w,reset:w},Jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Ic[u(f.type)]||Ic.text)(d,e,f,g,c,a)}}}],
kb="ng-valid",jb="ng-invalid",Ha="ng-pristine",mb="ng-dirty",Yd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,f){function g(a,c){c=c?"-"+bb(c,"-"):"";e.removeClass((a?jb:kb)+c).addClass((a?kb:jb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=f(d.ngModel),m=h.assign;if(!m)throw F("ngModel")("nonassign",d.ngModel,ga(e));
this.$render=w;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||lb,l=0,n=this.$error={};e.addClass(Ha);g(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,g(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(mb).addClass(Ha)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ha).addClass(mb),k.$setDirty());p(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),p(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=h(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}})}],Zd=function(){return{require:["ngModel","^?form"],controller:Yd,link:function(a,c,d,e){var f=
e[0],g=e[1]||lb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},$d=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},
ae=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!y(a)){var c=[];a&&p(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},be=/^(true|false|\d+)$/,ce=function(){return{priority:100,compile:function(a,c){return be.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,
c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},de=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),ee=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],fe=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);
d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],ge=Mb("",!0),he=Mb("Odd",0),ie=Mb("Even",1),je=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),ke=[function(){return{scope:!0,controller:"@"}}],Lc={};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Lc[c]=["$parse",function(d){return{compile:function(e,
f){var g=d(f[c]);return function(c,d,e){d.on(u(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var le=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m;c.$watch(e.ngIf,function(f){Ma(f)?m||(m=c.$new(),g(m,function(c){h={startNode:c[0],endNode:c[c.length++]=O.createComment(" end ngIf: "+e.ngIf+" ")};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(ub(h)),h=null))})}}}],me=["$http","$templateCache",
"$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,f,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(h,m){var k=m.ngInclude||m.src,l=m.onload||"",n=m.autoscroll;return function(h,m,p,s,x){var v=0,B,G,t=function(){B&&(B.$destroy(),B=null);G&&(f.leave(G),G=null)};h.$watch(g.parseAsResourceUrl(k),function(g){var k=function(){!C(n)||n&&!h.$eval(n)||d()},p=++v;g?(a.get(g,{cache:c}).success(function(a){if(p===v){var c=h.$new();x(c,function(d){t();B=c;G=
d;G.html(a);f.enter(G,null,m,k);e(G.contents())(B);B.$emit("$includeContentLoaded");h.$eval(l)})}}).error(function(){p===v&&t()}),h.$emit("$includeContentRequested")):t()})}}}}],ne=sa({compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),oe=sa({terminal:!0,priority:1E3}),pe=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},n={},r=c.startSymbol(),q=c.endSymbol(),
s=/^when(Minus)?(.+)$/;p(g,function(a,c){s.test(c)&&(l[u(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});p(l,function(a,e){n[e]=c(a.replace(d,r+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],qe=["$parse","$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
n,r,q,s,w,C,v={$id:Da};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[4])?(n=a(l),r=function(a,c,d){C&&(v[C]=a);v[w]=c;v.$index=d;return n(e,v)}):(q=function(a,c){return Da(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);w=l[3]||l[1];C=l[2];var B={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,v={},y,P,D,S,A,u,F=[];if(ob(a))A=a,n=r||q;else{n=r||s;A=[];for(D in a)a.hasOwnProperty(D)&&"$"!=D.charAt(0)&&A.push(D);A.sort()}y=A.length;
h=F.length=A.length;for(g=0;g<h;g++)if(D=a===A?g:A[g],S=a[D],S=n(D,S,g),va(S,"`track by` id"),B.hasOwnProperty(S))u=B[S],delete B[S],v[S]=u,F[g]=u;else{if(v.hasOwnProperty(S))throw p(F,function(a){a&&a.startNode&&(B[a.id]=a)}),d("dupes",k,S);F[g]={id:S};v[S]=!1}for(D in B)B.hasOwnProperty(D)&&(u=B[D],g=ub(u),c.leave(g),p(g,function(a){a.$$NG_REMOVED=!0}),u.scope.$destroy());g=0;for(h=A.length;g<h;g++){D=a===A?g:A[g];S=a[D];u=F[g];F[g-1]&&(l=F[g-1].endNode);if(u.startNode){P=u.scope;n=l;do n=n.nextSibling;
while(n&&n.$$NG_REMOVED);u.startNode!=n&&c.move(ub(u),null,x(l));l=u.endNode}else P=e.$new();P[w]=S;C&&(P[C]=D);P.$index=g;P.$first=0===g;P.$last=g===y-1;P.$middle=!(P.$first||P.$last);P.$odd=!(P.$even=0===(g&1));u.startNode||m(P,function(a){a[a.length++]=O.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,x(l));l=a;u.scope=P;u.startNode=l&&l.endNode?l.endNode:a[0];u.endNode=a[a.length-1];v[u.id]=u})}B=v})}}}],re=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ma(c)?
"removeClass":"addClass"](d,"ng-hide")})}}],se=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ma(c)?"addClass":"removeClass"](d,"ng-hide")})}}],te=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ue=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<
n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),p(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],ve=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,f,g,h){g.cases["!"+c.ngSwitchWhen]=g.cases["!"+c.ngSwitchWhen]||[];g.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})}}}),we=sa({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),xe=sa({controller:["$element","$transclude",function(a,c){if(!c)throw F("ngTransclude")("orphan",ga(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),ye=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],ze=F("ngOptions"),Ae=ca({terminal:!0}),Be=["$compile","$parse",
function(a,c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){va(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Da(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=w})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(t.parent()&&t.remove(),c.val(a),""===a&&v.prop("selected",!0)):y(a)&&v?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){t.parent()&&t.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ra(d.$viewValue);p(c.find("option"),function(c){c.selected=C(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=fa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];p(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,x;u=g.$modelValue;x=r(e)||[];var A=n?Ob(x):x,F,y,I;y={};s=!1;var E,J;if(z)if(t&&K(u))for(s=new Ra([]),I=0;I<u.length;I++)y[m]=u[I],s.put(t(e,y),u[I]);else s=new Ra(u);for(I=0;F=A.length,I<F;I++){k=I;if(n){k=A[I];if("$"===k.charAt(0))continue;y[n]=k}y[m]=x[k];d=p(e,y)||"";(k=a[d])||(k=a[d]=[],c.push(d));z?d=C(s.remove(t?t(e,y):q(e,y))):(t?(d={},d[m]=u,d=t(e,d)===t(e,y)):d=u===q(e,y),s=s||d);E=l(e,y);E=C(E)?E:"";k.push({id:t?t(e,y):n?A[I]:I,label:E,selected:d})}z||(w||null===u?a[""].unshift({id:"",
label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(A=c.length;y<A;y++){d=c[y];k=a[d];v.length<=y?(u={element:D.clone().attr("label",d),label:k.label},x=[u],v.push(x),f.append(u.element)):(x=v[y],u=x[0],u.label!=d&&u.element.attr("label",u.label=d));E=null;I=0;for(F=k.length;I<F;I++)s=k[I],(d=x[I+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),E[0].selected!==s.selected&&E.prop("selected",d.selected=s.selected)):(""===s.id&&w?J=
w:(J=B.clone()).val(s.id).attr("selected",s.selected).text(s.label),x.push({element:J,label:s.label,id:s.id,selected:s.selected}),E?E.after(J):u.element.append(J),E=J);for(I++;x.length>I;)x.pop().element.remove()}for(;v.length>y;)v.pop()[0].element.remove()}var k;if(!(k=u.match(d)))throw ze("iexp",u,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),r=c(k[7]),t=k[8]?c(k[8]):null,v=[[{element:f,label:""}]];w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.html("");f.on("change",
function(){e.$apply(function(){var a,c=r(e)||[],d={},h,k,l,p,u,x,w;if(z)for(k=[],p=0,x=v.length;p<x;p++)for(a=v[p],l=1,u=a.length;l<u;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(t)for(w=0;w<c.length&&(d[m]=c[w],t(e,d)!=h);w++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=s;else if(""===h)k=null;else if(t)for(w=0;w<c.length;w++){if(d[m]=c[w],t(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var r=m[0],
q=m[1],z=h.multiple,u=h.ngOptions,w=!1,v,B=x(O.createElement("option")),D=x(O.createElement("optgroup")),t=B.clone();m=0;for(var A=g.children(),F=A.length;m<F;m++)if(""===A[m].value){v=w=A.eq(m);break}r.init(q,w,t);if(z&&(h.required||h.ngRequired)){var E=function(a){q.$setValidity("required",!h.required||a&&a.length);return a};q.$parsers.push(E);q.$formatters.unshift(E);h.$observe("required",function(){E(q.$viewValue)})}u?n(e,g,q):z?l(e,g,q):k(e,g,q,r)}}}}],Ce=["$interpolate",function(a){var c={addOption:w,
removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(y(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],De=ca({restrict:"E",terminal:!0});(Ca=W.jQuery)?(x=
Ca,A(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),vb("remove",!0,!0,!1),vb("empty",!1,!1,!1),vb("html",!1,!1,!0)):x=L;ab.element=x;(function(a){A(a,{bootstrap:Xb,copy:fa,extend:A,equals:Ba,element:x,forEach:p,injector:Yb,noop:w,bind:qb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:y,isDefined:C,isString:D,isFunction:E,isObject:U,isNumber:pb,isElement:Nc,isArray:K,version:Nd,isDate:Ja,lowercase:u,uppercase:Ga,callbacks:{counter:0},
$$minErr:F,$$csp:Sb});Ta=Tc(W);try{Ta("ngLocale")}catch(c){Ta("ngLocale",[]).provider("$locale",qd)}Ta("ng",["ngLocale"],["$provide",function(a){a.provider("$compile",gc).directive({a:Sd,input:Jc,textarea:Jc,form:Td,script:ye,select:Be,style:De,option:Ce,ngBind:de,ngBindHtml:fe,ngBindTemplate:ee,ngClass:ge,ngClassEven:ie,ngClassOdd:he,ngCloak:je,ngController:ke,ngForm:Ud,ngHide:se,ngIf:le,ngInclude:me,ngInit:ne,ngNonBindable:oe,ngPluralize:pe,ngRepeat:qe,ngShow:re,ngStyle:te,ngSwitch:ue,ngSwitchWhen:ve,
ngSwitchDefault:we,ngOptions:Ae,ngTransclude:xe,ngModel:Zd,ngList:ae,ngChange:$d,required:Kc,ngRequired:Kc,ngValue:ce}).directive(Nb).directive(Lc);a.provider({$anchorScroll:bd,$animate:Pd,$browser:dd,$cacheFactory:ed,$controller:hd,$document:id,$exceptionHandler:jd,$filter:yc,$interpolate:od,$interval:pd,$http:kd,$httpBackend:ld,$location:sd,$log:td,$parse:ud,$rootScope:xd,$q:vd,$sce:Ad,$sceDelegate:zd,$sniffer:Bd,$templateCache:fd,$timeout:Cd,$window:Dd})}])})(ab);x(O).ready(function(){Rc(O,Xb)})})(window,
document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{clip:rect(0,auto,auto,0);-ms-zoom:1.0001;}.ng-animate-active{clip:rect(-1px,auto,auto,0);-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map
;/*
 AngularJS v1.2.1
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,c,B){'use strict';function y(t,q,l,b,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(k,A,n,C,x){function w(){g&&(g.$destroy(),g=null);p&&(f.leave(p),p=null)}function d(){var a=t.current&&t.current.locals,e=a&&a.$template;if(e){var z=k.$new();x(z,function(u){u.html(e);f.enter(u,null,p||A,function(){!c.isDefined(r)||r&&!k.$eval(r)||q()});w();var h=l(u.contents()),m=t.current;g=m.scope=z;p=u;if(m.controller){a.$scope=g;var d=b(m.controller,a);m.controllerAs&&
(g[m.controllerAs]=d);u.data("$ngControllerController",d);u.children().data("$ngControllerController",d)}h(g);g.$emit("$viewContentLoaded");g.$eval(s)})}else w()}var g,p,r=n.autoscroll,s=n.onload||"";k.$on("$routeChangeSuccess",d);d()}}}v=c.module("ngRoute",["ng"]).provider("$route",function(){function t(b,f){return c.extend(new (c.extend(function(){},{prototype:b})),f)}function q(b,c){var k=c.caseInsensitiveMatch,l={originalPath:b,regexp:b},n=l.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,
function(b,c,f,d){b="?"===d?d:null;d="*"===d?d:null;n.push({name:f,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");l.regexp=RegExp("^"+b+"$",k?"i":"");return l}var l={};this.when=function(b,f){l[b]=c.extend({reloadOnSearch:!0},f,b&&q(b,f));if(b){var k="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";l[k]=c.extend({redirectTo:b},q(k,f))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=
["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,f,k,q,n,v,x,w){function d(){var a=g(),e=s.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!r)e.params=a.params,c.copy(e.params,k),b.$broadcast("$routeUpdate",e);else if(a||e)r=!1,b.$broadcast("$routeChangeStart",a,e),(s.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?f.path(p(a.redirectTo,a.params)).search(a.params).replace():f.url(a.redirectTo(a.pathParams,
f.path(),f.search())).replace()),q.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,h;c.forEach(b,function(a,e){b[e]=c.isString(a)?n.get(a):n.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(h=a.templateUrl)&&(c.isFunction(h)&&(h=h(a.params)),h=w.getTrustedResourceUrl(h),c.isDefined(h)&&(a.loadedTemplateUrl=h,e=v.get(h,{cache:x}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return q.all(b)}}).then(function(f){a==s.current&&(a&&(a.locals=
f,c.copy(a.params,k)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==s.current&&b.$broadcast("$routeChangeError",a,e,c)})}function g(){var a,b;c.forEach(l,function(d,l){var h;if(h=!b){var m=f.path();h=d.keys;var k={};if(d.regexp)if(m=d.regexp.exec(m)){for(var g=1,q=m.length;g<q;++g){var n=h[g-1],p="string"==typeof m[g]?decodeURIComponent(m[g]):m[g];n&&p&&(k[n.name]=p)}h=k}else h=null;else h=null;h=a=h}h&&(b=t(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||l[null]&&
t(l[null],{params:{},pathParams:{}})}function p(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var r=!1,s={routes:l,reload:function(){r=!0;b.$evalAsync(d)}};b.$on("$locationChangeSuccess",d);return s}]});v.provider("$routeParams",function(){this.$get=function(){return{}}});v.directive("ngView",y);y.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map
;//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);





;angular.module("ui.bootstrap", ["ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module('ui.bootstrap.transition', [])

/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module('ui.bootstrap.collapse',['ui.bootstrap.transition'])

// The collapsible directive indicates a block of html that will expand and collapse
.directive('collapse', ['$transition', function($transition) {
  // CSS transitions don't work with height: auto, so we have to manually change the height to a
  // specific value and then once the animation completes, we can reset the height to auto.
  // Unfortunately if you do this while the CSS transitions are specified (i.e. in the CSS class
  // "collapse") then you trigger a change to height 0 in between.
  // The fix is to remove the "collapse" CSS class while changing the height back to auto - phew!
  var fixUpHeight = function(scope, element, height) {
    // We remove the collapse CSS class to prevent a transition when we change to height: auto
    element.removeClass('collapse');
    element.css({ height: height });
    // It appears that  reading offsetWidth makes the browser realise that we have changed the
    // height already :-/
    var x = element[0].offsetWidth;
    element.addClass('collapse');
  };

  return {
    link: function(scope, element, attrs) {

      var isCollapsed;
      var initialAnimSkip = true;

      scope.$watch(attrs.collapse, function(value) {
        if (value) {
          collapse();
        } else {
          expand();
        }
      });
      

      var currentTransition;
      var doTransition = function(change) {
        if ( currentTransition ) {
          currentTransition.cancel();
        }
        currentTransition = $transition(element,change);
        currentTransition.then(
          function() { currentTransition = undefined; },
          function() { currentTransition = undefined; }
        );
        return currentTransition;
      };

      var expand = function() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          if ( !isCollapsed ) {
            fixUpHeight(scope, element, 'auto');
            element.addClass('in');
          }
        } else {
          doTransition({ height : element[0].scrollHeight + 'px' })
          .then(function() {
            // This check ensures that we don't accidentally update the height if the user has closed
            // the group while the animation was still running
            if ( !isCollapsed ) {
              fixUpHeight(scope, element, 'auto');
              element.addClass('in');
            }
          });
        }
        isCollapsed = false;
      };
      
      var collapse = function() {
        isCollapsed = true;
        element.removeClass('in');
        if (initialAnimSkip) {
          initialAnimSkip = false;
          fixUpHeight(scope, element, 0);
        } else {
          fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          doTransition({'height':'0'});
        }
      };
    }
  };
}]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Keep reference to user's scope to properly assign `is-open`
  this.scope = $scope;

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };
  
  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  };

}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('accordionGroup', ['$parse', '$transition', '$timeout', function($parse, $transition, $timeout) {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope:{ heading:'@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
    controller: ['$scope', function($scope) {
      this.setHeading = function(element) {
        this.heading = element;
      };
    }],
    link: function(scope, element, attrs, accordionCtrl) {
      var getIsOpen, setIsOpen;

      accordionCtrl.addGroup(scope);

      scope.isOpen = false;
      
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        accordionCtrl.scope.$watch(getIsOpen, function(value) {
          scope.isOpen = !!value;
        });
      }

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
        if ( setIsOpen ) {
          setIsOpen(accordionCtrl.scope, value);
        }
      });
    }
  };
}])

// Use accordion-heading below an accordion-group to provide a heading containing HTML
// <accordion-group>
//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
// </accordion-group>
.directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^accordionGroup',
    compile: function(element, attr, transclude) {
      return function link(scope, element, attr, accordionGroupCtrl) {
        // Pass the heading to the accordion-group controller
        // so that it can be transcluded into the right place in the template
        // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
        accordionGroupCtrl.setHeading(transclude(scope, function() {}));
      };
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
// <div class="accordion-group">
//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
//   ...
// </div>
.directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});

angular.module("ui.bootstrap.alert", []).directive('alert', function () {
  return {
    restrict:'EA',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '=',
      close: '&'
    },
    link: function(scope, iElement, iAttrs) {
      scope.closeable = "close" in iAttrs;
    }
  };
});

angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });
angular.module('ui.bootstrap.buttons', [])

.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.directive('btnRadio', ['buttonConfig', function (buttonConfig) {
  var activeClass = buttonConfig.activeClass || 'active';
  var toggleEvent = buttonConfig.toggleEvent || 'click';

  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };

      //ui->model
      element.bind(toggleEvent, function () {
        if (!element.hasClass(activeClass)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}])

.directive('btnCheckbox', ['buttonConfig', function (buttonConfig) {
  var activeClass = buttonConfig.activeClass || 'active';
  var toggleEvent = buttonConfig.toggleEvent || 'click';

  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {

      function getTrueValue() {
        var trueValue = scope.$eval(attrs.btnCheckboxTrue);
        return angular.isDefined(trueValue) ? trueValue : true;
      }

      function getFalseValue() {
        var falseValue = scope.$eval(attrs.btnCheckboxFalse);
        return angular.isDefined(falseValue) ? falseValue : false;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.bind(toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
}]);

/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
  var self = this,
    slides = self.slides = [],
    currentIndex = -1,
    currentTimeout, isPlaying;
  self.currentSlide = null;

  /* direction: "prev" or "next" */
  self.select = function(nextSlide, direction) {
    var nextIndex = slides.indexOf(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > currentIndex ? "next" : "prev";
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition.cancel();
        //Timeout so ng-class in template has time to fix classes for finished slide
        $timeout(goNext);
      } else {
        goNext();
      }
    }
    function goNext() {
      //If we have a slide to transition from and we have a transition type and we're allowed, go
      if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
        //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
        nextSlide.$element.addClass(direction);
        var reflow = nextSlide.$element[0].offsetWidth; //force reflow

        //Set all other slides to stop doing their stuff for the new transition
        angular.forEach(slides, function(slide) {
          angular.extend(slide, {direction: '', entering: false, leaving: false, active: false});
        });
        angular.extend(nextSlide, {direction: direction, active: true, entering: true});
        angular.extend(self.currentSlide||{}, {direction: direction, leaving: true});

        $scope.$currentTransition = $transition(nextSlide.$element, {});
        //We have to create new pointers inside a closure since next & current will change
        (function(next,current) {
          $scope.$currentTransition.then(
            function(){ transitionDone(next, current); },
            function(){ transitionDone(next, current); }
          );
        }(nextSlide, self.currentSlide));
      } else {
        transitionDone(nextSlide, self.currentSlide);
      }
      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
    function transitionDone(next, current) {
      angular.extend(next, {direction: '', active: true, leaving: false, entering: false});
      angular.extend(current||{}, {direction: '', active: false, leaving: false, entering: false});
      $scope.$currentTransition = null;
    }
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (currentIndex + 1) % slides.length;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'next');
    }
  };

  $scope.prev = function() {
    var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'prev');
    }
  };

  $scope.select = function(slide) {
    self.select(slide);
  };

  $scope.isActive = function(slide) {
     return self.currentSlide === slide;
  };

  $scope.slides = function() {
    return slides;
  };

  $scope.$watch('interval', restartTimer);
  function restartTimer() {
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
    function go() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval>=0) {
      currentTimeout = $timeout(go, interval);
    }
  }
  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      if (currentTimeout) {
        $timeout.cancel(currentTimeout);
      }
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
 */
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  <div class="row-fluid">
    <div class="span6">
      <ul>
        <li ng-repeat="slide in slides">
          <button class="btn btn-mini" ng-class="{'btn-info': !slide.active, 'btn-success': slide.active}" ng-disabled="slide.active" ng-click="slide.active = true">select</button>
          {{$index}}: {{slide.text}}
        </li>
      </ul>
      <a class="btn" ng-click="addSlide()">Add Slide</a>
    </div>
    <div class="span6">
      Interval, in milliseconds: <input type="number" ng-model="myInterval">
      <br />Enter a negative number to stop the interval.
    </div>
  </div>
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' '
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) $scope.addSlide();
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

.directive('slide', ['$parse', function($parse) {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
    },
    link: function (scope, element, attrs, carouselCtrl) {
      //Set up optional 'active' = binding
      if (attrs.active) {
        var getActive = $parse(attrs.active);
        var setActive = getActive.assign;
        var lastValue = scope.active = getActive(scope.$parent);
        scope.$watch(function parentActiveWatch() {
          var parentActive = getActive(scope.$parent);

          if (parentActive !== scope.active) {
            // we are out of sync and need to copy
            if (parentActive !== lastValue) {
              // parent changed and it has precedence
              lastValue = scope.active = parentActive;
            } else {
              // if the parent can be assigned then do so
              setActive(scope.$parent, parentActive = lastValue = scope.active);
            }
          }
          return parentActive;
        });
      }

      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, "position") || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft  || $document[0].documentElement.scrollLeft)
        };
      }
    };
  }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.position'])

.constant('datepickerConfig', {
  dayFormat: 'dd',
  monthFormat: 'MMMM',
  yearFormat: 'yyyy',
  dayHeaderFormat: 'EEE',
  dayTitleFormat: 'MMMM yyyy',
  monthTitleFormat: 'yyyy',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
})

.controller('DatepickerController', ['$scope', '$attrs', 'dateFilter', 'datepickerConfig', function($scope, $attrs, dateFilter, dtConfig) {
  var format = {
    day:        getValue($attrs.dayFormat,        dtConfig.dayFormat),
    month:      getValue($attrs.monthFormat,      dtConfig.monthFormat),
    year:       getValue($attrs.yearFormat,       dtConfig.yearFormat),
    dayHeader:  getValue($attrs.dayHeaderFormat,  dtConfig.dayHeaderFormat),
    dayTitle:   getValue($attrs.dayTitleFormat,   dtConfig.dayTitleFormat),
    monthTitle: getValue($attrs.monthTitleFormat, dtConfig.monthTitleFormat)
  },
  startingDay = getValue($attrs.startingDay,      dtConfig.startingDay),
  yearRange =   getValue($attrs.yearRange,        dtConfig.yearRange);

  this.minDate = dtConfig.minDate ? new Date(dtConfig.minDate) : null;
  this.maxDate = dtConfig.maxDate ? new Date(dtConfig.maxDate) : null;

  function getValue(value, defaultValue) {
    return angular.isDefined(value) ? $scope.$parent.$eval(value) : defaultValue;
  }

  function getDaysInMonth( year, month ) {
    return new Date(year, month, 0).getDate();
  }

  function getDates(startDate, n) {
    var dates = new Array(n);
    var current = startDate, i = 0;
    while (i < n) {
      dates[i++] = new Date(current);
      current.setDate( current.getDate() + 1 );
    }
    return dates;
  }

  function makeDate(date, format, isSelected, isSecondary) {
    return { date: date, label: dateFilter(date, format), selected: !!isSelected, secondary: !!isSecondary };
  }

  this.modes = [
    {
      name: 'day',
      getVisibleDates: function(date, selected) {
        var year = date.getFullYear(), month = date.getMonth(), firstDayOfMonth = new Date(year, month, 1);
        var difference = startingDay - firstDayOfMonth.getDay(),
        numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
        firstDate = new Date(firstDayOfMonth), numDates = 0;

        if ( numDisplayedFromPreviousMonth > 0 ) {
          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
          numDates += numDisplayedFromPreviousMonth; // Previous
        }
        numDates += getDaysInMonth(year, month + 1); // Current
        numDates += (7 - numDates % 7) % 7; // Next

        var days = getDates(firstDate, numDates), labels = new Array(7);
        for (var i = 0; i < numDates; i ++) {
          var dt = new Date(days[i]);
          days[i] = makeDate(dt, format.day, (selected && selected.getDate() === dt.getDate() && selected.getMonth() === dt.getMonth() && selected.getFullYear() === dt.getFullYear()), dt.getMonth() !== month);
        }
        for (var j = 0; j < 7; j++) {
          labels[j] = dateFilter(days[j].date, format.dayHeader);
        }
        return { objects: days, title: dateFilter(date, format.dayTitle), labels: labels };
      },
      compare: function(date1, date2) {
        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
      },
      split: 7,
      step: { months: 1 }
    },
    {
      name: 'month',
      getVisibleDates: function(date, selected) {
        var months = new Array(12), year = date.getFullYear();
        for ( var i = 0; i < 12; i++ ) {
          var dt = new Date(year, i, 1);
          months[i] = makeDate(dt, format.month, (selected && selected.getMonth() === i && selected.getFullYear() === year));
        }
        return { objects: months, title: dateFilter(date, format.monthTitle) };
      },
      compare: function(date1, date2) {
        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
      },
      split: 3,
      step: { years: 1 }
    },
    {
      name: 'year',
      getVisibleDates: function(date, selected) {
        var years = new Array(yearRange), year = date.getFullYear(), startYear = parseInt((year - 1) / yearRange, 10) * yearRange + 1;
        for ( var i = 0; i < yearRange; i++ ) {
          var dt = new Date(startYear + i, 0, 1);
          years[i] = makeDate(dt, format.year, (selected && selected.getFullYear() === dt.getFullYear()));
        }
        return { objects: years, title: [years[0].label, years[yearRange - 1].label].join(' - ') };
      },
      compare: function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      },
      split: 5,
      step: { years: yearRange }
    }
  ];

  this.isDisabled = function(date, mode) {
    var currentMode = this.modes[mode || 0];
    return ((this.minDate && currentMode.compare(date, this.minDate) < 0) || (this.maxDate && currentMode.compare(date, this.maxDate) > 0) || ($scope.dateDisabled && $scope.dateDisabled({date: date, mode: currentMode.name})));
  };
}])

.directive( 'datepicker', ['dateFilter', '$parse', 'datepickerConfig', '$log', function (dateFilter, $parse, datepickerConfig, $log) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      dateDisabled: '&'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModel = ctrls[1];

      if (!ngModel) {
        return; // do nothing if no ng-model
      }

      // Configuration parameters
      var mode = 0, selected = new Date(), showWeeks = datepickerConfig.showWeeks;

      if (attrs.showWeeks) {
        scope.$parent.$watch($parse(attrs.showWeeks), function(value) {
          showWeeks = !! value;
          updateShowWeekNumbers();
        });
      } else {
        updateShowWeekNumbers();
      }

      if (attrs.min) {
        scope.$parent.$watch($parse(attrs.min), function(value) {
          datepickerCtrl.minDate = value ? new Date(value) : null;
          refill();
        });
      }
      if (attrs.max) {
        scope.$parent.$watch($parse(attrs.max), function(value) {
          datepickerCtrl.maxDate = value ? new Date(value) : null;
          refill();
        });
      }

      function updateShowWeekNumbers() {
        scope.showWeekNumbers = mode === 0 && showWeeks;
      }

      // Split array into smaller arrays
      function split(arr, size) {
        var arrays = [];
        while (arr.length > 0) {
          arrays.push(arr.splice(0, size));
        }
        return arrays;
      }

      function refill( updateSelected ) {
        var date = null, valid = true;

        if ( ngModel.$modelValue ) {
          date = new Date( ngModel.$modelValue );

          if ( isNaN(date) ) {
            valid = false;
            $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
          } else if ( updateSelected ) {
            selected = date;
          }
        }
        ngModel.$setValidity('date', valid);

        var currentMode = datepickerCtrl.modes[mode], data = currentMode.getVisibleDates(selected, date);
        angular.forEach(data.objects, function(obj) {
          obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
        });

        ngModel.$setValidity('date-disabled', (!date || !datepickerCtrl.isDisabled(date)));

        scope.rows = split(data.objects, currentMode.split);
        scope.labels = data.labels || [];
        scope.title = data.title;
      }

      function setMode(value) {
        mode = value;
        updateShowWeekNumbers();
        refill();
      }

      ngModel.$render = function() {
        refill( true );
      };

      scope.select = function( date ) {
        if ( mode === 0 ) {
          var dt = new Date( ngModel.$modelValue );
          dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
          ngModel.$setViewValue( dt );
          refill( true );
        } else {
          selected = date;
          setMode( mode - 1 );
        }
      };
      scope.move = function(direction) {
        var step = datepickerCtrl.modes[mode].step;
        selected.setMonth( selected.getMonth() + direction * (step.months || 0) );
        selected.setFullYear( selected.getFullYear() + direction * (step.years || 0) );
        refill();
      };
      scope.toggleMode = function() {
        setMode( (mode + 1) % datepickerCtrl.modes.length );
      };
      scope.getWeekNumber = function(row) {
        return ( mode === 0 && scope.showWeekNumbers && row.length === 7 ) ? getISO8601WeekNumber(row[0].date) : null;
      };

      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }
    }
  };
}])

.constant('datepickerPopupConfig', {
  dateFormat: 'yyyy-MM-dd',
  currentText: 'Today',
  toggleWeeksText: 'Weeks',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false
})

.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'datepickerPopupConfig', 'datepickerConfig',
function ($compile, $parse, $document, $position, dateFilter, datepickerPopupConfig, datepickerConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    link: function(originalScope, element, attrs, ngModel) {
      var dateFormat;
      attrs.$observe('datepickerPopup', function(value) {
          dateFormat = value || datepickerPopupConfig.dateFormat;
          ngModel.$render();
      });

      var closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? originalScope.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
      var appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? originalScope.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

      // create a child scope for the datepicker directive so we are not polluting original scope
      var scope = originalScope.$new();

      originalScope.$on('$destroy', function() {
        scope.$destroy();
      });

      attrs.$observe('currentText', function(text) {
        scope.currentText = angular.isDefined(text) ? text : datepickerPopupConfig.currentText;
      });
      attrs.$observe('toggleWeeksText', function(text) {
        scope.toggleWeeksText = angular.isDefined(text) ? text : datepickerPopupConfig.toggleWeeksText;
      });
      attrs.$observe('clearText', function(text) {
        scope.clearText = angular.isDefined(text) ? text : datepickerPopupConfig.clearText;
      });
      attrs.$observe('closeText', function(text) {
        scope.closeText = angular.isDefined(text) ? text : datepickerPopupConfig.closeText;
      });

      var getIsOpen, setIsOpen;
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        originalScope.$watch(getIsOpen, function updateOpen(value) {
          scope.isOpen = !! value;
        });
      }
      scope.isOpen = getIsOpen ? getIsOpen(originalScope) : false; // Initial state

      function setOpen( value ) {
        if (setIsOpen) {
          setIsOpen(originalScope, !!value);
        } else {
          scope.isOpen = !!value;
        }
      }

      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            setOpen(false);
          });
        }
      };

      var elementFocusBind = function() {
        scope.$apply(function() {
          setOpen( true );
        });
      };

      // popup element used to display calendar
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (attrs.datepickerOptions) {
        datepickerEl.attr(angular.extend({}, originalScope.$eval(attrs.datepickerOptions)));
      }

      // TODO: reverse from dateFilter string to Date object
      function parseDate(viewValue) {
        if (!viewValue) {
          ngModel.$setValidity('date', true);
          return null;
        } else if (angular.isDate(viewValue)) {
          ngModel.$setValidity('date', true);
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = new Date(viewValue);
          if (isNaN(date)) {
            ngModel.$setValidity('date', false);
            return undefined;
          } else {
            ngModel.$setValidity('date', true);
            return date;
          }
        } else {
          ngModel.$setValidity('date', false);
          return undefined;
        }
      }
      ngModel.$parsers.unshift(parseDate);

      // Inner change
      scope.dateSelection = function() {
        ngModel.$setViewValue(scope.date);
        ngModel.$render();

        if (closeOnDateSelection) {
          setOpen( false );
        }
      };

      element.bind('input change keyup', function() {
        scope.$apply(function() {
          updateCalendar();
        });
      });

      // Outter change
      ngModel.$render = function() {
        var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
        element.val(date);

        updateCalendar();
      };

      function updateCalendar() {
        scope.date = ngModel.$modelValue;
        updatePosition();
      }

      function addWatchableAttribute(attribute, scopeProperty, datepickerAttribute) {
        if (attribute) {
          originalScope.$watch($parse(attribute), function(value){
            scope[scopeProperty] = value;
          });
          datepickerEl.attr(datepickerAttribute || scopeProperty, scopeProperty);
        }
      }
      addWatchableAttribute(attrs.min, 'min');
      addWatchableAttribute(attrs.max, 'max');
      if (attrs.showWeeks) {
        addWatchableAttribute(attrs.showWeeks, 'showWeeks', 'show-weeks');
      } else {
        scope.showWeeks = datepickerConfig.showWeeks;
        datepickerEl.attr('show-weeks', 'showWeeks');
      }
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', attrs.dateDisabled);
      }

      function updatePosition() {
        scope.position = appendToBody ? $position.offset(element) : $position.position(element);
        scope.position.top = scope.position.top + element.prop('offsetHeight');
      }

      var documentBindingInitialized = false, elementFocusInitialized = false;
      scope.$watch('isOpen', function(value) {
        if (value) {
          updatePosition();
          $document.bind('click', documentClickBind);
          if(elementFocusInitialized) {
            element.unbind('focus', elementFocusBind);
          }
          element[0].focus();
          documentBindingInitialized = true;
        } else {
          if(documentBindingInitialized) {
            $document.unbind('click', documentClickBind);
          }
          element.bind('focus', elementFocusBind);
          elementFocusInitialized = true;
        }

        if ( setIsOpen ) {
          setIsOpen(originalScope, value);
        }
      });

      var $setModelValue = $parse(attrs.ngModel).assign;

      scope.today = function() {
        $setModelValue(originalScope, new Date());
      };
      scope.clear = function() {
        $setModelValue(originalScope, null);
      };

      var $popup = $compile(popupEl)(scope);
      if ( appendToBody ) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };
}])

.directive('datepickerPopupWrap', function() {
  return {
    restrict:'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link:function (scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});

/*
 * dropdownToggle - Provides dropdown menu functionality in place of bootstrap js
 * @restrict class or attribute
 * @example:
   <li class="dropdown">
     <a class="dropdown-toggle">My Dropdown Menu</a>
     <ul class="dropdown-menu">
       <li ng-repeat="choice in dropChoices">
         <a ng-href="{{choice.href}}">{{choice.text}}</a>
       </li>
     </ul>
   </li>
 */

angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', ['$document', '$location', function ($document, $location) {
  var openElement = null,
      closeMenu   = angular.noop;
  return {
    restrict: 'CA',
    link: function(scope, element, attrs) {
      scope.$watch('$location.path', function() { closeMenu(); });
      element.parent().bind('click', function() { closeMenu(); });
      element.bind('click', function (event) {

        var elementWasOpen = (element === openElement);

        event.preventDefault();
        event.stopPropagation();

        if (!!openElement) {
          closeMenu();
        }

        if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
          element.parent().addClass('open');
          openElement = element;
          closeMenu = function (event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }
            $document.unbind('click', closeMenu);
            element.parent().removeClass('open');
            closeMenu = angular.noop;
            openElement = null;
          };
          $document.bind('click', closeMenu);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.modal', [])

/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function () {
    return {
      createNew: function () {
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    };
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('modalBackdrop', ['$modalStack', '$timeout', function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope, element, attrs) {

        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });

        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static') {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }])

  .directive('modalWindow', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@'
      },
      replace: true,
      transclude: true,
      templateUrl: 'template/modal/window.html',
      link: function (scope, element, attrs) {
        scope.windowClass = attrs.windowClass || '';

        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }])

  .factory('$modalStack', ['$document', '$compile', '$rootScope', '$$stackedMap',
    function ($document, $compile, $rootScope, $$stackedMap) {

      var backdropjqLiteEl, backdropDomEl;
      var backdropScope = $rootScope.$new(true);
      var body = $document.find('body').eq(0);
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
        backdropScope.index = newBackdropIndex;
      });

      function removeModalWindow(modalInstance) {

        var modalWindow = openedWindows.get(modalInstance).value;

        //clean up the stack
        openedWindows.remove(modalInstance);

        //remove window DOM element
        modalWindow.modalDomEl.remove();

        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() == -1) {
          backdropDomEl.remove();
          backdropDomEl = undefined;
        }

        //destroy scope
        modalWindow.modalScope.$destroy();
      }

      $document.bind('keydown', function (evt) {
        var modal;

        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            $rootScope.$apply(function () {
              $modalStack.dismiss(modal.key);
            });
          }
        }
      });

      $modalStack.open = function (modalInstance, modal) {

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });

        var angularDomEl = angular.element('<div modal-window></div>');
        angularDomEl.attr('window-class', modal.windowClass);
        angularDomEl.attr('index', openedWindows.length() - 1);
        angularDomEl.html(modal.content);

        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        body.append(modalDomEl);

        if (backdropIndex() >= 0 && !backdropDomEl) {
            backdropjqLiteEl = angular.element('<div modal-backdrop></div>');
            backdropDomEl = $compile(backdropjqLiteEl)(backdropScope);
            body.append(backdropDomEl);
        }
      };

      $modalStack.close = function (modalInstance, result) {
        var modal = openedWindows.get(modalInstance);
        if (modal) {
          modal.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
        }
      };

      $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance).value;
        if (modalWindow) {
          modalWindow.deferred.reject(reason);
          removeModalWindow(modalInstance);
        }
      };

      $modalStack.getTop = function () {
        return openedWindows.top();
      };

      return $modalStack;
    }])

  .provider('$modal', function () {

    var $modalProvider = {
      options: {
        backdrop: true, //can be also false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $http.get(options.templateUrl, {cache: $templateCache}).then(function (result) {
                return result.data;
              });
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              close: function (result) {
                $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }

              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.pagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate', function ($scope, $attrs, $parse, $interpolate) {
  var self = this,
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(defaultItemsPerPage) {
    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = defaultItemsPerPage;
    }
  };

  this.noPrevious = function() {
    return this.page === 1;
  };
  this.noNext = function() {
    return this.page === $scope.totalPages;
  };

  this.isActive = function(page) {
    return this.page === page;
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.getAttributeValue = function(attribute, defaultValue, interpolate) {
    return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
  };

  this.render = function() {
    this.page = parseInt($scope.page, 10) || 1;
    if (this.page > 0 && this.page <= $scope.totalPages) {
      $scope.pages = this.getPages(this.page, $scope.totalPages);
    }
  };

  $scope.selectPage = function(page) {
    if ( ! self.isActive(page) && page > 0 && page <= $scope.totalPages) {
      $scope.page = page;
      $scope.onSelectPage({ page: page });
    }
  };

  $scope.$watch('page', function() {
    self.render();
  });

  $scope.$watch('totalItems', function() {
    $scope.totalPages = self.calculateTotalPages();
  });

  $scope.$watch('totalPages', function(value) {
    setNumPages($scope.$parent, value); // Readonly variable

    if ( self.page > value ) {
      $scope.selectPage(value);
    } else {
      self.render();
    }
  });
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, config) {
  return {
    restrict: 'EA',
    scope: {
      page: '=',
      totalItems: '=',
      onSelectPage:' &'
    },
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, paginationCtrl) {

      // Setup configuration parameters
      var maxSize,
      boundaryLinks  = paginationCtrl.getAttributeValue(attrs.boundaryLinks,  config.boundaryLinks      ),
      directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks     ),
      firstText      = paginationCtrl.getAttributeValue(attrs.firstText,      config.firstText,     true),
      previousText   = paginationCtrl.getAttributeValue(attrs.previousText,   config.previousText,  true),
      nextText       = paginationCtrl.getAttributeValue(attrs.nextText,       config.nextText,      true),
      lastText       = paginationCtrl.getAttributeValue(attrs.lastText,       config.lastText,      true),
      rotate         = paginationCtrl.getAttributeValue(attrs.rotate,         config.rotate);

      paginationCtrl.init(config.itemsPerPage);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive, isDisabled) {
        return {
          number: number,
          text: text,
          active: isActive,
          disabled: isDisabled
        };
      }

      paginationCtrl.getPages = function(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, paginationCtrl.isActive(number), false);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false, false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false, false);
            pages.push(nextPageSet);
          }
        }

        // Add previous & next links
        if (directionLinks) {
          var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
          pages.unshift(previousPage);

          var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
          pages.push(nextPage);
        }

        // Add first & last links
        if (boundaryLinks) {
          var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
          pages.unshift(firstPage);

          var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
          pages.push(lastPage);
        }

        return pages;
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(config) {
  return {
    restrict: 'EA',
    scope: {
      page: '=',
      totalItems: '=',
      onSelectPage:' &'
    },
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, paginationCtrl) {

      // Setup configuration parameters
      var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
      nextText         = paginationCtrl.getAttributeValue(attrs.nextText,     config.nextText,     true),
      align            = paginationCtrl.getAttributeValue(attrs.align,        config.align);

      paginationCtrl.init(config.itemsPerPage);

      // Create page object used in template
      function makePage(number, text, isDisabled, isPrevious, isNext) {
        return {
          number: number,
          text: text,
          disabled: isDisabled,
          previous: ( align && isPrevious ),
          next: ( align && isNext )
        };
      }

      paginationCtrl.getPages = function(currentPage) {
        return [
          makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
          makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
        ];
      };
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider( '$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };

  // The options specified to the provider globally.
  var globalOptions = {};
  
  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function( value ) {
		angular.extend( globalOptions, value );
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers ( triggers ) {
    angular.extend( triggerMap, triggers );
  };

  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name){
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [ '$window', '$compile', '$timeout', '$parse', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $parse, $document, $position, $interpolate ) {
    return function $tooltip ( type, prefix, defaultTriggerShow ) {
      var options = angular.extend( {}, defaultOptions, globalOptions );

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers ( trigger ) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case( type );

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template = 
        '<'+ directiveName +'-popup '+
          'title="'+startSym+'tt_title'+endSym+'" '+
          'content="'+startSym+'tt_content'+endSym+'" '+
          'placement="'+startSym+'tt_placement'+endSym+'" '+
          'animation="tt_animation" '+
          'is-open="tt_isOpen"'+
          '>'+
        '</'+ directiveName +'-popup>';

      return {
        restrict: 'EA',
        scope: true,
        link: function link ( scope, element, attrs ) {
          var tooltip = $compile( template )( scope );
          var transitionTimeout;
          var popupTimeout;
          var $body = $document.find( 'body' );
          var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
          var triggers = getTriggers( undefined );
          var hasRegisteredTriggers = false;
          var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);

          // By default, the tooltip is not open.
          // TODO add ability to start tooltip opened
          scope.tt_isOpen = false;

          function toggleTooltipBind () {
            if ( ! scope.tt_isOpen ) {
              showTooltipBind();
            } else {
              hideTooltipBind();
            }
          }
          
          // Show the tooltip with delay if specified, otherwise show it immediately
          function showTooltipBind() {
            if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
              return;
            }
            if ( scope.tt_popupDelay ) {
              popupTimeout = $timeout( show, scope.tt_popupDelay );
            } else {
              scope.$apply( show );
            }
          }

          function hideTooltipBind () {
            scope.$apply(function () {
              hide();
            });
          }
          
          // Show the tooltip popup element.
          function show() {
            var position,
                ttWidth,
                ttHeight,
                ttPosition;

            // Don't show empty tooltips.
            if ( ! scope.tt_content ) {
              return;
            }

            // If there is a pending remove transition, we must cancel it, lest the
            // tooltip be mysteriously removed.
            if ( transitionTimeout ) {
              $timeout.cancel( transitionTimeout );
            }
            
            // Set the initial positioning.
            tooltip.css({ top: 0, left: 0, display: 'block' });
            
            // Now we add it to the DOM because need some info about it. But it's not 
            // visible yet anyway.
            if ( appendToBody ) {
                $body.append( tooltip );
            } else {
              element.after( tooltip );
            }

            // Get the position of the directive element.
            position = appendToBody ? $position.offset( element ) : $position.position( element );

            // Get the height and width of the tooltip so we can center it.
            ttWidth = tooltip.prop( 'offsetWidth' );
            ttHeight = tooltip.prop( 'offsetHeight' );
            
            // Calculate the tooltip's top and left coordinates to center it with
            // this directive.
            switch ( scope.tt_placement ) {
              case 'right':
                ttPosition = {
                  top: position.top + position.height / 2 - ttHeight / 2,
                  left: position.left + position.width
                };
                break;
              case 'bottom':
                ttPosition = {
                  top: position.top + position.height,
                  left: position.left + position.width / 2 - ttWidth / 2
                };
                break;
              case 'left':
                ttPosition = {
                  top: position.top + position.height / 2 - ttHeight / 2,
                  left: position.left - ttWidth
                };
                break;
              default:
                ttPosition = {
                  top: position.top - ttHeight,
                  left: position.left + position.width / 2 - ttWidth / 2
                };
                break;
            }

            ttPosition.top += 'px';
            ttPosition.left += 'px';

            // Now set the calculated positioning.
            tooltip.css( ttPosition );
              
            // And show the tooltip.
            scope.tt_isOpen = true;
          }
          
          // Hide the tooltip popup element.
          function hide() {
            // First things first: we don't show it anymore.
            scope.tt_isOpen = false;

            //if tooltip is going to be shown after delay, we must cancel this
            $timeout.cancel( popupTimeout );
            
            // And now we remove it from the DOM. However, if we have animation, we 
            // need to wait for it to expire beforehand.
            // FIXME: this is a placeholder for a port of the transitions library.
            if ( scope.tt_animation ) {
              transitionTimeout = $timeout(function () {
                tooltip.remove();
              }, 500);
            } else {
              tooltip.remove();
            }
          }

          /**
           * Observe the relevant attributes.
           */
          attrs.$observe( type, function ( val ) {
            if (val) {
              scope.tt_content = val;
            } else {
              if ( scope.tt_isOpen ) {
                hide();
              }
            }
          });

          attrs.$observe( prefix+'Title', function ( val ) {
            scope.tt_title = val;
          });

          attrs.$observe( prefix+'Placement', function ( val ) {
            scope.tt_placement = angular.isDefined( val ) ? val : options.placement;
          });

          attrs.$observe(prefix + 'Animation', function (val) {
            scope.tt_animation = angular.isDefined(val) ? !!val : options.animation;
          });

          attrs.$observe( prefix+'PopupDelay', function ( val ) {
            var delay = parseInt( val, 10 );
            scope.tt_popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
          });

          attrs.$observe( prefix+'Trigger', function ( val ) {

            if (hasRegisteredTriggers) {
              element.unbind( triggers.show, showTooltipBind );
              element.unbind( triggers.hide, hideTooltipBind );
            }

            triggers = getTriggers( val );

            if ( triggers.show === triggers.hide ) {
              element.bind( triggers.show, toggleTooltipBind );
            } else {
              element.bind( triggers.show, showTooltipBind );
              element.bind( triggers.hide, hideTooltipBind );
            }

            hasRegisteredTriggers = true;
          });

          attrs.$observe( prefix+'AppendToBody', function ( val ) {
            appendToBody = angular.isDefined( val ) ? $parse( val )( scope ) : appendToBody;
          });

          // if a tooltip is attached to <body> we need to remove it on
          // location change as its parent scope will probably not be destroyed
          // by the change.
          if ( appendToBody ) {
            scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
            if ( scope.tt_isOpen ) {
              hide();
            }
          });
          }

          // Make sure tooltip is destroyed and removed.
          scope.$on('$destroy', function onDestroyTooltip() {
            $timeout.cancel( popupTimeout );
            tooltip.remove();
            tooltip.unbind();
            tooltip = null;
            $body = null;
          });
        }
      };
    };
  }];
})

.directive( 'tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})

.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
}])

.directive( 'tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
})

.directive( 'tooltipHtmlUnsafe', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )
.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})
.directive( 'popover', [ '$compile', '$timeout', '$parse', '$window', '$tooltip', function ( $compile, $timeout, $parse, $window, $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}]);


angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition'])

.constant('progressConfig', {
  animate: true,
  autoType: false,
  stackedTypes: ['success', 'info', 'warning', 'danger']
})

.controller('ProgressBarController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {

    // Whether bar transitions should be animated
    var animate = angular.isDefined($attrs.animate) ? $scope.$eval($attrs.animate) : progressConfig.animate;
    var autoType = angular.isDefined($attrs.autoType) ? $scope.$eval($attrs.autoType) : progressConfig.autoType;
    var stackedTypes = angular.isDefined($attrs.stackedTypes) ? $scope.$eval('[' + $attrs.stackedTypes + ']') : progressConfig.stackedTypes;

    // Create bar object
    this.makeBar = function(newBar, oldBar, index) {
        var newValue = (angular.isObject(newBar)) ? newBar.value : (newBar || 0);
        var oldValue =  (angular.isObject(oldBar)) ? oldBar.value : (oldBar || 0);
        var type = (angular.isObject(newBar) && angular.isDefined(newBar.type)) ? newBar.type : (autoType) ? getStackedType(index || 0) : null;

        return {
            from: oldValue,
            to: newValue,
            type: type,
            animate: animate
        };
    };

    function getStackedType(index) {
        return stackedTypes[index];
    }

    this.addBar = function(bar) {
        $scope.bars.push(bar);
        $scope.totalPercent += bar.to;
    };

    this.clearBars = function() {
        $scope.bars = [];
        $scope.totalPercent = 0;
    };
    this.clearBars();
}])

.directive('progress', function() {
    return {
        restrict: 'EA',
        replace: true,
        controller: 'ProgressBarController',
        scope: {
            value: '=percent',
            onFull: '&',
            onEmpty: '&'
        },
        templateUrl: 'template/progressbar/progress.html',
        link: function(scope, element, attrs, controller) {
            scope.$watch('value', function(newValue, oldValue) {
                controller.clearBars();

                if (angular.isArray(newValue)) {
                    // Stacked progress bar
                    for (var i=0, n=newValue.length; i < n; i++) {
                        controller.addBar(controller.makeBar(newValue[i], oldValue[i], i));
                    }
                } else {
                    // Simple bar
                    controller.addBar(controller.makeBar(newValue, oldValue));
                }
            }, true);

            // Total percent listeners
            scope.$watch('totalPercent', function(value) {
              if (value >= 100) {
                scope.onFull();
              } else if (value <= 0) {
                scope.onEmpty();
              }
            }, true);
        }
    };
})

.directive('progressbar', ['$transition', function($transition) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            width: '=',
            old: '=',
            type: '=',
            animate: '='
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element) {
            scope.$watch('width', function(value) {
                if (scope.animate) {
                    element.css('width', scope.old + '%');
                    $transition(element, {width: value + '%'});
                } else {
                    element.css('width', value + '%');
                }
            });
        }
    };
}]);
angular.module('ui.bootstrap.rating', [])

.constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', '$parse', 'ratingConfig', function($scope, $attrs, $parse, ratingConfig) {

  this.maxRange = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
  this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
  this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

  this.createRateObjects = function(states) {
    var defaultOptions = {
      stateOn: this.stateOn,
      stateOff: this.stateOff
    };

    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
    }
    return states;
  };

  // Get objects used in template
  $scope.range = angular.isDefined($attrs.ratingStates) ?  this.createRateObjects(angular.copy($scope.$parent.$eval($attrs.ratingStates))): this.createRateObjects(new Array(this.maxRange));

  $scope.rate = function(value) {
    if ( $scope.readonly || $scope.value === value) {
      return;
    }

    $scope.value = value;
  };

  $scope.enter = function(value) {
    if ( ! $scope.readonly ) {
      $scope.val = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.val = angular.copy($scope.value);
    $scope.onLeave();
  };

  $scope.$watch('value', function(value) {
    $scope.val = value;
  });

  $scope.readonly = false;
  if ($attrs.readonly) {
    $scope.$parent.$watch($parse($attrs.readonly), function(value) {
      $scope.readonly = !!value;
    });
  }
}])

.directive('rating', function() {
  return {
    restrict: 'EA',
    scope: {
      value: '=',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true
  };
});

/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */

angular.module('ui.bootstrap.tabs', [])

.directive('tabs', function() {
  return function() {
    throw new Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md");
  };
})

.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

  ctrl.select = function(tab) {
    angular.forEach(tabs, function(tab) {
      tab.active = false;
    });
    tab.active = true;
  };

  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    if (tabs.length === 1 || tab.active) {
      ctrl.select(tab);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    //Select a new tab if the tab to be removed is selected
    if (tab.active && tabs.length > 1) {
      //If this is the last tab, select the previous tab. else, the next tab.
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {string=} direction  What direction the tabs should be rendered. Available:
 * 'right', 'left', 'below'.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Vertical Tab 1"><b>First</b> Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    require: '^tabset',
    scope: {},
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    compile: function(elm, attrs, transclude) {
      return function(scope, element, attrs, tabsetCtrl) {
        scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
        scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
        scope.direction = angular.isDefined(attrs.direction) ? scope.$parent.$eval(attrs.direction) : 'top';
        scope.tabsAbove = (scope.direction != 'below');
        tabsetCtrl.$scope = scope;
        tabsetCtrl.$transcludeFn = transclude;
      };
    }
  };
})

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
.directive('tab', ['$parse', function($parse) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      heading: '@',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        var getActive, setActive;
        if (attrs.active) {
          getActive = $parse(attrs.active);
          setActive = getActive.assign;
          scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
            // Avoid re-initializing scope.active as it is already initialized
            // below. (watcher is called async during init with value ===
            // oldVal)
            if (value !== oldVal) {
              scope.active = !!value;
            }
          });
          scope.active = getActive(scope.$parent);
        } else {
          setActive = getActive = angular.noop;
        }

        scope.$watch('active', function(active) {
          // Note this watcher also initializes and assigns scope.active to the
          // attrs.active expression.
          setActive(scope.$parent, active);
          if (active) {
            tabsetCtrl.select(scope);
            scope.onSelect();
          } else {
            scope.onDeselect();
          }
        });

        scope.disabled = false;
        if ( attrs.disabled ) {
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !! value;
          });
        }

        scope.select = function() {
          if ( ! scope.disabled ) {
            scope.active = true;
          }
        };

        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });


        //We need to transclude later, once the content container is ready.
        //when this link happens, we're inside a tab heading.
        scope.$transcludeFn = transclude;
      };
    }
  };
}])

.directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}])

.directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName &&  (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
})

.directive('tabsetTitles', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    templateUrl: 'template/tabs/tabset-titles.html',
    replace: true,
    link: function(scope, elm, attrs, tabsetCtrl) {
      if (!scope.$eval(attrs.tabsetTitles)) {
        elm.remove();
      } else {
        //now that tabs location has been decided, transclude the tab titles in
        tabsetCtrl.$transcludeFn(tabsetCtrl.$scope.$parent, function(node) {
          elm.append(node);
        });
      }
    }
  };
});

angular.module('ui.bootstrap.timepicker', [])

.constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: ['AM', 'PM'],
  readonlyInput: false,
  mousewheel: true
})

.directive('timepicker', ['$parse', '$log', 'timepickerConfig', function ($parse, $log, timepickerConfig) {
  return {
    restrict: 'EA',
    require:'?^ngModel',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ngModel) {
      if ( !ngModel ) {
        return; // do nothing if no ng-model
      }

      var selected = new Date(), meridians = timepickerConfig.meridians;

      var hourStep = timepickerConfig.hourStep;
      if (attrs.hourStep) {
        scope.$parent.$watch($parse(attrs.hourStep), function(value) {
          hourStep = parseInt(value, 10);
        });
      }

      var minuteStep = timepickerConfig.minuteStep;
      if (attrs.minuteStep) {
        scope.$parent.$watch($parse(attrs.minuteStep), function(value) {
          minuteStep = parseInt(value, 10);
        });
      }

      // 12H / 24H mode
      scope.showMeridian = timepickerConfig.showMeridian;
      if (attrs.showMeridian) {
        scope.$parent.$watch($parse(attrs.showMeridian), function(value) {
          scope.showMeridian = !!value;

          if ( ngModel.$error.time ) {
            // Evaluate from template
            var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
            if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
              selected.setHours( hours );
              refresh();
            }
          } else {
            updateTemplate();
          }
        });
      }

      // Get scope.hours in 24H mode if valid
      function getHoursFromTemplate ( ) {
        var hours = parseInt( scope.hours, 10 );
        var valid = ( scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
        if ( !valid ) {
          return undefined;
        }

        if ( scope.showMeridian ) {
          if ( hours === 12 ) {
            hours = 0;
          }
          if ( scope.meridian === meridians[1] ) {
            hours = hours + 12;
          }
        }
        return hours;
      }

      function getMinutesFromTemplate() {
        var minutes = parseInt(scope.minutes, 10);
        return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
      }

      function pad( value ) {
        return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value;
      }

      // Input elements
      var inputs = element.find('input'), hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);

      // Respond on mousewheel spin
      var mousewheel = (angular.isDefined(attrs.mousewheel)) ? scope.$eval(attrs.mousewheel) : timepickerConfig.mousewheel;
      if ( mousewheel ) {

        var isScrollingUp = function(e) {
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          //pick correct delta variable depending on event
          var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
          return (e.detail || delta > 0);
        };

        hoursInputEl.bind('mousewheel wheel', function(e) {
          scope.$apply( (isScrollingUp(e)) ? scope.incrementHours() : scope.decrementHours() );
          e.preventDefault();
        });

        minutesInputEl.bind('mousewheel wheel', function(e) {
          scope.$apply( (isScrollingUp(e)) ? scope.incrementMinutes() : scope.decrementMinutes() );
          e.preventDefault();
        });
      }

      scope.readonlyInput = (angular.isDefined(attrs.readonlyInput)) ? scope.$eval(attrs.readonlyInput) : timepickerConfig.readonlyInput;
      if ( ! scope.readonlyInput ) {

        var invalidate = function(invalidHours, invalidMinutes) {
          ngModel.$setViewValue( null );
          ngModel.$setValidity('time', false);
          if (angular.isDefined(invalidHours)) {
            scope.invalidHours = invalidHours;
          }
          if (angular.isDefined(invalidMinutes)) {
            scope.invalidMinutes = invalidMinutes;
          }
        };

        scope.updateHours = function() {
          var hours = getHoursFromTemplate();

          if ( angular.isDefined(hours) ) {
            selected.setHours( hours );
            refresh( 'h' );
          } else {
            invalidate(true);
          }
        };

        hoursInputEl.bind('blur', function(e) {
          if ( !scope.validHours && scope.hours < 10) {
            scope.$apply( function() {
              scope.hours = pad( scope.hours );
            });
          }
        });

        scope.updateMinutes = function() {
          var minutes = getMinutesFromTemplate();

          if ( angular.isDefined(minutes) ) {
            selected.setMinutes( minutes );
            refresh( 'm' );
          } else {
            invalidate(undefined, true);
          }
        };

        minutesInputEl.bind('blur', function(e) {
          if ( !scope.invalidMinutes && scope.minutes < 10 ) {
            scope.$apply( function() {
              scope.minutes = pad( scope.minutes );
            });
          }
        });
      } else {
        scope.updateHours = angular.noop;
        scope.updateMinutes = angular.noop;
      }

      ngModel.$render = function() {
        var date = ngModel.$modelValue ? new Date( ngModel.$modelValue ) : null;

        if ( isNaN(date) ) {
          ngModel.$setValidity('time', false);
          $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        } else {
          if ( date ) {
            selected = date;
          }
          makeValid();
          updateTemplate();
        }
      };

      // Call internally when we know that model is valid.
      function refresh( keyboardChange ) {
        makeValid();
        ngModel.$setViewValue( new Date(selected) );
        updateTemplate( keyboardChange );
      }

      function makeValid() {
        ngModel.$setValidity('time', true);
        scope.invalidHours = false;
        scope.invalidMinutes = false;
      }

      function updateTemplate( keyboardChange ) {
        var hours = selected.getHours(), minutes = selected.getMinutes();

        if ( scope.showMeridian ) {
          hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
        }
        scope.hours =  keyboardChange === 'h' ? hours : pad(hours);
        scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
        scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
      }

      function addMinutes( minutes ) {
        var dt = new Date( selected.getTime() + minutes * 60000 );
        selected.setHours( dt.getHours(), dt.getMinutes() );
        refresh();
      }

      scope.incrementHours = function() {
        addMinutes( hourStep * 60 );
      };
      scope.decrementHours = function() {
        addMinutes( - hourStep * 60 );
      };
      scope.incrementMinutes = function() {
        addMinutes( minuteStep );
      };
      scope.decrementMinutes = function() {
        addMinutes( - minuteStep );
      };
      scope.toggleMeridian = function() {
        addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
      };
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('typeaheadParser', ['$parse', function ($parse) {

  //                      00000111000000000000022200000000000000003333333333333330000000000044000
  var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;

  return {
    parse:function (input) {

      var match = input.match(TYPEAHEAD_REGEXP), modelMapper, viewMapper, source;
      if (!match) {
        throw new Error(
          "Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_'" +
            " but got '" + input + "'.");
      }

      return {
        itemName:match[3],
        source:$parse(match[4]),
        viewMapper:$parse(match[2] || match[1]),
        modelMapper:$parse(match[1])
      };
    }
  };
}])

  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
    function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

  var HOT_KEYS = [9, 13, 27, 38, 40];

  return {
    require:'ngModel',
    link:function (originalScope, element, attrs, modelCtrl) {

      //SUPPORTED ATTRIBUTES (OPTIONS)

      //minimal no of characters that needs to be entered before typeahead kicks-in
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

      //minimal wait time after last character typed before typehead kicks-in
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

      //should it restrict model values to the ones selected from the popup only?
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

      //binding to a variable that indicates if matches are being retrieved asynchronously
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

      //a callback executed when a match is selected
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

      //INTERNAL VARIABLES

      //model setter executed upon match selection
      var $setModelValue = $parse(attrs.ngModel).assign;

      //expressions used by typeahead
      var parserResult = typeaheadParser.parse(attrs.typeahead);

      var hasFocus;

      //pop-up element used to display matches
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      //custom item template
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }

      //create a child scope for the typeahead directive so we are not polluting original scope
      //with typeahead-specific data (matches, query etc.)
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function(){
        scope.$destroy();
      });

      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
      };

      var getMatchesAsync = function(inputValue) {

        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

          //it might happen that several async queries were in progress if a user were typing fast
          //but we are interested only in responses that correspond to the current view value
          if (inputValue === modelCtrl.$viewValue && hasFocus) {
            if (matches.length > 0) {

              scope.activeIdx = 0;
              scope.matches.length = 0;

              //transform labels
              for(var i=0; i<matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }

              scope.query = inputValue;
              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
              //due to other elements being rendered
              scope.position = $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');

            } else {
              resetMatches();
            }
            isLoadingSetter(originalScope, false);
          }
        }, function(){
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };

      resetMatches();

      //we need to propagate user's query so we can higlight matches
      scope.query = undefined;

      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later 
      var timeoutPromise;

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function (inputValue) {

        hasFocus = true;

        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            if (timeoutPromise) {
              $timeout.cancel(timeoutPromise);//cancel previous timeout
            }
            timeoutPromise = $timeout(function () {
              getMatchesAsync(inputValue);
            }, waitTime);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            // Reset in case user had typed something previously.
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });

      modelCtrl.$formatters.push(function (modelValue) {

        var candidateViewValue, emptyViewValue;
        var locals = {};

        if (inputFormatter) {

          locals['$model'] = modelValue;
          return inputFormatter(originalScope, locals);

        } else {

          //it might happen that we don't have enough info to properly render input value
          //we need to check for this situation and simply return model value if we can't apply custom formatting
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);

          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
        }
      });

      scope.select = function (activeIdx) {
        //called from within the $digest() cycle
        var locals = {};
        var model, item;

        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);

        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });

        resetMatches();

        //return focus to the input element if a mach was selected via a mouse click event
        element[0].focus();
      };

      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
      element.bind('keydown', function (evt) {

        //typeahead is open and an "interesting" key was pressed
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          if (evt.which === 13) {
            evt.preventDefault();
          }
          return;
        }

        evt.preventDefault();

        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();

        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();

        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function () {
            scope.select(scope.activeIdx);
          });

        } else if (evt.which === 27) {
          evt.stopPropagation();

          resetMatches();
          scope.$digest();
        }
      });

      element.bind('blur', function (evt) {
        hasFocus = false;
      });

      // Keep reference to click handler to unbind it.
      var dismissClickHandler = function (evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };

      $document.bind('click', dismissClickHandler);

      originalScope.$on('$destroy', function(){
        $document.unbind('click', dismissClickHandler);
      });

      element.after($compile(popUpEl)(scope));
    }
  };

}])

  .directive('typeaheadPopup', function () {
    return {
      restrict:'EA',
      scope:{
        matches:'=',
        query:'=',
        active:'=',
        position:'=',
        select:'&'
      },
      replace:true,
      templateUrl:'template/typeahead/typeahead-popup.html',
      link:function (scope, element, attrs) {

        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function () {
          return scope.matches.length > 0;
        };

        scope.isActive = function (matchIdx) {
          return scope.active == matchIdx;
        };

        scope.selectActive = function (matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function (activeIdx) {
          scope.select({activeIdx:activeIdx});
        };
      }
    };
  })

  .directive('typeaheadMatch', ['$http', '$templateCache', '$compile', '$parse', function ($http, $templateCache, $compile, $parse) {
    return {
      restrict:'EA',
      scope:{
        index:'=',
        match:'=',
        query:'='
      },
      link:function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
           element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }])

  .filter('typeaheadHighlight', function() {

    function escapeRegexp(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }

    return function(matchItem, query) {
      return query ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
  });;angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset-titles.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.transition', [])

/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module('ui.bootstrap.collapse',['ui.bootstrap.transition'])

// The collapsible directive indicates a block of html that will expand and collapse
.directive('collapse', ['$transition', function($transition) {
  // CSS transitions don't work with height: auto, so we have to manually change the height to a
  // specific value and then once the animation completes, we can reset the height to auto.
  // Unfortunately if you do this while the CSS transitions are specified (i.e. in the CSS class
  // "collapse") then you trigger a change to height 0 in between.
  // The fix is to remove the "collapse" CSS class while changing the height back to auto - phew!
  var fixUpHeight = function(scope, element, height) {
    // We remove the collapse CSS class to prevent a transition when we change to height: auto
    element.removeClass('collapse');
    element.css({ height: height });
    // It appears that  reading offsetWidth makes the browser realise that we have changed the
    // height already :-/
    var x = element[0].offsetWidth;
    element.addClass('collapse');
  };

  return {
    link: function(scope, element, attrs) {

      var isCollapsed;
      var initialAnimSkip = true;

      scope.$watch(attrs.collapse, function(value) {
        if (value) {
          collapse();
        } else {
          expand();
        }
      });
      

      var currentTransition;
      var doTransition = function(change) {
        if ( currentTransition ) {
          currentTransition.cancel();
        }
        currentTransition = $transition(element,change);
        currentTransition.then(
          function() { currentTransition = undefined; },
          function() { currentTransition = undefined; }
        );
        return currentTransition;
      };

      var expand = function() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          if ( !isCollapsed ) {
            fixUpHeight(scope, element, 'auto');
            element.addClass('in');
          }
        } else {
          doTransition({ height : element[0].scrollHeight + 'px' })
          .then(function() {
            // This check ensures that we don't accidentally update the height if the user has closed
            // the group while the animation was still running
            if ( !isCollapsed ) {
              fixUpHeight(scope, element, 'auto');
              element.addClass('in');
            }
          });
        }
        isCollapsed = false;
      };
      
      var collapse = function() {
        isCollapsed = true;
        element.removeClass('in');
        if (initialAnimSkip) {
          initialAnimSkip = false;
          fixUpHeight(scope, element, 0);
        } else {
          fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          doTransition({'height':'0'});
        }
      };
    }
  };
}]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Keep reference to user's scope to properly assign `is-open`
  this.scope = $scope;

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };
  
  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  };

}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('accordionGroup', ['$parse', '$transition', '$timeout', function($parse, $transition, $timeout) {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope:{ heading:'@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
    controller: ['$scope', function($scope) {
      this.setHeading = function(element) {
        this.heading = element;
      };
    }],
    link: function(scope, element, attrs, accordionCtrl) {
      var getIsOpen, setIsOpen;

      accordionCtrl.addGroup(scope);

      scope.isOpen = false;
      
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        accordionCtrl.scope.$watch(getIsOpen, function(value) {
          scope.isOpen = !!value;
        });
      }

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
        if ( setIsOpen ) {
          setIsOpen(accordionCtrl.scope, value);
        }
      });
    }
  };
}])

// Use accordion-heading below an accordion-group to provide a heading containing HTML
// <accordion-group>
//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
// </accordion-group>
.directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^accordionGroup',
    compile: function(element, attr, transclude) {
      return function link(scope, element, attr, accordionGroupCtrl) {
        // Pass the heading to the accordion-group controller
        // so that it can be transcluded into the right place in the template
        // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
        accordionGroupCtrl.setHeading(transclude(scope, function() {}));
      };
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
// <div class="accordion-group">
//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
//   ...
// </div>
.directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});

angular.module("ui.bootstrap.alert", []).directive('alert', function () {
  return {
    restrict:'EA',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '=',
      close: '&'
    },
    link: function(scope, iElement, iAttrs) {
      scope.closeable = "close" in iAttrs;
    }
  };
});

angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });
angular.module('ui.bootstrap.buttons', [])

.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.directive('btnRadio', ['buttonConfig', function (buttonConfig) {
  var activeClass = buttonConfig.activeClass || 'active';
  var toggleEvent = buttonConfig.toggleEvent || 'click';

  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };

      //ui->model
      element.bind(toggleEvent, function () {
        if (!element.hasClass(activeClass)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}])

.directive('btnCheckbox', ['buttonConfig', function (buttonConfig) {
  var activeClass = buttonConfig.activeClass || 'active';
  var toggleEvent = buttonConfig.toggleEvent || 'click';

  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {

      function getTrueValue() {
        var trueValue = scope.$eval(attrs.btnCheckboxTrue);
        return angular.isDefined(trueValue) ? trueValue : true;
      }

      function getFalseValue() {
        var falseValue = scope.$eval(attrs.btnCheckboxFalse);
        return angular.isDefined(falseValue) ? falseValue : false;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.bind(toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
}]);

/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
  var self = this,
    slides = self.slides = [],
    currentIndex = -1,
    currentTimeout, isPlaying;
  self.currentSlide = null;

  /* direction: "prev" or "next" */
  self.select = function(nextSlide, direction) {
    var nextIndex = slides.indexOf(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > currentIndex ? "next" : "prev";
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition.cancel();
        //Timeout so ng-class in template has time to fix classes for finished slide
        $timeout(goNext);
      } else {
        goNext();
      }
    }
    function goNext() {
      //If we have a slide to transition from and we have a transition type and we're allowed, go
      if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
        //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
        nextSlide.$element.addClass(direction);
        var reflow = nextSlide.$element[0].offsetWidth; //force reflow

        //Set all other slides to stop doing their stuff for the new transition
        angular.forEach(slides, function(slide) {
          angular.extend(slide, {direction: '', entering: false, leaving: false, active: false});
        });
        angular.extend(nextSlide, {direction: direction, active: true, entering: true});
        angular.extend(self.currentSlide||{}, {direction: direction, leaving: true});

        $scope.$currentTransition = $transition(nextSlide.$element, {});
        //We have to create new pointers inside a closure since next & current will change
        (function(next,current) {
          $scope.$currentTransition.then(
            function(){ transitionDone(next, current); },
            function(){ transitionDone(next, current); }
          );
        }(nextSlide, self.currentSlide));
      } else {
        transitionDone(nextSlide, self.currentSlide);
      }
      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
    function transitionDone(next, current) {
      angular.extend(next, {direction: '', active: true, leaving: false, entering: false});
      angular.extend(current||{}, {direction: '', active: false, leaving: false, entering: false});
      $scope.$currentTransition = null;
    }
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (currentIndex + 1) % slides.length;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'next');
    }
  };

  $scope.prev = function() {
    var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(slides[newIndex], 'prev');
    }
  };

  $scope.select = function(slide) {
    self.select(slide);
  };

  $scope.isActive = function(slide) {
     return self.currentSlide === slide;
  };

  $scope.slides = function() {
    return slides;
  };

  $scope.$watch('interval', restartTimer);
  function restartTimer() {
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
    function go() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval>=0) {
      currentTimeout = $timeout(go, interval);
    }
  }
  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      if (currentTimeout) {
        $timeout.cancel(currentTimeout);
      }
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
 */
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  <div class="row-fluid">
    <div class="span6">
      <ul>
        <li ng-repeat="slide in slides">
          <button class="btn btn-mini" ng-class="{'btn-info': !slide.active, 'btn-success': slide.active}" ng-disabled="slide.active" ng-click="slide.active = true">select</button>
          {{$index}}: {{slide.text}}
        </li>
      </ul>
      <a class="btn" ng-click="addSlide()">Add Slide</a>
    </div>
    <div class="span6">
      Interval, in milliseconds: <input type="number" ng-model="myInterval">
      <br />Enter a negative number to stop the interval.
    </div>
  </div>
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' '
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) $scope.addSlide();
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

.directive('slide', ['$parse', function($parse) {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
    },
    link: function (scope, element, attrs, carouselCtrl) {
      //Set up optional 'active' = binding
      if (attrs.active) {
        var getActive = $parse(attrs.active);
        var setActive = getActive.assign;
        var lastValue = scope.active = getActive(scope.$parent);
        scope.$watch(function parentActiveWatch() {
          var parentActive = getActive(scope.$parent);

          if (parentActive !== scope.active) {
            // we are out of sync and need to copy
            if (parentActive !== lastValue) {
              // parent changed and it has precedence
              lastValue = scope.active = parentActive;
            } else {
              // if the parent can be assigned then do so
              setActive(scope.$parent, parentActive = lastValue = scope.active);
            }
          }
          return parentActive;
        });
      }

      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, "position") || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].body.scrollTop || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].body.scrollLeft  || $document[0].documentElement.scrollLeft)
        };
      }
    };
  }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.position'])

.constant('datepickerConfig', {
  dayFormat: 'dd',
  monthFormat: 'MMMM',
  yearFormat: 'yyyy',
  dayHeaderFormat: 'EEE',
  dayTitleFormat: 'MMMM yyyy',
  monthTitleFormat: 'yyyy',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
})

.controller('DatepickerController', ['$scope', '$attrs', 'dateFilter', 'datepickerConfig', function($scope, $attrs, dateFilter, dtConfig) {
  var format = {
    day:        getValue($attrs.dayFormat,        dtConfig.dayFormat),
    month:      getValue($attrs.monthFormat,      dtConfig.monthFormat),
    year:       getValue($attrs.yearFormat,       dtConfig.yearFormat),
    dayHeader:  getValue($attrs.dayHeaderFormat,  dtConfig.dayHeaderFormat),
    dayTitle:   getValue($attrs.dayTitleFormat,   dtConfig.dayTitleFormat),
    monthTitle: getValue($attrs.monthTitleFormat, dtConfig.monthTitleFormat)
  },
  startingDay = getValue($attrs.startingDay,      dtConfig.startingDay),
  yearRange =   getValue($attrs.yearRange,        dtConfig.yearRange);

  this.minDate = dtConfig.minDate ? new Date(dtConfig.minDate) : null;
  this.maxDate = dtConfig.maxDate ? new Date(dtConfig.maxDate) : null;

  function getValue(value, defaultValue) {
    return angular.isDefined(value) ? $scope.$parent.$eval(value) : defaultValue;
  }

  function getDaysInMonth( year, month ) {
    return new Date(year, month, 0).getDate();
  }

  function getDates(startDate, n) {
    var dates = new Array(n);
    var current = startDate, i = 0;
    while (i < n) {
      dates[i++] = new Date(current);
      current.setDate( current.getDate() + 1 );
    }
    return dates;
  }

  function makeDate(date, format, isSelected, isSecondary) {
    return { date: date, label: dateFilter(date, format), selected: !!isSelected, secondary: !!isSecondary };
  }

  this.modes = [
    {
      name: 'day',
      getVisibleDates: function(date, selected) {
        var year = date.getFullYear(), month = date.getMonth(), firstDayOfMonth = new Date(year, month, 1);
        var difference = startingDay - firstDayOfMonth.getDay(),
        numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
        firstDate = new Date(firstDayOfMonth), numDates = 0;

        if ( numDisplayedFromPreviousMonth > 0 ) {
          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
          numDates += numDisplayedFromPreviousMonth; // Previous
        }
        numDates += getDaysInMonth(year, month + 1); // Current
        numDates += (7 - numDates % 7) % 7; // Next

        var days = getDates(firstDate, numDates), labels = new Array(7);
        for (var i = 0; i < numDates; i ++) {
          var dt = new Date(days[i]);
          days[i] = makeDate(dt, format.day, (selected && selected.getDate() === dt.getDate() && selected.getMonth() === dt.getMonth() && selected.getFullYear() === dt.getFullYear()), dt.getMonth() !== month);
        }
        for (var j = 0; j < 7; j++) {
          labels[j] = dateFilter(days[j].date, format.dayHeader);
        }
        return { objects: days, title: dateFilter(date, format.dayTitle), labels: labels };
      },
      compare: function(date1, date2) {
        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
      },
      split: 7,
      step: { months: 1 }
    },
    {
      name: 'month',
      getVisibleDates: function(date, selected) {
        var months = new Array(12), year = date.getFullYear();
        for ( var i = 0; i < 12; i++ ) {
          var dt = new Date(year, i, 1);
          months[i] = makeDate(dt, format.month, (selected && selected.getMonth() === i && selected.getFullYear() === year));
        }
        return { objects: months, title: dateFilter(date, format.monthTitle) };
      },
      compare: function(date1, date2) {
        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
      },
      split: 3,
      step: { years: 1 }
    },
    {
      name: 'year',
      getVisibleDates: function(date, selected) {
        var years = new Array(yearRange), year = date.getFullYear(), startYear = parseInt((year - 1) / yearRange, 10) * yearRange + 1;
        for ( var i = 0; i < yearRange; i++ ) {
          var dt = new Date(startYear + i, 0, 1);
          years[i] = makeDate(dt, format.year, (selected && selected.getFullYear() === dt.getFullYear()));
        }
        return { objects: years, title: [years[0].label, years[yearRange - 1].label].join(' - ') };
      },
      compare: function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      },
      split: 5,
      step: { years: yearRange }
    }
  ];

  this.isDisabled = function(date, mode) {
    var currentMode = this.modes[mode || 0];
    return ((this.minDate && currentMode.compare(date, this.minDate) < 0) || (this.maxDate && currentMode.compare(date, this.maxDate) > 0) || ($scope.dateDisabled && $scope.dateDisabled({date: date, mode: currentMode.name})));
  };
}])

.directive( 'datepicker', ['dateFilter', '$parse', 'datepickerConfig', '$log', function (dateFilter, $parse, datepickerConfig, $log) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      dateDisabled: '&'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModel = ctrls[1];

      if (!ngModel) {
        return; // do nothing if no ng-model
      }

      // Configuration parameters
      var mode = 0, selected = new Date(), showWeeks = datepickerConfig.showWeeks;

      if (attrs.showWeeks) {
        scope.$parent.$watch($parse(attrs.showWeeks), function(value) {
          showWeeks = !! value;
          updateShowWeekNumbers();
        });
      } else {
        updateShowWeekNumbers();
      }

      if (attrs.min) {
        scope.$parent.$watch($parse(attrs.min), function(value) {
          datepickerCtrl.minDate = value ? new Date(value) : null;
          refill();
        });
      }
      if (attrs.max) {
        scope.$parent.$watch($parse(attrs.max), function(value) {
          datepickerCtrl.maxDate = value ? new Date(value) : null;
          refill();
        });
      }

      function updateShowWeekNumbers() {
        scope.showWeekNumbers = mode === 0 && showWeeks;
      }

      // Split array into smaller arrays
      function split(arr, size) {
        var arrays = [];
        while (arr.length > 0) {
          arrays.push(arr.splice(0, size));
        }
        return arrays;
      }

      function refill( updateSelected ) {
        var date = null, valid = true;

        if ( ngModel.$modelValue ) {
          date = new Date( ngModel.$modelValue );

          if ( isNaN(date) ) {
            valid = false;
            $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
          } else if ( updateSelected ) {
            selected = date;
          }
        }
        ngModel.$setValidity('date', valid);

        var currentMode = datepickerCtrl.modes[mode], data = currentMode.getVisibleDates(selected, date);
        angular.forEach(data.objects, function(obj) {
          obj.disabled = datepickerCtrl.isDisabled(obj.date, mode);
        });

        ngModel.$setValidity('date-disabled', (!date || !datepickerCtrl.isDisabled(date)));

        scope.rows = split(data.objects, currentMode.split);
        scope.labels = data.labels || [];
        scope.title = data.title;
      }

      function setMode(value) {
        mode = value;
        updateShowWeekNumbers();
        refill();
      }

      ngModel.$render = function() {
        refill( true );
      };

      scope.select = function( date ) {
        if ( mode === 0 ) {
          var dt = new Date( ngModel.$modelValue );
          dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
          ngModel.$setViewValue( dt );
          refill( true );
        } else {
          selected = date;
          setMode( mode - 1 );
        }
      };
      scope.move = function(direction) {
        var step = datepickerCtrl.modes[mode].step;
        selected.setMonth( selected.getMonth() + direction * (step.months || 0) );
        selected.setFullYear( selected.getFullYear() + direction * (step.years || 0) );
        refill();
      };
      scope.toggleMode = function() {
        setMode( (mode + 1) % datepickerCtrl.modes.length );
      };
      scope.getWeekNumber = function(row) {
        return ( mode === 0 && scope.showWeekNumbers && row.length === 7 ) ? getISO8601WeekNumber(row[0].date) : null;
      };

      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }
    }
  };
}])

.constant('datepickerPopupConfig', {
  dateFormat: 'yyyy-MM-dd',
  currentText: 'Today',
  toggleWeeksText: 'Weeks',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false
})

.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'datepickerPopupConfig', 'datepickerConfig',
function ($compile, $parse, $document, $position, dateFilter, datepickerPopupConfig, datepickerConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    link: function(originalScope, element, attrs, ngModel) {
      var dateFormat;
      attrs.$observe('datepickerPopup', function(value) {
          dateFormat = value || datepickerPopupConfig.dateFormat;
          ngModel.$render();
      });

      var closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? originalScope.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
      var appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? originalScope.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

      // create a child scope for the datepicker directive so we are not polluting original scope
      var scope = originalScope.$new();

      originalScope.$on('$destroy', function() {
        scope.$destroy();
      });

      attrs.$observe('currentText', function(text) {
        scope.currentText = angular.isDefined(text) ? text : datepickerPopupConfig.currentText;
      });
      attrs.$observe('toggleWeeksText', function(text) {
        scope.toggleWeeksText = angular.isDefined(text) ? text : datepickerPopupConfig.toggleWeeksText;
      });
      attrs.$observe('clearText', function(text) {
        scope.clearText = angular.isDefined(text) ? text : datepickerPopupConfig.clearText;
      });
      attrs.$observe('closeText', function(text) {
        scope.closeText = angular.isDefined(text) ? text : datepickerPopupConfig.closeText;
      });

      var getIsOpen, setIsOpen;
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        originalScope.$watch(getIsOpen, function updateOpen(value) {
          scope.isOpen = !! value;
        });
      }
      scope.isOpen = getIsOpen ? getIsOpen(originalScope) : false; // Initial state

      function setOpen( value ) {
        if (setIsOpen) {
          setIsOpen(originalScope, !!value);
        } else {
          scope.isOpen = !!value;
        }
      }

      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            setOpen(false);
          });
        }
      };

      var elementFocusBind = function() {
        scope.$apply(function() {
          setOpen( true );
        });
      };

      // popup element used to display calendar
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (attrs.datepickerOptions) {
        datepickerEl.attr(angular.extend({}, originalScope.$eval(attrs.datepickerOptions)));
      }

      // TODO: reverse from dateFilter string to Date object
      function parseDate(viewValue) {
        if (!viewValue) {
          ngModel.$setValidity('date', true);
          return null;
        } else if (angular.isDate(viewValue)) {
          ngModel.$setValidity('date', true);
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = new Date(viewValue);
          if (isNaN(date)) {
            ngModel.$setValidity('date', false);
            return undefined;
          } else {
            ngModel.$setValidity('date', true);
            return date;
          }
        } else {
          ngModel.$setValidity('date', false);
          return undefined;
        }
      }
      ngModel.$parsers.unshift(parseDate);

      // Inner change
      scope.dateSelection = function() {
        ngModel.$setViewValue(scope.date);
        ngModel.$render();

        if (closeOnDateSelection) {
          setOpen( false );
        }
      };

      element.bind('input change keyup', function() {
        scope.$apply(function() {
          updateCalendar();
        });
      });

      // Outter change
      ngModel.$render = function() {
        var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
        element.val(date);

        updateCalendar();
      };

      function updateCalendar() {
        scope.date = ngModel.$modelValue;
        updatePosition();
      }

      function addWatchableAttribute(attribute, scopeProperty, datepickerAttribute) {
        if (attribute) {
          originalScope.$watch($parse(attribute), function(value){
            scope[scopeProperty] = value;
          });
          datepickerEl.attr(datepickerAttribute || scopeProperty, scopeProperty);
        }
      }
      addWatchableAttribute(attrs.min, 'min');
      addWatchableAttribute(attrs.max, 'max');
      if (attrs.showWeeks) {
        addWatchableAttribute(attrs.showWeeks, 'showWeeks', 'show-weeks');
      } else {
        scope.showWeeks = datepickerConfig.showWeeks;
        datepickerEl.attr('show-weeks', 'showWeeks');
      }
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', attrs.dateDisabled);
      }

      function updatePosition() {
        scope.position = appendToBody ? $position.offset(element) : $position.position(element);
        scope.position.top = scope.position.top + element.prop('offsetHeight');
      }

      var documentBindingInitialized = false, elementFocusInitialized = false;
      scope.$watch('isOpen', function(value) {
        if (value) {
          updatePosition();
          $document.bind('click', documentClickBind);
          if(elementFocusInitialized) {
            element.unbind('focus', elementFocusBind);
          }
          element[0].focus();
          documentBindingInitialized = true;
        } else {
          if(documentBindingInitialized) {
            $document.unbind('click', documentClickBind);
          }
          element.bind('focus', elementFocusBind);
          elementFocusInitialized = true;
        }

        if ( setIsOpen ) {
          setIsOpen(originalScope, value);
        }
      });

      var $setModelValue = $parse(attrs.ngModel).assign;

      scope.today = function() {
        $setModelValue(originalScope, new Date());
      };
      scope.clear = function() {
        $setModelValue(originalScope, null);
      };

      var $popup = $compile(popupEl)(scope);
      if ( appendToBody ) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };
}])

.directive('datepickerPopupWrap', function() {
  return {
    restrict:'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link:function (scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});

/*
 * dropdownToggle - Provides dropdown menu functionality in place of bootstrap js
 * @restrict class or attribute
 * @example:
   <li class="dropdown">
     <a class="dropdown-toggle">My Dropdown Menu</a>
     <ul class="dropdown-menu">
       <li ng-repeat="choice in dropChoices">
         <a ng-href="{{choice.href}}">{{choice.text}}</a>
       </li>
     </ul>
   </li>
 */

angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', ['$document', '$location', function ($document, $location) {
  var openElement = null,
      closeMenu   = angular.noop;
  return {
    restrict: 'CA',
    link: function(scope, element, attrs) {
      scope.$watch('$location.path', function() { closeMenu(); });
      element.parent().bind('click', function() { closeMenu(); });
      element.bind('click', function (event) {

        var elementWasOpen = (element === openElement);

        event.preventDefault();
        event.stopPropagation();

        if (!!openElement) {
          closeMenu();
        }

        if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
          element.parent().addClass('open');
          openElement = element;
          closeMenu = function (event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }
            $document.unbind('click', closeMenu);
            element.parent().removeClass('open');
            closeMenu = angular.noop;
            openElement = null;
          };
          $document.bind('click', closeMenu);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.modal', [])

/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function () {
    return {
      createNew: function () {
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    };
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('modalBackdrop', ['$modalStack', '$timeout', function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope, element, attrs) {

        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });

        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static') {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }])

  .directive('modalWindow', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@'
      },
      replace: true,
      transclude: true,
      templateUrl: 'template/modal/window.html',
      link: function (scope, element, attrs) {
        scope.windowClass = attrs.windowClass || '';

        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }])

  .factory('$modalStack', ['$document', '$compile', '$rootScope', '$$stackedMap',
    function ($document, $compile, $rootScope, $$stackedMap) {

      var backdropjqLiteEl, backdropDomEl;
      var backdropScope = $rootScope.$new(true);
      var body = $document.find('body').eq(0);
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
        backdropScope.index = newBackdropIndex;
      });

      function removeModalWindow(modalInstance) {

        var modalWindow = openedWindows.get(modalInstance).value;

        //clean up the stack
        openedWindows.remove(modalInstance);

        //remove window DOM element
        modalWindow.modalDomEl.remove();

        //remove backdrop if no longer needed
        if (backdropDomEl && backdropIndex() == -1) {
          backdropDomEl.remove();
          backdropDomEl = undefined;
        }

        //destroy scope
        modalWindow.modalScope.$destroy();
      }

      $document.bind('keydown', function (evt) {
        var modal;

        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            $rootScope.$apply(function () {
              $modalStack.dismiss(modal.key);
            });
          }
        }
      });

      $modalStack.open = function (modalInstance, modal) {

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });

        var angularDomEl = angular.element('<div modal-window></div>');
        angularDomEl.attr('window-class', modal.windowClass);
        angularDomEl.attr('index', openedWindows.length() - 1);
        angularDomEl.html(modal.content);

        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        body.append(modalDomEl);

        if (backdropIndex() >= 0 && !backdropDomEl) {
            backdropjqLiteEl = angular.element('<div modal-backdrop></div>');
            backdropDomEl = $compile(backdropjqLiteEl)(backdropScope);
            body.append(backdropDomEl);
        }
      };

      $modalStack.close = function (modalInstance, result) {
        var modal = openedWindows.get(modalInstance);
        if (modal) {
          modal.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
        }
      };

      $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance).value;
        if (modalWindow) {
          modalWindow.deferred.reject(reason);
          removeModalWindow(modalInstance);
        }
      };

      $modalStack.getTop = function () {
        return openedWindows.top();
      };

      return $modalStack;
    }])

  .provider('$modal', function () {

    var $modalProvider = {
      options: {
        backdrop: true, //can be also false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $http.get(options.templateUrl, {cache: $templateCache}).then(function (result) {
                return result.data;
              });
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              close: function (result) {
                $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }

              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.pagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate', function ($scope, $attrs, $parse, $interpolate) {
  var self = this,
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(defaultItemsPerPage) {
    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = defaultItemsPerPage;
    }
  };

  this.noPrevious = function() {
    return this.page === 1;
  };
  this.noNext = function() {
    return this.page === $scope.totalPages;
  };

  this.isActive = function(page) {
    return this.page === page;
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.getAttributeValue = function(attribute, defaultValue, interpolate) {
    return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
  };

  this.render = function() {
    this.page = parseInt($scope.page, 10) || 1;
    if (this.page > 0 && this.page <= $scope.totalPages) {
      $scope.pages = this.getPages(this.page, $scope.totalPages);
    }
  };

  $scope.selectPage = function(page) {
    if ( ! self.isActive(page) && page > 0 && page <= $scope.totalPages) {
      $scope.page = page;
      $scope.onSelectPage({ page: page });
    }
  };

  $scope.$watch('page', function() {
    self.render();
  });

  $scope.$watch('totalItems', function() {
    $scope.totalPages = self.calculateTotalPages();
  });

  $scope.$watch('totalPages', function(value) {
    setNumPages($scope.$parent, value); // Readonly variable

    if ( self.page > value ) {
      $scope.selectPage(value);
    } else {
      self.render();
    }
  });
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, config) {
  return {
    restrict: 'EA',
    scope: {
      page: '=',
      totalItems: '=',
      onSelectPage:' &'
    },
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, paginationCtrl) {

      // Setup configuration parameters
      var maxSize,
      boundaryLinks  = paginationCtrl.getAttributeValue(attrs.boundaryLinks,  config.boundaryLinks      ),
      directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks     ),
      firstText      = paginationCtrl.getAttributeValue(attrs.firstText,      config.firstText,     true),
      previousText   = paginationCtrl.getAttributeValue(attrs.previousText,   config.previousText,  true),
      nextText       = paginationCtrl.getAttributeValue(attrs.nextText,       config.nextText,      true),
      lastText       = paginationCtrl.getAttributeValue(attrs.lastText,       config.lastText,      true),
      rotate         = paginationCtrl.getAttributeValue(attrs.rotate,         config.rotate);

      paginationCtrl.init(config.itemsPerPage);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive, isDisabled) {
        return {
          number: number,
          text: text,
          active: isActive,
          disabled: isDisabled
        };
      }

      paginationCtrl.getPages = function(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, paginationCtrl.isActive(number), false);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false, false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false, false);
            pages.push(nextPageSet);
          }
        }

        // Add previous & next links
        if (directionLinks) {
          var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
          pages.unshift(previousPage);

          var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
          pages.push(nextPage);
        }

        // Add first & last links
        if (boundaryLinks) {
          var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
          pages.unshift(firstPage);

          var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
          pages.push(lastPage);
        }

        return pages;
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(config) {
  return {
    restrict: 'EA',
    scope: {
      page: '=',
      totalItems: '=',
      onSelectPage:' &'
    },
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, paginationCtrl) {

      // Setup configuration parameters
      var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
      nextText         = paginationCtrl.getAttributeValue(attrs.nextText,     config.nextText,     true),
      align            = paginationCtrl.getAttributeValue(attrs.align,        config.align);

      paginationCtrl.init(config.itemsPerPage);

      // Create page object used in template
      function makePage(number, text, isDisabled, isPrevious, isNext) {
        return {
          number: number,
          text: text,
          disabled: isDisabled,
          previous: ( align && isPrevious ),
          next: ( align && isNext )
        };
      }

      paginationCtrl.getPages = function(currentPage) {
        return [
          makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
          makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
        ];
      };
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider( '$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };

  // The options specified to the provider globally.
  var globalOptions = {};
  
  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function( value ) {
		angular.extend( globalOptions, value );
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers ( triggers ) {
    angular.extend( triggerMap, triggers );
  };

  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name){
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [ '$window', '$compile', '$timeout', '$parse', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $parse, $document, $position, $interpolate ) {
    return function $tooltip ( type, prefix, defaultTriggerShow ) {
      var options = angular.extend( {}, defaultOptions, globalOptions );

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers ( trigger ) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case( type );

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template = 
        '<'+ directiveName +'-popup '+
          'title="'+startSym+'tt_title'+endSym+'" '+
          'content="'+startSym+'tt_content'+endSym+'" '+
          'placement="'+startSym+'tt_placement'+endSym+'" '+
          'animation="tt_animation" '+
          'is-open="tt_isOpen"'+
          '>'+
        '</'+ directiveName +'-popup>';

      return {
        restrict: 'EA',
        scope: true,
        link: function link ( scope, element, attrs ) {
          var tooltip = $compile( template )( scope );
          var transitionTimeout;
          var popupTimeout;
          var $body = $document.find( 'body' );
          var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
          var triggers = getTriggers( undefined );
          var hasRegisteredTriggers = false;
          var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);

          // By default, the tooltip is not open.
          // TODO add ability to start tooltip opened
          scope.tt_isOpen = false;

          function toggleTooltipBind () {
            if ( ! scope.tt_isOpen ) {
              showTooltipBind();
            } else {
              hideTooltipBind();
            }
          }
          
          // Show the tooltip with delay if specified, otherwise show it immediately
          function showTooltipBind() {
            if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
              return;
            }
            if ( scope.tt_popupDelay ) {
              popupTimeout = $timeout( show, scope.tt_popupDelay );
            } else {
              scope.$apply( show );
            }
          }

          function hideTooltipBind () {
            scope.$apply(function () {
              hide();
            });
          }
          
          // Show the tooltip popup element.
          function show() {
            var position,
                ttWidth,
                ttHeight,
                ttPosition;

            // Don't show empty tooltips.
            if ( ! scope.tt_content ) {
              return;
            }

            // If there is a pending remove transition, we must cancel it, lest the
            // tooltip be mysteriously removed.
            if ( transitionTimeout ) {
              $timeout.cancel( transitionTimeout );
            }
            
            // Set the initial positioning.
            tooltip.css({ top: 0, left: 0, display: 'block' });
            
            // Now we add it to the DOM because need some info about it. But it's not 
            // visible yet anyway.
            if ( appendToBody ) {
                $body.append( tooltip );
            } else {
              element.after( tooltip );
            }

            // Get the position of the directive element.
            position = appendToBody ? $position.offset( element ) : $position.position( element );

            // Get the height and width of the tooltip so we can center it.
            ttWidth = tooltip.prop( 'offsetWidth' );
            ttHeight = tooltip.prop( 'offsetHeight' );
            
            // Calculate the tooltip's top and left coordinates to center it with
            // this directive.
            switch ( scope.tt_placement ) {
              case 'right':
                ttPosition = {
                  top: position.top + position.height / 2 - ttHeight / 2,
                  left: position.left + position.width
                };
                break;
              case 'bottom':
                ttPosition = {
                  top: position.top + position.height,
                  left: position.left + position.width / 2 - ttWidth / 2
                };
                break;
              case 'left':
                ttPosition = {
                  top: position.top + position.height / 2 - ttHeight / 2,
                  left: position.left - ttWidth
                };
                break;
              default:
                ttPosition = {
                  top: position.top - ttHeight,
                  left: position.left + position.width / 2 - ttWidth / 2
                };
                break;
            }

            ttPosition.top += 'px';
            ttPosition.left += 'px';

            // Now set the calculated positioning.
            tooltip.css( ttPosition );
              
            // And show the tooltip.
            scope.tt_isOpen = true;
          }
          
          // Hide the tooltip popup element.
          function hide() {
            // First things first: we don't show it anymore.
            scope.tt_isOpen = false;

            //if tooltip is going to be shown after delay, we must cancel this
            $timeout.cancel( popupTimeout );
            
            // And now we remove it from the DOM. However, if we have animation, we 
            // need to wait for it to expire beforehand.
            // FIXME: this is a placeholder for a port of the transitions library.
            if ( scope.tt_animation ) {
              transitionTimeout = $timeout(function () {
                tooltip.remove();
              }, 500);
            } else {
              tooltip.remove();
            }
          }

          /**
           * Observe the relevant attributes.
           */
          attrs.$observe( type, function ( val ) {
            if (val) {
              scope.tt_content = val;
            } else {
              if ( scope.tt_isOpen ) {
                hide();
              }
            }
          });

          attrs.$observe( prefix+'Title', function ( val ) {
            scope.tt_title = val;
          });

          attrs.$observe( prefix+'Placement', function ( val ) {
            scope.tt_placement = angular.isDefined( val ) ? val : options.placement;
          });

          attrs.$observe(prefix + 'Animation', function (val) {
            scope.tt_animation = angular.isDefined(val) ? !!val : options.animation;
          });

          attrs.$observe( prefix+'PopupDelay', function ( val ) {
            var delay = parseInt( val, 10 );
            scope.tt_popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
          });

          attrs.$observe( prefix+'Trigger', function ( val ) {

            if (hasRegisteredTriggers) {
              element.unbind( triggers.show, showTooltipBind );
              element.unbind( triggers.hide, hideTooltipBind );
            }

            triggers = getTriggers( val );

            if ( triggers.show === triggers.hide ) {
              element.bind( triggers.show, toggleTooltipBind );
            } else {
              element.bind( triggers.show, showTooltipBind );
              element.bind( triggers.hide, hideTooltipBind );
            }

            hasRegisteredTriggers = true;
          });

          attrs.$observe( prefix+'AppendToBody', function ( val ) {
            appendToBody = angular.isDefined( val ) ? $parse( val )( scope ) : appendToBody;
          });

          // if a tooltip is attached to <body> we need to remove it on
          // location change as its parent scope will probably not be destroyed
          // by the change.
          if ( appendToBody ) {
            scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
            if ( scope.tt_isOpen ) {
              hide();
            }
          });
          }

          // Make sure tooltip is destroyed and removed.
          scope.$on('$destroy', function onDestroyTooltip() {
            $timeout.cancel( popupTimeout );
            tooltip.remove();
            tooltip.unbind();
            tooltip = null;
            $body = null;
          });
        }
      };
    };
  }];
})

.directive( 'tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})

.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
}])

.directive( 'tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: { content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
})

.directive( 'tooltipHtmlUnsafe', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )
.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})
.directive( 'popover', [ '$compile', '$timeout', '$parse', '$window', '$tooltip', function ( $compile, $timeout, $parse, $window, $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}]);


angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition'])

.constant('progressConfig', {
  animate: true,
  autoType: false,
  stackedTypes: ['success', 'info', 'warning', 'danger']
})

.controller('ProgressBarController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {

    // Whether bar transitions should be animated
    var animate = angular.isDefined($attrs.animate) ? $scope.$eval($attrs.animate) : progressConfig.animate;
    var autoType = angular.isDefined($attrs.autoType) ? $scope.$eval($attrs.autoType) : progressConfig.autoType;
    var stackedTypes = angular.isDefined($attrs.stackedTypes) ? $scope.$eval('[' + $attrs.stackedTypes + ']') : progressConfig.stackedTypes;

    // Create bar object
    this.makeBar = function(newBar, oldBar, index) {
        var newValue = (angular.isObject(newBar)) ? newBar.value : (newBar || 0);
        var oldValue =  (angular.isObject(oldBar)) ? oldBar.value : (oldBar || 0);
        var type = (angular.isObject(newBar) && angular.isDefined(newBar.type)) ? newBar.type : (autoType) ? getStackedType(index || 0) : null;

        return {
            from: oldValue,
            to: newValue,
            type: type,
            animate: animate
        };
    };

    function getStackedType(index) {
        return stackedTypes[index];
    }

    this.addBar = function(bar) {
        $scope.bars.push(bar);
        $scope.totalPercent += bar.to;
    };

    this.clearBars = function() {
        $scope.bars = [];
        $scope.totalPercent = 0;
    };
    this.clearBars();
}])

.directive('progress', function() {
    return {
        restrict: 'EA',
        replace: true,
        controller: 'ProgressBarController',
        scope: {
            value: '=percent',
            onFull: '&',
            onEmpty: '&'
        },
        templateUrl: 'template/progressbar/progress.html',
        link: function(scope, element, attrs, controller) {
            scope.$watch('value', function(newValue, oldValue) {
                controller.clearBars();

                if (angular.isArray(newValue)) {
                    // Stacked progress bar
                    for (var i=0, n=newValue.length; i < n; i++) {
                        controller.addBar(controller.makeBar(newValue[i], oldValue[i], i));
                    }
                } else {
                    // Simple bar
                    controller.addBar(controller.makeBar(newValue, oldValue));
                }
            }, true);

            // Total percent listeners
            scope.$watch('totalPercent', function(value) {
              if (value >= 100) {
                scope.onFull();
              } else if (value <= 0) {
                scope.onEmpty();
              }
            }, true);
        }
    };
})

.directive('progressbar', ['$transition', function($transition) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            width: '=',
            old: '=',
            type: '=',
            animate: '='
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element) {
            scope.$watch('width', function(value) {
                if (scope.animate) {
                    element.css('width', scope.old + '%');
                    $transition(element, {width: value + '%'});
                } else {
                    element.css('width', value + '%');
                }
            });
        }
    };
}]);
angular.module('ui.bootstrap.rating', [])

.constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', '$parse', 'ratingConfig', function($scope, $attrs, $parse, ratingConfig) {

  this.maxRange = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
  this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
  this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

  this.createRateObjects = function(states) {
    var defaultOptions = {
      stateOn: this.stateOn,
      stateOff: this.stateOff
    };

    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
    }
    return states;
  };

  // Get objects used in template
  $scope.range = angular.isDefined($attrs.ratingStates) ?  this.createRateObjects(angular.copy($scope.$parent.$eval($attrs.ratingStates))): this.createRateObjects(new Array(this.maxRange));

  $scope.rate = function(value) {
    if ( $scope.readonly || $scope.value === value) {
      return;
    }

    $scope.value = value;
  };

  $scope.enter = function(value) {
    if ( ! $scope.readonly ) {
      $scope.val = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.val = angular.copy($scope.value);
    $scope.onLeave();
  };

  $scope.$watch('value', function(value) {
    $scope.val = value;
  });

  $scope.readonly = false;
  if ($attrs.readonly) {
    $scope.$parent.$watch($parse($attrs.readonly), function(value) {
      $scope.readonly = !!value;
    });
  }
}])

.directive('rating', function() {
  return {
    restrict: 'EA',
    scope: {
      value: '=',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true
  };
});

/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */

angular.module('ui.bootstrap.tabs', [])

.directive('tabs', function() {
  return function() {
    throw new Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md");
  };
})

.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

  ctrl.select = function(tab) {
    angular.forEach(tabs, function(tab) {
      tab.active = false;
    });
    tab.active = true;
  };

  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    if (tabs.length === 1 || tab.active) {
      ctrl.select(tab);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    //Select a new tab if the tab to be removed is selected
    if (tab.active && tabs.length > 1) {
      //If this is the last tab, select the previous tab. else, the next tab.
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {string=} direction  What direction the tabs should be rendered. Available:
 * 'right', 'left', 'below'.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Vertical Tab 1"><b>First</b> Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    require: '^tabset',
    scope: {},
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    compile: function(elm, attrs, transclude) {
      return function(scope, element, attrs, tabsetCtrl) {
        scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
        scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
        scope.direction = angular.isDefined(attrs.direction) ? scope.$parent.$eval(attrs.direction) : 'top';
        scope.tabsAbove = (scope.direction != 'below');
        tabsetCtrl.$scope = scope;
        tabsetCtrl.$transcludeFn = transclude;
      };
    }
  };
})

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
.directive('tab', ['$parse', function($parse) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      heading: '@',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        var getActive, setActive;
        if (attrs.active) {
          getActive = $parse(attrs.active);
          setActive = getActive.assign;
          scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
            // Avoid re-initializing scope.active as it is already initialized
            // below. (watcher is called async during init with value ===
            // oldVal)
            if (value !== oldVal) {
              scope.active = !!value;
            }
          });
          scope.active = getActive(scope.$parent);
        } else {
          setActive = getActive = angular.noop;
        }

        scope.$watch('active', function(active) {
          // Note this watcher also initializes and assigns scope.active to the
          // attrs.active expression.
          setActive(scope.$parent, active);
          if (active) {
            tabsetCtrl.select(scope);
            scope.onSelect();
          } else {
            scope.onDeselect();
          }
        });

        scope.disabled = false;
        if ( attrs.disabled ) {
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !! value;
          });
        }

        scope.select = function() {
          if ( ! scope.disabled ) {
            scope.active = true;
          }
        };

        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });


        //We need to transclude later, once the content container is ready.
        //when this link happens, we're inside a tab heading.
        scope.$transcludeFn = transclude;
      };
    }
  };
}])

.directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}])

.directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName &&  (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
})

.directive('tabsetTitles', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    templateUrl: 'template/tabs/tabset-titles.html',
    replace: true,
    link: function(scope, elm, attrs, tabsetCtrl) {
      if (!scope.$eval(attrs.tabsetTitles)) {
        elm.remove();
      } else {
        //now that tabs location has been decided, transclude the tab titles in
        tabsetCtrl.$transcludeFn(tabsetCtrl.$scope.$parent, function(node) {
          elm.append(node);
        });
      }
    }
  };
});

angular.module('ui.bootstrap.timepicker', [])

.constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: ['AM', 'PM'],
  readonlyInput: false,
  mousewheel: true
})

.directive('timepicker', ['$parse', '$log', 'timepickerConfig', function ($parse, $log, timepickerConfig) {
  return {
    restrict: 'EA',
    require:'?^ngModel',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ngModel) {
      if ( !ngModel ) {
        return; // do nothing if no ng-model
      }

      var selected = new Date(), meridians = timepickerConfig.meridians;

      var hourStep = timepickerConfig.hourStep;
      if (attrs.hourStep) {
        scope.$parent.$watch($parse(attrs.hourStep), function(value) {
          hourStep = parseInt(value, 10);
        });
      }

      var minuteStep = timepickerConfig.minuteStep;
      if (attrs.minuteStep) {
        scope.$parent.$watch($parse(attrs.minuteStep), function(value) {
          minuteStep = parseInt(value, 10);
        });
      }

      // 12H / 24H mode
      scope.showMeridian = timepickerConfig.showMeridian;
      if (attrs.showMeridian) {
        scope.$parent.$watch($parse(attrs.showMeridian), function(value) {
          scope.showMeridian = !!value;

          if ( ngModel.$error.time ) {
            // Evaluate from template
            var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
            if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
              selected.setHours( hours );
              refresh();
            }
          } else {
            updateTemplate();
          }
        });
      }

      // Get scope.hours in 24H mode if valid
      function getHoursFromTemplate ( ) {
        var hours = parseInt( scope.hours, 10 );
        var valid = ( scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
        if ( !valid ) {
          return undefined;
        }

        if ( scope.showMeridian ) {
          if ( hours === 12 ) {
            hours = 0;
          }
          if ( scope.meridian === meridians[1] ) {
            hours = hours + 12;
          }
        }
        return hours;
      }

      function getMinutesFromTemplate() {
        var minutes = parseInt(scope.minutes, 10);
        return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
      }

      function pad( value ) {
        return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value;
      }

      // Input elements
      var inputs = element.find('input'), hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);

      // Respond on mousewheel spin
      var mousewheel = (angular.isDefined(attrs.mousewheel)) ? scope.$eval(attrs.mousewheel) : timepickerConfig.mousewheel;
      if ( mousewheel ) {

        var isScrollingUp = function(e) {
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          //pick correct delta variable depending on event
          var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
          return (e.detail || delta > 0);
        };

        hoursInputEl.bind('mousewheel wheel', function(e) {
          scope.$apply( (isScrollingUp(e)) ? scope.incrementHours() : scope.decrementHours() );
          e.preventDefault();
        });

        minutesInputEl.bind('mousewheel wheel', function(e) {
          scope.$apply( (isScrollingUp(e)) ? scope.incrementMinutes() : scope.decrementMinutes() );
          e.preventDefault();
        });
      }

      scope.readonlyInput = (angular.isDefined(attrs.readonlyInput)) ? scope.$eval(attrs.readonlyInput) : timepickerConfig.readonlyInput;
      if ( ! scope.readonlyInput ) {

        var invalidate = function(invalidHours, invalidMinutes) {
          ngModel.$setViewValue( null );
          ngModel.$setValidity('time', false);
          if (angular.isDefined(invalidHours)) {
            scope.invalidHours = invalidHours;
          }
          if (angular.isDefined(invalidMinutes)) {
            scope.invalidMinutes = invalidMinutes;
          }
        };

        scope.updateHours = function() {
          var hours = getHoursFromTemplate();

          if ( angular.isDefined(hours) ) {
            selected.setHours( hours );
            refresh( 'h' );
          } else {
            invalidate(true);
          }
        };

        hoursInputEl.bind('blur', function(e) {
          if ( !scope.validHours && scope.hours < 10) {
            scope.$apply( function() {
              scope.hours = pad( scope.hours );
            });
          }
        });

        scope.updateMinutes = function() {
          var minutes = getMinutesFromTemplate();

          if ( angular.isDefined(minutes) ) {
            selected.setMinutes( minutes );
            refresh( 'm' );
          } else {
            invalidate(undefined, true);
          }
        };

        minutesInputEl.bind('blur', function(e) {
          if ( !scope.invalidMinutes && scope.minutes < 10 ) {
            scope.$apply( function() {
              scope.minutes = pad( scope.minutes );
            });
          }
        });
      } else {
        scope.updateHours = angular.noop;
        scope.updateMinutes = angular.noop;
      }

      ngModel.$render = function() {
        var date = ngModel.$modelValue ? new Date( ngModel.$modelValue ) : null;

        if ( isNaN(date) ) {
          ngModel.$setValidity('time', false);
          $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        } else {
          if ( date ) {
            selected = date;
          }
          makeValid();
          updateTemplate();
        }
      };

      // Call internally when we know that model is valid.
      function refresh( keyboardChange ) {
        makeValid();
        ngModel.$setViewValue( new Date(selected) );
        updateTemplate( keyboardChange );
      }

      function makeValid() {
        ngModel.$setValidity('time', true);
        scope.invalidHours = false;
        scope.invalidMinutes = false;
      }

      function updateTemplate( keyboardChange ) {
        var hours = selected.getHours(), minutes = selected.getMinutes();

        if ( scope.showMeridian ) {
          hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
        }
        scope.hours =  keyboardChange === 'h' ? hours : pad(hours);
        scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
        scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
      }

      function addMinutes( minutes ) {
        var dt = new Date( selected.getTime() + minutes * 60000 );
        selected.setHours( dt.getHours(), dt.getMinutes() );
        refresh();
      }

      scope.incrementHours = function() {
        addMinutes( hourStep * 60 );
      };
      scope.decrementHours = function() {
        addMinutes( - hourStep * 60 );
      };
      scope.incrementMinutes = function() {
        addMinutes( minuteStep );
      };
      scope.decrementMinutes = function() {
        addMinutes( - minuteStep );
      };
      scope.toggleMeridian = function() {
        addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
      };
    }
  };
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('typeaheadParser', ['$parse', function ($parse) {

  //                      00000111000000000000022200000000000000003333333333333330000000000044000
  var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;

  return {
    parse:function (input) {

      var match = input.match(TYPEAHEAD_REGEXP), modelMapper, viewMapper, source;
      if (!match) {
        throw new Error(
          "Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_'" +
            " but got '" + input + "'.");
      }

      return {
        itemName:match[3],
        source:$parse(match[4]),
        viewMapper:$parse(match[2] || match[1]),
        modelMapper:$parse(match[1])
      };
    }
  };
}])

  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
    function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

  var HOT_KEYS = [9, 13, 27, 38, 40];

  return {
    require:'ngModel',
    link:function (originalScope, element, attrs, modelCtrl) {

      //SUPPORTED ATTRIBUTES (OPTIONS)

      //minimal no of characters that needs to be entered before typeahead kicks-in
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

      //minimal wait time after last character typed before typehead kicks-in
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

      //should it restrict model values to the ones selected from the popup only?
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

      //binding to a variable that indicates if matches are being retrieved asynchronously
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

      //a callback executed when a match is selected
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

      //INTERNAL VARIABLES

      //model setter executed upon match selection
      var $setModelValue = $parse(attrs.ngModel).assign;

      //expressions used by typeahead
      var parserResult = typeaheadParser.parse(attrs.typeahead);

      var hasFocus;

      //pop-up element used to display matches
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      //custom item template
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }

      //create a child scope for the typeahead directive so we are not polluting original scope
      //with typeahead-specific data (matches, query etc.)
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function(){
        scope.$destroy();
      });

      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
      };

      var getMatchesAsync = function(inputValue) {

        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

          //it might happen that several async queries were in progress if a user were typing fast
          //but we are interested only in responses that correspond to the current view value
          if (inputValue === modelCtrl.$viewValue && hasFocus) {
            if (matches.length > 0) {

              scope.activeIdx = 0;
              scope.matches.length = 0;

              //transform labels
              for(var i=0; i<matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }

              scope.query = inputValue;
              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
              //due to other elements being rendered
              scope.position = $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');

            } else {
              resetMatches();
            }
            isLoadingSetter(originalScope, false);
          }
        }, function(){
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };

      resetMatches();

      //we need to propagate user's query so we can higlight matches
      scope.query = undefined;

      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later 
      var timeoutPromise;

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function (inputValue) {

        hasFocus = true;

        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            if (timeoutPromise) {
              $timeout.cancel(timeoutPromise);//cancel previous timeout
            }
            timeoutPromise = $timeout(function () {
              getMatchesAsync(inputValue);
            }, waitTime);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            // Reset in case user had typed something previously.
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });

      modelCtrl.$formatters.push(function (modelValue) {

        var candidateViewValue, emptyViewValue;
        var locals = {};

        if (inputFormatter) {

          locals['$model'] = modelValue;
          return inputFormatter(originalScope, locals);

        } else {

          //it might happen that we don't have enough info to properly render input value
          //we need to check for this situation and simply return model value if we can't apply custom formatting
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);

          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
        }
      });

      scope.select = function (activeIdx) {
        //called from within the $digest() cycle
        var locals = {};
        var model, item;

        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);

        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });

        resetMatches();

        //return focus to the input element if a mach was selected via a mouse click event
        element[0].focus();
      };

      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
      element.bind('keydown', function (evt) {

        //typeahead is open and an "interesting" key was pressed
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          if (evt.which === 13) {
            evt.preventDefault();
          }
          return;
        }

        evt.preventDefault();

        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();

        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();

        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function () {
            scope.select(scope.activeIdx);
          });

        } else if (evt.which === 27) {
          evt.stopPropagation();

          resetMatches();
          scope.$digest();
        }
      });

      element.bind('blur', function (evt) {
        hasFocus = false;
      });

      // Keep reference to click handler to unbind it.
      var dismissClickHandler = function (evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };

      $document.bind('click', dismissClickHandler);

      originalScope.$on('$destroy', function(){
        $document.unbind('click', dismissClickHandler);
      });

      element.after($compile(popUpEl)(scope));
    }
  };

}])

  .directive('typeaheadPopup', function () {
    return {
      restrict:'EA',
      scope:{
        matches:'=',
        query:'=',
        active:'=',
        position:'=',
        select:'&'
      },
      replace:true,
      templateUrl:'template/typeahead/typeahead-popup.html',
      link:function (scope, element, attrs) {

        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function () {
          return scope.matches.length > 0;
        };

        scope.isActive = function (matchIdx) {
          return scope.active == matchIdx;
        };

        scope.selectActive = function (matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function (activeIdx) {
          scope.select({activeIdx:activeIdx});
        };
      }
    };
  })

  .directive('typeaheadMatch', ['$http', '$templateCache', '$compile', '$parse', function ($http, $templateCache, $compile, $parse) {
    return {
      restrict:'EA',
      scope:{
        index:'=',
        match:'=',
        query:'='
      },
      link:function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
           element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }])

  .filter('typeaheadHighlight', function() {

    function escapeRegexp(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }

    return function(matchItem, query) {
      return query ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
  });
angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"accordion-group\">\n" +
    "  <div class=\"accordion-heading\" ><a class=\"accordion-toggle\" ng-click=\"isOpen = !isOpen\" accordion-transclude=\"heading\">{{heading}}</a></div>\n" +
    "  <div class=\"accordion-body\" collapse=\"!isOpen\">\n" +
    "    <div class=\"accordion-inner\" ng-transclude></div>  </div>\n" +
    "</div>");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"accordion\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class='alert' ng-class='type && \"alert-\" + type'>\n" +
    "    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides().length > 1\">\n" +
    "        <li ng-repeat=\"slide in slides()\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "    </ol>\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a ng-click=\"prev()\" class=\"carousel-control left\" ng-show=\"slides().length > 1\">&lsaquo;</a>\n" +
    "    <a ng-click=\"next()\" class=\"carousel-control right\" ng-show=\"slides().length > 1\">&rsaquo;</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': leaving || (active && !entering),\n" +
    "    'prev': (next || active) && direction=='prev',\n" +
    "    'next': (next || active) && direction=='next',\n" +
    "    'right': direction=='prev',\n" +
    "    'left': direction=='next'\n" +
    "  }\" class=\"item\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html",
    "<table>\n" +
    "  <thead>\n" +
    "    <tr class=\"text-center\">\n" +
    "      <th><button type=\"button\" class=\"btn pull-left\" ng-click=\"move(-1)\"><i class=\"icon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{rows[0].length - 2 + showWeekNumbers}}\"><button type=\"button\" class=\"btn btn-block\" ng-click=\"toggleMode()\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn pull-right\" ng-click=\"move(1)\"><i class=\"icon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr class=\"text-center\" ng-show=\"labels.length > 0\">\n" +
    "      <th ng-show=\"showWeekNumbers\">#</th>\n" +
    "      <th ng-repeat=\"label in labels\">{{label}}</th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows\">\n" +
    "      <td ng-show=\"showWeekNumbers\" class=\"text-center\"><em>{{ getWeekNumber(row) }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row\" class=\"text-center\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn\" ng-class=\"{'btn-info': dt.selected}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\"><span ng-class=\"{muted: dt.secondary}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/popup.html",
    "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
    "	<li ng-transclude></li>\n" +
    "	<li class=\"divider\"></li>\n" +
    "	<li style=\"padding: 9px;\">\n" +
    "		<span class=\"btn-group\">\n" +
    "			<button type=\"button\" class=\"btn btn-small btn-inverse\" ng-click=\"today()\">{{currentText}}</button>\n" +
    "			<button type=\"button\" class=\"btn btn-small btn-info\" ng-click=\"showWeeks = ! showWeeks\" ng-class=\"{active: showWeeks}\">{{toggleWeeksText}}</button>\n" +
    "			<button type=\"button\" class=\"btn btn-small btn-danger\" ng-click=\"clear()\">{{clearText}}</button>\n" +
    "		</span>\n" +
    "		<button type=\"button\" class=\"btn btn-small btn-success pull-right\" ng-click=\"isOpen = false\">{{closeText}}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + index*10}\" ng-click=\"close($event)\"></div>");
}]);

angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div class=\"modal fade {{ windowClass }}\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10}\" ng-transclude></div>");
}]);

angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html",
    "<div class=\"pager\">\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"page in pages\" ng-class=\"{disabled: page.disabled, previous: page.previous, next: page.next}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    "<div class=\"pagination\"><ul>\n" +
    "  <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html",
    "<div class=\"bar\" ng-class='type && \"bar-\" + type'></div>");
}]);

angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progress.html",
    "<div class=\"progress\"><progressbar ng-repeat=\"bar in bars\" width=\"bar.to\" old=\"bar.from\" animate=\"bar.animate\" type=\"bar.type\"></progressbar></div>");
}]);

angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\">\n" +
    "	<i ng-repeat=\"r in range\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" ng-class=\"$index < val && (r.stateOn || 'icon-star') || (r.stateOff || 'icon-star-empty')\"></i>\n" +
    "</span>");
}]);

angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "  <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset-titles.html",
    "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n" +
    "</ul>\n" +
    "");
}]);

angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html",
    "\n" +
    "<div class=\"tabbable\" ng-class=\"{'tabs-right': direction == 'right', 'tabs-left': direction == 'left', 'tabs-below': direction == 'below'}\">\n" +
    "  <div tabset-titles=\"tabsAbove\"></div>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\" \n" +
    "         ng-repeat=\"tab in tabs\" \n" +
    "         ng-class=\"{active: tab.active}\"\n" +
    "         tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div tabset-titles=\"!tabsAbove\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/timepicker/timepicker.html",
    "<table class=\"form-inline\">\n" +
    "	<tr class=\"text-center\">\n" +
    "		<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><i class=\"icon-chevron-up\"></i></a></td>\n" +
    "		<td>&nbsp;</td>\n" +
    "		<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><i class=\"icon-chevron-up\"></i></a></td>\n" +
    "		<td ng-show=\"showMeridian\"></td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<td class=\"control-group\" ng-class=\"{'error': invalidHours}\"><input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"span1 text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\"></td>\n" +
    "		<td>:</td>\n" +
    "		<td class=\"control-group\" ng-class=\"{'error': invalidMinutes}\"><input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"span1 text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\"></td>\n" +
    "		<td ng-show=\"showMeridian\"><button type=\"button\" ng-click=\"toggleMeridian()\" class=\"btn text-center\">{{meridian}}</button></td>\n" +
    "	</tr>\n" +
    "	<tr class=\"text-center\">\n" +
    "		<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><i class=\"icon-chevron-down\"></i></a></td>\n" +
    "		<td>&nbsp;</td>\n" +
    "		<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><i class=\"icon-chevron-down\"></i></a></td>\n" +
    "		<td ng-show=\"showMeridian\"></td>\n" +
    "	</tr>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-match.html",
    "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);

angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-popup.html",
    "<ul class=\"typeahead dropdown-menu\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" +
    "    <li ng-repeat=\"match in matches\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\">\n" +
    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>");
}]);
;var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/modal/backdrop.html",
            "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + index*10}\" ng-click=\"close($event)\"></div>");
    }
]);

angular.module("template/modal/window.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/modal/window.html",
            "<div class=\"modal fade {{ windowClass }} bootstrap-dialog type-primary size-normal\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10}\" ng-transclude></div>");
    }
]);

app.constant('TPL_PATH', 'templates')


app.constant('Parse', Parse);
app.constant('UserEvent', 'UserEvent');
app.constant('MaskEvent', 'MaskEvent');
app.constant('ArticleEvent', 'ArticleEvent');
app.constant('AlertEvent', 'AlertEvent');
app.constant('LangEvent', 'LangEvent');

app.constant('Status', {
    'deleted': 'deleted',
    'new': 'new',
    'wait': 'wait'
});



app.config(function($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/content/category/:categoryId', {
            templateUrl: 'templates/content.html',
            controller: 'ContentCtrl'
        })
        .when('/categories', {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
        })
        .when('/content/category/:cateId/article/:articleId', {
            templateUrl: 'templates/detail.html',
            controller: 'EditCtrl'
        })
        .when('/images', {
            templateUrl: 'templates/images.html',
            controller: 'ImagesCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});

app.directive('ckeditor', function($log) {
    return {
        restrict: 'E',
        // require: '?ngModel',
        scope: {
            content: '='
        },
        link: function(scope, elm, attr) {
            $log.log('attr is ', attr);

            var ck = CKEDITOR.replace(elm[0], {
                height: '350px',
                language: 'zh-tw'
            });
            var contentUnWatcher = scope.$watch('content', function(newContent) {
                $log.log('content changed, ', newContent);
                if (newContent) {
                    ck.setData(newContent);
                    contentUnWatcher();
                }
            })


            ck.on('instanceReady', function() {
                ck.setData(scope.content);
            });

            function updateModel() {
                scope.$apply(function() {
                    scope.content = ck.getData();
                });
            }

            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);

        }
    };
});

app.service('AlertService', function($rootScope, AlertEvent) {
    return {
        alert: function(message) {
            $rootScope.$emit(AlertEvent, message);
        }
    }
});

app.controller('BodyCtrl', function($scope, $rootScope, MaskEvent, AlertEvent, $log, $location, $timeout) {

    $scope.loadingMask = false;
    $scope.alertDismissed = true;
    $scope.alertMsg = '';

    $rootScope.$on(AlertEvent, function(e, message) {
        // $scope.alertDismissed = false;
        // $scope.alertMsg = message;
        // $scope.$apply();
        // $timeout(function() {
        //     $scope.alertDismissed = true;
        //     $scope.$apply();
        // }, 3000)
        $scope.status = message;
    });


});


app.directive('ngConfirmClick', [
    function() {
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function(e) {
                    var message = attrs.ngConfirmClick;
                    if (message && !confirm(message)) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

app.service('LangService', function($rootScope, $route, $log, $location, Parse, Status, LangEvent) {

    var Lang = Parse.Object.extend("Lang");

    $log.log('location search is ', $location.search())
    var currentLangCode = $location.search().lang;
    if (!currentLangCode) {
        currentLangCode = "zh-tw";
    }
    var langs;
    var langMap = {};
    var queryLangs = function(callback) {
        var langQuery = new Parse.Query(Lang);
        langQuery.notEqualTo('status', Status.deleted);
        langQuery.find().then(function(results) {
            callback(results);
        });
    }

    queryLangs(function(results) {
        langs = results;
        $log.log('langs, ', results)
        angular.forEach(langs, function(lang) {
            if (lang.get('code')) {
                langMap[lang.get('code')] = lang;
            }
        });
    });

    return {
        /**
         * Set current langCode if langCode present.
         **/
        currentLangCode: function(langCode) {
            if (langCode && currentLangCode != langCode) {
                currentLangCode = langCode;
                $location.search({
                    lang: langCode
                })

            }
            $log.log('currentLang, ' + currentLangCode)
            return currentLangCode;
        },

        currentLang: function() {
            return langMap[currentLangCode];
        },

        queryAll: function(callback) {
            queryLangs(callback);
        }
    }
})
app.controller('MenuCtrl', function($scope, $log, $location, LangService, Status) {

    $scope.clickArticles = function() {
        var langCode = LangService.currentLangCode();
        $location.url('/content/category/all?lang=' + langCode);
    }

    $scope.clickCategories = function() {
        var langCode = LangService.currentLangCode();
        $location.url('/categories?lang=' + langCode);
    }

    $scope.selectLang = function(lang) {
        $scope.selectedLang = lang;
        LangService.currentLangCode(lang.get('code'));
    }

    LangService.queryAll(function(results) {
        $scope.langs = results;
        var selectedLangCode = LangService.currentLangCode();
        angular.forEach($scope.langs, function(lang) {
            if (lang.get('code') === selectedLangCode) {
                $log.log('select default lang, ', lang)
                $scope.selectedLang = lang;
            }
        })
        $scope.$apply()
    });

    $scope.isMenuSelected = function(menu) {
        var currentPath = $location.path();
        return currentPath.indexOf(menu) != -1;
    };
})
app.controller('NavCtrl', function($scope, $rootScope, $log, $location, Parse, UserEvent) {
    $log.log('nav ctrl')
    $scope.currentUser = Parse.User.current();
    $log.log($scope.currentUser);
    $rootScope.$on(UserEvent, function(e, user) {
        $scope.currentUser = user;
    })

    $scope.logout = function() {
        Parse.User.logOut();
        $scope.currentUser = null;
        $location.path('/login')
    };
});;app.service('OrderService', function() {
    return {
        moveup: function(collection, item) {
            var idx = _.indexOf(collection, item);
            if (idx == 0) {
                return;
            }
            var preItem = collection[idx - 1];
            var currOrder = item.get('order');
            item.set('order', preItem.get('order'))
            preItem.set('order', currOrder)

            collection[idx - 1] = item;
            collection[idx] = preItem;
            item.save();
            preItem.save();
        },

        movedown: function(collection, item) {
            var idx = _.indexOf(collection, item);
            if (idx == collection.length - 1) {
                return;
            }

            var nextItem = collection[idx + 1];
            var currOrder = item.get('order');
            item.set('order', nextItem.get('order'));
            nextItem.set('order', currOrder);
            collection[idx + 1] = item;
            collection[idx] = nextItem;

            item.save();
            nextItem.save();
        }
    }
});

app.service('CategoryService', function(Parse, Status, AlertService, $log) {
    var Category = Parse.Object.extend("Category");
    var Lang = Parse.Object.extend("Lang");
    var cachedResult;



    return {
        queryByLangCode: function(langCode, callback, useCache) {
            if (useCache && cachedResult) {
                callback(cachedResult);
            } else {
                var cateQuery = new Parse.Query(Category);
                var langQuery = new Parse.Query(Lang);
                langQuery.equalTo('code', langCode);

                cateQuery.notEqualTo('status', Status.deleted);
                cateQuery.include('lang');
                cateQuery.ascending("order");
                cateQuery.matchesQuery('lang', langQuery);
                AlertService.alert("正在查询");
                cateQuery.find().then(function(results) {
                    $log.log('categories ', results)
                    AlertService.alert("查询完毕");
                    callback(results);
                });
            };
        },

        new: function() {
            return new Category();
        }
    }

});

app.controller('CategoryCtrl', function($scope, $rootScope, $location, $log, Parse, Status, AlertService, CategoryService, OrderService, LangService, LangEvent) {
    $log.log('CategoryCtrl')

    var langCode = $location.search().lang;

    $rootScope.$on(LangEvent, function(e, llangCode) {
        langCode = llangCode;
        $scope.query();
    });

    var query = $scope.query = function() {
        CategoryService.queryByLangCode(langCode, function(categories) {
            $scope.categories = categories;
            $scope.$apply();
        })

    };
    $scope.query();

    $scope.moveup = function(item) {
        OrderService.moveup($scope.categories, item);
    }

    $scope.movedown = function(item) {
        OrderService.movedown($scope.categories, item);
    }

    $scope.delete = function(item) {

        item.set('status', Status.deleted);
        item.save({
            'status': Status.deleted
        }).then(function() {
            query();
        });
    }
    var currentUser = Parse.User.current();
    $log.log('current user is ', currentUser);
    if (!currentUser) {
        alert("用户不合法，请重新登录");
        return;
    }
    $scope.submit = function(item) {
        $log.log('save category');
        $log.log('current lang, ', LangService.currentLang());
        AlertService.alert("正在保存");
        var attrs = $scope.selectedItem.attributes;
        if (!$scope.selectedItem.id) {
            $scope.selectedItem = CategoryService.new();
        }
        $scope.selectedItem.save({
            'name': attrs.name,
            'lang': LangService.currentLang(),
            'status': Status.new,
            'updatedBy': currentUser
        }).then(function() {
            $log.log('saved success');
            AlertService.alert("保存完毕");
            $scope.query();
            $scope.$apply();
        });
    };
});;app.service('PushService', function(Parse, AlertService, LangService) {
    return {
        push: function(item) {
            Parse.Push.send({
                channels: [LangService.currentLangCode()],
                data: {
                    alert: item.get('title') + '\n' + item.get('intro'),
                    badge: "Increment",
                    title: item.get('title'),
                    sound: 'default',
                    oid: item.id,
                    cid: item.get('category').id
                }
            }, {
                success: function() {
                    AlertService.alert('推送' + item.get('title') + '成功');
                },
                error: function(error) {
                    alert('推送失败', error.message);
                }
            });


        }

    }
});

app.service('ArticleService', function(Parse, Status, AlertService, LangService, $log) {
    var Article = Parse.Object.extend("Article");

    return {
        new: function() {
            return new Article();
        },
        queryByCategory: function(category, callback) {
            var query = new Parse.Query(Article);
            query.ascending("order");
            if (category !== 'all') {
                query.equalTo('category', category);
            }
            query.equalTo('lang', LangService.currentLang());
            query.notEqualTo('status', Status.deleted);
            query.include(['category', 'image', 'lang']);

            AlertService.alert("正在查询");
            query.find().then(function(results) {
                AlertService.alert("查询完毕");
                $log.log('articles', results);
                callback(results);
            });
        },
        queryById: function(id, callback) {
            var query = new Parse.Query(Article);
            query.notEqualTo('status', Status.deleted);
            query.include(['category', 'image', 'lang']);
            AlertService.alert("正在查询");
            query.get(id).then(function(results) {
                AlertService.alert("查询完毕");
                $log.log('articles', results);
                callback(results);
            });
        }
    }
});

app.controller('ContentCtrl', function($scope, $rootScope, $routeParams, $log, $location, Status, CategoryService, ArticleService, AlertService, OrderService, ArticleEvent, PushService) {

    $scope.currentLang = $location.search().lang;
    $scope.activeCategoryId = $routeParams.categoryId;


    $scope.activeCategory = {};
    $log.log('ContentCtrl, ', $scope.activeCategory);


    CategoryService.queryByLangCode($scope.currentLang, function(results) {
        $scope.categories = results;

        if ($scope.activeCategoryId == 'all') {
            $scope.activeCategory = results[0];
            if ($scope.activeCategory) {
                $scope.changeCate($scope.activeCategory);
            }
        } else {
            $scope.activeCategory = _.findWhere(results, {
                id: $scope.activeCategoryId
            })
            if ($scope.activeCategory) {
                refreshArticles($scope.activeCategory);
            }

        }

        $scope.$apply();
    })

    $scope.changeCate = function(category) {
        $location.url('/content/category/' + category.id + '?lang=' + $scope.currentLang);
    }

    var refreshArticles = function(category) {

        ArticleService.queryByCategory(category, function(results) {
            $log.log('category ', category.id, ' : ', results)
            $scope.articles = results;
            $scope.$apply();
        });
    };

    $scope.moveup = function(item) {
        OrderService.moveup($scope.articles, item);
    }

    $scope.movedown = function(item) {
        OrderService.movedown($scope.articles, item);
    }

    $scope.new = function() {
        $location.url("/content/category/" + $scope.activeCategoryId + "/article/new?lang=" + $scope.currentLang);
    };

    $scope.edit = function(item) {
        $location.url("/content/category/" + $scope.activeCategoryId + "/article/" + item.id + "?lang=" + $scope.currentLang);

    };

    $scope.delete = function(item) {
        $log.log('Delete ', item.get('title'));
        item.set('status', Status.deleted);
        item.save({
            'status': Status.deleted
        }).then(function() {
            refreshArticles($scope.activeCategory);
        });
    };

    $scope.push = function(item) {
        $log.log('Push ', item.get('title'));
        PushService.push(item);
    };
});;app.service('ImagesService', function(Parse, $log, AlertService) {
    var Images = Parse.Object.extend("Images");
    return {

        queryAll: function(callback) {
            var query = new Parse.Query(Images);
            query.descending("updatedAt");
            query.find().then(function(results) {

                $log.log('images', results);
                callback(results);
            });
        },

        upload: function(files, callback) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var imgFile = new Parse.File(file.name, file);

                (function(file, image) {
                    //create a separate scope to save imgFile.
                    AlertService.alert('正在保存.');
                    image.save().then(function() {

                        var imageRec = new Images();
                        imageRec.save({
                            name: file.name,
                            image: image
                        }).then(function() {

                            if (i == files.length) {
                                AlertService.alert('保存完毕.');
                                callback();
                            }
                        })

                    });
                })(file, imgFile);
            }

        }
    }
})
app.controller('ImagesCtrl', function($scope, $log, $window, ImagesService) {
    $log.log('images ctrl');
    $scope.uploadBtnLabel = "Upload";
    $scope.uploadEl = null;
    $scope.queryAll = function() {
        ImagesService.queryAll(function(results) {
            $log.log('query images success')
            $scope.images = results;
            $scope.$apply();
        })
    }
    $scope.queryAll();


    $scope.upload = function() {
        var uploadingFiles = [];
        for (var i = 0; i < $scope.uploadEl.files.length; i++) {
            var file = $scope.uploadEl.files[i];
            $log.log(file);
            uploadingFiles.push(file);
        }
        $log.log('uploading');
        $scope.uploadBtnLabel = "Uploading";
        if (uploadingFiles.length < 1) {
            $window.alert("No Image selected.");
            return;
        }
        ImagesService.upload(uploadingFiles, function() {

            $scope.uploadBtnLabel = "Upload";
            $scope.queryAll();
            $scope.$apply();
        });
    }
    $scope.remove = function(item) {
        item.destroy(function() {
            $scope.queryAll();
        })
    }
    $scope.fileChanged = function(fileRef) {
        $scope.uploadEl = fileRef

    }
});app.controller('EditCtrl', function($scope, $rootScope, $routeParams, $location, $log, $modal, ImagesService, CategoryService, ArticleService, AlertService, LangService, Parse, Status, ArticleEvent) {
    $scope.activeDetailItem = {};
    //TODO set a better default image.
    var defaultImageUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    $scope.currentImageUrl = defaultImageUrl;

    var activeCategoryId = $routeParams.cateId;
    var articleId = $routeParams.articleId;
    var langCode = $location.search().lang;

    $scope.saveBtnText = "保存";

    $log.log('view detail, ', articleId);

    CategoryService.queryByLangCode(langCode, function(categories) {
        $scope.categories = categories;
        $log.log(categories);
        if (activeCategoryId) {
            $scope.activeCategory = _.findWhere(categories, {
                'id': activeCategoryId
            })
        }

        $scope.$apply();


        if (articleId === 'new') {
            $scope.activeDetailItem = ArticleService.new();
        } else {
            //TODO, there're good chance to use promise here.
            ArticleService.queryById(articleId, function(item) {
                $scope.activeDetailItem = item;
                var category = item.get('category');
                if (category) {
                    //to make active category identical to the selected category
                    $scope.activeCategory = _.findWhere(categories, {
                        'id': category.id
                    });
                    $log.log('active cateogry ', $scope.activeCategory);
                }
                $scope.currentImage = item.get('image');

                $log.log('current image ', $scope.currentImage)
                if ($scope.currentImage) {
                    var image = $scope.currentImage.get('image');
                    $log.log(image)
                    if (image) {
                        $scope.currentImageUrl = image.url();
                    }
                }

                $scope.$apply();
            });
        }

    }, true);

    var currentUser = Parse.User.current();
    $log.log('current user is ', currentUser);
    if (!currentUser) {
        alert("用户不合法，请重新登录");
        return;
    }
    $scope.save = function() {
        $log.log('save');
        // $scope.activeDetailItem.set('image', $scope.currentImage);
        AlertService.alert("正在保存");
        var attrs = $scope.activeDetailItem.attributes;
        $scope.saveBtnText = "正在保存...";
        $scope.activeDetailItem.save({
            'title': attrs.title,
            'content': attrs.content,
            'intro': attrs.intro,
            'image': $scope.currentImage,
            'url': attrs.url,
            'sticky': attrs.sticky,
            'category': $scope.activeCategory,
            'status': Status.new,
            'lang': LangService.currentLang(),
            'updatedBy': currentUser
        }).then(function() {
            $log.log('saved success');
            AlertService.alert('保存完毕.');
            $scope.saveBtnText = "保存";

            //dismiss the popup.

            $scope.$apply();

        });
    };

    $scope.closeme = function() {
        $log.log('close');
        var activeCateId = $scope.activeCategory.id;
        if (activeCateId) {
            $location.url('/content/category/' + activeCateId + '?lang=' + langCode);
        }

    };

    ImagesService.queryAll(function(results) {
        $scope.images = results;
        $scope.$apply();
    });

    $scope.openImagesModal = function() {

        var modalInstance = $modal.open({
            templateUrl: 'templates/images-modal.html',
            controller: ImagesModalInstanceCtrl,
            resolve: {
                items: function() {
                    return $scope.images;
                },
                selectedItem: function() {
                    return $scope.currentImage
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.currentImage = selectedItem;
            $scope.currentImageUrl = selectedItem.get('image').url();
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

});


var ImagesModalInstanceCtrl = function($scope, $modalInstance, $log, items, selectedItem, $window) {
    $scope.selectedItem = selectedItem;
    $log.log('In images modal, selected image is ', $scope.selectedItem)
    if (!$scope.selectedItem) {
        $scope.selectedItem = {};
    }
    $scope.items = items;
    $log.log(items)
    $scope.select = function(item) {
        $scope.selectedItem = item;
    }
    $scope.ok = function() {
        if (!$scope.selectedItem) {
            $window.alert("Please select an item.");
            return;
        }
        $modalInstance.close($scope.selectedItem);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};;app.controller('LoginCtrl', function($scope, $rootScope, $location, $log, Parse, UserEvent, LangService, $window) {
    $scope.currentUser = Parse.User.current();
    $scope.newUser = {};
    $log.log('currentUser, ', $scope.currentUser)
    if ($scope.currentUser) {
        $log.log('currentLang ', LangService.currentLangCode());
        $location.url('/content/category/all?lang=' + LangService.currentLangCode());
    }

    $scope.register = function() {
        if ($scope.newUser.password != $scope.newUser.passwordRepeat) {
            $window.alert("密码不一致");
        }
        var user = new Parse.User();
        user.set("username", $scope.newUser.name);
        user.set("password", $scope.newUser.password);
        user.set("email", $scope.newUser.email);

        user.signUp(null, {
            'success': function() {
                $window.alert("注册成功, 请注意查收确认邮件。");
            },
            'error': function(error) {
                $window.alert("无法注册 " + error.message);
            }
        });
    }

    $scope.reset = function() {
        Parse.User.requestPasswordReset($scope.resetEmail, {
            success: function() {
                $window.alert("已申请重设密码，请查收邮件。");
            },
            error: function(e) {

                $window.alert("出错: " + e.code + " " + e.message);
            }
        });
    }

    $scope.login = function() {

        Parse.User.logIn($scope.username, $scope.password, {
            success: function(user) {
                if (!user.get('emailVerified')) {
                    $window.alert("请通过邮件验证");
                    user.set('email', user.get('email'));
                    user.save();

                    return;
                }
                //NOT in angular land, you must call $apply() to invode digest;
                $log.log('login success');

                $scope.currentUser = user;
                $rootScope.$emit(UserEvent, user);
                $log.log('location path change');
                $location.path('/content');
                $scope.$apply();
            },
            error: function(e) {
                $log.log(e)
                $window.alert("无法登陆");
            }
        });
    };
});