<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="alert alert-primary" role="alert">
              已經有帳號？<a href="">按此</a>立即登入
            </div>
          </div>

          <div class="col-md-12 text-center">
            <h1>註冊</h1>
          </div>

          <div class="col-md-8 offset-md-2">
            <div class="form-group">
              <label>你的電郵</label>
              <input v-model="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>密碼</label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <small id="emailHelp" class="form-text text-muted"
              >*當你按下「註冊」，代表你同意並接受我們的
              <a href="">使用條款</a></small
            >
            <button type="submit" class="btn btn-primary" @click="register">
              註冊
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
        alert("註冊成功");

        const res = await this.$axios.$post(
          `${this.backendURL}/auth/local/register`,
          {
            username: this.email,
            email: this.email,
            password: this.password,
          }
        );
      } catch (error) {
        alert("註冊成功");
        console.log(error);
      } finally {
        alert("註冊成功");
      }
    },
  },
};
</script>
