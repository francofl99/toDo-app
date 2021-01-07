<template>
  <div class="card-mode">
    <div class="card-body">
      {{ toDo.title }}
    </div>
    <ButtonSection
      class="card-buttons"
      :toDo="toDo"
      @edit-button-clicked="toDoToEditMode()"
      @complete-button-clicked="completeToDo()"
      @delete-button-clicked="deleteToDo()"
    />
  </div>
</template>

<script>
import ButtonSection from "./ButtonSection";

export default {
  name: "OnViewMode",

  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },

  components: {
    ButtonSection,
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
</style>
