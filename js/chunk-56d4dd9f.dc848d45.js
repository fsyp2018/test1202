(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56d4dd9f"],{1276:function(t,e,n){"use strict";var s=n("d784"),r=n("44e7"),i=n("825a"),a=n("1d80"),l=n("4840"),c=n("8aa5"),o=n("50c4"),u=n("14c3"),p=n("9263"),d=n("d039"),m=[].push,v=Math.min,f=4294967295,h=!d((function(){return!RegExp(f,"y")}));s("split",2,(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(a(this)),i=void 0===n?f:n>>>0;if(0===i)return[];if(void 0===t)return[s];if(!r(t))return e.call(s,t,i);var l,c,o,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,d+"g");while(l=p.call(h,s)){if(c=h.lastIndex,c>v&&(u.push(s.slice(v,l.index)),l.length>1&&l.index<s.length&&m.apply(u,l.slice(1)),o=l[0].length,v=c,u.length>=i))break;h.lastIndex===l.index&&h.lastIndex++}return v===s.length?!o&&h.test("")||u.push(""):u.push(s.slice(v)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):s.call(String(r),e,n)},function(t,r){var a=n(s,t,this,r,s!==e);if(a.done)return a.value;var p=i(t),d=String(this),m=l(p,RegExp),g=p.unicode,x=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),b=new m(h?p:"^(?:"+p.source+")",x),w=void 0===r?f:r>>>0;if(0===w)return[];if(0===d.length)return null===u(b,d)?[d]:[];var C=0,R=0,k=[];while(R<d.length){b.lastIndex=h?R:0;var _,y=u(b,h?d:d.slice(R));if(null===y||(_=v(o(b.lastIndex+(h?0:R)),d.length))===C)R=c(d,R,g);else{if(k.push(d.slice(C,R)),k.length===w)return k;for(var E=1;E<=y.length-1;E++)if(k.push(y[E]),k.length===w)return k;R=C=_}}return k.push(d.slice(C)),k}]}),!h)},"82ad":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-sm navbar-light fixed-top itdmnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("div",{staticClass:"d-inline-flex",on:{click:function(e){return e.preventDefault(),t.backtrack(e)}}},[t._m(0),n("div",{staticClass:"minilogo"})])])])]),n("main",[n("div",{staticClass:"content_wrapper",staticStyle:{"align-items":"start"}},[n("div",{staticClass:"job_wrapper col col-sm-8 col-md-6  col-lg-3 col-xl-4 container-fluid container-sm"},[n("form",{staticClass:"job_form col"},[n("p",{staticClass:"error"},[t._v(t._s(t.error))]),n("qrcode-stream",{on:{decode:t.onDecode,init:t.onInit}}),n("p",{staticClass:"decode-result"},[t._v(" 掃描結果: "),n("b",[t._v(t._s(t.result))]),n("b",{class:{hidden:t.prompt}},[t._v(t._s(t.prompttext))])]),t._l(t.tempindex,(function(e,s){return n("div",{key:s,staticClass:"row"},[n("div",{staticClass:"col",class:{"d-none":t.isshow}},[n("div",[n("label",{class:[!0===t.textdanger&&{"text-danger":!t.tempscanlist[e].result}]},[t._v(t._s(t.tempscanlist[e].inspectno)+t._s(t.tempscanlist[e].inspectname))]),"0"===t.tempscanlist[e].inspecttype?n("div",[n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempscanlist[e].result,expression:"tempscanlist[item].result"}],staticClass:"form-check-input",attrs:{type:"radio",name:e,id:"inlineRadio1",value:"Y"},domProps:{checked:t._q(t.tempscanlist[e].result,"Y")},on:{change:function(n){return t.$set(t.tempscanlist[e],"result","Y")}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[t._v("Ok")])]),n("div",{staticClass:"form-check form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempscanlist[e].result,expression:"tempscanlist[item].result"}],staticClass:"form-check-input",attrs:{type:"radio",name:e,id:"inlineRadio2",value:"N"},domProps:{checked:t._q(t.tempscanlist[e].result,"N")},on:{change:function(n){return t.$set(t.tempscanlist[e],"result","N")}}}),n("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio2"}},[t._v("Fail")])])]):"1"===t.tempscanlist[e].inspecttype?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempscanlist[e].result,expression:"tempscanlist[item].result"}],staticClass:"form-control",attrs:{type:"number",step:"0.1"},domProps:{value:t.tempscanlist[e].result},on:{input:function(n){n.target.composing||t.$set(t.tempscanlist[e],"result",n.target.value)}}})]):"2"===t.tempscanlist[e].inspecttype?n("div",[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempscanlist[e].result,expression:"tempscanlist[item].result"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.tempscanlist[e].result},on:{input:function(n){n.target.composing||t.$set(t.tempscanlist[e],"result",n.target.value)}}})])]):t._e()])])])})),n("button",{staticClass:"btn btn-primary btn-block",class:{"d-none":t.isshow},attrs:{id:"btn1"},on:{click:function(e){return e.preventDefault(),t.scandone(e)}}},[t._v(" 輸入結果 ")]),n("div",{staticClass:"d-flex justify-content-center mt-4"},[n("div",{staticClass:"error-message alert text-center w-50",class:{hidden:t.prompt},staticStyle:{position:"flex"}},[t._v(" "+t._s(t.prompttext)+" ")])])],2)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn  mr-1"},[n("i",{staticClass:"fa fa-arrow-left fa-lg",attrs:{"aria-hidden":"true"}})])}],i=(n("4de4"),n("c740"),n("b0c0"),n("ac1f"),n("1276"),n("5530")),a=(n("96cf"),n("1da1")),l=n("b635"),c=n("2f62"),o={components:{QrcodeStream:l["a"]},data:function(){return{result:"",error:"",lookresult:"",tempscanlist:[],tempindex:[],isshow:!0,prompt:!0,prompttext:"",textdanger:!1}},methods:{onDecode:function(t){var e=this;e.result=t;var n=e.result.split(";"),s=n.filter((function(t){return t.length>0})),r=function(t){var n=e.tempscanlist.findIndex((function(e){return e.inspectno===s[t]}));n>-1&&e.tempindex.push(n)};for(var i in s)r(i);e.tempindex[0]<0&&(e.tempindex=[],e.prompttext="非為巡檢條碼",e.prompt=!1),e.isshow=!1},onInit:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t;case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),"NotAllowedError"===n.t0.name?e.error="ERROR: you need to grant camera access permisson":"NotFoundError"===n.t0.name?e.error="ERROR: no camera on this device":"NotSupportedError"===n.t0.name?e.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===n.t0.name?e.error="ERROR: is the camera already in use?":"OverconstrainedError"===n.t0.name?e.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===n.t0.name&&(e.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},backtrack:function(){var t=this;t.$router.push("/ScanList")},scandone:function(){var t=this,e="0";for(var n in t.tempindex)t.tempscanlist[t.tempindex[n]].result?e++:console.log(t.tempscanlist[t.tempindex[n]]);if(t.tempindex.length===e){var s=new Date(+new Date+288e5).toISOString().split(".");for(var r in t.tempindex)t.tempscanlist[r].createts=s[0],t.tempscanlist[r].createuserid=t.currentuser.userid,t.tempscanlist[r].createusername=t.currentuser.username,t.tempscanlist[r].createfullname=t.currentuser.fullname;t.prompttext="儲存成功",t.textdanger=!1,t.prompt=!1,t.isshow=!0}else t.prompttext="尚未完成輸入結果",t.textdanger=!0,t.prompt=!1}},watch:{prompt:function(){var t=this;setTimeout((function(){t.prompt=!0}),3e3)}},computed:Object(i["a"])({},Object(c["c"])(["scanlist","currentuser"])),created:function(){var t=this;t.tempscanlist=t.scanlist}},u=o,p=(n("b301"),n("2877")),d=Object(p["a"])(u,s,r,!1,null,"bf9c5554",null);e["default"]=d.exports},b301:function(t,e,n){"use strict";n("cba3")},c740:function(t,e,n){"use strict";var s=n("23e7"),r=n("b727").findIndex,i=n("44d2"),a=n("ae40"),l="findIndex",c=!0,o=a(l);l in[]&&Array(1)[l]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(l)},cba3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-56d4dd9f.dc848d45.js.map