<template>
  <div id="app"></br>
    <div class="wrapper" v-if="user.galleries"> 
      <div class="card" v-for="gallery in user.galleries.slice().reverse()" :key="gallery.id" 
      v-if="gallery.images" >
        <img class="card-img-top" :src="gallery.images[0].url" alt="Card image cap">
        <div class="card-body bg-light">
          <router-link :to="{ name: 'single-gallery', params: {id: gallery.id}}">
            <p class="card-text"><strong>{{ gallery.name}}</strong></p>
          </router-link>
          <div class="card-text" style="padding: 0.6rem;">
              <i class="far fa-user"></i> <strong>Author: </strong>
              <router-link :to="{ name: 'my-galleries', params: {id: user.id}}">
                <em>{{ user.first_name }} {{ user.last_name }}</em>
              </router-link>
            <div class="card-text" style="font-size: 0.7rem;">{{ gallery.created_at }}</div>
          </div>
        </div>
      </div>
    </div> 
      <div id="no-galleries" v-else><strong>There is no galleries yet.</strong></div>
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
    return{
      user:{}
    }
  },
 
  beforeRouteEnter(to, from, next){
    galleries.getOwnersGalleries()
    .then(response => {
      next(vm => {
        vm.user = response.data
        //console.log(response.data.galleries)
      })
    })
    .catch(error => {
      this.error = error.response.data.error
    })
  },
 }

</script>

<style scoped>
.card{
  width:60%;
  margin:0 auto;
  margin-bottom:20px;
}
</style>
