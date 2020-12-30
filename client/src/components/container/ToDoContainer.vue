<template>
  <div
    :class="{
      containerForUncompleteToDos: !isToDoCompleted,
      containerForCompleteToDos: isToDoCompleted,
    }"
    class="container"
  >
    <div class="container-header">
      <h1 v-if="isToDoCompleted">
        Tareas no completadas
      </h1>
      <h1 v-else>
        Tareas completadas
      </h1>
    </div>
    <div class="container-body">
      <div v-for="toDo in getToDoType()" :key="toDo._id">
        <ToDoCard :toDo="toDo" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoCard from "../toDoCard/ToDoCard";

export default {
  computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos;
    },
    completedToDos() {
      return this.$store.getters.getCompleteToDos;
    },
    isToDoCompleted() {
      return this.toDoType == "completed";
    },
  },

  props: {
    toDoType: {
      type: String,
      required: true,
    },
  },

  components: {
    ToDoCard,
  },

  methods: {
    getToDoType() {
      return this.isToDoCompleted ? this.completedToDos : this.uncompletedToDos;
    },
    getCompletedToDos() {
      this.$store.dispatch("getCompletedToDos");
    },
    getUncompletedToDos() {
      this.$store.dispatch("getUncompletedToDos");
    },
  },

  created() {
    this.isToDoCompleted
      ? this.getCompletedToDos()
      : this.getUncompletedToDos();
  },
};
</script>

<style lang="postcss">
.containerForUncompleteToDos {
  @apply row-span-2;
}

.containerForCompleteToDos {
  @apply row-span-3;
}

.container {
  @apply rounded-md w-full bg-gray-700 grid grid-rows-5 h-full place-self-end;
}

.container-header {
  @apply items-center flex place-content-center font-bold text-gray-400 text-2xl w-full;
}

.container-body {
  @apply flex flex-col row-span-4 overflow-y-auto px-4 scrollbar;
}
</style>
