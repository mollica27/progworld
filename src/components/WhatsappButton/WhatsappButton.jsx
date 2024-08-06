import React from 'react';
import styled from 'styled-components';
import { SvgIcon } from "../../common/SvgIcon";

const ButtonWrapper = styled.a`
  position: fixed;
  bottom: 130px; /* Espaço do fundo da tela */
  right: 20px; /* Espaço da borda direita da tela */
  z-index: 1000; /* Garante que o botão fique acima de outros elementos */
  display: flex;
  align-items: center;
  justify-content: center;
  background: none; /* Remove o fundo se necessário */
  border: none; /* Remove a borda se necessário */
  cursor: pointer; /* Muda o cursor para indicar um link clicável */
`;

const WhatsappButton = () => {
  return (
    <ButtonWrapper href="https://wa.me/5512981518369" target="_blank" rel="noopener noreferrer">
      <SvgIcon src="icon-whats.png" width="60" height="50" />
    </ButtonWrapper>
  );
};

export default WhatsappButton;
