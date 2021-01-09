<template>
  <div
    :class="{ toggleContainerOnActiveMode: toggleActive }"
    @click="toggleActive = !toggleActive"
    class="toggle-container"
  >
    <div
      :class="{ toggleButtonOnActiveMode: toggleActive }"
      class="toggle-button"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",

  data: () => ({
    toggleActive: false,
  }),
};
</script>

<style scoped lang="postcss">
.toggle-container {
  @apply w-16 h-8 duration-300 ease-in-out bg-gray-300 rounded-full flex-shrink-0 p-1;
}

.toggle-button {
  @apply duration-300 ease-in-out  transform bg-white w-6 h-6 rounded-full shadow-md;
}

.toggleContainerOnActiveMode {
  @apply bg-yellow-400;
}

.toggleButtonOnActiveMode {
  @apply translate-x-8;
}
</style>
