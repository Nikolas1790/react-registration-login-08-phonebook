import styled, { keyframes } from 'styled-components'

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(249, 249, 249, 0.8);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`
export const InputLogIn = styled.input`
padding: 10px;
border: 1px solid #ccc;
border-radius: 3px;
font-size: 16px;
margin-top: 5px;
`;


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: #0056b3;
    animation: none;
    transform: scale(1.05);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;