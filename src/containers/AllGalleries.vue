<template>
  <div id="app"><br/>
    <search @searchGallery="searchGallery"/>
  <div class="wrapper">
    <div  class="polaroid" v-for="gallery in galleries" :key="gallery.id">
      <img v-if="gallery.images[0]" :src="gallery.images[0].url " alt="Image" style="width:100%">
      <div class="container">
        <router-link class="gallery-title" :to="{name: 'single-gallery', params: {id: gallery.id}}">
        <strong>{{ gallery.name }}</strong></router-link>
        <div>
          <strong><i class="fas fa-user"></i> Author:</strong>
          <router-link :to="{name: 'author-galleries', params: {id: gallery.user.id}}" class="gallery-author">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
          </router-link>
        </div>
        <p style="font-size:0.8rem"> <em><i class="far fa-clock"></i> {{ gallery.created_at }}</em></p>
      </div>
    </div>
    </div>
      <div>
        <button  v-if="loadMoreGalleries.next_page_url" @click="loadMore" class="btn btn-dark btn-sm">Load more...</button>
      </div>
  </div>
</template>
<script>

import { galleries } from '../services/Gallery'
import Search from '../components/Search'

export default {
  components: {
    Search,
  },
  data(){
    return{
      galleries:[],
      loadMoreGalleries:[],
      name:''
    }
  },

  /*computed: {
        filterGalleries: function () {  
            return this.galleries.filter((gallery) => {             
                return gallery.name.toLowerCase().includes(this.name) 
                        || gallery.user.first_name.toLowerCase().includes(this.name)
                        || gallery.user.last_name.toLowerCase().includes(this.name)
                        || gallery.description.toLowerCase().includes(this.name)
            })
        }                                                                                                                                                                                              
    },*/
  beforeRouteEnter (to, from, next) 
  { 
    galleries.getAll()
    .then(galleries =>{
      next(vm => {
        vm.galleries = galleries.data
        vm.loadMoreGalleries = galleries
      }) 
    }).catch(err => { 
        this.error = err.response.data.error})
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
      searchGallery(name){
      this.name = name 
      },
    }
  }

      
</script>

<style>

div.polaroid {
  margin-left:10px;
  margin-right:10px;
  width: 30%;
  height:20%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}

.wrapper{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between ;
  align-content: flex-start;
}

.gallery-title , .gallery-author{
  color:black;
}

.gallery-title:hover{
  font-size:1.2rem;
  text-decoration:none;
  color:black;
}

.gallery-author:hover{
  font-size:1.2rem;
  text-decoration:none;
  color:black;
}
</style>
