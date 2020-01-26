import React from 'react';
import { Message } from 'semantic-ui-react'

const Error = props =>  (
  <Message
    icon='info'
    header='Что-то пошло не так, как планировалось...'
    content={props.errorMessage}
    error
  />
);

export default Error