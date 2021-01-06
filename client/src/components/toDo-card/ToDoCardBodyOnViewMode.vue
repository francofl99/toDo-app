<template>
  <div class="toDo-card-body">
    <div class="w-full flex place-content-start h-full">
      {{ toDo.title }}
    </div>
    <ButtonsOnViewMode
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
  name: "ToDoCardBodyOnViewMode",

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

<style></style>
