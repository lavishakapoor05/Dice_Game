import styled from "styled-components";
import { useState } from "react";
const RoleDice=({currentDice,setCurrentDice,roleDice})=>{
   
    
 return(
<DiceContainer>
<div className="dice">
    <img src={`/images/dice_${currentDice}.png`} 
    onClick={roleDice}
    alt="image" height="200px" width="200px"/>
</div>
<p>
    Click on Dice to roll
</p>
</DiceContainer>
 )
}

const DiceContainer=styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-top:2px;
p{
    font-size:22px;
    padding:2px 2px;
    margin: 0px auto;
}
.dice{
    cursor:pointer;
}
`
export default RoleDice;