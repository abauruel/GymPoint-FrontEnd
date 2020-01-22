import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, ContainerHeader, Content } from './styles';
import history from '../../../services/history';

import { StudentUpdateData } from '../../../store/modules/students/actions';

export default function Edicao() {
  const dispatch = useDispatch();
  const { student } = useSelector(state => state.student);
  const { id } = student;
  function handleBack() {
    history.push('/');
  }
  function handleSave(aluno) {
    dispatch(StudentUpdateData(id, aluno));
  }
  return (
    <Container>
      <Form initialData={student} onSubmit={handleSave}>
        <ContainerHeader>
          <p>Edição de Aluno</p>
          <div>
            <button type="button" onClick={handleBack}>
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
