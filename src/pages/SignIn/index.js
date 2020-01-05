import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import logo from '../../assets/logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('insira um e-mail valido')
      .required('email obrigatorio'),
    password: Yup.string().required('senha obrigatorio'),
  });
  return (
    <Form onSubmit={handleLogin} schema={schema}>
      <div>
        <img src={logo} alt="GymPoint" />
      </div>
      <p>Seu email</p>
      <Input type="text" name="email" placeholder="exemplo@email.com" />
      <p>sua senha</p>
      <Input type="password" name="password" placeholder="exemplo@email.com" />
      <button type="submit">Entrar no sistema</button>
    </Form>
  );
}
