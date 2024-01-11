<template>
   <div>
    <TaskFourChild
        title="Passing data from child to parent"
        content="On clicking the button you can see data processed from child component"
        @displayData="fetchData($event)">
    </TaskFourChild>
    <TaskFourChild
        title="This is another example of passing data from child to parent"
        content="Similarly on clicking get data from child you can see data processed from child"
        @displayData="fetchData($event)">
    </TaskFourChild>
   </div>
   <div>
    <h3>Result : <span style="color: rgb(255, 219, 164);text-align: center;font-size: 24px;">{{ result }}</span></h3>
   </div>
</template>
  
<script setup>
  import {ref} from 'vue'
  import TaskFourChild from './TaskFourChild.vue'
  const result = ref("This is default result")
  const fetchData = (event) => {
    result.value = event;
  }
</script>
  
<style>
h3{
  text-align: center;
}
</style>