webpackJsonp([1],{"3RrP":function(t,e){},"A+Vm":function(t,e,a){t.exports=a.p+"static/img/b.c81dcc6.jpg"},"B+sm":function(t,e){},FNEL:function(t,e){},FTfc:function(t,e){},N0tr:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("aozt"),s=a.n(n),o={apiUrl:"//admin",uploadUrl:"/localhost",imgUrl:"/img",catgList:[{name:"美食",val:"1"},{name:"美妆",val:"2"},{name:"服饰",val:"3"},{name:"健身",val:"4"},{name:"家居",val:"5"}],formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm";/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in a)if(new RegExp("("+i+")").test(e)){var n=a[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:this.padLeftZero(n))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)}},r={get:function(t){return s.a.defaults.withCredentials=!0,s.a.get(o.apiUrl+t)},post:function(t,e){return s.a.post(o.apiUrl+t,e)}},l={data:function(){return{name:"",pwd:"",msg:"",err:"",day:0}},created:function(){var t=this;r.get("/login/api").then(function(e){e.data.user?(t.name=e.data.user.name,t.day=Math.ceil((Date.now()-Date.parse(e.data.user.regidate))/3600/24/1e3),t.isLogin=!0,t.$emit("login",{user:e.data.user}),console.log("logined")):console.log("no login")})},methods:{submit:function(){var t=this;r.post("/login/api",{name:this.name,pwd:this.pwd}).then(function(e){e.data&&(t.msg=e.data.msg,t.err=e.data.err,e.data.user&&e.data.user.regidate&&(t.day=Math.ceil((Date.now()-Date.parse(e.data.user.regidate))/3600/24/1e3)),t.err||t.$emit("login",{user:e.data.user})),console.log(e.data)}).catch(function(t){console.log(t)})},loginout:function(){var t=this;r.get("/login/out").then(function(e){t.msg=e.msg})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",[a("label",[t._v("用户名：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",[a("label",[t._v("密码：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",name:"pwd"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),a("button",{on:{click:t.submit}},[t._v("登录")]),t._v(" "),t.msg?a("p",{staticClass:"msg"},[t._v(t._s(t.msg))]):t._e(),t._v(" "),t.err?a("p",{staticClass:"err"},[t._v(t._s(t.err))]):t._e()])},staticRenderFns:[]};var u={name:"app",components:{login:a("Z0/y")(l,c,!1,function(t){a("n5pn")},"data-v-5177cfca",null).exports},data:function(){return{isLogin:!1,user:{name:""},activeName:"首页",menu:[{name:"首页",path:"/"},{name:"管理",child:[{name:"文章管理",path:"/manage/article"},{name:"用户管理",path:"/manage/user"}]},{name:"统计",child:[{name:"用户分析",path:"/statistics/user"}]}]}},mounted:function(){var t=this;r.get("/login/api").then(function(e){console.log("res=",e),e.data.user?(t.user=e.data.user,t.isLogin=!0,console.log("logined")):console.log("no login")})},methods:{login:function(t){this.isLogin=!0,this.user=t.user},loginOut:function(){var t=this;r.get("/login/api/out").then(function(e){t.msg=e.msg,t.isLogin=!1})},menuClick:function(t){this.activeName=t.target.innerText}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.isLogin?i("section",{staticClass:"admin"},[i("div",{staticClass:"left"},[i("div",{staticClass:"head-img"},[i("img",{attrs:{src:a("A+Vm"),alt:""}}),t._v(" "),i("p",[t._v(t._s(t.user.name)+" 管理员")])]),t._v(" "),i("div",{staticClass:"router"},t._l(t.menu,function(e){return i("ul",[i("li",[e.path?i("router-link",{class:{active:e.name==t.activeName},attrs:{to:e.path},nativeOn:{click:function(e){return t.menuClick(e)}}},[t._v(t._s(e.name))]):i("p",[t._v(t._s(e.name))])],1),t._v(" "),t._l(e.child,function(e){return i("li",[e.path?i("router-link",{class:{active:e.name==t.activeName},attrs:{to:e.path},nativeOn:{click:function(e){return t.menuClick(e)}}},[t._v(t._s(e.name))]):i("p",[t._v(t._s(e.name))])],1)})],2)}))]),t._v(" "),i("div",{staticClass:"right"},[i("p",{staticClass:"header"},[t._v("管理后台"),i("span",{staticClass:"loginout",on:{click:t.loginOut}},[t._v("退出")])]),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{staticClass:"router-content"})],1)],1)]):i("login",{on:{login:t.login}})],1)},staticRenderFns:[]};var m=a("Z0/y")(u,d,!1,function(t){a("FTfc"),a("yimP")},"data-v-785ef724",null).exports,v=a("/ocq"),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("transition",{attrs:{name:this.transitionName}},[e("router-view",{staticClass:"child-view"})],1)],1)},staticRenderFns:[]},f=a("Z0/y")({data:function(){return{transitionName:"out-in"}},watch:{$route:function(t,e){this.transitionName=t.name<e.name?"slide-right":"slide-left"}}},p,!1,null,null,null).exports,g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("transition",{attrs:{name:this.transitionName}},[e("router-view",{staticClass:"child-view"})],1)],1)},staticRenderFns:[]},h=a("Z0/y")({data:function(){return{transitionName:"out-in",path:this.$route.path}},watch:{$route:function(t,e){this.transitionName=t.name<e.name?"slide-right":"slide-left"}}},g,!1,null,null,null).exports,_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"foo"},[t._v("用户管理")]),t._v(" "),a("ul",t._l(t.list,function(e){return a("li",[a("span",[t._v(t._s(e))])])}))])},staticRenderFns:[]},w=a("Z0/y")({data:function(){return{list:["hd","dh","hx","lal"]}}},_,!1,null,null,null).exports,y=a("mvHQ"),C=a.n(y),b=(a("3RrP"),a("4U23")),x=a.n(b),L=a("woOf"),I=a.n(L),k=a("BO1k"),D=a.n(k),E={props:["callback","uploadUrl","maxSize"],data:function(){return{}},methods:{uploadImg:function(t){console.log(t.target.files);var e=this,a=!0,i=!1,n=void 0;try{for(var s,o=D()(t.target.files);!(a=(s=o.next()).done);a=!0){var r=s.value,l=r.name;this.imgResize(r,function(t){var a=new FormData;a.append("artifile",t);var i=new XMLHttpRequest;i.open("post",e.uploadUrl),i.responseType="json",i.send(a),i.onload=function(){200==i.status&&(console.log(i.response.files,l),e.callback(i.response.files))}})}}catch(t){i=!0,n=t}finally{try{!a&&o.return&&o.return()}finally{if(i)throw n}}},imgResize:function(t,e){var a=new FileReader,i=this;a.onload=function(){var a=new Image;a.src=this.result,a.onload=function(){var n=this.naturalWidth,s=this.naturalHeight,o=0,r=0,l=I()({width:500,height:500,level:.6},i.maxSize);if(!(n>l.width||s>l.height))return e(t);var c=Math.max(n/l.width,s/l.height);o=n/c,r=s/c;var u=document.createElement("canvas"),d=u.getContext("2d");window.navigator.userAgent.indexOf("iPhone")>0?(u.width=r,u.height=o,d.rorate(90*Math.PI/180),d.drawImage(a,0,-r,o,r)):(u.width=o,u.height=r,d.drawImage(a,0,0,o,r));var m=u.toDataURL("image/jpeg",l.level);i.convertBlob(window.atob(m.split(",")[1]),e)}},a.readAsDataURL(t)},convertBlob:function(t,e){for(var a,i=new ArrayBuffer(t.length),n=new Uint8Array(i),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);try{a=new Blob([i],{type:"image/jpg"})}catch(t){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===t.name&&window.BlobBuilder){var o=new BlobBuilder;o.append(i),a=o.getBlob("image/jpg")}}e(a)}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"a-upload",attrs:{href:"javascript:;"}},[e("input",{attrs:{type:"file",name:"coverImg",multiple:"multiple",accept:"image/*"},on:{change:this.uploadImg}}),this._v("选择图片\n")])},staticRenderFns:[]};var N=a("Z0/y")(E,$,!1,function(t){a("sQRK")},"data-v-64270662",null).exports,F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{foodTempHide:t.isHide},attrs:{id:"foodTemp"}},[a("div",{staticClass:"foodTemp"},[a("p",{staticClass:"top clearfix"},[a("span",[t._v("美食模板")]),t._v(" "),a("input",{attrs:{type:"button",value:"添加行"},on:{click:t.addLine}})]),t._v(" "),a("p",{staticClass:"food-title"},[t._v("食材")]),t._v(" "),a("ul",{staticClass:"lines"},t._l(t.foodLines,function(e,i){return a("li",{staticClass:"clearfix"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"item.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入食材"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.quality,expression:"item.quality",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入用量"},domProps:{value:e.quality},on:{input:function(a){a.target.composing||t.$set(e,"quality",a.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("input",{staticClass:"del",attrs:{type:"button",value:"X"},on:{click:function(e){t.del(i)}}})])})),t._v(" "),a("input",{staticClass:"btns",attrs:{type:"button",value:"保存"},on:{click:t.save}}),t._v(" "),a("input",{staticClass:"btns",attrs:{type:"button",value:"取消"},on:{click:t.cancel}})])])},staticRenderFns:[]};var T=a("Z0/y")({props:["isHide","foodLines"],data:function(){return{}},methods:{addLine:function(){this.foodLines.push({name:"",quality:""})},cancel:function(){this.foodLines=[{name:"",quality:""}],this.$emit("cancelTemp")},save:function(){this.$emit("saveTemp",this.foodLines)},del:function(t){this.foodLines.splice(t,1)}}},F,!1,function(t){a("sIlL")},null,null).exports,R={name:"vue-html5-editor",showModuleName:!1,icons:{text:"fa fa-pencil",color:"fa fa-paint-brush",font:"fa fa-font",align:"fa fa-align-justify",list:"fa fa-list",link:"fa fa-chain",unlink:"fa fa-chain-broken",tabulation:"fa fa-table",image:"fa fa-file-image-o",hr:"fa fa-minus",eraser:"fa fa-eraser",undo:"fa-undo fa","full-screen":"fa fa-arrows-alt",info:"fa fa-info"},image:{sizeLimit:1048576,upload:{url:o.uploadUrl+"/upload",headers:{},params:{},fieldName:"artifile"},compress:!0,width:500,height:500,quality:80,uploadHandler:function(t){var e=JSON.parse(t).files[0].name;console.log(e);var a=o.imgUrl+"/upload/"+e;return console.log(a),a}},language:"zh-cn",i18n:{"zh-cn":{align:"对齐方式",image:"图片",list:"列表",link:"链接",unlink:"去除链接",table:"表格",font:"文字","full screen":"全屏",text:"排版",eraser:"格式清除",info:"关于",color:"颜色","please enter a url":"请输入地址","create link":"创建链接",bold:"加粗",italic:"倾斜",underline:"下划线","strike through":"删除线",subscript:"上标",superscript:"下标",heading:"标题","font name":"字体","font size":"文字大小","left justify":"左对齐","center justify":"居中","right justify":"右对齐","ordered list":"有序列表","unordered list":"无序列表","fore color":"前景色","background color":"背景色","row count":"行数","column count":"列数",save:"确定",upload:"上传",progress:"进度",unknown:"未知","please wait":"请稍等",error:"错误",abort:"中断",reset:"重置"}},hiddenModules:["full-screen","info"],visibleModules:["text","color","font","align","list","link","unlink","tabulation","image","hr","eraser","undo"],modules:{}},U={components:{editor1:new x.a(R),foodTemp:T,uploadImg:N},directives:{focus:{inserted:function(t){t.focus()}}},data:function(){return{id:"",uploadUrl:o.uploadUrl+"/upload",foodTempHide:!0,catg:"-1",catgList:o.catgList,title:"",desc:"",content:"",foodList:[{name:"青菜",quality:"500g"},{name:"萝卜",quality:"300g"}],showFoodList:[],sliderImgs:[],coverImg:"",focusEditor:!1,tags:[],ifaddtag:!1,foodActive:-1,tagActive:-1,imgActive:-1}},computed:{},mounted:function(){var t=this,e=this.$route.params.id;e&&(this.id=e,r.get("/manage/article/api/"+e).then(function(e){console.log(e),e=e.data,t.title=e.title,t.catg=e.catg,t.content=e.details,t.foodList=e.spec,t.showFoodList=t.foodList.map(function(t){return{name:t.name,quality:t.quality}}),t.sliderImgs=e.sliderImgs,t.coverImg=e.coverImg,t.tags=e.tags}))},methods:{foodTemp:function(){this.foodTempHide=!1},cancelTemp:function(){this.foodTempHide=!0},saveTemp:function(t){this.foodTempHide=!0,this.foodList=t,this.showFoodList=this.foodList.map(function(t){return{name:t.name,quality:t.quality}})},showCoverImg:function(t){console.log(this.createImgUrl(t[0].name)),this.coverImg=this.createImgUrl(t[0].name)},showImgList:function(t){var e=this;t.forEach(function(t){return e.sliderImgs.push(e.createImgUrl(t.name))}),console.log(this.sliderImgs)},createImgUrl:function(t){return o.imgUrl+"/upload/"+t},editFocus:function(){this.focusEditor=!0,this.$refs.editor.focus()},editchange:function(t){this.content=t},addtag:function(){this.ifaddtag=!0},tagEnter:function(t){this.tagActive=t},tagLeave:function(){this.tagActive=-1},foodEnter:function(t){this.foodActive=t},foodLeave:function(t){this.foodActive=-1},sliderImgEnter:function(t){this.imgActive=t},sliderImgLeave:function(){this.imgActive=-1},tagblur:function(t){t.target&&t.target.value&&(this.tags.push({val:t.target.value,sclose:!1}),this.tagLeave()),this.ifaddtag=!1},deleteTag:function(t){this.tags.splice(t,1)},deleteFood:function(t){this.foodList.splice(t,1),this.showFoodList.splice(t,1)},deleteSliderImg:function(t){this.sliderImgs.splice(t,1)},save:function(t){var e=this,a={catg:this.catg,title:this.title,details:this.content,spec:C()(this.foodList),sliderImgs:C()(this.sliderImgs),coverImg:this.coverImg,tags:C()(this.tags)};this.id&&(a.modifyDate=new Date),t&&(a.publishDate=new Date),this.id?r.post("/manage/article/api/"+this.id,a).then(function(t){console.log(t),t.data.success&&(console.log("添加成功！"),e.$router.push({path:"/manage/article"}))}):r.post("/manage/article/api/add",a).then(function(t){console.log(t),t.data.success&&(console.log("添加成功！"),e.$router.push({path:"/manage/article"}))})}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("文章管理 / 新建文章")]),t._v(" "),a("section",{staticClass:"main clearfix"},[a("div",{staticClass:"arti-div"},[a("editor1",{ref:"editor",attrs:{content:t.content,height:500,"z-index":5,"auto-height":!1},on:{change:t.editchange}}),t._v(" "),t.focusEditor||t.content?t._e():a("p",{staticClass:"article-detail",on:{click:t.editFocus}},[t._v("请在这里编辑文章")]),t._v(" "),a("div",{staticClass:"customer"},[a("div",{staticClass:"item title"},[a("span",{staticClass:"item-name"},[t._v("标题：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[t._v("封面：")]),t._v(" "),a("uploadImg",{attrs:{callback:t.showCoverImg,uploadUrl:t.uploadUrl,maxSize:{width:600}}}),t._v(" "),t.coverImg?a("div",[a("span",{staticClass:"hasImg",style:{backgroundImage:"url("+t.coverImg+")"}})]):a("span",{staticClass:"noImg"})],1),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"item-name"},[t._v("分类：")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.catg,expression:"catg"}],staticClass:"catg",attrs:{name:"catg"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.catg=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"-1"}},[t._v("请选择")]),t._v(" "),t._l(t.catgList,function(e){return a("option",{domProps:{value:e.val}},[t._v(t._s(e.name))])})],2)]),t._v(" "),a("div",{staticClass:"item tags"},[a("span",{staticClass:"item-name"},[t._v("标签：")]),t._v(" "),t._l(t.tags,function(e,i){return a("span",{staticClass:"tag",on:{mouseenter:function(e){t.tagEnter(i)},mouseleave:t.tagLeave}},[t._v(t._s(e.val)+"\n\t\t\t\t\t\t\t"),a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.tagActive==i,expression:"tagActive==i"}],staticClass:"close",on:{click:function(e){t.deleteTag(i)}}},[t._v("X")])])],1)}),t._v(" "),t.ifaddtag?a("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"tagInput",attrs:{type:"text"},on:{blur:t.tagblur}}):t._e(),t._v(" "),a("span",{staticClass:"tag",attrs:{title:"添加标签"},on:{click:t.addtag}},[t._v("+")])],2),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.catg,expression:"catg==1"}],staticClass:"item food"},[a("span",{staticClass:"item-name"},[t._v("食材:")]),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"button",value:"添加食材"},on:{click:t.foodTemp}}),t._v(" "),a("section",{staticClass:"food-temp"},t._l(t.showFoodList,function(e,i){return a("div",{staticClass:"clearfix",class:{oddFood:i%2==0,evenFood:i%2==1,choosedFood:t.foodActive==i},on:{mouseenter:function(e){t.foodEnter(i)},mouseleave:function(e){t.foodLeave()}}},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("span",{attrs:{title:"删除"},on:{click:function(e){t.deleteFood(i)}}},[t._v("X")]),t._v(" "),a("span",[t._v(t._s(e.quality))])])}))]),t._v(" "),a("div",{staticClass:"item slider"},[a("span",{staticClass:"item-name"},[t._v("轮播图:")]),t._v(" "),a("uploadImg",{attrs:{callback:t.showImgList,uploadUrl:t.uploadUrl,maxSize:{width:600}}}),t._v(" "),t.sliderImgs.length?a("div",t._l(t.sliderImgs,function(e,i){return a("span",{staticClass:"hasImg sliderImg",style:{backgroundImage:"url("+e+")"},on:{mouseenter:function(e){t.sliderImgEnter(i)},mouseleave:function(e){t.sliderImgLeave()}}},[a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.imgActive==i,expression:"imgActive==i"}],staticClass:"close slider",on:{click:function(e){t.deleteSliderImg(i)}}},[t._v("X")])])],1)})):a("span",{staticClass:"noImg"})],1)])],1),t._v(" "),a("div",{staticClass:"footer"},[a("input",{attrs:{type:"button",value:"保存"},on:{click:t.save}}),t._v(" "),a("input",{attrs:{type:"button",value:"保存并发送"},on:{click:function(e){t.save(1)}}})])]),t._v(" "),a("foodTemp",{attrs:{"is-hide":t.foodTempHide,"food-lines":t.foodList},on:{saveTemp:t.saveTemp,cancelTemp:t.cancelTemp}})],1)},staticRenderFns:[]};var B=a("Z0/y")(U,A,!1,function(t){a("B+sm")},"data-v-2bca6c34",null).exports,q={data:function(){return{tabs:o.catgList,list:[],tabLeft:0,tabWidth:100,catg:-1,searchQry:""}},methods:{search:function(){var t=this,e="";this.searchQry&&(e+="search="+this.searchQry),this.catg&&-1!=this.catg&&(e+="&catg="+this.catg),r.get("/manage/article/api?"+e).then(function(e){t.list=e.data,t.list.forEach(function(t){t.date=t.modifyDate?o.formatDate(new Date(t.modifyDate)):o.formatDate(new Date(t.createDate))})})}},watch:{$route:function(t,e){var a=this;console.log(t);var i=t.params.catg;this.tabLeft=i?i*this.tabWidth:0,this.catg=i||-1;var n="";this.searchQry&&(n+="search="+this.searchQry),this.catg&&-1!=this.catg&&(n+="&catg="+this.catg),r.get("/manage/article/api?"+n).then(function(t){a.list=t.data,a.list.forEach(function(t){t.date=t.modifyDate?o.formatDate(new Date(t.modifyDate)):o.formatDate(new Date(t.createDate))})})}},mounted:function(){var t=this,e=this.$route.params.catg,a="/manage/article/api";e?(this.catg=e,-1!=e&&(a+="?catg="+e)):this.catg=-1,r.get(a).then(function(e){t.list=e.data,t.list.forEach(function(t){t.date=t.modifyDate?o.formatDate(new Date(t.modifyDate)):o.formatDate(new Date(t.createDate))})})}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("ul",{staticClass:"tabs"},[a("li",{style:{width:t.tabWidth+"px"}},[a("router-link",{attrs:{to:"/manage/article"}},[t._v("文章管理")])],1),t._v(" "),t._l(t.tabs,function(e){return a("li",{style:{width:t.tabWidth+"px"}},[a("router-link",{attrs:{to:"/manage/article/catg/"+e.val}},[t._v(t._s(e.name))])],1)}),t._v(" "),a("li",{staticClass:"active-tab",style:{transform:"translateX("+t.tabLeft+"px)",width:t.tabWidth+"px"}})],2),t._v(" "),a("div",{staticClass:"search"},[a("span",[t._v("全部(共"+t._s(t.list.length)+"条)")]),t._v(" "),a("router-link",{staticClass:"btnAdd",attrs:{to:"/manage/article/add"}},[t._v("新建文章")]),t._v(" "),a("span",{staticClass:"search-bar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQry,expression:"searchQry"}],attrs:{type:"text",placeholder:"标题"},domProps:{value:t.searchQry},on:{input:function(e){e.target.composing||(t.searchQry=e.target.value)}}}),a("i",{staticClass:"fa fa-search",on:{click:t.search}})])],1),t._v(" "),a("transition-group",{staticClass:"articles",attrs:{name:"list-complete",tag:"ul"}},t._l(t.list,function(e,i){return a("li",{key:i,staticClass:"article list-complete-item"},[a("router-link",{attrs:{to:{path:"/manage/article/edit/"+e._id}}},[a("p",[t._v(t._s(e.title))]),t._v(" "),a("img",{staticStyle:{width:"100%",height:"70%"},attrs:{src:e.coverImg,alt:""}}),t._v(" "),a("p",[t._v("更新于 "+t._s(e.date))])])],1)}))],1)},staticRenderFns:[]};var H=a("Z0/y")(q,M,!1,function(t){a("N0tr")},null,null).exports,P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"foo"},[t._v("用户分析")]),t._v(" "),a("ul",t._l(t.list,function(e){return a("li",[a("span",[t._v(t._s(e))])])}))])},staticRenderFns:[]},z=a("Z0/y")({data:function(){return{list:["1","2","3","4"]}}},P,!1,null,null,null).exports,Z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("section",{staticClass:"user-count"},[a("p",[t._v("今日用户增长情况")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("新增人数(微信)")]),t._v(" "),a("p",{staticClass:"num"},[t._v("12")])]),t._v(" "),a("li",[a("p",[t._v("新增人数(注册)")]),t._v(" "),a("p",{staticClass:"num"},[t._v("32")])]),t._v(" "),a("li",[a("p",[t._v("总用户数")]),t._v(" "),a("p",{staticClass:"num"},[t._v("3896")])])])]),t._v(" "),a("section",{staticClass:"user-love"},[a("p",[t._v("用户喜好情况")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("美妆")]),t._v(" "),a("p",{staticClass:"num"},[t._v("29.1%")])]),t._v(" "),a("li",[a("p",[t._v("美食")]),t._v(" "),a("p",{staticClass:"num"},[t._v("29.1%")])]),t._v(" "),a("li",[a("p",[t._v("服饰")]),t._v(" "),a("p",{staticClass:"num"},[t._v("29.1%")])]),t._v(" "),a("li",[a("p",[t._v("健身")]),t._v(" "),a("p",{staticClass:"num"},[t._v("29.1%")])]),t._v(" "),a("li",[a("p",[t._v("家居")]),t._v(" "),a("p",{staticClass:"num"},[t._v("29.1%")])])])])])}]};var Q=a("Z0/y")({data:function(){return{transitionName:"out-in"}},watch:{$route:function(t,e){this.transitionName=t.name<e.name?"slide-right":"slide-left"}}},Z,!1,function(t){a("FNEL")},"data-v-26c75a9b",null).exports;i.a.use(v.a);var j=new v.a({mode:"history",base:"/admin",routes:[{path:"/",component:Q},{path:"/manage",component:h,children:[{path:"",component:H,name:"1"},{path:"article",component:H,name:"1"},{path:"article/add",component:B,name:"3"},{path:"article/catg/:catg",component:H,name:"2"},{path:"article/edit/:id",component:B,name:"4"},{path:"user",component:w,name:"5"}]},{path:"/statistics",component:f,children:[{path:"",component:z},{path:"user",component:z}]}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:j,components:{App:m},template:"<App/>"})},n5pn:function(t,e){},sIlL:function(t,e){},sQRK:function(t,e){},yimP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d25f5e87e0b3fb5d08c1.js.map