export default function ({ store, redirect }) {
  if (!store.getters["auth/getUserJwt"]) {
    redirect("/users/signin");
  }
}
