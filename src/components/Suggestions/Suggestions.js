import React from 'react';
import './Suggestions.css';
import Events from './SuggestionCards/Events';
import HotAndNew from './SuggestionCards/HotAndNew';
import Loading from '../SmartComponents/Loading';
import CardTemplate from './SuggestionCards/CardTemplate';
import { Link } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent:'center'
  },
});

const Suggestions = ({events, hotEvents, classes}) =>  {
return   (
  <section className='container'>
  {console.log(hotEvents)}
      <div className='featured__cards'>
        <div className='h2'>
          <h1>Hot And New</h1>
        </div>
        <div className='card__container'>
          {hotEvents.map(hotEvent => (
            <HotAndNew key={hotEvent.id} hotEvent={hotEvent} />
          ))}
        </div>
      </div>
      <div className='featured__cards'>
          <div className='h2'>
              <h1>Featured Events</h1>
          </div>
        <div className='card__container'>
          {events.map(event => (
            <Events key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className={classes.root}>
          <div className='h2'>
              <h1>Featured Events</h1>
          </div>
        <Grid container spacing={24} className='card__container'>
          {events.map(event => (
            <Grid item lg={4} xs={12}>
              <CardTemplate
              key={event.id}
              img={event.image_url}
              mediaTitle={event.id}
              title={event.name}
              url={event.event_site_url}
              content={event.is_free ?  "FREE event" : `$${event.cost }`}
              />
            </Grid>
          ))}
        </Grid>
      </div>

  </section>
)
};

Suggestions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Suggestions);
