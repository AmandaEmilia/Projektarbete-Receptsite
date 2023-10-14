<!-- Task 3.1 CategoryView-->
<template>
    <CategorySearchBox></CategorySearchBox>
    <CategoryListComponent></CategoryListComponent>
    <CategoryComponent></CategoryComponent>
</template>
<script>
import CategoryListComponent from '../components/CategoryListComponent.vue'
import CategorySearchBox from '../components/CategorySearchBox.vue';
import CategoryComponent from '../components/CategoryComponent.vue'
export default {
    components: {
        CategoryListComponent,
        CategorySearchBox,
        CategoryComponent
    }
}
</script>
<style scoped></style>