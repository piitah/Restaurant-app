<template>
  <div>
    <div class="overlay">
      <div class>
        <h3 class="menu-title mt-5">List Of Orders</h3>
        <div class="row justify-content-center">
          <div class="menu-underlin">&nbsp;</div>
        </div>
      </div>
      <div class="container">
        <div class="table-responsive -5">
          <table
            class="table table-borderless container w-100"
            v-if="products"
            style="border:1px solid #eee;"
          >
            <thead class="border">
              <tr>
                <!-- <th>S/N</th> -->
                <th>Name</th>
                <th>Product</th>
                <th></th>
                <th scope="col" class="p-3">Price</th>
                <th scope="col" class="p-3">Delivery Add</th>
                <th scope="col" class="p-3">Contact</th>
                <th scope="col" class="p-3"></th>
                <th scope="col" class="p-3">Quantity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product._id">
              <tr class="m-3 border" v-for="orders in product.orders" :key="orders._id">
                <td>
                  <strong>{{product.name}}</strong>
                </td>
                <td>
                  <img
                    :src="orders.product.productImg"
                    class="img-fluid"
                    height="50"
                    width="58"
                    alt
                  >
                </td>
                <td>
                  <strong>{{orders.product.productName}}</strong>
                </td>

                <td scope="row" class="p-5">
                  <strong>${{orders.product.productPrice}}.00</strong>
                </td>
                <td>
                  <strong>{{product.deliveryAddress}}</strong>
                </td>
                <td>
                  <span>
                    <strong>{{product.contact}}</strong>
                  </span>
                </td>
                <td class="w-" style=" width: 15px !important;">
                  <div class="d-flex flex-row p-">
                    <v-btn
                      @click.prevent="dispatched(product)"
                      :class="product.dispatch ? 'dispatch' : 'delievered'"
                      class="white--text"
                      style="padding:5px !important; height:35px;"
                    >{{product.status}}</v-btn>
                  </div>
                </td>
                <td>
                  <strong>{{orders.quantity}}</strong>
                </td>
                <td>
                  <strong :ref="`order_date${product._id}`">{{product.created}}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="w-100" v-else>
            <div class="border">
              <div style="margin: 5rem;">
                <h2 class>List Of Orders Is Empty</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam modi dicta facere natus animi libero similique id quibusdam obcaecati corrupti cum, delectus nulla voluptatibus commodi doloribus? Iure, minima dignissimos!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import authenticationService from "../../services/authenticationService.js";

export default {
  name: "Store",
  data() {
    return {
      dispatch: true,
      delievered: false,
      products: null,
      num: "apsde",
      _date: null,
      status: "DISPATCH"
    };
  },
  computed: {
    ...mapState(["user"])
  },
  async mounted() {
    const response = (await authenticationService.getOrders()).data;
    this.products = response.orders;
    // var releaseDate = new Date();
    // alert(releaseDate);
    // Date.prototype.toDateInputValue = () => {
    //   let local = new Date(releaseDate);
    //   local.setMinutes(this.getMinutes() - this.getTimeconeOffset());
    //   alert(local.toJSON().slice(0, 10));
    // };
  },
  methods: {
    dispatched: function(product) {
      this.products.map(element => {
        if (element._id === product._id) {
          product.status = "DELIEVERED";
          product.dispatch = false;
          element.delievered = true;
          console.log(product);
        }
      });
    }
  }
};
</script>

<style>
.dispatch {
  background-color: rgb(194, 48, 48) !important;
}
.delievered {
  background-color: rgb(49, 172, 110) !important;
}
</style>