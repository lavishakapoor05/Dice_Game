import styled from "styled-components";
const TotalScore=({score})=>{
    return(
   <ScoreSection>
    <h1>{score}</h1>
    <p>Your Score</p>
   </ScoreSection> 
)}
const ScoreSection=styled.div`
max-width:200px;
h1{
    font-size:36px;
    font-weight:800;
    text-align:center;
    margin-bottom: 10px;
    padding: 5px;
}
p{
    font-size:26px;
    font-weight:700;
    margin-top:10px;
}
`

export default TotalScore;