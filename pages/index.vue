<template>
  <div>
    <section id="intro">
      <div class="jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="display-4">Furniture Dragon</h1>
              <p class="lead">100% find your ideal Furniture</p>
              <nuxt-link class="btn btn-primary btn-lg" to="/furniture"
                >Search Furnitures</nuxt-link
              >
            </div>
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
      title: "Furniture Dragon",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>
