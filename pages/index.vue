<template>
  <section class="container">
    <div>
      <base-header
        title="Dangerous Dogs of Austin"
        subtitle1="A collection of data for your saftey, education, and empowerment"
        subtitle2="made by Eric Sherman for City of Austin"
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
import BaseHeader from '~/components/core/BaseHeader'
import { mapState } from 'vuex'

export default {
  components: {
    AppLogo,
    BaseHeader
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
/* use tachyons! http://tachyons.io */
</style>
