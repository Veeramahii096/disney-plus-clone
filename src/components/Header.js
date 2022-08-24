import React from 'react'
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
           <img src="/images/home-icon.svg" />
           <span>
            HOME
           </span>
        </a>
        <a>
           <img src="/images/search-icon.svg" />
           <span>
            SEARCH
           </span>
        </a>
        <a>
           <img src="/images/watchlist-icon.svg" />
           <span>
            WATCHLIST
           </span>
        </a>
        <a>
           <img src="/images/original-icon.svg" />
           <span>
            ORIGINALS
           </span>
        </a>
        <a>
           <img src="/images/movie-icon.svg" />
           <span>
            MOVIES
           </span>
        </a>
        <a>
           <img src="/images/series-icon.svg" />
           <span>
            SERIES
           </span>
        </a>
      </NavMenu>
      <UserImg  src="https://lh3.googleusercontent.com/9ixc7WWHBtuXfHx5sNrruk0h2hMgwfIf1-qix4UIViWRuHjyahvP1BLJz7dFrBUy5tsMmLw_-gO4Pxzyly1Uf5jNRPmXNyYXrGOprp8Z9S7-vMj7DzWopVvofull45nZTYxQ6iX-fYywJcXtBas1vbXpyYeua4CaxecH6ZtnuPV2YBo53SjdlIA0siK-ck_wK97oUnLWsHC7s86i2sLGVJ9-EEyLdrYtVBf6QVIlyPcmlpPnPoUHrgRrnxRnflmMMk2E_M4w2OOL0PEjJeXUjivXbiZoZ2oeWQcNjOFs0zrL_8s6GeP5o13c30JqDd3NBmykXjlY4EM0de-ltj_nHdqdZCMbL1gFVZTKdqICdqWHwA33D_8Mt4yGGk-mm8xFS4fyU28aSPLoglCe6AKDk7VTTgjjMHWjVxUHh-IfeniArNMOJ_BtrBx72Y6vYiDTnau9mjS95oWg9kObHOzqvE9xRb-TXMtJlq9Sb7tQxlJYybevmqiTgJu3ZBNwPpvtx-2DimFXV7i4uPVcJJJvviCNb3Ftz0zA2bruwR2Q0W7Cmoo6Vyw5e_S9VWAtWCjRp8WNyp6ZzqbyaYPQANC8tZn0JnTN02Z-Abuy3rEW8-6OFb_58SX1KQHJsrjn6EQq14zTfo3onDUhMJIqN0cGJ1pPAAVvhaP8fKYo2cwMdXY6Z34FeTD3QNsfsHoRK5vYYCjmwhOhuOtWXRaoIWyixgDQBBpHnViWiSCHTOGsDST4t0jCzxMYUxYhVHY=w648-h486-no?authuser=0"/>
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
`
const Logo=styled.img`
width:80px;
`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
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
`