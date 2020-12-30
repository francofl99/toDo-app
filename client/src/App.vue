<template>

  <MainView>
    <ToDoInput />
    <Container :toDoType=" 'uncompleted'  " />
    <Container :toDoType=" 'completed'  " />

  </MainView>

  
</template>

<script>
import MainView from './views/MainView'
import ToDoInput from './components/ToDoInput'
import Container from './components/toDo-container/Container'

export default {
  components: {
    MainView,
    ToDoInput,
    Container
  }

}
</script>

<style>

</style>