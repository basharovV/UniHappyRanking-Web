import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import rankings from '../assets/happiness_ranking_min_50_tweets.json';

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
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        paddingTop: 0,
        display: 'flex',
    },
    rank: {
        padding: theme.spacing(2),
        display: 'flex'
    },
    tweets_info: {
        color: "#C9C9C9",
        marginLeft: theme.spacing(1)
    },
    title: {
        paddingTop: 0
    },
    uni_link: {
        textDecoration: 'none',
        color: 'black'
    }
}));

/**
 * 
 * @param {String} uniName The name of the university
 */
const getGithubUrl = (uniName) => {
    const formatted = uniName.replace(' ', '_').toLowerCase()
    const csved = `${formatted}.csv`
    return `https://github.com/basharovV/UniHappyRanking/blob/master/tweets-data/${csved}`
}

export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0} style={{ maxHeight: "100%", minWidth: '600px', overflow: 'auto' }}>
                <List>
                    {rankings.map((ranking, idx) => (
                        <ListItem className={classes.item} key={ranking.field1}>
                            <Card className={classes.card} variant="outlined">
                                <div className={classes.rank}>
                                    <Typography color="textSecondary" gutterBottom>
                                        Rank: <span style={{ color: "#5700FF", fontWeight: 'bold' }}> {idx + 1} </span>/ {rankings.length}
                                    </Typography>
                                    <Typography className={classes.tweets_info} variant="body2">
                                        <Link href={getGithubUrl(ranking.institution)}>
                                            from {ranking.total} tweets ({ranking.positive} pos, {ranking.negative} neg) ℹ
                                        </Link>
                                    </Typography>
                                </div>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.title} variant="body1" component="h3">
                                        <Link className={classes.uni_link} href={`https://twitter.com/${ranking.twitter_handle}`}>
                                            {ranking.institution}
                                        </Link>
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
