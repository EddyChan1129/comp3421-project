<template>
  <div>
    <section id="intro">
      <div class="jumbotron contact">
        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-4">
            <div class="cinner">
              <h1>Contant Us</h1>
              <hr />
              <p>Phones: (852) 9716-6524</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contactcontent">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>Methods</h3>
            <p>If you have any questions please fell feel to contact us.</p>
            <p><i class="fas fa-phone"></i> Phone: (852) 1234-5678</p>
            <p>
              <i class="fas fa-envelope"></i> Email:
              <a href="mailto:22026266d@gmail.com">22026266d@gmail.com</a>
            </p>
          </div>
          <div class="col-md-8">
            <h3>Query List</h3>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Your name"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="your email"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="your phones"
              />
            </div>
            <div class="input-group">
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="your query"
              ></textarea>
            </div>
            <a class="btn btn-primary btn-lg" href="#" role="button">Submit</a>
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
      title: "Contact Us",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Feel free to contact us with your questions, we offer phone and email support to help you. Please contact us via the information provided or inquiry form.",
        },
      ],
    };
  },
};
</script>
