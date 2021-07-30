import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';


function Head() {
    return(
        <React.Fragment>
            <AppBar color='secondary'>
                <Toolbar>
                    <Typography>Restorant</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Head;