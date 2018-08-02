<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        coa-danger-dogs
      </h1>
      <h2 class="subtitle">
        website displaying information about dangerous dogs in Austin, Texas
      </h2>
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
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
#map {
  width: 100%;
  height: 500px;
}
</style>
