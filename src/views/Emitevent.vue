<template>
    <div>
      <p>Data from Child: {{ dataFromChild }}</p>
      <TaskFour @childToParent="receiveDataFromChild"></TaskFour>
    </div>
  </template>
  
  <script setup>
  import TaskFour from '../components/TaskFour.vue';
  
  const dataFromChild = ref('');
  
  const receiveDataFromChild = (data) => {
    dataFromChild.value = data;
  };
  </script>
  