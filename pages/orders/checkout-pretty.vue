<template>
  <div>
    <div class="container checkout">
      <div class="row">
        <div class="col-md-6">
          <h3>Order details</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in items" :key="idx">
                <td>{{ item.title }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.price }}</td>
              </tr>
              <tr>
                <td class="price">Total:</td>
                <td></td>
                <td class="price">{{ price }}</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>

        <div class="col-md-6">
          <h3>Your Payment Details:</h3>
          <div class="form-group">
            <label>Shipping Address</label>
            <input class="form-control" type="text" v-model="address" />
          </div>

          <div class="form-group">
            <label>Pay with Credit Card (Powered by Stripe)</label>
            <card
              class="form-control stripe-card"
              :class="{ complete }"
              stripe="pk_test_51OxxZPDgqfaPNTNWOJjrRUakv358G5AUllYc6arcfA0yAzpkuGuoWIBOUpSs2WtNNATj2gLXFyoDNcOoSGsZNdm600WYM1pYIa"
              :options="stripeOptions"
              @change="complete = $event.complete"
            />
          </div>
          <img class="stripe" src="/pictures/stripe.png" />
          <button
            v-if="!loading"
            class="btn btn-primary width-100 pay-with-stripe"
            @click="pay"
            :disabled="!complete"
          >
            Pay Now (USD {{ price }})
          </button>

          <p v-if="loading">Processing......</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import { mapMutations } from "vuex";

export default {
  middleware: "auth",
  data() {
    return {
      frontendURL: process.env.frontendURL,
      complete: false,
      jwt: this.$store.getters["auth/getUserJwt"],
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      address: "HKHK HK",
      loading: false,
    };
  },

  components: { Card },

  computed: {
    items() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
  },

  methods: {
    ...mapMutations({
      emptyList: "cart/emptyList",
    }),
    async pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.

      this.loading = true;

      let token;
      await createToken().then((data) => {
        console.log(data.token);
        token = data.token.id;
      });
      if (token) {
        const response = await this.$axios
          .$post(
            process.env.backendURL + "/orders",
            {
              amount: this.$store.getters["cart/price"],
              product: this.$store.getters["cart/items"],
              address: this.address,
              token,
            },
            {
              headers: {
                Authorization: this.$store.getters["auth/getUserJwt"],
              },
            }
          )
          .then((r) => {
            console.log(r);
            this.emptyList();
            window.location.href = `${this.frontendURL}/`;
          })
          .catch((error) => {
            console.log(error);
            alert(
              "Error! Your card cannot be charged! Please try again with a correct card info!"
            );
          });
      }
    },
  },
};
</script>

<style>
.stripe-card {
}
.stripe-card.complete {
  border-color: green;
}
.checkout {
  padding-top: 50px;
  padding-bottom: 50px;
}
.checkout h3 {
  margin-bottom: 20px;
}
.checkout .price {
  color: black;
  font-weight: 800;
}

.table thead th {
  border: none;
}
.stripe {
  display: block;
  margin-bottom: 20px;
  width: 147px;
  margin-bottom: 42px;
  margin-top: -7px;
}
.checkout .btn {
  width: 100%;
}
</style>
