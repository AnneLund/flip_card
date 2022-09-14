import styled from "styled-components";

const StyledCard = styled.figure`
width: 200px;
height: 300px;
padding: 1em;
margin: 2em;
perspective: 1000px;


.card{
position: relative;
box-shadow: #000000b0 5px 5px 5px;
background-color: #add8e68a;
width: 100%;
height: 100%;
text-align: center;
transition: transform 1s;
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 1.0);
transform-style: preserve-3d;

.front{
background-color: lightblue;
  color: black;
  text-align: center;

  img{
    width: 100%;
    margin-top: 10px;
  }

  figcaption{
    padding: 15px 5px;
  }
}

.back{
  transform: rotateY(180deg);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px; 

  h3{
    margin: 5px;
  }

  p{
    margin: 0;
  }
}

.front, .back{
position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}


}

&:hover .card{
    transform: rotateY(180deg);   
}

`

export default StyledCard;