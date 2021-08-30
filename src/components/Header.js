import React from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { logout } from '../actions'

const Header = ({ auth, logout }) => {
  return (
    <div className='header'>
      <h1>Virtual Wallet</h1>
      <div className='user'>
        {auth.user ? <p>Hello {auth.user.name}</p> : null}
        <button className='logout' type='submit' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { logout })(Header)
