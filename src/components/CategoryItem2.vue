<template>
    <ul>
        <li>
            <div class="item" @click="visible=!visible">
                <ArrowDown 
                    :class="['arrow', {'_close': !visible}]"
                 />
                {{item.element}}       
            </div>   
            <div v-show="visible">      
                <CategoryItem3
                    v-for="(item2, index) in item.sub2"
                     :key="index"
                     :item="item2"
                />            
            </div>
       </li>
    </ul>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import ArrowDown from '@/components/iconComp/ArrowDown.vue';
    import CategoryItem3 from '@/components/CategoryItem3.vue';
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
            ArrowDown,
            CategoryItem3,
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