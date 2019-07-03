import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 19
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Search(props) {
  const classes = useStyles();
  const [value, setSearchValue] = React.useState(props.value);

  const search = () => {
    props.searchFn(value);
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const keyCapture = e => {
    if (e.key === 'Enter') search();
  };

  return (
    <TextField
      label="Search"
      fullWidth
      variant="outlined"
      className={classes.textField}
      value={value}
      onChange={handleChange}
      onKeyDownCapture={keyCapture}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="contained" color="primary" className={classes.button} onClick={search}>
              Go
              <Icon>send</Icon>
            </Button>
          </InputAdornment>
        )
      }}
    />
  );
}
