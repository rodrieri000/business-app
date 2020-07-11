export const addListing = (listing) => {
  return {
      type: 'ADD_LISTING',
      value: listing
  }
}

export const removeListing = (index) => {
  return {
      type: 'REMOVE_LISTING',
      value: index
  }
}

export const login = (bool) => {
  return {
    type: 'LOGIN',
    value: bool
  }
}

export const logout = (bool) => {
  return {
    type: 'LOGOUT',
    value: bool
  }
}

export const addUser = (username) => {
  return {
    type: 'SET_USERNAME',
    value: username
  }
}