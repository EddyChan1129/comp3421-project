<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-left">
            <img src="/pictures/logo.webp" width="85" class="logo_img" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              saepe, odit et qui iste laborum repellendus distinctio doloribus.
              Sapiente obcaecati ex perferendis pariatur! Eligendi, nemo? Ipsum
              vel eveniet eaque impedit.
            </p>
          </div>
          <div class="col-md-4 text-left">
            <h4>Links</h4>

            <ul>
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/furniture">Furnitures</nuxt-link></li>
              <li><nuxt-link to="/feedback">Feedback</nuxt-link></li>
            </ul>
            <ul>
              <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
            </ul>
          </div>
          <div class="col-md-4 text-left">
            <h4>Contact Us</h4>
            <p>
              Phone: (852) 9716-6524<br />
              E-Mail:
              <a href="mailto:22026266d@connect.polyu.hk"
                >22026266d@connect.polyu.hk</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome to our website",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Thank you for visiting our website. If you have any questions or feedback, please do not hesitate to contact us via the contact details provided at the bottom.",
        },
      ],
    };
  },
};
</script>
