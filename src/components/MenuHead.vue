<template>
  <div class="menuItem">
    <div class="item">
        <svg>
          <use v-bind:xlink:href="getIcon"></use>
        </svg>
     </div>
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
  computed: {
    getIcon () {
      return `./sprite.svg#${this.item.icon}`
    }
  }
})
</script>

<style scoped lang="scss">

a {
  color: #42b983;
}
.menuItem {
  display: flex;
  width: 1920px;
  height: 50px;
  padding: 17px 19px;
  border: solid rgb(220, 220, 255);
  border-radius: 0.5vmin;
}
.item {
  align-items: center;
}
p {
  display: flex;
  text-align:center;
}
</style>
