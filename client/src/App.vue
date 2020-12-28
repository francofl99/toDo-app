<template>
  <v-app>

    <MainView>
   
      <ToDoContainer />
      <v-btn fab bottom right dark elevation="2" fixed >

      </v-btn>
      <ToDoInput />

    </MainView>
   
  </v-app>
</template>

<script>
import MainView from './views/MainView'
import ToDoContainer from './components/ToDoContainer'
import ToDoInput from './components/ToDoInput'

export default {
  name: 'App',

  components: {
    MainView,
    ToDoContainer,
    ToDoInput
  },

};
</script>
