<template>
  <HeadTitle />
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeadTitle from '@/components/HeadTitle.vue';

  export default defineComponent({
    name: 'App',

    components: {
      HeadTitle,
    },
  })
</script>
