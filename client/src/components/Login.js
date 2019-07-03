import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  input: {
    marginBottom: '1em'
  },
  heading: {
    marginBottom: '2em'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: '',
    password: ''
  });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const login = () => {
    const { login, password } = values;
    props.logInFn(login, password);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '8em' }}>
      <Card style={{ padding: '2em' }}>
        <Typography variant="h4" gutterBottom className={classes.heading}>
          Login
        </Typography>
        <TextField className={classes.input} label="Login" value={values.login} onChange={handleChange('login')} variant="outlined" fullWidth />
        <TextField className={classes.input} label="Password" type="password" value={values.password} onChange={handleChange('password')} variant="outlined" fullWidth />

        <Button fullWidth variant="contained" color="primary" onClick={login}>
          Go
          <Icon>send</Icon>
        </Button>
      </Card>
    </Container>
  );
}
