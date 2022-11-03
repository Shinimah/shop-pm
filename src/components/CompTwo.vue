<template>
<div class="right">
    <div class="rightUp">
        <div class="options">
            <div>
                <label for="sel">Sort by</label>
                <select name="" id="sel">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
            <button class="btn">{{btn2}}</button>
            <button class="btn">{{btn3}}</button>
        </div>
        <div class="filter">
            <button class="btn2">{{filter1}}</button>
            <button class="btn2">{{filter2}}</button>
            <button class="btn2">{{filter3}}</button>
        </div>
        <div class="img-filter">
            <button class="btn3">{{image1}}</button>
            <button class="btn3">{{image2}}</button>
        </div>
    </div>
    <p>{{rel}}</p>
    <CompThree
        light="Clear & Usable user flows"
        light2="Let's boost your marketplace"
        fix="Fine & Styled components"
        fix2="Speed up with Setproduct templates"
        palette="Customizable & Reusable"
        palette2="Take our UX patterns and rebuild"
    />
    <!-- <CompThree
    descr4="Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!"
    descr5="Creativity stimulating lotion. Drink every morning to generate better ideas!"
    descr6="Prototyping items to create a lot of useless things..."
    descr7="John Von Ebalkin SPRING"
    descr8="Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY"
    descr9="Professional teadrinking set for every designer and developer"
    descr10="One string Bonsai description"
    descr11="Simply best item in town to shine bright with your Nine Inch Nails"
    descr12="KISTOCHKI & KRASIBO. Top cosmetic brand from Chelyabinsk is here!"
    price4="$12.48"
    price5="$12.48"
    price6="$128.99"
    price7="$13.95"
    price8="$9.50"
    price9="$128.99"
    price10="$11.68"
    price11="$1.25"
    price12="$23.25"
    note4="Worldwide shitting available. Buyers protection possible!"
    note5="Worldwide shitting available. Buyers protection possible!"
    note6="Showcasing onHovered state"
    note7="1258 bids, 359 watchers $5.95 for shipping"
    note8="Eligible for Shipping To Mars or somewhere else"
    note9="Eligible for nothing :("
    note10="Worldwide shitting available. Buyers protection possible!"
    note11="Eligible for Shipping To Mars or sominline-blockewhere else"
    note12="1258 bids, 359 watchers $5.95 for shipping"
    
    /> -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompThree from '@/components/CompThree.vue';

export default defineComponent ({
    name: 'CompTwo',
    components: {
        CompThree
    },
    props: {
        rel: String,
        btn1: String,
        btn2: String,
        btn3: String,
        filter1: String,
        filter2: String,
        filter3: String,
        image1: Image,
        image2: Image,
    },
})
</script>

<style lang="scss" scoped>
.right {
    position: relative;
    width: 1114px;
}

@mixin centred-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.rightUp {
    // display: flex;
    // align-items: baseline;
    @include centred-flex;
}

.filter {
    position: absolute;
    right: 200px;
}
.img_filter {
    position: absolute;
    right: 1px;
    display: inline-flex;
    margin: 0 30px;
    width: 68px;
    height: 36px;
}
.btn {
    height: 36px;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
}
.btn2 {
    width: 86px;
    height: 36px;
    border: none;
    background-color: #EBF2FF;
    border-radius: 4px;
}
.btn3 {
    height: 36px;
    width: 68px;
    border: none;
    border-radius: 4px;
}
</style>