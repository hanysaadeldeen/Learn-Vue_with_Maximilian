<template lang="">
  <div class="form-container">
    <div class="form-box">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit" id="login-form">
        <div class="input-group">
          <label for="login-email">Useremail</label>
          <input
            type="email"
            id="login-email"
            name="useremail"
            v-model="email"
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
        <div class="router">
          <base-button> Login</base-button>
          <base-button mode="flat" :link="true" to="/signup"
            >Create Account</base-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { email: '', password: '', error: null };
  },
  methods: {
    onSubmit() {
      if (this.email === '' || this.password === '') {
        return (this.error = 'fill the inputs');
      } else {
        this.error = null;
        console.log(this.email);
        console.log(this.password);
      }
    },
    toggleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
  text-align: center;
  border: 1px solid red;
  padding: 10px;
  background: #eeeeeecd;
}
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
  width: 300px;
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
