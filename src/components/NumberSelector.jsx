import styled from "styled-components";
import { useState } from "react";
const NumberSelector=({error,setError,selectedNumber,setSelectedNumber})=>{
    const arrNumber=[1,2,3,4,5,6];
    function help(value){
     setSelectedNumber(value);
     setError("");
    }
 return(
    <OuterBox>
        {(error!="")&&<p>{error}</p>
        }
       
    <MainBox>
     {arrNumber.map((value,i)=>(
        <Box isSelected={value == selectedNumber} key={i} onClick={()=>{help(value)}}>{value}</Box>
     ))}
    </MainBox>
    </OuterBox>
 )
}
const OuterBox=styled.div`
p{
    font-size:18px;
    font-weight:500;
    color:red;
}
`
const MainBox=styled.div`
display:flex;
gap:10px;
`
const Box=styled.div`
 width:62px;
 height:62px;
 border:2px solid black;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:28px;
 font-weight:800;
 background-color:${(props)=>(props.isSelected? "black":"white")};
 color:${(props)=>(props.isSelected? "white":"black")};
 `
export default NumberSelector;
