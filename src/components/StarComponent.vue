<template>
  <!--   <span class="star" v-bind:class="updateRating(1)"> ★ </span>
    <span class="star" v-bind:class="updateRating(2)"> ★ </span>
    <span class="star" v-bind:class="updateRating(3)"> ★ </span>
    <span class="star" v-bind:class="updateRating(4)"> ★ </span>
    <span class="star" v-bind:class="updateRating(5)"> ★ </span> -->

    <span
        class="star"
        v-for="star in 5"
        :key="star"
        :class="updateRating(star)"
      >
      ★
      </span>
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
        avgRating: String,
    }
}
</script>
<style>
.star {
    color: rgb(223, 218, 218);
    font-size: 21px;
}

.checked {
    color: rgba(237, 22, 59, 0.50);
    font-size: 21px;
}
</style>