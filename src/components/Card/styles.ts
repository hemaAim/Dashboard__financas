import styled, { css } from 'styled-components'

const ColorsCard = {
    Azul: css`
      color: #4bd4ff;
    `,
    Vermelho: css`
      color: #ff4646;
    `,
    Rosa: css`
      color: #ffaaaa;
    `,
  
    Verde: css`
      color: #16cb3e;
    `,
    Lilais: css`
      color: #f68cff;
    `,
    Branco: css`
      color: #fff;
    `
  }
  
  const SizeCard = {
    Cardpequeno: css`
      width: 130px;
      height: 60px;
      display: flex;
      justify-content: start;
      align-items: stretch;
      flex-direction: column;
      gap: 11px;
      padding: 01rem;
      h1{  
        order: 2;
        font-size: 11px!important;
      }
      p {
        order: 1;
        font-size: 16px;
  
    }
    `,
    Cardmedio: css`
      width: 210px; 
     
      height: 100px; 
      min-width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;  
      gap: 16px;
     
    `,
    Cardgrande: css`
      width: 255px;
      height: 56px; 
      padding-top: 0.5rem;
      h1{  
        order: 2;
        font-weight: 500; 
        font-size: 15px!important;
        }
       p{
        order: 1;
        font-size: 16px;
  
    }
    `
  }
  
  type CardProps = {
  
    color: 'Azul' | 'Vermelho' | 'Rosa' | 'Verde' | 'Lilais' | 'Branco'
    size: 'Cardpequeno' | 'Cardmedio' | 'Cardgrande'
  
  }
  
  export const Card = styled.div<CardProps>`
    ${({ color, size }) => css`
      ${ColorsCard[color]}
      ${SizeCard[size]}
      
    `}
  
    
  
    background: #303665;
    border-radius: 10px;
  
    h1 p {
      font-family: monospace;
    }
  
    h1 {
      font-size: 24px;
      font-weight: bold; 
      font-family: 'Montserrat', sans-serif;
    }
    p {
      font-size: 16px;
  
    }
  `
