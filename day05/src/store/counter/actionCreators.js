import {ADD_NUMBER, SUB_NUMBER} from "./constants.js"
const addNumber = (num) => ({type: ADD_NUMBER, num})
const subNumber = (num) => ({type: SUB_NUMBER, num})

export {
    addNumber,
    subNumber,
}