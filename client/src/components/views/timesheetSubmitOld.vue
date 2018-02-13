<template>
  <div>

    <div id="myModal" class="modal fade" role="dialog" :show="true">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

    <div class="alert alert-dismissible mt-2 mb-3 mr-2 ml-2 pb-1 pt-1"
         style="background: #00a65a; border-left: 5px solid #00733e; color: #ffffff">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #ffffff;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 10pt">Only current and last month timesheets are allowed to edit/create.</span>
    </div>

    <div>
      <b-form @submit="submitTimesheet" class="ml-2 mr-2">
        <div class="box box-success">
          <div class="box-header">
            <h5 class="bg-gray-light pl-3 pt-1 pb-1">Create Timesheet
            </h5>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="myTable" class="table">
              <thead>
              <tr class="timesheetTableHeader">
                <th style="width: 50%">Project</th>
                <th style="width: 30%">Activity</th>
                <th style="width: 10%">Charge Back</th>
                <th style="width: 10%">Hours</th>
              </tr>
              </thead>
              <div class="mt-2"></div>
              <tbody>
              <tr v-for="(row, index) in rows" :row-data="row" :key="row" :uniqueId="index">
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
                  <b-form-input type="number"
                                class="pb-1 pt-1 text-right"
                                required
                                v-model="row.hours"
                                name="Hours">
                  </b-form-input>
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
            <div class="col-md-5 pb-1 pt-1 ml-4 text-left">
              <b-button @click="createLine"
                        class="btn bg-green-gradient btn-sm">
                <i class="fa fa-plus" aria-hidden="true"></i> Add Line
              </b-button>
            </div>
            <div class="col-md-4 pt-1 text-right text-bold">Total Hours: &nbsp</div>
            <div class="col-md-2 p-0 box box-footer"
                 style="border-bottom: #74b1f4 solid 2px">
              <div class="input-group">
                  <span class="input-group-addon text-bold pb-1 pt-1">
                    <i class="fa fa-clock-o"></i>
                  </span>
                <input type="text" disabled class="form-control pb-1 pt-1 text-right text-bold"
                       style="position: relative; z-index: 0"
                       :value=totalHours>
              </div>
            </div>
          </div>
          <div class="pb-2 pt-1 text-center">
            <b-button type="submit"
                      class="btn bg-blue-gradient btn-sm">
              <i class="fa fa-refresh fa-spin fa-fw"/>
              &nbsp;&nbsp;Submit
            </b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {projects} from '@/store/rallyProjects'
  import {costcenter} from '@/store/costCenter'
  import {activities} from '@/store/activities'
  import mwselect from '@/components/plugins/mw-select'

  var period_name = ''
  var start_date = ''
  var end_date = ''
  export default {
    components: {
      mwselect
    },
    data() {
      return {
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
          projectName: "",
          activity: "",
          chargeBackCC: "",
          hours: ""
        })
      },
      removeElement: function (index) {
        alert(index)
        this.rows.splice(index, 1);

      }
    },
    /* ./ Method Close*/
    /*Starting Computed*/
    computed: {
      totalHours: function () {
        var sum = 0
        if (this.rows.length > 0) {
          for (var i = 0; i < this.rows.length; i++) {
            sum = sum + (isNaN(parseInt(this.rows[i].hours)) ? 0 : parseInt(this.rows[i].hours))
          }
        }
        return sum
      }
    }
  }

</script>

<style scoped>
  div {
    font-family: Roboto;
  }

  table {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
  }

  tr, td {
    border-spacing: 0px !important;
    padding-top: 3px !important;
    padding-bottom: 3px !important;
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
