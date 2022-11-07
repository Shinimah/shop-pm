<template>
    <div class="left">
        <div class="leftTitle">
            <div id="iconV">
                <FilterVIc/>
            </div>
            <h2>{{catHead}}</h2>
        </div>
        <AllCat />
  <!--     <div class="catalog">
            <ArrowRIc class="right"/>
            <div class="line">
                <p class="note">{{cat1}}</p>
                <p class="note2">{{note1}}</p>
            </div>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_1}}</p>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat3}}</p>
        </div>
        <p>{{cat4_1}}</p>
        <p>{{cat4_2}}</p>
        <p>{{cat4_3}}</p>
        <p>{{cat4_4}}</p>
        <button class="btn">
            {{btn1}}
            <ArrowDIc class="down"/>
        </button>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_2}}</p>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_3}}</p>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_4}}</p>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_5}}</p>
        </div>
        <div class="catalog">
            <ArrowRIc class="right"/>
            <p>{{cat2_6}}</p>
        </div>
        <button class="btn">
            {{btn2}}
        </button>--> 
        <button class="btn2">
            {{btn3}}
            <ArrowDIc class="down"/>
        </button>
        <div class="filter">
            <div class="headFilter">
                <h4>{{title}}</h4>
                <ArrowUIc class="up"/>
            </div>
            <p><input type="checkbox">{{check1}}</p>
            <p><input type="checkbox">{{check2}}</p>
            <p><input type="checkbox">{{check3}}</p>
            <p><input type="checkbox">{{check4}}</p>
            <p><input type="checkbox">{{check5}}</p>
            <p><input type="checkbox">{{check6}}</p>
        </div>
        <div class="filter">
            <div class="headFilter">
                <h4>{{title2}}</h4>
                <ArrowUIc class="up"/>
            </div>
            <p><input type="checkbox">{{year1}}</p>
            <p><input type="checkbox">{{year2}}</p>
            <p><input type="checkbox">{{year3}}</p>
            <p><input type="checkbox">{{year4}}</p>
            <p><input type="checkbox">{{year5}}</p>
            <p><input type="checkbox">{{year6}}</p>
            <p><input type="checkbox">{{year7}}</p>
            <p><input type="checkbox">{{year8}}</p>
            <p><input type="checkbox">{{year9}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterVIc from '@/components/iconComp/filterV.vue';
import AllCat from '@/components/iconComp/allCat.vue';
//import ArrowRIc from '@/components/iconComp/arrowR.vue';
//import ArrowDIc from '@/components/iconComp/arrowD.vue';
import ArrowUIc from '@/components/iconComp/arrowU.vue';

export default defineComponent ({
    name: 'CompOne',
    components: {
        FilterVIc,
        AllCat,
 //       ArrowRIc,
   //     ArrowDIc,
        ArrowUIc,
     //   ListLeft1,
    },
    props: {
    catHead: String,
    note1: String,
    cat1: String,
    cat2_1: String,
    cat3: String,
    cat4_1: String,
    cat4_2: String,
    cat4_3: String,
    cat4_4: String,
    cat2_2: String,
    cat2_3: String,
    cat2_4: String,
    cat2_5: String,
    cat2_6: String,
    btn1: String,
    btn2: String,
    btn3: String,
    title: String,
    check1: String,
    check2: String,
    check3: String,
    check4: String,
    check5: String,
    check6: String,
    title2: String,
    year1: String,
    year2: String,
    year3: String,
    year4: String,
    year5: String,
    year6: String,
    year7: String,
    year8: String,
    year9: String,
  },
})
</script>

<style lang="scss" scoped>
.left {
    font-family: 'Inter', sans-serif;
    width: 355px;
    height: 1928px;
}
.leftTitle {
    display: inline-flex;
    padding: 8px;
    margin: 30px 0;
    border: solid rgb(194, 194, 255);
    border-radius: 1vmin;
    width: 304px;
    height: 56px;
}
.leftTitle h2 {
    margin: 15px 50px;
}
#iconV {
    margin: 12px 1px;
}
.btn {
    position: relative;
    margin-left: 50px;
    padding: 5px 30px;
    height: 40px;
    background-color: #EBF2FF;
    border: none;
}
.btn2 {
    position: relative;
    margin: 40px 0 10px;
    padding-left: 10px;
    text-align: left;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5vmin;
    width: 304px;
    height: 40px;
}
.filter {
    width: 304px;
    padding: 5px 10px 10px;
    margin: 20px 0;
    background-color: #F7F7FA;
}
.catalog {
    position: relative;
    display: flexbox;
    width: 100%;
    font-weight: 400;
}
.right {
    position: absolute;
    top: 0px;
    left: 0px;
}
.note {
    font-size: 16px;
}
.note2 {
    font-size: 14px;
}
.line p {
    margin: 0 10px;
}
.down {
    position: absolute;
    right: 5px;
    bottom: 5px;
}
.headFilter {
    display: flex;
    position: relative;
}
.up {
    position: absolute;
    top: 18px;
    right: 5px;
}
</style>