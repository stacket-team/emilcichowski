import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Helmet from 'utils/Helmet';
import MainTemplate from 'templates/MainTemplate';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Helmet />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate />
    </ThemeProvider>
  </ApolloProvider>
);

export default IndexPage;
