<template>
    <div class="left">
        <div class="leftTitle">
            <div id="iconV">
                <TitleIcon />
            </div>
            <h2>Departments</h2>
        </div>
        <AllCategories />
        <FilterArea 
          btn="Collapsed filters"
        />
        <CheckLeft2 />
    </div>
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

    .leftTitle {
        display: inline-flex;
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

    .leftTitle h2 {
        margin: 15px 50px;
    }

    #iconV {
        margin: 12px 1px;
    }

    .btn2 {
        position: relative;
        margin: 40px 0 10px;
        padding-left: 10px;
        text-align: left;
        background-color: rgb(255, 255, 255);
        border-radius: 0.5vmin;
        width: 304px;
        height: 40px;
    }

    .filter {
        width: 304px;
        padding: 5px 10px 10px;
        margin: 20px 0;
        background-color: #F7F7FA;
    }

    .catalog {
        position: relative;
        display: flexbox;
        width: 100%;
        font-weight: 400;
    }

    .right {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .note {
        font-size: 16px;
    }

    .note2 {
        font-size: 14px;
    }

    .line p {
        margin: 0 10px;
    }

    .down {
        position: absolute;
        right: 5px;
        bottom: 5px;
    }

    .headFilter {
        display: flex;
        position: relative;
    }

    .up {
        position: absolute;
        top: 18px;
        right: 5px;
    }

    h2:hover {
        color: red;
    }
</style>