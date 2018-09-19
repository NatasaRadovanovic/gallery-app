<template>
  <div>
    <div class="wrapp">
      <div class="form-wrapp">
        <form  @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="first_name">First Name</label>
              <input type="text" class="form-control" id="first_name" 
              placeholder="Enter first name" name="first_name" v-model="user.first_name">
              <div class="alert alert-warning"  v-if="errors.first_name">
              {{ errors.first_name[0] }}</div>
              </div>
            <div class="form-group">
              <label for="last_name">Last Name</label>
              <input type="text" class="form-control" id="last_name" placeholder="Enter last name"
              name="last_name" v-model="user.last_name">
              <div class="alert alert-warning"   v-if="errors.last_name">
              {{ errors.last_name[0] }}</div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email" name="email" v-model="user.email" >
              <div class="alert alert-warning" v-if="errors.email">
              {{ errors.email[0] }}</div>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
              name="password" v-model="user.password">
              <div class="alert alert-warning" v-if="errors.password">
              {{ errors.password[0] }}</div>
              </div>
             <div class="form-group">
              <label for="confirm_password">Confirm password</label>
              <input type="password" class="form-control" id="confirm_password" placeholder="Confirm Password"
              name="confirm_password" v-model="user.password_confirmation">
              <div class="alert alert-warning" v-if="errors.confirm_password">
              {{ errors.confirm_password[0] }}</div>
            </div>
            <input type="checkbox" name="accepted_terms_and_conditions" value="true" v-model="user.accepted_terms_and_conditions"><strong>
            I accept terms and conditions</strong><br>
            <button type="submit" class="btn btn-dark btn-sm">Register</button>
        </form>
      </div> 
    </div>
  </div>
</template>

<script>

import { authService } from '../services/Auth'

export default {
  data(){
    return{
      user:{},
      errors:[],
    }
  },

  methods: {
    onSubmit()
    {
      authService.register(this.user)
      .then(() => {
        this.$emit('userAuthenticated', true)
        this.$router.push('/')
        })
        .catch((err) => {
          this.errors = err.response.data.errors
      })
    }
  }
}

</script>

<style scoped>
  
</style>