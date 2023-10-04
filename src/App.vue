<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>ReceptSajten</h1>
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/category/:categoryId">Category</RouterLink>
      <RouterLink to="/recipe/:recipeId">Recipe</RouterLink>
    </nav> -->
  </header>

  <RouterView />
</template>

