<template>
  <div :class="{ containerOnDarkMode: darkMode }" class="container">
    <label
      for="inputToDo"
      :class="{ containerInputLabelOnDarkMode: darkMode }"
      class="container-input-label"
    >
      New task
    </label>
    <input
      id="inputToDo"
      type="text"
      v-model="newToDo.title"
      class="container-input"
    />
    <ButtonsLogic
      class="create-button"
      :name="'create'"
      @click.native="addToDo()"
    />
  </div>
</template>

<script>
import ButtonsLogic from "../buttons/ButtonsLogic";

export default {
  name: "ToDoInput",

  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  data: () => ({
    newToDo: {
      title: "",
      onEditMode: false,
      completed: false,
    },
  }),

  components: {
    ButtonsLogic,
  },

  methods: {
    addToDo() {
      this.$store.dispatch("addToDo", this.newToDo);
    },
  },
};
</script>

<style scoped lang="postcss">
.container {
  @apply transition duration-300 shadow-md bg-gray-400 rounded-md w-full h-full row-span-1 flex flex-col p-4;
}

.containerOnDarkMode {
  @apply bg-gray-800;
}

.container-input-label {
  @apply place-self-center shadow-md rounded-md  bg-gray-200 transition duration-300 flex items-center place-content-center text-center w-auto px-2 font-bold text-gray-700 text-2xl h-3/4;
}

.containerInputLabelOnDarkMode {
  @apply text-gray-300 bg-gray-700;
}

.container-input {
  @apply m-2 self-center w-full h-4/5 rounded-md bg-gray-200 shadow-md p-2 font-bold   text-gray-500 text-lg;
}

.create-button {
  @apply w-2/6 h-3/4 self-end;
}
</style>
