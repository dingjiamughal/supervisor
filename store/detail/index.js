export const state = () => ({
    errorList: [],
    activityList: [],
    performance: [],
    errorLoading: false,
    activityLoading: false,
    errorPageNo: 1,
    activityPageNo: 1,
    errorPageSize: 10,
    activityPageSize: 10
});

export const mutations = {
    setErrorList(state, payload) {
        state.errorList = payload;
        state.errorLoading = false;
    },
    setActivityList(state, payload) {
        state.activityList = payload;
        state.activityLoading = false;
    },
    setErrorLoading(state, payload) {
        state.errorLoading = payload;
    },
    setActivityLoading(state, payload) {
        state.activityLoading = payload;
    },
    setErrorParams(state, payload) {
        for (let [k, v] of Object.entries(payload)) {
            state[k] = v;
        }
    }
};

export const actions = {
    async getErrorList(ctx, data) {
        ctx.commit('setErrorLoading', true);
        const result = await this.ajax('errorList', {
            pageSize: ctx.state.errorPageSize,
            pageNo: ctx.state.errorPageNo,
            // type: data.type
        });
        // console.log(result);
        ctx.commit('setErrorList', result);
    },
    async getActivityList(ctx, data) {
        ctx.commit('setActivityLoading', true);
        const result = await this.ajax('activityList', {
            pageSize: ctx.state.activityPageSize,
            pageNo: ctx.state.activityPageNo,
            // ...data
        });
        ctx.commit('setActivityList', result);
    },
    async changeErrorParams(ctx, data) {
        ctx.commit('setErrorParams', data);
        ctx.dispatch('getErrorList');
    },
    async changeActivityParams(ctx, data) {
        ctx.commit('setErrorParams', data);
        ctx.dispatch('getActivityList');
    }
};
