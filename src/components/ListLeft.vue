<template>
    <div>
        <ul class="list">
            <li>
                <ListLeftItem 
                    v-for="(item, index) in list"
                    :key="index"
                    :item="item"
                    v-show="!visible"
                />
              <!--   
                <div v-if="item.sub" v-show="visible">
                    <div v-for="(item2, index2) in item.sub"
                        :key="index2">
                        <ul>
                            <li @click="visible2=!visible2">
                              <ArrowRIc 
                             :class="['arrow', {'_close': visible2}]"
                                 />
                            {{item2.element}}
                            </li>
                            <span v-if="item2.under">
                               <br>
                               {{item2.under}}
                            </span>
                             <div v-if="item2.sub2" v-show="visible2">
                                  <div v-for="(item3, index3) in item2.sub2"
                                    :key="index3">
                                    <ul>
                                      <li @click="visible3=!visible3">
                                            <ArrowRIc 
                                               :class="['arrow', {'_close': visible3}]"
                                            />
                                          {{item3.element}}
                                      </li>
                                      <span v-if="item2.under">
                                        <br>
                                        {{item2.under}}
                                      </span>
                                      <div v-if="item2.sub2" v-show="visible3">
                                            <div v-for="(item4, index4) in item3.sub3"
                                             :key="index4">
                                              <ul>
                                                    <li>{{item4.element}}</li>
                                              </ul>
                                            </div>
                                            
                                       </div>
                                    </ul>
                                 </div>
                            </div>
                        </ul>
                    </div>
                </div>-->
            </li>
            <button class="btn" 
            @click="visible=!visible"
            >
                Expand
            </button>  
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListLeftItem from '@/components/ListLeftItem.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

export default defineComponent ({
    name: 'ListLeft',

    data () {
        return {
            visible: true
        }
    },

    components: {
       ListLeftItem,
    },

    computed: {
        ...mapGetters({
            list: GETTERS.GET_LIST,
        })
    },
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
.arrow {
    transition: 0.15s linear transform;
    &._close {
        transform: rotate(90deg);
    }
}
</style>