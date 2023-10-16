<template>
  <!-- <h1>HomeView</h1> -->
  <SearchBoxComponent></SearchBoxComponent>
  <div class="flex-container">
    <div>
      <CategoryListComponent></CategoryListComponent>
    </div>
    <div>
      <AllRecipesComponent></AllRecipesComponent>
    </div>
  </div>
</template>

<script >
import SearchBoxComponent from "../components/SearchBoxComponent.vue";
import AllRecipesComponent from "../components/AllRecipesComponent.vue";
import CategoryListComponent from "../components/CategoryListComponent.vue";

export default {
  components: {
    SearchBoxComponent,
    AllRecipesComponent,
    CategoryListComponent,
  }
};
</script>


<style scoped>

.flex-container {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .flex-container {
    width: 100%;
    margin-top: 0;
    flex-direction: column;
  }
}
</style>