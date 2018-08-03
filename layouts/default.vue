<template>
  <div>
    <div class="bg-gold mw9 center pa1 pt3-ns ph7-l">
      <base-header
        title="Dangerous Dogs of Austin"
        subtitle1="A collection of data for your saftey, education, and empowerment!"
        subtitle2="made by Eric Sherman for City of Austin"
      />
    </div>
    <nav class="db dt-l w-100 border-box pa3 ph7-l bg-blue">
      <Navigation />
    </nav>
    <div class="mw9 center pa1 pt3-ns ph7-l">
      <nuxt/>
    </div>
    <footer class="bg-yellow ph3 ph4-ns pv2 ">
      <nav class="db dt-l w-100 pb3 tc">

        <Navigation />
      </nav>
    </footer>
  </div>
</template>

<style>
html {
/* using tachyons! */
}
</style>

<script>
import Navigation from '~/components/Navigation.vue'
import BaseHeader from '~/components/core/BaseHeader'

export default {
  components: {
    Navigation,
    BaseHeader
  }
}
</script>
