<template>
    <div class="right">
        <div class="rightUp">
            <div class="options">
                <button class="btn">
                    <div>
                        <label class="sort" for="sel">Sort by</label>
                        <select name="" id="sel">
                            <option value="">Useless first</option>
                            <option value="">Usable first</option>
                        </select>
                    </div>
                </button>
                <div class="btn2">
                    <select name="" >
                        <option value="">Condition</option>
                        <option value="">Price</option>
                        <option value="">Size</option>
                    </select>
                </div>
                <div class="btn2">
                    <select name="">
                        <option value="">Delivery options</option>
                        <option value="">Other options</option>
                    </select>
                </div>
            </div>

            <button-filter class="btn-filter"/>
            <button-view class="btn-view"/>

        </div>

        <p><strong>Related</strong></p>

        <CompThree />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CompThree from '@/components/CompThree.vue';
    import ButtonFilter from '@/components/ButtonFilter.vue'
    import ButtonView from '@/components/ButtonView.vue';

    export default defineComponent ({
        name: 'CompTwo',
        
        components: {
            CompThree,
            ButtonFilter,
            ButtonView,
        },
    })
</script>

<style lang="scss" scoped>
    .right {
        position: relative;
        width: 1114px;
    }

    @mixin buttons {
        display: flex;
        align-items: center;
        height: 36px;
        margin: 10px;
        padding: 10px;
        background-color: white;
        border-radius: 4px;
        align-items: flex-start;
    }

    .rightUp {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 1px;
    }

    .options {
        display: flex;
        align-items: center;
    }

    .sort {
        padding: 5px;
    }

    .btn-view {
    align-items: flex-end;
    margin-right: 1px;
    }

    .btn-filter {
    margin-right: 150px;
    }

    .btn {
        @include buttons;
    }

    .btn2 {
        @include buttons;
        height: 19px;
    }

    #sel {
        padding: 0 6px;
    }
</style>