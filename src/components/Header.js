<<<<<<< HEAD
import React,{useEffect} from 'react'
import styled from 'styled-components';
import{auth,provider} from "../firebase";
import {selectUserName,selectUserPhoto, setUserLogin,setSignOut} from "../features/user/userSlice";
import{useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userName=useSelector(selectUserName);
  const userphoto=useSelector(selectUserPhoto);
  
  
   const signIn=()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
        let user=result.user
       dispatch(setUserLogin({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
      }
        

       ))
       navigate('/home')
      })

   }
   useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
    if(user){
          dispatch(setUserLogin({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
          }))
          navigate("/home");

          
    }
    
      
      
    })
  },[])

   const signOut=()=>{
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      navigate("/")
    })
   }
  return (
    <Nav> 
        <Logo src="/images/logo.svg" />
        {
          !userName ?(<LoginContainer><Login onClick={signIn}>Login</Login></LoginContainer>):
          <>
           <NavMenu>
        <a>
           <img src="/images/home-icon.svg"alt='' />
=======
import React from 'react'
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
           <img src="/images/home-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            HOME
           </span>
        </a>
        <a>
<<<<<<< HEAD
           <img src="/images/search-icon.svg" alt='' />
=======
           <img src="/images/search-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            SEARCH
           </span>
        </a>
        <a>
<<<<<<< HEAD
           <img src="/images/watchlist-icon.svg" alt=''/>
=======
           <img src="/images/watchlist-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            WATCHLIST
           </span>
        </a>
        <a>
<<<<<<< HEAD
           <img src="/images/original-icon.svg" alt='' />
=======
           <img src="/images/original-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            ORIGINALS
           </span>
        </a>
        <a>
<<<<<<< HEAD
           <img src="/images/movie-icon.svg" alt='' />
=======
           <img src="/images/movie-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            MOVIES
           </span>
        </a>
        <a>
<<<<<<< HEAD
           <img src="/images/series-icon.svg" alt='' />
=======
           <img src="/images/series-icon.svg" />
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
           <span>
            SERIES
           </span>
        </a>
      </NavMenu>
<<<<<<< HEAD
      <UserImg  onClick={signOut} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP-9wcmoUGlNyzbEfhgQVopE3q1NoCnrA8w&usqp=CAU"/>
          </>

        }
     
=======
      <UserImg  src="https://lh3.googleusercontent.com/9ixc7WWHBtuXfHx5sNrruk0h2hMgwfIf1-qix4UIViWRuHjyahvP1BLJz7dFrBUy5tsMmLw_-gO4Pxzyly1Uf5jNRPmXNyYXrGOprp8Z9S7-vMj7DzWopVvofull45nZTYxQ6iX-fYywJcXtBas1vbXpyYeua4CaxecH6ZtnuPV2YBo53SjdlIA0siK-ck_wK97oUnLWsHC7s86i2sLGVJ9-EEyLdrYtVBf6QVIlyPcmlpPnPoUHrgRrnxRnflmMMk2E_M4w2OOL0PEjJeXUjivXbiZoZ2oeWQcNjOFs0zrL_8s6GeP5o13c30JqDd3NBmykXjlY4EM0de-ltj_nHdqdZCMbL1gFVZTKdqICdqWHwA33D_8Mt4yGGk-mm8xFS4fyU28aSPLoglCe6AKDk7VTTgjjMHWjVxUHh-IfeniArNMOJ_BtrBx72Y6vYiDTnau9mjS95oWg9kObHOzqvE9xRb-TXMtJlq9Sb7tQxlJYybevmqiTgJu3ZBNwPpvtx-2DimFXV7i4uPVcJJJvviCNb3Ftz0zA2bruwR2Q0W7Cmoo6Vyw5e_S9VWAtWCjRp8WNyp6ZzqbyaYPQANC8tZn0JnTN02Z-Abuy3rEW8-6OFb_58SX1KQHJsrjn6EQq14zTfo3onDUhMJIqN0cGJ1pPAAVvhaP8fKYo2cwMdXY6Z34FeTD3QNsfsHoRK5vYYCjmwhOhuOtWXRaoIWyixgDQBBpHnViWiSCHTOGsDST4t0jCzxMYUxYhVHY=w648-h486-no?authuser=0"/>
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
    </Nav>
  )
}

export default Header

const Nav=styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
<<<<<<< HEAD

position: sticky;
top: 0;
z-index: 999;


=======
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
`
const Logo=styled.img`
width:80px;
`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
<<<<<<< HEAD

=======
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);
            
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`
const UserImg=styled.img`
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;
<<<<<<< HEAD
`
const Login=styled.div`
border:1px solid #f9f9f9;
padding:8px;
border-radius:4px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0,0.6);
cursor:pointer;

&:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent;
}
`
const LoginContainer=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
=======
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
`