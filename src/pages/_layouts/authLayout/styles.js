import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ee4d64;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  margin: auto;
  padding: 30px;
  width: 360px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    img {
      align-self: center;
      width: 140px;
      height: 90px;
    }
  }

  p {
    text-transform: uppercase;
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  input {
    ::placeholder {
      font-size: 14px;
      font-family: 'Roboto';
    }
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin: 10px 0 10px;
    width: 100%;
  }
  button {
    display: block;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
    margin: 10px 0 10px;
    color: #fff;
    background: #ee4d64;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 14px;
    &:hover {
      background: ${darken(0.08, '#ee4d64')};
    }
  }
`;
