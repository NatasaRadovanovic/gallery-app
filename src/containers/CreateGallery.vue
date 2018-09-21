<template>
  <div id="app"></br>
    <form  @submit.prevent='onSubmit'>
      <div class="form-group">
        <label for="name">Name of Gallery</label>
        <input type="text" class="form-control" id="name" 
        placeholder="Title" name="name" v-model="gallery.name">
         <div class="alert alert-warning" v-if="errors.name">{{ errors.name[0] }}</div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea rows="4" cols="50" class="form-control" id="description" placeholder="Description"
        name="description" v-model="gallery.description"></textarea>
        <div class="alert alert-warning" v-if="errors.description">{{ errors.description[0] }}</div>
      </div>
       <!--<div class="form-group">
        <label for="name">Url</label>
        <input type="text" class="form-control" id="url" 
        placeholder="url" name="url" required>
      </div>
        <div class="form-group" v-for="(input, index) in inputs" :key="index">
        <input type="text" class="form-control" id="url" 
        placeholder="url" name="url" v-model="input.one" >{{ input.one }} 
        <button @click="deleteRow(index)" class="btn btn-danger btn-sm">Delete</button>
      </div>
      <div>
        <button @click="addRow" class="btn btn-dark btn-sm">Add another URL</button>
      </div><br/>
    
        <button @click="onSubmit" type="submit" class="btn btn-dark btn-sm">Submit</button>

        <router-link to="/my-galleries" class="btn btn-danger btn-sm">Cancel</router-link>-->

    <div class="form-group" v-for="(n, index) in inputs" :key="index">
        <input id="image_url" name="image_url" v-model='gallery.images[index]' placeholder="Add url" required>
        <button v-if="inputs > 1" @click="deleteRow(index)">Delete</button>
    </div>

        <a class="btn btn-secondary" @click="addRow">Add image url</a>

        <div class="form-group row">
            <div class="offset-4 col-8">
                <button name="submit" type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="offset-4 col-8">
                <router-link to="my-galleries" class="btn btn-primary">Cancel</router-link>
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
    onSubmit(){
        galleries.addGallery(this.gallery)
        .then(response => {
        this.$router.push('my-galleries')
      })
       .catch((err) => {
          this.errors = err.response.data.errors
      })
    },
      
     addRow(){
        this.inputs++
    },
       
      deleteRow(index) {
        this.inputs--
     },
    }
   }

</script>

<style scoped>

 
</style>
