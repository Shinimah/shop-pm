<template>
  <div class="menuItem">
    <div class="item">
        <svg class="img">
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
  height: 56px;
  padding: 0 1px;
  border: solid rgb(220, 220, 255);
  border-radius: 0.5vmin;
}
// .item {
//   align-items: center;
// }

.img {
  position: absolute;
  padding: 0 50px;
}
p {
  display: flex;
  text-align:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
}
</style>
