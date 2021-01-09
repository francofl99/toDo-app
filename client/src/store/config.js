export default {
    state: {
        darkMode: false,
    },
    getters: {
        getDarkMode(state) {
            return state.darkMode
        }
    },
    mutations: {
        changeDarkModeState(state) {
            state.darkMode = !state.darkMode
        }
    }
}