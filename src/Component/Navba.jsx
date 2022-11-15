import styled from 'styled-components'
import {FaShopify , FaUserAlt} from 'react-icons/fa'
import {BsSearch , BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../App'
const Nav = styled.nav`
  background-color: #ffffff;
  width: 100%;
  min-height: 60px;
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavParent = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 0.7%;
`

const NavFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
color: #000000;
display: flex;
align-items: center;
`
const LogoTitle = styled.h1`
padding: 0px 10px;
`

const MyLinks = styled.div`
  
`

const Links = styled.span`
 padding:0px 20px; 
 color: #000000;

`

const NavbarIcons= styled.div`
padding: 0px 10px;
color: #000000;
`
// const Image = styled.img`
// `

const Alert = styled.span`
position: absolute;
top: 10%;
right: 3%;
background-color:#8eca1f;
color: white;
padding: 0.5px;
border-radius: 50px;
width:13px ;
display: flex;
justify-content: center;
`
const Navba = () => {
const myContext = useContext(Context)
const myCart = myContext.state.Cart
const cart = myCart.length
  return (
    <>
    <Nav>
    <NavParent>
      <NavFlex>
       <Logo>
       <FaShopify style={{color:"#8eca1f" , fontSize:"23px"}} />
        <LogoTitle>Shopify</LogoTitle>
          </Logo>
       <MyLinks>
        <Link to='/'><Links>Home</Links></Link>
        <Link to='/Clothes'><Links>Clothes</Links></Link>
        <Link to='/Shose'><Links>Shoe</Links></Link>
        <Link to='/Furniture'><Links>Furniture</Links></Link>
        <Link to='/Watch'><Links>Watch</Links></Link>
       </MyLinks>
       <NavbarIcons>
        <BsSearch style={{padding:"10px" , fontSize:"20px"}} />
        <FaUserAlt style={{padding:"10px" , fontSize:"20px"}}/>
      
        <Link to='/Cart'>
         
          <BsCartFill  style={{padding:"10px" , fontSize:"20px" , color:"black"}}/>
         <Alert>{cart}</Alert>
          </Link>
             
       </NavbarIcons>

      </NavFlex>
    </NavParent>
    
    </Nav>
    </>
  )
}

export default Navba