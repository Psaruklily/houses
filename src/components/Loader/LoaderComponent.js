import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        zIndex: '10000',
        padding: '40vh 0 0 0',
        textAlign: 'center'
    }
}));

export default function Loader(props) {
    const classes = useStyles();
    return(
        <div className={classes.preloader}>
            <CircularProgress />
        </div>
    )
}