<template>
  <div>
    <section id="intro">
      <div
        class="jumbotron jumbotron2"
        style="background-image: url(/pictures/pmain.jpg)"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="singlecontent">
      <div class="container">
        <nuxt-link to="/furniture"
          ><b-button variant="primary" id="test"
            >LAST PAGE
          </b-button></nuxt-link
        >
        <div class="row">
          <div class="col-md-8">
            <h1>
              {{ furniture.title }}
              <span class="thetag">{{
                furniture.sale ? "On Sale" : ""
              }}</span>
            </h1>
            <h5>${{ furniture.price }}</h5>
            <p>
              Transaction location : {{ furniture.location }}<br />
              Long {{ furniture.long }}<br />
              Wide：{{ furniture.wide }}<br />
              Height: {{ furniture.height }} 1<br />
              Publication date: {{ furniture.date }}
            </p>
            <h4>簡介</h4>
            <p>
              {{ furniture.desc }}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div class="col-md-4">
            <div class="apply">
              <h5><i class="far fa-calendar-check"></i> Shopping cart</h5>
              <hr />
              <p>information</p>
              <cart />
              <button
                @click="addToCart(furniture)"
                class="btn btn-primary btn-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import cart from "~/components/cart.vue";

export default {
  head() {
    return {
      title: "Details of exquisite furniture - Home World",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover our exquisite furniture to add a touch of elegance and comfort to your home space. Buy now and enjoy a unique home living experience.",
        },
      ],
    };
  },
  data() {
    return {
      frontendURL: process.env.frontendURL,
      backendURL: process.env.backendURL,
    };
  },
  async asyncData({ $axios, params }) {
    const furnitures = await $axios.$get(
      process.env.backendURL + "/furnitures?slug=" + params.slug
    );

    let furniture = furnitures[0];
    return { furniture };
  },
  components: {
    cart,
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
};
</script>
