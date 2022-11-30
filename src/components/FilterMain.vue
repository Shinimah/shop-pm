<template>
    <button class="btn" @click="showList">
        {{btn}}
        <ArrowDIc 
            :class="['arrow', {'_close': !visible}]"
        />
    </button>
    <CheckLeft 
        v-show="visible"
    />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ArrowDIc from '@/components/iconComp/arrowD.vue';
    import CheckLeft from './CheckLeft.vue';

    export default defineComponent({
        name: 'FilterMain',

        data () {
            return {
                visible: true,
            }
        },

        components: {
            CheckLeft,
            ArrowDIc,
        },

        methods: {
            showList () {
                this.visible = !this.visible
            }
        },
        
        props: {
            btn: String,
        }
    })
</script>

<style lang="scss" scoped>

    .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 304px;
        height: 40px;
        top: 744px;
        right: 51px;
        padding: 5px 10px 10px;
        margin: 20px 0;
        background-color: #F7F7FA;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }

    .arrow {
        transition: 0.1s linear transform;
        &._close {
            transform: rotate(180deg);
        }
    }

</style>