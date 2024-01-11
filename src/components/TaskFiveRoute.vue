<template>
  <div class="inner_container">
    <div class="bg_container">
      <img id="bg_image" :src="movie.backdrop_path" alt="bg_image">
    </div>
    <div class="movieCards">
      <img :src="movie.poster_path" alt="movie_image">
      <div class="moviedata">
        <h2>Title: {{ movie.title }}</h2>
        <h4>Release Date: {{ movie.release_date }}</h4>
        <h4>Genre: {{ movie.genres }}</h4>
        <h4>
          Vote Average: {{ movie.vote_average }}
          <span v-if="movie.vote_average > 5">🔺</span>
          <span v-else>🔻</span>
        </h4>
        <p>Movie Overview: {{ movie.overview }}</p>
        <button>
          <a :href="youtubeTrailerUrl" target="_blank">Watch Trailer</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const movie = ref({});

const fetchMovieDetails = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f4174474amsh600331a31614d2ep12bf23jsndddced32c21c',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(`https://movies-api14.p.rapidapi.com/movie/${route.params.id}`, options);
    const data = await response.json();
    console.log(data);
    movie.value = data.movie;
    console.log(movie.value);
  } catch (error) {
    console.log(error);
  }
};

const youtubeTrailerUrl = ref('');

onMounted(() => {
  fetchMovieDetails();
  youtubeTrailerUrl.value = generateYoutubeTrailerUrl(movie.value.youtube_trailer); 
});

const generateYoutubeTrailerUrl = (trailerKey) => {
  return `https://www.youtube.com/watch?v=${trailerKey}`;
};
</script>

<style>
.inner_container{
  border: 5px solid white;
}
.bg_container{
  background-color: black;
}
.movieCards{
  display: flex;
  flex-direction: row;
}
#bg_image{
  height: 500px;
  width: 50%;
  margin-left: 25%;
}
.movieCards > img{
  height: 300px;
  width: 200px;
  border: 3px solid white;
}
.moviedata {
  display: flex;
  flex-direction: column;
}

.moviedata h2,h4,p{
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: start;
}

.moviedata button{
  width: 200px;
  height: 50px;
}

a{
  text-decoration: none;
  color: white;
}

</style>
