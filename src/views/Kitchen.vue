<template>
  <div>
    <div class="kitchen">
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
            <router-link to="/product"
              ><button
                @click="setProductUrl(item.id)"
                type="button"
                class="btn btn-primary"
              >
                Primary
              </button></router-link
            >
            {{ item.listPrice }}$
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
  props: ["this.productUrl"],
  data: () => ({
    productUrl: undefined,
    products: [],
  }),

  methods: {
    setProductUrl(product) {
      this.productUrl = this.$store.getters.getUrl + "/" + product;
      console.log(this.productUrl);
    },
  },

  mounted() {
    axios.defaults.baseURL = this.$store.getters.getUrl;
    axios.get(this.$store.getters.getUrl).then((response) => {
      this.products = response.data;
      console.log(response.data);
    });
  },
};
</script>
