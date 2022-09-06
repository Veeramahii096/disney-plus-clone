<<<<<<< HEAD
import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux" ;
import {setMovies} from "../features/Movie/movieSlice"
import NewtoDisney from './NewtoDisney'
import Trending from './Trending'
import Original from './Original'
import { selectUserName } from '../features/user/userSlice'
function Home() {
   const dispatch=useDispatch();
   const userName=useSelector(selectUserName)
  let recommends=[];
  let newDisneys=[];
  let originals=[];
  let trending=[];



 useEffect(()=>{
 db.collection("movies").onSnapshot((snapshot)=>{
  let tempMovies=snapshot.docs.map((doc)=>{
    switch(doc.data().type){
      case 'recommend':
      recommends=[...recommends,{id:doc.id, ...doc.data()}]
      break;
      case 'new':
      newDisneys=[...newDisneys,{id:doc.id, ...doc.data()}]
      break;
      case 'trending':
      trending=[...trending,{id:doc.id, ...doc.data()}]
      break;
      case 'original':
      originals=[...originals,{id:doc.id, ...doc.data()}]
      break;
    }
    
    
    
  })
 

  dispatch(setMovies({
    recommend:recommends,
    newDisney:newDisneys,
    trending:trending,
    original:originals,
  }));

 })
 
 },[userName]) 

 

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
      <Original/>
      <NewtoDisney/>
      <Trending/>
=======
import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      Home
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
    </Container>
  )
}

<<<<<<< HEAD
export default Home 
=======
export default Home
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9

const Container=styled.main`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
<<<<<<< HEAD
overflow-x:hidden;
=======
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
&:before{
    background:url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
}
`
