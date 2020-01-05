import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logoHeader from '../../assets/logoheader.png';
import { Container } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.student.profile);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <nav>
        <ul>
          <img src={logoHeader} alt="" />
          <li>GYMPOINT</li>
          <li>ALUNOS</li>
          <li>PLANOS</li>
          <li>MATRICULAS</li>
          <li>PEDIDOS DE AUXÍLIO</li>
        </ul>
      </nav>
      <div>
        <p>{profile.name}</p>
        <button type="button" onClick={handleLogout}>
          sair do sistema
        </button>
      </div>
    </Container>
  );
}
