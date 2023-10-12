

<script>

export default {

    data() {

        return {

            heading: "",

            recipe: "",

            imageUrl: "",

            description: "",

            instructions: [],

            ingredients: [],

            time: "min"

        }

    },

    methods: {

        async fetchData() {

            this.recipe = null;

 

            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/recipes/${this.$route.params.recipeId}`)

            .then((response) => response.json())

            .then(recipeData => {

                this.recipe = recipeData;

                this.heading = this.recipe.title;

                this.imageUrl = this.recipe.imageUrl;

                this.description = this.recipe.description;

                this.instructions = this.recipe.instructions;

                this.ingredients = this.recipe.ingredients;

            });

   

        }

    },

    beforeMount() {

        this.fetchData()

    }

 

}

</script>
<template>
    <main>
        <h1 class="u-heading">{{ heading }}</h1>
        <div class="u-container">  
            <div class="u-description">{{ description }}</div>
            <div class="u-ingredients">
                <ul>
                    <li v-for="ingredient in ingredients" :key="ingredient._id">{{ ingredient.name + " " + ingredient.amount + " " + ingredient.unit }}</li>
                </ul>
            </div>
            <div class="u-image"><img :src="imageUrl" alt="picture"></div>
            <div class="u-instructions">
                <ul>
                 <li v-for="(instruction, index) in instructions" :key="index">{{ instruction }}</li>
            </ul>
            </div>
        </div>
    </main>
</template>
<style>

/* Styla <h1> elementet */



.u-description {
    font-size: cursive;
    grid-column-start: 1;
    grid-column-end: 4;
    font-size: 16px;
    /* color: #444; */
    line-height: 1.4;
    padding: 10px;
    /* background-color: #f9f9f9; */
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

.u-ingredients {
    grid-column-start: 1;
    grid-column-end: 2;
    /* color: #444; */
    line-height: 1.4;
    padding: 10px;
    margin-left: 5%;
    /* background-color: #f9f9f9; */
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

.u-image {
    grid-column-start: 2;
    grid-column-end: 3;
}


.u-instructions {
    grid-column-start: 1;
    grid-column-end: 4;
}

.u-container {
    display: grid;
    grid-gap: 20px;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 20px;
    /* background-color: rgba(255, 255, 255, 0.9); */
    /* Semi-genomskinlig bakgrundsfärg */
    border-radius: 10px;
}


/* Styla <div> element med klassen "grid-container" */

</style>

