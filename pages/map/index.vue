<template>
  <section class="container">
    <div>
      <mapbox
        :map-options="{
          style: 'mapbox://styles/mapbox/light-v9',
          center: [-96, 37.8],
          zoom: 3
        }"
        :geolocate-control="{
          show: true,
          position: 'top-left'
        }"
        :scale-control="{
          show: true,
          position: 'top-left'
        }"
        :fullscreen-control="{
          show: true,
          position: 'top-left'
        }"
        access-token="pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA"
        @map-load="mapLoaded"

      />


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
import AppLogo from '~/components/AppLogo.vue'
import { mapState } from 'vuex'
import Mapbox from 'mapbox-gl-vue';


export default {
  components: {
    AppLogo,
    Mapbox
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
  methods: {
    mapLoaded(map) {
      map.addSource('DDDgeojson', {
        type: 'geojson',
        data: 'https://data.austintexas.gov/resource/h8x4-nvyi.geojson',
      });

      map.addLayer({
        'id': 'DDDlayer',
        'type': 'heatmap',
        'source': 'DDDgeojson',
      });
    },
  }
}
</script>

<style >
#map {
  width: 100%;
  height: 500px;
}
</style>
