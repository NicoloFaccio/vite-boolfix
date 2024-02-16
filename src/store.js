import { reactive } from "vue";

export const store = reactive({
    ApiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
    ApiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
    ApiKey: 'e37e872b3c9cd8f259d3337ab3cb7ff3',
    ArrayMovies: [],
    ArraySeries: [],
    SearchText: ''
})