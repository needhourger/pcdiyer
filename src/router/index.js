const Home = import("../views/Home.vue")
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }
]
export default routes