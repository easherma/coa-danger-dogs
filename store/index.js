import Vuex from 'vuex'

const url = "https://data.austintexas.gov/resource/h8x4-nvyi.json";

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      sodaData: [],
      searchPoint: [],
    },
    actions: {
      async getData ({ commit }) {
        const data = await this.$axios.$get(url)
        commit('SET_DATA', data)
      },
      // async getSearchPoint ({ commit }) {
      //   const point = commit
      //   commit('SET_POINT', point)
      // },
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      SET_DATA (state, data) {
        state.sodaData = data
      },
      SET_POINT (state, payload) {
        state.searchPoint = payload
      }
    }
  })
}

export default createStore
