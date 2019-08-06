<template>
  <div class="overlay">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 from-wrap">
          <transition
            name="custom-classes-transition"
            enter-active-class="animated slideInTop"
            leave-active-class="animated fadeOut"
          >
            <div class="alert alert-success" v-if="show">
              <strong>{{successful}}</strong>
            </div>
          </transition>
          <div class="form-wrap p-5">
            <h3 class style="align-text: start;">Add New Product</h3>
            <div>
              <v-form
                ref="form"
                class="pt-3"
                v-model="valid"
                lazy-validation
                @submit.prevent="createproduct"
              >
                <div class="row">
                  <div class="col-md-12">
                    <v-text-field
                      type="text"
                      :rules="productNameRules"
                      v-model="productName"
                      label="Product Name"
                      required
                    ></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-text-field
                      type="number"
                      :rules="productPriceRules"
                      v-model="productPrice"
                      label="Product Price"
                      required
                    ></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-text-field
                      type="text"
                      :rules="productIngredientRules"
                      v-model="productIngredient"
                      label="Product Ingredient"
                      required
                    ></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-2">
                      <input
                        type="file"
                        required
                        class="form-control-file"
                        name="upLoadFile"
                        @change="onSelectedFile"
                      >
                    </div>
                  </div>
                  <small
                    class="ml-3 mt-2"
                  >Minimum of 8 characters with a mix of letters, numbers & symbols</small>
                </div>
                <div class="row justify-content-center mt-1 p-3">
                  <v-btn
                    class="curve w-100 text-white"
                    type="submit"
                    style="background-color:#4fc7b3;"
                  >Submit</v-btn>
                </div>
                <div class="row justify-content-center mt-2">
                  <div class>
                    <span>Dont have an account?
                      <router-link to="register">Click here</router-link>
                    </span>
                  </div>
                </div>
              </v-form>
              <div>
                <!-- <img src="../../assets/productImage/single-project-07-img3.jpg" class="img-fluid" alt> -->
                <img :src="productImg" class="img-fluid" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import authenticationService from "./../../services/authenticationService.js";

export default {
  data() {
    return {
      show: "",
      successful: "",
      valid: true,
      productName: "",
      productNameRules: [v => !!v || "Product name is required"],
      productIngredient: "",
      productIngredientRules: [v => !!v || "Product ingredient is required"],
      productImg: "",
      productPrice: "",
      productPriceRules: [v => !!v || "Product price is required"]
    };
  },
  mounted() {
    this.removeMsg();
  },
  methods: {
    removeMsg() {
      let vueInstance = this;
      setInterval(() => {
        vueInstance.show = false;
      }, 4000);
      thos.show = true;
    },
    createproduct: async function() {
      try {
        if (this.$refs.form.validate()) {
          const response = await authenticationService.createProduct({
            productName: this.productName,
            productIngredient: this.productIngredient,
            productImg: this.productImg,
            productPrice: this.productPrice
          });
          if (response.data.status) {
            this.successful = response.data.success;
          }
          this.productName = "";
          this.productIngredient = "";
          this.productImg = null;
          this.productPrice = "";
          this.show = true;
        }
      } catch (error) {}
    },
    onSelectedFile(event) {
      let image = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = event => {
        this.productImg = event.target.result;
      };
    }
  }
};
</script>

<style>
.overlay {
  border-radius: 1rem;
  border: 1px solid #eee;
  margin: 1rem;
  box-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  max-width: 100%;
  background-color: #fff;
  /* background-image: linear-gradient(
    to right bottom,
    rgba(53, 151, 130, 0.85),
    rgba(32, 161, 118, 0.85)
  ); */
}
.form-wrap {
  /* border: 1px solid #454345; */
  /* box-shadow: 0 0.2rem 1.6rem rgba(0, 0, 0, 0.5); */
  border-radius: 2rem;
  background-color: #fff;
}
</style>