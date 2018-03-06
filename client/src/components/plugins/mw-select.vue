<template>
  <div :class="typeaheadState">
    <div class="typeahead__toggle" ref="toggle" @mousedown.prevent="toggle">
      <input type="text1"
             class="typeahead typeahead__search"
             ref="search"
             v-model="search"
             @focus="onFocus"
             @blur="onBlur"
             @keydown.esc="onEscape"
             @keydown.down="onDownKey"
             @keydown.up="onUpKey"
             @keydown.enter="onEnterKey"
             :placeholder="placeholder"
             title="Search Item"
             data-toggle="tooltip"
      >
      <span class="typeahead__text" ref="text">{{displayText}}</span>
    </div>
    <span class="icon" style="float: right;">
          <button type="button"
                  title="Clear Selection"
                  class="clearText"
                  data-toggle="tooltip"
                  @click.prevent="clearText"><span aria-hidden="true">×</span>
          </button>
        </span>
    <ul class="typeahead__list" ref="list" v-if="open">
      <li class="typeahead__item"
          v-for="(option, index) in filteredOptions"
          :key="index">
        <a class="typeahead__link"
           @mousedown.prevent="select(option)"
           @mouseover.prevent="mouseOver(index)"
           :class="[selectIndex === index ? 'typeahead__active':'']"
        >
          {{option.name}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  /* eslint-disable */
  export default {
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
      },
      rowData: {
        type: String,
        default: null
      },
      uniqueId: {
        type:  Number,
        default: null
      },
    },
    data() {
      return {
        placeholder: 'Search ..',
        open: false,
        selectIndex: 0,
        displayText: '',
        search: ''
      }
    },
    computed: {
      typeaheadState() {
        return this.open ? 'typeahead typeahead__open' : 'typeahead'
      },
      filteredOptions() {
        const exp = new RegExp(this.search, 'i')
        return this.options.filter((option) => {
          return (exp.test(option.id) || exp.test(option.name))
        })
      }
    },
    methods: {
      onDownKey() {
        if (this.filteredOptions.length - 1 > this.selectIndex) {
          this.selectIndex++
          // scroll when overflow
          if (this.selectIndex > 2) {
            this.$refs.list.scrollTop += (20 + this.selectIndex)
          }
        }
      },
      onUpKey() {
        if (this.selectIndex > 0) {
          this.selectIndex--
          // scroll when overflow
          if (this.selectIndex > 0) {
            this.$refs.list.scrollTop -= (20 + this.selectIndex)
          }
        }
      },
      onEnterKey() {
        const option = this.filteredOptions[this.selectIndex]
        if (option) {
          this.select(option)
          this.placeholder = ''
        }
      },
      select(option) {
        this.displayText = option.name
        this.$emit('input', (option.id))
        this.$refs.search.blur()
      },
      toggle(e) {
        if (e.target === this.$refs.toggle ||
          e.target === this.$refs.search ||
          e.target === this.$refs.text) {
          if (this.open) {
            if (e.target !== this.$refs.search &&
              e.target !== this.$refs.text) {
              this.$refs.search.blur()
            }
          } else {
            this.$refs.search.focus()
          }
        }
      },
      onFocus() {
        this.open = true
      },
      onBlur() {
        this.search = ''
        this.selectIndex = 0
        this.$refs.list.scrollTop = 0
        this.open = false
      },
      onEscape() {
        this.$refs.search.blur()
      }
      , mouseOver: function (index) {
        //this.displayText = option.name
        this.selectIndex = index
        this.placeholder = ''
      },
      clearText: function () {
        this.displayText = null
        this.selectIndex = ''
        this.placeholder = 'Search ..'
        this.$emit('input', (null))
      }
    }
  }

</script>
<style type="text/css">

  .typeahead {
    min-height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;
    position: relative;
    max-width: 100%;
    padding: 2px 10px 0px 10px;
    margin: 0px 0px 0px 0px;
    display: block;
  }

  .typeahead__open {
    border: 1px solid #41B883;
  }

  .typeahead__open .typeahead__text {
    color: #999;
    opacity: 0.2;
  }

  .typeahead__toggle {
    position: relative;
    width: 100%;
  }

  .typeahead__search {
    height: 30px;
    width: 100%;
    display: block;
    cursor: text;
    background: transparent;
    border: none;
    outline: none;
    padding: 0px 10px 5px 0px;
    position: absolute;
    font-weight: 500;
  }

  .typeahead__text {
    display: inline-block;
  }

  .typeahead__list {
    margin: 3px 0px 0px -10px;
    padding: 0px;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    display: block;
    background: white;
    width: 100%;
    box-shadow: 2px 2px 2px 2px #cfcfd0;
    z-index: 1;
  }

  .typeahead__item {
    display: block;
    border-top: 1px solid #f4f4f4;
  }

  .typeahead__link {
    display: block;
    padding: 5px 10px 5px 10px;
    line-height: 1em;
    cursor: pointer;
    font-family: Roboto;
  }

  .typeahead__active {
    background: linear-gradient(#3232ff, #125acd);
    color: #ffffff !important;
    font-family: Roboto;
  }

  .clearText {
    position: absolute;
    font-size: 23px;
    top: -10px;
    right: 0px;
    font-weight: 700;
    color: rgba(60, 60, 60, .5);
    border: 1px;
    background: transparent;
    cursor: pointer;
  }

</style>
