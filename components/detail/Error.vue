<template lang="pug">
    .error-wrapper
        a-title(title="错误信息")
        .error-table-wrapper(ref="tableWrapper", v-loading.lock="loading")
            error-table(:table-data="tableData")
        el-pagination.pagination(
            background,
            @size-change="handleSizeChange",
            @current-change="handleCurrentChange",
            :current-page="currentPage",
            :page-sizes="[10, 30, 50]",
            :page-size="10",
            :pager-count="5",
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
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {

    },

    methods: {
        handleSizeChange(v) {
            this.$emit('changeSize', {
                type: 'error',
                size: v
            });
        },
        handleCurrentChange(v) {
            this.$emit('changeNo', {
                type: 'error',
                no: v
            });
        }
    }
};
</script>

<style lang="less" scoped>
.error-wrapper {

    .error-table-wrapper {
        height: ~'calc(100vh - 180px)';
        overflow: auto;
    }
}
.pagination {
    text-align: right;
    margin: 20px 0 0;
}
</style>
