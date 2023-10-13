import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


export const DecorationNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;   
    /* &:active {
        color: #e84a5f;        
    } */
    /* scale: 1;
    transform: scale 2500ms linear; */
    &:hover,
  &:focus {
    color:  rgb(95, 230, 243);
    scale: 1.1;
  };
  &.active {
    color:  rgb(95, 230, 243); /* Цвет для активных ссылок */
    font-weight: bold; /* Жирный шрифт для активных ссылок */
    /* Дополнительные стили для активных ссылок */
  }


`