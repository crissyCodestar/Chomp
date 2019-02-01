import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

const MiscInfo = ({miscInfo, classes}) => (
  <div className={classes.root}>
    <Grid container>
      <Grid item>
        {console.log(miscInfo)}
      </Grid>
    </Grid>
  </div>
);

MiscInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiscInfo);
