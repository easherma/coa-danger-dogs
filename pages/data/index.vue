<template>
  <main>
    <h2> This is what the data looks like </h2>
    <v-client-table
      :data="$store.state.sodaData"
      :columns="columns"
      :options="options"/>
      <!-- {{ sodaData }} -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
// import ClientTable from 'vue-tables-2';
// const url = "https://data.austintexas.gov/resource/h8x4-nvyi.json";
export default {
  // components: {
  //   ClientTable
  // },
  data() {
    return {
      columns: [
        ':@computed_region_a3it_2a2z',
        'address',
        'description_of_dog',
        'first_name',
        'last_name',
        'location',
        'location_address',
        'location_state',
        'location_zip',
        'zip_code'
      ],
      options: {
              // see the options API
          }
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
