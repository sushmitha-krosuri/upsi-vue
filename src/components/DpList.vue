<template>
    <div>
      <h1>Hello, Dp List Component!</h1>
      <p>{{ message }}</p>
       
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Welcome to dpVue!",
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style>
  h1 {
    color: #3AA0D4;
  }
  
  p {
    font-size: 18px;
    color: #37517e;
  }
  
  button {
    padding: 10px 15px;
    background-color: #3AA0D4;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  