<template>
  <div
    class=" bg-gray-700 rounded-md w-full h-full row-span-1 grid grid-rows-3 p-4 "
  >
    <label
      for="inputToDo"
      class="flex items-center place-content-center text-center w-full font-bold text-gray-400 text-2xl h-full"
    >
      Nueva Tarea
    </label>
    <input
      id="inputToDo"
      type="text"
      v-model="newToDo"
      class=" self-center w-full h-4/5 rounded-md bg-gray-200 shadow-md p-2 font-bold  text-gray-500 text-lg"
    />
    <div
      @click="addToDo()"
      class=" place-self-end mt-4  h-3/4  w-1/5 bg-blue-400  rounded-md shadow-md flex text-gray-200 font-bold place-content-center items-center cursor-pointer p-2 "
    >
      Crear ToDo
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoInput",

  data: () => ({
    newToDo: "",
  }),

  methods: {
    addToDo() {
      this.$store.dispatch("addToDo", this.newToDo);
    },
  },
};
</script>

<style></style>
