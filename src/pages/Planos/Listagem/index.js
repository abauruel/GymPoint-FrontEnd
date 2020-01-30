import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import api from '../../../services/api';

import { Container, ContainerHeader, ContainerList } from './styles';

export default function Listagem() {
  const [plans, setPlan] = useState([]);
  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlan(response.data);
    }
    loadPlans();
  }, []);
  return (
    <Container>
      <ContainerHeader>
        <div>
          <p>Gerenciar planos</p>
        </div>
        <div>
          <Link to="/cadastrodeplano">
            <MdAdd size={12} color="#FFF" />
            <label>Cadastrar</label>
          </Link>
        </div>
      </ContainerHeader>
      <ContainerList>
        <table>
          <thead>
            <tr>
              <th>TITULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR P/MÊS</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>
                  {plan.duration > 1
                    ? `${plan.duration} meses`
                    : `${plan.duration} mês`}
                </td>
                <td>{`R$ ${plan.price.toLocaleString('pt-BR')}`}</td>
                <td>
                  <button type="button">editar</button>
                </td>

                <td>
                  <button type="button">apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContainerList>
    </Container>
  );
}
