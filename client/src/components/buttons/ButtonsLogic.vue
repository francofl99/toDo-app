<template>
  <CompleteButton v-if="name == 'complete'" />
  <EditButton v-else-if="name == 'edit'" />
  <CreateButton v-else-if="name == 'create'" />
  <DeleteButton v-else-if="name == 'delete'" />
</template>

<script>
import CreateButton from "./CreateButton";
import EditButton from "./EditButton";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

export default {
  name: "ButtonsLogic",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  components: {
    CreateButton,
    EditButton,
    CompleteButton,
    DeleteButton,
  },
};
</script>

<style lang="postcss">
.button {
  @apply place-content-center cursor-pointer text-center p-2 items-center shadow-md font-bold  w-full h-full rounded-md transition duration-300;
}
</style>
