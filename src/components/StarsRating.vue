<template>
    <div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarhalfIcon />
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    import StarIcon from './iconComp/StarIcon.vue';
    import StarhalfIcon from './iconComp/StarhalfIcon.vue';

    export default defineComponent({
        name: 'StarRating',

        components: {
            StarIcon,
            StarhalfIcon,
        },
    })
</script>
