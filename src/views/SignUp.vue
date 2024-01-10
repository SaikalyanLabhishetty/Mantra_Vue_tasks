<!-- SignUp.vue -->

<script setup>
import TaskTwoUsingForm from "../components/TaskTwoUsingForm.vue";
import { ref } from 'vue';

const data = ref([
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
  },
  {
    id: 3,
    type: "text",
    name: "Email",
    placeholder: "Enter Email",
  },
  {
    id: 4,
    type: "text",
    name: "Phone Number",
    placeholder: "Enter Phone Number",
  },
]);

const onSubmit = (formData) => {
  console.log("Form submitted with data:", formData);
};
</script>

<template>
  <TaskTwoUsingForm :name="data" :onSubmit="onSubmit" />
</template>
