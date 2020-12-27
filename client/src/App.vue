<template>
  <v-app>
   
    <ToDoInput />

    <ToDoContainer />
   
  </v-app>
</template>

<script>
import ToDoInput from './components/ToDoInput'
import ToDoContainer from './components/ToDoContainer'

export default {
  name: 'App',

  components: {
    ToDoInput,
    ToDoContainer
  },

};
</script>
