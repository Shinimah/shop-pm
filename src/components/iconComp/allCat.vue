<template>
    <ListLeft />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ListLeft from '../ListLeft.vue';

    export default defineComponent({
        name: 'AllCat',

        components: { ListLeft },
    })
</script>
