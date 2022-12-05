<template>
  <nav>
    <img id="logo" src="./icons/Group1.svg"/>
    <p class="title">Shopka</p>
    <router-link 
      class="links" to="/sell"
    >
       Sell on Shopka
    </router-link>
    <router-link 
       class="links" to="/reg"
    >
       Register
    </router-link> 
    <div class="search-wrapper">
        <SearchIc class="icon"/>
        <input type="text" 
          class="search" placeholder="searching..."
          v-model="inputValue">
        <CloseIc class="icon-close" @click="clearInput"/>
    </div>
    <router-link 
        class="links2" to="/ce"
    >
        Consume Electronics
    </router-link>
    <button 
       class="btnHead" @click="sign"
    >
        Sign In
    </button>
    <button 
      class="btnHead" @click="Mycard"
    >
        My card
    </button>
    <img src="./components/images/Photo.png" alt="photo">
  </nav>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchIc from '@/components/iconComp/search.vue';
  import CloseIc from '@/components/iconComp/close.vue';

  export default defineComponent({
    name: 'App',

    components: {
      SearchIc,
      CloseIc
    },

    data () {
      return {
        inputValue: ''
      }
    },
    
    methods: {
      clearInput () {
        this.inputValue = ''
      },
      sign () {
        alert("Sign In!")
      },
      Mycard () {
        alert ("My Profile")
      }
    }
  })
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  nav {
    display: flex;
    align-items: center;
    padding: 30px;
    width: 1920px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #logo {
    width: 27px;
    margin-right: 0;
  }

  .title {
    font-family: 'Red Hat Display', sans-serif;
    font-size: 36px;
    font-weight: 500;
    padding: 0 20px;
  }

  .btnHead {
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #2264D1;
    margin: 0 12px;
    width: 104px;
    height: 40px;
  }

  .search-wrapper {
    position: relative;
  }

  .icon {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  .icon-close {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .search {
    font-size: 20px;
    padding-left: 45px;
    padding-right: 45px;
    width: 668px;
    height: 48px;
    background-color: rgb(233, 233, 233);
    border-radius: 2vmax;
    border:none;
  }

  .links {
    margin: 0 15px;
    font-size: 18px;
    &:hover {
      color: red;
    }
  }

  .links2 {
    margin-left: 30px;
    margin-right: 125px;
    font-size: 18px;
    &:hover {
      color: red;
    }
  }

  .button {
    color: #42b983;

    &:hover {
      color: #800350;
    }
  }
</style>
