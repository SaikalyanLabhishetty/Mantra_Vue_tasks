<template>
    <div class="data">
        <h1> {{ title }}</h1>
        <h4> {{ content }}</h4>
        <button @click="loadData">Get data from child</button>
    </div>
</template>

<script setup>
const props = defineProps(['title','content'])
const emit = defineEmits('displayData')

const loadData = () => {
    emit('displayData',props.content)
}

</script>

<style>
.data > h4{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
.data button{
    margin-left: 45%;
}

</style>