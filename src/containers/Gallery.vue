<!--COROSOUL!! I TARGET BLANK?? URADITI! -->

<template>
    <div id="app">
        <br/><h4>{{ gallery.name }}</h4>
        <div>
            <i class="far fa-user"></i> <strong>Author:</strong>
            <router-link v-if="gallery.user":to="{name: 'author-galleries', params: {id: gallery.user.id}}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
        </div>
        <div style="font-size:0.8rem; margin-top:10px;"><em>{{ gallery.created_at }}</em></div>
        <div class="description-box">
          <p>{{ gallery.description }}</p>
        </div>  

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(image, index) in gallery.images" :key="index" 
          v-bind:class="{ active: index === 0 }">
          <a :href="image.url" target="_blank" ><img class="d-block w-100" :src="image.url"></a>
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
    </div>
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
      return{
          gallery:[],
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
    },
}

</script>

<style scoped>

img{
    width:250px;
    height:300px;
}

#carouselExampleControls{
    width:70%;
    margin:0 auto;
}

.description-box{
  width:60%;
  margin:0 auto;
  margin-top:20px;
}
</style>
