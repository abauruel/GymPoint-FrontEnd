import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, ContainerHeader, Content } from './styles';

export default function Edicao() {
  return (
    <Container>
      <ContainerHeader>
        <p>Edição de Aluno</p>
        <div>
          <button>VOLTAR</button>
          <button>SALVAR</button>
        </div>
      </ContainerHeader>

      <Content>
        <Form>
          <p>NOME COMPLETO</p>
          <Input type="text" name="name" />
          <p>ENDEREÇO DE E-MAIL</p>
          <Input type="email" name="email" />
          <div>
            <div>
              <p>IDADE</p>
              <Input type="number" name="idade" />
            </div>
            <div>
              <p>PESO(em kg)</p>
              <Input type="text" name="peso" />
            </div>
            <div>
              <p>ALTURA</p>
              <Input type="decimal" name="altura" />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
