<template>
  <div>
    <form  @submit.prevent="onSubmit">
        <h2>Login</h2>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email" name="email" v-model="email">
            <div class="alert alert-danger" v-if="errors">{{ errors.error }}</div> 
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
            name="password" v-model="password">
            <div class="alert alert-danger" v-if="errors">{{ errors.error }}</div> 
        </div><br/>
        <button type="submit" class="btn btn-dark btn-sm">Login</button>
    </form>
</div>
</template>

<script>

import { authService } from '../services/Auth'

export default {
     data(){
        return {
            email: '',
            password: '',
            errors:''
        }
   },

   methods: {
        onSubmit(){
            authService.login(this.email, this.password)
                .then(() => {
                    this.$emit('userAuthenticated', true)
                    this.$router.push('/')
                })
                .catch((err) => {
                this.errors = err.response.data
            })
        }
    }
}
</script>

<style>
   form h2{
       margin-bottom:15px;
    }
   
   form{
        width:50%;
        height:500px;
        margin:0 auto;
        padding:50px;
    }

    input{
        font-size:0.8rem;
        font-style:italic;
        box-shadow: 2px 2px 5px grey;
    }

    label{
        float:left;
    }

</style>