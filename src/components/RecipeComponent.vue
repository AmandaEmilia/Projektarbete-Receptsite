<template>
    <main v-if="recipe">
        <h1 class="u-heading">{{ recipe.title }}</h1>
        <div class="u-container">
            <div class="u-description">{{ recipe.description }}</div>
            <div class="u-image"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="u-amountofingredients">
                <StarComponent :avg-rating="`${recipe.avgRating}`"></StarComponent> |
                {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                {{ recipe.timeInMins }} {{ time }}
            </div>
            <div class="u-ingredients" v-if="recipe.ingredients">
                <h2>Ingredienser</h2>
                <ul class="gradient-background">
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient._id"> {{ ingredient.name }}
                        {{ ingredient.amount }} {{ ingredient.unit }} </li>
                </ul>
            </div>
            <div class="u-instructions" v-if="recipe.instructions">
                <h2>Gör så här:</h2>
                <ul>
                    <li class="gradient-background" v-for="instruction in recipe.instructions" :key="instruction._id">{{ instruction }}</li>
                </ul>
            </div>
        </div>
        <div class = "br"></div>
        <RatingComponent :recipe-id="this.$route.params.recipeId" :avg-rating="`${recipe.avgRating}`"></RatingComponent>
    </main>
</template>
<script>
import RatingComponent from './RatingComponent.vue';
import StarComponent from './StarComponent.vue';
export default {
    components: {
        RatingComponent,
        StarComponent
    },
    data() {
        return {
            recipe: "",
            recipeId: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            this.recipe = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}`)
                .then((response) => response.json())
                .then((data) => { this.recipe = data });
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<style scoped>
/* Styla <h1> elementet */

ul {
    list-style-type: none;
    font-size: 16px;
    border-radius: 10px;
}

li {
    border-radius: 10px;
    padding: 10px;
    margin-left: 0px;
    margin-right: 0px;
}

.br {
    height: 2px; 
    background-color: #ED163B;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 80%;
}

.u-description {
    grid-column-start: 1;
    grid-column-end: 2;
    font-size: 16px;
    line-height: 1.4;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10%;
}

.u-amountofingredients {
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: center;
}

.u-minutes {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 4;
}

.u-ingredients {
    grid-column-start: 1;
    grid-column-end: 2;
    line-height: 1.4;
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 10px;
}

.u-image {
    grid-column-start: 3;
    grid-column-end: 4;
    margin-left: 20%;
    float: right;
    object-fit: cover;
}

.u-instructions {
    grid-column-start: 3;
    grid-column-end: 4;
    line-height: 1.4;
    border-radius: 10px;
    margin-top: 25px;
}

.u-container {
    display: grid;
    grid-gap: 10px;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: 10px;
}
</style>

