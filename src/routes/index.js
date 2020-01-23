import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
// import { Container } from './styles';

import SigIn from '../pages/SignIn';

import Dashboard from '../pages/Alunos/Listagem';
import EditarAluno from '../pages/Alunos/Edicao';
import CadastrarAluno from '../pages/Alunos/Cadastro';

import Planos from '../pages/Planos/Listagem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/editarAluno" component={EditarAluno} isPrivate />
      <Route path="/cadastroAluno" component={CadastrarAluno} isPrivate />

      <Route path="/Planos" component={Planos} isPrivate />
    </Switch>
  );
}
