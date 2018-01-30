/*
eslint-disable
*/
<template>
  <!-- Main DIV -->
  <div>
    <!-- Parent User FORM DIV -->
    <b-container fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <div>
        <!-- Show Alert on Success (pending has to do -->
        <b-container fluid>
          <b-alert :show="dismissCountDown"
                   dismissible
                   variant="success"
                   class="mt-alerts"
                   @dismissed="dismissCountdown=0"
                   @dismiss-count-down="countDownChanged"
                   style="width: 400px">
            <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
            <h4 class="alert-heading fa fa-check">&nbsp;&nbsp;New user created Successfully!</h4>
            <p>
              <!-- New User {{form.fullname}} create successfully -->
              yes
            </p>
            <hr>
            <p>
              Server Response code: {{serverResponse}}
            </p>
          </b-alert>
        </b-container>
        <!-- ./Show Alert on Success -->
        <b-card-group deck class="mt-2 mb-3 mr-3 ml-1">
          <b-card border-variant="primary"
                  header="Create new myWork User"
                  header-bg-variant="primary"
                  header-text-variant="white"
                  class="h5"
                  align="center">
            <p class="h6 pt-2 text-muted"> Add new myWork user</p>
            <b-button v-b-modal.modallg class="bg-purple">Create Users</b-button>
            <p></p>
          </b-card>
          <b-card border-variant="secondary"
                  header="Secondary"
                  header-border-variant="secondary"
                  align="center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </b-card>
        </b-card-group>
        <b-modal id="modallg" size="lg" centered title="Create new user" hide-footer="true" hide-header="true">
          <!-- User Create FORM -->
          <div>
            <b-card bg-variant="primary" text-variant="white">
              <div class="text-center h5 text-bold" style="font-family: Roboto">
                <span class="fa fa-user">&nbsp;&nbsp;Create User</span></div>
              <b-form v-model="valid" ref="uform" class="form-control">
                <b-container>
                  <b-row>
                    <b-col>
                      <!-- Username -->
                      <b-form-group id="label1"
                                    label="Username:"
                                    class="font-weight-bold required">
                        <b-form-input id="userfield1"
                                      type="text"
                                      v-model="form.username"
                                      @change="myChange"
                                      required
                                      placeholder="Enter name">
                        </b-form-input>
                      </b-form-group>
                      <!-- ./Username -->
                    </b-col>
                    <b-col>
                      <!-- Employee ID -->
                      <b-form-group id="label2"
                                    label="Employee/IQN ID:"
                                    class="font-weight-bold required">
                        <b-form-input id="userfield2"
                                      type="text"
                                      v-model="form.employeeID"
                                      placeholder="Enter Employee or IQN ID">
                        </b-form-input>
                      </b-form-group>
                      <!-- ./Employee ID -->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group id="lable3"
                                    label="FullName:"
                                    class="font-weight-bold required">
                        <b-form-input id="userfield3"
                                      type="text"
                                      v-model="form.fullname"
                                      required>
                        </b-form-input>
                        <!-- ./FullName -->
                        <!-- Email Address -->
                        <b-form-group id="label4"
                                      label="Email address:"
                                      class="font-weight-bold required">
                          <b-form-input id="userfield4"
                                        type="email"
                                        v-model="form.email"
                                        placeholder="Enter email">
                          </b-form-input>
                        </b-form-group>
                        <!-- ./Email Address -->
                      </b-form-group>

                    </b-col>

                    <!-- Password Details -->
                    <b-col>
                      <b-card style="background:#d7dae0">
                        <b-form-group class="mb-0 mr-3 text-navy">
                          <b-form-group label="Password:"
                                        label-class="text-sm-right font-weight-bold pl-2"
                                        label-for="nestedStreet"
                                        class="required">
                            <b-form-input id="password1"
                                          class="ml-2"
                                          type="password"
                                          v-model="form.password">
                            </b-form-input>
                          </b-form-group>
                          <b-form-group label="Confirm Password:"
                                        label-class="text-sm-right font-weight-bold pl-2"
                                        label-for="nestedStreet"
                                        class="required">
                            <b-form-input id="password2"
                                          class="ml-2"
                                          type="password"
                                          v-model="form.cpassword">
                            </b-form-input>
                          </b-form-group>
                        </b-form-group>
                      </b-card>
                    </b-col>
                    <!-- ./Password Details -->
                  </b-row>
                  <b-row>
                    <b-col>
                      <!-- Business Unit -->
                      <b-form-group id="label5"
                                    label="Business Unit:"
                                    class="font-weight-bold">
                        <b-form-select id="userfield5"
                                       :options="BU"
                                       v-model="form.businessUnit">
                        </b-form-select>
                      </b-form-group>
                      <!-- ./Business Unit -->
                    </b-col>
                    <b-col>
                      <!-- Disabled -->
                      <b-form-checkbox-group v-model="form.checked"
                                             id="disabled"
                                             class="mt-4 pl-4 pr-5 pt-2 font-weight-bold">
                        <b-form-checkbox value="true">Disabled</b-form-checkbox>
                      </b-form-checkbox-group>
                      <!-- ./Disabled -->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <!-- Division -->
                      <b-form-group id="label6"
                                    label="Division:"
                                    class="font-weight-bold">
                        <b-form-select id="userfield6"
                                       :options="DIVISION"
                                       v-model="form.division">
                        </b-form-select>
                      </b-form-group>
                      <!-- ./Divsion -->
                    </b-col>
                    <b-col>
                      <!-- Role -->
                      <b-form-group id="label7"
                                    label="Role:"
                                    class="font-weight-bold required">
                        <b-form-select id="userfield7"
                                       :options="ROLE"
                                       v-model="form.role">
                        </b-form-select>
                      </b-form-group>
                      <!-- ./Role -->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <!-- Cost Center -->
                      <b-form-group id="lable8"
                                    label="Cost Center:"
                                    class="font-weight-bold required">
                        <b-form-input id="userfield8"
                                      type="text"
                                      v-model="form.costcenter">
                        </b-form-input>
                      </b-form-group>
                      <!-- ./Cost Center -->
                    </b-col>
                    <b-col>
                      <!-- Region -->
                      <b-form-group id="label9"
                                    label="Region:"
                                    class="font-weight-bold">
                        <b-form-select id="userfield9"
                                       :options="REGION"
                                       required
                                       v-model="form.region">
                        </b-form-select>
                      </b-form-group>
                      <!-- ./Region -->
                    </b-col>
                  </b-row>
                  <b-card class="card-outline-success">
                    <h5 align="center" class="card-header pt-1 pb-1">Additional Information</h5>
                    <b-row class="pl-2 pr-2">
                      <b-col>
                        <!-- Manager Full Name -->
                        <b-form-group id="label10"
                                      label="Manager Full Name:"
                                      class="font-weight-bold">
                          <b-form-input id="userfield10"
                                        type="text"
                                        v-model="form.managerFullName">
                          </b-form-input>
                        </b-form-group>
                        <!-- ./Manager Full Name -->
                      </b-col>
                      <b-col>
                        <!-- Manager Employee ID -->
                        <b-form-group id="label11"
                                      label="Manager Employee ID:"
                                      class="font-weight-bold">
                          <b-form-input id="userfield11"
                                        type="text"
                                        v-model="form.manageremployeeID">
                          </b-form-input>
                        </b-form-group>
                        <!-- ./Manager Employee ID -->
                      </b-col>
                    </b-row>
                    <b-row class="pl-2 pr-2">
                      <b-col>
                        <b-form-group id="label12"
                                      label="Notes"
                                      class="font-weight-bold">
                          <b-form-textarea id="userfield12"
                                           state="invalid"
                                           v-model="form.notes"
                                           placeholder="Additional Notes"
                                           :rows="3"></b-form-textarea>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-container>
                <div class="text-center mt-3">
                  <b-button :disabled="btnSubmitValue"
                            @click="register" type="submit"
                            class="btn btn-success center-block">Submit
                  </b-button>
                  <b-button @click="onReset" type="reset" variant="btn btn-warning center-block">Reset</b-button>
                </div>
              </b-form>
            </b-card>
          </div>
        </b-modal>
      </div>
    </b-container>

    <!-- ./User Create FORM -->
    <b-container fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
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
  import CreateUserApi from '@/api/createUserAPI'

  const items = [
    {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
    {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
    {
      isActive: false,
      age: 9,
      name: {first: 'Mini', last: 'Navarro'},
      _rowVariant: 'success'
    },
    {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
    {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
    {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
    {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
    {
      isActive: true,
      age: 87,
      name: {first: 'Larsen', last: 'Shaw'},
      _cellVariants: {age: 'danger', isActive: 'warning'}
    },
    {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
    {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
    {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
    {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}}
  ]

  export default {
    data() {
      return {
        valid: true,
        dismissSecs: 5,
        dismissCountDown: 0,
        serverResponse: null,
        btnSubmitValue: true,
        form: {
          username: '',
          employeeID: '',
          fullname: '',
          email: '',
          password: '',
          costcenter: '',
          managerFullName: '',
          manageremployeeID: '',
          notes: '',
          businessUnit: null,
          division: null,
          role: null,
          region: null,
          checked: []
        },
        BU: [
          {text: 'Select One', value: null},
          'IRM', 'JHAS', 'Insurance', 'TRS', 'RPS', 'ANNUITIES'
        ],
        DIVISION: [
          {text: 'Select One', value: null},
          'DIV1', 'DIV2', 'DIV3', 'DIV4', 'DIV5', 'DIV5'
        ],
        ROLE: [
          {text: 'Select One', value: null},
          'USER', 'MANAGER', 'SUPER USER', 'ADMINISTRATOR'
        ],
        REGION: [
          {text: 'Select One', value: null},
          'REG1', 'REG2', 'REG3', 'REG4', 'REG5', 'REG5'
        ],
        // Table item
        fields: [
          {
            // A column that needs custom formatting,
            // calling formatter 'fullName' in this app
            key: 'name',
            label: 'Full Name',
            formatter: 'fullName'
          },
          // A regular column
          'age',
          {
            // A regular column with custom formatter
            key: 'sex',
            formatter: (value) => {
              return value.charAt(0).toUpperCase()
            }
          },
          {
            // A virtual column with custom formatter
            key: 'birthYear',
            label: 'Calculated Birth Year',
            formatter: (value, key, item) => {
              return (new Date()).getFullYear() - item.age
            }
          }
        ],
        items: items,
        fields: [
          {key: 'name', label: 'Person Full name', sortable: true},
          {key: 'age', label: 'Person age', sortable: true, 'class': 'text-center'},
          {key: 'isActive', label: 'is Active'},
          {key: 'actions', label: 'Actions'}
        ],
        currentPage: 1,
        perPage: 5,
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
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
      ,
      myChange() {
        if (this.form.username.length > 0)
          this.btnSubmitValue = false
        else this.btnSubmitValue = true
      }
      ,
      async register() {
        try {
          const response = await
            CreateUserApi.register({
              "username": this.form.username,
              "user_emp_id": this.form.employeeID,
              "full_name": this.form.fullname,
              "email_address": this.form.email,
              "password": this.form.password,
              "business_unit": this.form.businessUnit,
              "division": this.form.division,
              "role": this.form.role,
              "cost_center": this.form.costcenter,
              "region": this.form.region,
              "manager_full_name": this.form.managerFullName,
              "manager_emp_id": this.form.manageremployeeID,
              "notes": this.form.notes,
              "disabled": calculateDisable(this.form.checked)
            })

          // this.dismissCountDown = this.dismissSecs
          this.dismissCountDown = 10
          this.serverResponse = response
        } catch (err) {
          console.log(err.response.data.error)
          this.error = err.response.data.error
          this.dismissCountDown = this.dismissSecs
          this.serverResponse = err.response.data.error
        }
      }
      ,
      onReset() {
        this.$refs.uform.reset()
      },
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

  function calculateDisable(list) {
    if (list.length == 0) {
      return ''
    } else {
      return 'true'
    }

  }
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
