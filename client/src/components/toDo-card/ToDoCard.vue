<template>
  <div
    :class="{
      completeToDo: toDo.completed,
      uncompleteToDo: !toDo.completed,
    }"
    class="card"
  >
    
    <ToDoCardBody :toDo="toDo" />

    <ToDoCardButton
      :isToDoCompleted="toDo.completed"
      @completeButton="completeToDo(toDo)"
      @deleteButton="deleteToDo(toDo)"
    />
  </div>
</template>

<script>
import ToDoCardBody from './ToDoCardBody'
import ToDoCardButton from "./ToDoCardButton";

export default {
  name: "ToDoCard",

  props: {
    toDo: {
      type: Object,
      required: true
    }
  },

  components: {
    ToDoCardBody,
    ToDoCardButton
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
.card {
  @apply flex flex-wrap p-2 w-full h-24 rounded-md my-2 shadow-md;
}
.uncompleteToDo {
  @apply bg-gray-200 text-blue-400;
}
.completeToDo {
  @apply bg-blue-400 text-gray-200;
}
</style>
