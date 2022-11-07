<template>
    <ul>
        <li> 
            <ArrowDIc />
            <ListLeft1 
        v-for="(item, under) in list"
        :key="under"
        :item="item"
        /><!--all catergories-->
            <ul>
                <li> 
                    <ArrowDIc />
                    <!--electronics-->
                    <ul>
                        <li> 
                            <ArrowDIc /><!--phones-->
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <!--show more-->
                        </li>
                        <li>
                            <ArrowRIc />
                        </li>
                        <li>
                            <ArrowRIc />
                        </li>
                        <li>
                            <ArrowRIc />
                        </li>
                        <li>
                            <ArrowRIc />
                        </li>
                        <li>
                            <ArrowRIc />
                        </li>
                    </ul>
                    <!--expand-->
                </li>
            </ul>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowRIc from '@/components/iconComp/arrowR.vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import ListLeft1 from '@/components/ListLeft.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

export default defineComponent({
   name: 'AllCat',
   components: {
    ArrowDIc,
    ArrowRIc,
    ListLeft1,
   },
   computed: {
        ...mapGetters({
            list: GETTERS.GET_LIST
        })
    }
})

export interface ListLeft {
    element: string,
    under?: string,
}
</script>
