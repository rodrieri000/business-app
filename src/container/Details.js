import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(Details)