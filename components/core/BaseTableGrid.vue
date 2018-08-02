<template>
  <div id="people">
    <client-table
      :data="tableData"
      :columns="columns"
      :options="options"/>
  </div>
</template>

<script>
import ClientTable from 'vue-tables-2';

export default {
  name: 'BaseTableGrid'
  ,
  components: {
    ClientTable
  },
  data() {
    return{
      data: {
          columns: ['id', 'name', 'age'],
          tableData: [
              { id: 1, name: "John", age: "20" },
              { id: 2, name: "Jane", age: "24" },
              { id: 3, name: "Susan", age: "16" },
              { id: 4, name: "Chris", age: "55" },
              { id: 5, name: "Dan", age: "40" }
          ],
          options: {
              // see the options API
          }
      }
    }
  }

}

</script>
<docs>
  ```vue
  <div id="people">
    <client-table
      :data="tableData"
      :columns="columns"
      :options="options"/>
  </div>
  ```
</docs>
