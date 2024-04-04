<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Forgetpassword</h1>
          </div>

          <div class="col-md-8 offset-md-2">
            <div class="alert alert-primary" role="alert">
              Please type your email
            </div>
            <div class="form-group">
              <label>Your email</label>
              <input type="email" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
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
      title: "Forgot Password - Account Recovery",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "If you forget your password, you can reset it by entering your email here.",
        },
      ],
    };
  },
};
</script>
