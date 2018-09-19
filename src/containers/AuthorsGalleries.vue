<template>
  <div id="app"></br>
    <div class="polaroid" v-for="gallery in galleries" :key="gallery.id">
        <img :src="gallery.images[0].url " alt="Image" style="width:100%">
        <div class="container">
            <router-link :to="{name: 'single-gallery', params: {id: gallery.id}}">
            {{ gallery.name }}</router-link>
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

  created() {
        galleries.getAuthorGalleries(this.$route.params.id)
        .then(response => {
            this.galleries = response.data
            console.log(this.galleries)
        })
        .catch(error => {
                this.error = error.response.data.error
        })
    }
}

</script>

<style scoped>

 
</style>
