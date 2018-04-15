<template>
  <section class="col-sm-6 col-md-4">
    <div class="panel panel-success"></div>
    <div class="panel-heading">
      <h3 class="panel-title">
        {{name}}
        <small>(Price: {{price}})</small>
      </h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input type="number"
               class="form-control"
               placeholder="quantity"
               @input="changeQuantity">
      </div>
      <div class="pull-right">
        <button @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)" class="btn btn-success">Buy</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: function () {
      return {
        quantity: 0
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },
    methods: {
      changeQuantity(event) {
        this.quantity = Number(event.target.value)
      },
      buyStock() {
        const order = {
          stockId: this.id,
          stockPrice: this.price,
          quantity: this.quantity
        }

        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      }
    },
    components: {},
    directives: {}
  }
</script>

<style>
</style>
