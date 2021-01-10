<template>
  <div class="w-screen h-screen">
    <NavBar />
    <div
      :class="{
        'secondary-bg-color-on-dark-mode': darkMode,
        'secondary-bg-color': !darkMode,
      }"
      class="body-container"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "MainView",

  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  components: {
    NavBar,
  },
};
</script>

<style lang="postcss">
.body-container {
  height: 88%;
  @apply transition duration-300 gap-4 grid grid-rows-3 grid-cols-2 grid-flow-col p-4;
}
</style>
