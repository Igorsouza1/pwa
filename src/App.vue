<template>
  <div>
    <nav-bar></nav-bar>
    <router-link to="/" hidden>login</router-link>
    <router-link to="form" hidden>form</router-link>
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
