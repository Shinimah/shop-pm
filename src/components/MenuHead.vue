<template>
  <div class="menuItem">
    <img :src="item.icon" :alt="item.alt">
    <p>{{item.element}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType} from 'vue';
import { Menu } from '@/store';

export default defineComponent ({
  name: 'MenuHead',
 
  props: {
    item: {
      type: Object as PropType<Menu>,
      required: true
    }
  },
})
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
.menu {
  display: flex;
  width: 1920px;
  height: 60px;
  padding: 0 100px;
}
.menuItem {
  padding: 7px 19px;
  border: solid rgb(220, 220, 255);
  border-radius: 0.5vmin;
  text-align:center;
}
.menuItem p {
  margin: 1px;
}
</style>
