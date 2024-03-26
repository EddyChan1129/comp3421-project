<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="alert alert-primary" role="alert">
              Already have accout? <nuxt-link to="/users/signin">Login</nuxt-link>
            </div>
          </div>

          <div class="col-md-12 text-center">
            <h1>Registration</h1>
          </div>

          <div class="col-md-8 offset-md-2">
            <div class="form-group">
              <label>Your mail</label>
              <input v-model="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary" @click="register">
              Register
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
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async register() {
      try {
        const res = await this.$axios.$post(
          `${this.backendURL}/auth/local/register`,
          {
            username: this.email,
            email: this.email,
            password: this.password,
          }
        );
        window.location.href = `${this.frontendURL}/`;
      } catch (error) {
        alert("Email already exits.");
        console.log(error);
      } 
    },
  },
};
</script>
