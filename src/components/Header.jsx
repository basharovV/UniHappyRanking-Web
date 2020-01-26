import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { grey, purple, orange } from '@material-ui/core/colors';

const Word = (color, text) => (
    <p style={{ color: color }}>{text}</p>
)

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#FEF6DE',
        padding: theme.spacing(3)
    },
    title: {
        "font-family": "Pacifico, cursive",
        display: 'inline-block'

    },
    feedback: {
        float: 'right',
        position: 'absolute',
        top: 0,
        right: -2
    },
    beta: {
        position: "absolute",
        marginTop: '1.8em',
        marginLeft: theme.spacing(4),
        display: 'inline-block',
        padding: theme.spacing(1),
        border: '2px solid orange',
        borderRadius: 8,
        color: 'orange'
    }
}));

const FeedbackButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[100],
      '&:hover': {
        backgroundColor: grey[200],
      },
    },
  }))(Button);

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <FeedbackButton
                        color="secondary"
                        className={classes.feedback}
                        startIcon={<FavoriteIcon />}>
                        Give feedback
                </FeedbackButton>
                </Grid>
                <Grid item xs={12}>
                    <h1 className={classes.title}>UniHappyRanking</h1>
                    <div className={classes.beta}>Beta</div>
                </Grid>
                <Grid item xs={12}>
                    <h2>A
                    <span style={{ color: 'green' }}> happiness</span>
                    <span style={{ color: 'blue' }}> ranking</span> of
                    <span style={{ color: 'purple' }}> universities</span> based on
                    <span style={{ color: 'cyan' }}> tweets</span> from
                    <span style={{ color: 'orange' }}> students</span>
                    </h2>
                    <Typography variant="caption">Note: the data may not be entirely accurate. In fact it's probably not representative at all, so take this with a bag of salt. If you want to improve the data, get in touch!</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
