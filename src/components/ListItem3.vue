<template>
    <div @click="visible=!visible">
        {{item.element}}
    </div>
            <ArrowDIc 
                :class="['arrow', {'_close': !visible}]"
            />
    <div 
    v-for="(sub3, index) in item.sub3"
    :key="index"
    > 
        <p v-show="visible">
            {{sub3.element}}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import { SubCat2 } from '@/store';

export default defineComponent ({
    name: 'ListItem3',

    props: {
        item: {
            type: Object as PropType<SubCat2>,
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