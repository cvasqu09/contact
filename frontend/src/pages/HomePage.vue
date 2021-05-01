<template>
  <header>
    <h1 class="d-flex">Contact</h1>
    <ContactTree />
  </header>
</template>

<script lang="ts">
import ContactTree from "./components/ContactTree.vue";
export default {
  name: "HomePage",
  components: { ContactTree },
};
</script>

<style scoped></style>
