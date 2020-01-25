import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import history from '../../../services/history';

import { Container, ContainerHeader, Content } from './styles';

export default function Cadastro() {
  function handleBack() {
    history.push('/planos');
  }
  function handleSubmit(data) {}
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ContainerHeader>
          <p>Cadastro de Plano</p>
          <div>
            <button type="button" onClick={handleBack}>
              VOLTAR
            </button>
            <button type="submit">SALVAR</button>
          </div>
        </ContainerHeader>
        <Content>
          <p>TÍTULO DO PLANO</p>
          <Input type="text" name="title" />
          <div>
            <div>
              <p>DURAÇÃO (em meses)</p>
              <Input type="number" name="duration" />
            </div>
            <div>
              <p>PREÇO MENSAL</p>
              <Input type="decimal" name="monthprice" />
            </div>
            <div>
              <p>PREÇO TOTAL</p>
              <Input type="decimal" name="totalprice" readOnly />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
