<template>
    <div id="app">
      <div v-if="gallery.user">
        <br/><h4>{{ gallery.name }}</h4>
         <div>
            <i class="far fa-user"></i> <strong>Author:</strong>
            <router-link v-if="gallery.user" :to="{name: 'author-galleries', params: {id: gallery.user.id}}">
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
    <div><br/>
      <button  class="btn btn-danger btn-sm" v-if="isAuthenticated &&  gallery.user.id == authUserId" 
       @click="deleteGallery"><i class="fas fa-trash-alt"></i></button>
    </div>

    <h5>Comments:</h5>
      
    <div class='card-block' v-for="comment in gallery.comments">
      <p style="font-size:1rem;" v-if="gallery.user">
      <i class="far fa-user"></i> {{ `${gallery.user.first_name} ${gallery.user.last_name}` }}</p> 
      <p><em>{{ comment.created_at }}</em></p>
      <p>{{ comment.body }}</p>
      <div><button v-if="isAuthenticated && gallery.user.id == authUserId"
                   @click="deleteComment(comment.id)" class="btn btn-danger btn-sm">Delete comment</button></div>
      </div>

     <form  @submit.prevent="onSubmit" v-if="isAuthenticated">
        <div class="form-group">
            <textarea class="form-control" id="comment" 
            placeholder="Enter comment" name="comment" v-model="comment.body"></textarea>
             <div class="alert alert-warning" v-if="errors.body">{{ errors.body[0] }}</div> 
        </div>
        <button type="submit" class="btn btn-dark btn-sm">Add comment</button>
    </form>
  </div>
  </div>
</template>

<script>

import { galleries } from '../services/Gallery'
import { comments } from '../services/Comment'
import { authService } from '../services/Auth'

export default {
  data(){
      return{
          gallery:[],
          comment:{},
          errors:[],
          isAuthenticated: authService.isAuthenticated(),
          authUserId: authService.getAuthUserId()
      }
  },

  created() {
        galleries.get(this.$route.params.id)
        .then(response => {
            this.gallery = response.data
            console.log(response.data)
            console.log(authService.isAuthenticated())
            
        })
        .catch(error => {
                this.error = error.response.data.error
        })
    },

    methods:{
      onSubmit() {
        this.comment.gallery_id = this.gallery.id;
        console.log(this.gallery)
        comments.addComment(this.comment)
        .then(response => {
            this.gallery.comments.push(this.comment)
            this.comment = {}
        })
        .catch((err) => {
            this.errors = err.response.data.errors
        })
    },

    deleteComment(id) {
      if(!confirm('Are you sure you want to delete the comment?')){
        return;
      }
      comments.delete(id)
      .then(() =>{
          let index = this.gallery.comments.findIndex(comment => comment.id == id)
          this.gallery.comments.splice(index, 1)
       })
      },

      deleteGallery(){
         if(!confirm('Are you sure you want to delete this gallery?')){
           return;
        }
        galleries.delete(this.gallery.id)
        .then(() => {
           this.$router.push({ name: "my-galleries"});
        })
      }
    }
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

.card-block{
  border: 1px solid silver;
  margin-bottom: 5px;
  width: 50%;
  margin:0 auto;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
 }

 .card-block p{
   font-size:0.8rem;
 } 
  
  h5{
    margin-top:50px;
  }  
</style>
