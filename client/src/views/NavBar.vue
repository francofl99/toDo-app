<template>
  <div
    :class="{
      'primary-color-on-dark-mode': darkMode,
      'primary-color': !darkMode,
    }"
    class="nav-bar"
  >
    ToDo App
    <div class="toggle-button-container">
      Dark Mode
      <ButtonsLogic
        class="toggle-btn"
        @click.native="changeDarkMode()"
        :name="'toggle'"
      />
    </div>
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

<style lang="postcss">
.nav-bar {
  height: 12%;
  @apply justify-between w-full text-2xl px-4 flex py-2 items-center shadow-md transition duration-300;
}

.toggle-button-container {
  @apply font-bold text-xl self-end flex-row items-center w-auto p-2 flex;
}

.toggle-btn {
  @apply ml-2;
}
</style>
