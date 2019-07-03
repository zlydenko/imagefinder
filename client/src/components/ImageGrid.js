import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRateIcon from '@material-ui/icons/StarRate';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginRight: '8px',
    marginLeft: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'red'
  }
}));

export default function ImageGrid(props) {
  const classes = useStyles();

  const likeImage = (imageUrl, prevState) => {
    props.likeFn(imageUrl, !prevState);
    props.refetchFn();
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {props.images.map(tile => (
          <GridListTile key={tile.url} cols={tile.cols || 1}>
            <img src={tile.images.fixed_width.url} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} onClick={() => likeImage(tile.url, tile.liked)}>
                  {tile.liked ? <StarRateIcon className={classes.icon} /> : <StarBorderIcon className={classes.icon} />}
                </IconButton>
              }
            />
            )
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
