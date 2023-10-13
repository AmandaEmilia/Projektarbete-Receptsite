<template>
    <div :class="[defaultAlertClass,alertType]">{{ alertMessage }}</div>
</template>

<script>
export default {
    data() {
        return {
            defaultAlertClass: "alert"
        }
    },
    props: {
        alertMessage: String,
        alertType: String
    }
}
</script>

<style scoped>

/* Meddelande som kan användas på hela sajten*/
.alert {
  padding: 10px;
  color: black;
  margin-bottom: 5px;
  font-size: 15px;
  color: white;
  border: black solid;
}

.alert.success {background-color: #04AA6D;}
.alert.info {background-color: #2196F3;}
.alert.warning {background-color: #ff8c00;}
.alert.danger {background-color: #f44336;}

</style>