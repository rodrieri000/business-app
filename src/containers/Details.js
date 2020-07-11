import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn,
    username: state.username
  }
}

export default connect(mapStateToProps)(Details)