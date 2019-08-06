import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userLoggedIn: false,
    cartEmpty: false,
    orderId: null,
    user: null,
    cart: {
      items: []
    },
    cartTotal: 0,
    message: "come on ",
    successMsg: 'Account has been successfully created',
    show: null,
    success: "Order was successful"
  },
  getters: {
    cartTotal: state => {
      let total = 0;

      let initialValue = 0;
      total = state.cart.items.reduce((totalPrice, item) => {
        return totalPrice += item.product.productPrice * item.quantity
      }, initialValue);
      return total;
    }
  },
  mutations: {
    checkcart: function (state) {
      if (state.cart.items !== null) {
        state.cartEmpty = true
      } else {
        state.cartEmpty = false
      }
    },
    success: function (state, payload) {
      state.success = payload
    },
    logout: function (state) {
      state.user = null;
      state.token = null
      state.userLoggedIn = false
      state.cart.items.splice(0, state.cart.items.length)
    },
    checkout: function (state) {
      state.cart.items.splice(0, state.cart.items.length)
    },
    increment: function (state, payload) {
      state.cart.items.map((item) => {
        if (payload.product._id === item.product._id) {
          return item.quantity++
        }
      })
    },
    decrement: function (state, payload) {
      state.cart.items.map((item) => {
        if (item.quantity === 1) return 0;
        if (payload.product._id === item.product._id) {
          return item.quantity--
        }
      })
    },
    addToCart(state, payload) {
      var cartItem = null;

      for (let index = 0; index < state.cart.items.length; index++) {
        var element = state.cart.items[index].product._id;
        if (element === payload.product._id) {
          cartItem = element;
        }
      }

      if (cartItem != null) {
        state.cart.items.map(function (item) {
          if (cartItem == item.product._id) {
            return item.quantity++
          }
        })
      } else {
        state.cart.items.push({
          product: payload.product,
          quantity: 1
        })
      }
    },
    printMsg(state) {
      let vueInstance = this;
      setTimeout(function () {
        vueInstance.state.show = false;
      }, 4000);
      this.state.show = true;
    },
    setToken(state, token) {
      state.token = token
      if (token) {
        state.userLoggedIn = true
      } else (
        state.userLoggedIn = false
      )
    },
    setUser(state, user) {
      state.user = user
      if (user) {
        state.userLoggedIn = true
      } else {
        state.userLoggedIn = false
      }
    },
    acc_created(state, successMsg) {
      state.successMsg = successMsg
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token)
    },
    setUser({ commit }, user) {
      commit("setUser", user)
    },
    acc_created({ commit }, successMsg) {
      commit("acc-created", successMsg)
    }
  }
});
