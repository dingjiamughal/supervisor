<template lang="pug">
    .app
        header
            .header-title
                nuxt-link(to="/")
                    | EasyDL Supervisor
        nuxt.app-container
</template>

<style lang="less" scoped>
header {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    height: @header-app-h;
    background: #fff;
    z-index: 9;

    .header-title {
        line-height: @header-app-h;
        display: inline-block;
        font-size: 25px;
        padding-left: @offsetLeft;

        a {
            color: #d64244;
            cursor: pointer;
            text-decoration: none;
            outline: none;
            transition: color .2s ease;
        }
    }
}

.app-container {
    padding: 20px @offsetLeft 20px;
    position: absolute;
    top: @header-app-h;
    left: 0;
    right: 0;
    bottom: 0;
    height: ~"calc(100% - 50px)";
    overflow: auto;
}
</style>
