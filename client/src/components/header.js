import React from 'react';
import styled from 'react-emotion';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { unit, colors } from '../styles/styles';
import { size } from 'polished';


export default function Header() {
  
  return (
    <Container>
      <StyledLogo />
      <div>
        <h2>!! TBD !!</h2>
        <Subheading>!! TBD !!</Subheading>
      </div>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 4.5,
});

const Subheading = styled('h5')({
  marginTop: unit / 2,
  color: colors.textSecondary,
});

const StyledLogo = styled(Logo)(size(56), {
  display: 'block',
  margin: '0 auto',
  position: 'relative',
});