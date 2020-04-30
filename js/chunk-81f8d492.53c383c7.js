(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81f8d492","chunk-2d22b971"],{"027b":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("d2-container",[t("template",{slot:"header"},[e._v("查询管理教师信息")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.Teacherinfomation,border:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"gender",label:"性别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(r){return[1==r.row.gender?t("span",[e._v("男")]):t("span",[e._v("女")])]}}])}),t("el-table-column",{attrs:{prop:"academy",label:"学院",width:"180"}}),t("el-table-column",{attrs:{prop:"mobliephone",label:"移动手机",width:"200"}}),t("el-table-column",{attrs:{prop:"teachercardid",label:"教师卡卡号",width:"180"}}),t("el-table-column",{attrs:{prop:"address",label:"地址",width:"180"}}),t("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"250"}}),t("el-table-column",{attrs:{prop:"work",label:"工作"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editTeacherInfo(r)}}},[e._v("修改")])]}}])})],1),t("el-dialog",{attrs:{title:"修改教师信息",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"180px"}},[t("el-form-item",{attrs:{label:"教师名称",prop:"name"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"教师性别",prop:"gender"}},[t("el-radio-group",{model:{value:e.form.gender,callback:function(r){e.$set(e.form,"gender",r)},expression:"form.gender"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),t("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"教师学院与班级",prop:"academy"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.academy,callback:function(r){e.$set(e.form,"academy",r)},expression:"form.academy"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.value,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"教师联系方式",prop:"mobilePhone"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.mobilePhone,callback:function(r){e.$set(e.form,"mobilePhone",r)},expression:"form.mobilePhone"}})],1),t("el-form-item",{attrs:{label:"教师地址",prop:"address"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.address,callback:function(r){e.$set(e.form,"address",r)},expression:"form.address"}})],1),t("el-form-item",{attrs:{label:"教师紧急联系人",prop:"emergencyContact"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContact,callback:function(r){e.$set(e.form,"emergencyContact",r)},expression:"form.emergencyContact"}})],1),t("el-form-item",{attrs:{label:"教师紧急联系人联系方式",prop:"emergencyContactMobilePhone"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.emergencyContactMobilePhone,callback:function(r){e.$set(e.form,"emergencyContactMobilePhone",r)},expression:"form.emergencyContactMobilePhone"}})],1),t("el-form-item",{attrs:{label:"教师邮箱",prop:"Email"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.Email,callback:function(r){e.$set(e.form,"Email",r)},expression:"form.Email"}})],1),t("el-form-item",{attrs:{label:"教师职位",prop:"work"}},[t("el-input",{staticStyle:{width:"200px"},model:{value:e.form.work,callback:function(r){e.$set(e.form,"work",r)},expression:"form.work"}})],1),t("el-form-item",[t("footer"),t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("form")}}},[e._v("立即修改")]),t("el-button",{on:{click:function(r){return e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)],2)},a=[],l=(t("b0c0"),t("f02c")),n={data:function(){return{Teacherinfomation:"",dialogVisible:!1,form:{name:"",gender:0,academy:"",mobilePhone:"",teacherCardId:"",address:"",emergencyContact:"",emergencyContactMobilePhone:"",Email:"",role:1,work:""},options:[{value:"信息与电子工程学院"},{value:"马克思主义学院"},{value:"管理工程与电子商务学院"},{value:"环境科学与工程学院"},{value:"工商管理学院"},{value:"旅游与城乡规划学院"},{value:"财务与会计学院"},{value:"统计与数学学院"},{value:"经济学院"},{value:"食品与生物工程学院"},{value:"艺术设计学院"},{value:"计算机与信息工程学院"},{value:"法学院"},{value:"人文与传播学院"},{value:"公共管理学院"},{value:"外国语学院"},{value:"东方语言文化学院"},{value:"金融学院"}],rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],academy:[{required:!0,message:"请选择学院与输入班级",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"blur"}],classroom:[{required:!0,message:"请输入班级",trigger:"blur"}],mobilePhone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],teacherCardId:[{required:!0,message:"请输入教师卡卡号",trigger:"blur"},{min:10,max:10,message:"输入教师卡卡号格式不正确",trigger:"blur"}],address:[{required:!0,message:"请输入住房位置",trigger:"blur"}],emergencyContact:[{required:!0,message:"请输入紧急联系人姓名",trigger:"blur"}],emergencyContactMobilePhone:[{required:!0,message:"请输入紧急人联系方式",trigger:"blur"},{min:8,max:11,message:"输入电话格式不正确",trigger:"blur"}],Email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],work:[{required:!0,message:"请输入教师职位",trigger:"blur"}]}}},mounted:function(){this.createPage()},methods:{createPage:function(){var e=this;Object(l["getAllTeacherInformation"])({}).then((function(r){e.Teacherinfomation=r}))},editTeacherInfo:function(e){this.dialogVisible=!0,this.form.name=e.row.name,this.form.gender=e.row.gender,this.form.mobilePhone=e.row.mobliephone,this.form.teacherCardId=e.row.teachercardid,this.form.emergencyContact=e.row.emergencycontact,this.form.emergencyContactMobilePhone=e.row.emergencycontactmobilephone,this.form.Email=e.row.email,this.form.work=e.row.work,this.form.academy=e.row.academy,this.form.address=e.row.address},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),Object(l["editTeacherInformation"])({name:r.form.name,gender:r.form.gender,academy:r.form.academy,address:r.form.address,mobilephone:r.form.mobilePhone,teacherCardId:r.form.teacherCardId,emergencyContact:r.form.emergencyContact,emergencyContactMobilePhone:r.form.emergencyContactMobilePhone,email:r.form.Email,role:r.form.role,work:r.form.work}).then((function(e){e.data;r.createPage(),r.dialogVisible=!1}))}))}}},i=n,m=t("2877"),c=function(e){e.options.__source="src/views/function/query/teacherinformation/index.vue"},s=c,u=Object(m["a"])(i,o,a,!1,null,null,null);"function"===typeof s&&s(u);r["default"]=u.exports},f02c:function(e,r,t){"use strict";t.r(r),t.d(r,"getAllTeacherInformation",(function(){return a})),t.d(r,"editTeacherInformation",(function(){return l}));var o=t("9bd2");function a(){return Object(o["a"])({url:"/Teacher/getAllTeacherInfo",method:"post"})}function l(e){return Object(o["a"])({url:"/Teacher/editTeacherInfo",method:"post",data:e})}}}]);