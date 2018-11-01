<template lang="pug">
    section.container
        el-row(:gutter="30")
            el-col(:md="8", :sm="12", v-for="col in cardData" :key="col.id")
                el-card.card
                    div(slot="header")
                        span {{col.name}}
                        el-button.card-link(type="text")
                            nuxt-link(:to="{path: '/detail/' + col.link, query: {element: 'performance'}}") 查看详情
                    .card-list-item(v-for="item in col.item", :key="item.name")
                        span {{item.name}}
                        span :
                        span.value {{item.message}}
</template>

<script>
import ATitle from '~/components/Title';
import {mapState} from 'vuex';

export default {
    data() {
        return {
            // cardData
        };
    },
    components: {
        ATitle
    },
    fetch(ctx) {
        return Promise.all([
            ctx.store.dispatch('getTypeList')
        ]);
    },
    computed: {
        ...mapState([
            'cardData'
        ]),
        items() {
            let arr = [];
            let newArr = [];

            if (this.cardData.length <= 3) {
                arr = Array.of(this.cardData);
            }
            else {
                this.cardData.forEach((item, i) => {
                    newArr.push(item);
                    if (i % 3 === 2 || i === this.cardData.length - 1) {
                        arr.push(newArr);
                        newArr = [];
                    }
                });
            }

            return arr;
        }
    }
};

</script>

<style lang="less" scoped>

.container {
    // padding-left: @offsetLeft;

    .card {
        margin-bottom: 20px;
    }

    .card-link {
        float: right;
        padding: 3px 0;

        a {
            color: inherit;
            outline: none;
            text-decoration: none;
        }
    }

    .card-list-item {
        margin-bottom: 16px;

        .value {
            padding-left: 16px;
        }
    }
}

</style>
