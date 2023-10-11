

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
        <div class="grid-container">
            <div class="grid-item recipe-head">{{ heading }}</div>
            <div class="grid-item recipe-img"><img :src="imageUrl" alt="picture"></div>
            <div class="grid-item recipe-description">{{ description }}</div>
            <div class="grid-item recipe-main">
                <ul>
                    <li v-for="ingredient in ingredients" :key="ingredient._id">{{ ingredient.name + " " + ingredient.amount + " " + ingredient.unit }}</li>
                </ul>
            </div>
            <div class="grid-item recipe-foot">
                <ul>
                 <li v-for="(instruction, index) in instructions" :key="index">{{ instruction }}</li>
            </ul>
            </div>
        </div>
    </main>
</template>

<style>

/* Styla <h1> elementet */
h1 {
    text-align: center;
    font-size: 36px;
}

/* Styla bilder */
img {
    height: 100px;
    width: 100px;
    float: left;
    margin-right: 10px;
    border-radius: 50%;
    /* Runda kanterna på bilderna */
}

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
}

/* Styla <div> element med klassen "recipe-main" */
.recipe-main {
    grid-area: main;
    font-size: 16px;
    color: #444;
    line-height: 1.4;
    padding: 10px;
    background-color: #f9f9f9;
    /* Lätt bakgrundsfärg */
    border-radius: 10px;
}

/* Styla <div> element med klassen "recipe-foot" */
.recipe-foot {
    grid-area: foot;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}

/* Styla alla element med klassen "grid-item" */
.grid-item {
    background-color: #fff;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

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
    background-color: rgba(255, 255, 255, 0.9);
    /* Semi-genomskinlig bakgrundsfärg */
    border-radius: 10px;
}
</style>

