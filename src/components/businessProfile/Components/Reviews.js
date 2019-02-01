import React from 'react';
import Ratings from '../../SmartComponents/Ratings';
// import './Reviews.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';

const styles = theme => ({
  root: {
      flexGrow: 1,
  },
  content: {
     padding: theme.spacing.unit * 2,
  }
})

const Reviews = ({review, date, classes}) => (
  <div className={classes.root} key={review.id}>

    <Grid container spacing={16} justify='center' alignItems="center" className={classes.content}>

      <Grid item>
        <img src={review.user.image_url} alt="" />
        <Typography variant='subheading'>
          {review.user.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={16}>
          <Grid item xs>
            <Typography>
              <Ratings rating={review.rating} />
            </Typography>
            <Typography variant='h6'>
              {new Date(date).toLocaleString().length <= 22 ?
                new Date(date).toLocaleString().slice(0,9) :
                new Date(date).toLocaleString().slice(0,10)
              }
            </Typography>
            <Typography variant='subheading'>
              {review.text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
</div>
);

export default withStyles(styles)(Reviews);
