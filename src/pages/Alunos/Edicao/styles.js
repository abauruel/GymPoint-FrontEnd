import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const Content = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  background: #fff;
  padding: 10px;

  form {
    padding: 30px;
    p {
      font-weight: bold;
      margin-top: 10px;
      font-size: 14px;
    }
    > div {
      display: flex;
      > div {
        :first-child {
          margin: 10px 0;
        }
        margin: 10px;
        width: 30%;
      }
    }
    input {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #eee;
      font-size: 16px;
      width: 93%;
    }
  }
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: bold;
  }
  div {
    > button {
      border: none;
      border-radius: 4px;
      padding: 10px 40px;
      background: #de3b3b;
      color: #fff;
      font-weight: bold;
      :first-child {
        margin-right: 20px;
        background: #999;
      }
    }
  }
`;
