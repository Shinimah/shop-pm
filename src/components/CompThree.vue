<template>
    <div class="stores">
        <ProductItem
            v-for="(item, index) in products"
            :key="index"
            :item="item"
        />
    </div>
    <div class="footer">
        <FootContent 
            v-for="(item2, index) in footer"
            :key="index"
            :item="item2"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import FootContent from './Footer.vue';
    import ProductItem from './Product.vue';
    import { mapGetters, mapMutations } from 'vuex';
    import { GETTERS, MUTATIONS } from '@/store';

    export default defineComponent ({
        name: 'CompThree',

        components: {
            ProductItem, 
            FootContent,
        },

        computed: {
            ...mapGetters({
                products: GETTERS.GET_PRODUCTS,
                footer: GETTERS.GET_FOOTER,
            })
        },
        methods: {
            ...mapMutations({
                showNewProducts: MUTATIONS.SET_PRODUCTS,
            }),
        }
    })
</script>

<style lang="scss" scoped>
    .stores {
        display: flex;
        flex-flow: row wrap;
        width: 1114px;
        margin: 3px;
        border: none;
    }

    .item {
        display: inline-block;
        width: 250px;
        height: 492px;
        margin: 0 7px;
    }

    .footer {
        display: flex;
        flex-flow: row wrap;
        width: 1114px;
        height: 156px;
        margin: 35px 0;
    }
</style>