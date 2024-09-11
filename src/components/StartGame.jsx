import styled from "styled-components";
const StartGame=({toggle})=>{
    return(
 <Container>
    <img src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="diceimage"/>
    <div className="heading">
        <h1>Dice Game</h1>
        <div>
        <Button onClick={toggle}>
            Play Game
        </Button>
        </div>
    </div>
 </Container>
    )
}
const Container=styled.div`
display:flex;
width:1280px;
margin:0px auto;
height:90vh;
align-items:center;
.heading div{
    display:flex;
    justify-content:center;
}
.heading h1{
    color:white;
    font-size:85px;
    white-space:nowrap;
    margin-bottom:20px;
}
img{
    height:100%;
    width:75%;
}

`
const Button=styled.button`
color:black;
background-color:white;
padding:10px;
font-size:30px;
font-weight:500;
border-radius:20px;
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
export default StartGame;