<template>
  <div>
    <router-link to="/portfolio">Portfolio</router-link>
    The Home Component
  </div>
</template>

<script>
  import Header from './Header.vue'

  export default {
    data: function () {
      return {

      }
    },
    methods: {

    },
    components: {
      appHeader: Header
    },
    directives: {

    }
  }
</script>

<style>
</style>
