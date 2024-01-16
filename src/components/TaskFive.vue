<template>
    <button id="fetchButton" @click="fetchData">Fetch data</button>
    <div class="movie-container">
       <div class="movie-row">
            <div class="movie-cards" v-for="movie in movieData.slice(1, 10)" :key="movie._id">
                <img :src="movie.poster_path" alt="movie_image">
                <h4>{{ movie.title }}</h4>
                <button @click="$router.push(`/movies/${movie._id}`)">More details</button>
            </div>
       </div> 
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const movieData = ref([]);
  
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '68df74a627mshb2b63f4873f82f7p148afcjsn8955113f228c',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch('https://movies-api14.p.rapidapi.com/movies', options);
      const data = await response.json();
      movieData.value = data.movies;
      console.log(movieData.value);
    } catch (error) {
      console.log(error);
    }
  };

  
  </script>
<style>
.movie-container {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
}
.movie-row{
    display: flex;
    flex-direction: row;
   
}
.movie-cards{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    border: 1px solid rgb(0, 0, 0);
    justify-content: center;
    align-items: center;
}
.movie-cards img{
    height: 280px;
    width: 160px;
}
.movie-cards button{
    height: 30px;
    width:100px;
    font-size: 12px;
    margin-left: -10px;
    background-color: transparent;
    border: 1px solid black;
}
.movie-cards button:hover{
    background-color: grey;
    color: black;
}
.movie-cards h4{
    width: 170px;
    height: 40px;
}
#fetchButton{
  margin-left: 48%;
  height: 50px;
  width: 100px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

</style>  