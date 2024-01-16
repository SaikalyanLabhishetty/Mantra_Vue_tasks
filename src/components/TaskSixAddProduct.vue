<!-- components/TaskSixAddProduct.vue -->
<template>
    <div class="AddProduct">
      <input v-model="productName" placeholder="Enter Product" /> 
      <button @click="addProduct">Add Product</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useProductStore } from '@/store/product.js';
  
  export default {
    setup() {
      const store = useProductStore();
      const productName = ref('');
  
      const addProduct = () => {
        store.addProduct({ name: productName.value });
        productName.value = '';
      };
  
      return {
        productName,
        addProduct,
      };
    },
  };
  </script>
  
  <style>
.AddProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.AddProduct input {
  padding: 8px;
  margin-bottom: 10px;
}

.AddProduct button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.ProductList {
  margin: 20px;
}

.ProductList h1 {
  color: #007bff;
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
  margin-left: -300px;
}

</style>