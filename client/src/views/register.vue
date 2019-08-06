<template>
  <div class="login-container">
    <div class="container">
      <div class="row justify-content-center pl-3 pr-3">
        <div class="col-md-4">
          <div class="login-wrapper">
            <div class="login-header" align="center">
              <h4>CREATE ACCOUNT</h4>
            </div>
            <div class="sep">
              <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="create_account">
                <div class="row">
                  <div class="w-100">
                    <span class="text-danger">{{error_msg}}</span>
                    <div class="col-md-12">
                      <v-text-field
                        type="email"
                        :rules="usernameRules"
                        v-model="username"
                        label="Username"
                        required
                      ></v-text-field>
                    </div>
                    <div class="col-md-12">
                      <v-text-field
                        type="email"
                        :rules="emailRules"
                        v-model="email"
                        label="Email address"
                        required
                      ></v-text-field>
                    </div>
                    <div class="col-md-12">
                      <v-text-field
                        type="password"
                        :rules="passwordRules"
                        v-model="password"
                        label="Password"
                        required
                      ></v-text-field>
                    </div>
                    <small
                      class="ml-3 mt-2"
                    >Minimum of 8 characters with a mix of letters, numbers & symbols</small>
                  </div>
                  <div class="col-md-12">
                    <v-text-field
                      type="email"
                      :rules="addressRules"
                      v-model="address"
                      label="Address"
                      required
                    ></v-text-field>
                  </div>
                </div>
                <div class="row justify-content-center mt-1 p-3">
                  <v-btn
                    :disabled="!valid"
                    class="curve w-100"
                    type="submit"
                    v-html="sign_up_btn"
                    style="background-color:#4fc7b3;"
                  ></v-btn>
                </div>
                <div class="row justify-content-center mt-2">
                  <div class>
                    <router-link to="/login">Already have an account? Sign in instead</router-link>
                  </div>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3 mt-2">
        <div class="d-flex w-100 flex-row align-items-baseline footer-text">
          <div class="w-75">&copy; 2018</div>
          <div class="flex-shrink-0 pl-2 pr-2">Help</div>
          <div class="flex-shrink-0 pl-2 pr-2">Privacy</div>
          <div class="flex-shrink-0 pl-2">Terms</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService.js";

export default {
  name: "register",
  data() {
    return {
      valid: true,
      error: null,
      sign_up_btn: "sign up",
      username: "",
      usernameRules: [v => !!v || "Username is required"],
      email: "",
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+/.test(v) || "Email must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password too weak"
      ],
      address: "",
      addressRules: [v => !!v || "address is required"],
      error_msg: ""
    };
  },
  methods: {
    create_account: async function() {
      if (this.$refs.form.validate()) {
        this.sign_up_btn = `<span><div class=""></div></span>`;
        this.valid = false;
        try {
          const response = await authenticationService.createAccount({
            username: this.username,
            email: this.email,
            password: this.password,
            address: this.address
          });
          if (response.data.status) {
            this.$store.dispatch("acc_created", response.data.success);
            this.$router.push({
              path: "/login"
            });
            this.$store.commit("printMsg");
          } else {
            this.error_msg = response.data.error;
            this.valid = true;
            this.sign_up_btn = "sign up";
          }
        } catch (error) {
          this.error_msg = error.response.data.error;
        }
      }
    }
  }
};
</script>

<style scope>
.login-container {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(24, 99, 99, 0.8)
    ),
    url(../assets/productImage/single-project-07-img1.jpg);
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 7rem;
}
.login-wrapper {
  background-color: #fff !important;
  width: 100%;
  margin-top: 3px;
  padding: 24px 24px 36px;
  border: 1px solid gray;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0rem 0.1rem 0.5rem 0rem #999999;
}
</style>
