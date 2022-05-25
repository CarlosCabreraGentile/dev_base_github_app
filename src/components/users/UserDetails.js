import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const UsersDetails = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const fetchData = useCallback(() => {
    const getUser = async () => {
      const endpoint = `https://api.github.com/users/${params.username}`;
      const { data } = await axios.get(endpoint);
      setUser(data);
    };
    getUser();
  }, [params.username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Row>
        <StyledDetails>
          <div>
            <img
              style={{ borderRadius: '50%', width: '150px' }}
              src={user.avatar_url}
              alt='Avatar'
            />
          </div>

          <StyledInfo>
            <div>{user.name}</div>
            <div>{user.location}</div>
          </StyledInfo>
        </StyledDetails>
        <hr />
      </Row>
    </Container>
  );
};

const StyledInfo = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
`;

const StyledDetails = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  align-items: center;
`;

export default UsersDetails;
