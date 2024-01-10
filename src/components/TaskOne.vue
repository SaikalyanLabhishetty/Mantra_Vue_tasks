<template>
    <div class="Container">
      <div class="HeaderContainer">
        <h1>Component rendering using Vue</h1>
      </div>
      <div class="DescriptionContainer">
        <p>Here we are trying to fetch data from jsonplaceholderApi.</p>
      </div>
      <div class="fetchContainer">
        <button @click="fetchData">Fetch Data</button>
        <ul>
            <li v-for="info in data.slice(0, 20)" :key="info.id">ID: {{ info.id }} - Title: {{ info.title }}
        </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const data = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      data.value = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style>
  .Container {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
  }
  
  .HeaderContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  .fetchContainer {
    margin-top: 20px;
  }
  
  button {
    padding: 10px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 47%;
    margin-bottom: 10px;
    font-size: 20px;
  }
  p{
    font-size: 20px;
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin: 5px 0 0 5px;
    font-size: 20px;
    text-align: center;
  }
  </style>
  