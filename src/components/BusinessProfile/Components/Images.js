import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  img: {
    height: '100%',
    width: '20rem',
    objectFit: 'cover',
    borderRadius: '5px'
  }


})

const Images = ({ImagesInfo, classes}) => (
  <div className={classes.root}>
    <GridList className={classes.gridList} cols={1.5}>
        {ImagesInfo.photos.map((pic, i) => (
          <GridListTile key={i} >
            <img src={pic} className={classes.img}/>
          </GridListTile>
        ))}
    </GridList>
  </div>
);

Images.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Images);
