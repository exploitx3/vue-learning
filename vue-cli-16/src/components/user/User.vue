<template>
  <div>
    <h1>User Page</h1>
    <hr>
    <button @click="navigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    methods: {
      navigateToHome(){
        this.$router.push({name: 'home'})
      }
    },
    components: {

    },
    directives: {

    }
  }
</script>

<style>
</style>
