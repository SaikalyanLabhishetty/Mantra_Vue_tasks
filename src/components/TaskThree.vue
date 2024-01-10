<template>
     <p id="turn">{{ currentPlayer }}'s turn</p> 
    <div class="container">
      <div class="row">
        <button id="inner-Box" @click="changeData(0, 0)">{{ grid[0][0] }}</button>
        <button id="inner-Box" @click="changeData(0, 1)">{{ grid[0][1] }}</button>
        <button id="inner-Box" @click="changeData(0, 2)">{{ grid[0][2] }}</button>
      </div>
      <div class="row">
        <button id="inner-Box" @click="changeData(1, 0)">{{ grid[1][0] }}</button>
        <button id="inner-Box" @click="changeData(1, 1)">{{ grid[1][1] }}</button>
        <button id="inner-Box" @click="changeData(1, 2)">{{ grid[1][2] }}</button>
      </div>
      <div class="row">
        <button id="inner-Box" @click="changeData(2, 0)">{{ grid[2][0] }}</button>
        <button id="inner-Box" @click="changeData(2, 1)">{{ grid[2][1] }}</button>
        <button id="inner-Box" @click="changeData(2, 2)">{{ grid[2][2] }}</button>
      </div>
    </div>
        <p v-if="winner">{{ winner }} wins!</p>
        <p v-else-if="isTie">It's a tie!</p>
      <button @click="resetGame">Reset Game</button>
  </template>
  
  <script setup>
  import { ref,nextTick } from "vue";
  
  const currentPlayer = ref("X");
  const winner = ref(null);
  const isTie = ref(false);
  
  const grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  
  
  const checkRow = (row) => {
    return (
      grid[row][0] === currentPlayer.value &&
      grid[row][1] === currentPlayer.value &&
      grid[row][2] === currentPlayer.value
    );
  };
  
  const checkColumn = (col) => {
    return (
      grid[0][col] === currentPlayer.value &&
      grid[1][col] === currentPlayer.value &&
      grid[2][col] === currentPlayer.value
    );
  };
  
  const checkDiagonals = () => {
    return (
      (grid[0][0] === currentPlayer.value &&
        grid[1][1] === currentPlayer.value &&
        grid[2][2] === currentPlayer.value) ||
      (grid[0][2] === currentPlayer.value &&
        grid[1][1] === currentPlayer.value &&
        grid[2][0] === currentPlayer.value)
    );
  };

  const checkWinner = (row, col) => {
    return (
      checkRow(row) || checkColumn(col) || checkDiagonals()
    );
  };
  
  const checkTie = () => {
    return grid.every((row) => row.every((cell) => cell !== "")) && !winner.value;
  };

  const changeData = async (row, col) => {
    if (grid[row][col] === "") {
        grid[row][col] = currentPlayer.value;
        console.log(grid[row][col])

        await nextTick();
        
      if (checkWinner(row, col)) {
        winner.value = currentPlayer.value;
      } else if (checkTie()) {
        isTie.value = true;
      }else {
        currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
      }
    }
  };
  
  const resetGame = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        grid[i][j] = "";
      }
    }
    winner.value = null;
    isTie.value = false;
    currentPlayer.value = "X";
  };
  </script>
  
  <style>
  .container {
    height: 400px;
    width: 400px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 39.5%;
  }
  
  .row {
    display: flex;
    flex-direction: row;
  }
  
  #inner-Box {
    height: 100px;
    width: 100px;
    margin: 15px 15px 15px 15px;
    color: rgb(255, 255, 255);
    background-color: rgb(78, 78, 78);
    font-size: 60px;
  }
  button{
    margin-top: 10px;
  }
  .container > p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #turn > p{
    margin: 10px;
    font-size: 24px;
  }
  </style>
  