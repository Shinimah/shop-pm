<template>
    <nav class="right">
        <section class="right-up">
            <div class="options">
                <label class="sort" for="sel">Sort by</label>
                <select name="" id="sel">
                    <option value="">Useless first</option>
                    <option value="">Usable first</option>
                </select>
                <select class="btn" id="sel" name="">
                    <option value="">Condition</option>
                    <option value="">Price</option>
                    <option value="">Size</option>
                </select>
                <select class="btn" id="sel" name="">
                    <option value="">Delivery options</option>
                    <option value="">Other options</option>
                </select>
            </div>

            <ButtonFilter type="button" class="btn-filter"/>
            <ButtonView type="button" class="btn-view"/>

        </section>

        <p><strong>Related</strong></p>

        <ul class="product-list">
            <li
                class="product-list__item"
                v-for="(product, i) in list" 
                :key="i"
            >
                <ProductItem :item="product" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ProductItem from '@/components/ProductItem.vue';
    import ButtonFilter from '@/components/ButtonFilter.vue'
    import ButtonView from '@/components/ButtonView.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

    export default defineComponent ({
        name: 'CompTwo',
        
        components: {
            ProductItem,
            ButtonFilter,
            ButtonView,
        },

        computed: {
            ...mapGetters({
                list: GETTERS.GET_PRODUCTS,
            })
        }
    })
</script>

<style lang="scss" scoped>
    .right {
        position: relative;
        width: 1114px;
    }

    @mixin buttons {
        display: flex;
        align-items: center;
        height: 19px;
        margin: 10px;
        padding: 10px;
        background-color: white;
        border-radius: 4px;
        align-items: flex-start;
    }

    .right-up {
        display: flex;
        align-items: center;
        padding-bottom: 1px;
    }

    .options {
        display: flex;
        align-items: center;
    }

    .sort {
        padding: 5px;
    }

    .btn-view {
    margin-right: 1px;
    }

    .btn-filter {
    margin-right: 150px;
    }

    .btn {
        @include buttons;
    }

    #sel {
        padding: 0 6px;
    }

    .product-list {
        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
    }
</style>