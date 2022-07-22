<template>
  <div>
    <nav-bar></nav-bar>
    <router-link to="/formulario" hidden>forme</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
