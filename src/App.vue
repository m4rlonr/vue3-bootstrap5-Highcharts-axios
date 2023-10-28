<script setup>

import { RouterView } from 'vue-router'
import NavBar from './views/NavBar.vue';

</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>