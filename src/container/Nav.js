import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { login, logout } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (bool) => dispatch(login(bool)),
    logout: (bool) => dispatch(logout(bool)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)