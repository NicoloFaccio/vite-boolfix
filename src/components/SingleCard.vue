<script>
  import {store} from '../store';

  export default{
    name: 'SingleCard',

    props: [
      'propsElement'
    ],
    data(){
      return {store}
    },
    methods: {

      changeFlag(language){
        if(language.toUpperCase() === 'EN'){
          return 'GB'
        } else if (language.toUpperCase() === 'JA') {
          return 'JP'
        } else if (language.toUpperCase() === 'HE') {
          return 'IL'
        } else if (language.toUpperCase() === 'ZH') {
          return 'CN'
        } else if (language.toUpperCase() === 'KO') {
          return 'KR'
        } else if (language.toUpperCase() === 'HI') {
          return 'IN'
        } else if (language.toUpperCase() === 'IT') {
          return 'IT'
        } else if (language.toUpperCase() === 'FR') {
          return 'FR'
        }
      },
      getPoster(){

      }
    }
  }
</script>

<template>
  <div class="cardMoviesSeries">
    <figure>
      <img class="posters" :src="`https://image.tmdb.org/t/p/w342${propsElement.poster_path}`" alt="posters">
    </figure>

    <ul>
      <li v-for="(element, index) in 5" :key="index">
        <i 
        :class="Math.ceil(propsElement.vote_average / 2) ? 'fa-solid fa-star' : 'fa-regular fa-star'" 
      ></i>
      </li>
      <!-- {{ Math.ceil(propsElement.vote_average / 2)}} -->
    </ul>
    <h4>Titolo: {{ propsElement.original_title ? propsElement.original_title : propsElement.name  }}</h4>
    <div>
      <span>
        Trama:
      </span>
      <p>
        {{ propsElement.overview ? propsElement.overview : 'Non abbiamo la trama '}}
      </p>

    <figure class="language">
      <span>Lingua:</span>
      <img :src="`https://flagsapi.com/${changeFlag(propsElement.original_language ? propsElement.original_language : 'non abbiamo trovato la lingua')}/shiny/24.png`" alt="flags" width="24px">
    </figure>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cardMoviesSeries {
    border: 1px solid white;
    width: 200px;
    height: 400px;

    overflow: auto;
    padding: 10px;

    ul {
      display: flex;
      gap: 10px;
      list-style-type: none;
    }

    figure {
      .posters {
        width: 100%;
        object-fit: cover;
      }
    }
    h4 {
      margin-block: 20px;
    }
    .language {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
</style>

