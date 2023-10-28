<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>


    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" /> -->
        <span class="vue-text">V</span>ue + <span class="bootstrap-text">B</span>ootstrap 5</a>

      <div class="navbar-nav">
        <RouterLink class="link-nav" to="/">Home</RouterLink>
        <RouterLink class="link-nav" to="/about">About</RouterLink>
      </div>
    </nav>


  </header>
</template>

<style scoped>
header {
  background-image: conic-gradient(at right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))
}

.navbar {
  display: flex;
  flex-direction: column;
}

.navbar-nav {
  display: flex;
  flex-direction: row;
}

.link-nav {
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.navbar-nav .link-nav:hover {
  transition: 1s;
  color: #DC143C;

}

.logo {
  margin: 0 1rem;
}

.navbar-brand {
  color: white;
  padding: 0;
  margin: 0;
}

.vue-text {
  color: green;
  font-size: 1.5rem;
  font-weight: 700;
}

.bootstrap-text {
  color: purple;
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
