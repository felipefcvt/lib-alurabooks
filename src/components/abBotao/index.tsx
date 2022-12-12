import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background: #eb9b00;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: #b17702;
  }
`

export const AbBotao = () => {
    return <BotaoEstilizado>Clique aqui!</BotaoEstilizado>
}