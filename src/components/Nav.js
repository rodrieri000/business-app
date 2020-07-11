import React, { Component } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "../App.css";

class Nav extends Component {

  state = {
    isLoggedIn: this.props.isLoggedIn,
    username: this.props.username
  }
  
  handleLogout = event => {
    this.props.logout(false)
    this.setState ({
      loggedIn: false
    })
  }

  render() {
    return (
      this.props.isLoggedIn ? (
        <AppBar position="relative" color="primary" className="Appbar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Austin Small Business
          </Typography>
          <Typography style={{ position: "absolute", left: 250, fontSize: 15 }}>
           Logged in as: {this.props.username}
          </Typography>
            <Button>
              <Link to="/" style={{ color: "white", textDecoration: "none"}}>Listings</Link>
            </Button>
            <Button>
              <Link to ='/addlisting' style={{ color: "white", textDecoration: "none"}}>Add Listing</Link>
            </Button>
            <Button>
              <Link to ='/' onClick={this.handleLogout} style={{ color: "white", textDecoration: "none"}}>Logout</Link>
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
            <Link 
              style={{ color: "white", textDecoration: "none"}} 
              to="/">
              Listings
            </Link>
          </Button>
          <Button>
            <Link to ='/login' style={{ color: "white", textDecoration: "none"}}>Login</Link>
          </Button>
      </Toolbar>
      </AppBar>
      )
    )
  }
}

export default Nav