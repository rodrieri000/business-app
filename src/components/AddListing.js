import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import { Map, TileLayer } from 'react-leaflet'
import { withStyles } from '@material-ui/core/styles';
import "../App.css";

const useStyles = theme => ({
  body: {
    display: "flex"
  },
  container: {
    paddingTop: 50, 
    marginLeft: 40,
    width: 1000
  }, 
  map: {
    marginLeft: 60,
    marginTop: 50,
    width: 600,
    height: 500 
  }
});

class AddListing extends Component {
  state = {
    id: '', 
    name: '', 
    address: '',
    hours: '', 
    description: '',
    geolocation: []
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
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <Container maxWidth="lg" className={classes.container}>
          <form className="login-form" 
            onSubmit={this.handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', width: '500px', marginTop: 20 }}>
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
        <Container>
          <Map className={classes.map} center={[30.267153, -97.743057]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </Map>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddListing)
