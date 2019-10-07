export default {
    SET_CLICKED_HEART: (state, payload) => {
        state.clickedHeart = payload
    },
    SET_PRICE: (state, payload) => {
        state.m2 = (payload / 380)
        state.price = payload
    },
}