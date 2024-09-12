<template lang="">
  <form @submit.prevent="SubmitForm">
    <div class="form-control">
      <label for="email" :class="!email.isValid && 'errors'">Your Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
    </div>
    <div class="form-control">
      <label for="Message" :class="!message.isValid && 'errors'"
        >Your Message</label
      >
      <textarea
        id="Message"
        rows="5"
        v-model.trim="message.val"
        @blur="clearValidity('message')"
      ></textarea>
    </div>
    <div class="actions">
      <base-button type="submit">Send Message </base-button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
    };
  },
  params: ['id'],

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    SubmitForm() {
      if (this.email.val === '' || this.message.val === '') {
        if (this.email.val === '') {
          this.email.isValid = false;
        }
        if (this.message.val === '') {
          this.message.isValid = false;
        }
        return;
      } else {
        const formData = {
          coachId: this.$route.params.id,
          email: this.email.val,
          message: this.message.val,
        };
        this.$store.dispatch('request/AddNewRequest', formData);
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
