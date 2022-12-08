<template>
  <button type="button" class="menu-item" @click="paint">
    <svg class="img">
      <use :xlink:href="getIcon"></use>
    </svg>
    <span class="item-element">{{item.element}}</span>
  </button>
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

  .menu-item {
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 1920px;
    height: 66px;
    padding: 0 1px;
    border: none;
    border-radius: 0.5vmin;
    background-color: aliceblue;
    color: #9696A0;
  }

  .menu-item:hover, 
  .menu-item:hover span {
    color: red;
  }

  .img {
    width: 20px;
    height:20px;
    position: absolute;
    padding: 5px 70px;
  }

  .item-element {
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 25px;
    padding-left: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #787885;
    line-height: 143%;
  }
</style>
