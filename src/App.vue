<template>
  <div>
    <nav-bar></nav-bar>
    <router-link to="/" hidden>login</router-link>
    <router-link to="/login" hidden>form</router-link>
    <router-view v-on:tira-medidas="teste"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    teste(value){
      console.log(value)
    }
  }
}
</script>

<style>
</style>
