import Vue from 'vue'
import Vuex from 'vuex'
import toDo from './toDo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      toDo
    }
  })