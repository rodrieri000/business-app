import { combineReducers } from 'redux'

const listingsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            const listing = [ ...state ]
            listing.splice(action.value, 1)
            return listing
        default:
            return state
    }
}

const addUser = (state = null, action) => {
  switch(action.type) {    
    case 'SET_USERNAME' :
      return action.value
    default:
      return state
  }
}

const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN' :
      return true
    case 'LOGOUT' :
      return false
    default:
      return state
  }
}
export default combineReducers({ listings: listingsReducer, username: addUser, isLoggedIn })