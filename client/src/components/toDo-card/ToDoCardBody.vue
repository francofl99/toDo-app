<template>
  <div
    class="card-body"
  >
    {{ toDo.title }}
  </div>
</template>

<script>
export default {
    name: 'ToDoCardBody',

    props: {
        toDo: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<style scoped lang="postcss">
.card-body {
    @apply flex place-content-center w-full h-1/2 font-bold text-center text-2xl;
}
</style>
