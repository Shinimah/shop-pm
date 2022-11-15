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
        <!-- <div class="foot">
                <LightIc/>
            <p class="footTitle">{{light}}</p>
            <p class="more">{{light2}}</p>
        </div>
        <div class="foot middle">
            <FixIc/>
            <p class="footTitle">{{fix}}</p>
            <p class="more">{{fix2}}</p>
        </div>
        <div class="foot">
            <PaletteIc/>
            <p class="footTitle">{{palette}}</p>
            <p class="more">{{palette2}}</p>
        </div> -->
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
        FootContent
    },
    props: {  
         light: String,
         light2: String,
         fix: String,
         fix2: String,
         palette: String,
         palette2: String,
    },
    computed: {
        ...mapGetters({
            products: GETTERS.GET_PRODUCTS,
            footer: GETTERS.GET_FOOTER
        })
    },
    methods: {
        ...mapMutations({
            showNewProducts: MUTATIONS.SET_PRODUCTS
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
// .price {
//     font-size: 23px;
//     font-weight: 700;
// }
// .note {
//     font-size: 13px;
//     color: grey;
// }
.item {
    display: inline-block;
    width: 250px;
    height: 492px;
    margin: 0 7px;
}
// .item2 {
//     display: flex;
//     width: 351px;
//     height: 156px;
// }
.footer {
    display: flex;
    flex-flow: row wrap;
    width: 1114px;
    height: 156px;
    margin: 35px 0;
}
// .middle {
//     margin: 0 15px;
// }
</style>