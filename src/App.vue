<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/category/:categoryId"></RouterLink>
    <RouterLink to="/recipe/:recipeId"></RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



