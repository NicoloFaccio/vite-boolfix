<script>
  import { store } from '../store';

  export default{
    name: 'AppHeader',

    data(){
        return{
            store
        }            
    }
  }
</script>

<template>
    <header>
        <h1>Boolfix</h1>

        <div class="btn-search">
            <input 
                type="text"
                placeholder="Cerca un film o serie..."
                v-model="store.SearchText"
            >

            <i 
             class="fa-solid fa-magnifying-glass"
             @click="$emit('getInformations')"
            
            ></i>
        </div>
    </header>
</template>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    h1 {
        color: red;
    }

    .btn-search {
        display: flex;
        gap: 10px;
        align-items: center;

        input {
            width: 300px;
            height: 30px;
        }  
    }
}
</style>
