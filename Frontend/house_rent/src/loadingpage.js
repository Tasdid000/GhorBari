// LoadingPage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  
`;

const LoadingGif = styled.img`
  width: 100%; // Adjust the size as needed
  height: 100%; // Adjust the size as needed
  
`;

const LoadingPage = () => {
  return (
    <Container>
      <div>
        <LoadingGif src="/assets/images/loadingpage.gif" alt="Loading" />
      </div>
    </Container>
  );
};

export default LoadingPage;
