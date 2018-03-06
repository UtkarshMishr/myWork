<template>
  <div>
    <b-container style="max-width: 400px">
      <b-form @submit="checkCreds">
        <div class="text-center">
          <img src="/static/img/myWork.png" style="max-width: 15em; max-height: 15em"
               class="mt-5">
          <h4 class="text-center" style="color: #d0e9c6">Please sign in</h4>
          <b-input-group class="mb-1 pt-0 pb-0">
          <span class="input-group-addon">
            <i class="fa fa-user fa-2x" style="color: #2D8CEB"></i></span>
            <b-form-input placeholder="Username"
                          required
                          type="text"
                          autofocus
                          v-model="username"
            ></b-form-input>
          </b-input-group>
          <b-input-group class="mb-1 pt-0 pb-0">
          <span class="input-group-addon">
            <i class="fa fa-lock fa-2x" style="color: #2D8CEB"></i></span>
            <b-form-input placeholder="Password"
                          required
                          type="password"
                          class="pt-0 pb-0"
                          v-model="password"
            ></b-form-input>
          </b-input-group>
        </div>
        <div class="text-center">
          <b-button class="lg bg-blue-gradient mt-2"
                    type="submit"
                    ><i class="fa fa-sign-in"></i>&nbsp;&nbsp;Sign in</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- errors
    <div v-if=response class="text-red"><p>{{response}}</p></div>
    -->
  </div>
</template>

<script>
  /* eslint-disable */
  import userAuth from '@/api/AuthenticationAPI'

  export default {
    name: 'Login',
    data () {
      return {
        section: 'Login',
        loading: '',
        username: '',
        password: '',
        response: ''
      }
    },
    methods: {
      checkCreds: async function () {
        event.preventDefault()
        const response = await userAuth.authentication()
        console.log(JSON.stringify(response.data))
        if (response.data == 'Success'){
          this.$router.push('/')
//          alert(JSON.stringify(response.data))
        }

         // if (response == 'Success')
          //  this.$route.router.go('/user');
        // const {username, password} = this
        // this.toggleLoading()
        // this.resetResponse()
        // this.$store.commit('TOGGLE_LOADING')
        // /* Making API call to authenticate a user */
        // api.request('post', '/login', {username, password})
        //   .then(response => {
        //     this.toggleLoading()
        //     var data = response.data
        //     /* Checking if error object was returned from the server */
        //     if (data.error) {
        //       var errorName = data.error.name
        //       if (errorName) {
        //         this.response = errorName === 'InvalidCredentialsError'
        //           ? 'Username/Password incorrect. Please try again.'
        //           : errorName
        //       } else {
        //         this.response = data.error
        //       }
        //       return
        //     }
        //     /* Setting user in the state and caching record to the localStorage */
        //     if (data.user) {
        //       var token = 'Bearer ' + data.token
        //       this.$store.commit('SET_USER', data.user)
        //       this.$store.commit('SET_TOKEN', token)
        //       if (window.localStorage) {
        //         window.localStorage.setItem('user', JSON.stringify(data.user))
        //         window.localStorage.setItem('token', token)
        //       }
        //       this.$router.push(data.redirect ? data.redirect : '/')
        //     }
        //   })
        //   .catch(error => {
        //     this.$store.commit('TOGGLE_LOADING')
        //     console.log(error)
        //     this.response = 'Server appears to be offline'
        //     this.toggleLoading()
        //   })
      },
      toggleLoading () {
        this.loading = (this.loading === '') ? 'loading' : ''
      },
      resetResponse () {
        this.response = ''
      }
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
    background-color: #282B30 !important;
  }

</style>
