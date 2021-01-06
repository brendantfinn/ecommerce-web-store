//rafce
// functional componet

import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import useStyles from './styles'

const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo1} alt="Commerce.js" height="25px" className={classes.image} />
                        <img src={logo2} alt="Commerce.js" height="25px" className={classes.image} />
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default NavBar
