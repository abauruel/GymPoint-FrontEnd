import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader, ContainerList } from './styles';
import api from '../../../services/api';

import { listStudentsRequest } from '../../../store/modules/students/actions';

export default function Listagem() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get('students');
      setStudents(response.data);
    }

    loadList();
  }, []);

  return (
    <Container>
      <ContainerHeader>
        <div>
          <p>Gerenciar Alunos</p>
        </div>
        <div>
          <Link to="/cadastro">
            <MdAdd size={12} color="#FFF" />
            <label>Cadastrar</label>
          </Link>
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </ContainerHeader>
      <ContainerList>
        {!students ? (
          <h1>No students</h1>
        ) : (
          <table>
            <thead>
              <tr>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>IDADE</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.age}</td>
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
        )}
      </ContainerList>
    </Container>
  );
}
