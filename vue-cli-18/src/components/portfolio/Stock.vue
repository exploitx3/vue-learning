<template>
  <div>
    <div class="panel panel-success"></div>
    <div class="panel-heading">
      <h3 class="panel-title">
        {{stock.name}}
        <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
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
        <button @click="sellStock" :disabled="stock.quantity <= 0 || !Number.isInteger(stock.quantity)"
                class="btn btn-success">
          Sell
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'


  export default {
    data: function () {
      return {
        quantity: 0
      }
    },
    props: ['stock'],
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      changeQuantity(event) {
        this.quantity = Number(event.target.value)
      },
      goBack() {
        this.$router.go(-1)
      },
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    },
    components: {},
    directives: {}

  }
</script>

<style>
</style>
