<template>
  <div id="app">
     <nav-bar :isAuthenticated="isAuthenticated" 
              @userAuthenticated="toggleAuthenticated"/>
     <router-view  @userAuthenticated="toggleAuthenticated"/>
  </div>
</template>

<script>

import NavBar from './components/NavBar'
import { authService } from './services/Auth'

export default {
    name:'App',
    components:{
        NavBar
    },

    data(){
    return {
      isAuthenticated: authService.isAuthenticated()
    }
  },

   methods: {
    toggleAuthenticated(value)
    {
      this.isAuthenticated = value
    }
  }
}

</script>
<style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
