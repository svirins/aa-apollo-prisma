import React from 'react';
import { Message } from 'semantic-ui-react'

const Error = props =>  (
  <Message
    icon='info'
    header='Something went wrong'
    content={props.errorMessage}
    error
  />
);

export default Error