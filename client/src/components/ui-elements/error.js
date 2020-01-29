import React from 'react';
import { Message } from 'semantic-ui-react'

const Error = () =>  (
  <Message
    icon='info'
    header='Что-то пошло не так, как планировалось...'
    content='GRAPHQL сервер сообщает об ошибке ... (:'
    err
  />
);

export default Error