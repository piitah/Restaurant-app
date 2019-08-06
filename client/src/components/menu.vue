<template>
  <div class="menu-wrapper row justify-content-center">
    <div class="menu-header">
      <h3 class="menu-title">Trend now foods in shop</h3>
      <div class="row justify-content-center">
        <div class="menu-underlin">&nbsp;</div>
      </div>
    </div>
    <div class="row w-100 mt-2">
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
    this.products = response.slice(0, 4);
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
.menu-wrapper {
  background-color: #fff;
}
.menu-header {
  padding-top: 0.8rem;
  color: black;
  display: block;
  width: 40%;
  text-align: center;
}
.menu-title {
  font-family: cursive !important;
  font-size: 400;
  font-weight: 500;
}
.menu-subtitle {
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.menu-underlin {
  border: 2px solid #133b35;
  padding: 0 !Important;
  margin: 0 0 2rem;
  width: 20% !important;
  height: 1px !important;
  text-align: center;
}
.menu-card {
  border: 1px solig gray;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.5);
  padding: 0;
  margin-bottom: 1rem;
  z-index: 9;
}
.menu-card:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in;
  z-index: 99;
}
.menu-card:hover .menu-card img {
  /* background-color: red; */
}
.menu-desc {
  color: #999 !important;
  padding: 0.4rem;
  text-align: start !important;
}
.order-btn {
  color: #fff !important;
  background-color: #446967 !important;
  border-radius: 1rem !important;
}
.order-btn:active {
  outline: none;
  border: 0px;
}
</style>
