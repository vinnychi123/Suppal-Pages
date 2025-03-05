import React from 'react';
import styled from 'styled-components';

const Button = ({ number, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>Essay #{number}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #000000;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #f9fafb;
    transition: 0.1s;
  }

  button::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgb(255, 255, 255) 17.8%,
      rgb(252, 252, 252) 100.2%
    );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgb(133, 210, 255) 17.8%,
      rgb(220, 183, 255) 100.2%
    );
  }
`;

export default Button;
