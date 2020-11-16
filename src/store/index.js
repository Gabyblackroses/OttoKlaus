import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    toys: [],
  },
  mutations: {
    SET_CURRENT_USER(state, user){ state.currentUser = user},
    GET_TOYS(state, toys){state.toys = toys}
  },
  actions: {
    setCurrentUser({commit}, user){
      commit('SET_CURRENT_USER', user)
    },
    getToys({commit}){
      axios.get('https://us-central1-prueba1-37063.cloudfunctions.net/api/toys').then(data => commit("GET_TOYS", response.data))
    }
  },
  modules: {
  }
})
