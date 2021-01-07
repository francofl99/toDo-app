<template>
  <div class="h-full">
    <input type="text" v-model="toDoTitle" class="input" />
  </div>
</template>

<script>
export default {
  name: "OnEditMode",

  data() {
    return {
      toDoTitle: "",
    };
  },

  methods: {
    toDoTitleChanged() {
      this.$emit("toDo-changed", this.toDoTitle);
    },
  },
};
</script>

<style scoped lang="postcss">
.input {
  @apply h-1/2 w-1/2 shadow-md bg-gray-400 rounded-md text-white;
}
</style>
