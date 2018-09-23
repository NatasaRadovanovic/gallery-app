<template>
   <div class="search">
        <input class="search" type="text" placeholder="Search" v-model="gallery">
         <button class="btn btn-light btn-sm" @click="emitInputChangeEvent"><i class="fas fa-search"></i></button>
    </div>
</template>

<script>
export default {
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

    button{
        margin-left:10px;
    }
</style>