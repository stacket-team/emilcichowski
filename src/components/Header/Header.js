import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.fontCondensed};
  font-size: 4.2rem;
`;

const Header = () => <Heading>Emil Cichowski</Heading>;

export default Header;
