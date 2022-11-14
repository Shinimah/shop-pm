<template>
    <div class="filter">
            <button class="btn2">Show all</button>
            <button class="btn2">Auction</button>
            <button class="btn2">Buy now</button>
        </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'ButtonFilter'
})
</script>

<style lang="scss" scoped>
.filter {
    display: flex;
    align-content: center;
    margin: 0 30px;
    width: 200px;
    height: 36px;
}
.btn2 {
    height: 36px;
    width: 90px;
    border: none;
    border-radius: 4px;
}
</style>>