<!-- components/TaskSixCartRoute.vue -->
<template>
    <div>
      <h2>Cart Items</h2>
      <ul>
        <li v-for="(product, index) in cartItems" :key="index">
          {{ product.name }} - Quantity: {{ product.cartCount }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, getCurrentInstance } from 'vue';
  
  const cartItems = ref([]);
  
  // Listen for the 'product-added-to-cart' event
  onMounted(() => {
    const { appContext } = getCurrentInstance();
    const eventHandler = (product) => {
      cartItems.value.push({ ...product }); // Add a copy of the product to the cartItems array
    };
    
    // Use the global event bus to listen for events
    appContext.app.config.globalProperties.$on('product-added-to-cart', eventHandler);
  });
  
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  