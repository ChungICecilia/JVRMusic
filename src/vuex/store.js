import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        artistsInfo: null,
        path: "",
        showInfo: false,
        showNews: false,
        language: 1,
        iconBack: false
    },
    getters: {},
    mutations: {
        setArtistsInfo(state, data) {
            state.artistsInfo = data;
        },
        setPach(state, data) {
            state.pach = data;
        },
        setShowInfo(state, data) {
            state.showInfo = data
        },
        setShowNews(state, data) {
            state.showNews = data
        },
        setLanguage(state, data) {
            state.language = data
        },
        setIconBack(state, data) {
            state.iconBack = data
        }
    },
    actions: {},
})

export default store