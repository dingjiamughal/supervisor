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
    font-size: 24px;
    font-weight: 700;
    color: #d64244;
    padding-bottom: 8px;
}
</style>

