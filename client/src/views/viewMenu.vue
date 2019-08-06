<template>
  <div class>
    <div class="container">
      <div class style="padding-top:6rem;">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <router-link
              tag="li"
              exact
              to="/"
              aria-current="page"
              active-class="active"
              class="breadcrumb-item"
              style="cursor:pointer;"
            >
              <span class>Home</span>
            </router-link>
            <router-link
              tag="li"
              exact
              to="/cart"
              active-class="active"
              class="breadcrumb-item active"
              aria-current="page"
              style="cursor:pointer;"
            >
              <span class>View Menu</span>
            </router-link>
          </ol>
        </nav>
      </div>

      <div class="col-md-12 mt-5">
        <div class="food-menu row">
          <div class="col-md-3 mb-3" v-for="product in products" :key="product._id">
            <div class="menu-card">
              <img :src="product.productImg" class="img-fluid" alt>
              <div class="menu-card-details">
                <div class="d-flex flex-row pt-3 mb-3 justify-content-start">
                  <div class="w-100">
                    <span class="ml-auto float-left pl-3">
                      <strong>{{product.productName}}</strong>
                    </span>
                  </div>
                  <div class="w-100">
                    <span class="mr-auto float-right pr-3">
                      <strong>$</strong>
                      <span class="text-danger">{{product.productPrice}}</span>
                    </span>
                  </div>
                </div>
                <div class="menu-desc ml-2">
                  <span>
                    <h5 style="color:#2c3e50 !important;">Ingredient</h5>
                  </span>
                  amet consectetur adipisicing elit.
                  Expedita, molestiae! Quo
                </div>

                <v-btn class="curve order-btn mb-3" @click.prevent="addtoCart(product)">Add to cart</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "../services/authenticationService.js";

export default {
  name: "menu",
  data() {
    return {
      products: null
    };
  },
  async mounted() {
    const response = (await authenticationService.getItems()).data;
    this.products = response;
  },
  methods: {
    addtoCart(product) {
      console.log(product);
      this.$store.commit("addToCart", {
        product: product
      });
    }
  }
};
</script>

<style>
</style>
