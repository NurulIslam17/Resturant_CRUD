<template>
  <HeaderSec />
  <h1>Update Resturant</h1>
  <div class="form">
    <form>
      <input type="text" v-model="returant.rName" name="name" placeholder="Enter Restutant Name" /><br /><br />
      <input type="text" v-model="returant.rAddress" name="address" placeholder="Enter address Name" /><br /><br />
      <input type="text" v-model="returant.rContact" name="contact" placeholder="Enter contact" /><br /><br />
      <button type="button" v-on:click="updateRestu" class="btn">Update Resturant</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios';
import HeaderSec from './Header.vue';
export default {
  name: 'UpdateRestu',
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
    async updateRestu() {
      // console.warn("Updated", this.returant);
      let update = await axios.put("http://localhost:3000/resturants/" + this.$route.params.updateId, {
        name: this.returant.rName,
        address: this.returant.rAddress,
        contact: this.returant.rContact,
      });

      if (update.status == 200) {
        this.$router.push({ name: 'HomeRoute' })
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('User_info');
    if (!user) {
      this.$router.push({ name: 'SignUpRoute' })
    }
    let result = await axios.get("http://localhost:3000/resturants/" + this.$route.params.updateId)
    // console.warn(this.$route.params.updateId);
    // console.warn(result.data);
    // this.returant = result.data;
    this.returant.rName = result.data.name
    this.returant.rAddress = result.data.address
    this.returant.rContact = result.data.contact
  }
}
</script>

<style scoped>
.form {
  background-color: rgb(58, 231, 110);
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
  background-color: rgb(3, 70, 14);
  color: #FFF;

}
</style>