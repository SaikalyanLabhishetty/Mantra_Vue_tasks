<!-- LoginForm.vue -->

<script setup>
import TaskTwoUsingForm from "../components/TaskTwoUsingForm.vue";
import { ref } from 'vue';

const array = ref([
  {
    id: 1,
    type: "text",
    name: "UserName",
    placeholder: "Enter Username",
  },
  {
    id: 2,
    type: "text",
    name: "Password",
    placeholder: "Enter Password",
  }
]);

const onSubmit = (formData) => {
  console.log("Form submitted with data:", formData);
};
</script>

<template>
  <TaskTwoUsingForm :name="array" :onSubmit="onSubmit" />
</template>
