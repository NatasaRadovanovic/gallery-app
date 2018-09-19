<!--COROSOUL!! I TARGET BLANK?? URADITI! -->

<template>
  <div id="app">
    <h3>{{ gallery.name }}</h3>
    <div><i class="far fa-user"></i> Author:
     <router-link :to="{name: 'author-galleries', params: {id: gallery.user.id}}">
     {{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link></div>
    <div>{{ gallery.created_at }}</div>
    <p>{{ gallery.description }}</p>

  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" 
   v-for="(image, key) in gallery.images" :key="key">
    <img class="d-block w-100" :src="image.url" ></div>
  <!--<div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="image.url">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="image.url" >
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"  :src="image.url" >
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>-->
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
      return{
          gallery:[]
      }
  },

  created() {
        galleries.get(this.$route.params.id)
        .then(response => {
            this.gallery = response.data
        })
        .catch(error => {
                this.error = error.response.data.error
        })
    }

}

</script>

<style scoped>
img{
    width:250px;
    height:300px;
}

#carouselExampleControls{
    width:60%;
    margin:0 auto;
}
 
</style>
