

const reducers = () => {
    count: {const count = (state=0, action) => {
        switch(action.type) {
          case "INCREASE":
            return state + 1
          case "DECREASE":
            return state - 1
          default: 
            return state
        }
      }}
      
      character: {const character = (state=[], action) => {
        switch(action.type) {
          case "GET_CHARACTERS":
            return action.characters
          case "DELETE_CHARACTERS":
            return state
          default: 
            return state
        

}


  