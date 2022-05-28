<template>
  <img class="logo" src="../assets/resto.png" />
  <h1>Sign Up</h1>

  <div class="resturant">
    <input type="text" v-model="name" placeholder="Your Name" />
    <input type="email" v-model="email" placeholder="Your Email" />
    <input type="password" v-model="password" placeholder="Your Password" />

    <button class="btnSUP" v-on:click="singUp">Sign Up</button>
    <p>Have you already an account? <router-link to='/login'>Login</router-link></p>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async singUp() {
      console.warn(this.name, ':', this.email, ' : ', this.password);
      let result = await axios.post('http://localhost:3000/user', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.warn(result);
      if (result.status == 201) {
        // alert("Signed Up Success..")
        localStorage.setItem("User_info", JSON.stringify(result.data));
        this.$router.push({ name: 'HomeRoute' })
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('User_info');
    if (user) {
      this.$router.push({ name: 'HomeRoute' })
    }
  }
};
</script>

<style scoped>
.logo {
  width: 135px;
  height: 127px;
}

h1 {
  padding: 0px;
  margin: 0px;
  margin-bottom: 20px;
}

.resturant input {
  display: block;
  width: 300px;
  height: 34px;
  margin-bottom: 20px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  border: 1px solid rgb(101, 101, 230);
}

.btnSUP {
  width: 318px;
  height: 30px;
  background: skyblue;
  font-size: 18px;
  border: 1px solid blue;
  font-weight: bolder;
  padding: 6px;
}
</style>
