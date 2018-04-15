<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress">
          <div class="progress-bar" :style="{width: (quotesCount / maxQuotes) * 100 + '%' }" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            {{ quotesCount }} / {{ maxQuotes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quotesCount', 'maxQuotes'],
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
