import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "../App.css";

const useStyles = makeStyles({
  body: {
    display: "flex"
  },
  container: {
    paddingTop: 80, 
    marginLeft: 40,
    width: 1000
  },
  name: {
    fontSize: 24,
    paddingBottom: 13
  },
  details: {
    fontSize: 16,
    paddingBottom: 13
  }, 
  map: {
    marginLeft: 60,
    marginTop: 50,
    width: 600,
    height: 500 
  },
  popup: {
    fontSize: 16
  }
});


const Details = (props) => {
  const classes = useStyles();
  const id = props.match.params.id
  const listing = props.listings.find(p => p.id == id)
    return (
      <div className={classes.body}>
        <Container className={classes.container}>
          <Typography className={classes.name}>{listing.name}</Typography>
          <Typography className={classes.details}>{listing.hours}</Typography>
          <Typography className={classes.details}>{listing.address}</Typography>
          <Typography className={classes.details}>{listing.description}</Typography>
        </Container>
        <Container>
          <Map className={classes.map} center={[30.267153, -97.743057]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={listing.geolocation}></Marker>
            <Popup position={listing.geolocation} className={classes.popup}>{listing.name}</Popup>
          </Map>
        </Container>
      </div>
    )
}

export default Details