<template lang="pug">
    .detail
        el-tabs(tab-position="left", v-model="cardType", @tab-click="handleClickTab")
            el-tab-pane(label="xx监控", name="performance")
                com-chart
            el-tab-pane(label="错误信息", name="errorMessage")
                com-error(:table-data="errorList", :current-page="errorPageNo", :loading="errorLoading", @changeSize="handleChangeSize", @changeNo="handleChangeNo")
            el-tab-pane(label="活动状态", name="activityStatus")
                com-activity(:table-data="activityList", :current-page="activityPageNo")
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

        if (query.element === 'errorMessage') {
            // console.log(this.errorPageSize)
            await store.dispatch('detail/getErrorList', {
                type: params.type
            });
        }

        if (query.element === 'activityStatus') {
            await store.dispatch('detail/getActivityList', {
                type: params.type
            });
        }
    },
    computed: {
        ...mapState('detail', [
            'errorList',
            'activityList',
            'errorLoading',
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
        },

        handleChangeNo({type, no}) {
            if (type === 'error') {
                this.$store.dispatch('detail/changeErrorParams', {
                    errorPageNo: no
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
