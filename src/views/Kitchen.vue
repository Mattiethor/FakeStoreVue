<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div>
          <div v-for="(item, index) in products" :key="index" >
          <div class="float-left">
            <div class="col-md-3  ">
              
              <div class="card float-left ">
                <div class="card-body">
                  <img
                    class="card-img-top"
                    :src="item.imgUrl"
                    alt="Card image cap"
                  />
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">{{ item.listPrice }} $</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            </div>
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
      console.log(this.response);
    });
  },
};
</script>
