<template>
    <div class="title"> 
        <header @click="visible=!visible">
            <ArrowDIc 
                :class="['arrow', {'_close': !visible}]"
            />
            {{item.element}}
              <span v-if="item.under">
                        <br>
                       {{item.under}}
              </span> 
        </header>      
        <div
            v-for="(sub, index2) in item.sub"
            :key="index2"
        >
            <p v-show="visible">            
                {{sub.element}}
            </p>
        </div>
        
        <ListItem2 
            v-for="(item2, index) in item.sub"
            :key="index"
            :item="item2"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import ListItem2 from '@/components/ListItem2.vue';
import { ListLeft } from '@/store';

export default defineComponent ({
    name: 'ListLeftItem',

    props: {
        item: {
            type: Object as PropType<ListLeft>,
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
        ListItem2
    },
})
</script>

<style lang="scss" scoped>

.arrow {
    top: 10px;
    right: 5px;

    transition: 0.15s linear transform;

    &._close {
        transform: rotate(-90deg);
    }
}
</style>