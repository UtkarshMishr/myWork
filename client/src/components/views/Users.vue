<template>
  <div class="mt-2 mr-1 mb-1 ml-1">
    <b-card bg-variant="primary" text-variant="white">
      <div class="text-center h5 text-bold"><span class="fa fa-user">&nbsp;&nbsp;Create User</span></div>
      <b-form @submit="onSubmit" @reset="onReset" class="form-control" v-if="show">
        <b-container>
          <b-row>
            <b-col>
              <!-- Username -->
              <b-form-group id="label1"
                            label="Username:"
                            class="font-weight-bold">
                <b-form-input id="userfield1"
                              type="text"
                              v-model="form.username"
                              rounded
                              required
                              placeholder="Enter name">
                </b-form-input>
              </b-form-group>
              <!-- ./Username -->
            </b-col>
            <b-col>
              <!-- Employee ID -->
              <b-form-group id="label2"
                            label="Employee ID:"
                            class="font-weight-bold">
                <b-form-input id="userfield2"
                              type="text"
                              v-model="form.employeeID"
                              required
                              placeholder="Enter Employee or IQN ID">
                </b-form-input>
              </b-form-group>
              <!-- ./Employee ID -->
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="lable3"
                            label="FullName:"
                            class="font-weight-bold">
                <b-form-input id="userfield3"
                              type="text"
                              v-model="form.fullname"
                              required>
                </b-form-input>
                <!-- ./FullName -->
                <!-- Email Address -->
                <b-form-group id="label4"
                              label="Email address:"
                              class="font-weight-bold">
                  <b-form-input id="userfield4"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email">
                  </b-form-input>
                </b-form-group>
                <!-- ./Email Address -->
              </b-form-group>

            </b-col>

            <!-- Password Details -->
            <b-col>
              <b-card style="background:#d7dae0">
                <b-form-group class="mb-0 mr-3 text-navy">
                  <b-form-group label="Password:"
                                label-class="text-sm-right font-weight-bold pl-2"
                                label-for="nestedStreet">
                    <b-form-input id="password1"
                                  class="ml-2"
                                  v-model="form.password"
                                  required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group label="Confirm Password:"
                                label-class="text-sm-right font-weight-bold pl-2"
                                label-for="nestedStreet">
                    <b-form-input id="password2"
                                  class="ml-2"
                                  v-model="form.cpassword"
                                  required>
                    </b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-card>
            </b-col>
            <!-- ./Password Details -->
          </b-row>
          <b-row>
            <b-col>
              <!-- Business Unit -->
              <b-form-group id="label5"
                            label="Business Unit:"
                            class="font-weight-bold">
                <b-form-select id="userfield5"
                               :options="BU"
                               required
                               v-model="form.businessUnit">
                </b-form-select>
              </b-form-group>
              <!-- ./Business Unit -->
            </b-col>
            <b-col>
              <!-- Disabled -->
              <b-form-checkbox-group v-model="form.checked"
                                     id="disabled"
                                     class="mt-4 pl-4 pr-5 pt-2 font-weight-bold">
                <b-form-checkbox value="true">Disabled</b-form-checkbox>
              </b-form-checkbox-group>
              <!-- ./Disabled -->
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <!-- Division -->
              <b-form-group id="label6"
                            label="Division:"
                            class="font-weight-bold">
                <b-form-select id="userfield6"
                               :options="DIVISION"
                               required
                               v-model="form.division">
                </b-form-select>
              </b-form-group>
              <!-- ./Divsion -->
            </b-col>
            <b-col>
              <!-- Role -->
              <b-form-group id="label7"
                            label="Role:"
                            class="font-weight-bold">
                <b-form-select id="userfield7"
                               :options="ROLE"
                               required
                               v-model="form.role">
                </b-form-select>
              </b-form-group>
              <!-- ./Role -->
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <!-- Cost Center -->
              <b-form-group id="lable8"
                            label="Cost Center:"
                            class="font-weight-bold">
                <b-form-input id="userfield8"
                              type="text"
                              v-model="form.costcenter">
                </b-form-input>
              </b-form-group>
              <!-- ./Cost Center -->
            </b-col>
            <b-col>
              <!-- Region -->
              <b-form-group id="label9"
                            label="Region:"
                            class="font-weight-bold">
                <b-form-select id="userfield9"
                               :options="REGION"
                               required
                               v-model="form.region">
                </b-form-select>
              </b-form-group>
              <!-- ./Region -->
            </b-col>
          </b-row>

        </b-container>
        <div class="text-center">
          <b-button type="submit" class="btn btn-success center-block">Submit</b-button>
          <b-button type="reset" variant="btn btn-warning center-block">Reset</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          businessUnit: null,
          division: null,
          role: null,
          region: null,
          checked: []
        },
        BU: [
          {text: 'Select One', value: null},
          'IRM', 'JHAS', 'Insurance', 'TRS', 'RPS', 'ANNUITIES'
        ],
        DIVISION: [
          {text: 'Select One', value: null},
          'DIV1', 'DIV2', 'DIV3', 'DIV4', 'DIV5', 'DIV5'
        ],
        ROLE: [
          {text: 'Select One', value: null},
          'USER', 'MANAGER', 'SUPER USER', 'ADMINISTRATOR'
        ],
        REGION: [
          {text: 'Select One', value: null},
          'REG1', 'REG2', 'REG3', 'REG4', 'REG5', 'REG5'
        ],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        });
      }
    }
  }
</script>

<style>
  .datetime-picker input {
    height: 4em !important;
  }

  input[type="text"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="password"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  input[type="email"] {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
</style>
