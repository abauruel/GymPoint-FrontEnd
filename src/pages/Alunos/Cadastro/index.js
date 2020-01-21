import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { Container, ContainerHeader, Content } from './styles';
import { studentAddRequest } from '../../../store/modules/students/actions';

export default function Cadastro() {
  const dispatch = useDispatch();

  function handleAddStudent(data) {
    dispatch(studentAddRequest(data));
  }
  return (
    <Container>
      <Form onSubmit={handleAddStudent}>
        <ContainerHeader>
          <p>Cadastro de Aluno</p>
          <div>
            <button type="button" onClick={() => {}}>
              VOLTAR
            </button>
            <button type="submit">SALVAR</button>
          </div>
        </ContainerHeader>
        <Content>
          <p>NOME COMPLETO</p>
          <Input type="text" name="name" />
          <p>ENDEREÇO DE E-MAIL</p>
          <Input type="email" name="email" />
          <div>
            <div>
              <p>IDADE</p>
              <Input type="number" name="age" />
            </div>
            <div>
              <p>PESO(em kg)</p>
              <Input type="text" name="weight" />
            </div>
            <div>
              <p>ALTURA</p>
              <Input type="decimal" name="height" />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
