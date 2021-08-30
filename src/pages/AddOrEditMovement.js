import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateMovement, getMovement, addMovement } from '../actions'
import Header from '../components/Header'
import history from '../history'
import './AddOrEditMovement.css'

const AddOrEditMovements = ({
  Add,
  getMovement,
  updateMovement,
  addMovement,
  auth,
  match,
  movement
}) => {
  useEffect(() => {
    if (!auth.user || movement === undefined) {
      history.push('/login')
    }
    if (!Add) {
      getMovement(match.params.id, auth.user.token)
    }
  }, [getMovement, auth, Add, match, movement])

  const [amount, setAmount] = useState(movement.movements['amount'] || 0)
  const [description, setDescription] = useState(
    movement.movements['description'] || ''
  )
  const [category, setCategory] = useState(movement.movements['category'] || '')
  const [date, setDate] = useState(movement.movements['date'] || '')
  const movement_type = match.params.type

  const handleAddOrEdit = () => {
    if (Add) {
      addMovement(amount, description, movement_type, category, auth.user.token)
    }
  }

  return (
    <div className='container'>
      <Header />
      <div className='form'>
        <h2>
          {' '}
          {Add ? 'Add' : 'Edit'} {match.params.type}{' '}
        </h2>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={amount}
            className='form-control'
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='Description'>Description</label>
          <input
            type='text'
            name='Description'
            id='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='Category'>Category</label>
          <input
            type='text'
            name='Category'
            id='Category'
            value={category}
            onChange={e => setCategory(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='Date'>Date</label>
          <input
            type='date'
            name='Date'
            id='Date'
            className='form-control'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <input
          onClick={handleAddOrEdit}
          type='button'
          value={Add ? 'Add' : 'Edit'}
          className='btn btn-primary'
        />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    movement: state.movements
  }
}
export default connect(mapStateToProps, {
  getMovement,
  updateMovement,
  addMovement
})(AddOrEditMovements)
