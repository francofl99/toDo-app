<template>
  <v-container>
    <v-row>
      <v-col class=" px-2 py-2 ">
        <h1 class="displey-4 blue-grey--text font-weight-bold text-center">
          Uncompleted ToDo's
        </h1>
        <v-virtual-scroll
          :items="uncompletedToDos"
          :item-height="50"
        >
          <template v-slot:default="{ item }">
            <v-card
              elevation="2"
              class="ma-2"
              color="white"
              max-width="500"
            >
              <v-card-text class="font-weight-bold title blue--text">
                {{ item.title }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="completeToDo(item)"
                  class="mx-2"
                  small
                  color="green"
                >
                  Done
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-virtual-scroll>
      </v-col>

      <v-col>
        <h1 class="displey-4 blue-grey--text font-weight-bold text-center">
          Completed ToDo's
        </h1>
        <v-card
          elevation="2"
          v-for="toDo in completedToDos"
          :key="toDo._id"
          class="ma-2"
          color="blue"
          dark
          max-width="500"
        >
          <v-card-title class="font-weight-bold title white--text">
          </v-card-title>
          <v-card-text class="font-weight-bold title white--text">
            {{ toDo.title }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="deleteToDo(toDo)" class="mx-2" small color="red">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ToDoContainer",

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
  },

  created() {
    this.getCompletedToDos();
    this.getUncompletedToDos();
  },
};
</script>

<style></style>
