<!-- Task 2.4  Söka Recept-->
<template>
    <div class="main-grid">
        <div class="search-box">
            <div id="search-icon">
                <img id="searchImg" src="../assets/search.png">
            </div>
            <input type="text" id="searchbox" placeholder="Sök bland dina favoritrecept . . ." required>
            <input type="submit" value="Sök" id="btn" @click="fetchData">
        </div>
        <main class="recipe-grid" v-for="recipe in recipes">
            <div class="grid-container gradient-background">
                <h2 class="recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe._id}`">{{ recipe.title }}</RouterLink>
                    <StarComponent :avg-rating="`${recipe.avgRating}`">
                    </StarComponent>
                </h2>
                <div class="recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                <div class="recipe-main main">{{ recipe.description }}</div>
                <div class="recipe-foot main">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.timeInMins }} {{ time }}
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import StarComponent from './StarComponent.vue'
export default {
    components: {
        StarComponent
    },
    data() {
        return {
            recipes: [],
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        async fetchData() {
            let inputSearchBox = document.getElementById("searchbox").value;
            this.recipes = null;
            const response = await fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes?query=${inputSearchBox}`);
            this.recipes = await response.json();
        }
    }
}
</script>


<style scoped>
</style>
