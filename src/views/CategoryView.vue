<!-- Task 3.1 CategoryView-->
<template>
    <Header>Kategorier</Header>

    <div class="flex-container">
    <div class="flex-item-one">
      <CategoryListComponent></CategoryListComponent>
    </div>
    <div class="flex-item-two">
      <CategorySearchBox></CategorySearchBox>
      <CategoryComponent></CategoryComponent>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import CategoryListComponent from '../components/CategoryListComponent.vue'
import CategorySearchBox from '../components/CategorySearchBox.vue';
import CategoryComponent from '../components/CategoryComponent.vue'
export default {
    components: {
        Header,
        CategoryListComponent,
        CategorySearchBox,
        CategoryComponent
    }
}
</script>
<style scoped></style>