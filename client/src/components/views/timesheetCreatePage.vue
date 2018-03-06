<template>
  <div>

    <div class="alert alert-dismissible mt-2 mb-2 mr-2 ml-2 pb-1 pt-1"
         style="background: #00a65a; border-left: 5px solid #00733e; color: #ffffff">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #ffffff;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 11pt">Blank timesheet lines are not allowed.</span>
    </div>
    <div>
      <form @submit="submitTimesheet" class="ml-2 mr-2">
        <div class="box box-success">
          <div class="box-header  p-1">
            <div class="bg-gray-light p-1"
                 style="background: #d8eafc; border-bottom: 2px solid #6494c4; font-weight: 500">Create Timesheet
            </div>
          </div>

          <div class="box-body">
            <div class="row">
            <div class="col-md-5">
              <div class="box box-solid box-default" style="background: #F1EEED; font-size: 14px;">
                <div class="box-body">
                  <div class="p-1">
                    <span class="font-weight-bold">TimeSheet Period: </span>
                    <span class="p-1" style="margin-right: 20px; background: #d8d6d5;">{{id}}</span>
                  </div>
                  <div class="m-1">
                    <span class="font-weight-bold">TimeSheet Status: </span>
                    <span class="p-1" style="margin-right: 20px; font-size: 14px; background: #d8d6d5;">Not Submitted</span>
                  </div>
                </div>
              </div>
              <!-- /.box -->
            </div>
              <div class="col-md-7">
                  <div class="box box-solid box-default" style="background: #F1EEED;">
                    <div class="box-body pt-1">
                      <code>Allowed Hours: {{totalMonthHours}} (hours)</code>
                      <span class="badge badge-warning" style="float: right">100%</span>
                      <div class="progress progress-xs">
                        <div class="progress-bar progress-bar-warning" role="progressbar"
                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                             style="width: 100%">
                        </div>
                      </div>
                      <code>Time Entered: {{totalHours}} (hours)</code>
                     <span class="badge badge-success mt-1" style="float: right">{{activeWidth}}</span>
                      <div class="progress progress-xs">
                        <div class="progress-bar-animated progress-bar-success progress-bar-striped" role="progressbar"
                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                             v-bind:style="{ width: activeWidth }">
                        </div>
                      </div>
                    </div>
                    <!-- /.box-body -->
                  </div>
                  <!-- /.box -->
              </div>
            </div>
            <!-- ./row -->

            <table id="myTable" class="table">
              <thead>
              <tr class="timesheetTableHeader">
                <th style="width: 50% !important;">Project</th>
                <th style="width: 30% !important;">Activity</th>
                <th style="width: 15% !important;">Charge Back</th>
                <th style="width: 5% !important;">Hours</th>
              </tr>
              </thead>
              <div class="mt-2"></div>
              <tbody>
              <tr v-for="(row, index) in rows" :row-data="row" :key="row.id" :uniqueId="index">
                <td>
                  <mwselect :options="Project"
                            v-model="row.projectName"
                  ></mwselect>
                </td>
                <td>
                  <mwselect :options="Activity"
                            v-model="row.activity"
                  ></mwselect>
                </td>
                <td>
                  <mwselect :options="CostCenter"
                            v-model="row.chargeBackCC"
                  ></mwselect>
                </td>
                <td>
                  <input type="number"
                                class="text-right"
                         style="max-height: 30px !important; "
                                v-model="row.hours"
                                name="Hours">
                </td>
                <td>
                  <a @click="removeElement(index)" style="cursor: pointer">
                    <i class="fa fa-trash-o pt-1" style="color:red; text-shadow: 1px 1px 1px #ccc;
    font-size: 1.5em;" title="Delete Line"
                    ></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
          <hr style="width: 98%; background: #eeeeee; height: 2px">
          <div class="row">
            <div class="col-md-6 pb-1 pt-1 pl-4 text-left">
              <button @click.prevent="createLine"
                        class="btn bg-green-gradient btn-sm">
                <i class="fa fa-plus" aria-hidden="true"></i> Add Line
              </button>
            </div>
            <div class="col-md-6 pr-4">
              <div class="row pr-4 mr-0">
              <div class="col-md-9 pt-1 text-right text-bold">Total Hours: &nbsp</div>
              <div class="col-md-3 p-0  m-0 box box-footer"
                   style="border-bottom: #74b1f4 solid 2px">
                <div class="input-group">
                  <span class="input-group-addon bg-blue text-bold pb-1 pt-1 pl-2 pr-2">
                    <i class="fa fa-clock-o"></i>
                  </span>
                  <input type="text" disabled class="form-control pb-1 pt-1 pr-3 text-right text-bold"
                         style="position: relative; z-index: 0"
                         :value=totalHours>
                </div>
              </div>
              </div>
            </div>
            </div>
          <div class="pb-2 pt-1 text-center">
            <button type="submit"
                      class="btn bg-blue-gradient btn-sm">
              <i class="fa fa-refresh fa-spin fa-fw"/>
              &nbsp;&nbsp;Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {projects} from '@/store/rallyProjects'
  import {costcenter} from '@/store/costCenter'
  import {activities} from '@/store/activities'
  import mwselect from '@/components/plugins/mw-select'
  import swal from 'sweetalert2'

  var period_name = ''
  var start_date = ''
  var end_date = ''
  export default {
    props: ['id'],
    components: {
      mwselect
    },
    data() {
      return {
        totalMonthHours: 180,
        activeWidth: '0%',
        lineNumber: 0,
        Project: projects,
        CostCenter: costcenter,
        Activity: activities,
        rows: []
      }  // return end
    },
    methods: {
      submitTimesheet(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.rows))
      },
      createLine() {
        var elem = document.createElement('tr');
        this.rows.push({
          id: this.lineNumber++,
          projectName: "",
          activity: "",
          chargeBackCC: "",
          hours: ""
        })
      },
      removeElement: function (index) {
        swal({
          title: '<i class="fa fa-exclamation-triangle text-warning pr-3"></i>Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
          background: '#F5F5F5',
          width: '30rem',
          padding: '.5rem',
          cancelButtonClass: 'btn btn-sm p-2 csFontText',
          confirmButtonClass: 'btn btn-sm p-2 csFontText'
        }).then((result) => {
          if (result.value) {
            this.rows.splice(index, 1)
            this.lineNumber--
          }
          else {

          }
        })


      }
    },
    /* ./ Method Close*/
    /*Starting Computed*/
    computed: {
      totalHours: function () {
        var sum = 0
        if (this.rows.length >= 0) {
          for (var i = 0; i < this.rows.length; i++) {
            sum = sum + (isNaN(parseInt(this.rows[i].hours)) ? 0 : parseInt(this.rows[i].hours))
          }

          this.activeWidth = Math.round((sum/this.totalMonthHours)*100)+'%'
        }
        return sum
      },

    }
  }

</script>

<style scoped>

  table {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
  }

  tr, td {
    border-spacing: 0px !important;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
    padding-left: 2px !important;
    padding-right: 2px !important;
    font-size: 14px;
    font-weight: 500;
    font-family: Roboto;
    margin-left: 0px;
  }

  th {
    font-weight: bold;
    font-size: 15px !important;
    font-weight: 500;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    border-bottom: #0d6aad solid 2px !important;
    color: #0d6aad !important;
  }

  .csRounded {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .box2 {
    display: inline-block;
    width: 200px;
    background: #ffffff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding: 2px 2px 2px 5px;
    border-top: #bd4147 solid 3px;
    margin: 10px 0px 10px 10px;
  }

</style>
