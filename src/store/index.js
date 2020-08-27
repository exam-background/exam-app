import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin:false,
    token : "",
	isShowBar : false
  },
  mutations: {
	  set_isShowBar(state, isShowBar) {
	  state.isShowBar = isShowBar
	  },
	 set_token(state, token) {
	 state.token = token
	 localStorage.setItem("stuToken",token)
	 },
	 del_token(state) {
	 state.token = ''
	 localStorage.removeItem('stuToken')
	 },
	 set_hasLogin(state, hasLogin) {
	 state.hasLogin = hasLogin
	 },
	 del_hasLogin(hasLogin) {
	 state.hasLogin = false
	 }
  },
  actions: {},
  modules: {}
});
