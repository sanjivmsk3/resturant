import {React, useState} from 'react';
import {Button, Table, TableHead, TableRow, TableCell, makeStyles, Grid, Paper, TableBody, InputLabel, Input, FormControl, FormHelperText } from '@material-ui/core';


function Todos(props){

    const [data,setData] = useState(props.source);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [roll, setRoll] = useState(null);
    const addData = () => {
        let newdata = [...data,{id:3,name:name,roll:roll,email:email}]
        setData(newdata);
        setName("");
        setRoll("");
        setEmail("");
    }

    const deleteData = (id) => {
        setData(data.filter(x => x.id != id));
    };
    return(
        <React.Fragment>
            <Grid container>
            <Grid item xs={6}>
          <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell><input type='text' placeholder='enter your name' value={name} onChange={(e) =>setName(e.target.value)} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Roll No</TableCell>
                        <TableCell><input type='text' placeholder='enter your roll no' value={roll} onChange={(e) =>setRoll(e.target.value)}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell><input type='text' placeholder='enter your email' value={email} onChange={(e) =>setEmail(e.target.value)} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Button variant="contained" type='button' color="primary" onClick={() =>addData()}>Submit</Button></TableCell>
                    </TableRow>
                    <TableRow>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                        </FormControl>
                    </TableRow>
                </TableHead>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Roll No</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    data.map(value =>(
                        <TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.roll}</TableCell>
                            <TableCell>{value.email}</TableCell>
                            <TableCell><Button variant="contained" color="primary">Submit</Button></TableCell>
                        </TableRow>
                ))
                }
                </TableBody>
            </Table>
          </Paper>
        </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Todos;