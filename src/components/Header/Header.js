import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.bold};
`;

const StyledHeading = styled(Link)`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.fontCondensed};
  font-size: 4.2rem;
`;

const StyledContact = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.color.secondary};
`;

const Header = () => (
  <StyledWrapper>
    <StyledHeading to="/">Emil Cichowski</StyledHeading>
    <StyledContact to="/contact">Contact</StyledContact>
  </StyledWrapper>
);

export default Header;
