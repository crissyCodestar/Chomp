import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
      flexGrow: 1,
  },
  alignment: {
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  }
})

const Body = ({bodyInfo, classes}) => (
  <div className={classes.root}>
    {console.log('loc',bodyInfo)}
    <Grid container className={classes.alignment} >
      <Grid item xs={9} >
        {bodyInfo.location.display_address.map((loc, i) => (
          <Typography key={i} variant='title'>
              {loc}
          </Typography>
        ))}
          <Typography variant='subheading'>
            {!!bodyInfo.location.cross_streets ? `b/t ${bodyInfo.location.cross_streets}` : "N/A"}
          </Typography>
          <Typography variant='subheading'>
            <a href={bodyInfo.phone}>
             {!!bodyInfo.phone ? `${bodyInfo.display_phone}` : "N/A"}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='subheading'>
            <a href={bodyInfo.url} target='blank'>
              yelp.{bodyInfo.alias}.com
            </a>
          </Typography>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(Body);
