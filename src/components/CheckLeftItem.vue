<template>
    <div class="title"> 
        <header @click="visible=!visible">
            <h3>{{item.element}}</h3>
            <ArrowDIc 
                :class="['arrow', {'_close': !visible}]"
            />
        </header>
        
        <div class="checItem"
            v-for="(filt, index2) in item.filt"
            :key="index2"
        >
            <label v-show="visible">
                <input type="checkbox">               
                {{filt.element}}
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import { Check } from '@/store';

export default defineComponent ({
    name: 'CheckLeftItem',

    props: {
        item: {
            type: Object as PropType<Check>,
            required: true
        }
    },

    data () {
        return {
            visible: true,
        }
    },

    components: {
        ArrowDIc
    },
})
</script>

<style lang="scss" scoped>

header {
    display: flex;
    font-size: 14px;
    align-items: center;
    padding: 0px 5px 1px;
    justify-content: space-between;
}
.title {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    width: 304px;
    padding: 15px 10px 10px;
    margin: 20px 0;
    background-color: #F7F7FA;
}
.arrow {
    top: 10px;
    right: 5px;

    transition: 0.15s linear transform;

    &._close {
        transform: rotate(180deg);
    }
}
.checItem {
    font-size: 16px;
    line-height: 150%;
}
</style>