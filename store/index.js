export const state = () => ({
    cardData: []
});

export const mutations = {
    setTypeList(state, payload) {
        state.cardData = payload;
    }
};

export const actions = {
    async getTypeList(ctx, data) {
        const typeList = await this.ajax('typeList');
        ctx.commit('setTypeList', typeList);
    }
};
