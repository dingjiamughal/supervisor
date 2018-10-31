export const state = () => ({
    errorList: [],
    activityList: [],
    performance: []
});

export const mutations = {
    setErrorList(state, payload) {
        state.errorList = payload;
    }
};

export const actions = {
    getErrorList(ctx, data) {
        return this.$axios.$get('errorList', data).then(data => {
            console.log(data)
            ctx.commit('setErrorList', data.result);
        });
    }
};
