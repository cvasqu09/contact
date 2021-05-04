<template>
  <section class="d-flex flex-column">
    <the-header />
    <div class="view">
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./pages/components/ui/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: { TheHeader },
  methods: {},
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $secondary-light;
}

.view {
  margin-top: 4rem;
}
</style>
