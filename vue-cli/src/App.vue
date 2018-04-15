<template>
    <div class="container">
      <app-header :quotesCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <new-quote @quoteAdded="createNew"></new-quote>
      <quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: Click on Quote to delete it!
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'
  import Header from './components/Header.vue'

    export default {
        data: function () {
          return {
            quotes: [
              'Just a Quote to see something'
            ],
            maxQuotes: 10
          }
        },
      components: {
          quoteGrid: QuoteGrid,
          newQuote: NewQuote,
          appHeader: Header
      },
      methods: {
          createNew(quoteData) {
            if(this.quotes.length === this.maxQuotes) {
              alert("Maximum added quotes reached, you cannot add more than 10 quotes")
            } else {
              this.quotes.push(quoteData)
            }
          },
        deleteQuote(index){
            this.quotes.splice(index,1)
        }
      }
    }
</script>

<style>
</style>
