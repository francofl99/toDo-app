<template>

  <MainView>
    <ToDoInput />
    <UncompleteToDoContainer/>
    <CompletedToDoContainer />
  </MainView>

  
</template>

<script>
import MainView from './views/MainView'
import ToDoInput from './components/ToDoInput'
import UncompleteToDoContainer from './components/UncompleteToDoContainer'
import CompletedToDoContainer from './components/CompletedToDoContainer'

export default {
  components: {
    MainView,
    ToDoInput,
    UncompleteToDoContainer,
    CompletedToDoContainer
  }

}
</script>

<style>

</style>