import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function HistoryList(props) {
  return props.loading ? (
    <CircularProgress />
  ) : (
    <List dense>
      {props.history.map(({ id, text }) => (
        <ListItem button key={id} onClick={() => props.goToHistory(text)}>
          <ListItemText primary={text} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => props.deleteHistory(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
