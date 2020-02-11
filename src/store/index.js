import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: []
  },
  getters: {
    location(state) {
      return state.location
    }
  },
  mutations: {
    addLocation: (state, loc) => {
      state.location.push(loc)
    }
  },
  actions: {},
  modules: {}
})
