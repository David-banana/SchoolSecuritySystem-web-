(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2d47"],{"267d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{attrs:{type:"card"}},[n("p",{staticClass:"d2-mt-0"},[e._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),n("el-input",{attrs:{placeholder:"input here"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("p",[e._v("关闭标签页")]),n("el-button-group",[n("el-button",{on:{click:e.handleCloseCurrent}},[n("d2-icon",{attrs:{name:"times"}}),e._v(" 当前 ")],1),n("el-button",{on:{click:e.handleCloseLeft}},[n("d2-icon",{attrs:{name:"arrow-left"}}),e._v(" 左侧 ")],1),n("el-button",{on:{click:e.handleCloseRight}},[e._v(" 右侧 "),n("d2-icon",{attrs:{name:"arrow-right"}})],1),n("el-button",{on:{click:e.handleCloseOther}},[e._v(" 其它 "),n("d2-icon",{attrs:{name:"times"}})],1),n("el-button",{on:{click:e.closeAll}},[e._v(" 全部 "),n("d2-icon",{attrs:{name:"times-circle"}})],1)],1),n("p",[e._v("刷新")]),n("el-button-group",[n("el-button",{on:{click:e.handleCleanCacheAndRefreshCurrent}},[n("d2-icon",{attrs:{name:"refresh"}}),e._v(" 清空当前页缓存并刷新 ")],1),n("el-button",{on:{click:e.handleCleanCacheAndRefreshAll}},[n("d2-icon",{attrs:{name:"refresh"}}),e._v(" 清空所有缓存并刷新 ")],1)],1)],1)},l=[],o=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("5319"),n("159b"),n("ade3")),a=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={name:"demo-playground-store-page",data:function(){return{value:""}},methods:i({},Object(a["d"])("d2admin/page",["keepAliveRemove","keepAliveClean"]),{},Object(a["b"])("d2admin/page",["close","closeLeft","closeRight","closeOther","closeAll"]),{handleCloseCurrent:function(){this.close({tagName:this.$route.fullPath})},handleCloseLeft:function(){this.closeLeft({tagName:this.$route.fullPath})},handleCloseRight:function(){this.closeRight({tagName:this.$route.fullPath})},handleCloseOther:function(){this.closeOther({tagName:this.$route.fullPath})},handleCleanCacheAndRefreshCurrent:function(){this.keepAliveRemove(this.$route.fullPath),this.$nextTick(this.$router.replace("/refresh"))},handleCleanCacheAndRefreshAll:function(){this.keepAliveClean(),this.$nextTick(this.$router.replace("/refresh"))}})},u=s,h=n("2877"),d=function(e){e.options.__source="src/views/demo/playground/store/page/index.vue"},f=d,p=Object(h["a"])(u,r,l,!1,null,null,null);"function"===typeof f&&f(p);t["default"]=p.exports}}]);