import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import Header from './Components/Header';
import Images from './Components/Images';
import Body from './Components/Body';
import Reviews from './Components/Reviews';
import MiscInfo from './Components/MiscInfo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  },
  images: {
    justifyContent: 'center'
  },
  header: {
    justifyItem: 'left',
    width: '80%',
    padding: '2rem'
  },
  img: {
    borderRadius: '5px'
  },
  body: {
    borderBottom:'#cca353 2px solid',
    width: '80%'
  },
  padding: {
    padding: theme.spacing.unit * 2,
  }
})
const BusinessProfileInfo = ({businessInfo, reviewsList, classes}) => (

          <div className={classes.root}>
              <Grid container spacing={32} className={classes.content}>
                <Grid item xs={12} className={classes.padding}>
                  <Header businessInfo={businessInfo} />
                </Grid>

                <Grid container justify="center" alignItems="center" spacing={32}  className={classes.padding}>
                  <Grid className={classes.body}/>
                    <Grid item md={5} xs={10} className={classes.img}>
                      <Images  ImagesInfo={businessInfo} />
                    </Grid>
                    <Grid item md={5} xs={12}>
                      <Body bodyInfo={businessInfo} />
                    </Grid>
                  <Grid className={classes.body}/>
                </Grid>
                <Grid item xs={12}>


                  <Grid container spacing={24} className={classes.images}>
                    <Typography variant='h4' className={classes.header} >
                      Reviews
                    </Typography>
                    {
                      reviewsList.map(review => (
                        <Grid item xs={12}>
                          <Paper>
                            <Reviews key={review.id} review={review} date={Date.parse(review.time_created)}/>
                          </Paper>
                        </Grid>
                      ))

                    }
                    <Grid item xs={8}>
                      <Paper>
                        <MiscInfo miscInfo={businessInfo}/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </div>
)




export default withStyles(styles)(BusinessProfileInfo);
