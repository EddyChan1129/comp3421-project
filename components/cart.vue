<template>
  <div>
    <button class="btn_div" @click="emptyList">Empty Shopping Cart</button>
    <div v-if="price > 0">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="idx">
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              <a class="add" @click="addToCart(item)">+</a>
              <a class="min" @click="removeFromCart(item)">-</a>
            </td>
          </tr>
        </tbody>
      </table>

      <button class="btn_div2" @click="goToCheckout">
        Process to checkout ({{ price }}USD)
      </button>
    </div>
    <br />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  head() {
    return {
      title: "Shopping cart",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "View your shopping cart and modify item quantities. When you're ready, head to checkout to complete your purchase.",
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
      emptyList: "cart/emptyList",
    }),
    goToCheckout() {
      // Redirect to signin page if not logged in.
      const isConnected = this.$store.getters["auth/getUserJwt"];
      if (!isConnected) {
        this.$router.push("/users/signin");
        return;
      }
      this.$router.push("/orders/checkout-pretty");
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    items() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
};
</script>
