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
              <div v-for="(furniture, idx) in filterFurnitures" :key="idx" class="col-md-6 text-left">
                <p>hi</p>
                <div class="outer">
                  <nuxt-link to="#">
                    <div class="upper">
                      <img v-if="furniture.img_url"  :src="furniture.img_url" 
                      alt="Thumbnail Image" />
                      <div class="innertext">
                        <span v-if="furniture.sale">
                          On Sale
                        </span>
                        <h4>${{  furniture.price  }}</h4>
                      </div>
                    </div>
                    <div class="lower">
                      <h3>{{ /* furniture.title */ }}</h3>
                      <span> {{/* furniture.type */ }}</span>
                    </div>
                    <div class="listing-features">
                      <div class="row">
                        <div class="col-md-4">
                          <strong>Long</strong><br />{{ /* furniture.long */ }}
                        </div>
                        <div class="col-md-4">
                          <strong>Wide</strong><br />{{/* furniture.wide */ }}
                        </div>
                        <div class="col-md-4">
                          <strong>Height</strong><br />{{ /* furniture.height */ }}
                        </div>
                      </div>
                    </div>

                    <div class="lastdate">
                      <div class="row">
                        <div class="col-md-6">Publication Date:</div>
                        <div class="col-md-4 text-right">
                          {{ /* furniture.date */ }}
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <!-- end row -->
            <button @click="showmore" class="btn btn-primary btn-lg" v-if="totalFurnitures > showing">
              Show more
            </button>
          </div>
          <div class="col-md-4">
            <h3 class="font24">Search by</h3>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Product Name</label>
                <input v-model="filterData.title" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="e.g: chair" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Furniture Type</label>
                <select v-model="filterData.type" class="form-control" id="exampleFormControlSelect1">
                  <option value="all">All</option>
                  <option value="Sofa">Sofa</option>
                  <option value="Table">Table</option>
                  <option value="Chairs">Chairs</option>
                  <option value="Bed">Bed</option>
                  <option value="Bookshelf">Bookshelf</option>
                  <option value="Wardrobe">Wardrobe</option>
                  <option value="others">others</option>
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
  head() {
    return {
      title: "Search Furniture",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Search and discover all types of furniture including sofas, tables, chairs, beds and more on Home Furnishings to find the perfect piece of furniture for your home.",
        },
      ],
    };
  },
  data() {
    return {
      frontendURL: process.env.frontendURL,
      backendURL: process.env.backendURL,
      filterData: {
        title: "",
        type: "all",
      },
      sort: "priceLow",
      showing: 4,
      totalFurnitures: "",
    };
  },
  async asyncData({ $axios }) {
    const furnitures = await $axios.$get(
      process.env.backendURL
    );
    console.log(furnitures)
    return { furnitures };
  },
  computed: {
    filterFurnitures() {
      let furnituresArray = Object.values(this.furnitures);

      let filteredFurnitures = furnituresArray.filter((furniture) => {
        return true;
      });

      

      console.log(filteredFurnitures);
      return filteredFurnitures;

      /* if (this.sort === "priceLow") {
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

      return filteredFurnitures.slice(0, this.showing);  */
    },
  },
  methods: {
    showmore() {
      this.showing += 3;
    },
  },
};
</script>
