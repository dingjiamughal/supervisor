<template lang="pug">
    .chart-wrapper
        a-title(title="xx监控")
        i.el-icon-refresh.refresh(@click="$emit('refresh')")
        .chart(ref="chart", v-loading="performanceLoading")
</template>

<script>
import ATitle from '~/components/Title';
import {mapState} from 'vuex';
export default {
    components: {
        ATitle
    },
    props: {
        chartData: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        initChart() {
            const lineChart = this.$echarts.init(this.$refs.chart);
            let self = this;
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
                    data: ['1', '2', '3', '4', '5', '6', '7']
                },
                yAxis: {
                    type: 'value'
                },
                series: this.chartData
            });
        }
    },
    computed: {
        ...mapState('detail', [
            'performanceLoading'
        ])
    },
    watch: {
        performanceLoading(oldVal, newVal) {
            if (newVal) {
                this.initChart();
            }
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
.chart-wrapper {
    width: 100%;
}
.chart {
    width: 100%;
    height: 500px;
    background: #fff;
}
.refresh {
    position: absolute;
    font-size: 24px;
    top: 40px;
    right: 40px;
    z-index: 9;
    cursor: pointer;

    &:hover {
        opacity: .6;
    }
}
</style>
