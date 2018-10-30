<template lang="pug">
    .detail
        el-tabs(tab-position="left")
            el-tab-pane(label="xx监控")
                com-chart
            el-tab-pane(label="错误信息")
                com-error(:table-data="errorTableData", :current-page="2")
            el-tab-pane(label="活动状态")
                com-activity(:table-data="activityTableData", :current-page="2")
</template>

<script>
import ComChart from '~/components/detail/SupervisorChart';
import ComError from '~/components/detail/Error';
import ComActivity from '~/components/detail/Activity';

export default {
    components: {
        ComChart,
        ComError,
        ComActivity
    },
    // created() {
    //     console.log(this.supervisor)
    // },
    data() {
        return {
            errorTableData: [{
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            },
            {
                errorData: 'xxxxxxxxxxxxxxxxxxx',
                count: '1',
                originFile: 'ooooooooooo'
            }],
            activityTableData: [{
                uid: 'uid123',
                verb: 'click',
                object: 'xvcasfwevadv'
            },
            {
                uid: 'uid123',
                verb: 'click',
                object: 'xvcasfwevadv'
            },
            {
                uid: 'uid123',
                verb: 'click',
                object: 'xvcasfwevadv'
            },
            {
                uid: 'uid123',
                verb: 'click',
                object: 'xvcasfwevadv'
            }]
        };
    }
};

</script>

<style lang="less" scoped>
.chart-wrapper,
.error-table-wrapper,
.activity-table-wrapper {
    margin-bottom: 20px;
}
.detail {

}


</style>
