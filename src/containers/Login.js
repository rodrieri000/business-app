import { connect } from 'react-redux'
import Login from '../components/Login'
import { login, addUser } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.isLoggedIn,
      username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (bool) => dispatch(login(bool)),
    addUser: (username) => dispatch(addUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)