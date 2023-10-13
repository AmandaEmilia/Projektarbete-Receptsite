<!-- Task 2.4  Söka Recept-->
<template>
    <div class="main-grid">
        <h1>ASIATISKA IT-KÖKET</h1>
        <h3>Välkommen till den unika receptsidan för dig som gillar mat från Asien</h3>
        <div class="greetings">
            <form>
                <div id="search-icon">
                    <img src="../assets/search.png">
                </div>
                <input type="text" id="searchbox" placeholder="Sök bland dina favoritrecept . . ." required>
                <input type="submit" value="Sök" id="btn" @click="fetchData">
            </form>
        </div>
        <main class="recipe-grid" v-for="recipe in recipes">
            <!-- Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
            <div class="grid-container">
                <div class="recipe-head">
                    <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }} {{ recipe.ratings }}</RouterLink>
                </div>
                <div class="recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                <div class="recipe-main">{{ recipe.description }}</div>
                <div class="recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
            </div>
        </main>
    </div>
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
.greetings {
    width: 50%;
    border-radius: 55px;
    background: linear-gradient(180deg, rgba(237, 22, 59, 0.50) 0%, rgba(255, 255, 255, 0.00) 22.4%);
}

#searchbox {
    color: white;
    font-family: Kameron;
    font-size: 20px;
    background-color: transparent;
    border: none;
    width: 60%;
    margin-right: 8%;
}

#btn {
    border: #ED163B 1px solid;
    background: transparent;
    color: white;
    vertical-align: middle;
}

#search-icon {
    color: #ED163B;
    width: 3%;
    margin-left: 10%;
    margin-top: 3%;    
}

.main-grid {
    display: grid;
    gap: 10px;
    justify-items: center;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
}

.grid-container {
    display: grid;
    gap: 5px;
    text-align: center;
}
</style>

<!-- <template>
    <div class="greetings">
         <h1 class="green">{{ heading }}</h1> -->
        <!-- <form class="formwrapper">
            <input type="text" id="searchbox" placeholder="Search for..." required>
            <input type="submit" value="go" id="btn" @click="fetchData">
        </form>
    </div>
    <main v-for="recipe in recipes">
         Layout med grid-container och grid-item för lite snyggare presentation(kan tas bort och ersättas med något annat) -->
        <!-- <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>
    </main> --> 
<!-- </template>  -->
