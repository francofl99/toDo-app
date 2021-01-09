<template>
  <div class="nav-bar">
    ToDo App
    <ButtonsLogic @toggle-button-clicked="changeDarkMode()" :name="'toggle'" />
  </div>
</template>

<script>
import ButtonsLogic from "../components/buttons/ButtonsLogic";
export default {
  name: "NavBar",

  components: {
    ButtonsLogic,
  },

  methods: {
    changeDarkMode() {
      console.log("hi");
      this.$store.commit("changeDarkModeState");
    },
  },
};
</script>

<style scoped lang="postcss">
.nav-bar {
  height: 12%;
  @apply bg-gray-800 justify-between w-full text-2xl px-4 flex py-2 items-center text-gray-200;
}
</style>
