<!-- views/product.vue -->
<template>
    <div>
      <TaskSixAddProduct/>
      <TaskSixProductList />
    </div>
  </template>
  
  <script>
  import TaskSixAddProduct from '../components/TaskSixAddProduct.vue'
  import TaskSixProductList from '../components/TaskSixProductList.vue'
  
  export default {
    components: {
        TaskSixAddProduct,
        TaskSixProductList
    },
  };
  </script>
  