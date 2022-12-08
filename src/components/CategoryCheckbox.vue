<template>
    <section class="left">
        <div class="left-title">
            <TitleIcon class="icon-v"/>
            <h2>Departments</h2>
        </div>
        <AllCategories />
        <FilterArea 
          btn="Collapsed filters"
        />
        <CheckLeft2 />
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TitleIcon from '@/components/iconComp/TitleIcon.vue';
    import AllCategories from '@/components/iconComp/AllCategories.vue';
    import FilterArea from '@/components/FilterArea.vue';

    export default defineComponent ({
        name: 'CompOne',
        
        components: {
            TitleIcon,
            AllCategories,
            FilterArea,
        },
    })
</script>

<style lang="scss" scoped>
    .left {
        font-family: 'Inter', sans-serif;
        width: 355px;
        height: 1928px;
    }

    .left-title {
        display: flex;
        padding: 8px;
        margin: 30px 0;
        border: solid rgb(194, 194, 255);
        border-radius: 1vmin;
        width: 304px;
        height: 56px;
            &:hover {
            color: red;
            }
    }

    h2 {
        margin: 15px 50px;
    }

    .icon-v {
        margin: 12px 1px;
    }
</style>