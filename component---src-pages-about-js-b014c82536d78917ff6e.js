(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+NU8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},i=function(e){return o(e,"overflow")+o(e,"overflow-y")+o(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(i(t)))return t;t=t.parentNode}return window}},"5Xvu":function(e,t,n){e.exports=n.p+"static/resume-cae1e089aa0373cfca83fca7353f86f1.pdf"},"7UuI":function(e,t,n){},"8ycl":function(e,t,n){},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),d=Object.prototype.toString,f=Math.max,s=Math.min,p=function(){return c.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,i,a,r,l,u,c=0,d=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,a=i;return o=i=void 0,c=t,r=e.apply(a,n)}function w(e){return c=e,l=setTimeout(x,t),d?g(e):r}function v(e){var n=e-u;return void 0===u||n>=t||n<0||y&&e-c>=a}function x(){var e=p();if(v(e))return E(e);l=setTimeout(x,function(e){var n=t-(e-u);return y?s(n,a-(e-c)):n}(e))}function E(e){return l=void 0,b&&o?g(e):(o=i=void 0,r)}function _(){var e=p(),n=v(e);if(o=arguments,i=this,u=e,n){if(void 0===l)return w(u);if(y)return l=setTimeout(x,t),g(u)}return void 0===l&&(l=setTimeout(x,t)),r}return t=h(t)||0,m(n)&&(d=!!n.leading,a=(y="maxWait"in n)?f(h(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=i=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}}).call(this,n("yLpj"))},AJuI:function(e,t,n){e.exports=n.p+"static/real2-d48640ccacedc2b9f94e88d82111afdd.png"},HVci:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}},JeI0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),a=p(i),r=p(n("17x9")),l=n("i8i4"),u=n("UxbX"),c=p(n("9/5/")),d=p(n("hKI/")),f=p(n("+NU8")),s=p(n("pxCl"));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,c.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,d.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,u.add)(window,"resize",this.lazyLoadHandler),(0,u.add)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.add)(window,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,f.default)((0,l.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,o=e.offsetHorizontal,i=e.offsetTop,a=e.offsetBottom,r=e.offsetLeft,l=e.offsetRight,u=e.threshold||t,c=n||u,d=o||u;return{top:i||c,bottom:a||c,left:r||d,right:l||d}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,l.findDOMNode)(this),n=this.getEventNode();if((0,s.default)(t,n,e)){var o=this.props.onContentVisible;this.setState({visible:!0},(function(){o&&o()})),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,u.remove)(window,"resize",this.lazyLoadHandler),(0,u.remove)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,u.remove)(window,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.height,r=e.width,l=this.state.visible,u={height:o,width:r},c="LazyLoad"+(l?" is-visible":"")+(n?" "+n:"");return a.default.createElement(this.props.elementType,{className:c,style:u},l&&i.Children.only(t))}}]),t}(i.Component);t.default=m,m.propTypes={children:r.default.node.isRequired,className:r.default.string,debounce:r.default.bool,elementType:r.default.string,height:r.default.oneOfType([r.default.string,r.default.number]),offset:r.default.number,offsetBottom:r.default.number,offsetHorizontal:r.default.number,offsetLeft:r.default.number,offsetRight:r.default.number,offsetTop:r.default.number,offsetVertical:r.default.number,threshold:r.default.number,throttle:r.default.number,width:r.default.oneOfType([r.default.string,r.default.number]),onContentVisible:r.default.func},m.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},"L+y5":function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD"),r=a.b.nav.withConfig({displayName:"NavStyle__StyledNavContainer",componentId:"cug395-0"})(["padding-bottom:20px;height:fit-content;position:relative;width:100%;bottom:0;background:none;display:flex;justify-content:center;align-items:center;@media screen and (max-width:850px){}"]),l=a.b.ul.withConfig({displayName:"NavStyle__StyledNavList",componentId:"cug395-1"})(["display:flex;width:80%;max-width:1100px;> a:first-of-type{margin-left:0;}> a:last-of-type{margin-right:0;}@media screen and (max-width:850px){flex-wrap:wrap;box-sizing:border-box;width:352px;> a:nth-of-type(2){margin:10px 0;}}@media screen and (max-width:500px){width:260px;}@media screen and (max-width:300px){width:231px;}> a{margin:0 auto;text-decoration:none;z-index:100;@media screen and (max-width:850px){flex:1 1 100%;justify-content:center;}}@media screen and (orientation:landscape){flex-wrap:nowrap;width:80%;> a:nth-of-type(2){margin-top:0;margin-bottom:0;}}"]),u=a.b.li.withConfig({displayName:"NavStyle__StyledNavItem",componentId:"cug395-2"})(['display:flex;justify-content:center;align-items:center;width:150px;height:50px;z-index:100;margin:0 auto;color:white;cursor:pointer;border-radius:3px;border:2px solid #dff959;font-size:25px;font-family:"Montserrat";outline:none;box-shadow:none;'," @media screen and (max-width:850px){width:100%;}@media (pointer:fine){&:hover{background-color:#dff959;color:black;}}@media screen and (orientation:landscape){flex-wrap:nowrap;width:150px;}"],(function(e){return!0===e.selected&&Object(a.a)(["background-color:#dff959;color:black;"])})),c=n("Wbzz"),d=n("5Xvu"),f=n.n(d);t.a=function(){return i.a.createElement(r,null,i.a.createElement(l,null,i.a.createElement(c.Link,{to:"/About"},i.a.createElement(u,{selected:!("undefined"==typeof window||!window.location.pathname.includes("/About")),highlight:!0},"About")),i.a.createElement(c.Link,{to:"/Portfolio"},i.a.createElement(u,{selected:!("undefined"==typeof window||!window.location.pathname.includes("/Portfolio")),highlight:!0},"Portfolio")),i.a.createElement("a",{href:f.a,target:"_blank"},i.a.createElement(u,{clicked:!1,highlight:!1},"Resume"))))}},UxbX:function(e,t,n){var o,i;void 0===(i="function"==typeof(o=function(){function e(e,t){return function(n,o,i,a){n[e]?n[e](o,i,a):n[t]&&n[t]("on"+o,i)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?o.call(t,n,t,e):o)||(e.exports=i)},"dF/s":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=(n("uSmJ"),n("AJuI")),r=n.n(a),l=n("vOnD"),u=n("JeI0"),c=n.n(u),d=l.b.div.withConfig({displayName:"AboutStyle__SectionContainer",componentId:"sc-1uaxeyy-0"})(['display:flex;padding:20px 20px 40px 20px;font-family:"Montserrat";max-width:100%;box-sizing:border-box;@media screen and (max-width:860px){flex-wrap:wrap;padding-bottom:0;padding-top:40px;};@media screen and (max-width:400px){padding-left:10px;padding-right:10px;};']),f=l.b.div.withConfig({displayName:"AboutStyle__AboutContainer",componentId:"sc-1uaxeyy-1"})(["flex:0 1 50%;@media screen and (max-width:860px){flex:1 1 100%;}"]),s=l.b.div.withConfig({displayName:"AboutStyle__AboutCopyContainer",componentId:"sc-1uaxeyy-2"})(["padding-top:40px;width:80%;max-width:1350px;margin:0 auto;"]),p=l.b.span.withConfig({displayName:"AboutStyle__AboutCopy",componentId:"sc-1uaxeyy-3"})(["color:white;font-size:25px;line-height:40px;> p:first-of-type{padding-bottom:20px;}"]),m=Object(l.b)(c.a).withConfig({displayName:"AboutStyle__StyledLazyLoad",componentId:"sc-1uaxeyy-4"})(["height:178px;width:200px;filter:blur(5px);-webkit-filter:blur(5px);margin-right:15px;> img{border-radius:5px;}",""],(function(e){return e.isVisible&&Object(l.a)(["filter:none;-webkit-filter:none;"])})),h=l.b.div.withConfig({displayName:"AboutStyle__Technical",componentId:"sc-1uaxeyy-5"})(['flex:0 1 50%;color:white;max-width:100%;box-sizing:border-box;align-self:center;font-weight:bold;@media screen and (max-width:860px){flex:1 1 100%;padding-top:40px;padding-bottom:40px;}@media screen and (max-width:600px){flex:1 1 100%;padding-top:40px;}> ul > li{font-size:25px;margin-bottom:15px;position:relative;font-weight:normal;@media screen and (max-width:400px){font-size:20px;};}> ul > li:last-of-type{margin-bottom:0;}> h1{font-size:50px;text-align:center;margin:0 auto;margin-bottom:40px;width:fit-content;opacity:0.7;border-radius:3px;background-color:white;color:black;padding:20px;font-family:"Montserrat";font-weight:bold;@media screen and (max-width:835px){font-size:40px;}}']),y=l.b.div.withConfig({displayName:"AboutStyle__StyledCheck",componentId:"sc-1uaxeyy-6"})(["display:flex;justify-content:center;height:25px;width:25px;position:absolute;right:0;top:50%;transform:translateY(-50%);"]),b=(l.b.div.withConfig({displayName:"AboutStyle__StyledBox",componentId:"sc-1uaxeyy-7"})(["height:16px;width:16px;border-radius:4px;background-color:#fadd08;margin-right:5px;"]),n("rjFQ")),g=function(){var e=Object(o.useContext)(b.b).initial,t=Object(o.useState)(!1),n=t[0],a=t[1];return i.a.createElement(d,null,i.a.createElement(f,null,e?i.a.createElement(m,{width:200,height:178,isVisible:!0},i.a.createElement("img",{src:r.a})):i.a.createElement(m,{width:200,height:178,isVisible:n},i.a.createElement("img",{src:r.a,onLoad:function(){return a(!0)}})),i.a.createElement(s,null,i.a.createElement(p,null,i.a.createElement("p",null,"Hi, I'm Drake McGarrah. I am a full-stack web developer primarily experienced with the MERN (MongoDB, Express, React, Node.js) stack."),i.a.createElement("p",null,'For me, it is not enough to just have a website work good enough - I like to understand what happens "under the hood" and am constantly looking for ways to customize and optimize websites. When starting a project, I seek to limit dependencies in order to improve site stability, security, and performance.')))),i.a.createElement(h,null,i.a.createElement("h1",null,"Relevant Skills"),i.a.createElement("ul",null,i.a.createElement("li",null,"HTML",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"CSS/SCSS",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"JavaScript/JSX/jQuery",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"React",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"Node.js",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"Express",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"MySQL",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"MongoDB",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"Mongoose",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"JWT",i.a.createElement(y,null,"✅")),i.a.createElement("li",null,"Webpack",i.a.createElement(y,null,"✅")))))},w=n("g7kG");t.default=function(){return i.a.createElement(w.a,null,i.a.createElement(g,null))}},g7kG:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD"),r=a.b.div.withConfig({displayName:"SecondaryLayoutStyle__PageContainer",componentId:"sc-1xlw38l-0"})(["opacity:",";display:flex;min-height:100vh;flex-direction:column;display:flex;flex-flow:column;height:100%;"],(function(e){return e.opacity})),l=a.b.div.withConfig({displayName:"SecondaryLayoutStyle__FadeContainer",componentId:"sc-1xlw38l-1"})(["background-color:#070707;min-height:100vh;width:100vw;"]),u=a.b.main.withConfig({displayName:"SecondaryLayoutStyle__MainContent",componentId:"sc-1xlw38l-2"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;"]),c=n("L+y5");n("8ycl"),t.a=function(e){var t=e.children,n=Object(o.useReducer)((function(e,t){switch(t.type){case"SHOW_OPACITY":return Object.assign({},e,{opacity:1});default:return e}}),{opacity:0}),a=n[0],d=n[1],f=function(){return d({type:"SHOW_OPACITY"})};return Object(o.useEffect)((function(){return"complete"===document.readyState?f():window.addEventListener("load",f),function(){return document.removeEventListener("load",f)}}),[]),i.a.createElement(l,null,i.a.createElement(r,{opacity:a.opacity},i.a.createElement(u,null,t),i.a.createElement(c.a,null)))}},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),d=Object.prototype.toString,f=Math.max,s=Math.min,p=function(){return c.Date.now()};function m(e,t,n){var o,i,a,r,l,u,c=0,d=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,a=i;return o=i=void 0,c=t,r=e.apply(a,n)}function w(e){return c=e,l=setTimeout(x,t),d?g(e):r}function v(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-c>=a}function x(){var e=p();if(v(e))return E(e);l=setTimeout(x,function(e){var n=t-(e-u);return m?s(n,a-(e-c)):n}(e))}function E(e){return l=void 0,b&&o?g(e):(o=i=void 0,r)}function _(){var e=p(),n=v(e);if(o=arguments,i=this,u=e,n){if(void 0===l)return w(u);if(m)return l=setTimeout(x,t),g(u)}return void 0===l&&(l=setTimeout(x,t)),r}return t=y(t)||0,h(n)&&(d=!!n.leading,a=(m="maxWait"in n)?f(y(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=i=l=void 0},_.flush=function(){return void 0===l?r:E(p())},_}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})}}).call(this,n("yLpj"))},pxCl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,o){if(function(e){return null===e.offsetParent}(t))return!1;var i=void 0,r=void 0,l=void 0,u=void 0;if(void 0===n||n===window)i=window.pageYOffset,l=window.pageXOffset,r=i+window.innerHeight,u=l+window.innerWidth;else{if(!e(n,window,o))return!1;var c=(0,a.default)(n);i=c.top,l=c.left,r=i+n.offsetHeight,u=l+n.offsetWidth}var d=(0,a.default)(t);return i<=d.top+t.offsetHeight+o.top&&r>=d.top-o.bottom&&l<=d.left+t.offsetWidth+o.left&&u>=d.left-o.right};var o,i=n("HVci"),a=(o=i)&&o.__esModule?o:{default:o}},uSmJ:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD"),r=a.b.div.withConfig({displayName:"LayoutStyle__PageContainer",componentId:"sc-6skoc5-0"})(["background-color:#070707;display:flex;flex-direction:column;display:flex;flex-flow:column;height:100vh;"]),l=a.b.div.withConfig({displayName:"LayoutStyle__FadeContainer",componentId:"sc-6skoc5-1"})(["opacity:",";background-color:#070707;overflow:hidden;height:100vh;width:100vw;transition:opacity 0.3s ease;"],(function(e){return e.opacity})),u=a.b.div.withConfig({displayName:"LayoutStyle__Outer",componentId:"sc-6skoc5-2"})(["background-color:#070707;"]),c=a.b.main.withConfig({displayName:"LayoutStyle__MainContent",componentId:"sc-6skoc5-3"})(["display:flex;flex:1 1 auto;align-items:center;justify-content:center;position:relative;"]),d=n("L+y5"),f=n("/acO"),s=(n("7UuI"),n("rjFQ"));t.a=function(e){var t=e.children,n={opacity:Object(o.useContext)(s.a).show?0:1,timeouts:[]},a=Object(o.useReducer)((function(e,t){switch(t.type){case"SHOW_OPACITY":return Object.assign({},e,{opacity:1});default:return e}}),n),p=a[0],m=a[1],h=function(){setTimeout((function(){m({type:"SHOW_OPACITY"})}),1e3)};return Object(o.useEffect)((function(){return"complete"===document.readyState?h():window.addEventListener("load",h),function(){window.removeEventListener("load",h)}}),[]),i.a.createElement(u,null,0===p.opacity?i.a.createElement(f.a,null):null,i.a.createElement(l,{opacity:p.opacity},i.a.createElement(r,null,i.a.createElement(c,null,t),i.a.createElement(d.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-b014c82536d78917ff6e.js.map