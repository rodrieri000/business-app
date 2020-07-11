import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    paddingTop: 50
  }
});

const Listings = (props) => {
  const classes = useStyles();
  const [setLogStatus] = React.useState(false)

  const loggedIn = (props) => {
    setLogStatus(!loggedIn)
    props.logout(false)
  }
    return (
        props.isLoggedIn ? (
            <Container maxWidth="lg" className={classes.container}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Hours</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell component={Link} to={`/listing/${listing.id}`} style={{ textDecoration: "none"}}>{listing.name}</TableCell>
                        <TableCell>{listing.description}</TableCell>
                        <TableCell>{listing.hours}</TableCell>
                        <TableCell>{listing.address}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                className ="icon text-red"
                                onClick ={() => props.removeListing(index)}/>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
        ) : (
        <Container maxWidth="lg" className={classes.container}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Hours</TableCell>
                        <TableCell align="center">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell component={Link} to={`/listing/${listing.id}`} style={{  textDecoration: "none"}}>{listing.name}</TableCell>
                        <TableCell>{listing.description}</TableCell>
                        <TableCell>{listing.hours}</TableCell>
                        <TableCell>{listing.address}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
        ) 
    ) 
}

export default Listings;