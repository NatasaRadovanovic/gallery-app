<template>
  <div id="app"></br>
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
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
      return{
          galleries:[],
          loadMoreGalleries:[]
        }
    },

  created() {
        galleries.getAuthorGalleries(this.$route.params.id)
        .then(response => {
            this.galleries = response.data.data
            this.loadMoreGalleries =  response.data
        })
        .catch(error => {
                this.error = error.response.data.error
        })
    },

    methods:{
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

<style scoped>
    
    div.polaroid {
        margin:0 auto;
        margin-bottom:20px;
    }
 
</style>
