/* eslint-disable */

<template>
  <!-- Main DIV -->
  <div>
    <!-- Parent User FORM DIV -->

    <b-container @load="" fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <!-- User table -->
      <b-container fluid>
        <!-- User Interface controls -->
        <b-row>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Filter" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search"/>
                <b-input-group-button>
                  <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                </b-input-group-button>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Sort" class="mb-0">
              <b-input-group>
                <b-form-select v-model="sortBy" :options="sortOptions">
                  <option slot="first" :value="null">-- none --</option>
                </b-form-select>
                <b-input-group-button>
                  <b-form-select :disabled="!sortBy" v-model="sortDesc">
                    <option :value="false">Asc</option>
                    <option :value="true">Desc</option>
                  </b-form-select>
                </b-input-group-button>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0"/>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
              <b-form-select :options="pageOptions" v-model="perPage"/>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table show-empty
                 stacked="md"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 @filtered="onFiltered"
        >
          <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
          <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
          <template slot="actions" slot-scope="row">
            <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
            <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
              Info modal
            </b-button>
            <b-button size="sm" @click.stop="row.toggleDetails">
              {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            </b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <!-- Info modal -->
        <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
          <pre>{{ modalInfo.content }}</pre>
        </b-modal>

      </b-container>
      <!-- ./ User table -->
    </b-container>
    <!-- ./Parent User FORM DIV -->
  </div>
  <!-- ./Main DIV -->
</template>

<script>
  import SearchUserApi from '@/api/searchUserAPI'

  export default {
    data() {
      return {
        // Table item
        items: null,
        fields: [
          {key: 'user_id', label: 'User ID', sortable: true},
          {key: 'username', label: 'Username', sortable: true, 'class': 'text-center'},
          {key: 'user_emp_id', label: 'Employee ID', sortable: true},
          {key: 'full_name', label: 'Full Name', sortable: true},
          {key: 'cost_center', label: 'Cost Center', sortable: true}
        ],
        currentPage: 1,
        perPage: 10,
        totalRows: null,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        filter: null,
        modalInfo: {title: '', content: ''}
      }  // return end
    }
    ,
    methods: {

      searchAll: async function () {
        try {
          const response = await SearchUserApi.searchUsers()
          this.items = JSON.parse(JSON.stringify(response.data))
          this.totalRows = this.items.length
        } catch (err) {
          console.log(err.response.data.error)
        }
      }
      ,
      // This section is for table
      info (item, index, button) {
        this.modalInfo.title = `Row index: ${index}`
        this.modalInfo.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal () {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
      },
      onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }, //  methods end
    // Before Mount is used to execute this methond on load event
    beforeMount(){
      this.searchAll()
      console.log('Hi')
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {text: f.label, value: f.key}
          })
      }
    } // computed end
  } // Export default end

</script>

<style>
  .datetime-picker input {
    height: 4em !important
  }

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
