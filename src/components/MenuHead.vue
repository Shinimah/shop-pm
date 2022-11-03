<template>
  <div class="menu">
    <div class="menuItem">
      <ClothIc/>
      <p>{{item1}}</p>
    </div>
    <div class="menuItem">
      <CinemaIc/>
     <p>{{item2}}</p>
    </div>
    <div class="menuItem">
      <MusicIc/>
      <p>{{item3}}</p>
    </div>
    <div class="menuItem">
      <SportIc/>
      <p>{{item4}}</p>
    </div>
    <div class="menuItem">
      <PetsIc/>
     <p>{{item5}}</p>
    </div>
    <div class="menuItem">
      <KitchenIc/>
     <p>{{item6}}</p>
    </div>
    <div class="menuItem">
      <TravelIc/>
      <p>{{item7}}</p>
    </div>
    <div class="menuItem">
      <GardenIc/>
      <p>{{item8}}</p>
    </div>
    <div class="menuItem">
      <ElectricIc/>
      <p>{{item9}}</p>
    </div>
    <div class="menuItem">
      <BabyIc/>
     <p>{{item10}}</p>
    </div>
    <div class="menuItem">
      <ToysIc/>
      <p>{{item11}}</p>
    </div>
    <div class="menuItem">
      <VintageIc/>
      <p>{{item12}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import ClothIc from '@/components/iconComp/cloth.vue';
import CinemaIc from '@/components/iconComp/cinema.vue';
import MusicIc from '@/components/iconComp/concert.vue';
import SportIc from '@/components/iconComp/fitness.vue';
import PetsIc from '@/components/iconComp/pets.vue';
import KitchenIc from '@/components/iconComp/kitchen.vue';
import TravelIc from '@/components/iconComp/travel.vue';
import GardenIc from '@/components/iconComp/garden.vue';
import ElectricIc from '@/components/iconComp/electric.vue';
import BabyIc from '@/components/iconComp/baby.vue';
import ToysIc from '@/components/iconComp/toys.vue';
import VintageIc from '@/components/iconComp/vintage.vue';

export default defineComponent ({
  name: 'MenuHead',
  components: {
    ClothIc,
    CinemaIc,
    MusicIc,
    SportIc,
    PetsIc,
    KitchenIc,
    TravelIc,
    GardenIc,
    ElectricIc,
    BabyIc,
    ToysIc,
    VintageIc,
  },
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
    item5: String,
    item6: String,
    item7: String,
    item8: String,
    item9: String,
    item10: String,
    item11: String,
    item12: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.menu {
  display: inline-flex;
  width: 1920px;
  height: 60px;
  padding: 0 100px;
}
.menuItem {
  margin: 0;
  padding: 5px 19px;
  border: solid rgb(220, 220, 255);
  border-radius: 0.2vmin;
  text-align:center;
}
.menuItem p {
  margin: 1px;
}
</style>
