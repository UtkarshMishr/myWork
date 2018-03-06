<template>
  <!-- Main DIV -->
  <div>
    <!-- Parent User FORM DIV -->
    <div class="container-fluid mt-2 mb-3 mr-2 ml-2 csRounded"
                 style="border-style: solid; border-width: 2px 1px 1px 1px; border-color: #125acd">
      <div class="mt-2 csRounded">
        <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="box box-solid">
            <div class="box-body mt-0">
              <h6 style="background-color:#dedede;"
              class="csRounded text-center pt-1 pb-1">
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
                      <button  @click.prevent="showUserForm"
                                 class="btn btn-success btn-sm">
                        Create User
                      </button>
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
                    class="csRounded text-center pt-1 pb-1">
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
                        <button  class="btn btn-success btn-sm">
                          Create Cost Rate
                        </button>
                      </p>
                    </div>
                    <h6 class="mt-0 ml-3">Create new cost rates</h6>
                    <p class="ml-3" style="font-size: 14px">Use network username for profile creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="row ml-2 mt-1 mr-2">
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
            <div class="box-body table-responsive no-padding ml-0">
              <table class="table" >
                <tr>
                  <th>ID</th>
                  <th>Cost Center Name</th>
                  <th>Division</th>
                  <th>Status</th>
                  <th>Desription</th>
                </tr>
                <tr>
                  <td>5677</td>
                  <td>JHAS Core</td>
                  <td>JHAS</td>
                  <td><span class="badge badge-primary" style="font-weight: normal !important;">Enabled</span></td>
                  <td>JHAS core cost center</td>
                </tr>
                <tr>
                  <td>4345</td>
                  <td>PMO</td>
                  <td>JHAS</td>
                  <td><span class="badge badge-primary" style="font-weight: normal !important;">Enabled</span></td>
                  <td>PMO cost center for JHAS</td>
                </tr>
                <tr>
                  <td>4567</td>
                  <td>Insurance DIV1</td>
                  <td>INS</td>
                  <td><span class="badge badge-primary" style="font-weight: normal !important;">Enabled</span></td>
                  <td>US Insurance division 1 cost center</td>
                </tr>
                <tr>
                  <td>1234</td>
                  <td>Annuities Mobile</td>
                  <td>ANNUITIES</td>
                  <td><span class="badge badge-danger" style="font-weight: normal !important;">Disabled</span></td>
                  <td>Annuties mobile and web development</td>
                </tr>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
      </div>
    <!-- ./Parent User FORM DIV -->
    <!-- User Create FORM -->
    <userFormModal
      mymessage = "Create User"
      v-if="showUserFormModal"
      @close="showUserFormModal = false"
    >
    </userFormModal>
    <!-- ./User Create FORM -->
  </div>
  <!-- ./Main DIV -->
</template>

<script>
  /* eslint-disable */
  import userFormModal from '@/components/modals/userForm'

  export default {
    data() {
      return {
        showUserFormModal: false,
        serverResponse: null,
      }  // return end
    }
    ,
    components: {
      userFormModal: userFormModal
    },
    methods: {
      showUserForm: function(e) {
        this.showUserFormModal = true;
      }
    } //  methods end

  } // Export default end

</script>

<style>

  .csRounded {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  th, tr, td {
    border-spacing: 0px !important;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    font-size: 13px;
  }

</style>
