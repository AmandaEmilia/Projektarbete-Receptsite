<!-- Task 2.5 Lista Kategorier-->
<template>
        <div class="category-background">
            <h2>Kategorier</h2>
            <nav v-for="category in categories" :key="categories._id" :class="{ isCurrent: this.$route.path === `/category/${category.name}`}">
                <RouterLink class="router-link" :to="`/category/${category.name}`">{{ category.name }} ({{ category.count
                }})</RouterLink>
            </nav>
        </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    methods: {
        fetchData() {
            this.categories = null;
            fetch("https://jau22-recept-grupp1-ijykxvjg4n3m.reky.se/categories")
                .then((response) => response.json())
                .then((data) => {
                    this.categories = data;
                })
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<style scoped>

.category-background nav {
    padding-top: 10%;
}

.isCurrent {
    font-weight: bold;
}
</style>