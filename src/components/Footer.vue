<template>
  <div class="item">
    <svg class="img">
      <use :xlink:href="getIcon"></use>
    </svg>
    <p class="title">{{item.title}}</p>
    <p class="message">{{item.message}}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Footer } from '@/store';

  export default defineComponent({
      name: 'FootContent',

      props: {
          item: {
              type: Object as PropType<Footer>,
              required: true
          }
      },

      computed: {
        getIcon () {
          return `./sprite.svg#${this.item.img}`
        }
      }
  })
</script>

<style lang="scss" scoped>
  div.item {
    display: grid;
      width: 357px;
      height: 156px;
      background-color: #EDEDF0;
      border-radius: 0.8vmin;
      border: none;
  }

  .img {
    padding: 0 135px;
  }

  .title {
      font-family: 'Quicksand', sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      margin:0;
        &:hover {
        color: red;
        }
  }

  .message {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      text-align: center;
        &:hover {
        color: red;
        }
  }
</style>