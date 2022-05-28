import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import AddRestu from './components/AddResto.vue';
import UpdateRestu from './components/UpdateRestu.vue';

const routes = [
  {
    path: "/",
    name: "HomeRoute",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignUpRoute",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LoginRoute",
    component: LoginPage,
  },
  {
    path:'/addRestu',
    name:'AddRestu',
    component:AddRestu
  },
  {
    path:'/updateRestu/:updateId',
    name:'UpdateRestu',
    component:UpdateRestu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
