<!-- Task 2.4  Söka Recept-->
<template>
    <h1>ASIATISKA IT KÖKET</h1>
    <h3>Välkommen till den unika receptsidan för dig som gillar mat från Asien</h3>
    <div class="greetings">
        <form class="gradient-background">
            <font-awesome-icon :icon="['fas', 'search']" />
            <input type="text" id="searchbox" placeholder="Sök bland dina favoritrecept . . ." required>
            <input type="submit" value="Sök" id="btn" @click="fetchData">
        </form>
    </div>
    <main v-for="recipe in recipes">
        <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }} {{ recipe.ratings }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>
    </main>
</template>

<script>

export default {
    data() {
        return {
            heading: "Sök här",
            recipes: [],
            time: "min"
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

#searchbox {
    width: 559px;
    height: 27px;
    flex-shrink: 0;
    color: #FFF;
    font-family: Kameron;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: transparent;
    border: none;
    margin-left: 10%;
    margin-top: 5%;
}

#btn {
    border: #ED163B 2px solid;
    height: 50px;
    background: transparent;
    border: none;
    color: white;
}
</style>

