<template>
    <div><StarRate />
        <StarRate />
        <StarRate />
        <StarRate />
        <star-half />
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import StarRate from './iconComp/stars.vue';
import StarHalf from './iconComp/star-half.vue';

export default defineComponent({
    name: 'StarRating',

    components: {
        StarRate,
        StarHalf,
    },
})
</script>

<style lang="scss" scoped>

</style>