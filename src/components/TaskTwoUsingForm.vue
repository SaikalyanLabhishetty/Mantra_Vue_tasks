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
    <div class="bg-white-1000 rounded-sm">
      <h1 class="text-center">Student Details</h1>
      <form @submit.prevent="sendData">
          <div v-for="field in myData" :key="field.id" class="mb-4">
              <label :for="field.name" class="block text-white mb-2 ml-40">{{ field.name }}</label>
              <input
                  :type="field.type"
                  :value="modelRef[field.name]"
                  @input="modelRef[field.name] = $event.target.value"
                  :placeholder="field.placeholder"
                  class="text w-3/4 px-2 py-2 ml-40"
              />
          </div>
          <div class="mt-4 flex flex-col items-center">
            <button  class="px-4 py-2 bg-blue-500 h-12 w-50 text-white rounded cursor-pointer">Submit</button>
          </div>
      </form>
      <div></div>
    </div>
  </template>
  
 