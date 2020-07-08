import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class AddListing extends Component {
  state = {
    id: '', 
    name: '', 
    address: '',
    hours: '', 
    description: '',
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.id] = e.target.value
    this.setState(state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const addedListing = this.state;
    addedListing.id = this.props.listing.length;
    this.props.addListing(addedListing);
    // this.setState({ isShowing: true });
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <form className="login-form" 
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', width: '400px', marginTop: 20 }}>
            <TextField
              required
              id='name'
              onChange={this.handleTextChange}
              value={this.state.name}
              label="Business Name"
              type="text" />
            <TextField
              required
              id='address'
              onChange={this.handleTextChange}
              value={this.state.address}
              label="Address"
              type="text" />
            <TextField
              required
              id='hours'
              onChange={this.handleTextChange}
              value={this.state.hours}
              label="Hours"
              type="text" />
            <TextField
              required
              id='description'
              multiline
              rows={4}
              onChange={this.handleTextChange}
              value={this.state.description}
              label="Description"
              type="text" />
            <Button
              type="submit"
              style={{ width: 50, marginTop: 10}}
              onClick={this.handleSubmit}
              variant="contained"
              color="primary">Save</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default AddListing;
