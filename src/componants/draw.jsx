import React from 'react';
import {makeStyles, Drawer, Typography, Button, List, ListItem,Grid,Card,CardContent,CardActionArea, Toolbar } from '@material-ui/core';

const box = [
    {
        id:1,
        image:'https://th.bing.com/th/id/OIP.NrsWsgMRk_JewUZ_MK8GoQHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:2,
        image:'https://th.bing.com/th/id/OIP.k0e24GGgPuC3zppAd8RPZwHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:3,
        image:'https://th.bing.com/th/id/OIP.MlBHc8CLsMZe6vfQV1MXDAHaLL?w=203&h=307&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:4,
        image:'https://th.bing.com/th/id/OIP.BbEoCYLxwtS7l1FyjgD7WgHaFj?w=223&h=180&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:5,
        image:'https://th.bing.com/th/id/OIP.NrsWsgMRk_JewUZ_MK8GoQHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:6,
        image:'https://th.bing.com/th/id/OIP.k0e24GGgPuC3zppAd8RPZwHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:7,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:8,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:'Ice-Cream',
        price:'100'
    },
    {
        id:9,
        image:'https://th.bing.com/th/id/OIP.NrsWsgMRk_JewUZ_MK8GoQHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100',
        qty:'1',
    },
    {
        id:10,
        image:'https://th.bing.com/th/id/OIP.k0e24GGgPuC3zppAd8RPZwHaLH?w=204&h=306&c=7&o=5&dpr=1.25&pid=1.7',
        title:'Ice-Cream',
        price:'100',
        qty:'1'
    },
    {
        id:11,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:'Ice-Cream',
        price:'100',
        qty:'1'
    },
    {
        id:12,
        image:'https://www.purneamall.com/wp-content/uploads/2018/11/dhara1lt-247x296.jpg',
        title:'Ice-Cream',
        price:'100',
        qty:'1'
    }
]

const setStyles = makeStyles((theme) => ({
    root:{
        marginTop: '70px',
        display: 'flex',
    },
    drawer:{
        marginTop: '200px',
    },
    list:{
        width: '240px',
        flexShrink: 0,
    },
    content:{
        marginLeft: '260px',
        width:'850px',
    },
}));

function Draw(props) {
    const classes = setStyles();
    return(
        <React.Fragment>
            <div className={classes.root}>
                <Drawer variant='permanent' className={classes.drawer}>
                    <Toolbar>
                        <Typography variant='h5'>Views All</Typography>
                    </Toolbar>
                    <List className={classes.list}>
                        {['All','Veg','Fast Food','Paneer','Mashrom','Daal','Snacks','Soup','Barger','Thai Food','Starred','Thai Food','Starred','Thai Food','Starred'].map((text,i) => (
                        <ListItem button >
                            <Button>{text}</Button>
                        </ListItem>
                         ))};
                     </List>
                </Drawer>
            <main className={classes.content}>
                <Grid container className={classes.card}>
                {box.map((value,key) => (
                    <Grid xl={5} style={{padding:5, width:200}}>
                        <Card key={key} orderNow={() => props.orderNow(value.id)} style={{height:330,}}>
                            <img width='250' height='200' src={value.image} alt=""/>
                            <CardContent align='center'>
                                <Typography variant='body2'>{value.title}</Typography>
                                <Typography variant='h5' component='h2'>₹{value.price}</Typography>
                            </CardContent>
                            <CardActionArea>
                                <Button variant='contained' color='secondary' onClick={props.orderNow}>Order Now</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
                </Grid>                    
            </main>
            </div>
        </React.Fragment>
    )
}

export default Draw;