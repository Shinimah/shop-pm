<template>
    <div class="filter">
        <button type="button" class="btn">Show all</button>
        <button type="button" class="btn">Auction</button>
        <button type="button" class="btn">Buy now</button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        name: 'ButtonFilter'
    })
</script>

<style lang="scss" scoped>
    .filter {
        display: flex;
        align-content: center;
        align-items: center;
        margin: 0 30px;
        width: 200px;
        height: 36px;
        color: #2264D1;
    }

    .btn {
        height: 36px;
        width: 90px;
        border: none;
        border-radius: 4px;
        color: #5A5B6A;
    }
</style>>