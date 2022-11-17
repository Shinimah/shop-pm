<template>
  <div class="menuItem" @click="paint">
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

    methods: {
      paint() {
        alert ("menu")
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
    height: 66px;
    padding: 0 1px;
    border: none;
    border-radius: 0.5vmin;
    color: #9696A0;
  }

  .menuItem:hover, 
  .menuItem:hover p {
    color: red;
  }

  .img {
    width: 20px;
    height:20px;
    position: absolute;
    padding: 5px 60px;
  }

  p {
    display: flex;
    align-items: flex-end;
    text-align: center;
    margin: 5px 25px 2px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #787885;
    line-height: 143%;
  }
</style>
