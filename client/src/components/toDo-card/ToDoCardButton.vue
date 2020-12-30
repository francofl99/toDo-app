<template>
  <div class="w-full h-1/2 flex flex-row-reverse">
    <div v-if="isToDoCompleted">
      <ButtonsLogic
        @click.native="emmitClick('deleteButton')"
        :name="'delete'"
      />
    </div>
    <div v-else>
      <ButtonsLogic
        @click.native="emmitClick('completeButton')"
        :name="'complete'"
      />
    </div>
  </div>
</template>

<script>
import ButtonsLogic from "../ButtonsLogic";

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

<style></style>
