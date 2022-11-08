<template>
   <!-- <div class="item" @click="$emit('open-modal', item)">
        <img :src="item.img" :alt="item.imgAlt">
        <p class="description">{{item.desc}}</p>
        <p class="price">{{item.price}}</p>
        <p class="note">{{item.note}}</p>
    </div>-->
    <div>
        <ul class="list">
            <li v-for="(item, index) in list" 
            :key="index"
            >
                <ArrowRIc />{{item.element}}
                 <span v-if="item.under">
                    <br>
                    {{item.under}}
                 </span>
                <div v-if="item.sub">
                    <div v-for="(item2, index2) in item.sub"
                        :key="index2">
                        <ul>
                        <li><ArrowRIc />{{item2.element}}</li>
                         <span v-if="item2.under">
                            <br>
                            {{item2.under}}
                        </span>
                        <div v-if="item2.sub2">
                              <div v-for="(item3, index3) in item2.sub2"
                                    :key="index3">
                                    <ul>
                                    <li><ArrowRIc />{{item3.element}}</li>
                                      <span v-if="item2.under">
                                        <br>
                                        {{item2.under}}
                                    </span>
                                        <div v-if="item2.sub2">
                                    <div v-for="(item4, index4) in item3.sub3"
                                       :key="index4">
                                       <ul>
                                            <li>{{item4.element}}</li>
                                        </ul>
                                    </div>
                                    <button class="btn">
                                        Show more
                                        <ArrowDIc />
                                       </button>
                                    </div>
                                    </ul>
                              </div>
                        </div>
                    </ul>
                    </div>
                </div>               
            </li>
        </ul>
        <button class="btn">Expand</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowRIc from '@/components/iconComp/arrowR.vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

export default defineComponent ({
    name: 'ListLeft',

    components: {
        ArrowDIc,
        ArrowRIc,
    },

    computed: {
        ...mapGetters({
            list: GETTERS.GET_LIST
        })
    }
})
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    align-items: center;
    padding-left: 10px;
}
span {
    font-size: 14px;
    position: relative;
}
.btn {
    position: relative;
    margin: 10px 40px;
    padding: 2px 30px 5px;
    height: 40px;
    background-color: #EBF2FF;
    border: none;
}
.list {
    display: inline;
    align-items: center;
}
</style>