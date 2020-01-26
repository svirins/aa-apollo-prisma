import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react'


const About = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed for this customer.
    </Header>
    <Button primary>made by @svirins with love</Button>
  </Segment>);

export default About;

