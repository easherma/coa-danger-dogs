<template>
  <section class="container">
    <div>
      <base-section title="Purpose" />

      <div class="fr mr4 mw7 right">
        <soda-map />
      </div>

      <base-card-grid />

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import BaseSection from '~/components/core/BaseSection'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl-vue'
import SodaMap from '~/components/SodaMap'


export default {
  components: {
    AppLogo,
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
