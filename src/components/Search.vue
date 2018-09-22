<template>
   <div class="search">
        <input class="search" type="text" placeholder="Search" v-model="gallery">
         <button class="btn btn-danger btn-sm" @click="emitInputChangeEvent">Search</button>
    </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  data(){
      return{
          gallery:''
      }
  },
    methods:{
        emitInputChangeEvent(){
            this.$emit('searchGallery',this.gallery)
        }
    }
}
</script>

<style>
    .search{
        margin-bottom:20px;
    }
</style>