<template>
   <!-- <div class="item" @click="$emit('open-modal', item)">
        <img :src="item.img" :alt="item.imgAlt">
        <p class="description">{{item.desc}}</p>
        <p class="price">{{item.price}}</p>
        <p class="note">{{item.note}}</p>
    </div>-->
    <div>
        <p>{{item.element}}</p>
        <p>{{item.under}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {ListLeft} from './iconComp/allCat.vue';
export default defineComponent({
    name: 'ListLeft1',

    props: {
        item: {
            type: Object as PropType<ListLeft>,
            required: true
        }
    }
})
</script>