import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: 50, 
    width: 650
  }, 
  paper: {
    padding: 20
  },
  name: {
    fontSize: 20,
    paddingBottom: 15
  },
  details: {
    paddingBottom: 15
  }
});


const Details = () => {
  const classes = useStyles();
    // const id = props.match.params.id
    // const listing = props.listing.find(p => p.id == id)

    return (
    <Container className={classes.container}>
        <Paper className={classes.paper}>
            {/* <Typography>{listing.name}</Typography>
            <Typography>{listing.address}</Typography>
            <Typography>{listing.hours}</Typography>
            <Typography>{listing.description}</Typography>
            <Typography>GOOGLE MAPS GOES HERE</Typography> */}
            <Typography className={classes.name}>Name</Typography>
            <Typography className={classes.details}>Address</Typography>
            <Typography className={classes.details}>Hours</Typography>
            <Typography className={classes.details}>Description</Typography>
        </Paper>
    </Container>

    )
}

export default Details