<!-- components/TaskSixAddProduct.vue -->
<template>
    <div class="AddProduct">
      <input v-model="productName" placeholder="Enter Product" key="productName" />
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
  flex-direction: row;
  align-items: center;
  margin: 20px;
  justify-content: center;
}

.AddProduct input {
  padding: 8px;
  height: 40px;
}

.AddProduct button {
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  height: 40px;
}

</style>