import {
  GET_MOVEMENT,
  GET_MOVEMENTS,
  ADD_MOVEMENT,
  UPDATE_MOVEMENT,
  DELETE_MOVEMENT
} from '../actions/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case GET_MOVEMENT:
      return { ...state, movements: action.payload }
    case GET_MOVEMENTS:
      return { ...state, movements: action.payload }
    case ADD_MOVEMENT:
      return { ...state, movements: action.payload }
    case UPDATE_MOVEMENT:
      return { ...state, movements: action.payload }
    case DELETE_MOVEMENT:
      return { ...state, movements: action.payload }
    default:
      return state
  }
}
