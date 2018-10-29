<template lang="pug">
    .detail
        el-tabs(tab-position="left")
            el-tab-pane(label="xx监控")
                .chart-wrapper
                    a-title(title="xx监控")
                    .chart(ref="chart")
            el-tab-pane(label="错误信息")
                com-error(:table-data="errorTableData", :current-page="2")
            el-tab-pane(label="活动状态")
                .activity-table-wrapper
                    a-title(title="活动状态")
                    activity-table(:table-data="tableDataA")
</template>

<script>
import ATitle from '~/components/Title';
import ComError from '~/components/detail/Error';
import ActivityTable from '~/components/Activity';

export default {
    components: {
        ATitle,
        ComError,
        ActivityTable
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
            tableDataA: [{
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
    },
    methods: {
        echartsInit() {
            const myChart = this.$echarts.init(this.$refs.chart);
            myChart.setOption({
                // title: {
                //     text: '折线图堆叠'
                // },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        }

    },
    mounted() {
        this.echartsInit();
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

.chart {
    width: 100%;
    height: 300px;
    background: #fff;
}
</style>
