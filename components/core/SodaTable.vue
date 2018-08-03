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
  props: {
    // columns: {
    //   type: Array,
    //   required: true,
    // },
    // rows: {
    //   type: Array,
    //   default: '',
    // },
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
    :columns="columns"
    :rows="$store.state.sodaData"
    :fixed-header="true"
    :line-numbers="true"
    max-height="500px"
  />
  ```
</docs>
