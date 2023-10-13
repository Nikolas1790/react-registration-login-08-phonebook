import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
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

export const FormTable = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
     
/* border: 1.5px solid rgb(171, 163, 163); */
width: 400px;
padding: 8px;
/* box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5); */
`

export const ButtonAddContact = styled.button`
font-weight: 700;
border-radius: 4px;
margin-bottom: 8px;
padding: 8px;
width: 140px;
cursor: pointer;
background:  rgb(87, 87, 253);
color:white;

border: 1.5px solid rgb(171, 163, 163);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

    transition: box-shadow 250ms linear, background 250ms linear; 

    &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    background:  blue;
    
  }
`


export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 20px;  
`
export const InputInfToAdd = styled.input` 
  width: 380px;  

  border: none;
  border-bottom: 1px solid rgb(171, 163, 163);
  outline: none; 
  background: transparent; 
  &:focus {
    border-bottom: 2px solid #000; 
  }
`

export const ItemsContracts = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding:0;
gap: 12px;
`

export const ItemContact = styled.li`
display: flex;
justify-content: space-between;
padding: 8px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    max-width: 600px;

`
export const ButtonDel = styled.button`
/* font-weight: 700;
border-radius: 4px;

cursor: pointer;

border: 1.5px solid rgb(171, 163, 163);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
transition: box-shadow 250ms linear;
    &:hover {
        
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    
  } */
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
export const FindContact = styled.p`
margin: 4px;
font-weight: 500;
`

export const WraperDiv = styled.div`
/* display: flex;
align-items: center;
justify-content: center;
flex-direction: column; */
display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #f9f9f9; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(249, 249, 249, 0.8);


`


export const FormContacts = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
     
/* border: 1.5px solid rgb(171, 163, 163); */
/* width: 400px; */
/* padding: 8px; */
/* box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5); */
`


export const GradientTextPhone = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* Черный цвет */
  font-family: 'YourDesiredFont', sans-serif;
  /* Замените 'YourDesiredFont' на имя красивого шрифта, который вы хотите использовать */
`;

export const GradientSubTitleContacts = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  color: #333; /* Черный цвет */
  font-family: 'YourDesiredFont', sans-serif;
  /* Замените 'YourDesiredFont' на имя красивого шрифта, который вы хотите использовать */
`;

// ////////////////////home page/////////////////////


export const LogInHomePage = styled(NavLink)`
  margin-top: 25px;
  padding: 10px 20px;
  /* border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #ff4500;
  box-shadow: gray;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  background-color: #007BFF;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  transition: color 250ms linear, background-color 250ms linear, box-shadow 250ms linear; 
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

`

// layout////////////////////////
export const Container = styled.div`
 max-width: 960px;
  margin: 0 auto;
   padding: 0 16px;
   display: flex;
  flex-direction: column;
  min-height: 100vh; 
  justify-content: space-between;

`;