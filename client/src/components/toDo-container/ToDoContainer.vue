<template>
  <div
    :class="{
      containerForUncompleteToDos: !toDosCompleted,
      containerForCompleteToDos: toDosCompleted,
      containerForUncompleteToDosOnDarkMode: !toDosCompleted && darkMode,
      containerForCompleteToDosOnDarkMode: toDosCompleted && darkMode,
    }"
    class="container"
  >
    <div
      :class="{ containerHeaderOnDarkMode: darkMode }"
      class="container-header"
    >
      <h1 v-if="toDosCompleted">
        Completed tasks
      </h1>
      <h1 v-else>
        Uncompleted tasks
      </h1>
    </div>
    <Body />
  </div>
</template>

<script>
import Body from "./sub-components/Body";

export default {
  name: "ToDoContainer",

  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },

  props: {
    toDosCompleted: {
      type: Boolean,
      required: true,
    },
  },

  provide() {
    return {
      toDosCompleted: this.toDosCompleted,
    };
  },

  components: {
    Body,
  },
};
</script>

<style scoped lang="postcss">
.containerForUncompleteToDosSize {
  @apply row-span-2;
}

.containerForUncompleteToDos {
  @apply containerForUncompleteToDosSize bg-gray-400;
}

.containerForUncompleteToDosOnDarkMode {
  @apply bg-gray-800 containerForUncompleteToDosSize;
}

.containerForCompleteToDosSize {
  @apply row-span-3;
}

.containerForCompleteToDos {
  @apply containerForCompleteToDosSize bg-gray-400;
}

.containerForCompleteToDosOnDarkMode {
  @apply containerForCompleteToDosSize  bg-gray-800;
}
.container {
  @apply shadow-md flex flex-col transition duration-300 rounded-md pt-4  w-full h-full place-self-end;
}

.container-header {
  @apply mb-2 shadow-md bg-gray-200 rounded-md transition duration-300 items-center flex place-content-center place-self-center font-bold text-gray-700 text-2xl w-auto p-2;
}

.containerHeaderOnDarkMode {
  @apply text-gray-300 bg-gray-700;
}
</style>
