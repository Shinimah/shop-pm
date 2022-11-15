<template>
<div class="right">
    <div class="rightUp">
        <div class="options">
            <button class="btn">
                <div>
                    <label for="sel">Sort by</label>
                    <select name="" id="sel">
                        <option value="">Useless first</option>
                        <option value="">Usable first</option>
                    </select>
               </div>
            </button>
            <div class="btn">
                <select name="" >
                        <option value="">Condition</option>
                        <option value="">Price</option>
                        <option value="">Size</option>
                    </select>
                </div>
            <div class="btn">
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
    <CompThree
    />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompThree from '@/components/CompThree.vue';
import ButtonFilter from '@/components/ButtonFilter.vue'
import ButtonView from '@/components/ButtonView.vue'

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

@mixin centred-flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
@mixin buttons {
    display: flex;
    height: 36px;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    align-items: flex-start;
}

.rightUp {
    // display: flex;
    // align-items: baseline;
    @include centred-flex;
}
.options {
    display: flex;
}
.btn-view {
  align-items: flex-end;
  margin-right: 1px;
}
.btn-filter {
margin-right: 100px;
}
.btn {
    @include buttons;
}
</style>