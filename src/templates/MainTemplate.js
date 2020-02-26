import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Helmet from 'utils/Helmet';
import Header from 'components/Header/Header';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
`;

const MainTemplate = ({ children }) => (
  <ApolloProvider client={client}>
    <Helmet />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledWrapper>
        <Header />
        {children}
      </StyledWrapper>
    </ThemeProvider>
  </ApolloProvider>
);

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
