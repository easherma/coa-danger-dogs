<template>
  <article class="">
    <mapbox
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-97.743061, 30.267153],
        zoom: 9
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
  </article>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const query = `https://data.austintexas.gov/resource/h8x4-nvyi.geojson?&$order=distance_in_meters(location, 'POINT (-97.743061, 30.267153)')&$limit=5&$select=*, distance_in_meters(location, 'POINT (-97.743061, 30.267153)') AS range`;

export default {
  name: 'MapboxMap',
  components: {
    Mapbox
  },
  props: {
    // title: {
    //   type: String,
    //   required: false,
    //   default: '',
    // },
    // copy: {
    //   type: String,
    //   required: false,
    //   default: '',
    // }
  },
  // computed:{
  //   mapInit(map) {
  //     const Geocoder = new MapboxGeocoder();
  //     map.addControl(Geocoder);
	// 	}
  // },
  methods: {
    mapLoaded(map) {

      const geocoder = new MapboxGeocoder({
          accessToken: "pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA",
          bbox: [-97.938385,30.098665,-97.561485,30.516886]
      });
      map.addControl(geocoder);
      // socrata data
      map.addSource('DDDgeojson', {
        type: 'geojson',
        data: 'https://data.austintexas.gov/resource/h8x4-nvyi.geojson',
      });

      map.addLayer({
        'id': 'DDDlayer',
        'type': 'heatmap',
        'source': 'DDDgeojson',
      });
      // point for geocoder location
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [] // Notice that initially there are no features
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
        var searchResult = ev.result.geometry;
        map.getSource('single-point').setData(searchResult);
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
