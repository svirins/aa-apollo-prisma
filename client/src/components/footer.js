import React from 'react';
import styled from 'react-emotion';

import MenuItem from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as SomeIcon } from '../assets/icons/home.svg';
import { colors, unit } from '../styles/styles';

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">
          <SomeIcon />
          All Groups 
        </MenuItem>
        <MenuItem to="/nearme">
          <SomeIcon />
          Near Me
        </MenuItem> 
        <MenuItem to="/profile">
          <SomeIcon />
          Profile
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('footer')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'white',
  color: colors.textSecondary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 2.5,
  margin: '0 auto',
});
