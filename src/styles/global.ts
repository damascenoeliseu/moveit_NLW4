import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      --white: #fff;
      --background: #f2f3f5;
      --gray-line: #dcdde0;
      --text: #666666;
      --text-highlight: #b3b9ff;
      --title: #2e384d;
      --red: #e83f5b;
      --green: #4cd62b;
      --blue: #5965e0;
      --blue-dark: #4953b8;
      --blue-twitter: #2aa9e0;
   }

   @media(max-width: 1080px) {
      html {
         /*16x0.9375 = 15 -> Diminuindo 1px dentro das medidas de todos os elementos que
         utilizar a medida rem na aplicação*/
         font-size: 93.75%; 
      }
   }

   @media(max-width: 720px) {
      html {
         /*16x0.875 = 14 -> Diminuindo mais 1px dentro das medidas de todos os elementos que
         utilizar a medida rem na aplicação*/
         font-size: 87.5%; 
      }
   }

   body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
   }

   body, input, textarea, button {
      font: 400 1rem 'Inter', sans-serif;
   }

   button {
      cursor: pointer;
   }

   a {
      color: inherit;
      text-decoration: none;
   }
`;
