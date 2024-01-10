<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps(['name']);
const myData = props.name;

const inputValues = {};

myData.forEach(field => {
    inputValues[field.name] = ref("");
});

const storedData = JSON.parse(localStorage.getItem("mydata")) || [];

const modelRef = computed({
    get: () => {
        const result = {};
        myData.forEach(field => {
            result[field.name] = inputValues[field.name].value;
        });
        return result;
    },
    set: (value) => {
        myData.forEach(field => {
            inputValues[field.name].value = value[field.name];
        });
    }
});

const sendData = () => {
    const userData = { ...modelRef.value };

    console.log('Data before saving to local storage:', userData);

    storedData.push(userData);

    localStorage.setItem("mydata", JSON.stringify(storedData));

    console.log('Data after saving to local storage:', storedData);
};
</script>

<template>
    <div class="form">
      <h1>Student Details</h1>
      <form @submit.prevent="sendData">
          <div v-for="field in myData" :key="field.id" class="form-group">
              <label :for="field.name">{{ field.name }}</label>
              <input
                  :type="field.type"
                  :value="modelRef[field.name]"
                  @input="modelRef[field.name] = $event.target.value"
                  :placeholder="field.placeholder"
                  class="text"
              />
          </div>
  
          <button class="button">Submit</button>
      </form>
      <div></div>
    </div>
  </template>
  
  <style scoped>
  label {
      color: #fcfcfc; 
      margin-bottom: 8px;
      display: block;
  }
  
  .form {
      background-color: #f4f4f4; 
      border-radius: 2px;
  }
  
  .form-group {
      margin-bottom: 15px;
  }
  
  input {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
  }
  
  button {
      background-color: #007BFF; 
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
  }
  </style>