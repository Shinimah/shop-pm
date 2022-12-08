<template>
  <NavigationSearch />
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavigationSearch from '@/components/NavigationSearch.vue';

  export default defineComponent({
    name: 'App',

    components: {
      NavigationSearch,
    },
  })
</script>
