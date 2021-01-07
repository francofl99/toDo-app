<template>
  <div class="card">
    <OnViewMode v-if="!toDo.onEditMode" :toDo="toDo" />
    <OnEditMode v-else @toDo-changed="updateToDo()" />
  </div>
</template>

<script>
import OnViewMode from "./OnViewMode";
import OnEditMode from "./OnEditMode";

export default {
  name: "ToDoCard",

  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },

  components: {
    OnViewMode,
    OnEditMode,
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
.card {
  @apply flex-col  place-content-start font-bold text-2xl bg-gray-300 text-blue-400 flex p-2 w-full h-24 rounded-md my-2 shadow-md;
}
</style>
