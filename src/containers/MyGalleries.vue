<template>
  <div id="app"></br>
  <div v-if="!galleries.length <= 0">
   <div class="polaroid" v-for="gallery in galleries" :key="gallery.id">
        <img :src="gallery.images[0].url " alt="Image" style="width:100%">
        <div class="container">
            <router-link :to="{name: 'single-gallery', params: {id: gallery.id}}" class="gallery-title">
                {{ gallery.name }}
            </router-link>
        </div>
    </div>
     <div>
        <button  v-if="loadMoreGalleries.next_page_url" @click="loadMore" class="btn btn-dark btn-sm">Load more...</button>
    </div>
  </div v-else><h1>You don't have gallery yet.</h1>
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
        vm.galleries = response.data.data
        vm.loadMoreGalleries = response.data
      })
    }).catch(error => {
      this.error = error.response.data.error
    })
  },
 methods: {
    loadMore() 
    {
      galleries.getNextPage(this.loadMoreGalleries.next_page_url)
        .then((response) => {
          this.loadMoreGalleries = response.data
          for(var i = 0; i < response.data.data.length; i++) {
            this.galleries.push(response.data.data[i])
          }
        })
      },
    }
  }

</script>

<style scoped >
.card {
  width:30%;
  margin:0 auto;
  margin-bottom:20px;
}

div.polaroid {
  margin:0 auto;
  margin-bottom:20px;
}

div.polaroid:hover{
  width:33%;
}
</style>
