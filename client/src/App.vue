<template>
  <MainView>
    <ToDoInput />
    <ToDoContainer :toDoType=" 'uncompleted'  " />
    <ToDoContainer :toDoType=" 'completed'  " />
  </MainView>
</template>

<script>
import MainView from './views/MainView'
import ToDoInput from './components/toDo-input/ToDoInput'
import ToDoContainer from './components/toDo-container/ToDoContainer'

export default {
  components: {
    MainView,
    ToDoInput,
    ToDoContainer
  }
}
</script>

<style>

</style>