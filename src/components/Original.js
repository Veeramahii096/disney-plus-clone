import React from 'react'
import styled from 'styled-components';
import {selectOriginal} from "../features/Movie/movieSlice";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
function Original() {
    const movies=useSelector(selectOriginal);
  return (
    <Container>
    <h4>Original</h4>
    <Content>
      {movies &&
       movies.map((movie,key)=>(
        <Wrap key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
          <img src={movie.cardImg} alt=''/>
          </Link>
          </Wrap>
       ))
      
      
      }
  
    </Content>
  </Container>
  )
}

export default Original

const Container=styled.div`
`
const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
cursor:pointer;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 /73%) 0px 16px 10px -10px;
 transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

&:hover{
    tramsform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 /73%) 0px 16px 10px -10px;
}
`
const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));`
