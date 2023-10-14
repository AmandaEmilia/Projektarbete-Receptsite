<template>
    <h1>{{ this.$route.params.categoryId }}</h1>
    <div v-for="recipe in category" :key="recipe._id">
        <div class="grid-container">
            <div class="grid-item recipe-head">
                <RouterLink :to="`/recipes/${recipe._id}`">{{ recipe.title }}</RouterLink>
            </div>
            <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
            <div class="grid-item recipe-main">{{ recipe.description }}</div>
            <div class="grid-item recipe-foot">{{ recipe.timeInMins }} {{ time }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            category: "",
            categoryId: ""
        }
    },
    methods: {
        fetchData() {
            this.category = null;
            fetch(`https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories/${this.$route.params.categoryId}/recipes`)
                .then((response) => response.json())
                .then((data) => { this.category = data })

        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.categoryId = this.fetchData(toParams || "");
            }
        )
    },
    mounted() {
        this.fetchData();
    }
}
</script>