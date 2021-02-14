import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  justify-content: center;
  align-items: center;

  span + span {
    font-size: 5rem;
  }
`;

const pigAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-25deg);
  }

  75% {
    transform: rotate(25deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

export const PigImage = styled.img`
  width: 12rem;
  height: 12rem;

  ${props => props.animatePig && css`
    animation: ${pigAnimation} 2s linear;
  `}
`;

export const Button = styled(Link)`
  border: 0;
  border-radius: 0.5rem;
  height: 2.2rem;
  background-color: #1EC4DC;
  color: #FFF;
  margin-top: 1rem;
  font-size: 1.6rem;
  padding: 0.8rem;
  transition: 0.5s;
  text-decoration: none;
  
  :hover {
    cursor: pointer;
    background-color: #FFF;
    color: #1EC4DC;
    border: 0.1rem solid #1EC4DC;
    transition: 0.5s;
  }
`