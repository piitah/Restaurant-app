<template>
  <div class>
    <div class="container">
      <div class style="margin-top:5.7rem;">
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
              <span class>Shopping Cart</span>
            </router-link>
          </ol>
        </nav>
      </div>
      <div class="row mt-4">
        <div class="col-md-8">
          <div class="m-4">
            <div class="table-responsive">
              <table
                v-if="cartItems.length != 0"
                class="table table-borderless"
                style="border:1px solid #eee;"
              >
                <thead class="border">
                  <tr>
                    <th scope="col" class="p-3">Product</th>
                    <th scope="col" class="p-3"></th>
                    <th scope="col" class="p-3">Price</th>
                    <th scope="col" class="p-3">Quantity</th>
                    <th scope="col" style="width:10px !important;"></th>
                    <th scope="col" class="p-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="m-3 border" v-for="cartItem in cartItems" :key="cartItem._id">
                    <td scope="row" class="p-5">
                      <img
                        :src="cartItem.product.productImg"
                        class="img-fluid"
                        height="50"
                        width="58"
                        alt
                      >
                    </td>
                    <td>
                      <span class="float-left">{{cartItem.product.productName}}</span>
                    </td>
                    <td>
                      <span>
                        <strong>$</strong>
                        {{cartItem.product.productPrice}}.00
                      </span>
                    </td>
                    <td class="w-" style="width:25px !important;">
                      <div class="d-flex flex-row p-2">
                        <button @click="inc(cartItem.product)">
                          <div class="border p-2">
                            <strong>+</strong>
                          </div>
                        </button>
                        <div style="background-color:#eee" class="border p-2">{{ cartItem.quantity}}</div>
                        <button @click.prevent="dec(cartItem.product)">
                          <div class="border p-2">
                            <strong>-</strong>
                          </div>
                        </button>
                      </div>
                    </td>
                    <td style="width:10px !important;">
                      <v-btn
                        @click.prevent="deleteItem(cartItem)"
                        class="bg-danger white--text"
                        style="padding:5px !important; height:35px; width:25px !important;"
                      >
                        <icon name="trash" scale></icon>
                      </v-btn>
                    </td>
                    <td>
                      <strong>$</strong>
                      {{ cartItem.product.productPrice * cartItem.quantity}}.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-else class="border">
                <div style="margin: 5rem;">
                  <h2 class>Your Cart Is Empty</h2>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam modi dicta facere natus animi libero similique id quibusdam obcaecati corrupti cum, delectus nulla voluptatibus commodi doloribus? Iure, minima dignissimos!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="checkout border">
            <div class>
              <h3>Cart Totals</h3>
              <div class="border-bottom">
                <div class="d-flex flex-row pb-2 pt-2 justify-content-end">
                  <div class="w-100">
                    <strong>SUBTOTAL:</strong>
                    <strong class="float-right">#{{cartTotal}}.00</strong>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row pb-2 pt-4 justify-content-end">
                <div class="w-100">
                  DELIVERY:
                  <strong class="float-right">#400.00</strong>
                </div>
              </div>
              <div class="d-flex flex-row pb-4 pt-2">
                <div class="w-100">
                  <strong>Shipping:</strong>
                </div>
                <div
                  class="float-right"
                >This is only an esttimate price will be updated during checkout</div>
              </div>

              <p class="border-bottom"></p>
              <div class="d-flex flex-row pb-2 pt-2 justify-content-end">
                <div class="w-100">
                  <strong>TOTAL:</strong>
                  <strong class="float-right">#{{cartTotal + 400}}.00</strong>
                </div>
              </div>
            </div>
            <div class="justify-center mt-2" align="center">
              <v-btn
                class="curve order-btn"
                :disabled="!valid"
                @click.prevent="checkout"
              >Proceed to Checkout</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "cart",
  data() {
    return {
      valid: false,
      cartItems: null
    };
  },
  computed: {
    ...mapGetters(["cartTotal"]),
    ...mapState(["cart"]),
    ...mapState(["user"])
  },
  mounted() {
    console.log(this.cart);
    this.cartItems = this.$store.state.cart.items;
    if (this.cart.items.length !== 0) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  },
  methods: {
    checkout: function() {
      if (this.user) {
        this.$router.push({
          path: "/checkout"
        });
      } else {
        this.$router.push({
          path: "/login"
        });
      }
    },
    deleteItem: function(item) {
      for (let i = 0; i <= this.cart.items.length; i++) {
        if (item.product._id === this.cart.items[i].product._id) {
          this.cart.items.splice(i, 1);
        }
      }
    },
    inc: function(product) {
      this.$store.commit("increment", {
        product: product
      });
    },
    dec: function(product) {
      this.$store.commit("decrement", {
        product: product
      });
    }
  }
};
</script>

<style>
td {
  vertical-align: middle !important;
}
.checkout {
  text-align: start !important;
  padding: 2.7rem;
}
</style>
