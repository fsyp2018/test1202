(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f6a733c"],{1276:function(t,e,a){"use strict";var i=a("d784"),n=a("44e7"),r=a("825a"),s=a("1d80"),l=a("4840"),c=a("8aa5"),o=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,v=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(s(this)),r=void 0===a?h:a>>>0;if(0===r)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,r);var l,c,o,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,p+"g");while(l=d.call(m,i)){if(c=m.lastIndex,c>v&&(u.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&f.apply(u,l.slice(1)),o=l[0].length,v=c,u.length>=r))break;m.lastIndex===l.index&&m.lastIndex++}return v===i.length?!o&&m.test("")||u.push(""):u.push(i.slice(v)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n,a):i.call(String(n),e,a)},function(t,n){var s=a(i,t,this,n,i!==e);if(s.done)return s.value;var d=r(t),p=String(this),f=l(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new f(m?d:"^(?:"+d.source+")",b),C=void 0===n?h:n>>>0;if(0===C)return[];if(0===p.length)return null===u(x,p)?[p]:[];var _=0,k=0,w=[];while(k<p.length){x.lastIndex=m?k:0;var S,y=u(x,m?p:p.slice(k));if(null===y||(S=v(o(x.lastIndex+(m?0:k)),p.length))===_)k=c(p,k,g);else{if(w.push(p.slice(_,k)),w.length===C)return w;for(var E=1;E<=y.length-1;E++)if(w.push(y[E]),w.length===C)return w;k=_=S}}return w.push(p.slice(_)),w}]}),!m)},5319:function(t,e,a){"use strict";var i=a("d784"),n=a("825a"),r=a("7b0b"),s=a("50c4"),l=a("a691"),c=a("1d80"),o=a("8aa5"),u=a("14c3"),d=Math.max,p=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,a,i){var g=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=i.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(a,i){var n=c(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n,i):e.call(String(n),a,i)},function(t,i){if(!g&&b||"string"===typeof i&&-1===i.indexOf(x)){var r=a(e,t,this,i);if(r.done)return r.value}var c=n(t),f=String(this),v="function"===typeof i;v||(i=String(i));var h=c.global;if(h){var _=c.unicode;c.lastIndex=0}var k=[];while(1){var w=u(c,f);if(null===w)break;if(k.push(w),!h)break;var S=String(w[0]);""===S&&(c.lastIndex=o(f,s(c.lastIndex),_))}for(var y="",E=0,$=0;$<k.length;$++){w=k[$];for(var D=String(w[0]),I=d(p(l(w.index),f.length),0),A=[],O=1;O<w.length;O++)A.push(m(w[O]));var R=w.groups;if(v){var j=[D].concat(A,I,f);void 0!==R&&j.push(R);var M=String(i.apply(void 0,j))}else M=C(D,f,I,A,R,i);I>=E&&(y+=f.slice(E,I)+M,E=I+D.length)}return y+f.slice(E)}];function C(t,a,i,n,s,l){var c=i+t.length,o=n.length,u=h;return void 0!==s&&(s=r(s),u=v),e.call(l,u,(function(e,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,i);case"'":return a.slice(c);case"<":l=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return e;if(u>o){var d=f(u/10);return 0===d?e:d<=o?void 0===n[d-1]?r.charAt(1):n[d-1]+r.charAt(1):e}l=n[u-1]}return void 0===l?"":l}))}}))},"76fa":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex flex-column",attrs:{id:"layout"}},[a("main",[a("div",{staticClass:"content_wrapper"},[a("div",{staticClass:"menu_wrapper container-fluid"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex justify-content-end align-items-center text-dark"},[a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.backlogin(e)}}},[t._v(" 回登入畫面"),a("i",{staticClass:"fa fa-arrow-right fa-lg",attrs:{"aria-hidden":"true"}})])])])]),a("div",{staticClass:"itdmavatar"},[a("section",{staticClass:"avatar_brick"},[a("div",{staticClass:"text-center"},[a("label",{staticClass:"user"},[t._v(t._s(t.currentuser.fullname))])]),a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.seldeptname,expression:"seldeptname"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.seldeptname=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""}},[t._v("--請選擇組別--")]),t._l(t.deptname,(function(e,i){return a("option",{key:i},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"text-center",class:{hidden:t.isShow}},[a("label",{staticClass:"user"},[t._v(t._s(t.seldate))])])])]),a("div",{staticClass:"menu col col-sm-8 col-md-7  col-lg-6 col-xl-5",staticStyle:{"grid-template":"repeat(1,1fr)/repeat(1,1fr)"}},[a("section",{staticClass:"menu_brick",on:{click:function(e){return e.preventDefault(),t.toclockin(e)}}},[a("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),a("label",{attrs:{for:""}},[t._v("打卡")])])]),a("div",{staticClass:"menu col col-sm-8 col-md-7  col-lg-6 col-xl-5"},[a("section",{staticClass:"menu_brick",on:{click:function(e){return e.preventDefault(),t.openselmenu("D")}}},[a("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),a("label",{attrs:{for:""}},[t._v("日巡檢")])]),a("section",{staticClass:"menu_brick",on:{click:function(e){return e.preventDefault(),t.openselmenu("W")}}},[a("i",{staticClass:"fa fa-cloud-upload",attrs:{"aria-hidden":"true"}}),a("label",{attrs:{for:""}},[t._v("周巡檢")])]),a("section",{staticClass:"menu_brick",on:{click:function(e){return e.preventDefault(),t.openselmenu("M")}}},[a("i",{staticClass:"fa fa-cloud-download",attrs:{"aria-hidden":"true"}}),a("label",{attrs:{for:""}},[t._v("月巡檢")])])]),a("div",{staticClass:"menu col col-sm-8 col-md-7  col-lg-6 col-xl-5",class:{hidden:t.isShow},staticStyle:{"grid-template":"repeat(1,1fr)/repeat(1,1fr)"}},[a("section",{staticClass:"menu_brick",on:{click:function(e){return e.preventDefault(),t.carryout(e)}}},[a("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),a("label",{attrs:{for:""}},[t._v("執行巡檢作業")])])]),a("div",{staticClass:"error-message alert text-center",class:{hidden:t.prompt},staticStyle:{position:"fixed","margin-bottom":"0"}},[t._v(" "+t._s(t.prompttext)+" ")])])])])])])},n=[],r=(a("ac1f"),a("5319"),a("1276"),a("5530")),s=a("2f62"),l=a("812f"),c={data:function(){return{seldeptname:"",periodtype:"",prompttext:"",prompt:!0,isShow:!0,seldate:"目前選擇："}},methods:Object(r["a"])({openselmenu:function(t){var e=this;if(e.periodtype=t,e.seldeptname){switch(t){case"D":e.seldate="目前選擇：日巡檢";break;case"W":e.seldate="目前選擇：週巡檢";break;case"M":e.seldate="目前選擇：月巡檢";break}e.isShow=!1,e.getlog()}else e.prompttext="請選擇組別",e.prompt=!1},getlog:function(){var t=this;if(""===t.periodtype)t.prompttext="請選擇巡檢方式",t.prompt=!1;else{var e=new Date(+new Date+288e5).toISOString().split("T"),a={deptname:t.seldeptname,periodtype:t.periodtype,logdate:e[0].replace(/-/g,"/")},i=l["a"]+"itdmlimsapi/Inspect/GetLog";this.$http.post(i,a).then((function(e){t.prompttext="下載成功",t.prompt=!1,t.depositdata(e.data)})).catch((function(e){t.prompttext="下載失敗",t.prompt=!1}))}},carryout:function(){var t=this;"下載成功"===t.prompttext?t.$router.push("/ScanList"):(t.prompttext="請下載巡檢項目",t.prompt=!1)},toclockin:function(){var t=this;t.$router.push("/Clockin")},backlogin:function(){var t=this;t.$router.push("/")}},Object(s["b"])(["depositdata"])),watch:{prompt:function(){var t=this;setTimeout((function(){t.prompt=!0}),3e3)}},computed:Object(r["a"])({},Object(s["c"])(["currentuser","deptname","scanlist"])),created:function(){}},o=c,u=a("2877"),d=Object(u["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports},"812f":function(t,e,a){"use strict";e["a"]="https://www.sinetics.com.tw/"}}]);
//# sourceMappingURL=chunk-1f6a733c.d79c9e0a.js.map