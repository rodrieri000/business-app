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

const useStyles = makeStyles({
  container: {
    paddingTop: 50
  }
});

const Listings = () => {
  const classes = useStyles();

    return (
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
                {/* <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell>{listing.name}</TableCell>
                        <TableCell>{listing.description}</TableCell>
                        <TableCell align="right">{listing.hours}</TableCell>
                        <TableCell align="right">{listing.address}</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                ))}
                </TableBody> */}
            </Table>
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu> */}
        </Container>
    )
   
}

export default Listings;