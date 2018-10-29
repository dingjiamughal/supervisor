<template lang="pug">
    .error-wrapper
        a-title(title="错误信息")
        .error-table-wrapper(ref="tableWrapper")
            error-table(:table-data="tableData", :height="maxHeight")
        el-pagination.pagination(
            background
            @size-change="handleSizeChange",
            @current-change="handleCurrentChange",
            :current-page="currentPage",
            :page-sizes="[10, 30, 50]",
            :page-size="10",

            layout="total, sizes, prev, pager, next, jumper",
            :total="100"
        )

</template>

<script>
import ATitle from '~/components/Title';
import ErrorTable from '~/components/ErrorDataTable';
export default {
    components: {
        ATitle,
        ErrorTable
    },
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        maxHeight() {
            let tbHeight;
            this.$nextTick(() => {
                console.log(this.$refs.tableWrapper.offsetHeight)
                tbHeight = this.$refs.tableWrapper.offsetHeight > 50 ? 50 : this.$refs.tableWrapper.offsetHeight - 50;
            });
            return tbHeight;
        }
    },

    methods: {
        handleSizeChange(v) {
            console.log(`每页${v}条`);
        },
        handleCurrentChange(v) {
            console.log(`当前页：${v}`);
        }
    }
};
</script>

<style lang="less" scoped>
.error-wrapper {

    .error-table-wrapper {
        height: ~'calc(100vh - 200px)';
    }
}
.pagination {
    text-align: right;
}
</style>
