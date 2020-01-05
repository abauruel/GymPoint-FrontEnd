import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 30px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  div {
    > p {
      font-weight: bold;
      font-size: 24px;
    }
  }
  div {
    a {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      border: none;
      padding: 10px 30px;
      background: #ee4d64;
      color: #fff;
      border-radius: 4px;
      margin-right: 10px;

      > label {
        margin: 0 5px;
      }
    }
    input {
      padding: 10px 30px;
      width: 200px;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      font-size: 14px;
      ::placeholder {
        font-size: 14px;
        color: #9999;
      }
    }
  }
`;
export const ContainerList = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  table {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  th,
  td {
    border-bottom: 1px solid #eee;
    text-align: left;
    padding: 10px;
  }
`;
