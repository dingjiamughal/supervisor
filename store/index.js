export const state = () => ({
    counter: 'adf'
});

export const mutations = {
    setCount(state, payload) {
        state.counter = payload;
    }
};

export const actions = {
    getCount({commit}, data) {
        commit('setCount', data);
    }
};
