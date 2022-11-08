<template>
    <div>
        <div v-for="(item, index) in check"
        :key="index" class="title">
            {{item.element}}<ArrowDIc class="up" />
                <div v-for="(filt, index2) in item.filt"
                :key="index2">
                    <p><input type="checkbox">{{filt.element}}</p>
                </div>
        </div>
        <ArrowUIc/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowUIc from '@/components/iconComp/arrowU.vue';
import ArrowDIc from '@/components/iconComp/arrowD.vue';
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store';

export default defineComponent ({
    name: 'CheckLeft',

    components: {
        ArrowDIc,
        ArrowUIc,
    },

    computed: {
        ...mapGetters({
            check: GETTERS.GET_CHECK
        })
    }
})
</script>

<style lang="scss" scoped>

.title {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    width: 304px;
    padding: 5px 10px 10px;
    margin: 20px 0;
    background-color: #F7F7FA;
}
.up {
    position: absolute;
    top: 18px;
    right: 5px;
}
</style>