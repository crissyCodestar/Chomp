import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    width: 600
  },
})


class BusinessList extends React.Component {

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={40}
          alignItems='center'
          direction='column'
          justify='center'
            >
        {
          this.props.businesses.map(business => (
            <Grid item xs={12}>
              <Business key={business.id} business={business}/>
            </Grid>
              ))
            }
        </Grid>
      </div>
    );
  }
};

BusinessList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessList);
