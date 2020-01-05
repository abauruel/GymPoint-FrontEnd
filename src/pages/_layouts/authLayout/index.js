import React from 'react';

import { Content, Container } from './styles';

export default function authLayout({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
