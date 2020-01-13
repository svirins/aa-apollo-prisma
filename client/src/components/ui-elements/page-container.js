import React from 'react';

import {
  Container,
} from 'semantic-ui-react'

export default function PageContainer(props) {
  return (
      <Container>
        {props.children}
      </Container>
  );
}
