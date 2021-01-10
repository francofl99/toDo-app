<template>
  <div
    :class="{
      'container-for-uncomplete-toDos-size': !toDosCompleted,
      'container-for-complete-toDos-size ': toDosCompleted,
      'primary-bg-color': !darkMode,
      ' primary-bg-color-on-dark-mode': darkMode,
    }"
    class="container"
  >
    <div
      :class="{
        'secondary-color-on-dark-mode': darkMode,
        'secondary-color': !darkMode,
      }"
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
.container-for-uncomplete-toDos-size {
  @apply row-span-2;
}

.container-for-complete-toDos-size {
  @apply row-span-3;
}

.container {
  @apply shadow-md flex flex-col transition duration-300 rounded-md pt-4  w-full h-full place-self-end;
}

.container-header {
  @apply mb-2 shadow-md rounded-md transition duration-300 items-center flex place-content-center place-self-center font-bold text-2xl w-auto p-2;
}
</style>
