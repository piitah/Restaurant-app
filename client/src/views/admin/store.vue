<template>
  <div>
    <div class="overlay">
      <div class>
        <h3 class="menu-title mt-5">List Of Items In Store</h3>
        <div class="row justify-content-center">
          <div class="menu-underlin">&nbsp;</div>
        </div>
      </div>
      <div class="container">
        <div class="table-responsive -5 w-100">
          <table
            class="table table-borderless container"
            v-if="!product"
            style="border:1px solid #eee;"
          >
            <thead class="border">
              <tr>
                <!-- <th>S/N</th> -->
                <th scope="col" class="p-3">Product</th>
                <th scope="col" class="p-3"></th>
                <th scope="col" class="p-3">Price</th>
                <th scope="col" class="p-3"></th>
                <th scope="col" class="p-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="m-3 border" v-for="product in products" :key="product._id">
                <!-- <td></td> -->
                <td scope="row" class="p-5">
                  <img :src="product.productImg" class="img-fluid" height="50" width="58" alt>
                </td>
                <td>
                  <span class="float-left">
                    <strong>
                      <h5>{{product.productName}}</h5>
                    </strong>
                  </span>
                </td>
                <td>
                  <span>
                    <strong>$</strong>
                    {{product.productPrice}}.00
                  </span>
                </td>
                <td class="w-" style=" width: 15px !important;">
                  <div class="d-flex flex-row p-">
                    <v-btn
                      @click.prevent="deleteProduct(product._id)"
                      class="bg-danger white--text"
                      style="padding:5px !important; height:35px;"
                    >
                      <icon name="trash" scale="1"></icon>
                    </v-btn>
                  </div>
                </td>
                <td class="w-" style=" width: 15px !important;">
                  <div class="d-flex flex-row p-">
                    <v-btn
                      @click.prevent="navigateTo({name : 'editStore', params : {id : product._id}})"
                      class="bg-success white--text"
                      style="padding:5px !important; height:35px;"
                    >
                      <icon name="edit" scale="1"></icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="border" v-else>
            <div style="margin: 5rem;">
              <h2 class>Your Cart Is Empty</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam modi dicta facere natus animi libero similique id quibusdam obcaecati corrupti cum, delectus nulla voluptatibus commodi doloribus? Iure, minima dignissimos!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authenticationService from "../../services/authenticationService.js";

export default {
  name: "Store",
  data() {
    return {
      products: null,
      num: parseInt(1),
      errMsg: ""
    };
  },
  async mounted() {
    const response = (await authenticationService.getItems()).data;
    this.products = response;
  },
  methods: {
    async deleteProduct(productId) {
      const id = productId;
      // alert(id);
      const response = await authenticationService.deleteProduct(id);
      this.products.map((element, index) => {
        if (element._id === productId) {
          this.products.splice(index, 1);
        }
      });

      // let msg = response.data.feedback;
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
</style>