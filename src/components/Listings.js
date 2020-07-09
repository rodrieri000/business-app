import React from 'react'
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, 
    Menu, 
    MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
  container: {
    paddingTop: 50
  }
});

const Listings = (props) => {
  const classes = useStyles();
  const [logStatus, setLogStatus] = React.useState(false)

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
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell>{listing.name}</TableCell>
                        <TableCell>{listing.description}</TableCell>
                        <TableCell align="right">{listing.hours}</TableCell>
                        <TableCell align="right">{listing.address}</TableCell>
                        <TableCell align="right">
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
                        <TableCell align="right">Hours</TableCell>
                        <TableCell align="right">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell>{listing.name}</TableCell>
                        <TableCell>{listing.description}</TableCell>
                        <TableCell align="right">{listing.hours}</TableCell>
                        <TableCell align="right">{listing.address}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
        ) 
    ) 
}

export default Listings;