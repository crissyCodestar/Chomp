import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};


const CardTemplate = ({img, mediaTitle, title, classes, content, url}) => (
  <Card className={classes.card}>
      <CardActionArea>
        <a href={url} target='blank'>
          <CardMedia
            className={classes.media}
            image={img}
            title={mediaTitle}
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
);

CardTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardTemplate);
