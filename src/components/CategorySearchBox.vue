<!-- Task Söka recept bara inom vald kategori när man befinners sig på categoryView-->

<script>
export default {
    data() {
        return {
            heading: "Sök ",
            searchBoxInput: "",
            searchResult: [],
            time: "min"
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


<template>
    <input v-model="searchBoxInput" :placeholder="`Sök ${this.$route.params.categoryId}`" name="search">
    <button type="submit" @click="fetchData">{{ heading }} {{ this.$route.params.categoryId }}</button>

    <div v-for="search in searchResult" :key="searchResult._id">
        <!-- {{ search.title }} -->
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${search._id}`">{{ search.title }} </RouterLink>
                {{ search.ratings }}
            </div>
            <div class="grid-item recipe-img"><img :src="search.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ search.description }}</div>
            <div class="grid-item recipe-foot">{{ search.timeInMins }} {{ time }}</div>
        </div>
    </div>
</template>