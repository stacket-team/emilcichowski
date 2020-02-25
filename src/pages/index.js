import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import FetchPhotos from 'components/FetchPhotos/FetchPhotos'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const IndexPage = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FetchPhotos />
    </ThemeProvider>
  </ApolloProvider>
);

export default IndexPage;
