import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
`;

const MainTemplate = () => (
  <StyledWrapper>
    <Header />
  </StyledWrapper>
);

export default MainTemplate;
