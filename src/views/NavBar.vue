<script setup>
// import { RouterLink } from 'vue-router'

const message = '';

function searchCity() {
  console.log(this.message)
}
</script>

<template>
  <header>


    <nav class="navbar">
      <div class="input-group">
        <input type="text" class="form-control" v-model="message" placeholder="Nome da cidade" aria-label="Nome da cidade"
          aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" @click="searchCity()" type="button"
          id="button-addon2">Pesquisar</button>
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
  color: white;
}

.input-group {
  max-width: 70%;
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
