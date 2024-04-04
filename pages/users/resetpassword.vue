<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>重新設定密碼</h1>
          </div>

          <div class="col-md-8 offset-md-2">
            <div class="alert alert-primary" role="alert">
              你已經通過Email驗證！請重新設定密碼。
            </div>
            <div class="form-group">
              <label>密碼</label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>再次輸入密碼</label>
              <input type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Reset Password",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Follow the steps to reset your password to keep your account secure. Please enter the new password and confirm to complete the password update.",
        },
      ],
    };
  },
};
</script>