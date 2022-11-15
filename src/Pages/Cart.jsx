import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../App'



const Container = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 4%;
  `
const CartTitle = styled.h1``

const CartParent = styled.div`
display: flex;
 

`;
const CartItem  = styled.div`
flex: 2;

`;
const CartContainer = styled.div`
display: flex;
gap: 20px;
padding: 20px;
margin: 10px 0px;
box-shadow: -4px 6px 14px -3px rgba(0,0,0,0.93);
-webkit-box-shadow: -4px 6px 14px -3px rgba(0,0,0,0.93);
-moz-box-shadow: -4px 6px 14px -3px rgba(0,0,0,0.93);
border-radius: 10px;
width: 70%;
`
const CartItemImage = styled.img`
 width: 40%;
  height: 40vh;
  border-radius: 5px;
`;

const CartDesParent = styled.div`

`
const CartItemTitle = styled.h3`
font-size: 25px;
margin-bottom: 15px;
`;
const CartItemDes = styled.p`
color: #4e4e4e;
line-height: 1.7;
margin-bottom: 15px;
`;
const CartPrice = styled.h3``
const CartSummery = styled.div`
flex: 1;
position: relative;
`;
const SummeryTitle = styled.h2`
font-weight: bold;
`
const SummeryDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2 ,100px);
  justify-content: space-between;
  grid-row-gap: 20px;
  margin-top: 20px;

`
const Items = styled.h3``
const Price = styled.h2``


const CartSummeryGb = styled.div`
background-color: silver;
height: 30vh;
width: 70%;
padding: 25px;
border-radius: 3px;
position: sticky;
top: 10%;
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


const Cart = () => {
  const myContext = useContext(Context)
  const myData = myContext.state.Cart
  const myCart = myData.length
 const reducePrice = myData.reduce((acc ,total)=>{
  return acc + total.price
 },0) 



  return (
    <Container>
     {myCart? <CartTitle>Your Have  {myCart} Items</CartTitle>: <CartTitle>Your Cart is Empty</CartTitle>}
      <CartParent>
        <CartItem>
          {myData.map((items, key)=> {
            return <CartContainer key={key}>
            <CartItemImage src={items.images} />
            <CartDesParent>
              <CartItemTitle>{items.title}</CartItemTitle>
              <CartItemDes>{items.description}</CartItemDes>
              <CartPrice>Price: ${items.price}</CartPrice>
              <Button onClick={()=>myContext.dispatch({type:"Remove from Cart" , payload:items})}>Cancel</Button>
            </CartDesParent>
            </CartContainer>
      
          })}
        </CartItem>
        <CartSummery>
         <CartSummeryGb>
          <SummeryTitle>Order Summery</SummeryTitle>
          <SummeryDetails>
          <Items>Total Price</Items>
           <Price>$ {reducePrice}</Price>
          </SummeryDetails>
          <Button>Buy Now</Button>
         </CartSummeryGb>
        </CartSummery>
      </CartParent>
     
    </Container>
  )
}

export default Cart