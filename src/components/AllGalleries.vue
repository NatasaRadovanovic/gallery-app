<template>
  <div id="app"><br/>
  <div class="polaroid" v-for="gallery in galleries" :key="gallery.id">
   <img :src="gallery.images[0].url " alt="Image" style="width:100%">
  <div class="container">
     <p><strong>{{ gallery.name }}</strong></p>
     <div><strong>
     <i class="far fa-user"></i> Author:</strong> {{ gallery.user.first_name }} {{ gallery.user.last_name }}</div>
     <p style="font-size:0.8rem"><em>{{ gallery.created_at }}</em></p>
  </div>
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
         console.log(galleries)
       }) 
    })
      .catch(err => console.log(err))
  },
    
}

</script>

<style scoped>

 div.polaroid {
  
  width: 25%;
  height:5%;
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
