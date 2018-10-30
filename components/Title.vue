<template lang="pug">
    p.title
        | {{title}}
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
};

</script>

<style lang="less" scoped>
.title {
    padding-left: 14px;
    border-left: 4px solid @blue;
    color: #333;
    margin-bottom: 16px;
    font-weight: 700;
}
</style>

