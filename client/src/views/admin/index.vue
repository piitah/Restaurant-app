<template>
  <div class="admin-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i style="color: #4fc7b3;">Chow</i>-Mart Admin Page
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <router-link tag="li" exact to="/" active-class="active" class="nav-item">
              <a class="nav-link">Home</a>
            </router-link>
            <li class="nav-item">
              <a class="nav-link" href="#">New Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Store</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Orders</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="admin-body">
      <div class="admin-sidbar">
        <div class="sidebar">
          <div class="links">
            <ul class="list-group">
              <li class="list-group-item">
                <router-link to="/admin" exact>
                  <a href="#" class="nav-link">
                    <icon name="home" scale="1"></icon>
                    <span>Dashboard</span>
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/admin/Store" exact>
                  <a href="#" class="nav-link">
                    <icon name="comment"></icon>
                    <span>Store</span>
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/admin/order" exact>
                  <a class="nav-link">
                    <icon name="anchor" flip="horizontal"></icon>
                    <span class="fa fa-menu"></span>Order
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/admin/product" exact>
                  <a href="#" class="nav-link">
                    <icon name="book" flip="horizontal"></icon>
                    <span>New Product</span>
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/admin/customer" exact>
                  <a href="#" class="nav-link">
                    <icon name="cube" label="forked repository"></icon>
                    <span>Customers</span>
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/admin/history">
                  <a href="#" class="nav-link">
                    <icon name="box"></icon>
                    <span>History</span>
                  </a>
                </router-link>
              </li>
              <li class="list-group-item">
                <a href="#" class="nav-link">
                  <icon name="bullhorn"></icon>
                  <span>favorite</span>
                </a>
              </li>
              <li class="list-group-item">
                <a href="#" class="nav-link">
                  <icon name="braille"></icon>
                  <span>Account</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ******************************** -->
      <div class="w-100">
        <router-view></router-view>
      </div>
    </div>

    <!-- ****************************** -->
    <foot></foot>
  </div>
</template>

<script>
import foot from "@/components/footer";

export default {
  name: "admin",
  data() {
    return {
      componentId: "addItem"
    };
  },
  components: { foot }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  min-width: 250px;
  background-color: #379683;
  color: white;
  min-height: 100%;
  margin-top: 0rem;
}
.sidebar .cover {
  border: 1px solid #fff;
  width: 80px;
  border-radius: 30px;
}
@media only screen and (max-width: 700px) {
  .sidebar {
    margin-right: -250px;
    background-color: ;
    display: none;
    transition: 3s;
  }
}
.navbar-brand h3 {
  font-size: 80px;
  border: 2px white;
}
.list-group-item li {
  border: none;
}
.list-group-item {
  background-color: #379683;
  color: white;
  padding-right: 20px;
  border: none;
  padding: ;
}
.list-group-item:hover {
  /* background-color: rgba(0,0,0,0.3); */
  color: rgb(12, 44, 37);
  transition: 1s;
  /* border-left: 5px solid #8EE4Af; */
}

.list-group-item a {
  color: white;
  font-size: 10px;
  border-bottom: 2px red;
}
.links {
  padding-top: 20px;
}
.links ul li {
  margin: 0px;
  display: inline-flex;
}
.links ul li a {
  color: white;
  font-size: 14px;
  font-family: 'Comic Sans MS", cursive, sans-serif';
  padding-right: 0px;
}
.links ul li a span {
  padding-left: 11px;
}

.admin-body {
  display: flex;
  align-items: strech;
  min-height: 100vh;
  width: 100%;
}
.admin-sidebar {
  width: 21%;
  min-height: 100vh;
  margin-top: 1rem;
  color: #ffffff;
  padding: 1rem;
  box-shadow: 0px 2rem 1rem rgba(0, 0, 0, 0.5);
  background-color: rgb(34, 104, 100);
}
.sidebar-link-container {
  padding: 0px;
  margin-top: 1rem;
  text-align: start !important;
}
.sidebar-link-ul {
  list-style-type: none;
  width: 100%;
  padding: 1rem;
}
.sidebar-link-ul li a {
  text-decoration: none;
  color: #eee;
  font-size: 1rem;
  font-weight: 500;
}
.sidebar-link {
  padding: 0.7rem;
  background-color: ;
}
.dropdown-menu {
  background-color: rgb(51, 124, 121) !important;
}
</style>