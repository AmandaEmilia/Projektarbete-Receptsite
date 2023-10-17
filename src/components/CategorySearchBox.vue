<!-- Task Söka recept bara inom vald kategori när man befinners sig på categoryView-->
<template>
    <main class="main-grid">
        <div class="greetings">
            <form>
                <div id="search-icon">
                    <img id="searchImg" src="../assets/search.png">
                </div>
                <div>
                    <input id="searchbox" v-model="searchBoxInput" :placeholder="`Sök ${this.$route.params.categoryId}`"
                        name="search">
                    <button id="btn" type="button" @click="fetchData">{{ heading }} {{ this.$route.params.categoryId
                    }}</button>
                </div>
            </form>
        </div>
        <div v-for="recipe in searchResult" :key="recipe._id">
            <!-- {{ search.title }} -->

            <div class="grid-container gradient-background main">
                <div class="recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe._id}`">{{ recipe.title }} </RouterLink>
                    <StarComponent :avg-rating="`${recipe.avgRating}`">
                    </StarComponent>
                </div>
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
.greetings {
    min-width: 50%;
    border-radius: 55px;
    background: linear-gradient(180deg, rgba(237, 22, 59, 0.50) 0%, rgba(255, 255, 255, 0.00) 22.4%);
}


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

