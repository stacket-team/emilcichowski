import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
   *, *::before, *::after {
     box-sizing: border-box;
   }
     
   html {
     padding: 0;
     margin: 0;
     font-size: 62.5%;
   }
     
   body {
     font-family: ${({ theme }) => theme.font.eaves};
   } 
`

export default GlobalStyle
