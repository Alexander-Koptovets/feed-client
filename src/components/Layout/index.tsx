import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Grid, Button  } from "@mui/material";

import './style.css';

export const Layout = (): JSX.Element => (
    <div className='layout'>
        <Grid container>
            <Grid item xs={4}>
                <Link to='/'>
                    <Button variant="text">Home</Button>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to='/posts'>
                    <Button variant="contained">Create Posts</Button>
                </Link>
            </Grid>
            <Grid item xs={4}>
                <Link to='/auth'>
                    <Button variant="outlined">Log In</Button>
                </Link>
            </Grid>
        </Grid>
        <Outlet />
    </div>
);