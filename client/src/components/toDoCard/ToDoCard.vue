<template>
  <div
    :class="{
      completeToDoStyle: toDo.completed,
      uncompleteToDoStyle: !toDo.completed,
    }"
    class="flex flex-wrap p-2 w-full h-24 rounded-md my-2 shadow-md"
  >
    <div
      class=" flex place-content-center w-full h-1/2 font-bold text-center text-2xl "
    >
      {{ toDo.title }}
    </div>

    <Buttons
      :isToDoTypeCompleted="toDo.completed"
      @completeButton="completeToDo(toDo)"
      @deleteButton="deleteToDo(toDo)"
    />
  </div>
</template>

<script>
import Buttons from "./Buttons";

export default {
  name: "ToDoCard",

  props: {
    toDo: {
      type: Object,
      required: true
    }
  },

  components: {
    Buttons
  },

  methods: {
    completeToDo(toDoToComplete) {
      this.$store.dispatch("completeToDo", toDoToComplete);
    },
    deleteToDo(toDoToDelete) {
      this.$store.dispatch("deleteToDo", toDoToDelete);
    },
  },
};
</script>

<style scoped lang="postcss">
.uncompleteToDoStyle {
  @apply bg-gray-200 text-blue-400;
}
.completeToDoStyle {
  @apply bg-blue-400 text-gray-200;
}
</style>
