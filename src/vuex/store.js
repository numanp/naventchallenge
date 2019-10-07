import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations';
import getters from './getters'
import actions from './actions';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const state = {
    price: 1400000,
    m2: 3680,
    clickedHeart: false,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
  strict: false //In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown.
})
