<template>
    <section class="stores">
        <ProductItem
            v-for="(item, index) in products"
            :key="index"
            :item="item"
        />
    </section>
    <section class="footer">
        <FooterItem
            v-for="(item2, index) in footer"
            :key="index"
            :item="item2"
        />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import FooterItem from './FooterItem.vue';
    import ProductItem from './ProductItem.vue';
    import { mapGetters, mapMutations } from 'vuex';
    import { GETTERS, MUTATIONS } from '@/store';

    export default defineComponent ({
        name: 'CompThree',

        components: {
            ProductItem, 
            FooterItem,
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

    .footer {
        display: flex;
        flex-flow: row wrap;
        width: 1114px;
        height: 156px;
        margin: 35px 0;
    }
</style>