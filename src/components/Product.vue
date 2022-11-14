<template>
    <div class="item" @click="$emit('open-modal', item)">
        <img :src="require(`@/components/images/${item.img}`)" :alt="item.imgAlt">
        <p class="description">{{item.desc}}</p>
        <p class="price">{{item.price}}</p>
        <p class="note">{{item.note}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@/store';

export default defineComponent({
    name: 'ProductItem',

    props: {
        item: {
            type: Object as PropType<Product>,
            required: true
        }
    }
})
</script>

<style>
.item {
    margin: 1px;
    padding: 4px;
    
}
.description {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #19191D;
}
.price {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.87);
}
.note {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #787885;
}
</style>