import React  from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
  const navigate = useNavigate();

  const handleClick = async (userName) => {
    navigate(`/details/${userName}`);
  };

  return (
    <>
      <Container>
        <Row>
        <StyledButtons>
          <StyledButton>
            <Button
              variant='primary'
              onClick={() => handleClick('GrahamCampbell')}
            >
              GrahamCampbell
            </Button>
          </StyledButton>
          <StyledButton>
            <Button variant='primary' onClick={() => handleClick('fabpot')}>
              fabpot
            </Button>
          </StyledButton>
          <StyledButton>
            <Button
              variant='primary'
              onClick={() => handleClick('weierophinney')}
            >
              weierophinney
            </Button>
          </StyledButton>
          <StyledButton>
            <Button variant='primary' onClick={() => handleClick('rkh')}>
              rkh
            </Button>
          </StyledButton>
          <StyledButton>
            <Button variant='primary' onClick={() => handleClick('josh')}>
              josh
            </Button>
          </StyledButton>
        </StyledButtons>
        </Row>
      </Container>
    </>
  );
};

const StyledButtons = styled.div`
  display: flex;
  padding-right: 40px;
  flex-wrap: wrap;
`;

const StyledButton = styled.div`
  display: flex;
  padding-right: 10px;
  padding-top: 20px;
`;

export default UsersList;
