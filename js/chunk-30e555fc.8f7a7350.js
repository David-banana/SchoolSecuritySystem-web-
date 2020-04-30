(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e555fc","chunk-2d20e834","chunk-2d0de679"],{8605:function(n,t){n.exports="默认情况下， `D2 Crud` 是不具有竖直方向的边框的，如果需要，可以在 `options` 对象中传入一个 `border` 属性，它接受一个 `Boolean` ，设置为 `true` 即可启用。代码如下：\n"},a1a8:function(n,t,e){"use strict";e.r(t);var d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("d2-container",[e("template",{slot:"header"},[n._v("带边框表格")]),e("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:n.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:n.code}})],1),e("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},a=[],s=(e("8099"),e("8605")),o=e.n(s),r=e("b04d"),c={data:function(){return{doc:o.a,code:r["default"],columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],options:{border:!0}}}},i=c,u=e("2877"),l=function(n){n.options.__source="src/views/demo/d2-crud/demo3/index.vue"},m=l,p=Object(u["a"])(i,d,a,!1,null,null,null);"function"===typeof m&&m(p);t["default"]=p.exports},b04d:function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        border: true\n      }\n    }\n  }\n}\n<\/script>"}}]);