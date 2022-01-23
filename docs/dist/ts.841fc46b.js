// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@iconify/iconify/dist/iconify.min.js":[function(require,module,exports) {
var global = arguments[3];
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
* @version 2.1.1
*/
var Iconify=function(e){"use strict";var n=/^[a-z0-9]+(-[a-z0-9]+)*$/,r=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function t(e){return Object.assign({},r,e)}function i(e,n,i){void 0===i&&(i=!1);var o=function n(t,i){var o,a,c,f;if(void 0!==e.icons[t])return Object.assign({},e.icons[t]);if(i>5)return null;if(void 0!==(null==(o=e.aliases)?void 0:o[t])){var u=null==(a=e.aliases)?void 0:a[t],s=n(u.parent,i+1);return s?function(e,n){var t=Object.assign({},e);for(var i in r){var o=i;if(void 0!==n[o]){var a=n[o];if(void 0===t[o]){t[o]=a;continue}switch(o){case"rotate":t[o]=(t[o]+a)%4;break;case"hFlip":case"vFlip":t[o]=a!==t[o];break;default:t[o]=a}}}return t}(s,u):s}return 0===i&&void 0!==(null==(c=e.chars)?void 0:c[t])?n(null==(f=e.chars)?void 0:f[t],i+1):null}(n,0);if(o)for(var a in r)void 0===o[a]&&void 0!==e[a]&&(o[a]=e[a]);return o&&i?t(o):o}var o=/^[a-f0-9]+(-[a-f0-9]+)*$/;function a(e,n){for(var r in e){var t=r,i=typeof e[t];if("undefined"!==i)switch(r){case"body":case"parent":if("string"!==i)return r;break;case"hFlip":case"vFlip":case"hidden":if("boolean"!==i){if(!n)return r;delete e[t]}break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if("number"!==i){if(!n)return r;delete e[t]}break;default:if("object"===i){if(!n)return r;delete e[t]}}else delete e[t]}return null}function c(e,t,c){c=c||{};var f=[];if("object"!=typeof e||"object"!=typeof e.icons)return f;var u=c.validate;if(!1!==u)try{!function(e,t){var i=!!(null==t?void 0:t.fix);if("object"!=typeof e||null===e||"object"!=typeof e.icons||!e.icons)throw new Error("Bad icon set");var c=e;if("string"==typeof(null==t?void 0:t.prefix))c.prefix=t.prefix;else if("string"!=typeof c.prefix||!c.prefix.match(n))throw new Error("Invalid prefix");if("string"==typeof(null==t?void 0:t.provider))c.provider=t.provider;else if(void 0!==c.provider){var f=c.provider;if("string"!=typeof f||""!==f&&!f.match(n)){if(!i)throw new Error("Invalid provider");delete c.provider}}var u=c.icons;if(Object.keys(u).forEach((function(e){if(!e.match(n)){if(i)return void delete u[e];throw new Error('Invalid icon name: "'+e+'"')}var r=u[e];if("object"!=typeof r||null===r||"string"!=typeof r.body){if(i)return void delete u[e];throw new Error('Invalid icon: "'+e+'"')}var t="string"==typeof r.parent?"parent":a(r,i);if(null!==t){if(i)return void delete u[e];throw new Error('Invalid property "'+t+'" in icon "'+e+'"')}})),!Object.keys(c.icons).length)throw new Error("Icon set is empty");if(void 0!==c.aliases&&("object"!=typeof c.aliases||null===c.aliases)){if(!i)throw new Error("Invalid aliases list");delete c.aliases}if("object"==typeof c.aliases){var s=function(e,r){if(d.has(e))return!v.has(e);var t=l[e];if(r>5||"object"!=typeof t||null===t||"string"!=typeof t.parent||!e.match(n)){if(i)return delete l[e],v.add(e),!1;throw new Error('Invalid icon alias: "'+e+'"')}var o=t.parent;if(void 0===c.icons[o]&&(void 0===l[o]||!s(o,r+1))){if(i)return delete l[e],v.add(e),!1;throw new Error('Missing parent icon for alias "'+e)}i&&void 0!==t.body&&delete t.body;var f=void 0!==t.body?"body":a(t,i);if(null!==f){if(i)return delete l[e],v.add(e),!1;throw new Error('Invalid property "'+f+'" in alias "'+e+'"')}return d.add(e),!0},l=c.aliases,d=new Set,v=new Set;Object.keys(l).forEach((function(e){s(e,0)})),i&&!Object.keys(c.aliases).length&&delete c.aliases}if(Object.keys(r).forEach((function(e){var n=typeof r[e],t=typeof c[e];if("undefined"!==t&&t!==n)throw new Error('Invalid value type for "'+e+'"')})),void 0!==c.chars&&("object"!=typeof c.chars||null===c.chars)){if(!i)throw new Error("Invalid characters map");delete c.chars}if("object"==typeof c.chars){var p=c.chars;Object.keys(p).forEach((function(e){var n;if(!e.match(o)||"string"!=typeof p[e]){if(i)return void delete p[e];throw new Error('Invalid character "'+e+'"')}var r=p[e];if(void 0===c.icons[r]&&void 0===(null==(n=c.aliases)?void 0:n[r])){if(i)return void delete p[e];throw new Error('Character "'+e+'" points to missing icon "'+r+'"')}})),i&&!Object.keys(c.chars).length&&delete c.chars}}(e,"object"==typeof u?u:{fix:!0})}catch(e){return f}e.not_found instanceof Array&&e.not_found.forEach((function(e){t(e,null),f.push(e)}));var s=e.icons;Object.keys(s).forEach((function(n){var r=i(e,n,!0);r&&(t(n,r),f.push(n))}));var l=c.aliases||"all";if("none"!==l&&"object"==typeof e.aliases){var d=e.aliases;Object.keys(d).forEach((function(n){if("variations"!==l||!function(e){for(var n in r)if(void 0!==e[n])return!0;return!1}(d[n])){var o=i(e,n,!0);o&&(t(n,o),f.push(n))}}))}return f}var f=function(e,n,r,t){void 0===t&&(t="");var i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;t=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),a=i.pop(),c={provider:i.length>0?i[0]:t,prefix:a,name:o};return n&&!u(c)?null:c}var f=i[0],s=f.split("-");if(s.length>1){var l={provider:t,prefix:s.shift(),name:s.join("-")};return n&&!u(l)?null:l}if(r&&""===t){var d={provider:t,prefix:"",name:f};return n&&!u(d,r)?null:d}return null},u=function(e,r){return!!e&&!(""!==e.provider&&!e.provider.match(n)||!(r&&""===e.prefix||e.prefix.match(n))||!e.name.match(n))},s=Object.create(null);try{var l=window||self;1===(null==l?void 0:l._iconifyStorage.version)&&(s=l._iconifyStorage.storage)}catch(Pn){}function d(){try{var e=window||self;e&&!e._iconifyStorage&&(e._iconifyStorage={version:1,storage:s})}catch(e){}}function v(e,n){void 0===s[e]&&(s[e]=Object.create(null));var r=s[e];return void 0===r[n]&&(r[n]=function(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:Object.create(null)}}(e,n)),r[n]}function p(e,n){var r=Date.now();return c(n,(function(n,t){t?e.icons[n]=t:e.missing[n]=r}))}function h(e,n){var r=e.icons[n];return void 0===r?null:r}function g(e,n){var r=[];return("string"==typeof e?[e]:Object.keys(s)).forEach((function(e){("string"==typeof e&&"string"==typeof n?[n]:void 0===s[e]?[]:Object.keys(s[e])).forEach((function(n){var t=v(e,n),i=Object.keys(t.icons).map((function(r){return(""!==e?"@"+e+":":"")+n+":"+r}));r=r.concat(i)}))})),r}var y=!1;function b(e){var n="string"==typeof e?f(e,!0,y):e;return n?h(v(n.provider,n.prefix),n.name):null}function m(e,n){var r=f(e,!0,y);return!!r&&function(e,n,r){try{if("string"==typeof r.body)return e.icons[n]=Object.freeze(t(r)),!0}catch(e){}return!1}(v(r.provider,r.prefix),r.name,n)}function w(e,n){if("object"!=typeof e)return!1;if("string"!=typeof n&&(n="string"==typeof e.provider?e.provider:""),y&&""===n&&("string"!=typeof e.prefix||""===e.prefix)){var r=!1;return c(e,(function(e,n){n&&m(e,n)&&(r=!0)}),{validate:{fix:!0,prefix:""}}),r}return!("string"!=typeof e.prefix||!u({provider:n,prefix:e.prefix,name:"a"}))&&!!p(v(n,e.prefix),e)}function x(e){return null!==b(e)}function j(e){var n=b(e);return n?Object.assign({},n):null}var O=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function E(e,n){var r={};for(var t in e){var i=t;if(r[i]=e[i],void 0!==n[i]){var o=n[i];switch(i){case"inline":case"slice":"boolean"==typeof o&&(r[i]=o);break;case"hFlip":case"vFlip":!0===o&&(r[i]=!r[i]);break;case"hAlign":case"vAlign":"string"==typeof o&&""!==o&&(r[i]=o);break;case"width":case"height":("string"==typeof o&&""!==o||"number"==typeof o&&o||null===o)&&(r[i]=o);break;case"rotate":"number"==typeof o&&(r[i]+=o)}}}return r}var I=/(-?[0-9.]*[0-9]+[0-9.]*)/g,k=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function A(e,n,r){if(1===n)return e;if(r=void 0===r?100:r,"number"==typeof e)return Math.ceil(e*n*r)/r;if("string"!=typeof e)return e;var t=e.split(I);if(null===t||!t.length)return e;for(var i=[],o=t.shift(),a=k.test(o);;){if(a){var c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*n*r)/r)}else i.push(o);if(void 0===(o=t.shift()))return i.join("");a=!a}}function S(e){var n="";switch(e.hAlign){case"left":n+="xMin";break;case"right":n+="xMax";break;default:n+="xMid"}switch(e.vAlign){case"top":n+="YMin";break;case"bottom":n+="YMax";break;default:n+="YMid"}return n+=e.slice?" slice":" meet"}function M(e,n){var r,t,i={left:e.left,top:e.top,width:e.width,height:e.height},o=e.body;[e,n].forEach((function(e){var n,r=[],t=e.hFlip,a=e.vFlip,c=e.rotate;switch(t?a?c+=2:(r.push("translate("+(i.width+i.left)+" "+(0-i.top)+")"),r.push("scale(-1 1)"),i.top=i.left=0):a&&(r.push("translate("+(0-i.left)+" "+(i.height+i.top)+")"),r.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4){case 1:n=i.height/2+i.top,r.unshift("rotate(90 "+n+" "+n+")");break;case 2:r.unshift("rotate(180 "+(i.width/2+i.left)+" "+(i.height/2+i.top)+")");break;case 3:n=i.width/2+i.left,r.unshift("rotate(-90 "+n+" "+n+")")}c%2==1&&(0===i.left&&0===i.top||(n=i.left,i.left=i.top,i.top=n),i.width!==i.height&&(n=i.width,i.width=i.height,i.height=n)),r.length&&(o='<g transform="'+r.join(" ")+'">'+o+"</g>")})),null===n.width&&null===n.height?r=A(t="1em",i.width/i.height):null!==n.width&&null!==n.height?(r=n.width,t=n.height):null!==n.height?r=A(t=n.height,i.width/i.height):t=A(r=n.width,i.height/i.width),"auto"===r&&(r=i.width),"auto"===t&&(t=i.height);var a={attributes:{width:r="string"==typeof r?r:r+"",height:t="string"==typeof t?t:t+"",preserveAspectRatio:S(n),viewBox:i.left+" "+i.top+" "+i.width+" "+i.height},body:o};return n.inline&&(a.inline=!0),a}function T(e,n){return M(t(e),n?E(O,n):O)}var C=/\sid="(\S+)"/g,F="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),P=0;function L(e,n){void 0===n&&(n=F);for(var r,t=[];r=C.exec(e);)t.push(r[1]);return t.length?(t.forEach((function(r){var t="function"==typeof n?n(r):n+P++,i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+t+"$3")})),e):e}var D="iconify2",N="iconify",R="iconify-count",_="iconify-version",U=36e5,z={local:!0,session:!0},q=!1,$={local:0,session:0},H={local:[],session:[]},V="undefined"==typeof window?{}:window;function J(e){var n=e+"Storage";try{if(V&&V[n]&&"number"==typeof V[n].length)return V[n]}catch(e){}return z[e]=!1,null}function Y(e,n,r){try{return e.setItem(R,r+""),$[n]=r,!0}catch(e){return!1}}function B(e){var n=e.getItem(R);if(n){var r=parseInt(n);return r||0}return 0}var G=function(){if(!q){q=!0;var e=Math.floor(Date.now()/U)-168;for(var n in z)r(n)}function r(n){var r=J(n);if(r){var t=function(n){var t=N+n,i=r.getItem(t);if("string"!=typeof i)return!1;var o=!0;try{var a=JSON.parse(i);if("object"!=typeof a||"number"!=typeof a.cached||a.cached<e||"string"!=typeof a.provider||"object"!=typeof a.data||"string"!=typeof a.data.prefix)o=!1;else o=p(v(a.provider,a.data.prefix),a.data).length>0}catch(e){o=!1}return o||r.removeItem(t),o};try{var i=r.getItem(_);if(i!==D)return i&&function(e){try{for(var n=B(e),r=0;r<n;r++)e.removeItem(N+r)}catch(e){}}(r),void function(e,n){try{e.setItem(_,D)}catch(e){}Y(e,n,0)}(r,n);for(var o=B(r),a=o-1;a>=0;a--)t(a)||(a===o-1?o--:H[n].push(a));Y(r,n,o)}catch(e){}}}},Q={};function K(e,n){switch(e){case"local":case"session":z[e]=n;break;case"all":for(var r in z)z[r]=n}}var W=Object.create(null);function X(e,n){W[e]=n}function Z(e){return W[e]||W[""]}function ee(e){var n;if("string"==typeof e.resources)n=[e.resources];else if(!((n=e.resources)instanceof Array&&n.length))return null;return{resources:n,path:void 0===e.path?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:!0===e.random,index:e.index?e.index:0,dataAfterTimeout:!1!==e.dataAfterTimeout}}for(var ne=Object.create(null),re=["https://api.simplesvg.com","https://api.unisvg.com"],te=[];re.length>0;)1===re.length||Math.random()>.5?te.push(re.shift()):te.push(re.pop());function ie(e,n){var r=ee(n);return null!==r&&(ne[e]=r,!0)}function oe(e){return ne[e]}ne[""]=ee({resources:["https://api.iconify.design"].concat(te)});var ae=function(e,n){var r=e,t=-1!==r.indexOf("?");return Object.keys(n).forEach((function(e){var i;try{i=function(e){switch(typeof e){case"boolean":return e?"true":"false";case"number":case"string":return encodeURIComponent(e);default:throw new Error("Invalid parameter")}}(n[e])}catch(e){return}r+=(t?"&":"?")+encodeURIComponent(e)+"="+i,t=!0})),r},ce=null,fe=null,ue=Object.create(null),se=Object.create(null);function le(){if(null===ce){var e=self,n="Iconify",r=".cb";if(void 0===e[n])r="",void 0===e[n="IconifyJSONP"]&&(e[n]=Object.create(null)),ce=e[n];else{var t=e[n];void 0===t.cb&&(t.cb=Object.create(null)),ce=t.cb}fe=n+r+".{cb}"}return ce}var de={prepare:function(e,n,r){var t=[],i=ue[e+":"+n];void 0===i&&(i=function(e,n){var r,t=oe(e);if(!t)return 0;if(t.maxURL){var i=0;t.resources.forEach((function(e){var n=e;i=Math.max(i,n.length)})),le();var o=ae(n+".js",{icons:"",callback:fe});r=t.maxURL-i-t.path.length-o.length}else r=0;var a=e+":"+n;return se[a]=t.path,ue[a]=r,r}(e,n));var o="icons",a={type:o,provider:e,prefix:n,icons:[]},c=0;return r.forEach((function(r,f){(c+=r.length+1)>=i&&f>0&&(t.push(a),a={type:o,provider:e,prefix:n,icons:[]},c=r.length),a.icons.push(r)})),t.push(a),t},send:function(e,n,r){if("icons"===n.type){for(var t=n.provider,i=n.prefix,o=n.icons.join(","),a=t+":"+i,c=i.split("-").shift().slice(0,3),f=le(),u=function(e){var n,r=0;for(n=e.length-1;n>=0;n--)r+=e.charCodeAt(n);return r%999}(t+":"+e+":"+i+":"+o);void 0!==f[c+u];)u++;var s=c+u,l=ae(i+".js",{icons:o,callback:fe.replace("{cb}",s)}),d=se[a]+l;f[s]=function(e){delete f[s],r.done(e)};var v=e+d,p=document.createElement("script");p.type="text/javascript",p.async=!0,p.src=v,document.head.appendChild(p)}else r.done(void 0,400)}},ve=Object.create(null),pe=Object.create(null),he=function(){var e;try{if("function"==typeof(e=fetch))return e}catch(e){}try{var n=String.fromCharCode(114)+String.fromCharCode(101);if("function"==typeof(e=(0,global[n+"qui"+n])("cross-fetch")))return e}catch(e){}return null}();var ge={prepare:function(e,n,r){var t=[],i=ve[n];void 0===i&&(i=function(e,n){var r,t=oe(e);if(!t)return 0;if(t.maxURL){var i=0;t.resources.forEach((function(e){var n=e;i=Math.max(i,n.length)}));var o=ae(n+".json",{icons:""});r=t.maxURL-i-t.path.length-o.length}else r=0;var a=e+":"+n;return pe[e]=t.path,ve[a]=r,r}(e,n));var o="icons",a={type:o,provider:e,prefix:n,icons:[]},c=0;return r.forEach((function(r,f){(c+=r.length+1)>=i&&f>0&&(t.push(a),a={type:o,provider:e,prefix:n,icons:[]},c=r.length),a.icons.push(r)})),t.push(a),t},send:function(e,n,r){if(he){var t=function(e){if("string"==typeof e){if(void 0===pe[e]){var n=oe(e);if(!n)return"/";pe[e]=n.path}return pe[e]}return"/"}(n.provider);switch(n.type){case"icons":var i=n.prefix,o=n.icons.join(",");t+=ae(i+".json",{icons:o});break;case"custom":var a=n.uri;t+="/"===a.slice(0,1)?a.slice(1):a;break;default:return void r.done(void 0,400)}var c=503;he(e+t).then((function(e){if(200===e.status)return c=501,e.json();setTimeout((function(){r.done(void 0,e.status)}))})).then((function(e){"object"==typeof e&&null!==e?setTimeout((function(){r.done(e)})):setTimeout((function(){r.done(void 0,c)}))})).catch((function(){r.done(void 0,c)}))}else r.done(void 0,424)}};var ye=Object.create(null),be=Object.create(null);function me(e,n){e.forEach((function(e){var r=e.provider;if(void 0!==ye[r]){var t=ye[r],i=e.prefix,o=t[i];o&&(t[i]=o.filter((function(e){return e.id!==n})))}}))}var we=0;var xe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function je(e,n,r,t,i){var o,a=e.resources.length,c=e.random?Math.floor(Math.random()*a):e.index;if(e.random){var f=e.resources.slice(0);for(o=[];f.length>1;){var u=Math.floor(Math.random()*f.length);o.push(f[u]),f=f.slice(0,u).concat(f.slice(u+1))}o=o.concat(f)}else o=e.resources.slice(c).concat(e.resources.slice(0,c));var s=Date.now(),l="pending",d=0,v=void 0,p=null,h=[],g=[];function y(){p&&(clearTimeout(p),p=null)}function b(){"pending"===l&&(l="aborted"),y(),h.forEach((function(e){e.abort&&e.abort(),"pending"===e.status&&(e.status="aborted")})),h=[]}function m(e,n){n&&(g=[]),"function"==typeof e&&g.push(e)}function w(){return{startTime:s,payload:n,status:l,queriesSent:d,queriesPending:h.length,subscribe:m,abort:b}}function x(){l="failed",g.forEach((function(e){e(void 0,v)}))}function j(){h=h.filter((function(e){return"pending"===e.status&&(e.status="aborted"),e.abort&&e.abort(),!1}))}function O(){if("pending"===l){y();var t=o.shift();if(void 0!==t){var a={getQueryStatus:w,status:"pending",resource:t,done:function(n,r){!function(n,r,t){var a=void 0===r;switch(h=h.filter((function(e){return e!==n})),l){case"pending":break;case"failed":if(a||!e.dataAfterTimeout)return;break;default:return}if(a)return void 0!==t&&(v=t),void(h.length||(o.length?O():x()));if(y(),j(),i&&!e.random){var c=e.resources.indexOf(n.resource);-1!==c&&c!==e.index&&i(c)}l="completed",g.forEach((function(e){e(r)}))}(a,n,r)}};h.push(a),d++;var c="function"==typeof e.rotate?e.rotate(d,s):e.rotate;p=setTimeout(O,c),r(t,n,a)}else{if(h.length){var f="function"==typeof e.timeout?e.timeout(s):e.timeout;if(f)return void(p=setTimeout((function(){y(),"pending"===l&&(j(),x())}),f))}x()}}}return"function"==typeof t&&g.push(t),setTimeout(O),w}function Oe(e){var n=function(e){if(!("object"==typeof e&&"object"==typeof e.resources&&e.resources instanceof Array&&e.resources.length))throw new Error("Invalid Reduncancy configuration");var n,r=Object.create(null);for(n in xe)void 0!==e[n]?r[n]=e[n]:r[n]=xe[n];return r}(e),r=[];function t(){r=r.filter((function(e){return"pending"===e().status}))}var i={query:function(e,i,o){var a=je(n,e,i,(function(e,n){t(),o&&o(e,n)}),(function(e){n.index=e}));return r.push(a),a},find:function(e){var n=r.find((function(n){return e(n)}));return void 0!==n?n:null},setIndex:function(e){n.index=e},getIndex:function(){return n.index},cleanup:t};return i}function Ee(){}var Ie=Object.create(null);function ke(e,n,r){var t,i;if("string"==typeof e){var o=Z(e);if(!o)return r(void 0,424),Ee;i=o.send;var a=function(e){if(void 0===Ie[e]){var n=oe(e);if(!n)return;var r={config:n,redundancy:Oe(n)};Ie[e]=r}return Ie[e]}(e);a&&(t=a.redundancy)}else{var c=ee(e);if(c){t=Oe(c);var f=Z(e.resources?e.resources[0]:"");f&&(i=f.send)}}return t&&i?t.query(n,i,r)().abort:(r(void 0,424),Ee)}function Ae(){}var Se=Object.create(null),Me=Object.create(null),Te=Object.create(null),Ce=Object.create(null);function Fe(e,n){void 0===Te[e]&&(Te[e]=Object.create(null));var r=Te[e];r[n]||(r[n]=!0,setTimeout((function(){r[n]=!1,function(e,n){void 0===be[e]&&(be[e]=Object.create(null));var r=be[e];r[n]||(r[n]=!0,setTimeout((function(){if(r[n]=!1,void 0!==ye[e]&&void 0!==ye[e][n]){var t=ye[e][n].slice(0);if(t.length){var i=v(e,n),o=!1;t.forEach((function(r){var t=r.icons,a=t.pending.length;t.pending=t.pending.filter((function(r){if(r.prefix!==n)return!0;var a=r.name;if(void 0!==i.icons[a])t.loaded.push({provider:e,prefix:n,name:a});else{if(void 0===i.missing[a])return o=!0,!0;t.missing.push({provider:e,prefix:n,name:a})}return!1})),t.pending.length!==a&&(o||me([{provider:e,prefix:n}],r.id),r.callback(t.loaded.slice(0),t.missing.slice(0),t.pending.slice(0),r.abort))}))}}})))}(e,n)})))}var Pe=Object.create(null);function Le(e,n,r){void 0===Me[e]&&(Me[e]=Object.create(null));var t=Me[e];void 0===Ce[e]&&(Ce[e]=Object.create(null));var i=Ce[e];void 0===Se[e]&&(Se[e]=Object.create(null));var o=Se[e];void 0===t[n]?t[n]=r:t[n]=t[n].concat(r).sort(),i[n]||(i[n]=!0,setTimeout((function(){i[n]=!1;var r=t[n];delete t[n];var a=Z(e);a?a.prepare(e,n,r).forEach((function(r){ke(e,r,(function(t,i){var a=v(e,n);if("object"!=typeof t){if(404!==i)return;var c=Date.now();r.icons.forEach((function(e){a.missing[e]=c}))}else try{var f=p(a,t);if(!f.length)return;var u=o[n];f.forEach((function(e){delete u[e]})),Q.store&&Q.store(e,t)}catch(e){console.error(e)}Fe(e,n)}))})):function(){var r=(""===e?"":"@"+e+":")+n,t=Math.floor(Date.now()/6e4);Pe[r]<t&&(Pe[r]=t,console.error('Unable to retrieve icons for "'+r+'" because API is not configured properly.'))}()})))}var De=function(e){var n=e.provider,r=e.prefix;return Se[n]&&Se[n][r]&&void 0!==Se[n][r][e.name]},Ne=function(e,n){var r,t=function(e){var n={loaded:[],missing:[],pending:[]},r=Object.create(null);e.sort((function(e,n){return e.provider!==n.provider?e.provider.localeCompare(n.provider):e.prefix!==n.prefix?e.prefix.localeCompare(n.prefix):e.name.localeCompare(n.name)}));var t={provider:"",prefix:"",name:""};return e.forEach((function(e){if(t.name!==e.name||t.prefix!==e.prefix||t.provider!==e.provider){t=e;var i=e.provider,o=e.prefix,a=e.name;void 0===r[i]&&(r[i]=Object.create(null));var c=r[i];void 0===c[o]&&(c[o]=v(i,o));var f=c[o],u={provider:i,prefix:o,name:a};(void 0!==f.icons[a]?n.loaded:""===o||void 0!==f.missing[a]?n.missing:n.pending).push(u)}})),n}(function(e,n,r){void 0===n&&(n=!0),void 0===r&&(r=!1);var t=[];return e.forEach((function(e){var i="string"==typeof e?f(e,!1,r):e;n&&!u(i,r)||t.push({provider:i.provider,prefix:i.prefix,name:i.name})})),t}(e,!0,("boolean"==typeof r&&(y=r),y)));if(!t.pending.length){var i=!0;return n&&setTimeout((function(){i&&n(t.loaded,t.missing,t.pending,Ae)})),function(){i=!1}}var o,a,c=Object.create(null),s=[];t.pending.forEach((function(e){var n=e.provider,r=e.prefix;if(r!==a||n!==o){o=n,a=r,s.push({provider:n,prefix:r}),void 0===Se[n]&&(Se[n]=Object.create(null));var t=Se[n];void 0===t[r]&&(t[r]=Object.create(null)),void 0===c[n]&&(c[n]=Object.create(null));var i=c[n];void 0===i[r]&&(i[r]=[])}}));var l=Date.now();return t.pending.forEach((function(e){var n=e.provider,r=e.prefix,t=e.name,i=Se[n][r];void 0===i[t]&&(i[t]=l,c[n][r].push(t))})),s.forEach((function(e){var n=e.provider,r=e.prefix;c[n][r].length&&Le(n,r,c[n][r])})),n?function(e,n,r){var t=we++,i=me.bind(null,r,t);if(!n.pending.length)return i;var o={id:t,icons:n,callback:e,abort:i};return r.forEach((function(e){var n=e.provider,r=e.prefix;void 0===ye[n]&&(ye[n]=Object.create(null));var t=ye[n];void 0===t[r]&&(t[r]=[]),t[r].push(o)})),i}(n,t,s):Ae},Re="iconifyFinder"+Date.now(),_e="iconifyData"+Date.now();function Ue(e,n,r,t){var i;try{i=document.createElement("span")}catch(e){return t?"":null}var o=M(r,E(O,n)),a=e.element,c=e.finder,f=e.name,u=a?a.getAttribute("class"):"",s=c?c.classFilter(u?u.split(/\s+/):[]):[],l='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="'+("iconify iconify--"+f.prefix+(""===f.provider?"":" iconify--"+f.provider)+(s.length?" "+s.join(" "):""))+'">'+L(o.body)+"</svg>";i.innerHTML=l;var d=i.childNodes[0],v=d.style,p=o.attributes;if(Object.keys(p).forEach((function(e){d.setAttribute(e,p[e])})),o.inline&&(v.verticalAlign="-0.125em"),a){for(var h=a.attributes,g=0;g<h.length;g++){var y=h.item(g);if(y){var b=y.name;if("class"!==b&&"style"!==b&&void 0===p[b])try{d.setAttribute(b,y.value)}catch(e){}}}for(var m=a.style,w=0;w<m.length;w++){var x=m[w];v[x]=m[x]}}if(c){var j={name:f,status:"loaded",customisations:n};d[_e]=j,d[Re]=c}var I=t?i.innerHTML:d;return a&&a.parentNode?a.parentNode.replaceChild(d,a):i.removeChild(d),I}var ze=[];function qe(e){for(var n=0;n<ze.length;n++){var r=ze[n];if(("function"==typeof r.node?r.node():r.node)===e)return r}}function $e(e,n){void 0===n&&(n=!1);var r=qe(e);return r?(r.temporary&&(r.temporary=n),r):(r={node:e,temporary:n},ze.push(r),r)}function He(){return ze}var Ve=null,Je={childList:!0,subtree:!0,attributes:!0};function Ye(e){if(e.observer){var n=e.observer;n.pendingScan||(n.pendingScan=setTimeout((function(){delete n.pendingScan,Ve&&Ve(e)})))}}function Be(e,n){if(e.observer){var r=e.observer;if(!r.pendingScan)for(var t=0;t<n.length;t++){var i=n[t];if(i.addedNodes&&i.addedNodes.length>0||"attributes"===i.type&&void 0!==i.target[Re])return void(r.paused||Ye(e))}}}function Ge(e,n){e.observer.instance.observe(n,Je)}function Qe(e){var n=e.observer;if(!n||!n.instance){var r="function"==typeof e.node?e.node():e.node;r&&(n||(n={paused:0},e.observer=n),n.instance=new MutationObserver(Be.bind(null,e)),Ge(e,r),n.paused||Ye(e))}}function Ke(){He().forEach(Qe)}function We(e){if(e.observer){var n=e.observer;n.pendingScan&&(clearTimeout(n.pendingScan),delete n.pendingScan),n.instance&&(n.instance.disconnect(),delete n.instance)}}function Xe(e){var n=null!==Ve;Ve!==e&&(Ve=e,n&&He().forEach(We)),n?Ke():function(e){var n=document;"complete"===n.readyState||"loading"!==n.readyState&&!n.documentElement.doScroll?e():(n.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e))}(Ke)}function Ze(e){(e?[e]:He()).forEach((function(e){if(e.observer){var n=e.observer;if(n.paused++,!(n.paused>1)&&n.instance)n.instance.disconnect()}else e.observer={paused:1}}))}function en(e){if(e){var n=qe(e);n&&Ze(n)}else Ze()}function nn(e){(e?[e]:He()).forEach((function(e){if(e.observer){var n=e.observer;if(n.paused&&(n.paused--,!n.paused)){var r="function"==typeof e.node?e.node():e.node;if(!r)return;n.instance?Ge(e,r):Qe(e)}}else Qe(e)}))}function rn(e){if(e){var n=qe(e);n&&nn(n)}else nn()}function tn(e,n){void 0===n&&(n=!1);var r=$e(e,n);return Qe(r),r}function on(e){var n=qe(e);n&&(We(n),function(e){ze=ze.filter((function(n){var r="function"==typeof n.node?n.node():n.node;return e!==r}))}(e))}var an=[];function cn(e){return"string"==typeof e&&(e=f(e)),null!==e&&u(e)?e:null}function fn(e){var n=[];an.forEach((function(r){var t=r.find(e);Array.prototype.forEach.call(t,(function(e){var t=e;if(void 0===t[Re]||t[Re]===r){var i=cn(r.name(t));if(null!==i){t[Re]=r;var o={element:t,finder:r,name:i};n.push(o)}}}))}));var r=e.querySelectorAll("svg.iconify");return Array.prototype.forEach.call(r,(function(e){var r=e,t=r[Re],i=r[_e];if(t&&i){var o=cn(t.name(r));if(null!==o){var a,c=!1;if(o.prefix!==i.name.prefix||o.name!==i.name.name?c=!0:(a=t.customisations(r),function(e,n){var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var i=0;i<r.length;i++){var o=r[i];if(n[o]!==e[o])return!1}return!0}(i.customisations,a)||(c=!0)),c){var f={element:r,finder:t,name:o,customisations:a};n.push(f)}}}})),n}var un=!1;function sn(){un||(un=!0,setTimeout((function(){un&&(un=!1,ln())})))}function ln(e,n){void 0===n&&(n=!1),un=!1;var r=Object.create(null);(e?[e]:He()).forEach((function(e){var t="function"==typeof e.node?e.node():e.node;if(t&&t.querySelectorAll){var i=!1,o=!1;fn(t).forEach((function(n){var t,a,c=n.element,f=n.name,u=f.provider,s=f.prefix,l=f.name,d=c[_e];if(void 0!==d&&(t=d.name,a=f,null!==t&&null!==a&&t.name===a.name&&t.prefix===a.prefix))switch(d.status){case"missing":return;case"loading":if(De({provider:u,prefix:s,name:l}))return void(i=!0)}var p=v(u,s);if(void 0===p.icons[l]){if(p.missing[l])return d={name:f,status:"missing",customisations:{}},void(c[_e]=d);if(!De({provider:u,prefix:s,name:l})){void 0===r[u]&&(r[u]=Object.create(null));var g=r[u];void 0===g[s]&&(g[s]=Object.create(null)),g[s][l]=!0}d={name:f,status:"loading",customisations:{}},c[_e]=d,i=!0}else{!o&&e.observer&&(Ze(e),o=!0);var y=void 0!==n.customisations?n.customisations:n.finder.customisations(c);Ue(n,y,h(p,l))}})),e.temporary&&!i?on(t):n&&i?tn(t,!0):o&&e.observer&&nn(e)}})),Object.keys(r).forEach((function(e){var n=r[e];Object.keys(n).forEach((function(r){Ne(Object.keys(n[r]).map((function(n){return{provider:e,prefix:r,name:n}})),sn)}))}))}var dn=/[\s,]+/;function vn(e,n){return e.hasAttribute(n)}function pn(e,n){return e.getAttribute(n)}var hn=["inline","hFlip","vFlip"],gn=["width","height"],yn="iconify-inline",bn={find:function(e){return e.querySelectorAll("i.iconify, span.iconify, i.iconify-inline, span.iconify-inline")},name:function(e){return vn(e,"data-icon")?pn(e,"data-icon"):null},customisations:function(e,n){void 0===n&&(n={inline:!1});var r,t=n,i=e.getAttribute("class");if(-1!==(i?i.split(/\s+/):[]).indexOf(yn)&&(t.inline=!0),vn(e,"data-rotate")){var o=function(e,n){void 0===n&&(n=0);var r=e.replace(/^-?[0-9.]*/,"");function t(e){for(;e<0;)e+=4;return e%4}if(""===r){var i=parseInt(e);return isNaN(i)?0:t(i)}if(r!==e){var o=0;switch(r){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(e.slice(0,e.length-r.length));return isNaN(a)?0:(a/=o)%1==0?t(a):0}}return n}(pn(e,"data-rotate"));o&&(t.rotate=o)}return vn(e,"data-flip")&&(r=t,pn(e,"data-flip").split(dn).forEach((function(e){switch(e.trim()){case"horizontal":r.hFlip=!0;break;case"vertical":r.vFlip=!0}}))),vn(e,"data-align")&&function(e,n){n.split(dn).forEach((function(n){var r=n.trim();switch(r){case"left":case"center":case"right":e.hAlign=r;break;case"top":case"middle":case"bottom":e.vAlign=r;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}(t,pn(e,"data-align")),hn.forEach((function(n){if(vn(e,"data-"+n)){var r=function(e,n){var r=e.getAttribute(n);return r===n||"true"===r||""!==r&&"false"!==r&&null}(e,"data-"+n);"boolean"==typeof r&&(t[n]=r)}})),gn.forEach((function(n){if(vn(e,"data-"+n)){var r=pn(e,"data-"+n);""!==r&&(t[n]=r)}})),t},classFilter:function(e){var n=[];return e.forEach((function(e){"iconify"!==e&&""!==e&&"iconify--"!==e.slice(0,9)&&n.push(e)})),n}};function mn(e,n,r){var t=b(e);return t?Ue({name:f(e)},E(O,"object"==typeof n?n:{}),t,r):null}function wn(){return"2.1.1"}function xn(e,n){return mn(e,n,!1)}function jn(e,n){return mn(e,n,!0)}function On(e,n){var r=b(e);return r?M(r,E(O,"object"==typeof n?n:{})):null}function En(e){e?function(e){var n=qe(e);n?ln(n):ln({node:e,temporary:!0},!0)}(e):ln()}if("undefined"!=typeof document&&"undefined"!=typeof window){!function(){if(document.documentElement)return $e(document.documentElement);ze.push({node:function(){return document.documentElement}})}(),function(e){-1===an.indexOf(e)&&an.push(e)}(bn);var In=window;if(void 0!==In.IconifyPreload){var kn=In.IconifyPreload,An="Invalid IconifyPreload syntax.";"object"==typeof kn&&null!==kn&&(kn instanceof Array?kn:[kn]).forEach((function(e){try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!w(e))&&console.error(An)}catch(e){console.error(An)}}))}setTimeout((function(){Xe(ln),ln()}))}function Sn(e,n){K(e,!1!==n)}function Mn(e){K(e,!0)}if(X("",he?ge:de),"undefined"!=typeof document&&"undefined"!=typeof window){Q.store=function(e,n){function r(r){if(!z[r])return!1;var t=J(r);if(!t)return!1;var i=H[r].shift();if(void 0===i&&!Y(t,r,(i=$[r])+1))return!1;try{var o={cached:Math.floor(Date.now()/U),provider:e,data:n};t.setItem(N+i,JSON.stringify(o))}catch(e){return!1}return!0}q||G(),r("local")||r("session")},G();var Tn=window;if(void 0!==Tn.IconifyProviders){var Cn=Tn.IconifyProviders;if("object"==typeof Cn&&null!==Cn)for(var Fn in Cn){var Pn="IconifyProviders["+Fn+"] is invalid.";try{var Ln=Cn[Fn];if("object"!=typeof Ln||!Ln||void 0===Ln.resources)continue;ie(Fn,Ln)||console.error(Pn)}catch(e){console.error(Pn)}}}}var Dn={getAPIConfig:oe,setAPIModule:X,sendAPIQuery:ke,setFetch:function(e){he=e,X("",ge)},listAPIProviders:function(){return Object.keys(ne)},mergeParams:ae},Nn={_api:Dn,addAPIProvider:ie,loadIcons:Ne,iconExists:x,getIcon:j,listIcons:g,addIcon:m,addCollection:w,shareStorage:d,replaceIDs:L,calculateSize:A,buildIcon:T,getVersion:wn,renderSVG:xn,renderHTML:jn,renderIcon:On,scan:En,observe:tn,stopObserving:on,pauseObserver:en,resumeObserver:rn,enableCache:Sn,disableCache:Mn};return e._api=Dn,e.addAPIProvider=ie,e.addCollection=w,e.addIcon=m,e.buildIcon=T,e.calculateSize=A,e.default=Nn,e.disableCache=Mn,e.enableCache=Sn,e.getIcon=j,e.getVersion=wn,e.iconExists=x,e.listIcons=g,e.loadIcons=Ne,e.observe=tn,e.pauseObserver=en,e.renderHTML=jn,e.renderIcon=On,e.renderSVG=xn,e.replaceIDs=L,e.resumeObserver=rn,e.scan=En,e.shareStorage=d,e.stopObserving=on,Object.defineProperty(e,"__esModule",{value:!0}),e}({});if("object"==typeof exports)try{for(var key in exports.__esModule=!0,exports.default=Iconify,Iconify)exports[key]=Iconify[key]}catch(e){}try{void 0===self.Iconify&&(self.Iconify=Iconify)}catch(e){}

},{}],"../node_modules/highlight.js/lib/core.js":[function(require,module,exports) {
var global = arguments[3];
// https://github.com/substack/deep-freeze/blob/master/index.js
/** @param {any} obj */
function deepFreeze(obj) {
  Object.freeze(obj);

  var objIsFunction = typeof obj === 'function';

  Object.getOwnPropertyNames(obj).forEach(function(prop) {
    if (Object.hasOwnProperty.call(obj, prop)
    && obj[prop] !== null
    && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
    // IE11 fix: https://github.com/highlightjs/highlight.js/issues/2318
    // TODO: remove in the future
    && (objIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true)
    && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
  }

  ignoreMatch() {
    this.ignore = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  var result = {};

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/* Stream merging */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  var result = [];
  (function _nodeStream(node, offset) {
    for (var child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  var processed = 0;
  var result = '';
  var nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attr_str(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attr_str).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    var stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  escapeHTML: escapeHTML,
  inherit: inherit,
  nodeStream: nodeStream,
  mergeStreams: mergeStreams
});

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  var match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  // backreferenceRe matches an open parenthesis or backreference. To avoid
  // an incorrect parse, it additionally matches the following:
  // - [...] elements, where the meaning of parentheses and escapes change
  // - other escape sequences, so we do not misparse escape sequences as
  //   interesting elements
  // - non-matching or lookahead parentheses, which do not capture. These
  //   follow the '(' with a '?'.
  var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  var numCaptures = 0;
  var ret = '';
  for (var i = 0; i < regexps.length; i++) {
    numCaptures += 1;
    var offset = numCaptures;
    var re = source(regexps[i]);
    if (i > 0) {
      ret += separator;
    }
    ret += "(";
    while (re.length > 0) {
      var match = backreferenceRe.exec(re);
      if (match == null) {
        ret += re;
        break;
      }
      ret += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        ret += '\\' + String(Number(match[1]) + offset);
      } else {
        ret += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    ret += ")";
  }
  return ret;
}

// Common regexps
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  var mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IDENT_RE: IDENT_RE,
  UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
  NUMBER_RE: NUMBER_RE,
  C_NUMBER_RE: C_NUMBER_RE,
  BINARY_NUMBER_RE: BINARY_NUMBER_RE,
  RE_STARTERS_RE: RE_STARTERS_RE,
  SHEBANG: SHEBANG,
  BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
  APOS_STRING_MODE: APOS_STRING_MODE,
  QUOTE_STRING_MODE: QUOTE_STRING_MODE,
  PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
  COMMENT: COMMENT,
  C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
  C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
  HASH_COMMENT_MODE: HASH_COMMENT_MODE,
  NUMBER_MODE: NUMBER_MODE,
  C_NUMBER_MODE: C_NUMBER_MODE,
  BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
  CSS_NUMBER_MODE: CSS_NUMBER_MODE,
  REGEXP_MODE: REGEXP_MODE,
  TITLE_MODE: TITLE_MODE,
  UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
  METHOD_GUARD: METHOD_GUARD,
  END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// keywords that should have no default relevance value
var COMMON_KEYWORDS = 'of and for in not or if then'.split(' ');

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      const result = m.exec(s);
      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) { // wrap-around
          this.regexIndex = 0;
        }
      }

      // this.regexIndex = 0;
      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminator_end) {
      mm.addRule(mode.terminator_end, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  // TODO: We need negative look-behind support to do this properly
  /**
   * Skip a match if it has a preceding or trailing dot
   *
   * This is used for `beginKeywords` to prevent matching expressions such as
   * `bob.keyword.do()`. The mode compiler automatically wires this up as a
   * special _internal_ 'on:begin' callback for modes with `beginKeywords`
   * @param {RegExpMatchArray} match
   * @param {CallbackResponse} response
   */
  function skipIfhasPrecedingOrTrailingDot(match, response) {
    const before = match.input[match.index - 1];
    const after = match.input[match.index + match[0].length];
    if (before === "." || after === ".") {
      response.ignoreMatch();
    }
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.compiled) return cmode;
    mode.compiled = true;

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    mode.keywords = mode.keywords || mode.beginKeywords;

    let kw_pattern = null;
    if (typeof mode.keywords === "object") {
      kw_pattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && kw_pattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    cmode.keywordPatternRe = langRe(mode.lexemes || kw_pattern || /\w+/, true);

    if (parent) {
      if (mode.beginKeywords) {
        // for languages with keywords that include non-word characters checking for
        // a word boundary is not sufficient, so instead we check for a word boundary
        // or whitespace - this does no harm in any case since our keyword engine
        // doesn't allow spaces in keywords anyways and we still check for the boundary
        // first
        mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?=\\b|\\s)';
        mode.__beforeBegin = skipIfhasPrecedingOrTrailingDot;
      }
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminator_end = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminator_end) {
        cmode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(mode.illegal);
    // eslint-disable-next-line no-undefined
    if (mode.relevance === undefined) mode.relevance = 1;
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expand_or_clone_mode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }
  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expand_or_clone_mode(mode) {
  if (mode.variants && !mode.cached_variants) {
    mode.cached_variants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cached_variants) {
    return mode.cached_variants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

/***********************************************
  Keywords
***********************************************/

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string>} rawKeywords
 * @param {boolean} case_insensitive
 */
function compileKeywords(rawKeywords, case_insensitive) {
  /** @type KeywordDict */
  var compiled_keywords = {};

  if (typeof rawKeywords === 'string') { // string
    splitAndCompile('keyword', rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      splitAndCompile(className, rawKeywords[className]);
    });
  }
  return compiled_keywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {string} keywordList
   */
  function splitAndCompile(className, keywordList) {
    if (case_insensitive) {
      keywordList = keywordList.toLowerCase();
    }
    keywordList.split(' ').forEach(function(keyword) {
      var pair = keyword.split('|');
      compiled_keywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

var version = "10.1.2";

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;

const { nodeStream: nodeStream$1, mergeStreams: mergeStreams$1 } = utils;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Convenience variables for build-in objects
  /** @type {unknown[]} */
  var ArrayProto = [];

  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  var languages = Object.create(null);
  /** @type {Record<string, string>} */
  var aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  var plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  var SAFE_MODE = true;
  var fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  var LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  var options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      var language = getLanguage(match[1]);
      if (!language) {
        console.warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        console.warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {Mode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {Mode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(languageName, code, ignoreIllegals, continuation) {
    /** @type {{ code: string, language: string, result?: any }} */
    var context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    var result = context.result ?
      context.result :
      _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {Mode} [continuation] - current continuation mode, if any
  */
  function _highlight(languageName, code, ignoreIllegals, continuation) {
    var codeToHighlight = code;

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      var matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(mode_buffer);
        return;
      }

      let last_index = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(mode_buffer);
      let buf = "";

      while (match) {
        buf += mode_buffer.substring(last_index, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          emitter.addKeyword(match[0], kind);
        } else {
          buf += match[0];
        }
        last_index = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(mode_buffer);
      }
      buf += mode_buffer.substr(last_index);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (mode_buffer === "") return;
      /** @type HighlightResult */
      var result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(mode_buffer);
          return;
        }
        result = _highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = result.top;
      } else {
        result = highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      mode_buffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.ignore) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        mode_buffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        continueScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      var lexeme = match[0];
      var new_mode = match.rule;

      const resp = new Response(new_mode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [new_mode.__beforeBegin, new_mode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.ignore) return doIgnore(lexeme);
      }

      if (new_mode && new_mode.endSameAsBegin) {
        new_mode.endRe = escape(lexeme);
      }

      if (new_mode.skip) {
        mode_buffer += lexeme;
      } else {
        if (new_mode.excludeBegin) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
          mode_buffer = lexeme;
        }
      }
      startNewMode(new_mode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return new_mode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      var lexeme = match[0];
      var matchPlusRemainder = codeToHighlight.substr(match.index);

      var end_mode = endOfMode(top, match, matchPlusRemainder);
      if (!end_mode) { return NO_MATCH; }

      var origin = top;
      if (origin.skip) {
        mode_buffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          mode_buffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== end_mode.parent);
      if (end_mode.starts) {
        if (end_mode.endSameAsBegin) {
          end_mode.starts.endRe = end_mode.endRe;
        }
        startNewMode(end_mode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      var list = [];
      for (var current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    var lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      var lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      mode_buffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        mode_buffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        var processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      mode_buffer += lexeme;
      return lexeme.length;
    }

    var language = getLanguage(languageName);
    if (!language) {
      console.error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    var md = compileLanguage(language);
    var result = '';
    /** @type {CompiledMode} */
    var top = continuation || md;
    /** @type Record<string,Mode> */
    var continuations = {}; // keep continuations for sub-languages
    var emitter = new options.__emitter(options);
    processContinuations();
    var mode_buffer = '';
    var relevance = 0;
    var index = 0;
    var iterations = 0;
    var continueScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (continueScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          continueScanAtSamePosition = false;
        } else {
          top.matcher.lastIndex = index;
          top.matcher.considerAll();
        }
        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)
        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        relevance: relevance,
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    var result = justTextHighlightResult(code);
    var secondBest = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = _highlight(name, code, false);
      current.language = name;
      if (current.relevance > secondBest.relevance) {
        secondBest = current;
      }
      if (current.relevance > result.relevance) {
        secondBest = result;
        result = current;
      }
    });
    if (secondBest.language) {
      // second_best (with underscore) is the expected API
      result.second_best = secondBest;
    }
    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {string} prevClassName
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang;
    var result = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (!prevClassName.includes(language)) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightBlock(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightBlock",
      { block: element, language: language });

    if (options.useBR) {
      node = document.createElement('div');
      node.innerHTML = element.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
    } else {
      node = element;
    }
    const text = node.textContent;
    const result = language ? highlight(language, text, true) : highlightAuto(text);

    const originalStream = nodeStream$1(node);
    if (originalStream.length) {
      const resultNode = document.createElement('div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams$1(originalStream, nodeStream$1(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    fire("after:highlightBlock", { block: element, result: result });

    element.innerHTML = result.value;
    element.className = buildClassName(element.className, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {{}} userOptions
   */
  function configure(userOptions) {
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  };

  // Higlights all when DOMContentLoaded fires
  function initHighlightingOnLoad() {
    // @ts-ignore
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    var lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error) {
      console.error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error; } else { console.error(error); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    var lang = getLanguage(name);
    if (lang) { return lang; }

    var err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    var cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /* Interface definition */

  Object.assign(hljs, {
    highlight,
    highlightAuto,
    fixMarkup,
    highlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreeze(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;

},{}],"../node_modules/highlight.js/lib/languages/xml.js":[function(require,module,exports) {
/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common
*/

function xml(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var XML_ENTITIES = {
    className: 'symbol',
    begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'
  };
  var XML_META_KEYWORDS = {
	  begin: '\\s',
	  contains:[
	    {
	      className: 'meta-keyword',
	      begin: '#?[a-z_][a-z1-9_-]+',
	      illegal: '\\n',
      }
	  ]
  };
  var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {begin: '\\(', end: '\\)'});
  var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {className: 'meta-string'});
  var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'});
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/, contains: [XML_ENTITIES]},
              {begin: /'/, end: /'/, contains: [XML_ENTITIES]},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<![a-z]', end: '>',
        relevance: 10,
        contains: [
				  XML_META_KEYWORDS,
				  QUOTE_META_STRING_MODE,
				  APOS_META_STRING_MODE,
					XML_META_PAR_KEYWORDS,
					{
					  begin: '\\[', end: '\\]',
					  contains:[
						  {
					      className: 'meta',
					      begin: '<![a-z]', end: '>',
					      contains: [
					        XML_META_KEYWORDS,
					        XML_META_PAR_KEYWORDS,
					        QUOTE_META_STRING_MODE,
					        APOS_META_STRING_MODE
						    ]
			        }
					  ]
				  }
				]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: 'meta',
        begin: /<\?xml/, end: /\?>/, relevance: 10
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
}

module.exports = xml;

},{}],"../node_modules/highlight.js/lib/languages/javascript.js":[function(require,module,exports) {
const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

const TYPES = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer"
];

const ERROR_TYPES = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  BUILT_IN_VARIABLES,
  TYPES,
  ERROR_TYPES
);

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

function javascript(hljs) {
  var IDENT_RE$1 = IDENT_RE;
  var FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  var XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/
  };
  var KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.join(" "),
    literal: LITERALS.join(" "),
    built_in: BUILT_INS.join(" ")
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)n?' },
      { begin: '\\b(0[oO][0-7]+)n?' },
      { begin: hljs.C_NUMBER_RE + 'n?' }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS$1,
    contains: []  // defined later
  };
  var HTML_TEMPLATE = {
    begin: 'html`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml',
    }
  };
  var CSS_TEMPLATE = {
    begin: 'css`', end: '',
    starts: {
      end: '`', returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css',
    }
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    // eat recursive parens in sub expressions
    { begin: /\(/, end: /\)/,
      contains: ["self"].concat(SUBST.contains, [hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE])
    },
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    contains: PARAMS_CONTAINS
  };

  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    contains: [
      hljs.SHEBANG({
        binary: "node",
        relevance: 5
      }),
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              className : 'doctag',
              begin : '@[A-Za-z]+',
              contains : [
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  relevance: 0
                },
                {
                  className: 'variable',
                  begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
                  endsParent: true,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                },
              ]
            }
          ]
        }
      ),
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: concat(/[{,\n]\s*/,
          // we need to look ahead to make sure that we actually have an
          // attribute coming up so we don't steal a comma from a potential
          // "value" container
          //
          // NOTE: this might not work how you think.  We don't actually always
          // enter this mode and stay.  Instead it might merely match `,
          // <comments up next>` and then immediately end after the , because it
          // fails to find any actual attrs. But this still does the job because
          // it prevents the value contain rule from grabbing this instead and
          // prevening this rule from firing when we actually DO have keys.
          lookahead(concat(
            // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(((\/\/.*)|(\/\*(.|\n)*\*\/))\s*)*/,
            IDENT_RE$1 + '\\s*:'))),
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: IDENT_RE$1 + lookahead('\\s*:'),
            relevance: 0,
          },
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: '(\\([^(]*' +
              '(\\([^(]*' +
                '(\\([^(]*' +
                '\\))?' +
              '\\))?' +
            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/, relevance: 0,
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true,
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { begin: XML_TAG.begin, end: XML_TAG.end }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin, end: XML_TAG.end, skip: true,
                contains: ['self']
              }
            ]
          },
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE$1}),
          PARAMS
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },

      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      },
      {
        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
        end: /{/,
        keywords: "get set",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE$1}),
          { begin: /\(\)/ }, // eat to avoid empty params
          PARAMS
        ]

      }
    ],
    illegal: /#(?!!)/
  };
}

module.exports = javascript;

},{}],"../node_modules/highlight.js/lib/languages/scss.js":[function(require,module,exports) {
/*
Language: SCSS
Description: Scss is an extension of the syntax of CSS.
Author: Kurt Emch <kurt@kurtemch.com>
Website: https://sass-lang.com
Category: common, css
*/
function scss(hljs) {
  var AT_IDENTIFIER = '@[a-z-]+'; // @font-face
  var AT_MODIFIERS = "and or not only";
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var VARIABLE = {
    className: 'variable',
    begin: '(\\$' + IDENT_RE + ')\\b'
  };
  var HEXCOLOR = {
    className: 'number', begin: '#[0-9A-Fa-f]+'
  };
  var DEF_INTERNALS = {
    className: 'attribute',
    begin: '[A-Z\\_\\.\\-]+', end: ':',
    excludeEnd: true,
    illegal: '[^\\s]',
    starts: {
      endsWithParent: true, excludeEnd: true,
      contains: [
        HEXCOLOR,
        hljs.CSS_NUMBER_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: 'meta', begin: '!important'
        }
      ]
    }
  };
  return {
    name: 'SCSS',
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-attr', begin: '\\[', end: '\\]',
        illegal: '$'
      },
      {
        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0
      },
      {
        className: 'selector-pseudo',
        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
      },
      {
        className: 'selector-pseudo',
        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
      },
      VARIABLE,
      {
        className: 'attribute',
        begin: '\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        illegal: '[^\\s]'
      },
      {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      },
      {
        begin: ':', end: ';',
        contains: [
          VARIABLE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: 'meta', begin: '!important'
          }
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: '@(page|font-face)',
        lexemes: AT_IDENTIFIER,
        keywords: '@page @font-face'
      },
      {
        begin: '@', end: '[{;]',
        returnBegin: true,
        keywords: AT_MODIFIERS,
        contains: [
          {
            begin: AT_IDENTIFIER,
            className: "keyword"
          },
          VARIABLE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          // {
          //   begin: '\\s[A-Za-z0-9_.-]+',
          //   relevance: 0
          // }
        ]
      }
    ]
  };
}

module.exports = scss;

},{}],"../node_modules/highlight.js/lib/languages/bash.js":[function(require,module,exports) {
/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/

/** @type LanguageFn */
function bash(hljs) {
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/, end:/\}/,
    contains: [
      { begin: /:-/, contains: [VAR] } // default values
    ]
  };
  Object.assign(VAR,{
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      BRACED_VAR
    ]
  });

  const SUBST = {
    className: 'subst',
    begin: /\$\(/, end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    className: '',
    begin: /\\"/

  };
  const APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  const ARITHMETIC = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh",
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: 'function',
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
    relevance: 0
  };

  return {
    name: 'Bash',
    aliases: ['sh', 'zsh'],
    keywords: {
      $pattern: /\b-?[a-z\._]+\b/,
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp',
      _:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      KNOWN_SHEBANG, // to catch known shells and boost relevancy
      hljs.SHEBANG(), // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      VAR
    ]
  };
}

module.exports = bash;

},{}],"ts/module/hljs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _core = _interopRequireDefault(require("highlight.js/lib/core"));

var _xml = _interopRequireDefault(require("highlight.js/lib/languages/xml"));

var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));

var _scss = _interopRequireDefault(require("highlight.js/lib/languages/scss"));

var _bash = _interopRequireDefault(require("highlight.js/lib/languages/bash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.registerLanguage('xml', _xml.default);

_core.default.registerLanguage('javascript', _javascript.default);

_core.default.registerLanguage('scss', _scss.default);

_core.default.registerLanguage('bash', _bash.default);

function _default() {
  _core.default.initHighlightingOnLoad();
}
},{"highlight.js/lib/core":"../node_modules/highlight.js/lib/core.js","highlight.js/lib/languages/xml":"../node_modules/highlight.js/lib/languages/xml.js","highlight.js/lib/languages/javascript":"../node_modules/highlight.js/lib/languages/javascript.js","highlight.js/lib/languages/scss":"../node_modules/highlight.js/lib/languages/scss.js","highlight.js/lib/languages/bash":"../node_modules/highlight.js/lib/languages/bash.js"}],"ts/module/debugWindowSize.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  var $widthTarget = document.querySelector('[data-debug-window-width]');
  var $heightTarget = document.querySelector('[data-debug-window-height]');

  function calcWindowWidth() {
    $widthTarget.innerHTML = "" + window.innerWidth;
  }

  function calcWindowHeight() {
    $heightTarget.innerHTML = "" + window.innerHeight;
  }

  window.addEventListener('load', calcWindowWidth, false);
  window.addEventListener('resize', calcWindowWidth, false);
  window.addEventListener('load', calcWindowHeight, false);
  window.addEventListener('resize', calcWindowHeight, false);
}
},{}],"ts/index.ts":[function(require,module,exports) {
"use strict";

require("@iconify/iconify");

var _hljs = _interopRequireDefault(require("./module/hljs"));

var _debugWindowSize = _interopRequireDefault(require("./module/debugWindowSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hljs.default)();
(0, _debugWindowSize.default)();
},{"@iconify/iconify":"../node_modules/@iconify/iconify/dist/iconify.min.js","./module/hljs":"ts/module/hljs.ts","./module/debugWindowSize":"ts/module/debugWindowSize.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56803" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/index.ts"], null)
//# sourceMappingURL=/ts.841fc46b.js.map