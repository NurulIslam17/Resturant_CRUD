<template>
  <div class="navbar">
    <router-link to="/">Home </router-link> 
    <router-link to="/addRestu">Add Resturant </router-link> 
    <!-- <router-link to="/updateRestu">Update Resturant </router-link>  -->
    <a v-on:click="logOut" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderSec',
  methods: {
    logOut() {
      // console.warn('Log Out');
       localStorage.clear();
       this.$router.push({name: "LoginRoute"});
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: rgb(7, 37, 37);
  overflow: hidden;
}

.navbar a {
  font-size: 16px;
  padding: 15px 14px;
  text-decoration: none;
  color: aliceblue;
  float: left;
  text-align: center;
}

.navbar a:hover {
  background-color: rgb(204, 226, 226);
  color: black;
  border-radius: 5px;
}
</style>