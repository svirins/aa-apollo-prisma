import React from 'react';

import {
  Container,
} from 'semantic-ui-react'

export default function PageContainer(props) {
  return (
      <Container style={{ marginTop: '3em' }}>
        {props.children}
      </Container>
  );
}
