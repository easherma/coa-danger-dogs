<template>
  <section class="container">
    <div>
      <mapbox-map />

      {{ sodaData }}
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import MapboxMap from '~/components/MapboxMap'

export default {
  components: {
    MapboxMap
  },
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
  }
}
</script>
