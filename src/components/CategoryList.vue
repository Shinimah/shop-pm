<template>
    <div>
        <ul class="list">
            <li>
                <CategoryItem
                    v-for="(item, index) in list"
                    :key="index"
                    :item="item"
                    v-show="!visible"
                />
            </li>
            <li>
                <button class="btn" 
                  @click="showList"
                >
                  Expand
                </button>
            </li>  
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CategoryItem from '@/components/CategoryItem.vue';
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
        CategoryItem,
        },

        methods: {
            showList () {
                this.visible = !this.visible
            }
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

</style>