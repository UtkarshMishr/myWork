<template>
  <div>
    <div class="m-2 csRounded csouterBoxBlue">
      <div style="background-color:#0034e5; padding-bottom: 1px; padding-top: 4px; color: #ffffff"
           class="csRounded text-center mt-1 mb-1">
        <h6> Create Project </h6>
      </div>
      <!-- Form Start -->
      <form class="form-horizontal">
        <div class="row">
          <!-- Left Part -->
          <div class="col-8 col-sm-8 col-md-8 col-lg-8">
            <!-- Project Summary header -->
            <div class="csformSectionHeaderGray">
              <div>Project Summary</div>
            </div>
            <!-- Project Summary section -->
            <div class="container-fluid pt-1">
              <div class="row">
                <div class="form-group csform-group col-lg-12 col-md-12 col-sm-12">
                  <div class="row">
                    <label for="project_name"
                           class="col-lg-2 col-md-2 col-sm-2 col-lg-2 col-form-label pr-0 pl-1">Project Name:</label>
                    <div class="col-10 col-md-10 col-sm-10 col-lg-10">
                      <input type="text"
                             class="form-control mr-0"
                             id="project_name"
                             v-model="form.projectName">
                    </div>
                  </div>
                  <div class="row mt-1">
                    <label class="col-lg-2 col-md-2 col-sm-2 col-lg-2 col-form-label pr-0 pl-1">Project Description:</label>
                    <div class="col-10 col-md-10 col-sm-10 col-lg-10">
                      <textarea class="form-control pl-1"
                                id="project_description"
                                rows="3"
                                v-model="form.projectDescription">
                        </textarea>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- ./Left Part -->
          <!-- Right Part -->
          <div class="col-4 col-sm-4 col-md-4 col-lg-4"
          style="padding-left: 0 !important; padding-right: 17px !important;">
            <div class="csformSectionHeaderBlue">
              <div>Project Cost</div>
            </div>
                <div class="input-group mt-1">
                  <span class="input-group-addon bg-gray csFontLabel  pb-0 fa fa-dollar"
                        style="width: 135px">
                    Estimated Cost:</span>
                  <input id="est_prj_cost"
                         type="text"
                         class="form-control"
                         v-model="form.projectEstCost">
                </div>
                <div class="input-group mt-1">
                   <span class="input-group-addon bg-gray csFontLabel pb-0 fa fa-dollar"
                         style="width: 135px">
                    Approved Cost:</span>
                  <input id="app_prj_cost"
                         type="text"
                         class="form-control"
                         v-model="form.projectAppBudget">
                </div>
                <div class="input-group mt-1">
                   <span class="input-group-addon bg-gray csFontLabel  pb-0 fa fa-dollar"
                   style="width: 135px">
                    Total Cost:</span>
                  <input id="prj_total_cost"
                         type="text"
                         class="form-control"
                         disabled
                         v-model="form.projectTotalCost">
                </div>
          </div>
        </div>
        <!-- ./ First row (Project Summary)-->
        <div class="row">
          <div class="col-12">
            <!-- Project Summary header -->
            <div class="csformSectionHeaderGray">
              <div>Project Details</div>
            </div>
            <div class="container-fluid pt-1">
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Start Date:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_start_date"
                             v-model="form.projectStartDate">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">End Date:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_end_date"
                             v-model="form.projectEndDate">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Line #2 -->
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Cost Center:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_cost_center"
                             v-model="form.costcenter">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Project Manager:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_manager"
                             v-model="form.projectManagerName">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Line #3 -->
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Business Group:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_bus_group"
                             v-model="form.projectBG">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Business Unit:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_bus_unit"
                             v-model="form.projectBU">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./ Second row  (Project Details)-->
        <!-- Third Row Rally Details -->
        <div class="row">
          <div class="col-12">
            <!-- Project Summary header -->
            <div class="csformSectionHeaderGray">
              <div>Rally Details (Agile Project)</div>
            </div>
            <div class="container-fluid pt-1">
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Value Stream:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_rally_vs"
                             v-model="form.projectRallyVSName">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Value Stream ID:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_rally_vs_id"
                             v-model="form.projectRallyVSID">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Line #2 -->
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">ART Name:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_ART_Name"
                             v-model="form.projectRallyARTName">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">ART ID:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_ART_ID"
                             v-model="form.projectRallyARTID">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Line #3 -->
              <div class="row">
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Rally Project Name:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_rally_prj_name"
                             v-model="form.projectRallyPrjName">
                    </div>
                  </div>
                </div>
                <div class="form-group csform-group col-6">
                  <div class="row">
                    <label class="col-3 col-form-label pl-1 pr-0">Rally Project ID:</label>
                    <div class="col-9">
                      <input type="text"
                             class="form-control"
                             id="prj_rally_prj_ID"
                             v-model="form.projectRallyPrjID">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./ Third row  (Rally Details)-->
        <!-- Buttons -->
        <div class="text-center mt-3 mb-1">
          <button type="button" class="btn btn-warning mr-2 csFontbutton" data-dismiss="modal">
            Reset</button>
          <button type="submit" class="btn btn-success csFontbutton" data-dismiss="modal">
            Create</button>
        </div>
      </form>
      <!-- ./Form End -->
    </div>
    <!-- ./box -->

  </div>

</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        form: {
          projectName: '',
          projectDescription: '',
          projectEstCost: '',
          projectAppBudget: '',
          projectTotalCost: '',
          projectStartDate: '',
          projectEndDate: '',
          projectCostCenter: '',
          projectBG: '',
          projectBU: '',
          projectManagerID: '',
          projectManagerName: '',
          projectRallyVSID: '',
          projectRallyVSName: '',
          projectRallyARTID: '',
          projectRallyARTName: '',
          projectRallyPrjID: '',
          projectRallyPrjName: '',

        }
      }
    }

  }
</script>

<style>

</style>
