<template>
  <div class="home">
    <div class="menu">
      <MenuHead
        v-for="(item, index) in menu"
        :key="index"
        :item="item"
      />
    </div>
    <div class="main">
      <div class="main_left">
        <CompOne />
      </div>
      <div class="main_right">
        <CompTwo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuHead from '@/components/MenuHead.vue'; 
import CompOne from '@/components/CompOne.vue';
import CompTwo from '@/components/CompTwo.vue';
import { mapGetters, mapMutations } from 'vuex';
import { GETTERS, MUTATIONS } from '@/store';

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuHead,
    CompOne,
    CompTwo,
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
  align-items: baseline;
}
.main_left {
  margin: 0 40px 50px 100px;
}
.main_right {
  margin: 0 100px 50px 20px;
}
</style>