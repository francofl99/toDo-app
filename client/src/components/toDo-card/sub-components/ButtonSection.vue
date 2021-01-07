<template>
  <div v-if="toDo.onEditMode" class="toDo-button-container">
    <ButtonsLogic
      @click.native="emmitClick('complete-button-clicked')"
      :name="'complete'"
      class="toDo-button"
    />
  </div>
  <div v-else class="toDo-button-container">
    <ButtonsLogic
      class="toDo-button"
      v-if="toDo.completed"
      @click.native="emmitClick('delete-button-clicked')"
      :name="'delete'"
    />
    <ButtonsLogic
      class="toDo-button"
      v-else
      @click.native="emmitClick('complete-button-clicked')"
      :name="'complete'"
    />
    <ButtonsLogic
      class="toDo-button mr-2"
      @click.native="emmitClick('edit-button-clicked')"
      :name="'edit'"
    />
  </div>
</template>

<script>
import ButtonsLogic from "../../buttons/ButtonsLogic";

export default {
  name: "ButtonSection",

  props: {
    toDo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    emmitClick(buttonClicked) {
      this.$emit(buttonClicked);
    },
  },

  components: {
    ButtonsLogic,
  },
};
</script>

<style scoped lang="postcss">
.toDo-button-container {
  @apply flex flex-row-reverse;
}

.toDo-button {
  @apply h-full w-1/6;
}
</style>
