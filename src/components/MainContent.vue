<template>
    <router-view v-slot="{ Component }" style="padding-bottom: 50px;">
      <!-- <keep-alive include="adminView"> -->
        <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </template>
  
  
  
  <script>
  export default {
    name: 'MainComponent',
    data() {
      return {
      };
    },
  
    methods: {
  
    },
    components: {
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  