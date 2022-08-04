<template>
    <div class="forcingSize d-flex flex-row justify-content-center align-items-center " >
        <div class="w-75 text-center">
        <h3>Faça login para continuar</h3>
        <button class="btn btn-primary" @click="login">Log in</button>
        </div>
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
    .forcingSize{
        height: 70vh;
    }

    h3{
        margin-bottom: 1.5rem;
    }
    
</style>