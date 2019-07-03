import React from 'react';
import Login from './components/Login';

export default function NotAuthed(props) {
  return <Login logInFn={props.logInFn} registerFn={props.registerFn} />;
}
