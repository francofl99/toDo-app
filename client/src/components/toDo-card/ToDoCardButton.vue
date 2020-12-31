<template>
  <div class="toDo-button-container">
    <ButtonsLogic
      class="toDo-button"
      v-if="isToDoCompleted"
      @click.native="emmitClick('deleteButton')"
      :name="'delete'"
    />
    <ButtonsLogic
      v-else
      class="toDo-button"
      @click.native="emmitClick('completeButton')"
      :name="'complete'"
    />
  </div>
</template>

<script>
import ButtonsLogic from "../buttons/ButtonsLogic";

export default {
  name: "ToDoCardButton",

  props: {
    isToDoCompleted: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    ButtonsLogic,
  },

  methods: {
    emmitClick(buttonClicked) {
      this.$emit(buttonClicked);
    },
  },
};
</script>

<style scoped lang="postcss">
.toDo-button-container {
  @apply w-full h-1/2 flex flex-row-reverse;
}

.toDo-button {
  @apply h-full w-1/6;
}
</style>
