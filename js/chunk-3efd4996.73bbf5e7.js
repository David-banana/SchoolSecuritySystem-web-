(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3efd4996","chunk-2d0c4bda"],{"3bb7":function(r,e,t){"use strict";t.r(e),t.d(e,"CarRecord",(function(){return n})),t.d(e,"getSurplusNumber",(function(){return c}));var u=t("9bd2");function n(r){return Object(u["a"])({url:"/Car/carRecord",method:"post",data:r})}function c(){return Object(u["a"])({url:"/Car/surplusParkNumber",method:"post"})}},"6be1":function(r,e,t){"use strict";t.r(e);var u=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("d2-container",[t("h3",[r._v("车位还剩："+r._s(this.surplusParkNumber))]),t("div",{staticStyle:{margin:"20px"}}),t("el-form",{ref:"car",attrs:{"label-width":"80px",rules:r.rules,model:r.car}},[t("el-form-item",{staticStyle:{width:"300px"},attrs:{label:"车牌号",prop:"number"}},[t("el-input",{model:{value:r.car.number,callback:function(e){r.$set(r.car,"number",e)},expression:"car.number"}})],1),t("el-form-item",[t("footer"),t("el-button",{attrs:{type:"primary"},on:{click:function(e){return r.submitForm("car")}}},[r._v("立即申请")])],1)],1)],1)},n=[],c=t("3bb7"),a={data:function(){return{surplusParkNumber:"",car:{number:""},rules:{number:[{required:!0,message:"请输入车牌号",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"}]}}},mounted:function(){this.createPage()},methods:{createPage:function(){var r=this;Object(c["getSurplusNumber"])({}).then((function(e){r.surplusParkNumber=e}))},submitForm:function(r){var e=this;this.$refs[r].validate((function(r){if(!r)return console.log("error submit!!"),!1;alert("submit!"),Object(c["CarRecord"])({carNumber:e.car.number})}))}}},o=a,i=t("2877"),s=function(r){r.options.__source="src/views/function/carRecord/carInRecord/index.vue"},l=s,b=Object(i["a"])(o,u,n,!1,null,null,null);"function"===typeof l&&l(b);e["default"]=b.exports}}]);