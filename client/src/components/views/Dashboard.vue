<template>
  <!-- Main content -->
  <div>
    <div class="container-fluid">
      <!-- Main row -->
      <div class="row mt-2">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
          <div class="box box-warning ">
            <div class="box-header with-border text-center">
              <h3 class="box-title">Employee vs Contractor Spend</h3>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-md-10">
              <div class="chart-responsive">
            <canvas id="trafficBar"></canvas>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-6">
          <div class="box box-success">
            <div class="box-header with-border text-center">
              <h3 class="box-title">Resource by BU</h3>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-md-8">
                  <div class="chart-responsive">
                    <canvas id="languagePie"></canvas>
                  </div>
                </div>
                <div class="col-md-4">
                  <span class="text-bold">Bussiness Units</span>
                  <ul class="chart-legend clearfix">
                    <li><i class="fa fa-circle-o text-red"></i> JHAS</li>
                    <li><i class="fa fa-circle-o text-green"></i> Annuities</li>
                    <li><i class="fa fa-circle-o text-yellow"></i> RPS</li>
                    <li><i class="fa fa-circle-o text-aqua"></i> TRS</li>
                    <li><i class="fa fa-circle-o text-light-blue"></i> Insurance</li>
                    <li><i class="fa fa-circle-o text-gray"></i> SAS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ml-1 mr-1">
        <!-- TABLE:  -->
        <div class="box box-info">
          <div class="box-header with-border text-center">
            <h3 class="box-title">Value Streams</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="table-responsive">
              <table style="width: 100%">
                <thead>
                <tr class="TableHeader">
                  <th>Value Stream ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Budget</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                  <td>RPS TRS</td>
                  <td>
                   <h6> <span class="badge badge-primary">On Track</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$167,9000</span>
                      <span class="progress-number"><b>160</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-animated" style="width: 80%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                  <td>John Hancock/ JHAS</td>
                  <td>
                    <h6><span class="badge badge-danger">Over Budget</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$2,999,9000</span>
                      <span class="progress-number"><b>120</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-danger" style="width: 60%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>DevOps</td>
                  <td>
                    <h6><span class="badge badge-success">In Progress</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$3,967,9000</span>
                      <span class="progress-number"><b>180</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-green" style="width: 90%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>Automation</td>
                  <td>
                    <h6><span class="badge badge-danger">Over Budget</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$2,99,9000</span>
                      <span class="progress-number"><b>80</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-danger" style="width: 40%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR1848</a></td>
                  <td>Agile</td>
                  <td>
                    <h6><span class="badge badge-warning">Monitoring</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$2,08,9000</span>
                      <span class="progress-number"><b>140</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-warning" style="width: 70%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR7429</a></td>
                  <td>Digitization</td>
                  <td>
                    <h6><span class="badge badge-info">Closed</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$9,2000</span>
                      <span class="progress-number"><b>200</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-aqua" style="width: 100%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="pages/examples/invoice.html">OR9842</a></td>
                  <td>Mobile and Web Apps</td>
                  <td>
                    <h6><span class="badge badge-success">In Progress</span></h6>
                  </td>
                  <td>
                    <div class="progress-group">
                      <span class="progress-text">$1,08,9000</span>
                      <span class="progress-number"><b>100</b>/200</span>

                      <div class="progress sm">
                        <div class="progress-bar progress-bar-success" style="width: 50%"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Add New Project</a>
            <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Projects</a>
          </div>
          <!-- /.box-footer -->
        </div>
        <!-- /.box -->
        <!-- /.col -->

      </div>
      <!-- /.content -->
    </div>
  </div>
</template>


<script>
  /* eslint-disable */
  import Chart from 'chart.js'

  export default {
    data() {
      return {
        generateRandomNumbers(numbers, max, min) {
          var a = []
          for (var i = 0; i < numbers; i++) {
            a.push(Math.floor(Math.random() * (max - min + 1)) + max)
          }
          return a
        }
      }
    },
    computed: {
      coPilotNumbers() {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      personalNumbers() {
        return this.generateRandomNumbers(12, 1000000, 10000)
      },
      isMobile() {
        return (window.innerWidth <= 800 && window.innerHeight <= 600)
      }
    },
    mounted() {
      this.$nextTick(() => {
        var ctx = document.getElementById('trafficBar').getContext('2d')
        var config = {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'Employee',
              fill: false,
              borderColor: '#284184',
              pointBackgroundColor: '#284184',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.coPilotNumbers
            }, {
              label: 'Contractor',
              borderColor: '#4BC0C0',
              pointBackgroundColor: '#4BC0C0',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: this.personalNumbers
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            },
            tooltips: {
              mode: 'label',
              xPadding: 10,
              yPadding: 10,
              bodySpacing: 10
            }
          }
        }
        new Chart(ctx, config) // eslint-disable-line no-new
        var pieChartCanvas = document.getElementById('languagePie').getContext('2d')
        var pieConfig = {
          type: 'doughnut',
          data: {
            labels: ['JHAS', 'Annuities', 'Insurance'],
            datasets: [{
              data: [56.6, 37.7, 4.1],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'bottom',
              display: true
            }
          }
        }
        new Chart(pieChartCanvas, pieConfig) // eslint-disable-line no-new
      })
    }
  }
</script>
<style>

  .TableHeader {
    font-weight: bold;
    border-bottom: #0d6aad solid 2px;
  }

  tr {
    padding-bottom: 2px;
    border-bottom: #bbbbbb solid 1px;
  }
</style>
