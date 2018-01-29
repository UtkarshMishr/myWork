/* eslint-disable */

<template>
  <!-- Main DIV -->
  <div>
    <!-- Show Alert on Success (pending has to do -->
    <b-alert :show="dismissCountDown"
             dismissible
             variant="success"
             class="ml-5 mr-5 mb-0 mt-1 center-block"
             style="width: 50%"
             @dismissed="dismissCountdown=0"
             @dismiss-count-down="countDownChanged">
      <b-progress variant="warning"
                  animated
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
      <h4 class="alert-heading fa fa-check">&nbsp;&nbsp;New user created Successfully!</h4>
    </b-alert>
    <!-- ./Show Alert on Success -->
    <!-- Parent User FORM DIV -->
    <b-container fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <div>
        <b-card-group deck class="mt-2 mb-3 mr-3 ml-1">
          <b-card border-variant="primary"
                  header="Users"
                  header-bg-variant="green"
                  header-class="h5 pt-1 pb-1"
                  align="center">
            <div class="pt-2">
              <img class="card-img-top img-fluid" src="../../../static/img/custom/user_createUser.png"
                   style="width: 8rem; height: 8rem;">
            </div>
            <div class="card-text pt-2">
              Create new myWork Users.
            </div>
            <div class="pb-2 pt-4">
              <b-button v-b-modal.modallg class="bg-green border-green; text-bold">Create Users</b-button>
            </div>
          </b-card>
          <b-card border-variant="warning "
                  header="Cost Centers"
                  header-bg-variant="warning "
                  header-class="h5 pt-1 pb-1"
                  align="center">
            <div class="pt-2">
              <img class="card-img-top " src="../../../static/img/custom/cost_center.png"
                   style="width: 8rem; height: 8rem;">
            </div>
            <div class="card-text pt-2">
              Create new Cost Center.
            </div>
            <div class="pb-2 pt-4">
              <b-button v-b-modal.modallg class="bg-warning border-warning; text-bold">Create Cost Center</b-button>
            </div>
          </b-card>
          <b-card border-variant="info"
                  header="Cost Rates"
                  header-bg-variant="info "
                  header-class="h5 pt-1 pb-1"
                  align="center">
            <div class="pt-4">
              <img class="card-img-top " src="../../../static/img/custom/cost_rate.png"
                   style="width: 7rem; height: 7rem;">
            </div>
            <div class="card-text pt-2">
              Create new Cost Rates.
            </div>
            <div class="pb-2 pt-4">
              <b-button v-b-modal.modallg class="bg-info border-info; text-bold">Create Cost Rates</b-button>
            </div>
          </b-card>
        </b-card-group>
        <b-modal v-model="showModal" id="modallg" size="lg" centered title="Create new user" hide-footer hide-header>
          <!-- User Create FORM -->
          <userFormModal my-message="Create User"></userFormModal>
        </b-modal>
      </div>
    </b-container>

    <!-- ./User Create FORM -->
    <b-container fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <!-- User table -->

      <!-- ./ User table -->
    </b-container>
    <!-- ./Parent User FORM DIV -->
  </div>
  <!-- ./Main DIV -->
</template>

<script>
  import CreateUserApi from '@/api/UserCreateAPI'
  import userFormModal from '@/components/modals/userForm'

  export default {
    data() {
      return {
        showModal: false,
        dismissSecs: 5,
        dismissCountDown: 0,
        serverResponse: null,
        /*
        Data elements from the imported UserFormModal
        */
      }  // return end
    }
    ,
    components: {
      userFormModal: userFormModal
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
      ,
      createUser: async function () {
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
          this.dismissCountDown = 5
          this.serverResponse = response
          this.showModal = false
          this.userFrom = false
          this.clean()
          //this.showMessage();
        } catch (err) {
          console.log(err.response.data.error)
          this.error = err.response.data.error
          this.dismissCountDown = this.dismissSecs
          this.serverResponse = err.response.data.error
        }
      }
      ,
      register(evt) {
        evt.preventDefault()
        this.createUser()
        this.showModal = false
        this.userFrom = false
      }
      ,
      clean: function () {
        this.userForm.username = ''
        this.userForm.employeeID = ''
        this.userForm.fullname = ''
        this.userForm.email = ''
        this.userForm.password = ''
        this.userForm.cpassword = ''
        this.userForm.businessUnit = null
        this.userForm.division = null
        this.userForm.role = null
        this.userForm.costcenter = ''
        this.userForm.region = null;
        this.userForm.managerFullName = ''
        this.userForm.manageremployeeID = ''
        this.userForm.notes = ''
        this.userForm.checked = []
      }
    }, //  methods end

  } // Export default end

</script>

<style>

</style>
