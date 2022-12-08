<template>
    <nav class="list"> 
        <ul>
            <li>
                <header class="item" @click="showList">
                    <h5 class="item-title">
                        <ArrowDown 
                            :class="['arrow', {'_close': !visible}]"
                        />
                        {{item.element}}
                    </h5>
                    <span class="under" v-if="item.under">
                        <br>
                        {{item.under}}
                    </span> 
                </header>      
                <div v-show="visible">
                    <CategoryItem2
                        v-for="(item2, index) in item.sub"
                        :key="index"
                        :item="item2"
                    />  
                </div>
            </li>
        </ul>    
    </nav>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import ArrowDown from '@/components/iconComp/ArrowDown.vue';
    import CategoryItem2 from '@/components/CategoryItem2.vue';
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
            ArrowDown,
            CategoryItem2,
        },

        methods: {
            showList () {
                this.visible = !this.visible
            }
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

    .item-title {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
    }

    .item:hover {
        color: red;
    }
</style>