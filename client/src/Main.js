import React from 'react';
import Axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';

import App from './App';
import NotAuthed from './NotAuthed';

export default class Main extends React.Component {
  state = {
    loading: true,
    auth: null,
    user: null
  };

  async componentWillMount() {
    const sessionJSON = localStorage.getItem('session');

    if (!sessionJSON) {
      this.setState({ auth: false, loading: false });
    } else {
      const { token } = JSON.parse(sessionJSON);
      const authStatus = await this.checkToken(token);

      this.setState({ auth: authStatus, loading: false });
    }
  }

  checkToken = async token => {
    const { data } = await Axios.post(`${process.env.REACT_APP_API_ROOT}/check_token`, {
      token
    });
    const { auth, userLogin } = data;
    this.setState({ user: userLogin });
    return auth;
  };

  saveToken = token => {
    localStorage.setItem(
      'session',
      JSON.stringify({
        token
      })
    );
  };

  deleteToken = () => {
    localStorage.delete('session');
  };

  logIn = async (login, password) => {
    try {
      const { data } = await Axios.post(`${process.env.REACT_APP_API_ROOT}/login`, { login, password });
      const { login: userLogin, token, message } = data;

      if (!userLogin || !token) {
        throw new Error(message);
      }

      this.setState({ user: userLogin });
      this.saveToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  logOut = () => {
    this.deleteToken();
    this.setState({
      auth: false,
      user: null
    });
  };

  register = async (login, password) => {
    try {
      const { data } = await Axios.post(`${process.env.REACT_APP_API_ROOT}/register`, { login, password });
      const { message } = data;

      if (message !== 'OK') {
        throw message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { auth, loading } = this.state;
    return loading ? <CircularProgress /> : auth ? <App /> : <NotAuthed registerFn={this.register} logOut={this.logOut} logInFn={this.logIn} />;
  }
}
