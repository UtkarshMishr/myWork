<template>
  <div>
    <select  @input="event => { $emit('input', event.target.value) }"
             v-model="selectedOption">
      <option value=""></option>
      <option v-for="(option, index) in options" :key="index" :value="option.id+'#@#'+option.name"
      >{{ option.name }}</option>
    </select>
  </div>
</template>
<script>
  /* eslint-disable */
  export default {
    name: "mw-dropdown",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
        type: [String, Number],
        default: null
      }
    },
    data () {
      return {
        selectedOption: null
      }
    },
    /*methods: {
      select(id) {
        this.$emit('input',id)
      }
    } */
    mounted () {
      this.selectedOption = this.value
    },

    watch: {
      value: function (newValue) {
        this.selectedOption = newValue
      }
    }
  }
</script>

<style scoped>
  select {
    min-height: 30px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 0px 5px 0px 5px;
    margin: 0px 0px 0px 0px;
    display: block;
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
    font-size: 14px !important;
    font-weight: 500;
  }

  select:hover {
    box-shadow: 2px 2px 2px 2px #cfcfd0;
  }


  option{
    font-size: 14px;
    font-weight: 500;
  }

</style>
