<template>
  <HeaderSec />
  <h1>Add Restrurant</h1>
  <div class="form">
    <form>
      <input type="text" v-model="returant.rName" name="retuName" placeholder="Enter Restutant Name" /><br /><br />
      <input type="text" v-model="returant.rAddress" name="address" placeholder="Enter address Name" /><br /><br />
      <input type="text" v-model="returant.rContact" name="contact" placeholder="Enter contact" /><br /><br />
      <button type="button" v-on:click="addRestu" class="btn">Add Resturant</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios';
import HeaderSec from './Header.vue';
export default {
  name: 'AddRestu',
  components: {
    HeaderSec
  },
  data() {
    return {
      returant: {
        rName: '',
        rAddress: '',
        rContact: '',
      }
    }
  },
  methods: {
    async addRestu() {
      // console.warn(this.returant.rName, ' : ', this.returant.rAddress, ' : ', this.returant.rContact);
      let addRest = await axios.post('http://localhost:3000/resturants', {
        name: this.returant.rName,
        address: this.returant.rAddress,
        contact: this.returant.rContact

      });
      // console.warn(addRest);
      if (addRest.status == 201) {
        this.$router.push({ name: "HomeRoute" });
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('User_info');
    if (!user) {
      this.$router.push({ name: 'SignUpRoute' })
    }
  }
}
</script>

<style scoped>
.form {
  background-color: aquamarine;
  padding: 60px 15px;
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.form input {
  padding: 10px;
  width: 90%;
  font-size: 17px;
}

.btn {
  padding: 10px;
  width: 90%;
  font-size: 18px;
  border: none;
  background-color: blue;
  color: #FFF;

}
</style>