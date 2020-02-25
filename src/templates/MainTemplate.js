import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Collection from 'components/Collection/Collection';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
`;

const StyledInnerWrapper = styled.div`
  margin: 70px 12rem 0 12rem;
`;

const MainTemplate = () => (
  <StyledWrapper>
    <Header />
    <StyledInnerWrapper>
      <Collection />
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default MainTemplate;
