<template>
  <div id="app"></br>
    <form  @submit.prevent='onSubmit'>
      <div class="form-group">
        <label for="name">Name of Gallery</label>
        <input type="text" class="form-control" id="name" 
        placeholder="Title" name="name" v-model="gallery.name" required pattern=".{2,255}"  title="2 to 255 characters">
         <div class="alert alert-warning" v-if="errors.name">{{ errors.name[0] }}</div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea rows="4" cols="50" class="form-control" id="description" placeholder="Description"
        name="description" v-model="gallery.description"></textarea>
        <div class="alert alert-warning" v-if="errors.description">{{ errors.description[0] }}</div>
      </div>
      
      <div class="form-group" v-for="(n, index) in inputs" :key="index">
        <input id="image_url" class="url-input" name="image_url" v-model='gallery.images[index]' 
        placeholder="Add url" required>
        <p class="alert alert-danger" v-if="errors[`images.${index}`]">Wrong format of image</p>
        <button class="btn btn-success btn-sm" @click="addRow"><i class="fas fa-plus"></i></button>
        <button class="btn btn-danger btn-sm" v-if="inputs > 1" @click="deleteRow(index)"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-12">
          <button name="submit" type="submit" class="btn btn-success btn-sm">Add Gallery</button>
          <router-link class="btn btn-danger btn-sm" to="my-galleries">Cancel</router-link>
        </div>
    </div>    
    </form>
  </div>
</template>
<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
    return{
      gallery:{
        images:[]
      },
      inputs:1,
      errors:[],
    }
  },
    
  methods:{
    onSubmit()
    {
      galleries.addGallery(this.gallery)
      .then(response => {
      this.$router.push('my-galleries')
    }).catch((err) => {
         this.errors = err.response.data.errors
      })
    },
      
     addRow()
    {
      this.inputs++
    },
       
      deleteRow(index)
     {
        this.gallery.images.splice(index, 1)
        this.inputs--
     },
    }
   }

</script>

<style scoped>
button{
  margin:3px;
}
 
</style>
