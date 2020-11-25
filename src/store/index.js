/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";
import bookshelf from '../../library/everything.json';

Vue.use(Vuex);

function loadData(callback) {
  callback(bookshelf)
}


export default new Vuex.Store({
  state: {
    bookshelf: {},
    hasLoaded: false,
  },
  getters: {
    bookshelf(state) {
      return state.bookshelf;
    },
  },
  mutations: {
    setBookshelf(state, bookshelf) {
      state.bookshelf = bookshelf;
    },
    setLoaded(state) {
      state.hasLoaded = true;
    }
  },
  actions: {
    fetchData(context) {
      if (!context.state.hasLoaded) {
        context.dispatch("fetchRecords");
      }
    },
    fetchRecords(context) {
      context.commit("setBookshelf", bookshelf);
      context.commit('setLoaded')
    },
  }
});
