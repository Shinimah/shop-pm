<template>
        <div @click="visible=!visible">
            <ArrowDIc 
                :class="['arrow', {'_close': !visible}]"
            />
        {{item.element}}       
        </div>   
        <div> 
            <p v-show="visible">            
                {{item.element}}
            </p>
        </div>
        <list-item-3 
           v-for="(item2, index) in item.sub2"
            :key="index"
            :item="item2"
        /> 
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import ListItem3 from '@/components/ListItem3.vue';
import { SubCat } from '@/store';

export default defineComponent ({
    name: 'ListItem2',

    props: {
        item: {
            type: Object as PropType<SubCat>,
            required: true
        }
    },

    data () {
        return {
            visible: true,
        }
    },

    components: {
        ArrowDIc,
        ListItem3,
    },
})
</script>

<style lang="scss" scoped>

.arrow {
    // position: absolute;
    top: 10px;
    right: 5px;

    transition: 0.15s linear transform;

    &._close {
        transform: rotate(-90deg);
    }
}
</style>