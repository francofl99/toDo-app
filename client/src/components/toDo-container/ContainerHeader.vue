<template>
  <div class="container-header">
      <h1 v-if="isToDoCompleted">
        Tareas no completadas
      </h1>
      <h1 v-else>
        Tareas completadas
      </h1>
    </div>

</template>

<script>
export default {
    name: 'ContainerHeader',

    props: {
        isToDoCompleted: {
            type: Boolean,
            required: true
        }
    }

}
</script>

<style scoped lang="postcss">
.container-header {
  @apply items-center flex place-content-center font-bold text-gray-400 text-2xl w-full;
}
</style>