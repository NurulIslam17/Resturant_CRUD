<template>
  <HeaderSec />
  <h1>Hello {{ userName }} ,Welcome to Home Page.</h1>
  <div class="tableCls">
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Resturant Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Operations</th>
      </tr>
      <tr v-for="item in resturants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td class="action">
          <router-link class="btn update" :to="'/updateRestu/' + item.id">Update</router-link>
          <button v-on:click="deleteData(item.id)" class="btn delete">Delete</button>
        </td>
      </tr>
    </table>

  </div>

</template>


<script>
import axios from 'axios';
import HeaderSec from './Header.vue';
export default {
  name: 'HomePage',
  data() {
    return {
      userName: '',
      resturants: [],
    }
  },
  components: {
    HeaderSec
  },
  methods: {
    async deleteData(id) {
      // console.warn(id);
      let del = await axios.delete("http://localhost:3000/resturants/" + id);
      if (del.status == 200) {
        // console.warn("Data Deleted",del.status)
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('User_info');
      // console.warn(user);
      this.userName = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: 'SignUpRoute' })
      }

      let restu = await axios.get("http://localhost:3000/resturants");
      // console.warn(restu);
      this.resturants = restu.data;
    }
  },
  async mounted() {
    this.loadData();
  }
}
</script>

<style scoped>
.tableCls {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  background-color: aliceblue;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th {
  background-color: rgb(3, 104, 70);
  color: #FFF;
  padding: 9px;
  font-size: 18px;
}

table tr:nth-child(even) {
  background-color: rgb(203, 212, 212);
}

td {
  text-align: left;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
}

.action {
  text-align: center;
}

.btn {
  text-decoration: none;
  padding: 5px;
  border-radius: 3px;

}

.update {
  background-color: rgb(37, 146, 64);
  color: #FFF;
  margin-right: 5px;
}

.delete {
  background-color: rgb(218, 12, 12);
  color: #FFF;
  border: none;
  font-size: 17px;
  font-weight: 600;
}
</style>