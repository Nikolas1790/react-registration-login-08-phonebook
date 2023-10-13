import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

`

export const UserName = styled.p`
  font-weight: 700;
`

export const ButtonUserName = styled.button`
    color: black;
  margin-right: 0;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  transition: color 250ms linear, background-color 250ms linear, box-shadow 250ms linear; 

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
     box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
`