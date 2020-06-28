import React from 'react'
import { Container, Menu, MenuItem, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';




const Import = (props) => {
    // fill out this component
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
                                <MenuItem onClick={() => props.deleteMake(index)}>
                                    Delete
								</MenuItem>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}


export default Import