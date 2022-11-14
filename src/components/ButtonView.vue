<template>
    <div class="img-filter">
        <button class="btn3"><ViewList/></button>
        <button class="btn3"><ViewGrid/></button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ViewList from '@/components/iconComp/viewL.vue';
import ViewGrid from '@/components/iconComp/viewG.vue'

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
    align-content: flex-end;
    margin: 0px 30px;
    width: 190px;
    height: 36px;
}
.btn3 {
    height: 36px;
    width: 68px;
    border: none;
    border-radius: 4px;
}
</style>>