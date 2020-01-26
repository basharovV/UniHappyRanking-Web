import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import rankings from '../assets/world_rankings_with_twitter.json';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'contents',
        height: '100%',
        marginTop: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    },
    item: {
        minWidth: 600,
    },
    card: {
        minWidth: 400,
        width: '100%',
        display: 'flex'
    },
    content: {
        display: 'flex'
    },
    rank: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0} style={{ maxHeight: "100%", minWidth: '600px', overflow: 'auto' }}>
                <List>
                    {rankings.map(ranking => (
                        <ListItem className={classes.item} key={ranking.field1}>
                            <Card className={classes.card} variant="outlined">
                                <div className={classes.rank}>
                                <Typography color="textSecondary" gutterBottom>
                                        Rank: {ranking.world_rank} / {rankings.length}
                                    </Typography>
                                    <Typography variant="body2">from 50 tweets</Typography>
                                </div>
                                <CardContent className={classes.content}>
                                    <Typography variant="body1" component="h3">
                                        {ranking.institution}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ListItem>
                    ))
                    }
                </List>
            </Paper>
        </div>
    )
}
