<template>
  <div class="toDo-card">
    <ToDoCardBodyOnViewMode v-if="!toDo.onEditMode" :toDo="toDo" />
    <ToDoCardBodyOnEditMode v-else @toDo-changed="updateToDo()" />
  </div>
</template>

<script>
import ToDoCardBodyOnViewMode from "./ToDoCardBodyOnViewMode";
import ToDoCardBodyOnEditMode from "./ToDoCardBodyOnEditMode";

export default {
  name: "ToDoCard",

  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },

  components: {
    ToDoCardBodyOnViewMode,
    ToDoCardBodyOnEditMode,
  },

  methods: {
    updateToDo(newToDo) {
      this.$store.dispatch("updateToDo", this.toDo, newToDo);
    },
    toDoToEditMode() {
      this.$store.dispatch("toDoToEditMode", this.toDo);
    },
    completeToDo() {
      this.$store.dispatch("completeToDo", this.toDo);
    },
    deleteToDo() {
      this.$store.dispatch("deleteToDo", this.toDo);
    },
  },
};
</script>

<style scoped lang="postcss">
.toDo-card {
  @apply bg-gray-300 text-blue-400 flex flex-wrap p-2 w-full h-24 rounded-md my-2 shadow-md;
}
.toDo-card-body {
  @apply flex-col flex place-content-start w-full h-full font-bold text-center text-2xl;
}
</style>
