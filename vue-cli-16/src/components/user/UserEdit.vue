<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Data</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        confirmed: false
      }
    },
    methods: {},
    components: {},
    directives: {},
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next()
      } else {
        if (confirm('are you sure')) {
          next()
        } else {
          next(false)
        }
      }
    }
  }
</script>

<style>
</style>
