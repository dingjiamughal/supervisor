<template lang="pug">
    .detail
        el-tabs(tab-position="left", v-model="cardType", @tab-click="handleClickTab")
            el-tab-pane(label="xx监控", name="performance")
                com-chart(:chart-data="performance", @refresh="upDateChart")
            el-tab-pane(label="错误信息", name="errorMessage")
                com-error(:table-data="errorList", :current-page="errorPageNo", :loading="errorLoading", @changeSize="handleChangeSize", @changeNo="handleChangeNo")
            el-tab-pane(label="活动状态", name="activityStatus")
                com-activity(:table-data="activityList", :current-page="activityPageNo", :loading="activityLoading", @changeSize="handleChangeSize", @changeNo="handleChangeNo")
</template>

<script>
import ComChart from '~/components/detail/SupervisorChart';
import ComError from '~/components/detail/Error';
import ComActivity from '~/components/detail/Activity';
import {mapState} from 'vuex';

export default {
    components: {
        ComChart,
        ComError,
        ComActivity
    },
    watchQuery: ['element'],
    async fetch({store, route, query}) {
        const {params, ...rest} = route;
        await store.commit('detail/setType', params.type);
        const types = {
            performance: 'getPerformance',
            errorMessage: 'getErrorList',
            activityStatus: 'getActivityList'
        };

        await store.dispatch(`detail/${types[query.element]}`);
    },
    computed: {
        ...mapState('detail', [
            'type',
            'performance',
            'errorList',
            'activityList',
            'errorLoading',
            'activityLoading',
            'errorPageNo',
            'activityPageNo',
            'errorPageSize',
            'activityPageSize'
        ])
    },
    data() {
        return {
            cardType: this.$route.query.element
        };
    },
    methods: {
        upDateChart() {
            this.$store.dispatch('detail/getPerformance');
        },

        handleClickTab(tab, event) {
            this.$router.push({
                query: {
                    element: tab.name
                }
            });
        },

        handleChangeSize({type, size}) {
            if (type === 'error') {
                this.$store.dispatch('detail/changeErrorParams', {
                    errorPageNo: 1,
                    errorPageSize: size
                });
            }
            if (type === 'activity') {
                this.$store.dispatch('detail/changeActivityParams', {
                    activityPageNo: 1,
                    activityPageSize: size
                });
            }
        },

        handleChangeNo({type, no}) {
            if (type === 'error') {
                this.$store.dispatch('detail/changeErrorParams', {
                    errorPageNo: no
                });
            }

            if (type === 'activity') {
                this.$store.dispatch('detail/changeActivityParams', {
                    activityPageNo: no
                });
            }
        }
    }
};

</script>

<style lang="less" scoped>
.chart-wrapper,
.error-table-wrapper,
.activity-table-wrapper {
    margin-bottom: 20px;
}

</style>
