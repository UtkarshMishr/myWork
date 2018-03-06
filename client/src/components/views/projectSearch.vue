<template>
  <div>
    <div class="alert alert-dismissible mt-2 mb-1 mr-2 ml-2 pb-1 pt-1"
         style="background: #00a65a; border-left: 5px solid #00733e; color: #ffffff">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #ffffff;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 11pt">Project cost is syncornized from timesheet every night.</span>
    </div>
    <section>
      <div class="ml-2 mr-2">
        <div class="box box-warning">
          <div class="box-header p-1">
            <div class="bg-gray-light p-1"
                 style="background: #d8eafc; border-bottom: 2px solid #6494c4; font-weight: 500">Search Projects
            </div>
          </div>
          <!-- Form Start -->
          <form class="form-horizontal">
            <div class="container-fluid row">
              <div class="col-lg-2 col-sm-2 pl-2 pr-2">
                <div class="media">
                  <div class="media-left">
                    <img src="../../../static/img/custom/project-search.png"
                         alt="Create User" class="media-object"
                         style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                  </div>
                </div>
              </div>

          <div class="col-lg-10 col-sm-10">
            <!-- First Row -->
            <div class="row">
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Project ID:</label>
                  <div class="col-9">
                    <input type="number"
                           class="form-control"
                           v-model="form.projectID">
                  </div>
                </div>
              </div>
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Project Name:</label>
                  <div class="col-9">
                    <input type="text"
                           class="form-control"
                           v-model="form.projectName">
                  </div>
                </div>
              </div>
            </div>
            <!-- ./First Row -->
            <!-- Second Row -->
            <div class="row">
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Business Group:</label>
                  <div class="col-9">
                    <dropdown :options="prjBG"
                              v-model="form.projectBG"></dropdown>
                  </div>
                </div>
              </div>
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Business Unit:</label>
                  <div class="col-9">
                    <dropdown :options="prjBU"
                              v-model="form.projectBU"></dropdown>
                  </div>
                </div>
              </div>
            </div>
            <!-- ./Second Row -->
            <!-- Third seperate row -->
            <div class="row">
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Project Status:</label>
                  <div class="col-9">
                    <dropdown :options="prjStatus"
                              v-model="form.projectStatus"></dropdown>
                  </div>
                </div>
              </div>
              <div class="form-group col-6">
                <div class="row">
                  <label class="col-3 col-form-label pl-1 pr-0">Cost Center:</label>
                  <div class="col-9">
                    <mwselect :options="CostCenter"
                              v-model="form.projectCostCenter"
                              class="lookAhead"
                    ></mwselect>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-4">&nbsp;</div>
              <div class="col-md-2">
                <div class="form-group">
                  <button type="button" class="btn btn-block btn-warning">
                    Reset <i class=" fa fa-eraser pl-1"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <button type="button" class="btn btn-block btn-success">
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
  import mwdropdown from '@/components/plugins/mw-dropdown'
  import mwselect from '@/components/plugins/mw-select'
  import {costcenter} from '@/store/costCenter'

  export default {
    components: {
      'dropdown': mwdropdown,
      mwselect
    },
    data() {
      return {
        CostCenter: costcenter,
        form: {
          projectName: '',
          projectID: '',
          projectStatus: '',
          projectManager: '',
          projectCostCenter: '',
          projectBU: '',
          projectBG: ''
        },
        prjBG: [
          {id:1	,	name: 'BG1'},
          {id:2	,	name: 'BG2'},
          {id:3	,	name: 'BG3'},
          {id:4	,	name: 'BG4'},
          {id:5	,	name: 'BG5'},
          {id:6	,	name: 'BG6'},
          {id:7	,	name: 'BG7'},
          {id:8	,	name: 'BG8'}
        ],
        prjBU: [
          {id:1	,	name: 'BU1'},
          {id:2	,	name: 'BU2'},
          {id:3	,	name: 'BU3'},
          {id:4	,	name: 'BU4'},
          {id:5	,	name: 'BU5'},
          {id:6	,	name: 'BU6'},
          {id:7	,	name: 'BU7'},
          {id:8	,	name: 'BU8'}
        ],
        prjStatus: [
          {id:1	,	name: 'Open'},
          {id:2	,	name: 'Close'},
          {id:3	,	name: 'Cancel'},
          {id:4	,	name: 'On-Hold'},
          {id:5	,	name: 'WithDraw'}
        ]
      }  // return end
    },

    methods: {

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
