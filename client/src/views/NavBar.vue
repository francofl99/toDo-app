<template>
  <div
    :class="{ navBarOnDarkMode: darkMode, navBar: !darkMode }"
    class="nav-bar"
  >
    ToDo App
    <ButtonsLogic @click.native="changeDarkMode()" :name="'toggle'" />
  </div>
</template>

<script>
import ButtonsLogic from "../components/buttons/ButtonsLogic";
export default {
  name: "NavBar",

  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  components: {
    ButtonsLogic,
  },

  methods: {
    changeDarkMode() {
      this.$store.commit("changeDarkModeState");
    },
  },
};
</script>

<style scoped lang="postcss">
.nav-bar {
  height: 12%;
  @apply justify-between w-full text-2xl px-4 flex py-2 items-center shadow-md transition duration-300;
}

.navBarOnDarkMode {
  @apply text-gray-200 bg-gray-800;
}

.navBar {
  @apply bg-gray-400 text-gray-800;
}
</style>
