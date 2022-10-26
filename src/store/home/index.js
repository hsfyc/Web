import { reqCategoryList, reqGetBannerList, reqGetFloor } from '@/api'

//home模块仓库
export default {
    namespaced: true,

    actions: {
        async categoryList({ commit }) {
            let result = await reqCategoryList();
            result.data.pop()

            if (result.code == 200) {
                commit("CATEGORYLIST", result.data);
            }
        },

        async getBannerList({ commit }) {
            let result = await reqGetBannerList();
            if (result.code == 200) {
                commit("GETBANNERLIST", result.data);
            }
        },

        async getFloorList({ commit }) {
            let result = await reqGetFloor();
            if (result.code == 200) {
                commit("GETFLOORLIST", result.data)
            }
        }
    },

    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        GETBANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
        GETFLOORLIST(state, floorList) {
            state.floorList = floorList
        }
    },

    state: {
        categoryList: [],
        bannerList: [],
        floorList: []
    },

    getters: {

    }

}