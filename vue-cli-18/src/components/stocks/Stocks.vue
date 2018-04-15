<template>
  <div>
    <app-stock v-for="stock in stocks" :id="stock.id" :name="stock.name" :price="stock.price">
    </app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data: function () {
      return {

      }
    },
    methods: {},
    components: {
      appStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    },
    directives: {}
  }
</script>

<style>
</style>
