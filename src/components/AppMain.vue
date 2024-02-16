<script>
  import SingleCard from './SingleCard.vue';
  import { store } from '../store';

  export default{
    name: 'AppMain',
    components: {
      SingleCard
    },
    data(){
      return{store}
    }
  }
</script>

<template>
  <main>
    <section>
      <h1>MOVIES</h1>

      <div class="cards">
        <SingleCard 
          v-for="(element, index) in store.ArrayMovies"
          :key="index"
          :propsElement="element"  
        />
      </div>
    </section>

    <section>
      <h1>SERIES</h1>

      <div class="cards">
        <SingleCard 
          v-for="(element, index) in store.ArraySeries"
          :key="index"
          :propsElement="element"  
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
  section {
    margin: 0 auto;
    width: 95%;

    .cards{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
  
      margin-block: 20px;
  }
  }
</style>
