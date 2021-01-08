<template>
  <CompleteButton v-if="name == 'complete'" />
  <EditButton v-else-if="name == 'edit'" />
  <CreateButton v-else-if="name == 'create'" />
  <DeleteButton v-else-if="name == 'delete'" />
  <ToggleButton v-else-if="name == 'toggle'" />
</template>

<script>
import CreateButton from "./sub-components/CreateButton";
import EditButton from "./sub-components/EditButton";
import CompleteButton from "./sub-components/CompleteButton";
import DeleteButton from "./sub-components/DeleteButton";
import ToggleButton from "./sub-components/ToggleButton";

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
    ToggleButton,
  },
};
</script>

<style lang="postcss">
.button {
  @apply text-lg flex place-content-center cursor-pointer text-center p-2 items-center shadow-md font-bold  w-full h-full rounded-md transition duration-300;
}
</style>
