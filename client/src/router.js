import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
import login from "./views/login.vue"
import cart from "./views/cart.vue"
import checkout from "./views/checkout.vue"
import register from "./views/register.vue"
import index from "./views/index.vue"
import admin from "./views/admin/index.vue"
import viewMenu from "./views/viewMenu.vue"
import product from "./views/admin/addItem.vue"
import dashboard from "./views/admin/dashboard.vue"
import Store from "./views/admin/store.vue"
import order from "./views/admin/order.vue"
import customer from "./views/admin/customer.vue"
import editStore from "./views/admin/editStore.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/about",
    //   name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/",
      name: "index",
      component: index,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "register",
          name: "register",
          component: register
        },
        {
          path: "login",
          name: "login",
          component: login
        },
        {
          path: "cart",
          name: "cart",
          component: cart
        }, {
          path: "viewMenu",
          name: "viewMenu",
          component: viewMenu
        },
        {
          path: "checkout",
          name: "checkout",
          component: checkout
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: admin,
      children: [
        {
          path: "",
          name: "dashboard",
          component: dashboard
        },
        {
          path: "product",
          name: "product",
          component: product
        },
        {
          path: "customer",
          name: "customer",
          component: customer
        },
        {
          path: "Store",
          name: "Store",
          component: Store
        },
        {
          path: "order",
          name: "order",
          component: order
        },
        {
          path: "editstore/:id",
          name: "editStore",
          component: () =>
            import("./views/admin/editStore.vue")
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to) {
      return { x: 0, y: 0 }
    } else {
      return { x: 0, y: 0 }
    }
  }
});
