<template>
<section class="container">
  {{ data }}
</section>
</template>

<script>
export default {
  async asyncData({
    params
  }) {
    let {
      data
    } = await app.$axios.$get(`https://data.austintexas.gov/resource/h8x4-nvyi.json`)
    return {
      data
    }
  }
}
</script>
