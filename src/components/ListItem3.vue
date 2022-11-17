<template>
    <ul>
        <li>
            <div class="item" @click="visible=!visible">
                <ArrowDIc 
                    :class="['arrow', {'_close': !visible}]"
                />
                {{item.element}}
            </div>   
            <ul>
                <li>   
                    <div class="itemLast"
                    v-for="(sub3, index) in item.sub3"
                        :key="index"
                        v-show="visible"
                    >
                        <div v-if="item.sub3.length > 4">
                            {{sub3.element}}
                        </div>
                        <div v-else>
                            <button class="btn" 
                                @click="visible=!visible" 
                                v-show="!visible"
                            >
                                Show more
                                <ArrowDIc />
                            </button>
                        </div>
                    </div>     
              </li>
           </ul>
        </li>
    </ul>
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
                visible2: true,
            }
        },

        components: {
            ArrowDIc
        },
    })
</script>

<style lang="scss" scoped>

    ul {
        display: flex;
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

    .btn {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 40px;
        padding: 10px 15px;
        height: 40px;
        background-color: #EBF2FF;
        border: none;
    }

    @mixin item {
        display: flex;
        align-items: center;
        &:hover {
        color: red;
        }
    }

    .item {
        @include item;
    }

    .itemLast {
        @include item;
        margin-left: 20px;
        line-height: 140%;
    }
</style>