export default {
    setClickedHeart: ({commit}, payload) => {
        commit('SET_CLICKED_HEART', payload)
    },
    setPrice: ({commit}, payload) => {
        commit('SET_PRICE', payload)
    },
}