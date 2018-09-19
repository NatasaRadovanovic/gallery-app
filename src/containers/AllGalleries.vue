<template>
  <div id="app"><br/>
    <div v-if="galleries.length > 0">
      <div  class="polaroid" v-for="gallery in galleries" :key="gallery.id">
        <img :src="gallery.images[0].url " alt="Image" style="width:100%">
        <div class="container">
          <router-link  :to="{name: 'single-gallery', params: {id: gallery.id}}">{{ gallery.name }}</router-link>
          <div><i class="far fa-user"></i> <strong>Author:</strong>
          <router-link :to="{name: 'author-galleries', params: {id: gallery.user.id}}">
          {{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link></div>
          <p style="font-size:0.8rem"><em>{{ gallery.created_at }}</em></p>
        </div>
      </div>
        <button>Load more</button>
    </div>
    <div v-else>
        <h2>There are no galleries!</h2>
    </div>
  </div>
</template>
<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
    return{
      galleries:[]
    }
  },

  beforeRouteEnter (to, from, next) { 
      galleries.getAll().then(galleries =>{
        next(vm => {
         vm.galleries = galleries
         //console.log(galleries)
       }) 
    })
      .catch(err => { 
        this.error = error.response.data.error})
  },
    
}

</script>

<style>

 div.polaroid {
  width: 60%;
  height:20%;
  margin:0 auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}
</style>
