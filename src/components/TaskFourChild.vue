<template>
    <div class="flex flex-col">
        <h1 class="text-center mt-2.5 mb-2.5"> {{ title }}</h1>
        <h4 class="text-center mt-2.5 mb-2.5"> {{ content }}</h4>
        <button @click="loadData" class="mx-auto bg-blue-500 border h-20 w-106 text-lg">Get data from child</button>
    </div>
</template>

<script setup>
const props = defineProps(['title','content'])
const emit = defineEmits('displayData')

const loadData = () => {
    emit('displayData',props.content)
}

</script>
