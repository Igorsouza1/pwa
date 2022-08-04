<template>
    <div>
        <button @click="login">Log in</button>
    </div>
</template>
<script>
export default {
    name: 'LoginAuth',
    methods: {
      login() {
        this.$auth0.loginWithRedirect();
      }
    }
}
</script>
<style scoped>
    
</style>