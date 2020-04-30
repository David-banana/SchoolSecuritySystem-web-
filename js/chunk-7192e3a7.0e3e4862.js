(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7192e3a7","chunk-2d216c2f"],{8531:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("d2-container",[t("el-row",[t("el-col",{attrs:{span:12}},[t("h2",{staticClass:"d2-mt-0"},[e._v("新增管理教师信息")])])],1),t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"180px"}},[t("el-form-item",{attrs:{label:"教师名称",prop:"name"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"教师性别",prop:"gender"}},[t("el-radio-group",{model:{value:e.form.gender,callback:function(r){e.$set(e.form,"gender",r)},expression:"form.gender"}},[t("el-radio",{attrs:{label:"1"}},[e._v("男")]),t("el-radio",{attrs:{label:"0"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"教师学院与班级",prop:"academy"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.academy,callback:function(r){e.$set(e.form,"academy",r)},expression:"form.academy"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"教师联系方式",prop:"mobilePhone"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.mobilePhone,callback:function(r){e.$set(e.form,"mobilePhone",r)},expression:"form.mobilePhone"}})],1),t("el-form-item",{attrs:{label:"教师教师卡卡号",prop:"teacherCardId"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.teacherCardId,callback:function(r){e.$set(e.form,"teacherCardId",r)},expression:"form.teacherCardId"}})],1),t("el-form-item",{attrs:{label:"教师地址",prop:"address"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.address,callback:function(r){e.$set(e.form,"address",r)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"教师紧急联系人",prop:"emergencyContact"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContact,callback:function(r){e.$set(e.form,"emergencyContact",r)},expression:"form.emergencyContact"}})],1),t("el-form-item",{attrs:{label:"教师紧急联系人联系方式",prop:"emergencyContactMobilePhone"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContactMobilePhone,callback:function(r){e.$set(e.form,"emergencyContactMobilePhone",r)},expression:"form.emergencyContactMobilePhone"}})],1),t("el-form-item",{attrs:{label:"教师邮箱",prop:"Email"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.Email,callback:function(r){e.$set(e.form,"Email",r)},expression:"form.Email"}})],1),t("el-form-item",{attrs:{label:"教师职位",prop:"work"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.work,callback:function(r){e.$set(e.form,"work",r)},expression:"form.work"}})],1),t("el-form-item",[t("footer"),t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("form")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},o=[],l=(t("b0c0"),t("c49a")),n={data:function(){return{form:{name:"",gender:"",academy:"",mobilePhone:"",teacherCardId:"",address:"",emergencyContact:"",emergencyContactMobilePhone:"",Email:"",role:1,work:""},options:[{value:"信息与电子工程学院"},{value:"马克思主义学院"},{value:"管理工程与电子商务学院"},{value:"环境科学与工程学院"},{value:"工商管理学院"},{value:"旅游与城乡规划学院"},{value:"财务与会计学院"},{value:"统计与数学学院"},{value:"经济学院"},{value:"食品与生物工程学院"},{value:"艺术设计学院"},{value:"计算机与信息工程学院"},{value:"法学院"},{value:"人文与传播学院"},{value:"公共管理学院"},{value:"外国语学院"},{value:"东方语言文化学院"},{value:"金融学院"}],rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],academy:[{required:!0,message:"请选择学院与输入班级",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"blur"}],classroom:[{required:!0,message:"请输入班级",trigger:"blur"}],mobilePhone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],teacherCardId:[{required:!0,message:"请输入教师卡卡号",trigger:"blur"},{min:10,max:10,message:"输入教师卡卡号格式不正确",trigger:"blur"}],address:[{required:!0,message:"请输入住房位置",trigger:"blur"}],emergencyContact:[{required:!0,message:"请输入紧急联系人姓名",trigger:"blur"}],emergencyContactMobilePhone:[{required:!0,message:"请输入紧急人联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],Email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],work:[{required:!0,message:"请输入教师职位",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),Object(l["addNewTeacher"])({name:r.form.name,gender:r.form.gender,academy:r.form.academy,address:r.form.address,mobilephone:r.form.mobilePhone,teacherCardId:r.form.teacherCardId,emergencyContact:r.form.emergencyContact,emergencyContactMobilePhone:r.form.emergencyContactMobilePhone,email:r.form.Email,role:r.form.role,work:r.form.work})}))},resetForm:function(e){this.$refs[e].resetFields()}}},m=n,i=t("2877"),s=function(e){e.options.__source="src/views/function/query/addTeacherInformation/index.vue"},c=s,u=Object(i["a"])(m,a,o,!1,null,null,null);"function"===typeof c&&c(u);r["default"]=u.exports},c49a:function(e,r,t){"use strict";t.r(r),t.d(r,"addNewTeacher",(function(){return o}));var a=t("9bd2");function o(e){return Object(a["a"])({url:"/Teacher/addNewTeacher",method:"post",data:e})}}}]);