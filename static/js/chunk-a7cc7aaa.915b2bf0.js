(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7cc7aaa"],{"0a4b":function(t,o,e){"use strict";e("32a6")},"26fc":function(t,o,e){t.exports=e.p+"static/img/404_cloud.0f4bc32b.png"},"32a6":function(t,o,e){},3500:function(t,o,e){var n={"./photo01.jpeg":"c0f4","./photo02.jpeg":"9f91","./photo03.jpeg":"683d"};function r(t){var o=i(t);return e(o)}function i(t){if(!e.o(n,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="3500"},"58ff":function(t,o,e){},"683d":function(t,o,e){t.exports=e.p+"static/img/photo03.d8af2b9b.jpeg"},"9e01":function(t,o,e){var n={"./404_images/404.png":"a36b","./404_images/404_cloud.png":"26fc","./bg01.png":"a08f","./bg02.png":"b372","./pig.png":"eed4"};function r(t){var o=i(t);return e(o)}function i(t){if(!e.o(n,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="9e01"},"9f91":function(t,o,e){t.exports=e.p+"static/img/photo02.9446cacb.jpeg"},a08f:function(t,o,e){t.exports=e.p+"static/img/bg01.cce11368.png"},a36b:function(t,o,e){t.exports=e.p+"static/img/404.a57b6f31.png"},ac47:function(t,o,e){"use strict";e("58ff")},b372:function(t,o,e){t.exports=e.p+"static/img/bg02.2fd8f59e.png"},bb9d:function(t,o,e){"use strict";e.r(o);var n,r,i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"app-container settings-page"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"top","label-width":"120px"}},[n("el-form-item",{attrs:{label:"背景色"}},[n("el-color-picker",{model:{value:t.form.bgColor,callback:function(o){t.$set(t.form,"bgColor",o)},expression:"form.bgColor"}})],1),n("el-form-item",{staticClass:"bg",attrs:{label:"背景圖片"}},[n("el-radio-group",{model:{value:t.form.bgImg,callback:function(o){t.$set(t.form,"bgImg",o)},expression:"form.bgImg"}},t._l(t.bgOptions,(function(t){return n("el-radio",{key:t.value,attrs:{label:t.value}},[n("img",{staticClass:"bg-option",attrs:{src:e("9e01")("./"+t.img+".png")}})])})),1)],1),n("el-form-item",{attrs:{label:"按鈕顏色"}},[n("el-color-picker",{model:{value:t.form.btnColor,callback:function(o){t.$set(t.form,"btnColor",o)},expression:"form.btnColor"}})],1),n("el-form-item",{attrs:{label:"按鈕顏色(hover)"}},[n("el-color-picker",{model:{value:t.form.btnHoverColor,callback:function(o){t.$set(t.form,"btnHoverColor",o)},expression:"form.btnHoverColor"}})],1),n("el-form-item",{staticClass:"photo",attrs:{label:"大頭貼"}},[n("el-radio-group",{model:{value:t.form.photo,callback:function(o){t.$set(t.form,"photo",o)},expression:"form.photo"}},t._l(t.photoOptions,(function(t){return n("el-radio",{key:t.value,attrs:{label:t.value}},[n("img",{staticClass:"photo-option",attrs:{src:e("3500")("./"+t.img+".jpeg")}})])})),1)],1),n("el-form-item",{staticClass:"name",attrs:{label:"名稱"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(o){t.$set(t.form,"name",o)},expression:"form.name"}})],1),n("el-form-item",{staticClass:"urlList",attrs:{label:"連結列表"}},[n("div",{staticClass:"add-block"},[n("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(o){return t.addItem()}}},[t._v("新增")]),n("el-button",{attrs:{icon:"el-icon-delete",size:"small"},on:{click:function(o){return t.delItem()}}},[t._v("刪除")])],1),n("ul",t._l(t.form.urlList,(function(o){return n("li",[n("el-input",{attrs:{placeholder:"標題",clearable:""},model:{value:o.title,callback:function(e){t.$set(o,"title",e)},expression:"item.title"}}),n("el-input",{attrs:{placeholder:"連結",clearable:""},model:{value:o.url,callback:function(e){t.$set(o,"url",e)},expression:"item.url"}})],1)})),0)]),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.onSubmit()}}},[t._v("更新")]),n("el-button",{attrs:{type:"success"},on:{click:function(o){return t.goFrontendUrl()}}},[t._v("前台瀏覽")])],1)],1)],1)},l=[],c=(e("e9c4"),{name:"",props:{},data:function(){return{photoOptions:[{value:1,img:"photo01",url:"https://upload.cc/i1/2022/02/08/oxu6Ic.jpeg"},{value:2,img:"photo02",url:"https://upload.cc/i1/2022/02/08/KMpntX.jpeg"},{value:3,img:"photo03",url:"https://upload.cc/i1/2022/02/08/ZV2s0G.jpeg"}],bgOptions:[{value:1,img:"bg01",url:"https://upload.cc/i1/2022/02/08/NqxcU0.png"},{value:2,img:"bg02",url:"https://upload.cc/i1/2022/02/08/GBYbah.png"}]}},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{}}),a=c,u=e("2877"),s=Object(u["a"])(a,n,r,!1,null,null,null),f=s.exports,p={name:"",props:{},mixins:[f],data:function(){return{form:{bgColor:null,btnColor:"#E644CD",btnHoverColor:"#BD64DD",photo:1,bgImg:1,name:"茜茜",urlList:[{title:"YouTube",url:""}],photoUrl:"",bgUrl:""}}},computed:{},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{addItem:function(){this.form.urlList.push({title:"",url:""})},delItem:function(){0!==this.form.urlList.length?this.form.urlList.pop():console.log("this.form.urlList.length",this.form.urlList.length)},onSubmit:function(){this.form.photoUrl=this.photoOptions[this.form.photo-1].url,this.form.bgUrl=this.bgOptions[this.form.bgImg-1].url,console.log("this.form",this.form),localStorage.setItem("settingsData",JSON.stringify(this.form))},goFrontendUrl:function(){var t=window.open("https://yunchians.github.io/cc-project/#/lynked","_new");t?t.location="https://yunchians.github.io/cc-project/#/lynked":window.location.href="https://yunchians.github.io/cc-project/#/lynked"}}},m=p,b=(e("0a4b"),e("ac47"),Object(u["a"])(m,i,l,!1,null,"0ca41500",null));o["default"]=b.exports},c0f4:function(t,o,e){t.exports=e.p+"static/img/photo01.f45f543a.jpeg"},e9c4:function(t,o,e){var n=e("23e7"),r=e("d066"),i=e("d039"),l=r("JSON","stringify"),c=/[\uD800-\uDFFF]/g,a=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,s=function(t,o,e){var n=e.charAt(o-1),r=e.charAt(o+1);return a.test(t)&&!u.test(r)||u.test(t)&&!a.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},f=i((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&n({target:"JSON",stat:!0,forced:f},{stringify:function(t,o,e){var n=l.apply(null,arguments);return"string"==typeof n?n.replace(c,s):n}})}}]);