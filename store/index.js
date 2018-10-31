export const state = () => ({
    cardData: []
});

export const mutations = {
    setCount(state, payload) {
        state.cardData = payload;
    }
};

export const actions = {
    getCount(ctx, data) {
        return this.$axios.$get('typeList').then(data => {
            ctx.commit('setCount', data.result);
        });
    }
};
