<template>
  <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/category/:categoryId"></RouterLink>
      <RouterLink to="/recipe/:recipeId"></RouterLink>
  </header>

  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



