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

  var userData
  var items1 = [{"user_id":1240,"username":"Utkarsh_m","user_emp_id":"cq183884","full_name":"Utkarsh Mishra","email_address":"utkarsj.mishra@gmail.com","password":"324234fsdf3c","business_unit":"JHASS","division":"JHAS","role":"MANGER","cost_center":"3444","region":"USA","manager_full_name":"Matt Welch","manager_emp_id":"38859","notes":"Hello Notes","last_logon":"2018-01-22T04:07:57.000Z","disabled":"","createdAt":"2018-01-22T04:07:57.000Z","updatedAt":"2018-01-22T04:07:57.000Z"},{"user_id":1243,"username":"","user_emp_id":"cq23133","full_name":"Utkarsh Mishra","email_address":"utkarsj.mishra@gmail.com","password":"werwervdf","business_unit":"JHASS","division":"JHAS","role":"MANGER","cost_center":"3444","region":"USA","manager_full_name":"Matt Welch","manager_emp_id":"38859","notes":"Hello Notes","last_logon":"2018-01-22T04:46:16.000Z","disabled":"","createdAt":"2018-01-22T04:46:16.000Z","updatedAt":"2018-01-22T04:46:16.000Z"},{"user_id":1244,"username":"23123","user_emp_id":"cq23133","full_name":"Utkarsh Mishra","email_address":"utkarsj.mishra@gmail.com","password":"werwervdf","business_unit":"JHASS","division":"JHAS","role":"MANGER","cost_center":"3444","region":"USA","manager_full_name":"Matt Welch","manager_emp_id":"38859","notes":"Hello Notes","last_logon":"2018-01-22T04:47:24.000Z","disabled":"","createdAt":"2018-01-22T04:47:24.000Z","updatedAt":"2018-01-22T04:47:24.000Z"},{"user_id":1245,"username":"Utkarsh.mishra","user_emp_id":"21132","full_name":"Utkarsh Mishra 1","email_address":"123@gmail.com","password":"3ewewerwe","business_unit":"IRM","division":"DIV2","role":"MANAGER","cost_center":"1233","region":"REG2","manager_full_name":"qweq","manager_emp_id":"qwe","notes":"qweqweeqw\nhfghfgh","last_logon":"2018-01-22T04:56:30.000Z","disabled":"","createdAt":"2018-01-22T04:56:30.000Z","updatedAt":"2018-01-22T04:56:30.000Z"},{"user_id":1246,"username":"User 1234","user_emp_id":"k989458","full_name":"sdkjkjh jkldjsflkjsl","email_address":"lksjlkl@gmail.com","password":"jkkljlsdf","business_unit":"IRM","division":"DIV3","role":"SUPER USER","cost_center":"213123","region":"REG2","manager_full_name":"123","manager_emp_id":"123","notes":"123123\n\ngdfgdfg","last_logon":"2018-01-22T04:57:44.000Z","disabled":"true","createdAt":"2018-01-22T04:57:44.000Z","updatedAt":"2018-01-22T04:57:44.000Z"},{"user_id":1247,"username":"kjhasdkk","user_emp_id":"0982348","full_name":"lksjfjldsflj","email_address":"123@gmail.com","password":"efsdfsdf","business_unit":"IRM","division":"DIV1","role":"USER","cost_center":"123","region":"REG2","manager_full_name":"213","manager_emp_id":"123","notes":"123123\nhjgghj","last_logon":"2018-01-22T05:25:35.000Z","disabled":"","createdAt":"2018-01-22T05:25:35.000Z","updatedAt":"2018-01-22T05:25:35.000Z"},{"user_id":1248,"username":"Utkarsh.mishra","user_emp_id":"778448","full_name":"Utkarsh Mishra 1","email_address":"123@gmail.com","password":"awdeweqwe","business_unit":"Insurance","division":"DIV4","role":"MANAGER","cost_center":"1233","region":"REG3","manager_full_name":"M","manager_emp_id":"Welch","notes":"THis i additional notes","last_logon":"2018-01-22T18:07:02.000Z","disabled":"","createdAt":"2018-01-22T18:07:02.000Z","updatedAt":"2018-01-22T18:07:02.000Z"},{"user_id":1249,"username":"Utkarsh.mishra","user_emp_id":"tyuu","full_name":"adsadasd","email_address":"asdasd","password":"asdasd","business_unit":"Insurance","division":"DIV3","role":"SUPER USER","cost_center":"12313","region":"REG3","manager_full_name":"werwe","manager_emp_id":"wer","notes":"","last_logon":"2018-01-22T18:10:46.000Z","disabled":"","createdAt":"2018-01-22T18:10:46.000Z","updatedAt":"2018-01-22T18:10:46.000Z"},{"user_id":1250,"username":"Utkarsh.mishra","user_emp_id":"tyuu","full_name":"adsadasd","email_address":"asdasd@gmail.com","password":"asdasd","business_unit":"Insurance","division":"DIV3","role":"SUPER USER","cost_center":"12313","region":"REG3","manager_full_name":"werwe","manager_emp_id":"wer","notes":"","last_logon":"2018-01-22T18:10:52.000Z","disabled":"","createdAt":"2018-01-22T18:10:52.000Z","updatedAt":"2018-01-22T18:10:52.000Z"},{"user_id":1251,"username":"asdasd","user_emp_id":"233","full_name":"weqweqe","email_address":"123@gmail.com","password":"123123","business_unit":"Insurance","division":"DIV1","role":"MANAGER","cost_center":"1233","region":"REG4","manager_full_name":"123","manager_emp_id":"123","notes":"123123","last_logon":"2018-01-22T18:16:18.000Z","disabled":"","createdAt":"2018-01-22T18:16:18.000Z","updatedAt":"2018-01-22T18:16:18.000Z"},{"user_id":1252,"username":"wqeqweqwe","user_emp_id":"1233123","full_name":"sdfbsdfsdf","email_address":"123@gmail.com","password":"sdfsdf","business_unit":"RPS","division":"DIV3","role":"ADMINISTRATOR","cost_center":"s2333","region":"REG4","manager_full_name":"sdf","manager_emp_id":"sdf","notes":"sdf","last_logon":"2018-01-22T18:20:31.000Z","disabled":"","createdAt":"2018-01-22T18:20:31.000Z","updatedAt":"2018-01-22T18:20:31.000Z"}]

  export default {
    data() {
      return {
        // Table item
        items: null,
        fields: [
          {key: 'user_id', label: 'User ID', sortable: true},
          {key: 'username', label: 'Username', sortable: true, 'class': 'text-center'},
          {key: 'user_emp_id', label: 'Employee ID', sortable: true},
          {key: 'full_name', label: 'Full Name'}
        ],
        currentPage: 1,
        perPage: 10,
        totalRows: items.length,
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
          const response = await
            SearchUserApi.searchUsers()
           return JSON.stringify(response.data)
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
      this.searchAll().then(function (result) {
          //console.log(result)
        console.log('Assigning to array')
        items = JSON.parse(result)
        console.log(items)
      })
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
