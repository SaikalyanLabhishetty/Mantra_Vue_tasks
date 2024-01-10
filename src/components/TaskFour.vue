<template>
    <div>
      <p>Passing data from child component to parent component using emit.</p>
      <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
  </template>
  
  <script setup>
  const sendDataToParent = () => {
    context.emit('childToParent', 'Hello from Child!');
  };
  </script>
  