<template>
  <div>
    <div class="box box-success mt-2 ml-2 mr-2 pb-2" style="width: 99%">
      <div class="box-header with-border">
        <h3 class="box-title">Create Timesheet</h3>
        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool"><i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="alert alert-dismissible mt-2 mb-3 ml-2 mr-2 pb-1 pt-1"
           style="background: #d8eafc; border-left: 5px solid #6494c4">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <i class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #6494c4;"></i>
        <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
        <span style="font-size: 10pt">Only current and last month timesheets are allowed to edit/create.</span>
      </div>

      <div>
        <b-form @submit="submitTimesheet">
          <div class="container-fluid mt-2 mb-3 pl-0 pr-0">
            <!-- Date and time range -->
            <div class="form-group rounded mt-1 ml-2 pt-2 pb-2 pl-2 pr-4"
                 style="border: #777777 solid 1px; width: 20rem; display: inline-block">
              <label class="font-weight-bold">Timesheet Period:</label>

              <div class="input-group">
                <button id="reportrange" type="button" class="btn btn-default pull-right">
                    <span>
                      <i class="fa fa-calendar"></i> Date range picker
                    </span>
                  <i class="fa fa-caret-down"></i>
                </button>
              </div>
            </div>
            <div style="display: inline-block; float: right"
                 class="mt-5">
              <b-button @click="modalShow = !modalShow"
                        class="bg-maroon-gradient fa fa-plus-square">
                Add Project
              </b-button>
            </div>

            <!-- Modal Defination - Add Project -->

            <b-modal v-model="modalShow" size="lg"
                     title="Select Project"
                     header-class="pt-1 pb-1 bg-blue"
                     footer-class="pt-1 pb-1"
                     @ok="passProject">
              <v-select :options="Project" label="name"
                        placeholder="Search Project"
                        v-model="selectProject">
              </v-select>
            </b-modal>
            <!-- ./Date and time range -->

            <table id="myTable"
                   class="table order-list ml-1"
                   style="width: 99%">
              <thead>
              <tr class="timesheetTableHeader">
                <td style="width: 60rem">Activity</td>
                <td style="width: 30rem">Charge Back</td>
                <td style="width: 10rem">Hours</td>
              </tr>
              </thead>
              <tbody>
              <tr v-show="showProject1">
                <td colspan="2">
                  <div class="projectDiv pl-3 pr-1 bg-blue-gradient">
                    <strong>Project: </strong> {{form1L1.projectID.name}}
                  </div>
                </td>
                <td>
                  <b-button id="addrow"
                            type="button"
                            :disabled=disablePrjLineBtn1
                            class="pb-0
                            pt-0
                            bg-green-gradient"
                            @click="createLine(1)">
                    <i class="fa fa-plus"></i>
                    Add Line
                  </b-button>
                </td>
              </tr>
              <tr v-show="showProject1">
                <td>
                  <div>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form1L1.activity">
                  </v-select>
                  </div>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form1L1.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form1L1.hours"
                                name="Hours">
                  </b-form-input>
                </td>
              </tr>
              <!-- Timesheet Line #2 -->
              <tr v-show="showLine1Prj1">
                <td>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form1L2.activity">
                  </v-select>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form1L2.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form1L2.hours"
                                name="Hours">
                  </b-form-input>
                </td>
                <td>
                  <button class="btn bg-red-gradient text-center"
                          @click="deleteLine(1)">
                    <i class="fa fa-trash-o"/></button>
                </td>
              </tr>
              <!-- Timesheet Line #2 -->
              <tr v-show="showLine2Prj1">
                <td>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form1L3.activity">
                  </v-select>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form1L3.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form1L3.hours"
                                name="Hours">
                  </b-form-input>
                </td>
                <td>
                  <button class="btn bg-red-gradient text-center"
                          @click="deleteLine(2)">
                    <i class="fa fa-trash-o"/></button>
                </td>
              </tr>
              <!-- Project 2 Start from here -->
              <tr v-show="showProject2">
                <td colspan="2">
                  <div class="projectDiv pl-3 pr-1  bg-blue-gradient">
                    <strong>Project: </strong> {{form2L1.projectID.name}}
                  </div>
                </td>
                <td>
                  <b-button type="button"
                            :disabled=disablePrjLineBtn2
                            class="bg-green-gradient
                            pb-0
                            pt-0"
                            @click="createLine(2)">
                    <i class="fa fa-plus"></i>
                    Add Line
                  </b-button>
                </td>
              </tr>
              <tr v-show="showProject2">
                <td>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form2L1.activity">
                  </v-select>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form2L1.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form2L1.hours"
                                name="Hours">
                  </b-form-input>
                </td>
              </tr>
              <!-- Project 2 -->
              <!-- Timesheet Line #2 -->
              <tr v-show="showLine1Prj2">
                <td>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form2L2.activity">
                  </v-select>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form2L2.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form2L2.hours"
                                name="Hours">
                  </b-form-input>
                </td>
                <td>
                  <button class="btn bg-red-gradient text-center"
                          @click="deleteLine(3)">
                    <i class="fa fa-trash-o"/></button>
                </td>
              </tr>
              <!-- Project 2 -->
              <!-- Timesheet Line #2 -->
              <tr v-show="showLine2Prj2">
                <td>
                  <v-select :options="Activity" label="AA"
                            placeholder="Search Activity"
                            title="Select an Activty"
                            v-model="form2L3.activity">
                  </v-select>
                </td>
                <td>
                  <v-select :options="CostCenter" label="CC"
                            placeholder="Search Cost Center"
                            title="Select a Cost Center"
                            v-model="form2L3.chargeBackCC">
                  </v-select>
                </td>
                <td>
                  <b-form-input type="number"
                                class="pb-1 pt-1"
                                title="Enter Hours"
                                v-model="form2L3.hours"
                                name="Hours">
                  </b-form-input>
                </td>
                <td>
                  <button class="btn bg-red-gradient text-center"
                          @click="deleteLine(4)">
                    <i class="fa fa-trash-o"/></button>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="pb-2 pt-1 text-center" v-if="showSubmit">
              <b-button type="submit"
                        class="btn bg-blue-gradient">
                <i class="fa fa-refresh fa-spin fa-fw"/>
                &nbsp;&nbsp;Submit
              </b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
  /* eslint-disable */
  import {projects} from '@/store/rallyProjects'
  import {costcenter} from '@/store/costCenter'
  import {activities} from '@/store/activities'

  var period_name = ''
  var start_date = ''
  var end_date = ''
  var counter = 0
  var lineCounterPrj1 = 1
  var lineCounterPrj2 = 1
  export default {
    data() {
      return {
        /* Flags for show/hide */
        showSubmit: false,
        showProject1: false,
        showProject2: false,
        showProject3: false,
        showLine1Prj1: false,
        showLine2Prj1: false,
        showLine1Prj2: false,
        showLine2Prj2: false,
        showLine3Prj2: false,
        showLine1Prj3: false,
        showLine2Prj3: false,
        showLine3Prj3: false,
        disablePrjLineBtn1: false,
        disablePrjLineBtn2: false,
        /* ./Flags for show/hide */
        modalShow: false,
        selectProject: '',
        Project: projects,
        CostCenter: costcenter,
        Activity: activities,
        form1L1: {
          projectID: '',
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        form1L2: {
          projectID: '',
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        form1L3: {
          projectID: '',
          workCategory: null,
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        form2L1: {
          projectID: '',
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        form2L2: {
          projectID: '',
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        form2L3: {
          projectID: '',
          workCategory: null,
          activity: '',
          chargeBackCC: '',
          hours: ''
        }
      }  // return end
    },
    methods: {
      submitTimesheet: function (event) {
        event.preventDefault()
        alert(JSON.stringify(this.form1L1) + JSON.stringify(this.form1L1) + '\n' + period_name
          + '\n' + start_date + '\n' + end_date + '\n' + this.SelectProjectID(this.form1L1.projectID))
      } ,
      passProject() {
        if (counter == 0){
          if (this.selectProject) {
            this.showProject1 = true
            this.showSubmit = true
            this.form1L1.projectID = this.selectProject
            this.selectProject = ''
            counter++
          }
        }
        else if (counter == 1){
          if (this.selectProject) {
            this.showProject2 = true
            this.form2L1.projectID = this.selectProject
            this.selectProject = ''
            counter++
          }
        }
      },
      createLine: function (index) {
        event.preventDefault()
        /* Project 1 Logic*/
        if (index == 1) {
          if (lineCounterPrj1 == 1) {
            this.showLine1Prj1 = true
            lineCounterPrj1++
          }
          else if (lineCounterPrj1 == 2) {
            this.showLine2Prj1 = true
            lineCounterPrj1++
            this.disablePrjLineBtn1 = true
          }
        }
        if (index == 2) {
          if (lineCounterPrj2 == 1) {
            this.showLine1Prj2 = true
            lineCounterPrj2++
          }
          else if (lineCounterPrj2 == 2) {
            this.showLine2Prj2 = true
            lineCounterPrj2++
            this.disablePrjLineBtn2 = true
          }
        }
      },
      deleteLine: function (val) {
        event.preventDefault()
        if (val == 1) {
          this.showLine1Prj1 = false
          this.disablePrjLineBtn1 = false
          this.form1L2.projectID = ''
          this.form1L2.activity = ''
          this.form1L2.chargeBackCC = ''
          this.form1L2.hours = ''
          lineCounterPrj1--
        }
        if (val == 2) {
          this.showLine2Prj1 = false
          this.disablePrjLineBtn1 = false
          this.form1L3.projectID = ''
          this.form1L3.activity = ''
          this.form1L3.chargeBackCC = ''
          this.form1L3.hours = ''
          lineCounterPrj1--
        }
        if (val == 3) {
          this.showLine1Prj2 = false
          this.disablePrjLineBtn2 = false
          this.form2L2.projectID = ''
          this.form2L2.activity = ''
          this.form2L2.chargeBackCC = ''
          this.form2L2.hours = ''
          lineCounterPrj2--
        }
        if (val == 4) {
          this.showLine2Prj2 = false
          this.disablePrjLineBtn2 = false
          this.form2L3.projectID = ''
          this.form2L3.activity = ''
          this.form2L3.chargeBackCC = ''
          this.form1L3.hours = ''
          lineCounterPrj2--
        }
      },
      SelectProjectID(obj) {
        return obj['id']
      },
    },
    /* ./ Method Close*/
  }
  /*JQuery Stuff*/
  /*Data Range Functionality*/
  $(function () {
    var start = moment().startOf('month');
    var end = moment().endOf('month');

    function cb(start, end) {
      period_name = (start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')).toString()
      start_date = start.format('MM/DD/YYYY').toString()
      end_date = end.format('MM/DD/YYYY').toString()
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
    }

    $('#reportrange').daterangepicker({
      autoApply: true,
      showCustomRangeLabel: false,
      startDate: start,
      endDate: end,
      ranges: {
        'Current Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);
    cb(start, end);
  })
</script>

<style scoped>
  body {
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
    background: #f8f8f8 !important;
  }

  .timesheetTableHeader {
    font-weight: bold;
    border-bottom: #0d6aad solid 2px;
  }

  input[type="text"] {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  input[type="number"] {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background: lightyellow;
  }

  .rounded {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .projectDiv {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

</style>
