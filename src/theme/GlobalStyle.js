import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
   @import url("https://use.typekit.net/fik3aiu.css");
   
   *, *::before, *::after {
     box-sizing: border-box;
   }
     
   html {
     font-size: 62.5%;
     padding: 0;
     margin: 0;
   }
     
   body {
     font-family: ${({ theme }) => theme.font.eaves};
   } 
`;

export default GlobalStyle;
