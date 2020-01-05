import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader, ContainerList } from './styles';

import { listStudentsRequest } from '../../../store/modules/students/actions';

export default function Listagem() {
  const dispatch = useDispatch();
  function loadList() {
    dispatch(listStudentsRequest());
  }
  useEffect(() => {
    loadList();
  }, [loadList]);
  const students = useSelector(state => state.students);
  console.tron.log(students);
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
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alex</td>
              <td>Abauruel@gmail.com</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Alex</td>
              <td>Abauruel@gmail.com</td>
              <td>34</td>
            </tr>
          </tbody>
        </table>
      </ContainerList>
    </Container>
  );
}
