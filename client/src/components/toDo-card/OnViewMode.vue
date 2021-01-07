<template>
  <div>
    <div class="card-body">
      {{ toDo.title }}
    </div>
    <ButtonsOnViewMode
      class="card-buttons"
      :isToDoCompleted="toDo.completed"
      @edit-button-clicked="toDoToEditMode()"
      @complete-button-clicked="completeToDo()"
      @delete-button-clicked="deleteToDo()"
    />
  </div>
</template>

<script>
import ButtonsOnViewMode from "./ButtonsOnViewMode";

export default {
  name: "OnViewMode",

  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },

  components: {
    ButtonsOnViewMode,
  },

  methods: {
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
.card-body {
  @apply w-full flex place-content-start h-1/2;
}

.card-buttons {
  @apply w-full h-1/2;
}
</style>
