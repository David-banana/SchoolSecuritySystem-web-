(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7723ea76","chunk-2d225b7b"],{a6d8:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("d2-container",[o("el-row",[o("el-col",{attrs:{span:12}},[o("h2",{staticClass:"d2-mt-0"},[e._v("新增管理教师信息")])])],1),o("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"180px"}},[o("el-form-item",{attrs:{label:"职员名称",prop:"name"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"职工性别",prop:"gender"}},[o("el-radio-group",{model:{value:e.form.gender,callback:function(r){e.$set(e.form,"gender",r)},expression:"form.gender"}},[o("el-radio",{attrs:{label:"1"}},[e._v("男")]),o("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1),o("el-form-item",{attrs:{label:"职工联系方式",prop:"mobilePhone"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.mobilePhone,callback:function(r){e.$set(e.form,"mobilePhone",r)},expression:"form.mobilePhone"}})],1),o("el-form-item",{attrs:{label:"职工职工卡卡号",prop:"employeeCardId"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.employeeCardId,callback:function(r){e.$set(e.form,"employeeCardId",r)},expression:"form.employeeCardId"}})],1),o("el-form-item",{attrs:{label:"职工地址",prop:"address"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.address,callback:function(r){e.$set(e.form,"address",r)},expression:"form.address"}})],1),o("el-form-item",{attrs:{label:"职工紧急联系人",prop:"emergencyContact"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContact,callback:function(r){e.$set(e.form,"emergencyContact",r)},expression:"form.emergencyContact"}})],1),o("el-form-item",{attrs:{label:"职工紧急联系人联系方式",prop:"emergencyContactMobilePhone"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContactMobilePhone,callback:function(r){e.$set(e.form,"emergencyContactMobilePhone",r)},expression:"form.emergencyContactMobilePhone"}})],1),o("el-form-item",{attrs:{label:"职工邮箱",prop:"Email"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.Email,callback:function(r){e.$set(e.form,"Email",r)},expression:"form.Email"}})],1),o("el-form-item",{attrs:{label:"职工职位",prop:"work"}},[o("el-input",{staticStyle:{width:"200px"},model:{value:e.form.work,callback:function(r){e.$set(e.form,"work",r)},expression:"form.work"}})],1),o("el-form-item",[o("footer"),o("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("form")}}},[e._v("立即创建")]),o("el-button",{on:{click:function(r){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},l=[],a=(o("b0c0"),o("e61e")),n={data:function(){return{form:{name:"",gender:"",mobilePhone:"",teacherCardId:"",address:"",emergencyContact:"",emergencyContactMobilePhone:"",Email:"",role:1,work:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"blur"}],mobilePhone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],employeeCardId:[{required:!0,message:"请输入职工卡卡号",trigger:"blur"},{min:10,max:10,message:"输入职工卡卡号格式不正确",trigger:"blur"}],address:[{required:!0,message:"请输入住房地址",trigger:"blur"}],emergencyContact:[{required:!0,message:"请输入紧急联系人姓名",trigger:"blur"}],emergencyContactMobilePhone:[{required:!0,message:"请输入紧急人联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],Email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],work:[{required:!0,message:"请输入职工职位",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),Object(a["addNewEmployee"])({name:r.form.name,gender:r.form.gender,address:r.form.address,mobilephone:r.form.mobilePhone,employeeCardId:r.form.employeeCardId,emergencyContact:r.form.emergencyContact,emergencyContactMobilePhone:r.form.emergencyContactMobilePhone,email:r.form.Email,role:r.form.role,work:r.form.work})}))},resetForm:function(e){this.$refs[e].resetFields()}}},m=n,i=o("2877"),s=function(e){e.options.__source="src/views/function/query/addEmployeeInformation/index.vue"},c=s,d=Object(i["a"])(m,t,l,!1,null,null,null);"function"===typeof c&&c(d);r["default"]=d.exports},e61e:function(e,r,o){"use strict";o.r(r),o.d(r,"addNewEmployee",(function(){return l}));var t=o("9bd2");function l(e){return Object(t["a"])({url:"/Employee/addNewEmployee",method:"post",data:e})}}}]);