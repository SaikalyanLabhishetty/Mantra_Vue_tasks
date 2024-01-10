<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TaskOne from './components/TaskOne.vue';
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Task-1</RouterLink>
          <RouterLink to="/login">Task - 2: Login</RouterLink>
          <RouterLink to="/signup">Task - 2: SignUp</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333; 
  color: white;
  padding: 10px 0;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  gap: 20px;
  background-color: rgb(71, 71, 71);
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
}
nav a:hover{
  background-color: rgb(101, 101, 101);
}

.main-content {
  padding: 20px;
  margin-top: 20px;
  background-color: #f4f4f4; 
}
</style>
