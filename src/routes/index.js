import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
// import { Container } from './styles';

import SigIn from '../pages/SignIn';

import Dashboard from '../pages/Alunos/Listagem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
