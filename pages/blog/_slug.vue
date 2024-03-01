<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead">
          <div class="col-md-12 text-center">
            <h1>{{ blog.title }}</h1>
            <i class="category">{{ blog.category }}</i>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 text-left">
            <div v-if="blog.content" v-html="$md.render(blog.content)"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontendURL: process.env.frontendURL,
      backendURL: process.env.backendURL,
    };
  },
  async asyncData({ $axios, params }) {
    const blogs = await $axios.$get(
      "http://139.180.132.232:1337/blogs?slug=" + params.slug
    );

    let blog = blogs[0];
    return { blog };
  },
};
</script>
