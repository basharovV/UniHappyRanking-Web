import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Word = (color, text) => (
    <p style={{color: color}}>{text}</p>
)

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#FEF6DE',
        padding: theme.spacing(3)
    },
    title: {
        "font-family": "Pacifico, cursive"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <h1 className={classes.title}>UniHappyRanking</h1>
        <h2>A
            <span style={{color: 'green'}}> happiness</span>
            <span style={{color: 'blue'}}> ranking</span> of
            <span style={{color: 'purple'}}> universities</span> based on
            <span style={{color: 'cyan'}}> tweets</span> from
            <span style={{color: 'orange'}}> students</span> 
            </h2>
        <Typography variant="caption">Note: the data may not be entirely accurate. In fact it's probably not representative at all, so take this with a bag of salt. If you want to improve the data, get in touch!</Typography>
    </div>
)}

export default Header
