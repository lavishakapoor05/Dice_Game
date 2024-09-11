import styled from "styled-components";
export const FilledButton=styled.button`
color:black;
background-color:white;
padding:5px;
font-size:20px;
font-weight:500;
border-radius:18px;
min-width:200px;
cursor:pointer;
transition: 0.4s background ease-in;
&:hover{
 color:white;
 background-color:black;
 transition: 0.3s background ease-in;
 border:3px solid white;
}
`
export const OutlineButton=styled.button`
color:white;
background-color:black;
padding:5px;
font-size:18px;
font-weight:500;
border-radius:20px;
min-width:200px;
cursor:pointer;
transition: 0.4s background ease-in;
&:hover{
 color:black;
 background-color:white;
 transition: 0.3s background ease-in;
 border:3px solid black;
}
`