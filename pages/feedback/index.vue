<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead mb30">
          <div class="col-md-8 text-left">
            <h3>Feedback</h3>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">Home</a> > <a href="#">Feedback</a></p>
          </div>
        </div>
        <div class="row articles">
          <div class="col-md-12 text-center">
            <div class="row">
              <div
                v-for="(blog, idx) in paginatedBlogs"
                :key="idx"
                class="col-md-4 text-left"
              >
                <div class="outer">
                  <div class="upper">
                    <img
                      v-if="blog.thumbnail"
                      :src="backendURL + blog.thumbnail.url"
                      alt="Thumbnail Image"
                    />
                  </div>
                  <div class="lower">
                    <b
                      ><span id="feedback_date">
                        date: {{ blog.date }}
                      </span></b
                    >
                    <h3>
                      {{ blog.title }}
                    </h3>
                    <span>{{ blog.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row text-center thepage" v-if="totalPageCount > 1">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li v-if="currentPage > 1" class="page-item">
                  <a class="page-link" @click="previousPage">Previous</a>
                </li>
                <li
                  v-for="page in totalPageCount"
                  :key="page"
                  :class="{ active: page === currentPage }"
                  class="page-item"
                >
                  <a class="page-link" @click="goToPage(page)">{{ page }}</a>
                </li>
                <li v-if="currentPage < totalPageCount" class="page-item">
                  <a class="page-link" @click="nextPage">Next</a>
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
  head() {
    return {
      title: "Client feedback",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Read feedback from our customers to find out what they really have to say about our products and services. Your satisfaction is our unremitting goal.",
        },
      ],
    };
  },
  data() {
    return {
      frontendURL: process.env.frontendURL,
      backendURL: process.env.backendURL,
      blogs: [], // All blog posts
      postsPerPage: 2, // Number of posts per page
      currentPage: 1, // Current page
    };
  },
  async asyncData({ $axios }) {
    const blogs = await $axios.$get(process.env.backendURL + "/blogs");
    return { blogs };
  },
  computed: {
    totalPageCount() {
      return Math.ceil(this.blogs.length / this.postsPerPage);
    },
    paginatedBlogs() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPageCount) {
        this.currentPage++;
      }
    },
  },
};
</script>
