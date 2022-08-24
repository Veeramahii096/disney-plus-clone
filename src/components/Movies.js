import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
      <Wrap><img src="https://i.pinimg.com/564x/a2/b5/8c/a2b58c7a2e01fa64db608b47ac4067a6.jpg" alt=''/></Wrap>
      <Wrap><img src="https://i.pinimg.com/564x/a2/b5/8c/a2b58c7a2e01fa64db608b47ac4067a6.jpg" alt=''/></Wrap>
      <Wrap><img src="https://i.pinimg.com/564x/a2/b5/8c/a2b58c7a2e01fa64db608b47ac4067a6.jpg" alt=''/></Wrap>
      <Wrap><img src="https://i.pinimg.com/564x/a2/b5/8c/a2b58c7a2e01fa64db608b47ac4067a6.jpg" alt=''/></Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`
`
const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
 rgb(0 0 0 /73%) 0px 16px 10px -10px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));
`