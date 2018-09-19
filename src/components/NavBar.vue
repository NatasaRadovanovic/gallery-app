<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><i class="far fa-image"></i> Gallery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">All Galleries</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/my-galleries" v-if="isAuthenticated">My Galleries</router-link>
                </li>
                <li class="nav-item">
                    <router-link  class="nav-link" to="/create" v-if="isAuthenticated">
                    <i class="fas fa-pencil-alt"></i> Create New Gallery</router-link>
                </li>
                <li class="nav-item">
                   <router-link class="nav-item nav-link" to="/login"  v-if="!isAuthenticated">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/register" v-if="!isAuthenticated"><i class="far fa-user"></i> Register</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="logout" v-if="isAuthenticated">Logout</a>
                </li>
     
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>

import { authService } from '../services/Auth' 

export default {
    name:'NavBar',
     props: {
        isAuthenticated: Boolean,
    },

    methods: {
        logout(){
            authService.logout()
            this.$emit('userAuthenticated', false)
            this.$router.push('/login')
        }
    }
}

</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
