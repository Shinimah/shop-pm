<template>
    <div>
        <CheckboxItem
            v-for="(item, index) in check"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CheckboxItem from '@/components/CheckboxItem.vue';
    import { mapGetters } from 'vuex';
    import { GETTERS } from '@/store';

    export default defineComponent ({
        name: 'CheckLeft',

        components: {
            CheckboxItem
        },

        computed: {
            ...mapGetters({
                check: GETTERS.GET_CHECK
            })
        }
    })
</script>