import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: [],
    weather_api: "d4309394c1f05e511c79a76c3992237d",
    base_api: "https://api.openweathermap.org/data/2.5/",
    background: ""
  },
  getters: {
    location(state) {
      return state.location
    },
    background(state) {
      return state.background
    }
  },
  mutations: {
    addLocation: (state, loc) => {
      state.location.push(loc)
    },
    changeBackground: (state, bg) => {
      state.background = bg
    }
  },
  actions: {},
  modules: {}
})
