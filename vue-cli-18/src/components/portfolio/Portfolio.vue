<template>
  <div>
    The Portfolio
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    <button class="btn" @click="goBack">Go Back</button>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  import {mapActions, mapGetters} from 'vuex'


  export default {
    data: function () {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    components: {
      appStock: Stock
    },
    directives: {},
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>

<style>
</style>
