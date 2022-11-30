<template>
    <div class="item">
        <router-link to="/prod">
            <img :src="require(`@/assets/images/${item.img}`)" :alt="item.imgAlt">
            <p class="description">{{item.desc}}</p>
            <p class="price">{{item.price}}</p>
            <p class="note">{{item.note}}</p>
        </router-link>
        <div class="rating">
            <StarRating />
            <p class="rate">{{item.rating}}</p>
            <button @click="liking" class="btn">
                <HeartIcon class="like"/>
                     Watch
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { Product } from '@/store';
    import StarRating from '@/components/StarsRating.vue';
    import HeartIcon from '@/components/iconComp/HeartIcon.vue';

    export default defineComponent({
        name: 'ProductItem',

        components: {
            StarRating,
            HeartIcon,
        },

        methods: {
            liking () {
                alert ("Liked")
            }
        },

        props: {
            item: {
                type: Object as PropType<Product>,
                required: true
            }
        }
    })
</script>

<style lang="scss" scoped>
    .item {
        padding: 5px;
    }

    .description {
        height: 74px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #19191D;
    }

    .price {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.87);

        @media (min-width: 900px) {
            color: tomato;
        }
    }

    .note {
        height: 41px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        color: #787885;
    }

    .rating {
        display: flex;
        align-items: center;
        justify-content:space-between;
    }

    .btn {
        display: flex;
        align-items: center;
        width: 88px;
        height: 32px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        color: #2264D1;
        border: solid 1px;
        border-color: #9DC2FF;
        background-color: white;
    }

    p {
        &:visited {
        color: rgb(113, 10, 173);
        }
        &:hover {
        color: red;
        }
    }
</style>