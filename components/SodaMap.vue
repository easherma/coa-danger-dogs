<template>
  <div>
    <mapbox-map />
    <div>
      <vue-good-table
        :columns="columns"
        :rows="$store.state.queryRows"
        max-height="500px"
        style-class="vgt-table striped condensed"
        max-width="20px"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MapboxMap from '~/components/MapboxMap'
import { VueGoodTable } from 'vue-good-table';

export default {
  components: {
    MapboxMap,
    VueGoodTable
  },
  data() {
    return {
      columns: [
        {
          field: ':@computed_region_a3it_2a2z',
          type: 'number',
          label: ':@computed_region_a3it_2a2z',
          hidden: true,
        },
        {
          field: 'range_ft',
          type: 'number',
          label: 'Distance(feet)',
          width: '5px',
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
          field: 'address',
          type: 'text',
          label: 'address'
        },
        {
          field: 'location',
          type: 'text',
          label: 'location',
          hidden: true,
        },
        {
          field: 'location_address',
          type: 'text',
          label: 'location_address',
          hidden: true,
        },
        {
          field: 'location_state',
          type: 'text',
          label: 'State',
          width: '5px',
          hidden: true
        },
        {
          field: 'location_zip',
          type: 'number',
          label: 'location_zip'
        },
        {
          field: 'zip_code',
          type: 'number',
          label: 'zip_code',
          hidden: true,
        },
      ],
  };
  },
  computed: mapState([
    'sodaData'
  ]),
  mounted() {
    this.$store.dispatch('getData')
  }
}
</script>
