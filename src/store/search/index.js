//search模块仓库
import { reqGetSearchInfo } from '@/api'


export default {
    namespaced: true,

    actions: {
        async getSearchList({ commit }, params = {}) {
            let result = await reqGetSearchInfo(params)
            if (result.code == 200) {
                commit("GETSEARCHLIST", result.data)
            }
        }
    },

    mutations: {
        GETSEARCHLIST(state, searchList) {
            state.searchList = searchList
        }
    },

    state: {
        searchList: {}
    },

    getters: {
        goodsList(state) {
            return state.searchList.goodsList
        },

        trademarkList(state) {
            return state.searchList.trademarkList
        },

        attrsList(state) {
            return state.searchList.attrsList
        },
    }

}