import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task from "../views/Task.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Task',
    component: Task
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
