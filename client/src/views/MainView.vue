<template>
  <div class="w-screen h-screen">
    <NavBar />
    <div :class="{ mainViewOnDarkMode: darkMode }" class="body-container">
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

<style scoped lang="postcss">
.body-container {
  height: 88%;
  @apply bg-gray-100 transition duration-300 gap-4 grid grid-rows-3 grid-cols-2 grid-flow-col p-4;
}

.mainViewOnDarkMode {
  @apply bg-gray-600;
}
</style>
