<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="alert alert-primary" role="alert">
              Still don't have account? <nuxt-link to="/users/register"> REGISTER</nuxt-link>
            </div>
          </div>

          <div class="col-md-12 text-center">
            <h1>Login</h1>
          </div>

          <div class="col-md-8 offset-md-2">
            <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <!-- <small id="emailHelp" class="form-text text-muted"
              >忘記密碼？
              <a href="/users/forgetpassword">按此</a>重新設定密碼</small
            > -->
            <button @click="login" type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      frontendURL: process.env.frontendURL,
      backendURL: process.env.backendURL,
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async login() {
      try {
        const res = await this.$axios.$post(`${this.backendURL}/auth/local`, {
          identifier: this.email,
          password: this.password,
        });
        window.location.href = `${this.frontendURL}/`;
        this.setUser(res.jwt);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
