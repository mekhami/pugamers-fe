import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Post from './components/Post.vue'
import PostList from './components/PostList.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/post/:id', name: 'post', component: Post },
    { path: '/', name: 'home', component: PostList }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
