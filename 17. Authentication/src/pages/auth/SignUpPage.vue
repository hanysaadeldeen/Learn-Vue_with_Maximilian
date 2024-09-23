<template lang="">
  <div class="form-container">
    <div class="form-box">
      <h2>Sign Up</h2>
      <form id="signup-form">
        <div class="input-group">
          <label for="signup-email">Email</label>
          <input type="email" id="signup-email" name="email" required />
        </div>
        <div class="input-group">
          <label for="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            required
          />
        </div>
        <div class="router">
          <base-button> signup</base-button>
          <base-button mode="flat" to="/login" link="true"
            >return to Login</base-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
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
