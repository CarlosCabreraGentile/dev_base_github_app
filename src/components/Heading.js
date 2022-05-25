import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

const Heading = () => {
  return (
    <StyledTitle bg='light' variant='light'>
      <StyledNav>
        <Container>
          <Nav className='me-auto'>
            <Link to='/'>
              <StyledNavTitle>
              {'<'}Back
                  Home
                  </StyledNavTitle>
            </Link>
          </Nav>
        </Container>
      </StyledNav>
    </StyledTitle>
  );
};

const StyledNavTitle = styled.div`
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-decoration-line: none;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: black;
`;

export default Heading;
