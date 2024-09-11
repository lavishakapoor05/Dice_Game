import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
import { FilledButton, OutlineButton } from "./Button";
const GamePlay=()=>{
    const[error,setError]=useState("");
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState(undefined);
    const[currentDice,setCurrentDice]=useState(1);
    const [showRules, setShowRules] = useState(false);

    const resetScore=()=>{
        setScore(0);
    }
    const randomNumberGenerator=(min,max)=>{
        console.log(Math.floor(Math.random()*(max-min)+min));
        return Math.floor(Math.random()*(max-min)+min);
    }
    const roleDice=()=>{
        if(!selectedNumber){
            setError("Firstly please select any number");
            return;
        }
        setError("");
        const randomNumber=randomNumberGenerator(1,7);
        setCurrentDice(randomNumber);
        
        if(randomNumber==selectedNumber){
            setScore((prev)=>prev+2);
        }
        else{
            setScore((prev)=>prev-2);
        }
    }

 return(

    <Maini>
        <InnerSection>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </InnerSection>
         <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} roleDice={roleDice} />
         <div style={{
              display: "flex",
              flexDirection:"column",
              alignItems:"center",
              gap:"10px"
            }}>
         <FilledButton onClick={resetScore}>
            Reset Score
         </FilledButton>
         <OutlineButton onClick={()=>{setShowRules((prev)=>!prev)}}>
            {showRules?"Hide":"Show"}Rules
         </OutlineButton>
         {showRules&&<Rules/>}
         </div>
        </Maini>
    
 )
}

const Maini=styled.div`
background-color:white;
width:100%;
height:96vh;

`
const InnerSection=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:0px auto;
  padding:10px;

`
export default GamePlay;