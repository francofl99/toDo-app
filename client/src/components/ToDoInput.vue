<template>
  <v-container class=" rounded-lg light-blue darken-2" >
    <div class="d-flex justify-center">
      <h1 id="addTodo">
        Add ToDo
      </h1>
    </div>

    <div class="d-flex justify-center">
      <v-col cols="6" style="margin: 0px auto;">
        <v-text-field v-model="newToDo" label="Add Todo" solo></v-text-field>
      </v-col>
    </div>
    <div class="d-flex justify-center">
      <v-btn @click="addToDo()" color="prymary"> Add ToDo </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ToDoInput",

  methods: {
    addToDo() {
      this.$store.dispatch("addToDo", this.newToDo);
    },
  },

  data: () => ({
    newToDo: "",
  }),
};
</script>

<style></style>
