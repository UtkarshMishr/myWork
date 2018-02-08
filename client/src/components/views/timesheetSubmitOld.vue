<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="text-center rounded h5 bg-olive-active mt-1 mr-2 ml-2 mr pb-1 pt-1">
      <span>Create Timesheet</span>
    </div>
    <div class="alert alert-dismissible mt-2 mb-3 mr-2 ml-2 pb-1 pt-1"
         style="background: #d8f0e8; border-left: 5px solid #6cab67">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #5e955a;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 10pt">Only current and last month timesheets are allowed to edit/create.</span>
    </div>
    <div>
      <b-form @submit="this.submitTimesheet">
        <div class="container-fluid mt-2 mb-3 mr-2 ml-2 rounded"
             style="border: 1px solid #36A831; border-top-width: 2px; background-color: #ffffff;">
          <!-- Date and time range -->
          <div class="form-group rounded mt-1 pt-2 pb-2 pl-2 pr-4"
               style="border: #777777 solid 1px; width: 20rem">
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
          <!-- ./Date and time range -->
          {{row}}
          <table id="myTable" class="table order-list">
            <thead>
            <tr class="timesheetTableHeader">
              <td style="width: 50rem">Project</td>
              <td style="width: 40rem">Activity</td>
              <td style="width: 20rem">Charge Back</td>
              <td style="width: 10rem">Hours</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, index) in rows">
              <td>
                <mwselect :options="Project"
                          v-model="row.projectName"
                          style="width: 35rem"
                ></mwselect>
              </td>
              <td>
                <mwselect :options="Activity"
                          v-model="row.activity"
                          style="width: 30rem"
                ></mwselect>
              </td>
              <td>
                <mwselect :options="CostCenter"
                          v-model="row.chargeBackCC"
                          style="width: 15rem"
                ></mwselect>
              </td>
              <td>
                <b-form-input type="number"
                              class="pb-1 pt-1"
                              required
                              v-model="row.hours"
                              name="Hours">
                </b-form-input>
              </td>
              <td>
                <a v-on:click="removeElement(index);" style="cursor: pointer">Remove</a>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="pb-2 pt-1 text-right">
            <b-button id="addrow" type="button"
                      class="btn tn-block pl-3 pr-3 bg-olive-active"
                      @click="createLine">
              <i class="fa fa-plus" aria-hidden="true"></i> Add Line
            </b-button>
          </div>
          <div class="pb-2 pt-1 text-center">
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
  var counter = 0
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
        alert(JSON.stringify(this.form) + JSON.stringify(this.form1) + '\n' + period_name
          + '\n' + start_date + '\n' + end_date + '\n' + this.SelectProjectID(this.form.projectID))
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
        this.rows.splice(index, 1);
      },
      SelectProjectID(obj) {
        return obj['id']
      }
    },
    /* ./ Method Close*/
    /*Starting Computed*/
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
  div {
    font-family: Roboto;
  }

  table {
    font-family: Roboto;
  }

  tr {
    padding-bottom: 2px;
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
    max-width: 50em;
    max-height: 10em;
    font-size: 13px;
    padding-right: 2px;
    padding-left: 2px;
  }

  .activityDiv {
    max-width: 40em;
    max-height: 10em;
    font-size: 13px;
    padding-right: 2px;
    padding-left: 2px;
  }

  .costCenterDiv {
    max-width: 20em;
    max-height: 10em;
    font-size: 13px;
    padding-right: 2px;
    padding-left: 2px;
  }

</style>
