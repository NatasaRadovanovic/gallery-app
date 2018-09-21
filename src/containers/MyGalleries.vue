<template>
  <div id="app"></br>
   <div class="polaroid" v-for="gallery in loadMoreGalleries" :key="gallery.id">
        <img :src="gallery.images[0].url " alt="Image" style="width:100%">
        <div class="container">
            <router-link :to="{name: 'single-gallery', params: {id: gallery.id}}">
                {{ gallery.name }}
            </router-link>
        </div>
    </div>
     <div>
        <button  v-if="galleries.next_page_url" @click="loadMore" class="btn btn-dark btn-sm">Load more...</button>
    </div>
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
    return{
      galleries:[],
      loadMoreGalleries:[],
    }
  },
 
  beforeRouteEnter(to, from, next){
    galleries.getOwnersGalleries()
    .then(response => {
      next(vm => {
        vm.galleries = response.data
         vm.paginateGalleries(vm.galleries)
        console.log(vm.galleries)
      })
    })
    .catch(error => {
      this.error = error.response.data.error
    })
  },
 methods: {
    paginateGalleries(vmGalleries) {
      this.galleries = vmGalleries
      this.loadMoreGalleries = this.galleries.data
    },
      
    loadMore() {
      galleries.getNextPage(this.galleries.next_page_url)
        .then((loadedGalleries) => {
          this.galleries = loadedGalleries.data
          for(var i = 0; i < loadedGalleries.data.data.length; i++) {
            this.loadMoreGalleries.push(loadedGalleries.data.data[i])
          }
        })
      },
    }

 }

</script>

<style scoped>
.card {
  width:60%;
  margin:0 auto;
  margin-bottom:20px;
}
</style>
