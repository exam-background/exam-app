(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e2c977"],{"31c4":function(t,e,n){"use strict";var i=n("a755"),s=n.n(i);s.a},a2c0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login_box"},[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.logoShow,expression:"logoShow"}],staticStyle:{position:"absolute",top:"43%","z-index":"10",width:"80%","margin-left":"10%","margin-right":"10%"},attrs:{color:"#550000",size:"100px",vertical:""}}),t._m(0),n("div",{staticClass:"content_box"},[n("div",{staticClass:"header"}),n("div",{staticClass:"login_content"},[n("van-form",{staticClass:"loginForm"},[n("van-field",{staticClass:"loginInput",attrs:{"input-align":"center",name:"用户名",placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{staticClass:"loginInput",attrs:{"input-align":"center",type:"password",name:"密码",placeholder:"密码"},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.onLogin(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{staticClass:"denglu",attrs:{round:"",block:"",type:"danger","native-type":"submit"},on:{click:t.onLogin}},[t._v(" 登录 ")])],1)],1)],1),n("div")])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"logo",align:"center"}},[i("img",{attrs:{src:n("cf05"),width:"100px",height:"100px"}})])}],a=n("2241"),o={data:function(){return{show:!1,value:"",username:"",password:"",verification:"",ausername:!1,logoShow:!1}},methods:{onLogin:function(){var t=this;if(""!=this.username)if(this.username.length>=6){var e=/[\u4E00-\u9FA5]/;if(e.test(this.username))a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"用户名格式有误~"}).then((function(){}));else if(""!=this.password)if(this.password.length>=6){e=/[\u4E00-\u9FA5]/;if(e.test(this.password))a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"密码格式有误~"}).then((function(){}));else{this.logoShow=!0;var n=this.$qs.stringify({loginName:this.username,loginPassword:this.password});this.$axios.post(this.$location.doLogin,n).then((function(e){200==e.data.status?(t.$store.commit("set_token",e.data.data),t.$router.push("/Home")):400==e.data.status&&(a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"账号或密码错误~"}).then((function(){})),t.logoShow=!1)})).catch((function(e){a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"网络错误，请稍后重试~"}).then((function(){})),t.logoShow=!1}))}}else a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"密码长度为6~12位~"}).then((function(){}));else a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"请输入密码~"}).then((function(){}))}else a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"用户名长度为6~12位~"}).then((function(){}));else a["a"].alert({theme:"round",title:"提示",width:"70%",height:"30%",message:"请输入用户名~"}).then((function(){}))}}},r=o,l=(n("31c4"),n("2877")),h=Object(l["a"])(r,i,s,!1,null,"df14f366",null);e["default"]=h.exports},a755:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-07e2c977.8af538cc.js.map