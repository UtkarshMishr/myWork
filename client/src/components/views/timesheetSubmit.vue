<template>
  <div>
    <div class="alert alert-dismissible mt-2 mb-0 mr-2 ml-2 pb-1 pt-1"
         style="background: #d3e6f6; border-left: 5px solid #4d789e; ">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #5889b5;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 10pt">Submit new Timesheets, freeze timesheets are not editable.</span>
    </div>

      <div class="row mt-0 pl-2" style="width: 100%;">
        <!-- First Section, left side -->
        <div class="col-md-7 pr-0 pb-0 ">
          <div class="box box-primary bg-gray-light">
            <div class="box-header with-border" >
              <!-- Months content -->
             <!--
              <div class="row" v-for="(row, index) in rows">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <div class="info-box"
                       @click="evaluateState(index)"
                       style="cursor: pointer;">
                    <span class="info-box-icon bg-aqua"><i class="fa fa-calendar"></i></span>
                    <div class="info-box-content text-center pt-4">
                      <span class="info-box-text">{{row.Month}} {{year}}</span>
                      <span class="info-box-number"></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12"
                    v-if="row.showDiv">
                  <div class="box box-success">
                    <div class="box-header with-border pt-1 pb-1 text-center">
                      <h6>Timesheet - Unsubmitted</h6>
                    </div>
                    <div class="box-body text-center pt-2 pb-3">
                      <button type="submit"
                              class="btn btn-sm btn-success"
                              @click="createTimesheet(row.Duration)"
                      >Create Timesheet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              -->
              <div>
                <div class="box box-solid">
                  <div class="box-body mt-0">
                    <h6 style="background-color:#dedede;"
                        class="csRounded text-center pt-1 pb-1">
                      Create Timesheet
                    </h6>
                    <div class="media">
                      <div class="media-left">
                        <img src="../../../static/img/custom/tmsheet.png"
                             alt="Create User" class="media-object"
                             style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                      </div>
                      <div class="media-body">
                        <div class="mt-2 mb-0">
                          <p class="pull-right mt-3">
                            <button   class="btn btn-success btn-sm"
                                       data-toggle="modal" data-target="#modalCreate">
                              Create Timesheet
                            </button >
                          </p>
                        </div>
                        <h6 class="mt-0 ml-4">Submit Timesheet</h6>
                        <p class="ml-4" style="font-size: 14px">For editing submitted timesheet, go to Search timesheet page.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Report section -->
        <div class="col-md-5 pr-0 pb-0 ">
          <div class="box box-primary bg-gray-light">
            <div class="box-header with-border" >
              <div>
                <div class="box box-solid">
                  <div class="box-body mt-0">
                    <h6 style="background-color:#dedede;"
                        class="csRounded text-center pt-1 pb-1">
                      Generate Timesheet Report
                    </h6>
                    <div class="media">
                      <div class="media-left">
                        <img src="../../../static/img/custom/report_export.png"
                             alt="Create User" class="media-object"
                             style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                      </div>
                      <div class="media-body">
                        <div class="mt-2 mb-0">
                          <p class="pull-right mt-3">
                            <button   class="btn btn-success btn-sm"
                            >
                              Export
                            </button >
                          </p>
                        </div>
                        <p class="ml-4" style="font-size: 14px">Export timesheets to excel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- ./row -->
        <!-- This is second section, right side -->
        <div class="col-md-7 pl-2">
          <div class="box box-primary">
            <div class="csTableHeader">
              <h6>Time Logged against Projects</h6>
            </div>
            <!-- /.box-header -->
            <div class="box-body no-padding">
              <table class="table">
                <tr class="csTableHeaderRow">
                  <th style="width: 10px">#</th>
                  <th>Project</th>
                  <th>Cost Center</th>
                  <th style="width: 40px">Status</th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>DevOps Softwares</td>
                  <td>
                   6778
                  </td>
                  <td><span class="badge bg-green">Active</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>IT Operations VS</td>
                  <td>
                    8799
                  </td>
                  <td><span class="badge bg-yellow">On-Hold</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>RPS-Guardians</td>
                  <td>
                    5545
                  </td>
                  <td><span class="badge bg-light-blue">Completed</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Insurance-VS</td>
                  <td>
                    4533
                  </td>
                  <td><span class="badge bg-red">Cancelled</span></td>
                </tr>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
    <!-- Modal defination goes here -->
    <div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">Select Timesheet Month</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <select v-model="selectedMonth"
                    class="form-control csRounded paddingSetting"
                    placeholder="Select Month">
              <option v-for="row in yearsArray" v-bind:value="row" :key="row.Month">
                {{ row.Month}} - {{year}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning btn-sm" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success btn-sm" data-dismiss="modal"
                    @click="createTimesheet()">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        selectedMonth: '',
        year: '2018',
        yearsArray: [{Month: 'January', showDiv: false, showButton: false, Duration: '1-January-2018 : 31-January-2018' },
          {Month: 'February', showDiv: false, showButton: false, Duration: '1-February-2018 : 28-February-2018' },
          {Month: 'March', showDiv: false, showButton: false, Duration: '1-March-2018 : 31-March-2018' },
          {Month: 'April', showDiv: false, showButton: false, Duration: '1-April-2018 : 30-April-2018' },
          {Month: 'May', showDiv: false, showButton: false, Duration: '1-May-2018 : 31-May-2018' },
          {Month: 'June', showDiv: false, showButton: false, Duration: '1-June-2018 : 30-June-2018' },
          {Month: 'July', showDiv: false, showButton: false, Duration: '1-July-2018 : 31-July-2018' } ,
          {Month: 'August', showDiv: false, showButton: false, Duration: '1-August-2018 : 31-August-2018' },
          {Month: 'September', showDiv: false, showButton: false, Duration: '1-September-2018 : 30-September-2018' },
          {Month: 'October', showDiv: false, showButton: false, Duration: '1-October-2018 : 31-October-2018' },
          {Month: 'November', showDiv: false, showButton: false, Duration: '1-November-2018 : 30-November-2018' },
          {Month: 'December', showDiv: false, showButton: false, Duration: '1-December-2018 : 31-December-2018' }
        ]
      }  // return end
    },
    methods: {
      createTimesheet: function () {
       // alert(this.selectedMonth.Duration)
        this.$router.push({ name: 'timesheetCreate', params: { id: this.selectedMonth.Duration }})
      }
    },
  }

  /* Javascript */

</script>

<style scoped>
  body {
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
    background: #f8f8f8 !important;
  }


  .csTableHeader {
    padding: 4px 10px 2px 10px;
    background: #f5f5f6;
    border-bottom: #0d6aad solid 1px;
  }

  th {
    font-size: 1rem;
    font-weight: 500;
    color: #0d6aad;
    padding: 4px 10px 2px 10px !important;
    border-bottom: #0d6aad solid 1px;
  }

  tr td {
    font-size: 14px;
    padding: 4px 10px 2px 10px !important;
  }

  .csRounded {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }



  select {
    font-size: 14px;
    font-weight: 500;
    padding-left: 3px;
    padding-bottom: 5px;
  }

  .paddingSetting {
    max-height: 2rem;
  }

</style>
