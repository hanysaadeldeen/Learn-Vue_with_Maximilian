<template lang="">
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="!firstNameValid && 'invalid'">
      <label for="firstName">First Name</label>
      <input
        type="text"
        v-model.trim="firstName"
        id="firstName"
        placeholder="first Name"
        @blur="clearValidity('firstNameValid')"
      />
    </div>
    <div class="form-control" :class="!lastNameValid && 'invalid'">
      <label for="LastName">Last Name </label>
      <input
        type="text"
        v-model.trim="lastName"
        id="LastName"
        placeholder="Last Name "
        @blur="clearValidity('lastNameValid')"
      />
    </div>
    <div class="form-control" :class="!descriptionValid && 'invalid'">
      <label for="description">Add your Description </label>
      <textarea
        placeholder="description"
        @blur="clearValidity('descriptionValid')"
        v-model.trim="description"
        rows="5"
      >
      </textarea>
    </div>

    <div class="form-control" :class="!hourlyRateValid && 'invalid'">
      <label for="hourlyRate">hourlyRate </label>
      <input
        type="number"
        v-model.number.trim="hourlyRate"
        id="hourlyRate"
        placeholder="hourlyRate "
        @blur="clearValidity('hourlyRateValid')"
      />
    </div>

    <h3>Areas of Expertise</h3>
    <div class="form-control-check" :class="!areasValid && 'invalid'">
      <div class="">
        <label for="frontend">FrontEnd </label>
        <input
          type="checkbox"
          v-model="areas"
          id="frontend"
          value="frontend"
          @blur="clearValidity('areasValid')"
        />
      </div>
      <div>
        <label for="backend">BackEnd </label>
        <input
          type="checkbox"
          v-model="areas"
          id="backend"
          value="backend"
          @blur="clearValidity('areasValid')"
        />
      </div>
      <div>
        <label for="career">career </label>
        <input
          type="checkbox"
          value="career"
          v-model="areas"
          id="career"
          @blur="clearValidity('areasValid')"
        />
      </div>
    </div>

    <base-button type="submit">Register</base-button>
  </form>
</template>
<script>
export default {
  emits: ['AddNew-Coach'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      hourlyRate: '',
      areas: [],
      firstNameValid: true,
      lastNameValid: true,
      descriptionValid: true,
      hourlyRateValid: true,
      areasValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input] = true;
    },
    submitForm() {
      if (
        this.firstName === '' ||
        this.lastName === '' ||
        this.description === '' ||
        !this.hourlyRate ||
        this.hourlyRate === 0 ||
        this.areas.length === 0
      ) {
        if (this.firstName === '') {
          this.firstNameValid = false;
        } else {
          this.firstNameValid = true;
        }
        if (this.lastName === '') {
          this.lastNameValid = false;
        } else {
          this.lastNameValid = true;
        }
        if (this.description === '') {
          this.descriptionValid = false;
        } else {
          this.descriptionValid = true;
        }
        if (this.hourlyRate === '') {
          this.hourlyRateValid = false;
        } else {
          this.hourlyRateValid = true;
        }
        if (this.areas.length === 0) {
          this.areasValid = false;
        } else {
          this.areasValid = true;
        }
        return;
      }
      const formData = {
        // id: new Date().toISOString(),
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.hourlyRate,
        areas: this.areas,
      };
      this.$emit('AddNew-Coach', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
.form-control-check,
.form-control-check div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 10px 12px;
  margin: 10px 0;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
