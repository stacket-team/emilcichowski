import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Heading = styled(Link)`
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.fontCondensed};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: 4.2rem;
`;

const Header = () => <Heading to="/">Emil Cichowski</Heading>;

export default Header;
