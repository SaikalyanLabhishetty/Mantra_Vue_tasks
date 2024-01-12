<!-- ..components/TaskSixProductList.vue -->
<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/store/product.js';

const store = useProductStore();
const products = ref(store.products);

const removeProduct = (index) => {
  store.removeProduct(index);
  products.value = [...store.products];
};

const addToCart = (product) => {
  store.addToCart();
  product.cartCount++; 
};

</script>

<template>
  <div class="ProductList">
    <h1>Overall Cart Count: {{ store.cartCount }}</h1>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Delete product</th>
          <th>Add to cart</th>
          <th>Individual Cart Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>
            <button @click="removeProduct(index)">Delete</button>
          </td>
          <td>
            <button @click="addToCart(product)">Add to cart</button>
          </td>
          <td>
            <p> {{ product.cartCount }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
