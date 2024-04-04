<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead">
          <div class="col-md-8 text-left">
            <h3 class="notag">FAQ</h3>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">Home</a> > <a href="#">FAQ</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-left">
            <template>
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info" class="text-left"
                      >What payment methods accept?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text
                        >We accept various payment methods, including credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. You can choose the most convenient option during the checkout process.</b-card-text
                      >
                      <!-- <b-card-text>234</b-card-text> -->
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info" class="text-left"
                      >Do you offer any warranty on your furniture?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>Yes, we offer a warranty on our furniture. The warranty period may vary depending on the item. Please refer to the product description or contact our customer support for specific warranty details.</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info" class="text-left"
                      >Can I cancel my order?</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>If you wish to cancel your order, please contact our customer support as soon as possible. We will assist you in canceling the order if it has not been shipped yet. However, if the order has already been shipped, you may need to follow our return policy for a refund.</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "FAQ",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Browse our Frequently Asked Questions (FAQ) for details on payment methods, furniture warranty policies, and how to cancel your order. Furniture Dragon is committed to providing the best customer service.",
        },
      ],
    };
  },
};
</script>
