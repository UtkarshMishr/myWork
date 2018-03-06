<template>
  <div>
    <section>
      <div class="ml-2 mr-2 mt-1">
        <div class="box box-warning">
          <div class="box-header p-1">
            <div class="bg-gray-light p-1"
                 style="background: #d8eafc; border-bottom: 2px solid #6494c4; font-weight: 500">Search Users
            </div>
          </div>
          <!-- Form Start -->
          <form class="form-horizontal">
            <div class="container-fluid row">
              <div class="col-lg-2 col-sm-2 pl-2 pr-0 mr-0">
                <div class="media">
                  <div class="media-left">
                    <img src="../../../static/img/custom/userSearch.png"
                         alt="Create User" class="media-object"
                         style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                  </div>
                </div>
              </div>

              <div class="col-lg-10 col-sm-10 ml-0 pl-0">
                <!-- First Row -->
                <div class="row">
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Name (contains):</label>
                      <div class="col-9">
                        <input type="text"
                               class="form-control"
                               placeholder=" Username or Full Name"
                               v-model="form.name">
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">User ID:</label>
                      <div class="col-9">
                        <input type="number"
                               class="form-control"
                               v-model="form.user_id">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ./First Row -->
                <!-- Second Row -->
                <div class="row">
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Employee ID:</label>
                      <div class="col-9">
                        <input type="text"
                               class="form-control"
                               placeholder=" Employee ID (contains)"
                               v-model="form.employeeID">
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Cost Center:</label>
                      <div class="col-9 csFontText">
                        <input type="number"
                               class="form-control"
                               v-model="form.costcenter">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ./Second Row -->
                <!-- Third seperate row -->
                <div class="row">
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Business Unit:</label>
                      <div class="col-9">
                        <dropdown :options="BU"
                                  id="us_businessunit"
                                  v-model="form.businessUnit"></dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Division:</label>
                      <div class="col-9">
                        <dropdown :options="Division"
                                  id="us_division"
                                  v-model="form.division"></dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fourth seperate row -->
                <div class="row">
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Role:</label>
                      <div class="col-9">
                        <dropdown :options="Role"
                                  id="us_role"
                                  v-model="form.role_name"></dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Region:</label>
                      <div class="col-9">
                        <dropdown :options="Region"
                                  id="us_region"
                                  v-model="form.region"></dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fifth seperate row -->
                <div class="row">
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Resource Category:</label>
                      <div class="col-9">
                        <dropdown :options="ResCategory"
                                  id="us_rescategory"
                                  v-model="form.resourceCategory"></dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-1 mb-0">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Cost Category:</label>
                      <div class="col-9">
                        <dropdown :options="CostCategory"
                                  id="us_costcategory"
                                  v-model="form.costCategory"></dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-1 mb-0 text-right">
                  <div class="col-md-8">&nbsp;</div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <button type="button" class="btn btn-block btn-warning"
                              @click="restForm">
                        Reset <i class=" fa fa-eraser pl-1"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <button type="button" class="btn btn-block btn-success"
                              @click="searchResult">
                        Search <i class=" fa fa-search pl-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </form>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  /* eslint-disable */
  import SearchUserApi from '@/api/UserSearchAPI'
  import getUserbyID from '@/api/UserGetUserByIdAPI'
  import updateUserbyID from '@/api/UserUpdateByIdAPI'
  import {region} from '@/store/region'
  import {bu} from '@/store/businessUnit'
  import {division} from '@/store/division'
  import {role} from '@/store/role'
  import {resCat} from '@/store/resourceCategory'
  import {costCat} from '@/store/costCategory'
  import Switch from '@/components/plugins/mw-switch'
  import mwdropdown from '@/components/plugins/mw-dropdown'
  import swal from 'sweetalert2'

  export default {
    components: {
      'dropdown': mwdropdown
    },
    data() {
      return {
        dbquery: 'all',
        Region: region,
        BU: bu,
        Division: division,
        Role: role,
        ResCategory: resCat,
        CostCategory: costCat,
        form: {
          name: '',
          employeeID: '',
          user_id: '',
          costcenter: '',
          division: '',
          businessUnit: '',
          role_name: '',
          region: '',
          resourceCategory: '',
          costCategory: ''
        }
      }  // return end
    }
    ,
    methods: {

      restForm: function () {
        this.form.name = ''
        this.form.user_id = ''
        this.form.employeeID = ''
        this.form.costcenter = ''
        this.form.businessUnit = ''
        this.form.division = ''
        this.form.role_name = ''
        this.form.region = ''
        this.form.resourceCategory = ''
        this.form.costCategory = ''
      },

      searchResult: async function () {
        if (this.form.name == '' && this.form.user_id == ''
          && this.form.employeeID == '' && this.form.costcenter == ''
          && this.form.businessUnit == '' && this.form.division == ''
          && this.form.role_name == '' && this.form.region == ''
          && this.form.resourceCategory == ''
          && this.form.costCategory == '') {
          this.dbquery = 'all'
          try {
            const response = await SearchUserApi.searchUsers({username: this.dbquery})
            console.log('reponse is: ' + JSON.stringify(response))
          } catch (err) {
            console.log(err.response.data.error)
          }
        } else {
          try {
            const response = await SearchUserApi.searchUsers({
              "username": this.form.name,
              "user_id": this.form.user_id,
              "user_emp_id": this.form.employeeID,
              "full_name": this.form.name,
              "role_id": getID(this.form.role_name),
              "cost_center": this.form.costcenter,
              "division_id": getID(this.form.division),
              "businessunit_id": getID(this.form.businessUnit),
              "region_id": getID(this.form.region),
              "rescategory_id": getID(this.form.resourceCategory),
              "costcategory_id": getID(this.form.costCategory)
            })
            console.log('reponse is: ' + JSON.stringify(response))
          } catch (err) {
            console.log(err.response.data.error)
          }

        }
        // console.log(this.dbquery)
      }

      /* searchAll: async function () {
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

 */
    }, //  methods end
    // Before Mount is used to execute this methond on load event
    beforeMount() {
      //this.searchAll()
    }
  } // Export default end

  function getID(str) {
    if (str != null || str != "") {
      var array = str.split('#@#')
      return array[0]
    } else {
      return ""
    }
  }
</script>

<style scoped>

  button {
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 15px;
    font-weight: 500;
    max-width: 150px;
  }

  .lookAhead {
    font-size: 14px;
    font-weight: 500;
    padding-left: 3px;
    padding-bottom: 0px;
    padding-top: 3px;
  }

  .paddingSetting {
    max-height: 2rem;
  }

</style>
