<template>
  <main>
    <h2> This is what the data looks like </h2>
    {{ sodaData }}
  </main>
</template>

<script>
import { mapState } from 'vuex'
// const url = "https://data.austintexas.gov/resource/h8x4-nvyi.json";
export default {
  data() {
    return {
    results: []
  };
  },
  computed: mapState([
    'sodaData'
  ]),
  mounted() {
    this.$store.dispatch('getData')
  },

}
</script>
