<template>
  <div class="main-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MainView",
};
</script>

<style scoped lang="postcss">
.main-container {
  @apply w-screen h-screen bg-gray-600 gap-4 grid grid-rows-3 grid-cols-2 grid-flow-col p-4;
}
</style>
