<template>
  <transition-group
    class="container-body"
    enter-active-class="animate__animated animate__fadeInDown animate__faster"
    leave-active-class="animate__animated animate__fadeOutRight animate__faster"
  >
    <div
      v-for="toDo in this.toDosCompleted
        ? this.completedToDos
        : this.uncompletedToDos"
      :key="toDo._id"
    >
      <ToDoCard :toDo="toDo" />
    </div>
  </transition-group>
</template>

<script>
import ToDoCard from "../../toDo-card/ToDoCard";

export default {
  name: "Body",

  computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos;
    },
    completedToDos() {
      return this.$store.getters.getCompleteToDos;
    },
  },

  inject: ["toDosCompleted"],

  components: {
    ToDoCard,
  },

  methods: {
    getCompletedToDos() {
      this.$store.dispatch("getCompletedToDos");
    },
    getUncompletedToDos() {
      this.$store.dispatch("getUncompletedToDos");
    },
  },

  created() {
    this.toDosCompleted ? this.getCompletedToDos() : this.getUncompletedToDos();
  },
};
</script>

<style scoped lang="postcss">
.container-body {
  @apply flex flex-col row-span-4 overflow-y-auto px-4 scrollbar;
}
</style>
