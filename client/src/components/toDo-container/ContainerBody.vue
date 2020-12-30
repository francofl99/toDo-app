<template>
  <div class="container-body">
    <div v-for="toDo in getToDoType()" :key="toDo._id">
      <ToDoCard :toDo="toDo" />
    </div>
  </div>
</template>

<script>
import ToDoCard from "../toDo-card/ToDoCard";

export default {
  computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos;
    },
    completedToDos() {
      return this.$store.getters.getCompleteToDos;
    },
  },

  props: {
    isToDoCompleted: {
      type: Boolean,
      required: true,
    },
  },

  components: {
      ToDoCard
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

<style scoped lang="postcss">
.container-body {
  @apply flex flex-col row-span-4 overflow-y-auto px-4 scrollbar;
}
</style>
