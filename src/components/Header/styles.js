import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  background: #fff;

  nav {
    ul {
      display: flex;
      align-items: center;
      img {
        padding-left: 40px;
      }
      li {
        > a {
          text-decoration: none;
          color: inherit;
        }
        padding: 8px 0;
        display: inline;
        margin: 20px;
        color: #999;
        font-weight: bold;
        cursor: pointer;
        :hover {
          color: #444;
        }
        :nth-child(2) {
          color: #ee4d64;
          padding-right: 20px;
          border-right: 1px solid #999;
        }
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    margin-right: 40px;

    p {
      color: #666;
      font-size: 14px;
      font-weight: bold;
    }
    button {
      border: none;
      color: #ee4d64;
      font-size: 14px;
    }
  }
`;
