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
            <div >
              <img  class=" product-img" :src="item.imgUrl" :alt="item.name" />
            </div>
            
            <h5>{{ item.name }} </h5> <br/>
            <button type="button" class="btn btn-primary">Primary</button> {{item.listPrice}}$
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
    url: "https://localhost:7135/api/products",
    products: [],
  }),

  mounted() {
    axios.defaults.baseURL = "//localhost:7135/";
    axios.get(this.url).then((response) => {
      this.products = response.data;
      console.log(response.data);
    });
  },
};
</script>
