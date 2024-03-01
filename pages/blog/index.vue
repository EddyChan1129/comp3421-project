<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead mb30">
          <div class="col-md-8 text-left">
            <h3>網誌</h3>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">主頁</a> > <a href="#">網誌</a></p>
          </div>
        </div>
        <div class="row articles">
          <div class="col-md-12 text-center">
            <div class="row">
              <div
                v-for="(blog, idx) in blogs"
                :key="idx"
                class="col-md-4 text-left"
              >
                <div class="outer">
                  <a :href="frontendURL + 'blog/' + blog.slug">
                    <div class="upper">
                      <img
                        v-if="blog.thumbnail[0]"
                        :src="backendURL + blog.thumbnail[0].url"
                        alt="Thumbnail Image"
                      />
                    </div>
                    <div class="lower">
                      <h3>{{ blog.title }}</h3>
                      <span>{{ blog.date }}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-center thepage">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
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
  async asyncData({ $axios }) {
    const blogs = await $axios.$get("http://139.180.132.232:1337/blogs");
    return { blogs };
  },
};
</script>
