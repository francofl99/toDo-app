<template>
  <div
    :class="{
      containerForUncompleteToDos: !isToDoCompleted,
      containerForCompleteToDos: isToDoCompleted,
    }"
    class="container"
  >

    <ContainerHeader :isToDoCompleted="isToDoCompleted" />
    <ContainerBody :isToDoCompleted="isToDoCompleted" />
    
  </div>
</template>

<script>
import ContainerHeader from './ContainerHeader'
import ContainerBody from './ContainerBody'

export default {
  name: 'Container',
  
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
    ContainerHeader,
    ContainerBody
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
