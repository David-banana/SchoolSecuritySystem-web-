(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-367979b9","chunk-1011ab15"],{"0471":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",{staticClass:"page",attrs:{type:"card"}},[r("el-form",{ref:"form",staticClass:"page--form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("修改")])],1)],1)],1)},a=[],s=(r("a4d3"),r("4de4"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),o=(r("96cf"),r("2f62")),c=r("2cdc");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={mixins:[c["default"]],beforeRouteEnter:function(e,t,r){var n=e.params.id;n&&r((function(r){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if("demo-business-issues-142"!==t.name){a.next=6;break}return a.next=3,regeneratorRuntime.awrap(r.getFormData(n));case 3:r.saveDataToDb(),a.next=7;break;case 6:r.loadDataFromDb(e);case 7:case"end":return a.stop()}}))}))},beforeRouteUpdate:function(e,t,r){var n=e.params.id;n&&(this.loadDataFromDb(e),r())},watch:{form:{handler:function(){this.saveDataToDb()},deep:!0}},methods:u({},Object(o["b"])("d2admin/db",["pageSet","pageGet"]),{saveDataToDb:function(){this.pageSet({instance:this,user:!0})},loadDataFromDb:function(e){var t,r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t={$route:{fullPath:e.fullPath},$data:{}},a.next=3,regeneratorRuntime.awrap(this.pageGet({instance:t,user:!0}));case 3:for(n in r=a.sent,r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.$message.success("loadDataFromDb");case 6:case"end":return a.stop()}}),null,this)}})},d=f,m=(r("1826"),r("2877")),l=function(e){e.options.__source="src/views/demo/business/issues/142/edit-cache-db.vue"},b=l,p=Object(m["a"])(d,n,a,!1,null,null,null);"function"===typeof b&&b(p);t["default"]=p.exports},1826:function(e,t,r){"use strict";var n=r("4fc6"),a=r.n(n);a.a},"2cdc":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("d3b7");var n=r("cfab");t["default"]={props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",address:""}}},methods:{resetFormData:function(){this.form={name:"",address:""}},getFormData:function(e){var t=this;return new Promise((function(r,a){t.resetFormData(),Object(n["a"])(e).then((function(e){var n=e.name,a=e.address;t.form={name:n,address:a},t.$message.success("getFormData"),r()})).catch((function(e){console.log("err",e),a(e)}))}))},handleSubmit:function(){this.$notify({title:"Submit",message:"提交了表单",type:"info"})}}}},"4fc6":function(e,t,r){},cfab:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return s}));var n=r("9bd2");function a(){return Object(n["a"])({url:"/demo/business/issues/142/fetch",method:"get"})}function s(e){return Object(n["a"])({url:"/demo/business/issues/142/detail",method:"get",params:{id:e}})}}}]);