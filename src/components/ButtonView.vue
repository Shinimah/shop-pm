<template>
    <div class="img-filter">
        <button class="btn"><ViewList /></button>
        <button class="btn"><ViewGrid /></button>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import ViewList from '@/components/iconComp/ViewList.vue';
    import ViewGrid from '@/components/iconComp/ViewGrid.vue';

    export default defineComponent({
        name: 'ButtonView',

        components: {
            ViewList,
            ViewGrid,
        }
    })
</script>

<style lang="scss" scoped>
    .img-filter {
        display: flex;
        margin: 0px 30px;
        width: 190px;
        height: 36px;
    }

    .btn {
        height: 36px;
        width: 68px;
        border: none;
        border-radius: 4px;
    }
</style>>