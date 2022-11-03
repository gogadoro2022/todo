import {v4 as uuidv4} from 'uuid'

export default function todoReducer(state, action) {
  switch(action.type) {
    case 'add' : {
      const {add} = action
      return [...state, {name: add, id: uuidv4(), status: 'would'} ]
    }
    case 'delete' : {
      const deleteTodo = action.deleting.name
      return state.filter((item) => item.name !== deleteTodo)
    }
    case 'check' : {
      const {checkedItem} = action
      return state.map((todo) => {
        if(todo.id === checkedItem.id) {
          if(checkedItem.status === 'done'){
            return {...checkedItem, status: 'would'}
          } else if (checkedItem.status === 'would')
          return {...checkedItem, status: 'done'}
        }
        return todo
      })
    }
  //   case 'filterTodo' : {
  //     console.log('해야할일 클릭')
  //     return state.filter((item) => item.status !== 'would')
  //   }
  //   case 'filterDone' : {
  //     console.log('완료한일 클릭')
  //     return state.filter((item) => item.status !== 'done')
  //   }
  //   case 'filterAll' : {
  //     console.log('모두 클릭')
  //     return [...state]
  //   }
  }
  
} 