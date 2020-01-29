import React from 'react';

import {
  Container,
} from 'semantic-ui-react'

export default function PageContainer(props) {
  return (
      <Container style={{paddingTop: "1em", paddingBottom: "1em"}}>
        {props.children}
      </Container>
  );
}
