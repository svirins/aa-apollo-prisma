import React from 'react';
import styled from 'react-emotion';
import { ReactComponent as Logo } from '../assets/aa-logo.svg'

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