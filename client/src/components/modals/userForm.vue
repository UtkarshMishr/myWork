<template>
  <!-- MODAL -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="m-2 csRounded csouterBoxBlue">

            <div style="padding-bottom: 1px; padding-top: 1px; color: #ffffff"
                 class="bg-blue-gradient csRounded mt-1 mb-0 pt-1 text-center">
              <div><i class="fa fa-user-circle-o">&nbsp;&nbsp;{{ mymessage }}</i></div>
            </div>
            <!-- ./Modal Header -->
            <!-- Form Start -->
            <form class="form-horizontal">
              <div class="row">
                <!-- Left Part -->
                <div class="col-7 col-sm-7 col-md-7 col-lg-7">
                  <!-- Project Summary header -->
                  <div class="csformSectionHeaderGray">
                    <div>User Information</div>
                  </div>
                  <!-- Project Summary section -->
                  <div class="container-fluid pt-1">
                    <div class="row">
                      <div class="csform-group col-lg-12 col-md-12 col-sm-12">
                        <!-- UserName -->
                        <div class="row form-group mb-0"
                             :class="{'has-danger':  errors.has('Username')}">
                          <label class="col-lg-3 col-md-3 col-sm-3 pr-0 pl-1 col-form-label">Username: <span
                            style="color:red;">*</span></label>
                          <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                            <input type="text"
                                   class="form-control m-0"
                                   id="us_username"
                                   name="Username"
                                   v-model="form.username"
                                   v-validate="'required'"
                                   :class="{'input': true, 'form-control-danger':  errors.has('Username')}">
                            <span v-show="errors.has('Username')"
                                  class="csFontErrorText">{{ errors.first('Username') }}</span>
                          </div>
                        </div>
                        <!-- ./UserName -->
                        <!-- Employee ID -->
                        <div class="row form-group mt-1 mb-0"
                             :class="{'has-danger':  errors.has('Employee ID')}">
                          <label class="col-lg-3 col-md-3 col-sm-3 pr-0 pl-1 col-form-label">Employee ID: <span
                            style="color:red;">*</span></label>
                          <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                            <input type="text"
                                   class="form-control m-0"
                                   id="us_emaplyeeid"
                                   name="Employee ID"
                                   v-model="form.employeeID"
                                   v-validate="'required'"
                                   :class="{'input': true, 'form-control-danger':  errors.has('Employee ID')}">
                            <span v-show="errors.has('Employee ID')" class="csFontErrorText">{{ errors.first('Employee ID') }}</span>
                          </div>
                        </div>
                        <!-- ./Employee ID -->
                        <!-- Full Name -->
                        <div class="row form-group mt-1 mb-0"
                             :class="{'has-danger':  errors.has('Full Name')}">
                          <label class="col-lg-3 col-md-3 col-sm-3 pr-0 pl-1 col-form-label">Full Name: <span
                            style="color:red;">*</span></label>
                          <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                            <input type="text"
                                   class="form-control m-0"
                                   id="us_fullname"
                                   name="Full Name"
                                   v-model="form.fullname"
                                   v-validate="'required'"
                                   :class="{'input': true, 'form-control-danger':  errors.has('Full Name')}">
                            <span v-show="errors.has('Full Name')" class="csFontErrorText">{{ errors.first('Full Name') }}</span>
                          </div>
                        </div>
                        <!-- ./Full Name -->
                        <!-- Email Address -->
                        <div class="row mt-1 mb-0"
                             :class="{'has-danger':  errors.has('Email Address')}">
                          <label class="col-lg-3 col-md-3 col-sm-3 pr-0 pl-1 col-form-label">Email: <span
                            style="color:red;">*</span></label>
                          <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                            <input type="text"
                                   class="form-control m-0"
                                   id="us_email"
                                   name="Email Address"
                                   v-model="form.email"
                                   v-validate="'required|email'"
                                   :class="{'input': true, 'form-control-danger':  errors.has('Email Address')}">
                            <span v-show="errors.has('Email Address')" class="csFontErrorText">{{ errors.first('Email Address') }}</span>
                          </div>
                        </div>
                        <!-- ./Email Address -->
                      </div>
                    </div>

                  </div>
                </div>
                <!-- ./Left Part -->
                <!-- Right Part -->
                <div class="col-5 col-sm-5 col-md-5 col-lg-5"
                     style="padding-left: 0 !important; padding-right: 17px !important;">
                  <div class="csformSectionHeaderBlue">
                    <div>User Password</div>
                  </div>
                  <!-- Password -->
                  <div class="input-group mt-1"
                       :class="{'has-danger':  errors.has('Password')}">
                  <span class="input-group-addon bg-gray csFontLabel  p-2 fa fa-key" style="width: 160px">
                        Enter Password: <span style="color:red;">*</span></span>
                    <input type="password"
                           class="form-control"
                           id="password1"
                           name="Password"
                           v-model="form.password"
                           v-validate="'required|min:6'"
                           :class="{'input': true, 'form-control-danger':  errors.has('Password')}">
                  </div>
                  <span style="padding-left: 4rem" v-show="errors.has('Password')" class="csFontErrorText">{{ errors.first('Password') }}</span>
                  <!-- ./Password -->
                  <!-- Confirm Password -->
                  <div class="input-group mt-1"
                       :class="{'has-danger':  errors.has('Confirm Password')}">
                   <span class="input-group-addon bg-gray csFontLabel  p-2 fa fa-key"
                         style="width: 160px">
                  Confirm Password: <span style="color:red;">*</span></span>
                    <input type="password"
                           class="form-control"
                           id="password2"
                           name="Confirm Password"
                           v-model="form.cpassword"
                           v-validate="'required|min:6|confirmed:Password'"
                           :class="{'input': true, 'form-control-danger':  errors.has('Confirm Password')}"
                           data-vv-as="Password">
                  </div>
                  <span style="padding-left: 4rem" v-show="errors.has('Confirm Password')" class="csFontErrorText">{{ errors.first('Confirm Password') }}</span>
                  <!-- ./Confirm Password -->
                  <!-- Disabled -->
                  <div class="row mt-1">
                    <label class="col-lg-4 col-md-4 col-sm-4 pr-0 pl-4 col-form-label">
                      <i class="fa fa-ban" style="color: red;"></i> Disabled:
                    </label>
                    <div class="col-8 col-md-8 col-sm-8 col-lg-8 pl-0 ml-0"
                         @click="setEndDate(switchValue)">
                      <app-switch v-model="swValue"
                      ><strong>{{switchValue}}</strong>
                      </app-switch>
                    </div>
                  </div>
                  <!-- ./Disabled -->
                  <!-- Company -->
                  <div class="row mt-1">
                    <label class="col-lg-3 col-md-3 col-sm-3 pr-0 pl-4 col-form-label">Company:</label>
                    <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                      <dropdown :options="Company"
                                id="us_compnay"
                                v-model="form.company"></dropdown>
                    </div>
                  </div>
                  <!-- ./Company -->
                </div>
                <!-- ./ Row (User Information)-->
              </div>
              <!-- ./ First Row -->
              <!--  Second row (User Information - Part 2)-->
              <div class="row">
                <div class="col-12">
                  <!-- Project Summary header -->
                  <div class="csformSectionHeaderGray">
                    <div>User Details</div>
                  </div>
                  <div class="container-fluid pt-1">
                    <!-- Line #1 -->
                    <div class="row">
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">User ID:</label>
                          <div class="col-8">
                            <input type="text"
                                   class="form-control"
                                   id="us_userid"
                                   disabled
                                   v-model="form.user_id">
                          </div>
                        </div>
                      </div>
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">End Date:</label>
                          <div class="col-8">
                            <input type="text"
                                   class="form-control"
                                   disabled
                                   id="us_startdate"
                                   v-model="form.end_date">
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ./Line #1 -->
                    <!-- Line #2 -->
                    <div class="row">
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Cost Center:</label>
                          <div class="col-8 csFontText">
                            <mwselect :options="CostCenter"
                                      id="us_costcenter"
                                      v-model="form.costcenter"
                            ></mwselect>
                          </div>
                        </div>
                      </div>
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Manager:</label>
                          <div class="col-8">
                            <dropdown :options="BU"
                                      id="us_manager"
                                      v-model="form.manager"></dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ./Line #2 -->
                    <!-- Line #3 -->
                    <div class="row">
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Division:</label>
                          <div class="col-8">
                            <dropdown :options="Division"
                                      id="us_division"
                                      v-model="form.division"></dropdown>
                          </div>
                        </div>
                      </div>
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Business Unit:</label>
                          <div class="col-8">
                            <dropdown :options="BU"
                                      id="us_businessunit"
                                      v-model="form.businessUnit"></dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ./Line #3 -->
                    <!-- Line #4 -->
                    <div class="row">
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Role:</label>
                          <div class="col-8">
                            <dropdown :options="Role"
                                      id="us_role"
                                      v-model="form.role_name"></dropdown>
                          </div>
                        </div>
                      </div>
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Region:</label>
                          <div class="col-8">
                            <dropdown :options="Region"
                                      id="us_region"
                                      v-model="form.region"></dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ./Line #4 -->
                    <!-- Line #4 -->
                    <div class="row">
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Resource Category:</label>
                          <div class="col-8">
                            <dropdown :options="ResCategory"
                                      id="us_rescategory"
                                      v-model="form.resourceCategory"></dropdown>
                          </div>
                        </div>
                      </div>
                      <div class="form-group csform-group col-6">
                        <div class="row">
                          <label class="col-4 col-form-label pl-1 pr-0">Cost Category:</label>
                          <div class="col-8">
                            <dropdown :options="CostCategory"
                                      id="us_costcategory"
                                      v-model="form.costCategory"></dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ./Line #4 -->
                  </div>
                </div>
              </div>
              <!--  ./Second row (User Information - Part 2)-->
            </form>
            <!-- ./Form Start -->
            <div class="modal-footer">
              <slot name="footer">
                <button class="btn btn-danger btn-sm"
                        :disabled="disableCancle"
                        @click.prevent="closeForm">
                  Cancel
                </button>
                <button class="btn btn-success btn-sm"
                        :disabled="disableSubmit"
                        @click.prevent="register">
                  Submit
                </button>
              </slot>
            </div>
            <!-- ./ Modal Footer -->
            <div class="showSpinner" v-if="spinner"><i class="fa fa-spinner fa-pulse"></i></div>
          </div>
          <!-- ./Outer Box -->
        </div>
        <!-- ./Modal Container -->
      </div>
      <!-- ./ Modal Wrapper -->
    </div>
    <!-- Modal Mask -->
  </transition>
  <!-- ./MODAL -->
</template>

<script>
  /* eslint-disable */
  import CreateUserApi from '@/api/UserCreateAPI'
  import {costcenter} from '@/store/costCenter'
  import {region} from '@/store/region'
  import {bu} from '@/store/businessUnit'
  import {division} from '@/store/division'
  import {role} from '@/store/role'
  import {resCat} from '@/store/resourceCategory'
  import {costCat} from '@/store/costCategory'
  import {company} from '@/store/company'
  import Switch from '@/components/plugins/mw-switch'
  import mwselect from '@/components/plugins/mw-select'
  import mwdropdown from '@/components/plugins/mw-dropdown'
  import swal from 'sweetalert2'

  export default {
    props: ['mymessage'],
    components: {
      'app-switch': Switch,
      mwselect,
      'dropdown': mwdropdown
    },
    data() {
      return {
        spinner: false,
        disableSubmit: false,
        disableCancle: false,
        swValue: false,
        switchValue: 'No',
        serverResponse: null,
        CostCenter: costcenter,
        Region: region,
        BU: bu,
        Division: division,
        Role: role,
        ResCategory: resCat,
        CostCategory: costCat,
        Company: company,
        form: {
          username: '',
          employeeID: '',
          fullname: '',
          email: '',
          password: '',
          company: '',
          user_id: '',
          costcenter: '',
          manager: '',
          division: '',
          businessUnit: '',
          role_name: '',
          region: '',
          resourceCategory: '',
          costCategory: '',
          end_date: null
        }
      }  // return end
    },
    methods: {

      createUser: async function () {
        this.spinner = true
        this.disableSubmit = true
        this.disableCancle = true
        try {
          const response = await
            CreateUserApi.register({
              "username": this.form.username,
              "user_emp_id": this.form.employeeID,
              "full_name": this.form.fullname,
              "email_address": this.form.email,
              "password": this.form.password,
              "disabled": this.switchValue,
              "created_by": "",
              "last_update_by": "",
              "role_id": getID(this.form.role_name),
              "role_name": getName(this.form.role_name),
              "company_id": getID(this.form.company),
              "company_name": getName(this.form.company),
              "cost_center": this.form.costcenter,
              "manager_id": this.form.manager,
              "division_id": getID(this.form.division),
              "division_name": getName(this.form.division),
              "businessunit_id": getID(this.form.businessUnit),
              "businessunit_name": getName(this.form.businessUnit),
              "region_id": getID(this.form.region),
              "region_name": getName(this.form.region),
              "rescategory_id": getID(this.form.resourceCategory),
              "rescategory_name": getName(this.form.resourceCategory),
              "costcategory_id": getID(this.form.costCategory),
              "costcategory_name": getName(this.form.costCategory),
              "endAt": this.form.end_date
            })
          this.serverResponse = JSON.stringify(response.data.user_id)

          this.$emit('close')
          swal({
            position: 'top',
            type: 'success',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success:',
            width: '25rem',
            padding: '.5rem',
            html: 'New User ' + this.form.fullname + ' account ID # ' + this.serverResponse + ' create!!'
          }).then((result) => {
            if (result.value) {
              this.spinner = false
              this.disableSubmit = false
              this.disableCancle = false
            } else {
              this.spinner = false
              this.disableSubmit = false
              this.disableCancle = false
            }
          })
        } catch (err) {
          console.log(err)
          this.error = err
          this.spinner = true
          if (JSON.stringify(this.error.response.data.Msg).includes("SequelizeUniqueConstraintError")) {
            swal({
              type: 'error',
              title: 'Duplicate Username',
              text: 'Username must be unique',
              confirmButtonClass: 'btn btn-sm pt-2 pb-2 pl-4 pr-4 csFontText',
              footer: 'Error: ' + this.form.username + ' already exists in the system',
              width: '30rem',
              padding: '.5rem'
            })
            this.spinner = false
            this.disableSubmit = false
            this.disableCancle = false
          } else {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong! (contact support)',
              confirmButtonClass: 'btn btn-sm pt-2 pb-2 pl-4 pr-4 csFontText',
              footer: 'Server Response: ' + JSON.stringify(this.error.response.data),
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Try Again !',
              cancelButtonClass: 'btn btn-sm p-2 csFontText',
              confirmButtonClass: 'btn btn-sm p-2 csFontText',
              width: '30rem',
              padding: '.5rem'
            }).then((result) => {
              if (result.value) {
                this.spinner = false
                this.disableSubmit = false
                this.disableCancle = false
              } else {
                this.$emit('close')
              }
            })
          }

        }
      }
      ,
      register() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.createUser()
            return;
          } else {
            swal({
              title: 'Fix the user form error !!',
              text: "User information will not be saved!",
              type: 'error',
              confirmButtonColor: '#3085d6',
              confirmButtonText: '  OK  !     ',
              width: '30rem',
              padding: '.5rem',
              confirmButtonClass: 'btn btn-sm p-2 csFontText'
            })
          }

        });

      },
      closeForm: function () {
        swal({
          title: 'Are you sure?',
          text: "User information will not be saved!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Proceed!',
          width: '30rem',
          padding: '.5rem',
          cancelButtonClass: 'btn btn-sm p-2 csFontText',
          confirmButtonClass: 'btn btn-sm p-2 csFontText'
        }).then((result) => {
          if (result.value) {
            this.cleanFormData()
            this.$emit('close')
          }
        })
        /*if (confirm('Are you sure you want to cancel the User creation?')) {
          this.$emit('close')
        } else {
          // Do nothing!
        }*/
      },
      cleanFormData: function () {
        this.form.username = ""
        this.form.employeeID = ""
        this.form.fullname = ""
        this.form.email = ""
        this.form.password = ""
        this.switchValue = "No"
        this.form.role_name = ""
        this.form.company = ""
        this.form.costcenter = ""
        this.form.manager = ""
        this.form.division = ""
        this.form.businessUnit = ""
        this.form.region = ""
        this.form.resourceCategory = ""
        this.form.costcenter = ""
      },
      setEndDate: function (swVal) {
        if (swVal == 'No') {
          this.form.end_date = new Date().toISOString().slice(0, 19).replace('T', ' ')
        } else {
          this.form.end_date = ''
        }

      }

    }, //  methods end
    watch: {
      swValue(val) {
        this.switchValue = val ? 'Yes' : 'No'
      }
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

  function getName(str) {
    if (str != null || str != "") {
      var array = str.split('#@#')
      return array[1]
    } else {
      return ""
    }
  }

</script>

<style scoped>
  label {
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #001f3f !important;
    text-align: left;
  }

  .showSpinner {
    position: fixed !important;
    z-index: 9999999 !important;
    height: 200px !important;
    width: 200px !important;
    font-size: 50px !important;
    overflow: show !important;
    margin: auto !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    background-color: transparent;
  }

</style>
