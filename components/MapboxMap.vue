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
      @map-init="mapInit"
      @map-load="mapLoaded"

    />
  </article>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';



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
    mapInit(map) {
      map.addControl(new MapboxGeocoder({
          accessToken: "pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA"
      }));
		},
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
