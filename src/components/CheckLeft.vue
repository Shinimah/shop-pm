<template>
    <div>
        <CheckLeftItem
            v-for="(item, index) in check"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CheckLeftItem from '@/components/CheckLeftItem.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

export default defineComponent ({
    name: 'CheckLeft',

    components: {
        CheckLeftItem
    },

    computed: {
        ...mapGetters({
            check: GETTERS.GET_CHECK
        })
    }
})
</script>