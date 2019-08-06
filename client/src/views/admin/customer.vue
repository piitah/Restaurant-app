<template>
  <div>
    <div class="overlay">
      <div class>
        <h3 class="menu-title mt-5">List Of Customers</h3>
        <div class="row justify-content-center">
          <div class="menu-underlin">&nbsp;</div>
        </div>
      </div>
      <div class="container">
        <div class="table-responsive -5">
          <table
            class="table table-borderless container w-100"
            v-if="customers"
            style="border:1px solid #eee;"
          >
            <thead class="border">
              <tr>
                <!-- <th>S/N</th> -->
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr class="m-3 border" v-for="user in customers" :key="user._id">
                <td>
                  <strong>{{user.username}}</strong>
                </td>
                <td>{{ user.email}}</td>
                <td>
                  <strong>{{user.address}}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="w-100">
            <!-- <div class="border">
              <div style="margin: 5rem;">
                <h2 class>List Of Orders Is Empty</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam modi dicta facere natus animi libero similique id quibusdam obcaecati corrupti cum, delectus nulla voluptatibus commodi doloribus? Iure, minima dignissimos!</span>
              </div>
            </div>-->
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
      i: 0,
      customers: null,
      num: "apsde"
    };
  },
  computed: {
    ...mapState(["user"])
  },
  async mounted() {
    const response = (await authenticationService.getUsers()).data;
    this.customers = response;
  }
};
</script>

<style>
</style>