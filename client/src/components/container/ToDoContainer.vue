<template>
  <div
    :class="{
      uncompleteToDoContainerStyle: isToDoTypeUncompleted,
      completeToDoContainerStyle: !isToDoTypeUncompleted,
    }"
    class=" rounded-md w-full bg-gray-700 grid grid-rows-5 h-full place-self-end overflow-y-auto px-4 "
  >
    <div
      class="items-center flex place-content-center font-bold text-gray-400 text-2xl  w-full "
    >
      <h1 v-if="isToDoTypeUncompleted">
        Tareas no completadas
      </h1>
      <h1 v-else>
        Tareas completadas
      </h1>
    </div>
    <div
      class="flex flex-col row-span-4 "
      v-for="toDo in getToDoType()"
      :key="toDo._id"
    >
      <ToDoCard :toDo="toDo" />
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
    isToDoTypeUncompleted() {
      return this.toDoType == "uncompleted";
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
      return this.isToDoTypeUncompleted
        ? this.uncompletedToDos
        : this.completedToDos;
    },
    getCompletedToDos() {
      this.$store.dispatch("getCompletedToDos");
    },
    getUncompletedToDos() {
      this.$store.dispatch("getUncompletedToDos");
    },
  },

  created() {
    if (this.isToDoTypeUncompleted) {
      this.getUncompletedToDos();
    } else {
      this.getCompletedToDos();
    }
  },
};
</script>

<style lang="postcss">
.uncompleteToDoContainerStyle {
  @apply row-span-2;
}

.completeToDoContainerStyle {
  @apply row-span-3;
}


</style>
