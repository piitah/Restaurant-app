<template>
  <div class="section2 container">
    <h3 class="menu-title">Your Special Order Here</h3>
    <div class="row justify-content-center">
      <div class="menu-underlin">&nbsp;</div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="food-menu row">
          <div class="col-md-4 mb-3" v-for="product in products" :key="product._id">
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
                  Expedita, molestiae! 
                </div>

                <v-btn class="curve order-btn mb-3" @click.prevent="addtoCart(product)">Add to cart</v-btn>
              </div>
            </div>
          </div>

          <div class="mx-auto">
            <router-link to="/viewMenu" exact>
              <v-btn class="curve orbtn mb-3">View More</v-btn>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <b-list-group>
          <b-list-group-item
            href="#"
            active
            class="flex-column align-items-start"
            style="background-color: #133b35 !important;"
          >
            <div class="d-flex">
              <h5 class="mx-auto">Special Offers</h5>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img src="../assets/productImage/beef1.jpg" class="img-fluid h-100 w-100" alt>
              </span>
              <small
                class="text-muted h-100 ml-2"
              >Donec id elit non mi porta Don Donec id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img src="../assets/productImage/beef2.jpg" class="img-fluid h-100 w-100" alt>
              </span>
              <small
                class="text-muted h-100 ml-2"
              >Donec id elit non mi porta Don Donec id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img src="../assets/productImage/beef3.jpg" class="img-fluid h-100 w-100" alt>
              </span>
              <small
                class="text-muted h-100 ml-2"
              >porta Don Donec id elit non Donec id elit non mi mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img
                  src="../assets/productImage/single-project-07-img11.jpg"
                  class="img-fluid h-100 w-100"
                  alt
                >
              </span>
              <small
                class="text-muted h-100 ml-2"
              >porta Don DonecDonec id elit non mi id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img src="../assets/productImage/beef6.jpg" class="img-fluid h-100 w-100" alt>
              </span>
              <small
                class="text-muted h-100 ml-2"
              >Donec id elit non mi porta Don Donec id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img
                  src="../assets/productImage/single-project-07-img8.jpg"
                  class="img-fluid h-100 w-100"
                  alt
                >
              </span>
              <small
                class="text-muted h-100 ml-2"
              >Donec id elit non mi porta Don Donec id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div class="m-0 p-0" style="display:flex; align-items:stretch">
              <span class="mb-1 h-100 w-75 m-0 p-0">
                <img src="../assets/productImage/beef7.jpg" class="img-fluid h-100 w-100" alt>
              </span>
              <small
                class="text-muted h-100 ml-2"
              >Donec id elit non mi porta Don Donec id elit non mi portaec id elit non mi porta.</small>
            </div>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start m-o p-0 p-2">
            <div
              class="m-0 p-0 justify-content-center"
              style="display:flex; align-items:stretch"
            >More</div>
          </b-list-group-item>
        </b-list-group>
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
    this.products = response.splice(0, 15);
  },
  methods: {
    addtoCart(product) {
      console.log(product);
      this.$store.commit("addToCart", {
        product: product
      });
      // this.$swal({
      //   type: "success",
      //   title: "Items Added successful",
      //   text: "Thanks for using clartt",
      //   showConfirmbutton: true
      // });
    }
  }
};
</script>

<style>
.menu-title {
  font-family: cursive !important;
  font-size: 400;
  font-weight: 500;
}
.menu-underlin {
  border: 2px solid #133b35;
  padding: 0 !Important;
  margin: 0 0 2rem;
  width: 10% !important;
  height: 1px !important;
  text-align: center;
}
.menu-card-details {
  background-color: #fff;
}
</style>