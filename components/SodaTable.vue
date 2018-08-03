<template>
  <vue-good-table
    :columns="columns"
    :rows="$store.state.sodaData"
    :fixed-header="true"
    :line-numbers="true"
    max-height="500px"
  />
</template>

<script>
import { mapState } from 'vuex'
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'SodaTable',
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          field: ':@computed_region_a3it_2a2z',
          type: 'number',
          label: ':@computed_region_a3it_2a2z'
        },
        {
          field: 'address',
          type: 'text',
          label: 'address'
        },
        {
          field: 'description_of_dog',
          type: 'text',
          label: 'description_of_dog'
        },
        {
          field: 'first_name',
          type: 'text',
          label: 'first_name'
        },
        {
          field: 'last_name',
          type: 'text',
          label: 'last_name'
        },
        {
          field: 'location',
          type: 'text',
          label: 'location'
        },
        {
          field: 'location_address',
          type: 'text',
          label: 'location_address'
        },
        {
          field: 'location_state',
          type: 'text',
          label: 'location_state'
        },
        {
          field: 'location_zip',
          type: 'number',
          label: 'location_zip'
        },
        {
          field: 'zip_code',
          type: 'number',
          label: 'zip_code'
        }
      ],
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

<docs>
  ```vue
  <vue-good-table
    :columns="[
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ]s"
    :rows="[
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ]"
    :fixed-header="true"
    :line-numbers="true"
    max-height="500px"
  />
  ```
</docs>
