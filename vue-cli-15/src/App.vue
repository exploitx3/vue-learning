<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="mail">Mail</label>
          <input id="mail" type="text" class="form-control" v-model="user.email">
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <hr>
        <input type="text" v-model="node" class="form-control">
        <button @click="fetchData" class="btn btn-primary">Fetch Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">{{user.username}} - {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
//        this.$http.post('data.json', this.user)
//        .then(response => {
//          console.log(response)
//        }, error => {
//          console.error(error)
//        })
//        this.resource.save({}, this.user)
        this.resource.saveAlt(this.user)
      },

      fetchData() {
//        this.$http.get('data.json',
//          {})
//        .then(response => {
//          // response.json() returns a promise and gets the body as a json parsed body
//          return response.json()
//        }).then(jsonData => {
//          console.log(jsonData)
//          const self = this
//          Object.entries(jsonData).forEach(fetchedUser => {
//            if (self.users.every(user => user.email !== fetchedUser[1].email)) {
//              self.users.push(fetchedUser[1])
//            }
//          })
//        }).catch(
//          error => {
//            console.error(error)
//          })
        this.resource.getData({node: this.node}, {}).then(response => {
          // response.json() returns a promise and gets the body as a json parsed body
          return response.json()
        }).then(jsonData => {
          console.log(jsonData)
          const self = this
          Object.entries(jsonData).forEach(fetchedUser => {
            if (self.users.every(user => user.email !== fetchedUser[1].email)) {
              self.users.push(fetchedUser[1])
            }
          })
        }).catch(
          error => {
            console.error(error)
          })
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'}
      }
      this.resource = this.$resource('{node}.json', {}, customActions)
    }
  }
</script>

<style>
</style>
