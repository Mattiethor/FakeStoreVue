<template>
  <div>
    <div class="livingRoom">
      <div class="row">
        <div
          class="float-left col-md-3"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="m-2 product-box">
            <div>
              <img class="product-img" :src="item.imgUrl" :alt="item.name" />
            </div>

            <h5>{{ item.name }}</h5>
            <br />
            <h4>
              <strong>{{ item.listPrice }}$</strong>
            </h4>
            <router-link to="/product"
              ><button
                @click="setProductUrl(item.id)"
                type="button"
                class="btn btn-primary"
              >
                INFO
              </button></router-link
            >

            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    
    products: [],
  }),

  methods: {
    setProductUrl(product) {
      this.$store.commit("SET_PRODUCT", product);
    },
  },



  mounted() {
    
    axios.get(`${this.$store.getters.getUrl}/${this.$store.getters.getCategory}`).then((response) => {
      this.products = response.data.products;
      console.log(this.products);
    });
  },
};
</script>