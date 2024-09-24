<template lang="">
  <div class="form-container">
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed title="Authentication..." :show="isLoading">
      <base-spinner></base-spinner>
    </base-dialog>
    <div class="form-box">
      <h2>Sign Up</h2>
      <form @submit.prevent="onSubmit" id="login-form">
        <div class="input-group">
          <label for="login-email"> E-mail</label>
          <input
            type="email"
            id="login-email"
            name="useremail"
            v-model="email"
            required
            @focus="toggleError"
          />
        </div>
        <div class="input-group">
          <label for="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            required
            v-model="password"
            @focus="toggleError"
          />
        </div>
        <p class="error" v-if="error !== null">{{ error }}</p>

        <div class="router" v-if="!isLoading">
          <base-button> signup</base-button>
          <base-button mode="flat" :link="true" to="/login"
            >return to Login</base-button
          >
        </div>
        <base-spinner v-else></base-spinner>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { email: '', password: '', error: null, isLoading: false };
  },
  methods: {
    handleError() {
      this.error = null;
    },
    onSubmit() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.error = 'fill the inputs';
        return;
      } else {
        try {
          this.error = null;
          this.isLoading = true;
          this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        } catch (error) {
          console.log(error);

          this.error = error.message;
        }
        this.isLoading = false;
      }
    },
    toggleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
.router {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.form-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.form-box {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 600px;
}
@media (max-width: 700px) {
  .form-box {
    margin: 0 30px;
    width: 100%;
  }
}
h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

.input-group input:focus {
  border-color: #3d008d;
}

.btn {
  width: 100%;
  padding: 10px;
  background: #3d008d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #0056b3;
}
</style>
