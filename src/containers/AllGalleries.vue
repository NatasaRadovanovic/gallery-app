<template>
  <div id="app"><br/>
    <div  class="polaroid" v-for="gallery in loadMoreGalleries" :key="gallery.id">
      <img v-if="gallery.images[0]" :src="gallery.images[0].url " alt="Image" style="width:100%">
      <div class="container">
        <router-link  :to="{name: 'single-gallery', params: {id: gallery.id}}">{{ gallery.name }}</router-link>
        <div>
          <i class="far fa-user"></i> <strong>Author:</strong>
          <router-link :to="{name: 'author-galleries', params: {id: gallery.user.id}}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
          </router-link>
        </div>
        <p style="font-size:0.8rem"><em>{{ gallery.created_at }}</em></p>
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

  beforeRouteEnter (to, from, next) { 
      galleries.getAll().then(galleries =>{
        next(vm => {
         vm.galleries = galleries
         vm.paginateGalleries(vm.galleries)
       }) 
    })
      .catch(err => { 
        this.error = err.response.data.error})
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
