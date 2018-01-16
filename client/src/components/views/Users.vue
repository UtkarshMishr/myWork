<template>
  <div>
    <h1 class="text-center">Settings</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <form>
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" class="form-control" name="email" placeholder="Email">
              </div>
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="password" type="password" class="form-control" name="password" placeholder="Password">
              </div>
              <div class="input-group">
                <span class="input-group-addon">Text</span>
                <input id="msg" type="text" class="form-control" name="msg" placeholder="Additional Info">
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import datepicker from 'vue-date-picker'
  require('moment')
  export default {
    name: 'Settings',
    components: { datepicker },
    computed: {
      datetime () {
        return new Date()
      }
    },
    methods: {
      clearInput (vueModel) {
        vueModel = ''
      }
    }
  }
</script>

<style>
  .datetime-picker input {
    height: 4em !important;
  }
</style>
