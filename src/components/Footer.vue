<template>
    <div class="item">
        <svg>
          <use v-bind:xlink:href="getIcon"></use>
        </svg>
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
    },
    computed: {
    getIcon () {
      return `./sprite.svg#${this.item.img}`
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
    display: flex;
}
</style>