<template>
    <div class="flex flex-col text-white items-center">
      <div class="flex flex-col items-center">
        <h2 class="text-center">Component rendering using vue</h2>
      </div>
      <div>
        <p>Here we are trying to fetch data from jsonplaceholderApi.</p>
      </div>
      <div class="mt-4 flex flex-col items-center">
        <button  @click="fetchData" class="px-4 py-2 bg-blue-500 h-12 w-50 text-white rounded cursor-pointer text-lg">Fetch Data</button>
        <ul class="list-none">
            <li  v-for="info in data.slice(0, 20)" :key="info.id" class="mt-2 text-center text-lg">ID: {{ info.id }} - Title: {{ info.title }}</li>
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
  
  