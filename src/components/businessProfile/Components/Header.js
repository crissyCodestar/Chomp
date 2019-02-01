import React from 'react';
import Ratings from '../../SmartComponents/Ratings';
import Categories from '../../SmartComponents/Categories';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    justifyContent: 'center'
  }
});

const Header = ({businessInfo, classes}) => (

<div className={classes.root}>
  <Grid container className={classes.container}>
{console.log(businessInfo)}
    {console.log(businessInfo.categories.map(el => el.title).join(", "))}
  <Grid item xs={10}>
    <Typography  variant="h3" >
      {businessInfo.name}
    </Typography>
  </Grid>


  <Grid item xs={10}>
    <Typography variant="h6">
      <Ratings rating={businessInfo.rating} reviewCount={businessInfo.review_count} review={true} />
    </Typography>
  </Grid>

  <Grid item xs={10}>
    <Typography variant="h6">
    {businessInfo.price} ・ {businessInfo.categories.map(el => el.title).join(', ')}
    </Typography>
  </Grid>

  </Grid>
</div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
