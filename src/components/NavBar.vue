<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><i class="far fa-image"></i> Gallery</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">All Galleries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Galleries</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-pencil-alt"></i> Create New Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="far fa-user"></i> Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
     
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    
}

</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
