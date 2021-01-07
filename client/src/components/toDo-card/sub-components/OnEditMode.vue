<template>
  <div class="card-mode">
    <input type="text" v-model="newToDo.title" class="input" />
    <ButtonSection
      @complete-button-clicked="updateToDo()"
      class="card-buttons"
      :toDo="toDo"
    />
  </div>
</template>

<script>
import ButtonSection from "./ButtonSection";

export default {
  name: "OnEditMode",

  data() {
    return {
      newToDo: {
        title: this.toDo.title,
        onEditMode: false,
        completed: this.toDo.completed,
      },
    };
  },

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
    updateToDo() {
      this.$store.dispatch("updateToDo", {
        toDo: this.toDo,
        newToDo: this.newToDo,
      });
    },
  },
};
</script>

<style scoped lang="postcss">
.input {
  @apply h-1/2 w-1/2 shadow-md bg-gray-400 rounded-md text-gray-900;
}
</style>
