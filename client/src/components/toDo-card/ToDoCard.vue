<template>
  <div class="card">
    <OnEditMode v-if="toDo.onEditMode" :toDo="toDo" />
    <OnViewMode v-else :toDo="toDo" />
  </div>
</template>

<script>
import OnViewMode from "./sub-components/OnViewMode";
import OnEditMode from "./sub-components/OnEditMode";

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
};
</script>

<style lang="postcss">
.card {
  @apply flex-col place-content-start font-bold text-2xl bg-gray-200 text-blue-400 flex p-2 w-full h-24 rounded-md my-2 shadow-md;
}

.card-mode {
  @apply h-full;
}

.card-buttons {
  @apply w-full h-1/2;
}
</style>
