<template>
  <draggable
    :animation="300"
    v-model="toDoList"
    class="container-body"
    ghost-class="moving-card"
  >
    <transition-group
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div v-for="toDo in toDoList" :key="toDo._id">
        <ToDoCard :toDo="toDo" />
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";

import ToDoCard from "../../toDo-card/ToDoCard";

export default {
  name: "Body",

  computed: {
    toDoList: {
      get() {
        return this.toDosCompleted
          ? this.$store.getters.getCompleteToDos
          : this.$store.getters.getUncompletedToDos;
      },
      set(value) {
        return this.toDosCompleted
          ? this.$store.commit("setCompletedToDos", value)
          : this.$store.commit("setUncompletedToDos", value);
      },
    },
  },

  inject: ["toDosCompleted"],

  components: {
    ToDoCard,
    draggable,
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

.moving-card {
  @apply rounded-md opacity-50 bg-gray-200;
}
</style>
