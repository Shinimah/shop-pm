<template>
    <div class="stores">
        <ProductItem
            v-for="(item, index) in products"
            :key="index"
            :item="item"
            @open-modal="showModal"
        />
    </div>
    <button @click="showNewProducts(newProducts)">Показать еще</button>
    <div class="footer">
        <div class="foot">
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LightIc from '@/components/iconComp/light.vue';
import FixIc from '@/components/iconComp/fix.vue';
import PaletteIc from '@/components/iconComp/palette.vue';
import ProductItem from './Product.vue'
import { mapGetters, mapMutations } from 'vuex';
import { GETTERS, MUTATIONS } from '@/store';
import {newProducts} from '@/new-products';

export interface Product {
    img: string
    imgAlt: string
    desc: string
    price: string
    note: string
}

export default defineComponent ({
    name: 'CompThree',
    components: {
        LightIc,
        FixIc,
        PaletteIc,
        ProductItem
    },
    props: {  
         light: String,
         light2: String,
         fix: String,
         fix2: String,
         palette: String,
         palette2: String,
    },
    data () {
        return {
            newProducts
        }
    },
    computed: {
        ...mapGetters({
            products: GETTERS.GET_PRODUCTS
        })
    },
    methods: {
        ...mapMutations({
            showNewProducts: MUTATIONS.SET_PRODUCTS
        }),

        showModal(item: Product) {
            console.log(item.desc)
        }
    }
})
</script>

<style lang="scss" scoped>
.stores {
    display: flex;
    flex-flow: row wrap;
    width: 1114px;
}
.price {
    font-size: 23px;
    font-weight: 700;
}
.note {
    font-size: 13px;
    color: grey;
}
.item {
    display: inline-block;
    border: solid rgb(207, 207, 207);
    width: 250px;
    height: 472px;
    margin: 0 7px;
}

.foot {
    display: inline-block;
    text-align: center;
    margin: 35px 0px;
    padding: 5px;
    width: 351px;
    height: 156px;
    background-color: #EDEDF0;
    border-radius: 0.8vmin;
}
.footTitle {
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin:0;
}
.more {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    text-align: center;
}
.middle {
    margin: 0 15px;
}
</style>