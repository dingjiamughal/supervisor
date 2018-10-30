<template lang="pug">
    el-table.activity-table(
        :data="tableData"
        border
    )
        el-table-column(
            prop="uid"
            label="用户id"
        )
        el-table-column(
            prop="verb"
            label="动作"
            width="180"
        )
        el-table-column(
            prop="object"
            label="具体内容"
        )
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        tableData: Array
    }
};
</script>

<style lang="less" scoped>

</style>
