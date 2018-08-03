<template>
  <section class="container">
    <div>
      <base-header
        title="Dangerous Dogs of Austin"
        subtitle1="A collection of data for your saftey, education, and empowerment"
        subtitle2="made by Eric Sherman for City of Austin"
      />
      <base-section title="Purpose" />
      <div class="fr mr4 mw7 right">
        <soda-map />
      </div>

      <base-card-grid />

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
import AppLogo from '~/components/AppLogo.vue'
import BaseHeader from '~/components/core/BaseHeader'
import BaseSection from '~/components/core/BaseSection'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl-vue'
import SodaMap from '~/components/SodaMap'


export default {
  components: {
    AppLogo,
    BaseHeader,
    BaseSection,
    BaseCardGrid,
    Mapbox,
    SodaMap

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
  },
}
</script>

<style>

#map {
  width: 100%;
  height: 500px;
}
</style>
