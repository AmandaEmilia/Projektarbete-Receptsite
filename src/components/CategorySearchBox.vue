<!-- Task Söka recept bara inom vald kategori när man befinners sig på categoryView-->
<template>
    <main class="main-grid">
        <div class="search-box">
            <form>
                <div id="search-icon">
                    <img id="searchImg" src="../assets/search.png">
                </div>
                <div>
                    <input id="searchbox" v-model="searchBoxInput"
                        :placeholder="`Sök inom kategori ${this.$route.params.categoryId}`" name="search">
                    <button id="btn" type="button" @click="fetchData">{{ heading }}</button>
                </div>
            </form>
        </div>
        <div v-for="recipe in searchResult" :key="recipe._id">
            <!-- {{ search.title }} -->

            <div class="grid-container gradient-background main">
                <h2 class="recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe._id}`">{{ recipe.title }} </RouterLink>
                    <StarComponent :avg-rating="`${recipe.avgRating}`">
                    </StarComponent>
                </h2>
                <div class="recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                <div class="recipe-main">{{ recipe.description }}</div>
                <div class="recipe-foot">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.timeInMins }} {{ time }}
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import StarComponent from './StarComponent.vue'
export default {
    components: {
        StarComponent
    },
    data() {
        return {
            heading: "Sök ",
            searchBoxInput: "",
            searchResult: [],
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            this.searchResult = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories/${this.$route.params.categoryId}/recipes/?query=${this.searchBoxInput}`)
                .then((response) => response.json())
                .then((data) => { this.searchResult = data })

        }
    }
}
</script>

<style scoped>

.grid-container {
    display: grid;
    grid-template-areas:
        'head head head head head head'
        'main main main main img img'
        'foot foot foot foot img img';
    grid-gap: 20px;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 20px;
    border-radius: 10px;
}
</style>

