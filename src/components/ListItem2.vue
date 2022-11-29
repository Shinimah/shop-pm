<template>
    <uL>
        <li>
            <div class="item" @click="isvisible">
                <ArrowDIc 
                    :class="['arrow', {'_close': !visible}]"
                 />
                {{item.element}}       
            </div>   
            <div v-show="visible">      
                <list-item-3 
                    v-for="(item2, index) in item.sub2"
                     :key="index"
                     :item="item2"
                />            
            </div>
       </li>
    </uL>
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
                required: true,
            }
        },

        data () {
            return {
                visible: false,
            }
        },

        components: {
            ArrowDIc,
            ListItem3,
        },

        methods: {
            isvisible () {
                this.visible = !this.visible
            }
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
    .item {
        display: flex;
        align-items: center;
        &:hover {
            color: red;
        }
    }
    
</style>