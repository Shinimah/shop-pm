<template>
  <main class="home">
    <nav class="menu">
      <MenuHead
        v-for="(item, index) in menu"
        :key="index"
        :item="item"
      />
    </nav>
    <div class="main">
      <CategoryCheckbox class="main-left"/>
      <ProductHead class="main-right"/>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MenuHead from '@/components/MenuHead.vue';
  import CategoryCheckbox from '@/components/CategoryCheckbox.vue';
  import ProductHead from '@/components/ProductHead.vue';
  import { mapGetters, mapMutations } from 'vuex';
  import { GETTERS, MUTATIONS } from '@/store';

  export default defineComponent({
    name: 'HomeView',

    components: {
      MenuHead,
      CategoryCheckbox,
      ProductHead,
    },

    computed: {
          ...mapGetters({
              menu: GETTERS.GET_MENU
          })
    },

    methods: {
          ...mapMutations({
              showMenu: MUTATIONS.SET_MENU
          }),
    }
  })
</script>

<style lang="scss" scoped>
  .home {
    margin: 0 130px;
  }

  .menu {
    display: flex;
    align-items: center;
    width: 1920px;
  }

  .main {
    display: flex;
    align-items: center;
  }

  .main-left {
    margin: 0 40px 50px 100px;
  }

  .main-right {
    margin: 0 100px 50px 20px;
  }
</style>