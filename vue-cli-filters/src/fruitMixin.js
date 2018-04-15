export const FruitMixin = {
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
  }
}
