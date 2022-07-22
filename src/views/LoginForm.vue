<template >
    <div>
        <div class="text-login">
            <h3>Por favor, faça login para continuar</h3>
            <button class="btn btn-success" @click="login">Login</button>
        </div>
    </div>
</template>
<script>

export default {
   methods: {
      login() {
        this.$auth0.loginWithRedirect();
      }
    }
  }
</script>
<style scoped>
    .text-login{
        text-align: center;
        width: 50%;
        margin: auto;
        height: 10rem;
        margin-top: 5rem;
    }
</style>