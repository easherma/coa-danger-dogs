<template>
  <article class="">
    <mapbox
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-97.743061, 30.267153],
        zoom: 9
      }"
      access-token="pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA"
      @map-load="mapLoaded"


    />
  </article>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import soda from 'soda-js';


const sodaOpts = {
        "apiToken" : "HoAwLl2kKqZiPzsfxb02maQBm"
}

const consumer = new soda.Consumer('data.austintexas.gov', sodaOpts);


export default {
  name: 'MapboxMap',
  components: {
    Mapbox
  },
  props: {

  },
  methods: {
    mapLoaded(map) {

      const geocoder = new MapboxGeocoder({
          accessToken: "pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA",
          bbox: [-97.938385,30.098665,-97.561485,30.516886]
      });
      map.addControl(geocoder, 'top-left');
      // socrata data
      map.addSource('DDDgeojson', {
        type: 'geojson',
        data: 'https://data.austintexas.gov/resource/h8x4-nvyi.geojson',
      });

      map.addLayer({
        'id': 'DDDlayer',
        'type': 'circle',
        paint: {
          'circle-radius': 3,
          'circle-color': '#bf0a00',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff'
        },
        'source': 'DDDgeojson',
      });
      // point for geocoder location
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf',
          'circle-stroke-width': 3,
          'circle-stroke-color': '#fff'
        }
      });
      geocoder.on('result', function(ev) {
        const searchResult = ev.result.geometry;
        // TODO move to store properly
        // this.$nuxt.$store.commit('searchPoint', ev.result.geometry)
        // this.$store.commit('SET_POINT', ev.result.geometry)
        // this.$store.dispatch('getPoint')
        window.$nuxt.$store.commit('SET_POINT', ev.result.geometry)
        //adds geocoded result
        map.getSource('single-point').setData(searchResult);
        //takes point and queries socrata to find nearby coords, sort by distance
        var pointSearch = `'POINT (${searchResult.coordinates[0]} ${searchResult.coordinates[1]})'`
        var query = `*, (distance_in_meters(location, ${pointSearch}) * 3.28084) AS range_ft`


        consumer.query()
          .withDataset('h8x4-nvyi')
          .select(`${query}`)
          .order(`range_ft`)
          .limit(10)
          .getRows()
            .on('success', function(rows) {         window.$nuxt.$store.commit('SET_ROWS', rows) })
            .on('error', function(error) { console.error(error); });
      });
    },
  }
}

</script>
<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
<docs>
  ```vue
  <mapboxMap
  />
  ```
</docs>
