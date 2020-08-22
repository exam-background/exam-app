import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import list from "../components/list.vue";
import user from "../views/user.vue";
Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "Home",
		component: Home,
		children: [{
			path: "/",
			name: "list",
			component: list,
		}]
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
	}
	
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
