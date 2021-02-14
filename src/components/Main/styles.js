import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  justify-content: center;
  align-items: center;

  span + span {
    font-size: 5rem;
  }

  img {
    width: 12rem;
    height: 12rem;
  }
`;
