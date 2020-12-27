<template>
  <v-app>

  <div class="d-flex justify-center">
     <h1>Uncompleted ToDo</h1>
   </div>

   <div v-for="toDo in uncompletedToDos" :key="toDo._id">
     <v-card class="mx-auto" color="white" dark max-width="800">
       <v-card-text class="font-weight-bold title blue--text">
         {{ toDo.title }}

         <v-list-item id="todo-list-item" class="grow" >
           <v-btn @click="completeToDo(toDo)" class="mx-2" small color="green">
             Done
           </v-btn>
         </v-list-item >
       </v-card-text>

     </v-card>

   </div>

   <div v-for="toDo in completedToDos" :key="toDo._id">
     <v-card class="mx-auto" color="blue" dark max-width="800">
       <v-card-text class="font-weight-bold title white--text">
         {{ toDo.title }}

         <v-list-item id="todo-list-item" class="grow" >
           <v-btn @click="deleteToDo(toDo)" class="mx-2" small color="red">
             Delete
           </v-btn>
         </v-list-item >
       </v-card-text>

     </v-card>

   </div>
</v-app>
</template>

<script>
export default {
    name: 'ToDoContainer',

    computed: {
    uncompletedToDos() {
      return this.$store.getters.getUncompletedToDos
    },
    completedToDos() {
      return this.$store.getters.getCompleteToDos
    }
  },

  methods: {
    completeToDo(toDoToComplete) {
        this.$store.dispatch('completeToDo', toDoToComplete)
    },
    deleteToDo(toDoToDelete) {
        this.$store.dispatch('deleteToDo', toDoToDelete)
    },
    getUncompletedToDos() {
      this.$store.dispatch('getUncompletedToDos')
    },
    getCompletedToDos() {
      this.$store.dispatch('getCompletedToDos')
    }
  },

  created() {
    this.getCompletedToDos();
    this.getUncompletedToDos();
  }

}
</script>

<style>

</style>