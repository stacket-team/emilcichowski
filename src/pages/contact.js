import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';

const StyledWrapper = styled.div`
  margin: 12rem 12rem 0 12rem;
  height: calc(100vh - 24rem);
`;

const StyledHeading = styled.h1`
  font-size: 12rem;
`;

const StyledInfo = styled.p`
  font-size: 3rem;
  padding: 1.2rem;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-size: 2.8rem;
  padding: 1.2rem;
`;

const ContactPage = () => (
  <MainTemplate>
    <StyledWrapper>
      <StyledHeading>Contact</StyledHeading>
      <StyledInfo>email: emilcichowski@gmail.com</StyledInfo>
      <StyledLink
        href="https://www.instagram.com/emilcichowski/"
        target="_blank"
      >
        Instagram
      </StyledLink>
    </StyledWrapper>
  </MainTemplate>
);

export default ContactPage;
