import {INCREMENT, DECREMENT, DELETE_CHARACTER, GET_CHARACTERS, TOGGLE} from '../actions';
console.log(INCREMENT())
console.log(GET_CHARACTERS())

//REVISIT NOTE: If exports.count is used to export while importing something from different file it gives error.

export const count = (state=0, action) => {
    switch(action.type) {
      case INCREMENT().type:
        return state + action.increase
      case DECREMENT().type:
        return state - action.decrease
      default:
        return state
    }
  }
  
export const character = (state=[], action) => {
  switch(action.type) {
    case GET_CHARACTERS().type:
      return action.characters
    case DELETE_CHARACTER().type:
      return action.newCharacterList
    default: 
      return state
  }
}

export const toggle = (state=true, action) => {
  switch(action.type) {
    case TOGGLE().type:
      return !state
    default:
      return true
  }
}


  