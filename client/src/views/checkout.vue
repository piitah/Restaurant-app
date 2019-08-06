<template>
  <div class="container">
    <div style="margin-top:7rem; margin-bottom: 3rem;">
      <div class="row justify-content-center pl-3 pr-3">
        <div class="col-md-4">
          <div class="login-wrapper">
            <div class="login-header" align="center">
              <h4>CHECKOUT</h4>
            </div>
            <span class="text-danger">{{error_msg}}</span>
            <v-form
              ref="form"
              class="pt-3"
              v-model="valid"
              lazy-validation
              @submit.prevent="login_account"
            >
              <div class="row">
                <div class="col-md-12">
                  <v-text-field
                    type="text"
                    :rules="nameRules"
                    v-model="name"
                    label="Enter Your Name"
                    required
                  ></v-text-field>
                </div>
                <div class="col-md-12">
                  <v-text-field
                    type="text"
                    :rules="addressRules"
                    v-model="address"
                    label="Your Address"
                    required
                  ></v-text-field>
                </div>
                <div class="col-md-12">
                  <v-text-field
                    type="number"
                    :rules="numberRules"
                    v-model="number"
                    label="Enter your phone number"
                    required
                  ></v-text-field>
                </div>
                <small
                  class="ml-3 mt-2"
                >Minimum of 8 characters with a mix of letters, numbers & symbols</small>
              </div>
              <div class="row justify-content-center mt-1 p-3">
                <v-btn
                  @click.prevent="orderNow"
                  class="curve w-100"
                  type="submit"
                  :disabled="!valid"
                  v-html="sign_up_btn"
                  style="background-color:#4fc7b3;"
                ></v-btn>
              </div>
              <div class="row justify-content-center mt-2">
                <div class>
                  <span>Dont have an account?
                    <router-link to="register">Click here</router-link>
                  </span>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import authenticationService from "../services/authenticationService";

export default {
  name: "checkout",
  data() {
    return {
      valid: true,
      address: "",
      nameRules: [v => !!v || "Address is required"],
      name: "",
      addressRules: [v => !!v || "Address is required"],
      number: "",
      numberRules: [v => !!v || "Number is required"],
      sign_up_btn: "Order Now"
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapState(["user"])
  },
  methods: {
    orderNow: async function() {
      if (this.$refs.form.validate()) {
        this.valid = false;
        try {
          const response = await authenticationService.orderNow({
            address: this.address,
            number: this.number,
            orders: this.cart,
            userId: this.user._id,
            name: this.name
          });
          this.$store.commit("success", response.data.success);
          this.$store.commit("checkout");
          this.$router.push({
            path: "/"
          });
          this.$store.commit("printMsg");
        } catch (error) {}
      }
    }
  }
};
</script>

<style>
</style>
