export const state = () => ({
    errorList: [],
    activityList: [],
    performance: [],
    errorLoading: false,
    activityLoading: false,
    performanceLoading: false,
    errorPageNo: 1,
    activityPageNo: 1,
    errorPageSize: 10,
    activityPageSize: 10,
    type: ''
});

export const mutations = {
    setType(state, payload) {
        state.type = payload;
    },
    setPerformance(state, payload) {
        state.performance = payload;
        state.performanceLoading = false;
    },
    setErrorList(state, payload) {
        state.errorList = payload;
        state.errorLoading = false;
    },
    setActivityList(state, payload) {
        state.activityList = payload;
        state.activityLoading = false;
    },
    setPerformanceLoading(state, payload) {
        state.performanceLoading = payload;
    },
    setErrorLoading(state, payload) {
        state.errorLoading = payload;
    },
    setActivityLoading(state, payload) {
        state.activityLoading = payload;
    },
    setParams(state, payload) {
        for (let [k, v] of Object.entries(payload)) {
            state[k] = v;
        }
    }
};

export const actions = {
    async getPerformance(ctx, data) {
        ctx.commit('setPerformanceLoading', true);
        const result = await this.ajax('performance', {
            type: ctx.state.type
        });
        ctx.commit('setPerformance', result);
    },
    async getErrorList(ctx, data) {
        ctx.commit('setErrorLoading', true);
        const result = await this.ajax('errorList', {
            pageSize: ctx.state.errorPageSize,
            pageNo: ctx.state.errorPageNo,
            type: ctx.state.type
        });
        // console.log(result);
        ctx.commit('setErrorList', result);
    },
    async getActivityList(ctx, data) {
        ctx.commit('setActivityLoading', true);
        const result = await this.ajax('activityList', {
            pageSize: ctx.state.activityPageSize,
            pageNo: ctx.state.activityPageNo,
            type: ctx.state.type
        });
        ctx.commit('setActivityList', result);
    },
    async changeErrorParams(ctx, data) {
        ctx.commit('setParams', data);
        ctx.dispatch('getErrorList');
    },
    async changeActivityParams(ctx, data) {
        ctx.commit('setParams', data);
        ctx.dispatch('getActivityList');
    }
};
