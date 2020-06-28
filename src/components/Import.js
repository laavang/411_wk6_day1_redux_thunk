import React from 'react'
import { Container, Menu, MenuItem, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons'


const Import = (props) => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [index, setIndex] = React.useState(null);

    const handleClick = (event, index) => {
      setAnchorEl(event.currentTarget);
      setIndex(index);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setIndex(null);
    };


    return (
        <Container maxWidth="lg" className="car-container">
            <h2>COUNT: {props.makes.length}</h2>
            <Button color="primary" variant="contained" style={{ marginBottom: "40px" }} onClick={props.fetchMakes}>Import</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {make.MakeId}
                            </TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={event => handleClick(event, index)}>
                                <MoreVert/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    props.deleteMake(index);
                    handleClose();
                }}>
                    Delete
				</MenuItem>
            </Menu>
        </Container>
    )
}


export default Import