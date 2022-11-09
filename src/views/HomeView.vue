<template>
  <div class="home">
    <Menu 
    item1="Clothing & Shoes"
    item2="Entertainment"
    item3="Music"
    item4="Sport & Lifestyle"
    item5="Pets"
    item6="Kitchen Accessoires"
    item7="Travel Equipment"
    item8="Growing & Garden"
    item9="Electrical Tools"
    item10="Mother Care"
    item11="Toys & Entertainment"
    item12="Vintage"
    />
    <div class="main">
      <div class="main_left">
        <CompOne 
        catHead="Departments"
        btn3="Collapsed filters"
        />
      </div>
      <div class="main_right">
        <CompTwo 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component';
import { defineComponent } from 'vue'
import Menu from '@/components/MenuHead.vue'; 
import CompOne from '@/components/CompOne.vue';// @ is an alias to /src
import CompTwo from '@/components/CompTwo.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Menu,
    CompOne,
    CompTwo,
  }
})
</script>

<style lang="scss" scoped>
.home {
  margin: 0 130px;
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