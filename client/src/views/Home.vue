<template>
  <div class="home">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item slide-img1 active">&nbsp;
          <div class="carousel-detail my-auto mt-5 row justify-content-center">
            <div class="col-md-5" style="margin-top:15rem;">
              <h2 class="cd1">delicious. quality. assuarance
                <br>
                <h4 class="mt-2">make your oder now..</h4>
              </h2>
              <h5 class="cd2">Order Delicious food online</h5>
              <div class="row justify-content-center">
                <div class="w-75">
                  <div class="input-group">
                    <input type="text" placeholder="Search" class="form-control">
                    <div class="input-group-append" style="background-color: red;">
                      <span class="input-group-text">Find Menu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-link mt-5">
                <router-link exact v-if="!$store.state.userLoggedIn" to="/login" class="order-link">
                  <a class="carousel-link">Order Now</a>
                </router-link>
                <router-link exact v-else to="/viewMenu" class="order-link" style="cursor:pointer;">
                  <span class="carousel-link">Order Now</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide-img2">&nbsp;
          <div class="carousel-detail my-auto mt-5 row justify-content-center">
            <div class="col-md-5" style="margin-top:15rem;">
              <h2 class="cd1">delicious. quality. assuarance
                <br>
                <h4 class="mt-2">make your oder now..</h4>
              </h2>
              <h5 class="cd2">Order Delicious food online</h5>
              <div class="row justify-content-center">
                <div class="w-75">
                  <div class="input-group">
                    <input type="text" placeholder="Search" class="form-control">
                    <div class="input-group-append" style="background-color: red;">
                      <span class="input-group-text">Find Menu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-link mt-5">
                <router-link exact v-if="!$store.state.userLoggedIn" to="/login" class="order-link">
                  <a class="carousel-link">Order Now</a>
                </router-link>
                <router-link exact v-else to="/viewMenu" class="order-link" style="cursor:pointer;">
                  <span class="carousel-link">Order Now</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item slide-img3">&nbsp;
          <div class="carousel-detail my-auto mt-5 row justify-content-center">
            <div class="col-md-5" style="margin-top:15rem;">
              <h2 class="cd1">delicious. quality. assuarance
                <br>
                <h4 class="mt-2">make your oder now..</h4>
              </h2>
              <h5 class="cd2">Order Delicious food online</h5>
              <div class="row justify-content-center">
                <div class="w-75">
                  <div class="input-group">
                    <input type="text" placeholder="Search" class="form-control">
                    <div class="input-group-append" style="background-color: red;">
                      <span class="input-group-text">Find Menu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-link mt-5">
                <router-link exact v-if="!$store.state.userLoggedIn" to="/login" class="order-link">
                  <a class="carousel-link">Order Now</a>
                </router-link>
                <router-link exact v-else to="/viewMenu" class="order-link" style="cursor:pointer;">
                  <span class="carousel-link">Order Now</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <section class="body-content">
      <div class="container">
        <div class>
          <app-menu></app-menu>
        </div>
      </div>
      <div class="mt-2" style="background-color: #eee;">
        <appFoodmenu></appFoodmenu>
      </div>
      <!-- <div class="mt-2">
        <appAboutUs></appAboutUs>
      </div>-->
    </section>
  </div>
</template>

<script>
import appMenu from "@/components/menu.vue";
import appFoodmenu from "@/components/food.vue";
import appAboutUs from "@/components/aboutus.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    appMenu,
    appFoodmenu,
    appAboutUs
  }
};
</script>

<style scope>
.slide-img1 {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(../assets/productImage/single-project-07-img1.jpg);
  background-size: cover;
  background-position: top;
  height: 100vh;
  width: 100%;
}
.slide-img2 {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(../assets/productImage/single-project-07-img17.jpg);
  background-size: cover;
  background-position: right;
  height: 100vh;
  width: 100%;
}
.slide-img3 {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(../assets/productImage/single-project-07-img1.jpg);
  background-size: cover;
  background-position: top;
  height: 100vh;
  width: 100%;
}

.cd1 {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
  opacity: 1;
  animation-name: carousel-slide1;
  animation-duration: 2s;
  /* animation-delay: 1s; */
  animation-timing-function: ease-out;
  backface-visibility: hidden;
}
.carousel-details {
  position: absolute;
  top: 35%;
  left: 30%;
  color: #fff;
}
.carousel-detail {
  color: #fff;
}

.order-link .carousel-link {
  color: #fff !important;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 8px 1rem;
  transition: all 0.2s;
}
.order-link .carousel-link:hover {
  border: 1px solid #4fc7b3;
  background-color: #4fc7b3;
  color: #fff !important;
  transform: translateY(-3px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.input-group-text {
  background-color: #4fc7b3 !important;
  color: #fff !important;
  font-weight: bold;
  border: 0 !important;
}
@keyframes carousel-slide1 {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}
</style>
