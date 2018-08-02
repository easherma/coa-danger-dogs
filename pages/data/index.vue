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
<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
