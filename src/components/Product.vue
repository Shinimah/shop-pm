<template>
    <div class="item" @click="$emit('open-modal', item)">
        <img :src="item.img" :alt="item.imgAlt">
        <p class="description">{{item.desc}}</p>
        <p class="price">{{item.price}}</p>
        <p class="note">{{item.note}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@/store'
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