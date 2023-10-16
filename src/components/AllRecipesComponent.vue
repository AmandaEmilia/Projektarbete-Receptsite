<!-- Task 2.6 Lista recept-->
<!-- Testing för att köra med pullrequest iställe för git merge-->
<template>
    <h1>ASIATISKA IT KÖKET</h1>
    <h3>Välkommen till den unika receptsidan för dig som gillar mat från Asien</h3>
    <!-- Loopar genom och skriver ut enskilt recept på hemsida -->
    <main v-for="recipe in recipes" :key="recipe._id" v-if="recipes">
        <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <div class="gradient-background">
            <div class="grid-container">
                <div class="grid-item recipe-head">
                    <RouterLink :to="`/recipe/${recipe._id}`">{{ recipe.title }}</RouterLink>
                    <StarComponent :avg-rating="`${recipe.avgRating}`">
                    </StarComponent>
                </div>
                <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                <div class="grid-item recipe-description">{{ recipe.description }}</div>
                <div class="grid-item recipe-foot">
                    <StarComponent :avg-rating="`${recipe.avgRating}`"></StarComponent> |
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
            heading: "ASIATISKA IT KÖKET",
            recipes: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            fetch("https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes")
                .then((response) => response.json())
                .then((data) => { this.recipes = data })
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>


<style>
/*  h1 {
    text-align: center;
}

img {
    height: 100px;
    width: 100px;
    float: inline-start;

}

.recipe-head {
    grid-area: head;
    font-size: 30px;
    text-align: center;
}

.recipe-img {
    grid-area: img;
}

.recipe-main {
    grid-area: main;
}

.recipe-foot {
    grid-area: foot;
}

.grid-item {
    background-color: darkgrey;
    color: black;
}

.grid-container {
    display: grid;
    grid-template-areas:
        'head head head head head head'
        'main main main main img img'
        'foot foot foot foot img img';
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 5px;
    margin-top: 5px;
    
} */


/* Styla <h1> elementet */
/* h1 {
    text-align: center;
    font-size: 36px;
} */

/* Styla bilder */
/* img { */
/* height: 100px;
    width: 100px;
    float: left;
    margin-right: 10px;
    border-radius: 50%; */
/* Runda kanterna på bilderna */
/* } */

/* Styla <div> element med klassen "recipe-head" */
.recipe-head {
    grid-area: head;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: #555;
    margin-bottom: 10px;
}

/* Styla <div> element med klassen "recipe-img" */
.recipe-img {
    grid-area: img;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
}

/* Styla <div> element med klassen "recipe-main" */
/* .recipe-main {
    grid-area: main;
    font-size: 16px;
    color: #444;
    line-height: 1.4;
    padding: 10px;
    background-color: #f9f9f9; */
/* Lätt bakgrundsfärg */
/* border-radius: 10px;
} */

/* Styla <div> element med klassen "recipe-foot" */
.recipe-foot {
    grid-area: foot;
    font-size: 14px;
    margin-top: 10px;
}

/* Styla alla element med klassen "grid-item" */
/* .grid-item {
    background-color: #fff;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
} */

/* Styla <div> element med klassen "grid-container" */
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