<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mx-auto">
        <app-quote>
          <h1>{{ title }}</h1>
          <p>A wonderful body!</p>
        </app-quote>
        <app-quote-named>
          <h1 slot="titledSlot">{{ title }}</h1>
          <p slot="content">A wonderful body of titled slot!</p>
        </app-quote-named>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote-slot';
  import QuoteNamedSlot from './components/Quote-slot-named';
  export default {
    data() {
      return {
        title: "A wonderful quote!"
      }
    },
    components: {
      appQuote: Quote,
      appQuoteNamed: QuoteNamedSlot
    }
  };
</script>

<style scoped>
</style>
