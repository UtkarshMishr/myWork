<template>
  <div>
    <div class="alert alert-dismissible mt-2 mb-0 mr-2 ml-2 pb-1 pt-1"
         style="background: #d3e6f6; border-left: 5px solid #4d789e; ">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #5889b5;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 10pt">Duplicate project are not allowed in the system.</span>
    </div>

    <div class="row mt-2 pl-2" style="width: 100%">
      <!-- First Section, left side -->
      <div class="col-md-7 pr-0 pb-0 ">
        <div class="box box-warning bg-gray-light">
          <div class="box-header with-border" >
            <div>
              <div class="box box-solid">
                <div class="box-body mt-0">
                  <h6 style="background-color:#dedede;"
                      class="csRounded text-center pt-1 pb-1">
                    Create Project
                  </h6>
                  <div class="media">
                    <div class="media-left">
                      <img src="../../../static/img/custom/project-management.png"
                           alt="Create User" class="media-object"
                           style="width: 90px;height: auto;border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,.15);">
                    </div>
                    <div class="media-body">
                      <div class="mt-2 mb-0">
                        <p class="pull-right mt-3">
                          <button   class="btn btn-success btn-sm"
                                    type="submit"
                                    @click="createProject()">
                            Create Project
                          </button >
                        </p>
                      </div>
                      <h6 class="ml-4">Submit new Project</h6>
                      <p class="ml-4" style="font-size: 14px">For editing existing project, go to Search project page.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Middle section -->
      <div class="col-md-5 pr-0 pb-0 ">
        <div class="box box-warning bg-gray-light">
          <div class="box-header with-border" >
            <div>
              <div class="box box-solid">
                <div class="box-body mt-0">
                  <h6 style="background-color:#dedede;"
                      class="csRounded text-center pt-1 pb-1">
                    Generate Project Report
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
                      <p class="ml-4" style="font-size: 14px">Export projects to excel</p>
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
      <div class="col-md-3 pl-2">
        <div class="box box-warning">
          <div class="csTableHeader text-center">
            <h6>Project by BU's</h6>
          </div>
          <canvas id="projectbyBU"></canvas>
        </div>
        <!-- /.box -->
      </div>


  </div>
</template>

<script>
  /* eslint-disable */
  import Chart from 'chart.js'
  export default {
    data() {
      return {
        temp: ''
      }

    },
    methods: {
      createProject: function () {
        // alert(this.selectedMonth.Duration)
        this.$router.push({ name: 'projectCreate'})
      }
    },
    mounted() {
      this.$nextTick(() => {
        var pieChartCanvas = document.getElementById('projectbyBU').getContext('2d')
        var pieConfig = {
          type: 'doughnut',
          data: {
            labels: ['JHAS', 'Annuities', 'Insurance','RPS'],
            datasets: [{
              data: [80, 40, 22, 45],
              backgroundColor: ['#00a65a', '#f39c12', '#00c0ef','#354b87'],
              hoverBackgroundColor: ['#00a65a', '#f39c12', '#00c0ef', '#354b87']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: !this.isMobile,
            legend: {
              position: 'right',
              display: true
            }
          }
        }
        new Chart(pieChartCanvas, pieConfig) // eslint-disable-line no-new
      })
    }
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

  .csRounded {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .csTableHeader {
    padding: 4px 10px 2px 10px;
    background: #f5f5f6;
    border-bottom: #0d6aad solid 1px;
  }


</style>
