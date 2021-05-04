<template>
  <section class="d-flex">
    <router-link to="/home">
      <h1 class="link">Home</h1>
    </router-link>
    <router-link to="/settings">
      <h1 class="link">Settings</h1>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
section {
  border-radius: 4px;
  background-color: $primary;
  position: fixed;
  width: 100%;
  height: 4rem;
}

a {
  color: $secondary-light;
  margin-right: 1rem;
  text-decoration: none;

  &:first-of-type {
    margin-left: 2rem;
  }
}
</style>
