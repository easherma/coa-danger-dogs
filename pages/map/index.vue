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
        access-token="pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA"/>


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
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [{
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-77.03238901390978, 38.913188059745586]
              },
              'properties': {
                'title': 'Mapbox DC',
              }
            }, {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [-122.414, 37.776]
              },
              'properties': {
                'title': 'Mapbox SF',
              }
            }]
          }
        },
        'layout': {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    },
    // mapClicked(map, e) {
    //   alert('Map Clicked!');
    // },
    // geolocateError(control, positionError) {
    //   // console.log(positionError);
    // },
    // geolocate(control, position) {
    //   // console.log(`User position: ${position.coords.latitude}, ${position.coords.longitude}`);
    // }
  }
}
</script>

<style >
#map {
  width: 100%;
  height: 500px;
}
</style>
