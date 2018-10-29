<template lang="pug">
    section.container
        a-title(a-title="sadfa的萨芬")
        el-row(:gutter="30", v-for="(listRow, index) in items", :key="index")
            el-col(:md="8", :sm="12", v-for="col in listRow" :key="col.id")
                el-card.card
                    div(slot="header")
                        span {{col.name}}
                        el-button.card-link(type="text")
                            nuxt-link(:to="'/detail/' + col.link") 查看详情
                    .card-list-item(v-for="item in col.item", :key="item.name")
                        span {{item.name}}
                        span :
                        span.value {{item.message}}
</template>

<script>
import cardData from '~/mock/Type';
import ATitle from '~/components/Title';
export default {
    data() {
        return {
            cardData
        };
    },
    components: {
        ATitle
    },
    computed: {
        items() {
            let arr = [];
            let newArr = [];

            if (cardData.length <= 3) {
                arr = Array.of(cardData);
            }
            else {
                cardData.forEach((item, i) => {
                    newArr.push(item);
                    if (i % 3 === 2 || i === cardData.length - 1) {
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
