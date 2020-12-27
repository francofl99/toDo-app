<template>
  <v-app>
    <div class="d-flex justify-center">
     <h1 id="addTodo"> 
       Add ToDo
     </h1>

   </div>

   <div class="d-flex justify-center">
     <v-col cols="6" style="margin: 0px auto;">
       <v-text-field v-model="newToDo" label="Add Todo" solo></v-text-field >
     </v-col>
   </div>
   <div class="d-flex justify-center">
     <v-btn @click="addToDo()" color="prymary"> Add ToDo </v-btn>

   </div>
  </v-app>
</template>

<script>
export default {
    name: 'InputToDo',
    
    data: () => ({
        newToDo: '',
    }),

    methods: {
     addToDo() {
      this.$store.dispatch('addToDo', this.newToDo)  
    },

    }
}
</script>

<style>

</style>