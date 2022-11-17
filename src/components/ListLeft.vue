<template>
    <div>
        <ul class="list">
            <li>
                <ListLeftItem 
                    v-for="(item, index) in list"
                    :key="index"
                    :item="item"
                    v-show="!visible"
                />
            </li>
            <li>
                <button class="btn" 
                  @click="visible=!visible"
                >
                  Expand
                </button>
            </li>  
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ListLeftItem from '@/components/ListLeftItem.vue';
    import { mapGetters } from 'vuex';
    import { GETTERS } from '@/store';

    export default defineComponent ({
        name: 'ListLeft',

        data () {
            return {
                visible: false,
            }
        },

        components: {
        ListLeftItem,
        },

        computed: {
            ...mapGetters({
                list: GETTERS.GET_LIST,
            })
        },
    })
</script>

<style lang="scss" scoped>

    ul {
        list-style-type: none;
        align-items: center;
        padding-left: 10px;
    }

    span {
        font-size: 14px;
        position: relative;
    }

    .btn {
        position: relative;
        margin: 10px 40px;
        padding: 2px 30px 5px;
        height: 40px;
        background-color: #EBF2FF;
        border: none;
    }

    .list {
        display: inline;
        align-items: center;

    }

    .arrow {
        transition: 0.15s linear transform;
        &._close {
            transform: rotate(90deg);
        }
    }

    .item:hover {
        color: red;
    }
</style>