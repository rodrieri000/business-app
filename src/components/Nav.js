import React, { Component } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'


class Nav extends Component {

  state = {
    loggedIn: this.props.isLoggedIn
  }
  
  handleLogout = event => {
    this.props.logout(false)
    this.setState ({
      loggedIn: false
    })
  }

  render() {
    return (
      this.state.isLoggedIn ? (
        <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Austin Small Business
          </Typography>
            <Button>
              <Link to="/">Listings</Link>
            </Button>
            <Button>
              <Link to ='/addlisting'>Add Listing</Link>
            </Button>
            <Button>
              <Link to ='/' onClick={this.handleLogout}>Logout</Link>
            </Button>
        </Toolbar>
      </AppBar>
      ) : (
      <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
          <Button>
            <Link to="/">Listings</Link>
          </Button>
          <Button>
            <Link to ='/login'>Login</Link>
          </Button>
      </Toolbar>
      </AppBar>
      )
    )
  }
}

export default Nav