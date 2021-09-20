exports.INCREMENT = (n) => {return {
    type: "INCREMENT",
    payload: n
}}

exports.DECREMENT = () => {return {
    type: "DECREMENT"
}}

exports.GET_CHARACTERS = (character) => {return {
    type: "GET_CHARACTERS",
    characters: character
}}

exports.DELETE_CHARACTER = (character) => {return {
    type: "DELETE_CHARACTER",
    newCharacterList: character
}}

exports.TOGGLE = () => { return {
    type: "TOGGLE"
}}
