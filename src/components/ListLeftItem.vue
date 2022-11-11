<template>
    <div class="list"> 
        <ul>
            <li>
                <header @click="visible=!visible">
                    <ArrowDIc 
                        :class="['arrow', {'_close': !visible}]"
                    />
                    {{item.element}}
                    <span class="under" v-if="item.under">
                        <br>
                        {{item.under}}
                    </span> 
                </header>      
                <div v-show="visible">
                    <ListItem2 
                        v-for="(item2, index) in item.sub"
                        :key="index"
                        :item="item2"
                    />  
                </div>
            </li>
        </ul>    
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

ul {
    list-style-type: none;
    align-items: center;
    padding-left: 10px;
}

.arrow {
    top: 10px;
    right: 5px;

    transition: 0.15s linear transform;

    &._close {
        transform: rotate(-90deg);
    }
}

.under {
    margin-left: 30px;
    position: relative;
    font-size: 14px;
    line-height: 143%;
    display: flex;
    align-items: center;
    color: #787885;
}
</style>