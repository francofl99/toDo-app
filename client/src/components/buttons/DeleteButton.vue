<template>
  <div class="button delete-button">
    Delete
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
};
</script>

<style scoped lang="postcss">
.delete-button {
  @apply hover:bg-rose-400 bg-rose-300 text-rose-900;
}
</style>
