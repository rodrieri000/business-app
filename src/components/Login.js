import React, { Component } from 'react'
import { TextField, Button, Container, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  body: {
    display: "flex", 
    marginTop: 100, 
    width: 380, 
  },
  box: {
    position: "absolute",
    left: 500,
  },
  title: {
    position: "absolute",
    left: 20,
    top: 20
  },
  form: {
    display: "flex", 
    flexDirection: "column", 
    padding: 20, 
    marginTop: 30
  }, 
  user: {
    paddingBottom: 10
  },
  button: {
    marginTop: 15, 
    width: 100, 
    marginLeft: 193
  }

});

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true;max-age=60*1000"
    this.props.login(true)
    this.props.addUser(this.state.username)
    this.props.history.replace('/')
    console.log(this.props.username)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.body}>
        <Container maxWidth="md">
          <Paper className={classes.box}>
            <Typography className={classes.title} variant="h5" >
              Login
            </Typography>
            <form className={classes.form} onSubmit={this.login}>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Username"
                className={classes.user}
                type="text" />
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password" />
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary">Login</Button>
            </form>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(Login)