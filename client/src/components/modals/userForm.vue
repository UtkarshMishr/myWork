<template>
  <div>
    <b-card bg-variant="primary" text-variant="white">
      <div class="text-center h5 text-bold" style="font-family: Roboto">
        <span class="fa fa-user">&nbsp;&nbsp;{{ myMessage }}</span></div>
    </b-card>

    <div>
      <span>{{ myMessage }}</span>
      <button v-on:click="counter += 1">{{ counter }}</button>
    </div>
  </div>
</template>

<script>
  var data1 = {counter: 0}
  export default {
    props: ['myMessage'],
    data() {
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>
  input[type="text"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="password"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="email"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="number"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="email"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .mt-alerts {
    position: fixed;
    z-index: 999;
  }

  .required legend:before {
    content: "*";
    color: red;
    font-size: large;
    padding-right: 5px
  }

  .required label:before {
    content: "*";
    color: red;
    font-size: large;
    padding-right: 5px
  }
</style>
