(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9155be8e","chunk-2d0d7248"],{"75ae":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("el-row",[a("el-col",{attrs:{span:12}},[a("h2",{staticClass:"d2-mt-0"},[e._v("活动申报")])])],1),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"活动名称",prop:"activityName"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.form.activityName,callback:function(t){e.$set(e.form,"activityName",t)},expression:"form.activityName"}})],1),a("el-form-item",{attrs:{label:"活动区域",prop:"place"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.form.place,callback:function(t){e.$set(e.form,"place",t)},expression:"form.place"}})],1),a("el-form-item",{attrs:{label:"活动开始时间",prop:"startTime"}},[a("el-col",{attrs:{span:4}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:e.form.startDate,callback:function(t){e.$set(e.form,"startDate",t)},expression:"form.startDate"}})],1),a("el-col",{attrs:{span:4}},[a("el-time-picker",{staticStyle:{width:"200px"},attrs:{placeholder:"选择开始时间"},model:{value:e.form.startTime,callback:function(t){e.$set(e.form,"startTime",t)},expression:"form.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"活动结束时间",prop:"endTime"}},[a("el-col",{attrs:{span:4}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1),a("el-col",{attrs:{span:4}},[a("el-time-picker",{staticStyle:{width:"200px"},attrs:{placeholder:"选择结束时间"},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1)],1),a("el-form-item",{attrs:{label:"申请人姓名",prop:"applicantName"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.form.applicantName,callback:function(t){e.$set(e.form,"applicantName",t)},expression:"form.applicantName"}})],1),a("el-form-item",{attrs:{label:"申请人联系方式",prop:"applicanttel"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.form.applicanttel,callback:function(t){e.$set(e.form,"applicanttel",t)},expression:"form.applicanttel"}})],1),a("el-form-item",{attrs:{label:"活动级别",prop:"rank"}},[a("el-radio-group",{model:{value:e.form.rank,callback:function(t){e.$set(e.form,"rank",t)},expression:"form.rank"}},[a("el-radio",{attrs:{label:"0",name:"rank",value:"0"}},[e._v("省级")]),a("el-radio",{attrs:{label:"1",name:"rank",value:"1"}},[e._v("市级")]),a("el-radio",{attrs:{label:"2",name:"rank",value:"2"}},[e._v("校级")]),a("el-radio",{attrs:{label:"3",name:"rank",value:"3"}},[e._v("院级")]),a("el-radio",{attrs:{label:"4",name:"rank",value:"4"}},[e._v("其他")])],1)],1),a("el-form-item",{attrs:{label:"承办学院",prop:"college"}},[a("el-select",{attrs:{placeholder:"请选择学院"},model:{value:e.form.college,callback:function(t){e.$set(e.form,"college",t)},expression:"form.college"}},[a("el-option",{attrs:{label:"信息与电子工程学院",value:"信息与电子工程学院"}}),a("el-option",{attrs:{label:"马克思主义学院",value:"马克思主义学院"}}),a("el-option",{attrs:{label:"环境科学与工程学院",value:"环境科学与工程学院"}}),a("el-option",{attrs:{label:"工商管理学院",value:"工商管理学院"}}),a("el-option",{attrs:{label:"旅游与城乡规划学院",value:"旅游与城乡规划学院"}}),a("el-option",{attrs:{label:"财务与会计学院",value:"财务与会计学院"}}),a("el-option",{attrs:{label:"统计与数学学院",value:"统计与数学学院"}}),a("el-option",{attrs:{label:"经济学院",value:"经济学院"}}),a("el-option",{attrs:{label:"食品与生物工程学院",value:"食品与生物工程学院"}}),a("el-option",{attrs:{label:"艺术设计学院",value:"艺术设计学院"}}),a("el-option",{attrs:{label:"计算机与信息工程学院",value:"计算机与信息工程学院"}}),a("el-option",{attrs:{label:"法学院",value:"法学院"}}),a("el-option",{attrs:{label:"人文与传播学院",value:"人文与传播学院"}}),a("el-option",{attrs:{label:"公共管理学院",value:"公共管理学院"}}),a("el-option",{attrs:{label:"外国语学院",value:"外国语学院"}}),a("el-option",{attrs:{label:"东方语言文化学院",value:"东方语言文化学院"}}),a("el-option",{attrs:{label:"金融学院",value:"金融学院"}})],1)],1),a("el-form-item",{attrs:{label:"活动类别",prop:"type"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),a("el-form-item",{attrs:{label:"活动描述",prop:"activityDescription"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea"},model:{value:e.form.activityDescription,callback:function(t){e.$set(e.form,"activityDescription",t)},expression:"form.activityDescription"}})],1),a("el-form-item",[a("footer"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("立即创建")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重置")]),a("el-button",[e._v("取消")])],1)],1)],1)},r=[],i=a("760c"),o={data:function(){return{form:{avtivityName:"",place:"",startDate:"",startTime:"",endDate:"",endTime:"",applicantName:"",applicanttel:"",type:"",rank:"",activityDescription:"",college:""},rules:{activityName:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"}],place:[{required:!0,message:"请输入活动区域",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"}],startTime:[{required:!0,message:"请选择活动开始时间",trigger:"blue"}],endTime:[{required:!0,message:"请选择活动结束时间",trigger:"blue"}],applicantName:[{required:!0,message:"请输入申请人姓名",trigger:"blur"},{min:2,max:5,message:"请输入2到5个字符",trigger:"blur"}],applicanttel:[{required:!0,message:"请输入申请人联系方式",trigger:"blur"},{min:5,max:15,message:"长度在15个字符以内",trigger:"blur"}],rank:[{required:!0,message:"请选择活动级别",trigger:"blue"}],college:[{message:"请选择活动级别",trigger:"blue"}],type:[{required:!0,message:"请输入活动类别",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"}],activityDescription:[{required:!0,message:"请输入活动描述",trigger:"blur"},{min:1,max:200,message:"长度在200个字符以内",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),Object(i["ActivityApply"])({activityName:t.form.activityName,place:t.form.place,startDate:t.form.startDate,startTime:t.form.startTime,endDate:t.form.endDate,endTime:t.form.endTime,rank:t.form.rank,activityDescription:t.form.activityDescription,applicantName:t.form.applicantName,applicanttel:t.form.applicanttel,college:t.form.college,type:t.form.type})}))},resetForm:function(e){this.$refs[e].resetFields()}}},s=o,n=a("2877"),m=function(e){e.options.__source="src/views/function/activityManager/activityApply/index.vue"},p=m,c=Object(n["a"])(s,l,r,!1,null,null,null);"function"===typeof p&&p(c);t["default"]=c.exports},"760c":function(e,t,a){"use strict";a.r(t),a.d(t,"ActivityApply",(function(){return r}));var l=a("9bd2");function r(e){return Object(l["a"])({url:"/Activity/activityApply",method:"post",data:e})}}}]);