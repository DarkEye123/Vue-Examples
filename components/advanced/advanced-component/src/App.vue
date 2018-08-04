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
        <app-quote-named-default>
          <h1 slot="titledSlot">{{ title }}</h1>
          <!-- Here the span element will be filled with the rest of the elements (in this case <p></p>) -->
          <p>A wonderful body of titled slot!</p>
        </app-quote-named-default>
        <app-quote-named-default>
          <h1 slot="titledSlot">{{ title }}</h1>
          <!-- Here is used defautl value of slot of the QuoteNamedSlotDefault -->
        </app-quote-named-default>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote-slot';
  import QuoteNamedSlot from './components/Quote-slot-named';
  import QuoteNamedSlotDefault from './components/Quote-slot-named-with-default';
  export default {
    data() {
      return {
        title: "A wonderful quote!"
      }
    },
    components: {
      appQuote: Quote,
      appQuoteNamed: QuoteNamedSlot,
      appQuoteNamedDefault: QuoteNamedSlotDefault
    }
  };
</script>

<style scoped>
</style>
