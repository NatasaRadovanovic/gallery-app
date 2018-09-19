<template>
  <div id="app"></br>
    <form  @submit.prevent>
      <div class="form-group">
        <label for="name">Name of Gallery</label>
        <input type="text" class="form-control" id="name" 
        placeholder="Title" name="name" v-model="gallery.name">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea rows="4" cols="50" class="form-control" id="description" placeholder="Description"
        name="description" v-model="gallery.description"></textarea>
      </div>
       <div class="form-group">
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

        <button class="btn btn-danger btn-sm">Cancel</button>
      
      </form>
  </div>
</template>
<script>

import { galleries } from '../services/Gallery'

export default {
  data(){
    return{
      inputs: [],
      gallery:{
        images:[]
      },
      errors:{},
    }
  },
    
  methods:{
    onSubmit(){
        galleries.addGallery(this.gallery)
        .then(response => {
        this.$router.push('/my-galleries')
      })
       .catch(error => console.log(this.errors = error.response.data.errors))
    },

     addRow(){
      this.inputs.push({
        one: '',
      })
    },

    deleteRow(index){
      this.inputs.splice(index,1)
    }
  }
 }

</script>

<style scoped>

 
</style>
