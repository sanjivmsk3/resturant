import React, { useState } from 'react';
import {makeStyles, Container, Table, TableHead, TableCell, TableRow} from '@material-ui/core';
import Data from './draw';

const setStyles = makeStyles((theme) => ({
    root:{
        marginLeft:'1100px',
        position: 'fixed',
        marginTop:'-1015px',
        width:'400px',
    }
}));

function Drawer(props) {
    const classes = setStyles();
    const [box,setbox] = useState(Data);
    const [order, setOrder] = useState([]);
    let total = 0;
    const [sum, setSum] = useState();

    const orderNow = (id) => {
        let getProduct = box.filter(p => p.id === id);
        let getOrder = order.filter(o => o.id === id);
        if(getOrder.length > 0){
            setOrder(order.map(value => {
                if(value.id == id){
                    value.qty+=1
                }
                total += (value.qty * value.price);
                return value;
            }))
        }
        else{
            getProduct.map((value,key) =>{
                setOrder([...order,{id:value.id,name:value.title,price:value.qty}]);
                total += (value.qty * value.price);
            })
            setSum(total)
        }
    }

    return(
        <React.Fragment>
            <Container className={classes.root}>
                <Table>
                    <TableHead size='small'>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Unit Price</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    {order.map((r,key) => (
                        <TableRow>
                            <TableCell>{r.title}</TableCell>
                            <TableCell>{r.price}</TableCell>
                            <TableCell>{r.qty}</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell button >Delete</TableCell>
                        </TableRow>
                    ))}
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Drawer;