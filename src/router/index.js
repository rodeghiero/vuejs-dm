import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cadastro from '@/components/Cadastro'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
	routes: [
	    {
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
	    },
	    {
			path: '/cadastro',
			name: 'Cadastro',
			component: Cadastro
	    },
	    {
			path: '/login',
			name: 'Login',
			component: Login
	    },
	    {
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard
	    }
	],
	linkActiveClass: 'active'
})
