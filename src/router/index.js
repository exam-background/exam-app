import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import list from "../components/list.vue";
import store from '../store/index'
// import Login from "../views/Login/login.vue";
Vue.use(VueRouter);

const routes = [{
		// path: "/",
		// name: "Home",
		// component: Home,
		// children: [{
		// 	path: "/",
		// 	name: "list",
		// 	component: list,
		// }]
		path: "/",
		name: "Login",
		component: () =>
			import("../views/Login/login.vue")
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "about" */ "../views/About.vue")
	},
	{
		path: "/user",
		name: "user",
		component: () =>
			import( /* webpackChunkName: "about" */ "../views/user.vue")
	},
	{
		path: "/Login",
		name: "Login",
		component: () =>
			import("../views/Login/login.vue")
	},
	{
		path: "/detail",
		name: "detail",
		component: () =>
			import("../views/detail/detail.vue")
	},
	{
		path: "/Home",
		name: "Home",
		component: Home,
		children: [{
			path: "/",
			name: "list",
			component: list,
		}]
	},
	{
		path: "/Papers",
		name: "Papers",
		component: () =>
			import("../views/Papers.vue")
	},
	{
		path: "/Paper",
		name: "Paper",
		component: () =>
			import("../views/Paper.vue")
	},
	{
		path: "/ErrorPaper",
		name: "ErrorPaper",
		component: () =>
			import("../views/ErrorPaper.vue")
	}

];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(function(to, from, next) {
	if("/Login" == to.path){
		store.commit("set_isShowBar",false);
	}else{
		store.commit("set_isShowBar",true);
	}
	console.log('--' + localStorage.getItem('stuToken') + to.path)
	//alert("fdsfs");
	if (null == localStorage.getItem('stuToken')) {
		if (to.path !== '/Login') {
			return next('/Login')
		}
	}
	next()
})
export default router
