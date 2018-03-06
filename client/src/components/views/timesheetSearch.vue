<template>
  <div>
    <div class="alert alert-dismissible mt-2 mb-1 mr-2 ml-2 pb-1 pt-1"
         style="background: #00a65a; border-left: 5px solid #00733e; color: #ffffff">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="fa fa-exclamation-circle" aria-hidden="true" style=" color: #ffffff;"></span>
      <strong class="alert-heading text-bold pr-3" aria-hidden="true"> Note!</strong>
      <span style="font-size: 11pt">Timesheet search restricted to self.</span>
    </div>
    <section>
      <div class="ml-2 mr-2">
        <div class="box box-success">
          <div class="box-header p-1">
            <div class="bg-gray-light p-1"
                 style="background: #d8eafc; border-bottom: 2px solid #6494c4; font-weight: 500">Search Timesheet
            </div>
          </div>
          <!-- Form Start -->
          <form class="form-horizontal">
            <div class="container-fluid row">
              <div class="col-lg-2 col-sm-2 pl-2 pr-2">
                <div class="media">
                  <div class="media-left">
                    <img src="../../../static/img/custom/tmsheetSearch.png"
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
                      <label class="col-3 col-form-label pl-1 pr-0">Year:</label>
                      <div class="col-9">
                        <select v-model="yearSelected"
                                class="form-control csRounded paddingSetting">
                          <option v-for="row in yearsArray" v-bind:value="row.valueOf()">
                            {{ row.valueOf() }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-6">
                    <div class="row">
                      <label class="col-3 col-form-label pl-1 pr-0">Status:</label>
                      <div class="col-9">
                        <dropdown :options="tsStatus"
                                  v-model="statusSelected"></dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ./First Row -->
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

  export default {
    components: {
      'dropdown': mwdropdown
    },
    data() {
      return {
        yearSelected: '',
        statusSelected: '',
        yearsArray: [],
        tsStatus: [
          {id:123	,	name: 'All'},
          {id:124	,	name: 'Freeze'},
          {id:125	,	name: 'Submitted'}
        ]
      }  // return end
    },
    beforeMount() {
      this.fetchYears()
    },
    methods: {
      fetchYears: function () {
        var currentYear = new Date().getFullYear()
        var startYear = currentYear - 5;

        while (startYear <= currentYear) {
          this.yearsArray.push(startYear++)
        }
        return true
      }
    }
  }
</script>

<style scoped>
  body {
    font-family: Roboto, Open Sans, helvetica, arial, sans-serif;
  }

  label {
    font-size: 15px;
    font-weight: 500;
    color: #001f3f;
    padding-left: 3px;
  }

  select {
    font-size: 14px;
    font-weight: 500;
    padding-left: 3px;
  }

  button {
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 15px;
    font-weight: 500;
    max-width: 150px;
  }

  .paddingSetting {
    max-height: 2rem;
  }

  .csRounded {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

</style>
