<template>
   <button @click="$emit('btnClick')" :class="[defaultType, btnType]"><slot></slot></button>
</template>

<script>
    export default {
        data() {
        return {
           defaultType:"btn"
        }
    },
    props: {
        btnType: String
    }
    }
</script>

<style scoped>
.btn {
  border: black solid; /* Remove borders */
  color: white; /* Add a text color */
  padding: 5px 10px; /* Add some padding */
  cursor: pointer; /* Add a pointer cursor on mouse-over */
}

.success {background-color: #04AA6D;} /* Green */
.success:hover {background-color: #46a049;}
.btn:disabled {background-color: grey;}
.info {background-color: #2196F3;} /* Blue */
.info:hover {background: #0b7dda;}

.warning {background-color: #ff9800;} /* Orange */
.warning:hover {background: #e68a00;}

.danger {background-color: #f44336;} /* Red */
.danger:hover {background: #da190b;}

.default {background-color: #e7e7e7; color: black;} /* Gray */
.default:hover {background: #ddd;}

</style>