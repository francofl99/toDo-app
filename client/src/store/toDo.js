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
          todo: toDoToAdd
        }).then( response => {
          console.log(response.data)
        })
  
        context.dispatch('getUncompletedToDos')
      },
  
      completeToDo(context, toDoToComplete) {
        axios.post("http://localhost:3000/todo/complete/" + toDoToComplete._id)
        .then(() => {
          context.dispatch('getUncompletedToDos')
          context.dispatch('getCompletedToDos')
        })
      },
  
      deleteToDo(context, toDoToDelete) {
        axios.delete("http://localhost:3000/todo/" + toDoToDelete._id)
        .then(() => {
          context.dispatch('getCompletedToDos')
        })
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