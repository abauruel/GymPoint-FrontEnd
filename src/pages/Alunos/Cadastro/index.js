import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, ContainerHeader, Content } from './styles';

export default function Cadastro() {
  return (
    <Container>
      <Form>
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
