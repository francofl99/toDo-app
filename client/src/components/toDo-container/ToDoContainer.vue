<template>
  <div
    :class="{
      containerForUncompleteToDos: !isToDoCompleted,
      containerForCompleteToDos: isToDoCompleted,
    }"
    class="container"
  >

    <ToDoContainerHeader :isToDoCompleted="isToDoCompleted" />
    <ToDoContainerBody :isToDoCompleted="isToDoCompleted" />
    
  </div>
</template>

<script>
import ToDoContainerHeader from './ToDoContainerHeader'
import ToDoContainerBody from './ToDoContainerBody'

export default {
  name: 'ToDoContainer',
  
  computed: {
    isToDoCompleted() {
      return this.toDoType == "completed";
    },
  },

  props: {
    toDoType: {
      type: String,
      required: true,
    },
  },

  components: {
    ToDoContainerHeader,
    ToDoContainerBody
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
