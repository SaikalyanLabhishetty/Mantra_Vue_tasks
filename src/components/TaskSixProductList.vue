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
    <h1 @click="$router.push(`/cart`)">
      <img class="h-10 w-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart">
      {{ store.cartCount }}</h1>
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

<style>
.ProductList {
  margin: 20px;
  cursor: pointer;
}

.ProductList h1 {
  color: #007bff;
  margin-left: 90%;
}
.ProductList table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.ProductList th, .ProductList td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.ProductList th {
  background-color: #f2f2f2;
}

.ProductList button {
  padding: 8px;
  margin-right: 5px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
}

.ProductList p {
  color: green;
}
</style>