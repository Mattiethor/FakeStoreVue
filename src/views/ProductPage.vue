..<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="m-2">
          <img class="img-fluid" :src="product.imgUrl" :alt="product.name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="m-2">
          <h2>{{ product.name }}</h2>
          <hr />
          <div class="description">
            {{ product.description }}
          </div>
          <hr>
          <p>Model: {{product.modelYear}}</p>
          <h5>{{product.listPrice}} $</h5>
          <br />
          <button
            @click="setProductUrl(item.id)"
            type="button"
            class="btn btn-primary btn-lg"
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import productUrl from "Kitchen.vue";
import axios from "axios";
export default {
  components: {
    //productUrl,
  },
  data: () => ({
    product: undefined,
  }),

  mounted() {
    axios.defaults.baseURL = this.$store.getters.getProduct;
    axios.get(this.$store.getters.getProduct).then((response) => {
      this.product = response.data;
      console.log(this.product);
    });
  },
};
</script>

<style>
.description {
  font-size: 24px;
}


</style>