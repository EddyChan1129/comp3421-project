<template>
    <div>

        <cart />
        <div v-for='(product, idx) in filteredproducts' :key='idx'>

            {{ product.title }}<br>
            Price: {{ product.price }}<br>
            <button @click="addToCart(product)">Add to Cart</button>
          
            <br><br>

        </div>

    </div>
</template>

<script>  
import { mapMutations } from 'vuex'
import cart from '~/components/cart.vue'

export default {  
  data(){
    return{
      backendurl : process.env.backendURL,
      frontendurl : process.env.frontendURL,
			
    }
  },
  async asyncData({ $axios, store }) {
    const products = await $axios.$get(process.env.backendURL+'/products')
    return { products }
  },
  components: {
    cart
  },
  methods:{
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    }),
  },
  computed:{
    filteredproducts(){
      return this.products.map(({ id, title, price }) => ({ id, title, price }))
    }
  }
   
}
</script> 
