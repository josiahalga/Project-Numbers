<template>
  <div class="container" id="container">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="4"
      >
        <div class="title">
          <h1>City Alliance Church<br>Membership Form</h1>
          <span>Please fill out necessarry details</span>
        </div>
        <v-card ref="form">
          <v-card-text>
            <v-text-field variant="outlined"
              class="textfield"
              ref="lastname"
              v-model="last_name"
              :rules="[() => !!last_name || 'This field is required']"
              :error-messages="errorMessages"
              label="Last Name"
              required
            ></v-text-field>

            <v-container class="suffix" fluid>
              <p>Suffix: </p>
              <v-radio-group v-model="suffix">
                <v-radio label="Jr." value="Jr."></v-radio>
                <v-radio label="Sr." value="Sr."></v-radio>
                <v-radio label="II" value="II"></v-radio>
              </v-radio-group>
              <v-btn @click="clearSuffix">Clear</v-btn>
            </v-container>

            <v-text-field variant="outlined"
              ref="firstname"
              v-model="first_name"
              :rules="[() => !!first_name || 'This field is required']"
              :error-messages="errorMessages"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field variant="outlined"
              ref="middlename"
              v-model="middle_name"
              :error-messages="errorMessages"
              label="Middle Name"
            ></v-text-field>

            <VDatePicker v-model="birthdate">
              <template #default="{ togglePopover }">
                <v-text-field
                  v-model="birthdate"
                  label="Birthdate"
                  append-inner-icon="mdi-calendar-blank"
                  readonly
                  v-on="on"
                  v-on:click:append-inner="togglePopover"
                  variant="outlined"
                  placeholder="YYYY-MM-DD"
                ></v-text-field>
              </template>
            </VDatePicker>

            <v-text-field variant="outlined"
              ref="status"
              v-model="status"
              :rules="[() => !!status || 'This field is required']"
              :error-messages="errorMessages"
              label="Status"
              required
            ></v-text-field>
          </v-card-text>
          <v-btn color="primary" @click="submitForm">Submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService';

  export default {
    data () {
      return {
        last_name: null,
        suffix: null,
        first_name: null,
        middle_name: null,
        birthdate: null,
        status: null,
        errorMessages: null,
        formHasErrors: false,
        modal: false,
      }
    },
    watch: {
      birthdate(value) {
        console.log('Lastname change to', value)
      }
    },
    methods: {
      clearSuffix() {
        this.suffix = null,
        this.birthdate = Date(this.birthdate).toISOString().split('T')[0]
      },

      setDate () {
        this.modal = false
      },

      async submitForm () {
        const response = await AuthenticationService.register_member({
          last_name: this.last_name,
          suffix: this.suffix,
          first_name: this.first_name,
          middle_name: this.middle_name,
          birthdate: this.birthdate.toISOString().split('T')[0],
          status: this.status
        })
        console.log(response.data)
        console.log(this.last_name, this.suffix, this.first_name, this.middle_name )
      }

    }
  }
</script>

<style scoped>
  #container {
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    padding: 40px;
  }

  #container .v-btn{
    margin: 10px;
  }


  .title {
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
  }

  .title h1 {
    letter-spacing: 2px;
    font-weight: 700;
    line-height: 40px;
  }

  .suffix {
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    margin-bottom: 23px;
  }

  .suffix p {
    font-size: 15px;
  }

  .flex-grow-1 {
    background-color: black;
  }

</style>
