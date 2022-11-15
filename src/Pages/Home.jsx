import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import clothes from '../Images/6097699.jpg'
import ProductSection from '../Component/ProductSection'
import Data from '../Component/Data'

const MainImage = styled.div`
  transition: 0.3s;
`
const ImageDis = styled.div`

  width: 70%;
`
const ImageTitle = styled.h1`
  font-size: 50px;
  color: #f8f8f8;

`

const ImageDisc = styled.p`
color: #dfdfdf;
padding-top: 30px;
font-size: 20px;
color: #8eca1f;
`

const Container = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 10%;
`
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 15px ;
  border: none;
  background-color: #000000;
  color: white;
  font-size: 15px;
  border-radius: 3px;
`

const Home = () => {
const [index , setIndex] = useState(0)
const {img , id , title ,disc} = Data[index]
const handleChange = ()=>{
  setTimeout(()=>{
    if(index < Data.length - 1){
      setIndex(index + 1);
    }
  },3000)
}

useEffect(()=>{
  handleChange()
})
  return (
    <>
     <MainImage style={{ backgroundImage: `url(${img})` , width:"100%" ,  height:"90vh",backgroundSize:"cover",objectFit:"cover"
 }}>
   <Container>
    <ImageDis>
  <ImageTitle>{title}</ImageTitle>
  <ImageDisc>{disc}</ImageDisc>
  <Button>Explore More</Button>
    </ImageDis>
   </Container>
      </MainImage> 
     <ProductSection />
   
    </>
  )
}

export default Home