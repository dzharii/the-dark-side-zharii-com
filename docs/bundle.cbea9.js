!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,a=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&a.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1,4:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-fanart",3:"route-home",4:"route-notfound"}[t]||t)+".chunk."+{2:"8d287",3:"5d32a",4:"5fff2"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var c=(s=l[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===i||c===u))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){var s;if((c=(s=f[a]).getAttribute("data-href"))===i||c===u)return e()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css";_.onerror=_.onload=function(n){if(_.onerror=_.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,a=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=l,delete o[t],_.parentNode.removeChild(_),r(a)}},_.href=u,document.head.appendChild(_)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(t){return n.p+""+({2:"route-fanart",3:"route-home",4:"route-notfound"}[t]||t)+".chunk."+{2:"53802",3:"85676",4:"8d3c1"}[t]+".js"}(t);var c=new Error;l=function(e){a.onerror=a.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:a})}),12e4);a.onerror=a.onload=l,document.head.appendChild(a)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=l;n(n.s="mdyV")}({Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var f=a[c].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),_=0;_<s;_++)if(e[_]&&":"===e[_].charAt(0)){var p=e[_].replace(/(^:|[+*?]+$)/g,""),h=(e[_].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[_]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||v){u[p]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(a).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return _(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(_(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return c})),n.d(e,"route",(function(){return f})),n.d(e,"Router",(function(){return O})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||c()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),w=function(t){return Object(v.createElement)("a",r({onClick:p},t))},x=function(t){return Object(v.createElement)(t.component,t)};O.subscribers=b,O.getCurrentUrl=c,O.route=f,O.Router=O,O.Route=x,O.Link=w,O.exec=o,e.default=O},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++R:o};return null!=M.vnode&&M.vnode(i),i}function l(){return{current:null}}function a(t){return t.children}function c(t,e){this.props=t,this.context=e}function f(t,e){if(null==e)return t.__?f(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?f(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function _(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||W!==M.debounceRendering)&&((W=M.debounceRendering)||N)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?f(i):u,i.__h),O(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,l,c,s,_){var p,h,v,m,g,b,k,O=r&&r.__k||H,w=O.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(a,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(h=0;h<w;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}C(t,m,v=v||F,o,i,l,c,s,_),g=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=s=d(m,s,t):s=y(t,m,v,O,g,s),_||"option"!==n.type?"function"==typeof n.type&&(n.__d=s):t.value=""):s&&v.__e==s&&s.parentNode!=t&&(s=f(v))}for(n.__e=b,p=w;p--;)null!=O[p]&&("function"==typeof n.type&&null!=O[p].__e&&O[p].__e==n.__d&&(n.__d=f(r,p+1)),j(O[p],O[p]));if(k)for(p=0;p<k.length;p++)x(k[p],k[++p],k[++p])}function d(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?d(o,e,n):y(n,o,o,t.__k,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,a;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||K.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](M.event?M.event(t):t)}function k(t){this.l[t.type+!0](M.event?M.event(t):t)}function C(t,e,n,o,i,u,l,f,s){var _,p,d,v,y,m,g,b,k,C,O,x=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,f=e.__e=n.__e,e.__h=null,u=[f]),(_=M.__b)&&_(e);try{t:if("function"==typeof x){if(b=e.props,k=(_=x.contextType)&&o[_.__c],C=_?k?k.props.value:_.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in x&&x.prototype.render?e.__c=p=new x(b,C):(e.__c=p=new c(b,C),p.constructor=x,p.render=A),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=x.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,x.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,d)null==x.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=b,p.state=p.__s,(_=M.__r)&&_(e),p.__d=!1,p.__v=e,p.__P=t,_=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),O=null!=_&&_.type===a&&null==_.key?_.props.children:_,h(t,Array.isArray(O)?O:[O],e,n,o,i,u,l,f,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=w(n.__e,e,n,o,i,u,l,s);(_=M.diffed)&&_(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=f,e.__h=!!s,u[u.indexOf(f)]=null),M.__e(t,e,n)}}function O(t,e){M.__c&&M.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){M.__e(t,e.__v)}}))}function w(t,e,n,r,i,u,l,a){var c,s,_,p=n.props,d=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((c=u[y])&&(c===t||(v?c.localName==v:3==c.nodeType))){t=c,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,a=!1}if(null===v)p===d||a&&t.data===d||(t.data=d);else{if(u=u&&E.call(t.childNodes),s=(p=n.props||F).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!a){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(_||s)&&(_&&(s&&_.__html==s.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,d,p,i,a),_)e.__k=[];else if(y=e.props.children,h(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&f(n,0),a),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);a||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y)&&g(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function x(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){M.__e(t,n)}}function j(t,e,n){var r,i;if(M.unmount&&M.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||x(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){M.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function A(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,u;M.__&&M.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(a,null,[t]),o||F,F,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?E.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function P(t,e){S(t,e,P)}function L(t,e,n){var o,i,l,a=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:a[l]=e[l];return arguments.length>2&&(a.children=arguments.length>3?E.call(arguments,2):n),u(t.type,a,o||t.key,i||t.ref,null)}function U(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(_)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return P})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return a})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return T})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return L})),n.d(e,"createContext",(function(){return U})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return M}));var E,M,R,T,D,N,W,I,F={},H=[],K=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;E=H.slice,M={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},R=0,T=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},c.prototype.render=a,D=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},a=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof l(n("qVkA"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("qVkA")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var f={preRenderData:e},s=e.url?a(e.url):"",_=u&&s===a(location.pathname);c=(_?u:i)(o(t,{CLI_DATA:f}),document.body,c)}()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),l=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=l,l.Link=a},qVkA:function(t,e,n){"use strict";function r(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var o=n.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(t);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],a=l&&l.__e||r(l,!0);if(a)return a}}return e?void 0:r(n)}}function o(t){function e(){var e=this;l.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(l.h)(n,t);var o=r(e.__v),i=o&&o.nextSibling||(e.__P||e._parentDom).firstChild;return i&&Object(l.h)(i.localName,{dangerouslySetInnerHTML:c})}}var n;return e.preload=t,(e.prototype=new l.Component).constructor=e,e}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e);var l=n("hosL"),a=n("Y3FI"),c={},f=o((function(t){n.e(3).then(function(){var e=n("FDtd");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),s=o((function(t){n.e(2).then(function(){var e=n("dLM/");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),_=o((function(t){n.e(4).then(function(){var e=n("3LGf");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),p=n("ox/y"),h="header__3ax1h",d="active__2XB2z",v=function(){return Object(l.h)("header",{class:h},Object(l.h)("h1",null,"Welcome to the Dark Side!"),Object(l.h)("nav",null,Object(l.h)(p.Link,{activeClassName:d,href:"/"},"Home"),Object(l.h)(p.Link,{activeClassName:d,href:"/fanart"},"Fan Comics and Movies"),Object(l.h)(p.Link,{activeClassName:d,href:"/fanart/about"},"About")))},y="space__3WmKC",m=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).canvasRef=Object(l.createRef)(),e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,u(n,r);var o,a,c,f=e.prototype;return f.componentDidMount=function(){function t(){for(r=e.canvas.width/2,o=e.canvas.height/2,f=[],u=0;u<l;u++)i={x:1920*Math.random(),y:1080*Math.random(),z:1920*Math.random(),o:"0."+Math.floor(99*Math.random())+1},f.push(i)}var e=this,n=this.canvas.getContext("2d");if(!n)throw new Error('Unable to obtain context: canvas.getContext("2d")');var r,o,i,u,l=1900,a="0."+Math.floor(9*Math.random())+1,c=2*this.canvas.width,f=[];t(),function s(){window.requestAnimationFrame(s),function(){for(u=0;u<l;u++)(i=f[u]).z--,i.z<=0&&(i.z=1920)}(),function(){var s,_,p;e.canvas.width==window.innerWidth&&e.canvas.width==window.innerWidth||(e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,t());for(n.fillStyle="rgba(0,0,0,1)",n.fillRect(0,0,e.canvas.width,e.canvas.height),n.fillStyle="rgba(0, 0, 0, "+a+")",u=0;u<l;u++)s=c/(i=f[u]).z*(i.x-r),_=c/i.z*(i.y-o),n.fillRect(s+=r,_+=o,p=c/i.z*1,p),n.fillStyle="rgba(255, 255, 255, "+i.o+")"}()}()},f.render=function(){return Object(l.h)("canvas",{id:"space",class:y,ref:this.canvasRef})},o=e,(a=[{key:"canvas",get:function(){if(!this.canvasRef.current)throw new Error("Cannot find canvas element #space");return this.canvasRef.current}}])&&i(o.prototype,a),c&&i(o,c),e}(l.Component);e.default=function(){return Object(l.h)("div",{id:"preact_root"},Object(l.h)(v,null),Object(l.h)(m,null),Object(l.h)("div",{style:{position:"absolute"}},Object(l.h)(a.Router,null,Object(l.h)(a.Route,{path:"/",component:f}),Object(l.h)(a.Route,{path:"/fanart/",component:s,user:"me"}),Object(l.h)(a.Route,{path:"/fanart/:user",component:s}),Object(l.h)(_,{default:!0}))))}}});
//# sourceMappingURL=bundle.cbea9.js.map