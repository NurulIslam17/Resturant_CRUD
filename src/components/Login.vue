<template>
  <img class="logo" src="../assets/resto.png" />
  <h1>Log In</h1>

  <div class="login">
    <input type="email" v-model="email" placeholder="Your Email" />
    <input type="password" v-model="password" placeholder="Your Password" />
    <button class="btnLogIn" v-on:click="logIn">Log In</button>
  </div>

</template>

<script>
import axios from 'axios'
// import axios from 'axios'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async logIn() {
      let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
      //  console.warn(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem('User_info', JSON.stringify(result.data));
        this.$router.push({ name: 'HomeRoute' });
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('User_info');
    if (user) {
      this.$router.push({ name: "HomeRoute" });
    }
  }
}
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

.login input {
  display: block;
  width: 300px;
  height: 34px;
  margin-bottom: 20px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  border: 1px solid rgb(0, 0, 0);
}

.btnLogIn {
  width: 318px;
  height: 35px;
  background: rgb(6, 76, 206);
  color: #FFF;
  font-size: 19px;
  border: 1px solid rgb(0, 0, 0);
  font-weight: 500;
  padding: 6px;
}
</style>
