<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{text | toUppercase}}
        <hr>
        <input v-model="filterText" type="text">
        <ul>
          <li v-for="fruit in filteredFruits">
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'


  export default {
    data() {
      return {
        fruits: ['Apple', 'Banana', 'Mango'],
        text: 'asdfsdf',
        filterText: ''
      }
    },
    computed: {
      filteredFruits: function () {
        return this.fruits.filter((fruit) => {
          return fruit.match(this.filterText)
        })
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase()
      }
    },
    components:{
      list: List
    }
  }
</script>

<style>

</style>
