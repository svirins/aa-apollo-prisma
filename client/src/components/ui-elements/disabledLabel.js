import React from 'react';
import { Label } from 'semantic-ui-react'

const DisabledLabel = props => {
  const someData = !props.disabled ? <Label  color='orange' ribbon>Disabled</Label> : null
 return someData
 
}

export default DisabledLabel