import React from 'react';
import Login from './components/Login';
import Registration from './components/Registration';

export default function NotAuthed(props) {
  const [currentView, setCurrentView] = React.useState('login');

  const goToLogin = () => {
    setCurrentView('login');
  };

  const goToRegistration = () => {
    setCurrentView('register');
  };

  return currentView === 'login' ? <Login logInFn={props.logInFn} goToRegistrationFn={goToRegistration} /> : <Registration goToLoginFn={goToLogin} registerFn={props.registerFn} />;
}
