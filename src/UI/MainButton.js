import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
background: ${props => props.active ? '#ffff' : '#109CF1'};
/* accent button shadow */

box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 20px;
/* identical to box height */

text-align: center;
letter-spacing: 0.01em;

/* white */

color: ${props => props.active ? '#109CF1' : '#ffff'};
height: 42px;
outline: none;
border:none;
text-transform: capitalize;
transition: all .3s;
&:hover{
color:${props => props.active ? '#ffff' : '#109CF1'};
background-color: ${props => props.active ? '#109CF1' : '#ffff'};
}
`;

const MainButton = ({text, classes, width, goBack,handleProject, type, modalHandle}) => {

  const handleClicks= ()=> {
 if(type === 'projects'){
  handleProject();
 }else if (type === 'back'){
   goBack();
 }else if(type === 'modal'){
  modalHandle(true);
 }
  }
  return (
    <Button active={classes} onClick={handleClicks} style={{width: width+'px'}}>{text}</Button>
  )
}

export default MainButton