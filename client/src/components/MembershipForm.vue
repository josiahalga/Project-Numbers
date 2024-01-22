<template>
  <div class="container" id="container">
    <div class="form-container">
      <v-form>
        <h1>City Alliance Church Membership Form</h1>
        <span>Fill out the necessary details</span>
        <v-text-field label="Last Name" variant="outlined" required></v-text-field>
        <v-text-field label="Suffix" variant="outlined"></v-text-field>
        <v-text-field label="First Name" variant="outlined"></v-text-field>
        <v-text-field label="Middle Name" variant="outlined"></v-text-field>
        <v-text-field label="Birthday" variant="outlined"></v-text-field>
        <v-text-field label="Status" variant="outlined"></v-text-field>
        <v-text-field label="Occupation" variant="outlined"></v-text-field>
        <v-text-field label="Sex" variant="outlined"></v-text-field>
        <v-text-field label="Street Address" variant="outlined"></v-text-field>
        <v-text-field label="Barangay" variant="outlined"></v-text-field>
        <v-text-field label="City" variant="outlined"></v-text-field>
        <v-text-field label="Cellphone Number" variant="outlined"></v-text-field>
        <v-text-field label="Telephone Number" variant="outlined"></v-text-field>
        <v-text-field label="Email Address" variant="outlined"></v-text-field>
        <v-text-field label="Facebook Username" variant="outlined"></v-text-field>
        <v-text-field label="Baptism Status" variant="outlined"></v-text-field>
        <v-text-field label="Auxiliary" variant="outlined"></v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    background-color: white;
    background: linear-gradient(to right, #e2e2e2, #c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
  }

  .form-container {
    background-color: #fff;
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
  }

  .form-container v-form v-text-field {
    padding: 20px;
  }

</style>
