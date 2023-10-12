<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/category/:categoryId">Category</RouterLink>
      <RouterLink to="/recipe/:recipeId">Recipe</RouterLink>
  </header>

  <RouterView />
</template>

