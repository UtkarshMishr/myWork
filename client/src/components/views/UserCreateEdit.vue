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
      <div class="mt-2 rounded">
        <b-row>
        <div class="col-sm-12 col-md-6">
          <div class="box box-solid">
            <div class="box-body">
              <h6 style="background-color:#dedede;"
              class="rounded text-center pt-2 pb-2">
                CREATE USERS
              </h6>
              <div class="media">
                <div class="media-left">
                    <img src="../../../static/img/custom/user_createUser.png"
                         alt="Create User" class="media-object"
                         style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                </div>
                <div class="media-body">
                  <div class="mt-4 mb-0 mr-2">
                    <p class="pull-right">
                      <b-button  @click= "showModal = !showModal"
                                 class="btn btn-success btn-sm">
                        Create User
                      </b-button>
                    </p>
                  </div>
                  <h6 class="mt-0 ml-4">Create new users</h6>
                  <p class="ml-4" style="font-size: 14px">Use network username for profile creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="col-sm-12 col-md-6">
            <div class="box box-solid">
              <div class="box-body">
                <h6 style="background-color:#dedede;"
                    class="rounded text-center pt-2 pb-2">
                  CREATE COST RATES
                </h6>
                <div class="media">
                  <div class="media-left">
                    <img src="../../../static/img/custom/cost_rate.png"
                         alt="Create User" class="media-object"
                         style="width: 80px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                  </div>
                  <div class="media-body">
                    <div class="mt-4 mb-0 mr-2">
                      <p class="pull-right">
                        <b-button  @click= "showModal = !showModal"
                                   class="btn btn-success btn-sm">
                          Create Cost Rate
                        </b-button>
                      </p>
                    </div>
                    <h6 class="mt-0 ml-4">Create new cost rates</h6>
                    <p class="ml-4" style="font-size: 14px">Use network username for profile creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </div>
      <div>

        <!-- User Create FORM -->
        <userFormModal
          my-message = "Create User"
          :show="showModal"
          >
        </userFormModal>
        <!-- ./User Create FORM -->
      </div>
    </b-container>

    <b-container fluid class="mt-2 mb-3 mr-2 ml-2 rounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <b-row class="ml-0 mt-1">
        <div class="">
          <div class="box box-warning">
            <div class="box-header">
              <h6>Cost Center</h6>
              <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table" >
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Reason</th>
                </tr>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-success">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Alexander Pierce</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-warning">Pending</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Bob Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-primary">Approved</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Mike Doe</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-danger">Denied</span></td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                </tr>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </b-row>
    </b-container>
    <!-- ./Parent User FORM DIV -->
  </div>
  <!-- ./Main DIV -->
</template>

<script>
  /* eslint-disable */
  import userFormModal from '@/components/modals/userForm'

  export default {
    data() {
      return {
        showModal: false,
        dismissSecs: 5,
        dismissCountDown: 0,
        serverResponse: null,
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

    } //  methods end

  } // Export default end

</script>

<style>
  body {
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
    background: #f8f8f8 !important;
  }
  .rounded {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  th, tr, td {
    border-spacing: 0px !important;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    font-size: 12px;
  }

</style>
