import Vue from 'vue'
import { ClientTable } from 'vue-tables-2';


// const tachyons = function() {
//     return {
//         framework:'tachyons',
//         table:'f6 w-100 center" cellspacing="0"',
//         row:'pv3 pr3 bb b--black-20',
//         column:'fw6 bb b--black-20 tl pb3 pr3 bg-white',
//     }
// }
// Vue.use(ClientTable, {}, false);
Vue.use(ClientTable, {}, false, 'bootstrap4', 'footerPagination');
