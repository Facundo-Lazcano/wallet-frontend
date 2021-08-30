import React, { useEffect } from 'react'
import Header from '../components/Header'
import Movements from '../components/Movements'
import { connect } from 'react-redux'
import { getMovements } from '../actions'
import history from '../history'
import './HomePage.css'

const HomePage = ({ getMovements, auth, movements }) => {
  useEffect(() => {
    if (auth.user) {
      getMovements(auth.user.token)
    } else {
      history.push('/login')
    }
  }, [getMovements, auth])
  const ingresos = []
  const gastos = []
  if (movements) {
    for (let i = 0; i < movements.length; i++) {
      if (movements[i].movement_type === 'entrys') {
        ingresos.push(movements[i])
      } else {
        gastos.push(movements[i])
      }
    }
  }
  const entrysAmount = () => {
    let res = 0
    ingresos.forEach(entry => {
      res += entry['amount']
    })
    return res
  }
  let expensesAmount = () => {
    let res = 0
    gastos.forEach(expense => {
      res += expense['amount']
    })
    return res
  }

  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col-xl-6'>
          <Movements
            type='entrys'
            entrysAmount={entrysAmount()}
            movements={ingresos}
          />
        </div>
        <div className='col-xl-6'>
          <Movements
            type='expenses'
            expensesAmount={expensesAmount()}
            movements={gastos}
          />
        </div>
      </div>

      <div className='balance'>
        <h4>Total: ${entrysAmount() - expensesAmount()}</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    movements: state.movements.movements
  }
}

export default connect(mapStateToProps, { getMovements })(HomePage)
