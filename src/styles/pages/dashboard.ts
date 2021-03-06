import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   max-width: 992px;
   margin: 0 auto;
   padding: 0 2rem 2rem 2.5rem;

   display:flex;
   flex-direction: column;

   section {
      flex: 1;

      display: grid;
      grid-template-columns: 1fr 1fr; /* duas colunas com o mesmo tamanho */
      gap: 6.25rem; /* espaçamento entre as colunas */
      align-content: center;
   }

   @media(max-width: 720px){
      section {
         grid-template-columns: 70vw;
         align-self: center;
         gap: 3.75rem;
         margin-top: 3rem;
      }
   }
`;
