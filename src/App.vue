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
      getMovies(apiParams){
        store.ArrayMovies = []

        if(store.SearchText){
            axios.get(store.ApiUrlMovies, apiParams)
              .then((response) => {
                store.ArrayMovies = response.data.results
                console.log(response.data.results)
              })
        }
      },
      getSeries(apiParams){
        store.ArraySeries = []

        if(store.SearchText){
            axios.get(store.ApiUrlSeries, apiParams)
              .then((response) => {
                store.ArraySeries = response.data.results
                console.log(response.data.results)
              })
        }
      },
      getInformation(){
        const apiParams = {
          params: {
            api_key: store.ApiKey,
            query: store.SearchText
          }
        }

        this.getMovies(apiParams)
        this.getSeries(apiParams)
      } 
    }
  }

</script>

<template>
  <AppHeader 
    @getInformations="getInformation"
  />

  <AppMain/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>
