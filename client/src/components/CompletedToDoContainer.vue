<template>
  <div
    class="row-span-3 rounded-md w-full grid grid-rows-5 h-full bg-gray-700 overflow-y-auto px-4"
  >
    <div
      class="  items-center flex place-content-center font-bold text-gray-400 text-2xl   w-full "
    >
      Tareas completadas
    </div>
    <div class="flex flex-col row-span-4 ">
      <div
        v-for="toDo in completedToDos"
        :key="toDo._id"
        class="p-2 w-full h-24 rounded-md bg-gray-200 shadow-md my-2  "
      >
        <div
          class=" flex place-content-center w-full h-1/2 text-blue-400 font-bold text-center text-2xl "
        >
          {{ toDo.title }}
        </div>
        <div class="w-full h-1/2 flex flex-row-reverse">
          <div
            @click="deleteToDo(toDo)"
            class=" cursor-pointer text-center p-2 items-center shadow-md font-bold text-red-900 bg-red-400 w-1/6  h-full rounded-md"
          >
            Eliminar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompletedToDoContainer",

   computed: {
    completedToDos() {
      return this.$store.getters.getCompleteToDos;
    },
  },

  methods: {
    deleteToDo(toDoToDelete) {
      this.$store.dispatch("deleteToDo", toDoToDelete);
    },
    getCompletedToDos() {
      this.$store.dispatch("getCompletedToDos");
    },
  },

  created() {
    this.getCompletedToDos();
  },
};
</script>

<style></style>
