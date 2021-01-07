import axios from 'axios'

export default {
    state: {
      completedToDos: [],
      uncompletedToDos: [],
    },
  
    getters: {
      getCompleteToDos(state) {
        return state.completedToDos
      },
      getUncompletedToDos(state) {
        return state.uncompletedToDos
      }
    },
  
    mutations: {
      setCompletedToDos(state, data) {
        state.completedToDos = data
      },
      setUncompletedToDos(state, data) {
        state.uncompletedToDos = data
      }
    },
  
    actions: {
      addToDo(context, toDoToAdd) {
        axios.post('http://localhost:3000/todo/add', {
          toDoToAdd: toDoToAdd
        })
        .then( () => {
          context.dispatch('getUncompletedToDos')
        })
        .catch(error => console.log(error))
      },
      toDoToEditMode(context, toDoToParseToEditMode) {
        axios.post("http://localhost:3000/todo/toEditMode/" + toDoToParseToEditMode._id, )
        .then(() => {
          context.dispatch('getAllToDos')
        })
      },
      updateToDo(context, toDos) {
        axios.post("http://localhost:3000/todo/update/" + toDos.toDo._id, {
            newToDo: toDos.newToDo
        })
        .then(() => {
          context.dispatch('getAllToDos')
        })
      },
      completeToDo(context, toDoToComplete) {
        axios.post("http://localhost:3000/todo/complete/" + toDoToComplete._id)
        .then(() => {
          context.dispatch('getAllToDos')
        })
        .catch(error => console.log(error))
      },
  
      deleteToDo(context, toDoToDelete) {
        axios.delete("http://localhost:3000/todo/" + toDoToDelete._id)
        .then(() => {
          context.dispatch('getCompletedToDos')
        })
        .catch(error => console.log(error))
      },
      
      getAllToDos(context) {
        context.dispatch('getUncompletedToDos')
        context.dispatch('getCompletedToDos')
      },

      getUncompletedToDos(context) {
        axios.get('http://localhost:3000/todo/uncompleted')
        .then(response => {
          context.commit('setUncompletedToDos', response.data)
        })
        .catch(error => console.log(error))
      },
  
      getCompletedToDos(context) {
        axios.get('http://localhost:3000/todo/completed')
        .then(response => {
          context.commit('setCompletedToDos', response.data)
        })
        .catch(error => console.log(error))
      },
  
    }
  }