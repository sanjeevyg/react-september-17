exports.INCREMENT = (nr) => {return {
    type: "INCREMENT",
    increase: nr
}}

exports.DECREMENT = (nr) => {return {
    type: "DECREMENT",
    decrease: nr
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
