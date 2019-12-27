import React from 'react'
import { Input, Button, Container, Icon } from "semantic-ui-react";

const SearchAndNavigation = () => {
  return (
    <Container>
      <Input fluid icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
      <div className='ui two buttons'>
        <Button basic color='green'>
          List Display
        </Button>
        <Button basic color='red'>
          Map Display
        </Button>
      </div>
    </Container>
  )
}

export default SearchAndNavigation