<template>
    <CategoryList/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CategoryList from '../CategoryList.vue';

    export default defineComponent({
        name: 'AllCategories',

        components: { CategoryList },
    })
</script>
