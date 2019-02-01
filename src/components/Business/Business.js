import React from 'react';
import './Business.css';
import BusinessProfile from '../BusinessProfile/BusinessProfile';
import Ratings from '../SmartComponents/Ratings';
import Yelp from '../../util/Yelp';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';


const styles = theme => ({

  card: {
    display: 'flex',
    maxWidth: 600
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
    width: 300,
    alignItems: 'center'
  },
  media: {
    width: 300,
    height: 200
  },

})

class Business extends React.Component {
  render(){
    const { classes, theme }= this.props
    const { id,imageSrc, name, address, city, state, zipCode, category, rating, reviewCount} = this.props.business
    return (

      <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image={imageSrc}
        title="businesses"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                <Link to={`/businesses/${id}`}>
                      {name}
                </Link>
              </Typography>
                <Typography component='h6'>
                    {category.toUpperCase()}
                </Typography>
                <Ratings rating={rating} reviewCount={reviewCount}/>
                <Typography component='h3'>
                  {reviewCount} reviews
                </Typography>
                <Typography component='p'>
                    {address}, {city}, {state} {zipCode}
                </Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
};

Business.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles)(Business);
