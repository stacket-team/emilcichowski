import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
     
   html {
     font-size: 62.5%;
   }
     
   body {
     font-family: ${({ theme }) => theme.font.fontRegular};
     background: ${({ theme }) => theme.color.primary};
     color: ${({ theme }) => theme.color.dark};
     padding: 5rem 7rem;
   } 
`;

export default GlobalStyle;
