<template lang="pug">
    el-table.error-table(
        :data="tableData"
        :max-height="maxHeight"
        border
    )
        el-table-column(
            prop="errorData"
            label="错误信息"
        )
        el-table-column(
            prop="count"
            label="次数"
            width="180"
        )
        el-table-column(
            prop="originFile"
            label="对应源文件"
        )
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        tableData: Array,
        maxHeight: Number
    }
};
</script>

<style lang="less" scoped>
.error-table {
    width: 100%;
}
</style>
