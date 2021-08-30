import axios from 'axios'
import history from '../history'
import {
  ADD_MOVEMENT,
  DELETE_MOVEMENT,
  GET_MOVEMENT,
  GET_MOVEMENTS,
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_MOVEMENT
} from './types'

export const login = (email, password) => async dispatch => {
  try {
    const res = await axios.post(`/api/login`, {
      email,
      password
    })
    dispatch({ type: LOGIN, payload: res.data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const register = (name, email, password) => async dispatch => {
  try {
    const res = await axios.post(`/api/register`, {
      name,
      email,
      password
    })
    console.log(res.data)
    dispatch({ type: REGISTER, payload: res.data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const logout = () => async dispatch => {
  try {
    const res = await axios.post(`/api/logout`)
    dispatch({ type: LOGOUT, payload: res.data })
    history.push('/login')
  } catch (error) {
    console.log(error)
  }
}

export const getMovements = token => async dispatch => {
  try {
    const res = await axios.get(`/api/movements`, {
      headers: { authorization: `Bearer ${token}` }
    })
    dispatch({ type: GET_MOVEMENTS, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}

export const getMovement = (id, token) => async dispatch => {
  try {
    const res = await axios.get(`/api/movements/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    dispatch({ type: GET_MOVEMENT, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}

export const addMovement = (
  amount,
  description,
  movement_type,
  category,
  token
) => async dispatch => {
  try {
    const res = await axios.post(
      '/api/movements/new',

      {
        amount,
        description,
        movement_type,
        category
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )

    dispatch({ type: ADD_MOVEMENT, payload: res.data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const updateMovement = (
  id,
  amount,
  description,
  category,
  token
) => async dispatch => {
  try {
    const res = await axios.put(
      `api/movements/${id}/edit`,

      {
        amount,
        description,
        category
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    dispatch({ type: UPDATE_MOVEMENT, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteMovement = (id, token) => async dispatch => {
  try {
    const res = await axios.delete(`api/movements/${id}/delete`, {
      headers: { authorization: `Bearer ${token}` }
    })
    dispatch({ type: DELETE_MOVEMENT, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}
