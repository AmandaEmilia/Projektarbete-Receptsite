<template>
    <span class="star" v-bind:class="updateRating(1)"> ★ </span>
    <span class="star" v-bind:class="updateRating(2)"> ★ </span>
    <span class="star" v-bind:class="updateRating(3)"> ★ </span>
    <span class="star" v-bind:class="updateRating(4)"> ★ </span>
    <span class="star" v-bind:class="updateRating(5)"> ★ </span>
</template>
<script>
export default {
    methods: {
        updateRating(value) {
            if (value <= this.avgRating) {
                return 'star checked'
            }
        }
    },
    props: {
        avgRating: String
    }
}
</script>
<style>
.star {
    color: black;
    font-size: 42px;
}

.checked {
    color: rgba(237, 22, 59, 0.50);
    font-size: 42px;
}
</style>