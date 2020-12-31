<template>
  <div v-if="name == 'complete'">
    <CompleteButton />
  </div>
  <div v-else-if="name == 'create'">
    <CreateButton />
  </div>
  <div v-else-if="name == 'delete'">
    <DeleteButton />
  </div>
</template>

<script>
import CreateButton from "./CreateButton";
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
    CompleteButton,
    DeleteButton,
  },
};
</script>

<style lang="postcss">
.button {
  @apply place-content-center cursor-pointer text-center p-2 items-center shadow-md font-bold  w-full h-full  rounded-md;
}
</style>
