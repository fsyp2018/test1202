(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-024accaa":"023897eb","chunk-2d21a3d2":"680488f5","chunk-5437e142":"81a109aa","chunk-1f6a733c":"fee40d60","chunk-3ac77f49":"d1be18de","chunk-05e5ee4f":"2c9f481f","chunk-84ab5d68":"77446190","chunk-aa7507aa":"a74d8b1c"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3ac77f49":1,"chunk-05e5ee4f":1,"chunk-84ab5d68":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-024accaa":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-5437e142":"31d6cfe0","chunk-1f6a733c":"31d6cfe0","chunk-3ac77f49":"18374c69","chunk-05e5ee4f":"899ae6e5","chunk-84ab5d68":"58563846","chunk-aa7507aa":"31d6cfe0"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),t(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a=(t("5c0b"),t("2877")),u={},i=Object(a["a"])(u,o,c,!1,null,null,null),s=i.exports,f=(t("d3b7"),t("8c4f"));r["a"].use(f["a"]);var l=[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))},children:[{path:"/",name:"Login",component:function(){return t.e("chunk-024accaa").then(t.bind(null,"578a"))}},{path:"/SelMenu",name:"SelMenu",component:function(){return Promise.all([t.e("chunk-5437e142"),t.e("chunk-1f6a733c")]).then(t.bind(null,"76fa"))}},{path:"/ScanList",name:"ScanList",component:function(){return t.e("chunk-aa7507aa").then(t.bind(null,"f980"))}},{path:"/Scango",name:"Scango",component:function(){return Promise.all([t.e("chunk-5437e142"),t.e("chunk-3ac77f49"),t.e("chunk-05e5ee4f")]).then(t.bind(null,"82ad"))}},{path:"/Clockin",name:"Clockin",component:function(){return Promise.all([t.e("chunk-5437e142"),t.e("chunk-3ac77f49"),t.e("chunk-84ab5d68")]).then(t.bind(null,"839b"))}}]}],d=new f["a"]({routes:l}),p=d,h=t("2f62"),m=t("0e44"),g=t("88b4"),b=t.n(g),v=new b.a({isCompression:!1});r["a"].use(h["a"]);var k=new h["a"].Store({state:{currentuser:{},deptname:[],scanlist:[]},plugins:[Object(m["a"])({key:"userInfo",storage:{getItem:function(e){return v.get(e)},setItem:function(e,n){return v.set(e,n)},removeItem:function(e){return v.remove(e)}}})],mutations:{CURRENTUSER:function(e,n){e.currentuser=n},DEPTNAME:function(e,n){e.deptname=n},SCANLIST:function(e,n){e.scanlist=n}},actions:{getcurrentuser:function(e,n){var t=[];for(var r in n.ownedDepts)t.push(n.ownedDepts[r].deptname);e.commit("CURRENTUSER",n),e.commit("DEPTNAME",t)},depositdata:function(e,n){e.commit("SCANLIST",n)}},modules:{},getters:{currentuser:function(e){return e.currentuser},deptname:function(e){return e.deptname},scanlist:function(e){return e.scanlist}}}),y=(t("f9e3"),t("4989"),t("bc3a")),w=t.n(y),S=t("2106"),E=t.n(S),j=t("bb6f"),C=t.n(j),O=t("9483");Object(O["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].use(E.a,w.a),r["a"].use(C.a),r["a"].config.productionTip=!1,new r["a"]({router:p,store:k,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.7e4f1cdc.js.map