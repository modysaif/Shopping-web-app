import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCustomHook } from './CustomHook'
import {Context} from '../App'
const MainImage = styled.div`
  transition: 0.3s;
`
const ImageDis = styled.div`

  width: 70%;
`
const ImageTitle = styled.h1`
  font-size: 50px;
  color: #f8f8f8;
text-transform: capitalize;
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
  padding-top: 4%;
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
const FurnitureContainer = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 10%;
`

const ProductTitle = styled.h1`
  text-align: center;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    background-color:#8ed40b;
    width: 5%;
    height: 0.5vh;
    top: 110%;
    left: 47%; }
`

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 315px);
  gap: 10px;
  margin-top: 40px;

`
 

const CategoriesImge = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  
`

const ParentCategories = styled.div`
background-color: #ebebeb;
border-radius: 10px;

`

const Title = styled.h3`
  margin-bottom: 15px;
  color: #000000;
`
const Discription = styled.h4`
color: #8eca1f;
`
const Dis = styled.div`
padding: 15px;

`
const Watch = () => {
  const myContext = useContext(Context)

  const {data} = useCustomHook('https://api.escuelajs.co/api/v1/categories/2/products')
  return (
    <>
    <MainImage style={{ backgroundImage: `url(https://wallpaperaccess.com/full/796121.jpg)` , width:"100%" ,  height:"60vh",backgroundSize:"cover",objectFit:"cover"
}}>
  <Container>
   <ImageDis>
 <ImageTitle>Adding you a new Style Giving a Style that matters   </ImageTitle>
 <ImageDisc>Up to 70% just for you</ImageDisc>
 <Button>Explore More</Button>
   </ImageDis>
  </Container>
     </MainImage> 
     <FurnitureContainer>
      <ProductTitle>Recently Arrived!</ProductTitle>
      <Categories>
         {data.map((item)=>{
          return  <ParentCategories key={item.id}>
                    <CategoriesImge src={item.images} />
          
            <Dis>
              <Title>{item.title}</Title>
              <Discription>Price:- $ {item.price}</Discription>
              <Button onClick={()=>myContext.dispatch({type:"Add To Cart" , payload:item})}>Add To Cart</Button>
            </Dis>
          </ParentCategories>
               
         
         })}
         
          </Categories>
     </FurnitureContainer>
  
   </>
  )
}

export default Watch