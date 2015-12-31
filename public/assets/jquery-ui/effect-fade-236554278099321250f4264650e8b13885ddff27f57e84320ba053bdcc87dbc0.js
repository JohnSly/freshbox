/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ui-effects-",n=e;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
return e.effects={effect:{}},function(e,t){function n(e,t,n){var i=d[t.type]||{};return null==e?n||!t.def?null:t.def:(e=i.floor?~~e:parseFloat(e),isNaN(e)?t.def:i.mod?(e+i.mod)%i.mod:0>e?0:i.max<e?i.max:e)}function i(t){var n=c(),i=n._rgba=[];return t=t.toLowerCase(),f(l,function(e,r){var a,o=r.re.exec(t),s=o&&r.parse(o),l=r.space||"rgba";return s?(a=n[l](s),n[u[l].cache]=a[u[l].cache],i=n._rgba=a._rgba,!1):void 0}),i.length?("0,0,0,0"===i.join()&&e.extend(i,a.transparent),n):a[t]}function r(e,t,n){return n=(n+1)%1,1>6*n?e+(t-e)*n*6:1>2*n?t:2>3*n?e+(t-e)*(2/3-n)*6:e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",s=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],c=e.Color=function(t,n,i,r){return new e.Color.fn.parse(t,n,i,r)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=c.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),c.fn=e.extend(c.prototype,{parse:function(r,o,s,l){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(o),o=t);var d=this,h=e.type(r),p=this._rgba=[];return o!==t&&(r=[r,o,s,l],h="array"),"string"===h?this.parse(i(r)||a._default):"array"===h?(f(u.rgba.props,function(e,t){p[t.idx]=n(r[t.idx],t)}),this):"object"===h?(r instanceof c?f(u,function(e,t){r[t.cache]&&(d[t.cache]=r[t.cache].slice())}):f(u,function(t,i){var a=i.cache;f(i.props,function(e,t){if(!d[a]&&i.to){if("alpha"===e||null==r[e])return;d[a]=i.to(d._rgba)}d[a][t.idx]=n(r[e],t,!0)}),d[a]&&e.inArray(null,d[a].slice(0,3))<0&&(d[a][3]=1,i.from&&(d._rgba=i.from(d[a])))}),this):void 0},is:function(e){var t=c(e),n=!0,i=this;return f(u,function(e,r){var a,o=t[r.cache];return o&&(a=i[r.cache]||r.to&&r.to(i._rgba)||[],f(r.props,function(e,t){return null!=o[t.idx]?n=o[t.idx]===a[t.idx]:void 0})),n}),n},_space:function(){var e=[],t=this;return f(u,function(n,i){t[i.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var i=c(e),r=i._space(),a=u[r],o=0===this.alpha()?c("transparent"):this,s=o[a.cache]||a.to(o._rgba),l=s.slice();return i=i[a.cache],f(a.props,function(e,r){var a=r.idx,o=s[a],c=i[a],u=d[r.type]||{};null!==c&&(null===o?l[a]=c:(u.mod&&(c-o>u.mod/2?o+=u.mod:o-c>u.mod/2&&(o-=u.mod)),l[a]=n((c-o)*t+o,r)))}),this[r](l)},blend:function(t){if(1===this._rgba[3])return this;var n=this._rgba.slice(),i=n.pop(),r=c(t)._rgba;return c(e.map(n,function(e,t){return(1-i)*r[t]+i*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===n[3]&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===n[3]&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),i=n.pop();return t&&n.push(~~(255*i)),"#"+e.map(n,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,n,i=e[0]/255,r=e[1]/255,a=e[2]/255,o=e[3],s=Math.max(i,r,a),l=Math.min(i,r,a),c=s-l,u=s+l,d=.5*u;return t=l===s?0:i===s?60*(r-a)/c+360:r===s?60*(a-i)/c+120:60*(i-r)/c+240,n=0===c?0:.5>=d?c/u:c/(2-u),[Math.round(t)%360,n,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,n=e[1],i=e[2],a=e[3],o=.5>=i?i*(1+n):i+n-i*n,s=2*i-o;return[Math.round(255*r(s,o,t+1/3)),Math.round(255*r(s,o,t)),Math.round(255*r(s,o,t-1/3)),a]},f(u,function(i,r){var a=r.props,o=r.cache,l=r.to,u=r.from;c.fn[i]=function(i){if(l&&!this[o]&&(this[o]=l(this._rgba)),i===t)return this[o].slice();var r,s=e.type(i),d="array"===s||"object"===s?i:arguments,h=this[o].slice();return f(a,function(e,t){var i=d["object"===s?e:t.idx];null==i&&(i=h[t.idx]),h[t.idx]=n(i,t)}),u?(r=c(u(h)),r[o]=h,r):c(h)},f(a,function(t,n){c.fn[t]||(c.fn[t]=function(r){var a,o=e.type(r),l="alpha"===t?this._hsla?"hsla":"rgba":i,c=this[l](),u=c[n.idx];return"undefined"===o?u:("function"===o&&(r=r.call(this,u),o=e.type(r)),null==r&&n.empty?this:("string"===o&&(a=s.exec(r),a&&(r=u+parseFloat(a[2])*("+"===a[1]?1:-1))),c[n.idx]=r,this[l](c)))})})}),c.hook=function(t){var n=t.split(" ");f(n,function(t,n){e.cssHooks[n]={set:function(t,r){var a,o,s="";if("transparent"!==r&&("string"!==e.type(r)||(a=i(r)))){if(r=c(a||r),!h.rgba&&1!==r._rgba[3]){for(o="backgroundColor"===n?t.parentNode:t;(""===s||"transparent"===s)&&o&&o.style;)try{s=e.css(o,"backgroundColor"),o=o.parentNode}catch(l){}r=r.blend(s&&"transparent"!==s?s:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(l){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=c(t.elem,n),t.end=c(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},c.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(n,i){t["border"+i+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(n),function(){function t(t){var n,i,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(r&&r.length&&r[0]&&r[r[0]])for(i=r.length;i--;)n=r[i],"string"==typeof r[n]&&(a[e.camelCase(n)]=r[n]);else for(n in r)"string"==typeof r[n]&&(a[n]=r[n]);return a}function i(t,n){var i,r,o={};for(i in n)r=n[i],t[i]!==r&&(a[i]||(e.fx.step[i]||!isNaN(parseFloat(r)))&&(o[i]=r));return o}var r=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(n.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,s){var l=e.speed(a,o,s);return this.queue(function(){var a,o=e(this),s=o.attr("class")||"",c=l.children?o.find("*").addBack():o;c=c.map(function(){var n=e(this);return{el:n,start:t(this)}}),a=function(){e.each(r,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),c=c.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",s),c=c.map(function(){var t=this,n=e.Deferred(),i=e.extend({},l,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,i),n.promise()}),e.when.apply(e,c.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(n,i,r,a){return i?e.effects.animateClass.call(this,{add:n},i,r,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(n,i,r,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:n},i,r,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(n,i,r,a,o){return"boolean"==typeof i||void 0===i?r?e.effects.animateClass.call(this,i?{add:n}:{remove:n},r,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:n},i,r,a)}}(e.fn.toggleClass),switchClass:function(t,n,i,r,a){return e.effects.animateClass.call(this,{add:n,remove:t},i,r,a)}})}(),function(){function n(t,n,i,r){return e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},null==n&&(n={}),e.isFunction(n)&&(r=n,i=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(r=i,i=n,n={}),e.isFunction(i)&&(r=i,i=null),n&&e.extend(t,n),i=i||n.duration,t.duration=e.fx.off?0:"number"==typeof i?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default,t.complete=r||n.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,n){for(var i=0;i<n.length;i++)null!==n[i]&&e.data(t+n[i],e[0].style[n[i]])},restore:function(e,n){var i,r;for(r=0;r<n.length;r++)null!==n[r]&&(i=e.data(t+n[r]),void 0===i&&(i=""),e.css(n[r],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,i;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=e[1]/t.width}return{x:i,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(i),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),i=t.parent(),"static"===t.css("position")?(i.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,i){n[i]=t.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(r),i.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,i,r){return r=r||{},e.each(n,function(e,n){var a=t.cssUnit(n);a[0]>0&&(r[n]=a[0]*i+a[1])}),r}}),e.fn.extend({effect:function(){function t(t){function n(){e.isFunction(a)&&a.call(r[0]),e.isFunction(t)&&t()}var r=e(this),a=i.complete,s=i.mode;(r.is(":hidden")?"hide"===s:"show"===s)?(r[s](),n()):o.call(r[0],i,n)}var i=n.apply(this,arguments),r=i.mode,a=i.queue,o=e.effects.effect[i.effect];return e.fx.off||!o?r?this[r](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(t):this.queue(a||"fx",t)},show:function(e){return function(t){if(i(t))return e.apply(this,arguments);var r=n.apply(this,arguments);return r.mode="show",this.effect.call(this,r)}}(e.fn.show),hide:function(e){return function(t){if(i(t))return e.apply(this,arguments);var r=n.apply(this,arguments);return r.mode="hide",this.effect.call(this,r)}}(e.fn.hide),toggle:function(e){return function(t){if(i(t)||"boolean"==typeof t)return e.apply(this,arguments);var r=n.apply(this,arguments);return r.mode="toggle",this.effect.call(this,r)}}(e.fn.toggle),cssUnit:function(t){var n=this.css(t),i=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(i=[parseFloat(n),t])}),i}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?n(2*e)/2:1-n(-2*e+2)/2}})}(),e.effects}),/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.fade=function(t,n){var i=e(this),r=e.effects.setMode(i,t.mode||"toggle");i.animate({opacity:r},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}});