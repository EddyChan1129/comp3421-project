<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead">
          <div class="col-md-8 text-left">
            <h3>Searh furniture</h3>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">Home</a> > <a href="#">Search</a></p>
          </div>
        </div>
        <div class="row searchproperties">
          <div class="col-md-8 text-center">
            <div class="row sortingwrapper">
              <select v-model="sort" class="form-control" id="sorting">
                <option value="priceLow">Sort by</option>
                <option value="priceLow">Price (low to height)</option>
                <option value="priceHeight">Price (height to low)</option>
                <option value="dateCurrect">Date (From currect to last)</option>
                <option value="dateLast">Date (From last to current)</option>
              </select>
            </div>
            <div class="row">
              <div
                v-for="(furniture, idx) in filterFurnitures"
                :key="idx"
                class="col-md-6 text-left"
              >
                <div class="outer">
                  <nuxt-link :to="'/furniture/' + furniture.slug">
                    <div class="upper">
                      <img
                        v-if="furniture.thumbnail"
                        :src="backendURL + furniture.thumbnail.url"
                        alt="Thumbnail Image"
                      />
                      <div class="innertext">
                        <span>{{
                          furniture.secondHand == true
                            ? "New Product"
                            : "Second Hand"
                        }}</span>
                        <h4>${{ furniture.price }}</h4>
                      </div>
                    </div>
                    <div class="lower">
                      <h3>{{ furniture.title }}</h3>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                          />
                        </svg>
                        {{ furniture.selectLocation }}</span
                      >
                    </div>

                    <div class="listing-features">
                      <div class="row">
                        <div class="col-md-4">
                          <strong>Long</strong><br />{{ furniture.long }}m
                        </div>
                        <div class="col-md-4">
                          <strong>Wide</strong><br />{{ furniture.wide }}m
                        </div>
                        <div class="col-md-4">
                          <strong>Height</strong><br />{{ furniture.height }}m
                        </div>
                      </div>
                    </div>

                    <div class="lastdate">
                      <div class="row">
                        <div class="col-md-6">刊登日期:</div>
                        <div class="col-md-4 text-right">
                          {{ furniture.date }}
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <!-- end row -->
            <button
              @click="showmore"
              class="btn btn-primary btn-lg"
              v-if="totalFurnitures > showing"
            >
              Show more
            </button>
          </div>
          <div class="col-md-4">
            <h3 class="font24">Search by</h3>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Product Name</label>
                <input
                  v-model="filterData.title"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g: chair"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1"
                  >Transaction location</label
                >
                <select
                  v-model="filterData.selectLocation"
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option value="all">All</option>
                  <option value="Central_and_Western">
                    Central and Western
                  </option>
                  <option value="Eastern">Eastern</option>
                  <option value="Southern">Southern</option>
                  <option value="Wan_Chai">Wan Chai</option>
                  <option value="Sham_Shui_Po">Sham Shui Po</option>
                  <option value="Kowloon_City">Kowloon City</option>
                  <option value="Kwun_Tong">Kwun Tong</option>
                  <option value="Wong_Tai_Sin">Wong Tai Sin</option>
                  <option value="Yau_Tsim_Mong">Yau Tsim Mong</option>
                  <option value="Islands">Islands</option>
                  <option value="Kwai_Tsing">Kwai Tsing</option>
                  <option value="North">North</option>
                  <option value="Sai_Kung">Sai Kung</option>
                  <option value="Sha_Tin">Sha Tin</option>
                  <option value="Tai_Po">Tai Po</option>
                  <option value="Tsuen_Wan">Tsuen Wan</option>
                  <option value="Tuen_Mun">Tuen Mun</option>
                  <option value="Yuen_Long">Yuen Long</option>
                </select>
              </div>
            </form>
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
      filterData: {
        title: "",
        selectLocation: "all",
      },
      sort: "priceLow",
      showing: 2,
      totalFurnitures: "",
    };
  },
  async asyncData({ $axios }) {
    const furnitures = await $axios.$get(
      process.env.backendURL + "/furnitures"
    );
    return { furnitures };
  },
  computed: {
    filterFurnitures() {
      let filteredFurnitures = this.furnitures.filter((furniture) => {
        if (this.filterData.selectLocation === "all") {
          return furniture.title
            .toLowerCase()
            .includes(this.filterData.title.toLowerCase());
        } else {
          return (
            furniture.title
              .toLowerCase()
              .includes(this.filterData.title.toLowerCase()) &&
            furniture.selectLocation
              .toLowerCase()
              .includes(this.filterData.selectLocation.toLowerCase())
          );
        }
      });
      if (this.sort === "priceLow") {
        filteredFurnitures.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (this.sort === "priceHigh") {
        filteredFurnitures.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (this.sort === "dateCurrect") {
        filteredFurnitures.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      } else if (this.sort === "dateLast") {
        filteredFurnitures.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      } else {
        filteredFurnitures.sort((a, b) => {
          return b.price - a.price;
        });
      }
      this.totalFurnitures = this.furnitures.length;

      return filteredFurnitures.slice(0, this.showing);
    },
  },
  methods: {
    showmore() {
      this.showing += 3;
    },
  },
};
</script>
