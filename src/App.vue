<template>
  <div>
    <nav-bar></nav-bar>
    <form-cavalo></form-cavalo>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FormCavalo from './components/FormCavalo.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FormCavalo
  }
}
</script>

<style>

</style>
