<template>
  <div class="container">
    <label for="inputToDo" class="container-input-label">
      New task
    </label>
    <input
      id="inputToDo"
      type="text"
      v-model="newToDo"
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

  data: () => ({
    newToDo: "",
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
  @apply bg-gray-700 rounded-md w-full h-full row-span-1 grid grid-rows-3 p-4;
}
.container-input-label {
  @apply flex items-center place-content-center text-center w-full font-bold text-gray-400 text-2xl h-full;
}

.container-input {
  @apply self-center w-full h-4/5 rounded-md bg-gray-200 shadow-md p-2 font-bold  text-gray-500 text-lg;
}

.create-button {
  @apply w-2/6 h-3/4 place-self-end;
}
</style>
