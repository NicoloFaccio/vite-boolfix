<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import axios from 'axios';
  import {store} from './store';

  export default{
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return {store}
    },
    methods: {
      
    }
  }

</script>

<template>
  <AppHeader/>

  <AppMain/>
</template>

<style lang="scss">

</style>
