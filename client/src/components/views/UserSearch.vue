/* eslint-disable */

<template>
  <!-- Main DIV -->
  <div>
    <!-- Parent User FORM DIV -->

    <b-container @load="" fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border: 1px solid #125acd;border-top-width: 2px;background-color: #ffffff;">
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
                 responsive
                 hover
                 striped
                 small
                 thStyle=""
                 thead-class="bg-green border-bottom-2"
        >
          <template slot="index" slot-scope="data">
            {{data.index + 1}}
          </template>
          <template slot="username" slot-scope="row">
            <b-link v-b-modal.modallg @click="callEdit(row.item.user_id)">
              {{row.item.username.toLowerCase()}}
            </b-link>
          </template>
        </b-table>
      </b-container>
      <!-- ./ User table -->
    </b-container>
    <!-- ./Parent User FORM DIV -->
    <b-modal v-model="showModal" id="modallg" size="lg" centered title="Edit user" hide-footer hide-header>
      <!-- Edit Create FORM -->
      <div>
        <b-card bg-variant="primary" text-variant="white">
          <div class="text-center h5 text-bold" style="font-family: Roboto">
            <span class="fa fa-user">&nbsp;&nbsp;Edit User</span></div>
          <b-form v-model="userFrom"
                  class="form-control"
                  @submit="updateUser"
                  @reset="discardUpdate"
                  v-if="show">
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
                                  required
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
                                  required
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
                                    required
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
                                      required
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
                                      required
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
                    <b-form-checkbox value="true" unchecked-value="">Disabled</b-form-checkbox>
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
                                   required
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
                                  type="number"
                                  required
                                  v-model="form.costcenter">
                    </b-form-input>
                  </b-form-group>
                  <!-- ./Cost Center -->
                </b-col>
                <b-col>
                  <!-- Region -->
                  <b-form-group id="label9"
                                label="Region:"
                                class="font-weight-bold required">
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
              <b-button type="submit"
                        class="btn btn-success center-block">Save
              </b-button>
              <b-button type="reset" variant="btn btn-warning center-block">Discard</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
      <!-- ./User Edit Form -->
    </b-modal>
  </div>
  <!-- ./Main DIV -->
</template>

<script>
  import SearchUserApi from '@/api/UserSearchAPI'
  import getUserbyID from '@/api/UserGetUserByIdAPI'
  import updateUserbyID from '@/api/UserUpdateByIdAPI'

  export default {
    data() {
      return {
        // This user id is for Form Edit, when someone click on Table Row, pass the ID for Edit Save
        selectedUserID: null,
        show: true,
        // Table item
        items: null,
        useritems: null,
        fields: [
          'index',
          {key: 'username', label: 'Username', sortable: true},
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
        modalInfo: {title: '', content: ''},
        //User Edit Form Details
        form: {
          username: '',
          employeeID: '',
          fullname: '',
          email: '',
          password: '',
          cpassword: '',
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
        userFrom: true,
        showModal: false
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
      },
      // This method calls the Update USER Form
      async callEdit(p_user_id) {
        this.selectedUserID = p_user_id
        this.showModal = true
        this.userFrom = true
        try {
          const response_1 = await getUserbyID.getUserbyID(p_user_id)
          this.useritems = JSON.parse(JSON.stringify(response_1.data))
          this.form.username = this.useritems.username
          this.form.employeeID = this.useritems.user_emp_id
          this.form.fullname = this.useritems.full_name
          this.form.email = this.useritems.email_address
          this.form.password = this.useritems.password
          this.form.cpassword = this.useritems.password
          this.form.costcenter = this.useritems.cost_center
          this.form.managerFullName = this.useritems.manager_full_name
          this.form.manageremployeeID = this.useritems.manager_emp_id
          this.form.notes = this.useritems.notes
          this.form.businessUnit = this.useritems.business_unit
          this.form.division = this.useritems.division
          this.form.role = this.useritems.role
          this.form.region = this.useritems.region
          this.form.checked = (this.useritems.disabled == "") ? "" : "true"
        } catch (err) {
          console.log('Error')
        }
      },
      // This method updates the Updated Form changes
      async updateUser() {
        try {
          const response = await
            updateUserbyID.updateUserbyID(this.selectedUserID,
              {
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
          //this.showMessage();
          this.showModal = false;

        } catch (err) {
          console.log(err.response.data.error)
          this.error = err.response.data.error
          this.dismissCountDown = this.dismissSecs
          this.serverResponse = err.response.data.error
        }
      },
      // This method is to discad the User Update Form changes
      discardUpdate() {
        this.showModal = false
        this.userFrom = false
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }, //  methods end
    // Before Mount is used to execute this methond on load event
    beforeMount() {
      this.searchAll()
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

  function calculateDisable(list) {
    if (list.length == 0) {
      return ''
    } else {
      return 'true'
    }
  }

</script>

<style>
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
