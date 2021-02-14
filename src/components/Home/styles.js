import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 42rem;
  background-color: #FFF;
  border-radius: 0.5rem;
  margin: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  button {
    border: 0;
    border-radius: 0.5rem;
    height: 5rem;
    background-color: #1EC4DC;
    color: #FFF;
    margin-top: 1rem;
    font-size: 1.6rem;
    padding: 0.8rem;
    transition: 0.5s;
  }

  button:hover {
    cursor: pointer;
    background-color: #FFF;
    color: #1EC4DC;
    border: 0.1rem solid #1EC4DC;
    transition: 0.5s;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #434343;
  }

  input {
    font-size: 1.6rem;
    height: 2.2rem;
    border: 0.1rem solid #C6C6C6;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 0.8rem;
  }
`;