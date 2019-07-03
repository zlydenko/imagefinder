import React from 'react';
import Axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';

import Error from './components/Error';
import App from './App';
import NotAuthed from './NotAuthed';

export default class Main extends React.Component {
  state = {
    loading: true,
    auth: null,
    user: null,
    errorMessage: '',
    errorVisible: false
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
    const { data } = await Axios.post(`https://movatest.herokuapp.com/api/check_token`, {
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
    localStorage.removeItem('session');
  };

  logIn = async (login, password) => {
    try {
      const { data } = await Axios.post(`https://movatest.herokuapp.com/api/login`, { login, password });
      const { login: userLogin, token, message } = data;

      if (!userLogin || !token) {
        throw message;
      }

      this.setState({ user: userLogin, auth: true });
      this.saveToken(token);
    } catch (error) {
      this.setState({ errorMessage: error, errorVisible: true });
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
      const { data } = await Axios.post(`https://movatest.herokuapp.com/api/register`, { login, password });
      const { message } = data;

      if (message !== 'OK') {
        throw message;
      }

      return true;
    } catch (error) {
      this.setState({ errorMessage: error, errorVisible: true });
    }
  };

  closeError = () => {
    this.setState({ errorMessage: '', errorVisible: false });
  };

  render() {
    const { auth, loading, errorMessage, errorVisible, user } = this.state;
    return (
      <React.Fragment>
        <Error message={errorMessage} errorVisible={errorVisible} closeError={this.closeError} />
        {loading ? <CircularProgress /> : auth ? <App username={user} logOutFn={this.logOut} /> : <NotAuthed registerFn={this.register} logInFn={this.logIn} />}
      </React.Fragment>
    );
  }
}
