<template>
  <div
    :class="{
      containerForUncompleteToDos: !toDosCompleted,
      containerForCompleteToDos: toDosCompleted,
    }"
    class="container"
  >
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./sub-components/Header";
import Body from "./sub-components/Body";

export default {
  name: "ToDoContainer",

  props: {
    toDosCompleted: {
      type: Boolean,
      required: true,
    },
  },

  provide() {
    return {
      toDosCompleted: this.toDosCompleted,
    };
  },

  components: {
    Header,
    Body,
  },
};
</script>

<style scoped lang="postcss">
.containerForUncompleteToDos {
  @apply row-span-2;
}

.containerForCompleteToDos {
  @apply row-span-3;
}

.container {
  @apply rounded-md w-full bg-gray-700 grid grid-rows-5 h-full place-self-end;
}
</style>
