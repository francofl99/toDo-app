<template>
  <div
    class="row-span-2 rounded-md w-full bg-gray-700 grid grid-rows-5 h-full place-self-end overflow-y-auto px-4 "
  >
    <div
      class="items-center flex place-content-center font-bold text-gray-400 text-2xl  w-full "
    >
      Tareas no completadas
    </div>
    <div class=" flex flex-col row-span-4 ">
      <div
        v-for="toDo in uncompletedToDos"
        :key="toDo._id"
        class="flex flex-wrap p-2 w-full h-24 rounded-md my-2 bg-gray-200 shadow-md"
      >
        <div
          class=" flex place-content-center w-full h-1/2 text-blue-400 font-bold text-center text-2xl "
        >
          {{ toDo.title }}
        </div>
        <div class="w-full h-1/2 flex flex-row-reverse">
          <div
            @click="completeToDo(toDo)"
            class=" cursor-pointer text-center p-2 items-center shadow-md font-bold text-gray-100 bg-green-600 w-1/6  h-full rounded-md"
          >
            Completar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UncompleteToDoContainer",

  computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos;
    },
  },

  methods: {
    completeToDo(toDoToComplete) {
      this.$store.dispatch("completeToDo", toDoToComplete);
    },

    getUncompletedToDos() {
      this.$store.dispatch("getUncompletedToDos");
    },
  },

  created() {
    this.getUncompletedToDos();
  },
};
</script>

<style></style>
