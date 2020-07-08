import React from 'react'
import { AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Nav = () => {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li>
            Listings
          </li>
          <li>
            Login
          </li>
        </ul>
        </Toolbar>
    </AppBar>
  )
}

export default Nav