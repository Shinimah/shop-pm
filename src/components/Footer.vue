<template>
    <div class="item">
        <img :src="item.icon" :alt="item.alt">
        <p class="title">{{item.title}}</p>
        <p class="message">{{item.message}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Footer } from '@/store';

export default defineComponent({
    name: 'FootContent',

    props: {
        item: {
            type: Object as PropType<Footer>,
            required: true
        }
    }
})
</script>