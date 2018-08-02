import Vuex from 'vuex'

const url = "https://data.austintexas.gov/resource/h8x4-nvyi.geojson";

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      sodaData: [],
    },
    actions: {
      async getData ({ commit }) {
        const data = await this.$axios.$get(url)
        commit('SET_DATA', data)
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      SET_DATA (state, data) {
        state.sodaData = data
      }
    }
  })
}

export default createStore
