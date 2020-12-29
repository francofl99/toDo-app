<template>
  <div class="bg-gray-600 gap-4 grid grid-rows-3 grid-cols-2 grid-flow-col w-full h-full p-4">
    <div class=" bg-gray-700 rounded-md w-full h-full row-span-1 grid grid-rows-3 p-2">
      <label for="inputToDo" class="flex items-center place-content-center text-center w-full font-bold text-gray-400 text-2xl h-full">
        Nueva Tarea
      </label>
      <input id="inputToDo" type="text" v-model="newToDo" class=" self-center w-full h-4/5 rounded-md bg-gray-200 shadow-md p-2 font-bold  text-gray-500 text-lg">
      <div @click="addToDo()" class=" place-self-end mt-4  h-3/4  w-1/5 bg-blue-400  rounded-md shadow-md flex text-gray-200 font-bold place-content-center items-center cursor-pointer p-2 ">
        Crear ToDo
      </div>
    </div>


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

    <div class="row-span-3 rounded-md w-full grid grid-rows-5 h-full bg-gray-700 overflow-y-auto px-4">
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
  </div>
</template>

<script>
export default {
  name: "ToDoContainer",

  data: () => ({
    newToDo: "",
  }),

  computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos;
    },
    completedToDos() {
      return this.$store.getters.getCompleteToDos;
    },
  },

  methods: {
    completeToDo(toDoToComplete) {
      this.$store.dispatch("completeToDo", toDoToComplete);
    },
    deleteToDo(toDoToDelete) {
      this.$store.dispatch("deleteToDo", toDoToDelete);
    },
    getUncompletedToDos() {
      this.$store.dispatch("getUncompletedToDos");
    },
    getCompletedToDos() {
      this.$store.dispatch("getCompletedToDos");
    },

    addToDo() {
      this.$store.dispatch("addToDo", this.newToDo);
    },
  },

  created() {
    this.getCompletedToDos();
    this.getUncompletedToDos();
  },
};
</script>

<style></style>
