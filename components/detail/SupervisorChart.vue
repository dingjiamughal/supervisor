<template lang="pug">
    .chart-wrapper
        a-title(title="xx监控")
        .chart(ref="chart")
</template>

<script>
import ATitle from '~/components/Title';
export default {
    components: {
        ATitle
    },
    methods: {
        initChart() {
            const lineChart = this.$echarts.init(this.$refs.chart);
            lineChart.setOption({
                // title: {
                //     text: '标题'
                // },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['pro1', 'pro2', 'pro3', 'pro4', 'pro5']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
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
                        name: 'pro1',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'pro2',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'pro3',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'pro4',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'pro5',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart();
        });
    }
};

</script>

<style lang="less" scoped>
.chart {
    width: 100%;
    height: 500px;
    background: #fff;
}
</style>
