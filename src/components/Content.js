import React from 'react';
import styled from 'styled-components';
import UsersList from './users/UsersList';
import { Container } from 'react-bootstrap';

const List = () => {
  return (
    <StyledUserContainer>
      <Container>
        <StyledText>
          <h1>Top 5 Github Users</h1>
          <p>Tap the username to see more information</p>
        </StyledText>
        <UsersList />
      </Container>
    </StyledUserContainer>
  );
};

const StyledText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledUserContainer = styled.div`
  padding-top: 50px;
  display: flex;
`;

export default List;
