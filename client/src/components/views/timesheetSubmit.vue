<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="alert alert-dismissible mt-2 mb-3 mr-2 ml-2 pb-1 pt-1"
         style="background: #93da8d; border-left: 5px solid #6cab67">
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
             style="border: 1px solid #36A831; border-top-width: 2px;background-color: #ffffff;">
          <div class="text-center h5 bg-olive pb-1">
            <span>Create Timesheet</span>
          </div>
          <!-- Date and time range -->
          <div class="form-group">
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

          <table id="myTable" class="table order-list">
            <thead>
            <tr class="timesheetTableHeader">
              <td>Project</td>
              <td>Value Stream</td>
              <td>Work Type</td>
              <td>Activity</td>
              <td>Charge Back</td>
              <td>Hours</td>
            </tr>
            </thead>
            <tbody>
            <tr v-if="show">
              <td>
                <b-form-input type="text"
                              required
                              v-model="form.projectName"
                              name="ProjectName">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form.valueStream"
                              name="ValueStream">
                </b-form-input>
              </td>
              <td>
                <b-form-select name="wrkcat"
                               :options="work_Category"
                               required
                               class="rounded"
                               v-model="form.workCategory">
                </b-form-select>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form.activity"
                              name="activity">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              v-model="form.chargeBackCC"
                              name="cbcc">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              required
                              v-model="form.hours"
                              name="Hours">
                </b-form-input>
              </td>
              <td>
              </td>
            </tr>
            <!-- Timesheet Line #2
            .
            .-->
            <tr v-if="show1">
              <td>
                <b-form-input type="text"
                              required
                              v-model="form1.projectName"
                              name="ProjectName">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form1.valueStream"
                              name="ValueStream">
                </b-form-input>
              </td>
              <td>
                <b-form-select name="wrkcat"
                               :options="work_Category"
                               required
                               class="rounded"
                               v-model="form1.workCategory">
                </b-form-select>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form1.activity"
                              name="activity">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              v-model="form1.chargeBackCC"
                              name="cbcc">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              required
                              v-model="form1.hours"
                              name="Hours">
                </b-form-input>
              </td>
              <td>
                <button class="btn bg-red-gradient text-center"
                        @click="deleteLine(1)">
                  <i class="fa fa-trash-o"/></button>
              </td>
            </tr>
            <!-- Timesheet Line #3
            .
            .-->
            <tr v-if="show2">
              <td>
                <b-form-input type="text"
                              required
                              v-model="form2.projectName"
                              name="ProjectName">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form2.valueStream"
                              name="ValueStream">
                </b-form-input>
              </td>
              <td>
                <b-form-select name="wrkcat"
                               :options="work_Category"
                               required
                               class="rounded"
                               v-model="form2.workCategory">
                </b-form-select>
              </td>
              <td>
                <b-form-input type="text"
                              v-model="form2.activity"
                              name="activity">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              v-model="form2.chargeBackCC"
                              name="cbcc">
                </b-form-input>
              </td>
              <td>
                <b-form-input type="number"
                              required
                              v-model="form2.hours"
                              name="Hours">
                </b-form-input>
              </td>
              <td>
                <button class="btn bg-red-gradient text-center"
                        @click="deleteLine(2)">
                  <i class="fa fa-trash-o"/></button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="pb-2 pt-1 text-right">
            <button id="addrow" type="button"
                    class="btn tn-block pl-3 pr-3 bg-olive-active"
                    @click="createLine">
              <i class="fa fa-plus" aria-hidden="true"></i> Add Line
            </button>
          </div>
          <div class="pb-2 pt-1 text-center">
            <button type="submit"
                    class="btn bg-blue-gradient">
              <i class="fa fa-refresh fa-spin fa-fw"/>
              &nbsp;&nbsp;Submit
            </button>
          </div>
        </div>
      </b-form>
    </div>

  </div>
</template>

<script>
  import {workcategory} from '@/store/timesheetStore'

  var period_name = ''
  var start_date = ''
  var end_date = ''
  var counter = 0
  export default {
    data() {
      return {
        work_Category: workcategory,
        show: true,
        form: {
          projectName: '',
          valueStream: '',
          workCategory: null,
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        show1: false,
        form1: {
          projectName: '',
          valueStream: '',
          workCategory: null,
          activity: '',
          chargeBackCC: '',
          hours: ''
        },
        show2: false,
        form2: {
          projectName: '',
          valueStream: '',
          workCategory: null,
          activity: '',
          chargeBackCC: '',
          hours: ''
        }
      }  // return end
    },
    methods: {
      submitTimesheet(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form) + JSON.stringify(this.form1) +'\n'+period_name
      +'\n'+start_date+'\n'+end_date)
      },
      createLine() {
        if(counter==0){
          console.log(counter)
          this.show1 = true
          counter++
        }
        else if(counter==1){
          console.log(counter)
          this.show2 = true
          counter++
        }
      },
      deleteLine(val) {
        if (val == 1){
          this.show1 = false
          this.form1.projectName = ''
          this.form1.valueStream = ''
          this.form1.workCategory = null
          this.form1.activity = ''
          this.form1.chargeBackCC = ''
          this.form1.hours = ''
          counter--
        }
        if (val == 2){
          this.show2 = false
          this.form2.projectName = ''
          this.form2.valueStream = ''
          this.form2.workCategory = null
          this.form2.activity = ''
          this.form2.chargeBackCC = ''
          this.form2.hours = ''
          counter--
        }
      }
    }
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
    font-family: Roboto;
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
  }

  .rounded {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

</style>
