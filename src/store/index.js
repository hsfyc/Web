import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import searchOptions from './search'
import homeOptions from './home'


export default new Vuex.Store({
    modules: {
        search: searchOptions,
        home: homeOptions
    }
})