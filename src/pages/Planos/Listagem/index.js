import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container, ContainerHeader, ContainerList } from './styles';

export default function Listagem() {
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
            <tr>
              <td>name</td>
              <td>email</td>
              <td>age</td>
              <td>
                <button type="button">editar</button>
              </td>

              <td>
                <button type="button">apagar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerList>
    </Container>
  );
}
