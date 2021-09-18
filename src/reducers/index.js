
exports.count = (state=0, action) => {
    switch(action.type) {
      case "INCREASE":
        return state + 1
      case "DECREASE":
        return state - 1
      default: 
        return state
    }
  }
  
exports.character = (state=[], action) => {
  switch(action.type) {
    case "GET_CHARACTERS":
      return action.characters
    case "DELETE_CHARACTER":
      return action.newCharacterList
    default: 
      return state
  }
}

exports.toggle = (state=true, action) => {
  switch(action.type) {
    case "TOGGLE":
      return !state
    default:
      return true
  }
}


  